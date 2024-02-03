export default function getScrollAnimation(direction: string) {
  let x = 0;
  let y = 0;
  switch (direction) {
    case "left":
      x = 150;
      break;
    case "right":
      x = -150;
      break;
    case "top":
      y = -150;
      break;
    case "bottom":
      y = 150;
      break;
  }
  return {
    offscreen: {
      x: x,
      y: y,
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
