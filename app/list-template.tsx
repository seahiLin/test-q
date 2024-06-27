"use client";

import * as React from "react";
import Image, { StaticImageData } from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import EventFilter from "@/components/event-filter";
import { useState } from "react";
import { useMount } from "react-use";
import {
  ChevronLeft,
  ChevronRight,
  Clock2,
  MapPin,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { Event, eventService } from "@/lib/api";
import dayjs from "dayjs";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import { usePathname } from "next/navigation";

const EventCard: React.FC<{
  event: Event;
}> = ({
  event: { name, title, overview, guestSpeakers, location, startTime },
}) => {
  const pathname = usePathname();

  return <article className="flex flex-col p-8 mt-8 border-t border-solid border-sky-950 max-md:px-5 max-md:max-w-full">
    <div className="flex gap-4 justify-between max-md:flex-wrap max-md:max-w-full">
      <h2 className="text-2xl font-bold leading-8 text-black max-md:text-xl">
        {title}
      </h2>
      <span className="justify-center self-start px-2 py-1 text-sm font-semibold leading-5 bg-zinc-100 text-sky-950">
        {status}
      </span>
    </div>
    <p className="mt-6 text-base leading-7 text-sky-950 line-clamp-2 max-md:max-w-full max-md:text-sm">
      {overview}
    </p>
    <div className="flex gap-5 justify-between self-start mt-8 text-lg font-medium leading-7 text-sky-950 max-md:flex-wrap max-md:text-base">
      <div className="flex items-center gap-1 justify-between px-0.5">
        <UserRound className="w-4" />
        <span>{guestSpeakers.map((i: any) => i.username).join(", ")}</span>
      </div>
      <div className="flex items-center gap-1 whitespace-nowrap">
        <MapPin className="w-4" />
        <span>{location}</span>
      </div>
      <div className="flex items-center gap-1">
        <Clock2 className="w-4" />
        {/* @ts-ignore */}
        <span>{dayjs(startTime).format("Do MMM YYYY")}</span>
      </div>
    </div>
    <Link
      href={`${pathname}/${encodeURIComponent(name)}`}
      className="justify-center hover:bg-sky-950 hover:text-white self-start px-9 py-2 mt-8 text-base leading-6 border border-solid border-sky-950 text-sky-950 max-md:px-5 max-md:text-sm"
    >
      View More
    </Link>
  </article>
};

const itemRender: PaginationProps["itemRender"] = (
  pageNo,
  type,
  originalElement
) => {
  if (type === "prev") {
    return (
      <a className="flex items-center px-2 pr-4 rounded-3xl border text-[#00335F] border-[#00335F]">
        <ChevronLeft size={16} />
        <span>Previous</span>
      </a>
    );
  }
  if (type === "next") {
    return (
      <a className="flex items-center px-2 pl-4 rounded-3xl border text-[#00335F] border-[#00335F]">
        <span>Next</span>
        <ChevronRight size={16} />
      </a>
    );
  }
  return originalElement;
};

type ListTemplateProps = {
  title: string;
  type: "programs" | "events";
  heroImg: StaticImageData
};

export const ListTemplate: React.FC<ListTemplateProps> = ({
  title,
  type,
  heroImg,
}) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(160);
  const [loading, setLoading] = useState(false);
  const [filterStrCache, setFilterStrCache] = useState('')

  const getData = async (current: number, filter?: string) => {
    setFilterStrCache(filter || '')
    setEvents([
      {
        name: "event-1",
        title: "AI Impact Series 1",
        overview: "Join us for the first AI Impact Series event.",
        guestSpeakers: [{ username: "John Doe" }] as any,
        location: "Online",
        startTime: new Date(),
      } as any,
    ]);

    // const res = await eventService.listEvents({
    //   skip: current * 10,
    //   pageSize: 10,
    //   filter,
    // })

    setCurrent(current + 1)
    // setEvents(res.events)
    // setTotal(Number(res.totalSize))
  };

  const onFilterChange = ({
    search,
    category,
  }: {
    search: string;
    category: string;
  }) => {
    let filterStr = "";
    if (search) {
      filterStr += `title:${search}`;
    }

    getData(0);
  };

  useMount(() => {
    getData(0);
  });

  return (
    <main className="flex flex-col bg-white">
      <header className="flex flex-col justify-center w-full text-5xl font-bold text-center leading-[57.6px] text-white text-opacity-90 max-md:max-w-full max-md:text-4xl">
        <div className="flex overflow-hidden relative flex-col justify-center w-full min-h-[360px] max-md:max-w-full max-md:text-4xl">
          <Image
            src={heroImg}
            alt="AI Impact Series background"
            layout="fill"
            objectFit="cover"
          />
          <h1 className="relative justify-center items-center px-16 pt-36 pb-32 w-full max-md:px-5 max-md:py-10 max-md:max-w-full max-md:text-4xl">
            {title}
          </h1>
        </div>
      </header>
      <section className="flex flex-col self-center mt-14 w-full bg-white max-w-[1200px] max-md:mt-10 max-md:max-w-full">
        <Breadcrumb className="mb-10">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                {type === "programs" ? "Programs" : "Events"}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <EventFilter filterType="events" onChange={onFilterChange} />
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
        <Pagination
          className="flex justify-center"
          current={current}
          pageSize={10}
          showSizeChanger={false}
          total={total}
          itemRender={itemRender}
          onChange={(page) => {
            getData(page - 1, filterStrCache)
          }}
        />
      </section>
    </main>
  );
};
