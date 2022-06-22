import { useAnimationTimer } from "./useAnimationTimer";
import { easing } from "ts-easing";

import { EasingKey } from "@/types";

export function useAnimation(
  easingKey: EasingKey = "linear",
  duration = 500,
  delay = 0,
): number {
  const elapsed = useAnimationTimer(duration, delay);
  const n = Math.min(1, elapsed / duration);
  return easing[easingKey](n)
}
