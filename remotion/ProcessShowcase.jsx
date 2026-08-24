import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { loadFont } from "@remotion/google-fonts/Poppins";
import { DiscoverScene } from "./scenes/DiscoverScene";
import { DesignScene } from "./scenes/DesignScene";
import { BuildScene } from "./scenes/BuildScene";
import { DeployScene } from "./scenes/DeployScene";
import { SCENE_FRAMES, TRANSITION_FRAMES } from "./constants";

const { fontFamily } = loadFont();

const copy = {
  discover: {
    eyebrow: "Step 01",
    title: "Discover",
    subtitle: "A relaxed first conversation about goals, audience, and what success looks like.",
  },
  design: {
    eyebrow: "Step 02",
    title: "Design",
    subtitle: "A visual direction built around your brand — shared for feedback before any code.",
  },
  build: {
    eyebrow: "Step 03",
    title: "Build",
    subtitle: "Clean, responsive, fast code — tested across real devices, not just the one on my desk.",
  },
  deploy: {
    eyebrow: "Step 04",
    title: "Deploy & Support",
    subtitle: "Live on your domain, with a support window for the first fixes and tweaks.",
  },
};

const transition = () => (
  <TransitionSeries.Transition
    presentation={slide({ direction: "from-right" })}
    timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
  />
);

export const ProcessShowcase = () => {
  return (
    <AbsoluteFill style={{ fontFamily, background: "#101014" }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={SCENE_FRAMES}>
          <DiscoverScene {...copy.discover} />
        </TransitionSeries.Sequence>
        {transition()}
        <TransitionSeries.Sequence durationInFrames={SCENE_FRAMES}>
          <DesignScene {...copy.design} />
        </TransitionSeries.Sequence>
        {transition()}
        <TransitionSeries.Sequence durationInFrames={SCENE_FRAMES}>
          <BuildScene {...copy.build} />
        </TransitionSeries.Sequence>
        {transition()}
        <TransitionSeries.Sequence durationInFrames={SCENE_FRAMES}>
          <DeployScene {...copy.deploy} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
