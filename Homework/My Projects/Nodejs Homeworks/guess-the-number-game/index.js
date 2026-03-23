import path from "node:path";
import { fileURLToPath } from "node:url";
import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";
import fs from "node:fs";
import { playGame, gameEmitter } from "./game.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logPath = path.join(__dirname, "data", "game-log.txt");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

gameEmitter.on("guess", ({ difficultyId, guessValue, outcome }) => {
  const line = `${new Date().toISOString()} ${difficultyId} guess=${guessValue} outcome=${outcome}\n`;
  fs.appendFileSync(logPath, line);
});

gameEmitter.on("invalidGuess", ({ difficultyId, rawInput }) => {
  const line = `${new Date().toISOString()} ${difficultyId} invalid input="${rawInput}"\n`;
  fs.appendFileSync(logPath, line);
});

async function showMenu() {
  console.log("\n1) New game  2) Summary  3) Exit");

  const answer = await rl.question("Choice: ");

  switch (answer) {
    case "1":
      await startGameFlow();
      break;

    case "2":
      await showSummary();
      break;

    case "3":
      console.log("Bye");
      rl.close();
      process.exit(0);

    default:
      console.log("Invalid option");
  }

  await showMenu();
}

async function startGameFlow() {
  let difficulty;

  while (true) {
    difficulty = await rl.question("Difficulty (easy / hard): ");
    difficulty = difficulty.trim().toLowerCase();

    if (difficulty === "easy" || difficulty === "hard") {
      break;
    }

    console.log("Invalid difficulty");
  }

  await playGame(difficulty, rl);
}

async function showSummary() {
  const bestsPath = path.join(__dirname, "data", "bests.json");
  const sessionsPath = path.join(__dirname, "data", "sessions.json");

  const bestsRaw = fs.readFileSync(bestsPath, "utf-8");
  const sessionsRaw = fs.readFileSync(sessionsPath, "utf-8");

  const bests = JSON.parse(bestsRaw);
  const sessions = JSON.parse(sessionsRaw);

  console.log("\n--- Best scores ---");
  console.log("easy:", bests.easy);
  console.log("hard:", bests.hard);
  console.log("\n--- Sessions ---");
  console.log("Total:", sessions.length);

  console.log(JSON.stringify(sessions, null, 2));
}

showMenu().catch(console.error);
