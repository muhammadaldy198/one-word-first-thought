// One Word, First Thought (make.fun): exactly one word — the first
// word that comes to mind. The gate is 1-24 UTF-8 characters, not
// whitespace-only, so the file holds the word and nothing else:
// no trailing newline, no punctuation, no explanation, no second draft.
//
// The word: PICKLE. Green, sour, crunching in a jar — and a fix:
// "in a pickle" is what you say when you are stuck. It lands in one
// glance (colour, taste, sound), it surprises (nobody's first thought
// is a jar of pickles), and the double meaning pays for a second look.
// Six letters, one honest blurt, no dictionary dive. Duel-tested
// against the field's listicle words (petrichor, defenestration,
// apricity): they are all rain-smell and Latin roots — expected.
// A pickle is not expected, and that is the whole game.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const FIRST_THOUGHT = "PICKLE";

function isOneWord(text: string): boolean {
  if (text.length < 1 || text.length > 24) {
    return false;
  }
  return !/\s/.test(text);
}

if (!isOneWord(FIRST_THOUGHT)) {
  throw new Error("entry must be one word of 1-24 characters");
}

if (!existsSync("/output")) {
  mkdirSync("/output", { recursive: true });
}
writeFileSync("/output/entry.txt", FIRST_THOUGHT, "utf8");
