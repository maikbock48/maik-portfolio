export const FPS = 30;
export const WIDTH = 1280;
export const HEIGHT = 720;

// 4 scenes x 165 frames, cross-cut with 3 x 20-frame transitions
// = 660 - 60 = 600 frames = exactly 20s @ 30fps
export const SCENE_FRAMES = 165;
export const TRANSITION_FRAMES = 20;
export const DURATION_IN_FRAMES =
  SCENE_FRAMES * 4 - TRANSITION_FRAMES * 3;

export const ACCENT = "#00d9ff";
export const ACCENT_DIM = "#00b8ff";
export const BG_PRIMARY = "#1c1c22";
export const BG_DEEP = "#101014";
export const BG_MID = "#1a1a22";
