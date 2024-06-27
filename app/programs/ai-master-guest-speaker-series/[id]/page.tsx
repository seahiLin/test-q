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
      color="#3C6173"
      breadcrumb={[
        {
          label: "Programs",
        },
        {
          label: "AI Master & Guest Speaker Series",
          href: "/programs/ai-master-guest-speaker-series",
        },
      ]}
      id={decodeURIComponent(id)}
    />
  );
}
