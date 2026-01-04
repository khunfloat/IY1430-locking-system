"use client";

import { AccessCard } from "@/components/accessCard";
import { MutedCard } from "@/components/mutedCard";
import OngoingCard from "@/components/ongoingCard";

const keys = [
  {
    id: "1",
    location: "Condo A – Lobby Door",
    inviter: "admin@condo.com",
    time: "08:00 – 22:00",
    favorite: true,
  },
  {
    id: "2",
    location: "Office B – Main Entrance",
    inviter: "hr@company.com",
    time: "09:00 – 18:00",
    favorite: false,
  },
  {
    id: "3",
    location: "Gym C",
    inviter: "staff@gym.com",
    time: "24 hours",
    favorite: false,
  },
  {
    id: "5",
    location: "Gym C",
    inviter: "staff@gym.com",
    time: "24 hours",
    favorite: false,
  },
];

export default function KeysPage() {
  return (
    <div className="px-3 pt-10">
      <h1 className="text-3xl font-semibold ">Your Keys</h1>
      <input
        className="bg-card rounded-md w-full h-10 px-4 flex justify-center focus:outline-none focus:ring-0 mt-3"
        placeholder="Search by location or your inviter"
      />
      <h2 className="text-xl font-semibold mt-5">On going event</h2>
      <div className="mt-3">
        <OngoingCard />
      </div>

      <h2 className="text-xl font-semibold mt-6">Upcoming events</h2>
      <div className="mt-3 flex flex-col gap-2">
        {keys.map((item) => {
          return <AccessCard data={item} key={item.id} />;
        })}
      </div>

      <h2 className="text-xl font-semibold mt-6">Past events</h2>
      <div className="mt-3 flex flex-col gap-2 mb-4">
        {keys.map((item) => {
          return <MutedCard data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}
