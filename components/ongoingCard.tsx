"use client";

export default function OngoingCard() {
  return (
    <>
      <div
        className="
        w-full bg-card rounded-t-md
        px-3 py-2 pr-5
        flex items-center gap-3 
      "
      >
        {/* content */}
        <div className="flex-1">
          <div className="font-medium">location</div>

          <div className="text-sm text-muted-foreground">Invited by Float</div>

          <div className="text-xs text-muted-foreground">now</div>
        </div>
      </div>
      <div className="bg-accent text-background text-sm px-3 py-2 rounded-b-md">
        Open QR Code
      </div>
    </>
  );
}
