import "./app.css";
import {
  ValentineCalendar,
  type ValentineCalendarProps,
} from "./components/valentine-calendar";
import { QuestionType } from "./components/valentine-calendar/card";

const CALENDAR_DATA: ValentineCalendarProps["data"] = [
  {
    date: new Date(),
    question: {
      type: QuestionType.QuestionsAboutOthers,
      text: "Beschreibe die Person, die links von dir sitzt in 5 Wörtern.",
    },
    answer:
      "Also wenn du links bist 😉, dann: Schlau, Ambitioniert, Loyal, Süß, Frech",
  },
  {
    date: new Date(),
    question: {
      type: QuestionType.QuestionsAboutOthers,
      text: "Über welche Dinge interressiert sich die Person rechts neben dir am meisten?",
    },
    answer:
      "Also wenn du doch rechts bist 😉, dann versuche ich es mal 😬: Motorräder, Autos, deine Fische und Hundis, nicht Schule, deine Freunde und mich (ofc 😏).",
  },
  {
    date: new Date(),
    question: {
      type: QuestionType.QuestionsAboutOthers,
      text: "Welches Getränk bestellt die Person links neben dir am häufigsten im Restaurant?",
    },
    answer:
      "Wenn du doch wieder links bist 😉, dann folgendes: Dein superduper Kokos-Vanille-Shake (gibt's im Restaurant save nicht though).",
  },
  {
    date: new Date(),
    question: {
      type: QuestionType.Personal,
      text: "Welche sind deine Top 3 Lieblingssongs von Platz 1 bis Platz 3?",
    },
    answer: "Slipknot, Arctic Monkeys, Aynsley Lister",
  },
  {
    date: new Date(),
    question: {
      type: QuestionType.Personal,
      text: "Was unterscheidet dich komplett von allen anderen Personen im Raum?",
    },
    answer: "Das kannst du mir besser beantworten 😉.",
  },
  {
    date: new Date(),
    question: {
      type: QuestionType.Personal,
      text: "Was ist der wertvollste Rat, dein dir jemals jemand gegeben hat?",
    },
    answer: "Pragmatismus siegt - ehemaliger Vorgesetzter.",
  },

  {
    date: new Date(),
    question: {
      type: QuestionType.Personal,
      text: "Welche Top 3 Personen bewunderst du und warum? Fiktiv oder historisch — alles ist erlaubt.",
    },
    answer:
      "Alex - mein ehemaliger Vorgesetzter und mittlerweile Freund. Seine Intelligenz, Eloquenz, Scharfsinnigkeit, sein Humor und seine Bodenständigkeit. Richard Dawkins - Berühmter Atheist. Seine Intelligenz ofc, smart af der boy. Mikesh - bekannter Battlerapper. Seine Intelligenz, Eloquenz, und sein besonderer Style.",
  },
  {
    date: new Date(),
    question: {
      type: QuestionType.Personal,
      text: "Was ist etwas, das du gerne besser verstehen würdest?",
    },
    answer:
      "Technisch gesehen Kubernetes und C#. Ansonsten, ob es das Transzedentale gibt/wie oder ob man etwas erfahren kann, das über die Erfahrung hinaus existiert.",
  },
  {
    date: new Date(),
    question: {
      type: QuestionType.Personal,
      text: "Wie sieht deine Morgenroutine aus? Was machst du, was andere vielleicht nicht machen?",
    },
    answer: "Zähneputzen mit Marschmusik.",
  },
  {
    date: new Date(),
    question: {
      type: QuestionType.Personal,
      text: "Wenn du ein Jahr lanng auf eine Sache verzichten müsstest, was wäre am schwierigsten für dich?",
    },
    answer: "Softdrinks (zero ofc 😊).",
  },
  {
    date: new Date(),
    question: {
      type: QuestionType.Personal,
      text: "Welches Laster hast du?",
    },
    answer: "Bin teilweise süchtig nach Koffein.",
  },
  {
    date: new Date(),
    question: {
      type: QuestionType.Personal,
      text: "Welches sind deine Top 3 Lieblingssongs von Platz 1 bis Platz 3?",
    },
    answer:
      "Unsainted - Slipknot, H377 - Slipknot, Little Wing - Aynsley Lister",
  },
  {
    date: new Date(),
    question: {
      type: QuestionType.Personal,
      text: "Welche Eigenschaft schätzt du an anderen Menschen besonders, welche stößt dich am meisten ab?",
    },
    answer:
      "Ich weiß die Frage hatten wir schon aber ich finde die gut. Was ich schätze: Loyalität und Bodenständigkeit (ich weiß sind 2). Was abstoßend ist: Egozentrisch zu sein.",
  },
  {
    date: new Date(),
    question: {
      type: QuestionType.Personal,
      text: "Will you be my valentine?",
    },
    answer: "Answer me on WhatsApp (yes is the only possible answer).",
  },
].map((d, idx) => ({ ...d, date: new Date(2026, 1, idx + 1) }));

export function App() {
  return (
    <div className="flex flex-col gap-8">
      <div className={"overflow-hidden rounded-xl border"}>
        <img className="h-full w-full object-cover" src="/tori.jpg" />
      </div>

      <div className={"welcome-info"}>
        Hi Tori, <br /> <br />
        ich habe hier etwas für dich zusammengebastelt, dass dich interessieren
        könnte 🙂. <br />
        Dies ist eine Art Adventskalender für den Valentinstag. Jeden Tag öffnet
        sich ein Türchen und offenbart etwas über mich — quality time like.
        <br /> <br />
        Grüße <br /> <br />
        David
      </div>

      <ValentineCalendar data={CALENDAR_DATA} />
    </div>
  );
}
