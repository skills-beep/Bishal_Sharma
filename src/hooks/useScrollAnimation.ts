
import { useRef } from "react";
import { useInView } from "framer-motion";

export function useScrollAnimation(amount: number = 0.2, once: boolean = true) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount, once });
  return { ref, isInView };
}
