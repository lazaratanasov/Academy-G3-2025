import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { v4 as uuidv4 } from "uuid";
import { EventEmitter } from "node:events";

class Game extends EventEmitter {}

export const gameEmitter = new Game();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function playGame(difficulty, rl) {
  const maxNumber = difficulty === "easy" ? 50 : 100;
  const secretNumber = Math.floor(Math.random() * maxNumber) + 1;
  let attempts = 0;

  while (true) {
    const input = await rl.question("Your guess: ");
    const trimmedInput = input.trim();
    const guessNumber = Number(trimmedInput);

    const isWholeNumber = Number.isInteger(guessNumber);
    const isInRange = guessNumber >= 1 && guessNumber <= maxNumber;

    if (!isWholeNumber || !isInRange) {
      console.log(`Enter a whole number between 1 and ${maxNumber}.`);
      gameEmitter.emit("invalidGuess", {
        difficultyId: difficulty,
        rawInput: trimmedInput,
      });
      continue;
    }

    attempts++;

    if (guessNumber > secretNumber) {
      console.log("too high");

      gameEmitter.emit("guess", {
        difficultyId: difficulty,
        guessValue: guessNumber,
        outcome: "high",
      });
    } else if (guessNumber < secretNumber) {
      console.log("too low");

      gameEmitter.emit("guess", {
        difficultyId: difficulty,
        guessValue: guessNumber,
        outcome: "low",
      });
    } else {
      console.log(`correct — ${attempts} guesses.`);
      gameEmitter.emit("guess", {
        difficultyId: difficulty,
        guessValue: guessNumber,
        outcome: "win",
      });

      const sessionId = uuidv4();
      const completedAt = new Date().toISOString();
      saveSession(sessionId, difficulty, attempts, completedAt);
      updateBest(difficulty, attempts, sessionId, completedAt);
      return attempts;
    }
  }
}

function saveSession(sessionId, difficulty, attempts, completedAt) {
  const sessionsPath = path.join(__dirname, "data", "sessions.json");
  const raw = fs.readFileSync(sessionsPath, "utf-8");
  const sessions = JSON.parse(raw);

  sessions.push({
    id: sessionId,
    difficultyId: difficulty,
    guessCount: attempts,
    completedAt,
  });

  fs.writeFileSync(sessionsPath, JSON.stringify(sessions, null, 2));
}

function updateBest(difficulty, attempts, sessionId, completedAt) {
  const bestsPath = path.join(__dirname, "data", "bests.json");
  const raw = fs.readFileSync(bestsPath, "utf-8");
  const bests = JSON.parse(raw);

  const currentBest = bests[difficulty];

  const isNewBest = currentBest === null || attempts < currentBest.guessCount;

  if (isNewBest) {
    bests[difficulty] = {
      guessCount: attempts,
      sessionId,
      setAt: completedAt,
    };

    fs.writeFileSync(bestsPath, JSON.stringify(bests, null, 2));
  }
}
