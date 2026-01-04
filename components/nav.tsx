"use client";

import { Ellipsis, Home, KeyRound, UserRoundPlus } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Keys", href: "/keys", icon: KeyRound },
  { label: "Invite", href: "/invite", icon: UserRoundPlus },
  { label: "More", href: "/settings", icon: Ellipsis },
];

export function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-t-outline bg-background">
      <div className="flex h-12">
        {navItems.map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          const Icon = item.icon;

          return (
            <button
              key={item.href}
              onClick={() => router.push(item.href)}
              className={`
                flex-1 h-full flex flex-col items-center justify-start gap-1 pt-3 mx-6
                ${
                  active
                    ? "text-accent border-t-2 border-t-accent"
                    : "text-foreground border-t-2 border-t-background"
                }
              `}
            >
              <Icon className="h-5 w-5" strokeWidth={3} />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
