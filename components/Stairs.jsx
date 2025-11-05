import { animate, motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: {
    bottom: "0%",
  },
  animate: {
    bottom: "100%",
  },
  exit: {
    bottom: ["100%", "0%"],
  },
};

// calculate the reverse index fot staggred delay
const reverseIndex = (index) => {
  const totalSteps = 12; // number of steps
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render 12 motion divs, each representing a step of the stairs.
  Each div will have the same animation defined by the stairsAnimation object.
  The delay for each div is calculated sinamically based on it's reversed index,
  creating a staggered effect with decreasing delay for each subsequent step.
  */}
      {[...Array(12)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.2,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.04,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
