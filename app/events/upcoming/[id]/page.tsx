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
      color="#C767F5"
      breadcrumb={[
        {
          label: "Events",
        },
        {
          label: "Upcoming Events",
          href: "/events/upcoming",
        },
      ]}
      id={decodeURIComponent(id)}
    />
  );
}
