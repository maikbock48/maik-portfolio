export const typedText = (text, frame, startFrame, speed = 1.6) => {
  const chars = Math.max(0, Math.floor((frame - startFrame) * speed));
  return text.slice(0, Math.min(chars, text.length));
};
