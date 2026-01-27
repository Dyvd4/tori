import dayjs from "dayjs";
import { Button } from "../../button";
import { FlipCard } from "../../flip-card";
import { Lock } from "../../icons";

export enum QuestionType {
  Personal = "Persönlich",
  Memory = "Erinnerung",
  FunnyQuestions = "Lustige Fragen",
  QuestionsAboutOthers = "Fragen über andere",
}

export interface ValentineCaldendarCardData {
  date: Date;
  question: {
    /** the question type */
    type: QuestionType;
    /** the question */
    text: string;
  };
  answer: string;
}

interface ValentineCaldendarCardProps {
  data: ValentineCaldendarCardData;
}

export function ValentineCaldendarCard({
  data: { date, question, answer },
}: ValentineCaldendarCardProps) {
  const isDisabled = date.getTime() > new Date().getTime();

  return (
    <FlipCard
      front={(toggleCard) => {
        return (
          <div className={"flex h-full flex-col justify-between gap-4"}>
            <div>
              {!isDisabled && (
                <>
                  <h1 className={"font-[Priestacy]"}>{question.type}</h1>
                  <br />
                  <br />
                  <div>{question.text}</div>
                </>
              )}
              {isDisabled && (
                <>
                  <Lock width={"100%"} />
                </>
              )}
            </div>
            <div className="flex justify-center">
              <Button onClick={() => toggleCard()} disabled={isDisabled}>
                {isDisabled
                  ? dayjs(date).locale("de").format("DD.MM.YY")
                  : "Antwort"}
              </Button>
            </div>
          </div>
        );
      }}
      back={(toggleCard) => (
        <div className={"flex h-full flex-col justify-between gap-4"}>
          <div>{answer}</div>
          <div className="flex justify-center">
            <Button onClick={() => toggleCard()} disabled={isDisabled}>
              Frage
            </Button>
          </div>
        </div>
      )}
      mode="custom-click"
    ></FlipCard>
  );
}
