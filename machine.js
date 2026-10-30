// machine.js — the useless machine, and the 10-second challenge around it
//
// The machine has exactly one rule: whenever the switch is ON, the lid opens,
// an arm comes out, flips it OFF, and the lid closes. The challenge just counts
// how many times you can flip it ON before time runs out.

const switchBtn = document.getElementById("switch");
const lid = document.getElementById("lid");
const arm = document.getElementById("arm");
const speech = document.getElementById("speech");
const refusedEl = document.getElementById("refused");
const startBtn = document.getElementById("start");
const gameStatus = document.getElementById("gameStatus");
const bestEl = document.getElementById("best");

const SAYINGS = ["No.", "Not today.", "Please stop.", "Why?", "Okay, fine.", "Again?", "You win this round."];

let refused = 0;
let busy = false; // the arm is out right now — ignore extra flips
let playing = false;
let score = 0;
let best = 0;
let timeLeft = 0;
let timerId = null;

// How fast the machine reacts: the challenge makes it quicker with every point.
function reactionTime() {
  return playing ? Math.max(300, 650 - score * 25) : 650;
}

// The machine's one move: open the lid, poke the switch off, close the lid.
function machineFlipsItOff() {
  busy = true;
  speech.textContent = "…";

  const react = reactionTime();

  setTimeout(() => lid.classList.add("open"), 200);
  setTimeout(() => {
    arm.classList.add("out");
    switchBtn.classList.remove("on");
    switchBtn.textContent = "OFF";
    switchBtn.setAttribute("aria-pressed", "false");
    refused += 1;
    refusedEl.textContent = refused;
    speech.textContent = SAYINGS[(refused - 1) % SAYINGS.length];
  }, 200 + react);
  setTimeout(() => {
    arm.classList.remove("out");
    lid.classList.remove("open");
    busy = false;
  }, 200 + react + 450);
}

switchBtn.addEventListener("click", () => {
  if (busy) return; // the arm is already on its way
  if (switchBtn.classList.contains("on")) return;

  switchBtn.classList.add("on");
  switchBtn.textContent = "ON";
  switchBtn.setAttribute("aria-pressed", "true");

  if (playing) {
    score += 1;
    gameStatus.textContent = score + " flips so far";
  }

  machineFlipsItOff();
});

startBtn.addEventListener("click", () => {
  if (playing) return;

  playing = true;
  score = 0;
  timeLeft = 10;
  startBtn.disabled = true;
  gameStatus.textContent = "Go! 10 seconds";

  timerId = setInterval(() => {
    timeLeft -= 1;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      playing = false;
      startBtn.disabled = false;
      if (score > best) {
        best = score;
        bestEl.textContent = best;
      }
      const newBest = score === best && score > 0 ? " — new best!" : "";
      gameStatus.textContent = "Time's up: you flipped it " + score + " times." + newBest;
    } else {
      gameStatus.textContent = score + " flips · " + timeLeft + " s left";
    }
  }, 1000);
});
