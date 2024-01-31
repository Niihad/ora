export default function getScrollAnimation(direction: string) {
  return {
    offscreen: {
      x: direction === "left" ? 150 : 0,
      y: direction === "top" ? 150 : 0,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}
