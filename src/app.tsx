import "./app.css";
import {
  ValentineCalendar,
  type ValentineCalendarProps,
} from "./components/valentine-calendar";

const CALENDAR_DATA: ValentineCalendarProps["data"] = [
  {
    date: new Date(2026, 0, 26),
    question: "Dies ist eine Frage?",
    answer: "Dies ist eine Antwort.",
  },
  {
    date: new Date(2026, 0, 27),
    question: "Dies ist eine Frage?",
    answer: "Dies ist eine Antwort.",
  },
  {
    date: new Date(2026, 0, 28),
    question: "Dies ist eine Frage?",
    answer: "Dies ist eine Antwort.",
  },
  {
    date: new Date(2026, 0, 29),
    question: "Dies ist eine Frage?",
    answer: "Dies ist eine Antwort.",
  },
];

export function App() {
  return (
    <div className="flex flex-col gap-8">
      <img src="/tori.webp" />
      <div>
        Hi Tori, <br />
        ich habe hier etwas für dich zusammengebastelt, dass dich interessieren
        könnte. <br />
        Das hier ist eine Art Adventskalender für den Valentinstag. <br />
        Jeden Tag öffnet sich ein Türchen und offenbart etwas über mich —
        quality time like.
      </div>
      <br />
      <ValentineCalendar data={CALENDAR_DATA} />
    </div>
  );
}
