import { motion } from "motion/react";
import {
  ValentineCaldendarCard,
  type ValentineCaldendarCardData,
} from "./card";

export interface ValentineCalendarProps {
  data: ValentineCaldendarCardData[];
}

export function ValentineCalendar({ data: cards }: ValentineCalendarProps) {
  const initial = { opacity: 0, transform: "translateY(100%)" };
  const whileInView = {
    opacity: 1,
    transform: "translateY(0%)",
    transition: {
      duration: 0.5,
    },
  };
  const viewport = { margin: "250px", once: true };

  return (
    <div className="flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap">
      {cards.map((card) => (
        <motion.div
          initial={initial}
          whileInView={whileInView}
          viewport={viewport}
        >
          <ValentineCaldendarCard data={card} key={card.date.getTime()} />
        </motion.div>
      ))}
    </div>
  );
}
