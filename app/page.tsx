"use client";

import { AccessCard } from "@/components/accessCard";
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

export default function HomePage() {
  return (
    <div className="h-[calc(100vh-2rem)] flex flex-col">
      <div className="h-[45%]">
        <img src="/maps.jpg" alt="map" className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 -mt-8 rounded-t-2xl bg-background overflow-auto px-3 pt-4">
        <h2 className="text-xl font-semibold ">On going event</h2>
        <div className="mt-3">
          <OngoingCard />
        </div>
        <div className="grid grid-rows-2 mt-6">
          <h1 className="text-xl font-semibold">
            Which key are you looking for
          </h1>
          <input
            className="bg-card rounded-md w-full h-10 px-4 flex justify-center focus:outline-none focus:ring-0"
            placeholder="Search by location or your inviter"
          />
          <div className="mt-3 flex flex-col gap-2">
            {keys.map((item) => {
              return <AccessCard data={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
