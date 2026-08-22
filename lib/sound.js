let ctx;

function getContext() {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    ctx = new AudioCtx();
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

function tone(freq, duration, type = "sine", startDelay = 0, peak = 0.15) {
  const audioCtx = getContext();
  if (!audioCtx) return;
  const start = audioCtx.currentTime + startDelay;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(peak, start + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(start);
  osc.stop(start + duration + 0.02);
}

function sweep(fromFreq, toFreq, duration, type = "sine", peak = 0.15) {
  const audioCtx = getContext();
  if (!audioCtx) return;
  const start = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(fromFreq, start);
  osc.frequency.exponentialRampToValueAtTime(toFreq, start + duration);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(peak, start + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(start);
  osc.stop(start + duration + 0.02);
}

export const playClick = () => tone(520, 0.08, "square", 0, 0.08);
export const playPop = () => sweep(180, 60, 0.18, "sine", 0.18);
export const playDing = () => {
  tone(880, 0.4, "sine", 0, 0.12);
  tone(1318, 0.4, "sine", 0.06, 0.08);
};
export const playBoing = () => sweep(220, 440, 0.25, "triangle", 0.15);
export const playSwoosh = () => sweep(900, 200, 0.3, "sine", 0.1);
export const playTick = () => tone(1200, 0.04, "square", 0, 0.06);
