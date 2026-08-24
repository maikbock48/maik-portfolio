import { Composition } from "remotion";
import { ProcessShowcase } from "./ProcessShowcase";
import { DURATION_IN_FRAMES, FPS, WIDTH, HEIGHT } from "./constants";

export const RemotionRoot = () => {
  return (
    <Composition
      id="ProcessShowcase"
      component={ProcessShowcase}
      durationInFrames={DURATION_IN_FRAMES}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
