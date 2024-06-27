"use client";

import * as React from "react";
import Image from "next/image";
import { CalendarRange, Clock2, MapPin } from "lucide-react";
import { Event, eventService } from "@/lib/api";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useMount } from "react-use";

type SpeakerProps = {
  username: string;
  title: string;
  description?: string;
};

const Speaker: React.FC<{
  speaker: SpeakerProps;
}> = ({ speaker: { username, title, description } }) => (
  <div className="mt-6 text-black max-md:max-w-full">
    <span className="text-xl leading-8 text-sky-950">Guest Speaker: </span>
    <br />
    <span className="text-black">{username}</span>
    <div className="text-sm leading-6 max-md:max-w-full">{title}</div>
    {description && (
      <div className="text-sm leading-6 max-md:max-w-full">{description}</div>
    )}
  </div>
);

type EventInfoProps = {
  date: string;
  location: string;
};

const EventInfo: React.FC<EventInfoProps> = ({ date, location }) => (
  <div className="mt-6 flex gap-5 text-lg font-medium leading-7 max-md:flex-wrap max-md:text-sm">
    <div className="flex items-center gap-1">
      <Clock2 className="w-4" />
      <div>{date}</div>
    </div>
    <div className="flex items-center flex-1 gap-1 whitespace-nowrap">
      <MapPin className="w-4" />
      <div className="flex-1">{location}</div>
    </div>
  </div>
);

export default function EventDetail({
  id,
  color,
  breadcrumb,
}: {
  id: string;
  color: string;
  breadcrumb: Array<{
    label: string;
    href?: string;
  }>;
}) {
  const [event, setEvent] = React.useState<Event>({
    name: "scaling-growth-with-impact",
    title: "Scaling Growth with Impact",
    overview:
      "Moderated by Kevin Quah, SMU alumnus and Founder of TicTag, the panel discussion explored the journey of Helen he and Oliver Kwan in scaling technology enterprises like Baidu, all while maintain a strong commitment to creating significant impact.",
    guestSpeakers: [
      {
        username: "Helen He",
        title: "Co-Founder, Baidu",
      },
      {
        username: "Oliver Kwan",
        title: "Co-Founder, Baidu",
      },
    ],
    location: "Singapore",
    startTime: "2024-03-22T12:00:00Z",
    coverStorageUris: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/223a70b5dbac4ccb9d74e164d54b7a53b38cd4ec9b4a5d68dc300f872fe7b931?apiKey=1763db89d74a43bdb1b1938770366623&",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/223a70b5dbac4ccb9d74e164d54b7a53b38cd4ec9b4a5d68dc300f872fe7b931?apiKey=1763db89d74a43bdb1b1938770366623&",
    ],
  } as any);
  const [current, setCurrent] = React.useState(0);
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // useMount(async () => {
  //   const res = await eventService.getEvent({
  //     name: id,
  //   });
  //   setEvent(res)
  // });

  return (
    <div>
      <Breadcrumb className="my-14 ml-14">
        <BreadcrumbList>
          {breadcrumb.map(({ label, href }, index) => (
            <>
              <BreadcrumbItem key={index}>
                <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          ))}
          <BreadcrumbItem>
            <BreadcrumbLink>{event.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="flex flex-col items-center px-16 pb-16 bg-white max-md:px-5">
        <CalendarRange
          className={"w-8"}
          style={{
            color: color,
          }}
        />
        <h1
          className="mt-4 text-4xl font-bold leading-10 text-center max-md:max-w-full max-md:text-2xl"
          style={{
            color: color,
          }}
        >
          {event.title}
        </h1>
        <section className="justify-end mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch pl-8 text-2xl font-bold leading-10 text-sky-950 max-md:mt-10 max-md:max-w-full max-md:pl-4 max-md:text-xl">
                {event.guestSpeakers.map((speaker: any) => (
                  <Speaker key={speaker.username} speaker={speaker} />
                ))}
                <EventInfo
                  // @ts-ignore
                  date={event.startTime}
                  location={event.location}
                />
                <h2 className="mt-6 text-lg leading-8 text-black max-md:max-w-full">
                  Overview
                </h2>
                <p className="mt-2 text-base leading-7 max-md:max-w-full max-md:text-sm">
                  {event.overview}
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
              <Carousel
                opts={{
                  loop: true,
                }}
                setApi={setApi}
              >
                <CarouselContent>
                  {event.coverStorageUris.map((uri, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={uri}
                        alt={`Illustration for ${event.title}`}
                        width={500}
                        height={375}
                        className="w-full aspect-[1.33] max-md:max-w-full"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex py-5">
                  <div className="flex items-center gap-2">
                    {new Array(event.coverStorageUris.length)
                      .fill(0)
                      .map((_, index) => (
                        <div
                          key={index}
                          className={cn(
                            "w-2 h-2 rounded-full",
                            current === index ? "bg-[#00335F]" : "bg-slate-300"
                          )}
                        />
                      ))}
                  </div>
                  <div className="ml-auto flex gap-4">
                    <CarouselPrevious className="w-12 h-12 relative translate-x-0 translate-y-0 top-0 left-0 right-0" />
                    <CarouselNext className="w-12 h-12 relative translate-x-0 translate-y-0 top-0 left-0 right-0" />
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
