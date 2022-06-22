import { useAnimationTimer } from "./useAnimationTimer";
import { easing } from "ts-easing";

import type { EasingKey } from "@/types";

export function useAnimation(
  easingKey: EasingKey = "linear",
  duration = 500,
  delay = 0,
  count = 100
) {
  const elapsed = useAnimationTimer(duration, delay);
  const n = Math.min(1, elapsed / duration);
  const result = Number(easing[easingKey](n).toFixed(2));
  return Math.ceil(count * result);
}
