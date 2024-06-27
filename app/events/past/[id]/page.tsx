import EventDetail from "@/components/event-detail";

export default async function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  return (
    <EventDetail
      color="#1BB075"
      breadcrumb={[
        {
          label: "Events",
        },
        {
          label: "PAST EVENTS",
          href: "/events/past",
        },
      ]}
      id={decodeURIComponent(id)}
    />
  );
}
