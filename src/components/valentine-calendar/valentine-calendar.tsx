import {
  ValentineCaldendarCard,
  type ValentineCaldendarCardData,
} from "./card";

export interface ValentineCalendarProps {
  data: ValentineCaldendarCardData[];
}

export function ValentineCalendar({ data: cards }: ValentineCalendarProps) {
  return (
    <div className="flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap">
      {cards.map((card) => (
        <ValentineCaldendarCard data={card} key={card.date.getTime()} />
      ))}
    </div>
  );
}
