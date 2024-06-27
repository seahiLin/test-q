"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Programs",
    children: [
      {
        label: "All Series",
        href: "/programs",
      },
      {
        label: "AI Impact Series",
        href: "/programs/ai-impact-series",
      },
      {
        label: "AI Master & Guest Speaker Series",
        href: "/programs/ai-master-guest-speaker-series",
      },
      {
        label: "Change Maker Tour and Learn",
        href: "/programs/change-maker-tour-and-learn",
      },
    ],
  },
  {
    label: "Events",
    children: [
      {
        label: "Past Events",
        href: "/events/past",
      },
      {
        label: "Upcoming Events",
        href: "/events/upcoming",
      },
    ],
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <NavigationMenu translate="no">
      <NavigationMenuList>
        {routes.map((route) => (
          <NavigationMenuItem key={route.label} className="relative">
            {route.href ? (
              <Link href={route.href}>
                <Trigger active={pathname === route.href} showIcon={false}>
                  {route.label}
                </Trigger>
              </Link>
            ) : (
              <Trigger
                active={route.children?.some(
                  (child) => pathname === child.href
                )}
              >
                {route.label}
              </Trigger>
            )}
            {route.children && (
              <NavigationMenuContent className="py-3 px-2 !w-fit flex flex-col rounded-lg left-auto -right-5 absolute top-full bg-[#00335F]">
                {route.children?.map((child) => (
                  <NavigationMenuLink
                    key={child.label}
                    href={child.href}
                    active={pathname === child.href}
                    className="py-2 px-5 whitespace-nowrap text-white opacity-80 data-[active]:opacity-100 data-[active]:bg-white hover:bg-white rounded-lg !bg-opacity-10"
                  >
                    {child.label}
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const Trigger = ({
  children,
  showIcon,
  active,
}: {
  children: React.ReactNode;
  showIcon?: boolean;
  active?: boolean;
}) => (
  <NavigationMenuTrigger
    showIcon={showIcon}
    data-active={active}
    className="py-6 opacity-80 hover:opacity-100 data-[active]:bg-opacity-100 h-fit !bg-sky-950 hover:!bg-[#00294D] data-[active=true]:!bg-[#00294D] focus:!bg-[#00294D] hover:text-white !text-white "
  >
    {children}
  </NavigationMenuTrigger>
);
