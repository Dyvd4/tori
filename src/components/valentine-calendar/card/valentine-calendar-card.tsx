import dayjs from "dayjs";
import { Button } from "../../button";
import { FlipCard } from "../../flip-card";
import { Lock } from "../../icons";

export interface ValentineCaldendarCardData {
  date: Date;
  question: string;
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
      front={(handleClick) => {
        return (
          <div className={"flex h-full flex-col justify-between gap-4"}>
            <div>
              {!isDisabled && <>{question}</>}
              {isDisabled && (
                <>
                  <Lock width={"100%"} />
                </>
              )}
            </div>
            <div className="flex justify-center">
              <Button onClick={() => handleClick()} disabled={isDisabled}>
                {isDisabled
                  ? dayjs(date).locale("de").format("DD.MM.YY")
                  : "Antwort"}
              </Button>
            </div>
          </div>
        );
      }}
      back={(handleClick) => (
        <div className={"flex h-full flex-col justify-between gap-4"}>
          <div>{answer}</div>
          <div className="flex justify-center">
            <Button onClick={() => handleClick()} disabled={isDisabled}>
              Frage
            </Button>
          </div>
        </div>
      )}
      mode="custom-click"
    ></FlipCard>
  );
}
