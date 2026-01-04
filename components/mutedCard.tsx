import { Star } from "lucide-react";

export type MutedCardData = {
  id: string;
  location: string;
  inviter: string;
  time: string;
  favorite: boolean;
};

type Props = {
  data: MutedCardData;
};

export function MutedCard({ data }: Props) {
  const { location, inviter, time, favorite } = data;

  return (
    <div
      className="
        w-full rounded-md border border-outline
        px-3 py-2 pr-5
        flex items-center gap-3
      "
    >
      {/* content */}
      <div className="flex-1 ">
        <div className="font-medium">{location}</div>

        <div className="text-sm text-muted-foreground">
          Invited by {inviter}
        </div>

        <div className="text-xs text-muted-foreground">{time}</div>
      </div>

      {/* favorite */}
      <Star
        className={`
          h-6 w-6 shrink-0
          ${favorite ? "fill-accent text-accent" : "text-accent"}
        `}
        strokeWidth={1.5}
      />
    </div>
  );
}
