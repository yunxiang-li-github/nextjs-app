"use client";

import {
  UserCircleIcon,
  HomeIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  {
    name: "Badge",
    href: "/badge",
    icon: UserCircleIcon,
  },
  {
    name: "Follow the pointer",
    href: "/follow-the-pointer",
    icon: CursorArrowRaysIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
              {
                "bg-gray-900 text-white": pathname === link.href,
                "text-gray-300 hover:bg-gray-700 hover:text-white":
                  pathname !== link.href,
              }
            )}
          >
            <LinkIcon
              className={clsx("mr-3 flex-shrink-0 h-6 w-6", {
                "text-gray-300": pathname === link.href,
                "text-gray-400 group-hover:text-gray-300":
                  pathname !== link.href,
              })}
              aria-hidden="true"
            />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
