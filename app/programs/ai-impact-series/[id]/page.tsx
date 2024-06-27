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
          label: "Programs",
        },
        {
          label: "AI Impact Series",
          href: "/programs/ai-impact-series",
        },
      ]}
      id={decodeURIComponent(id)}
    />
  );
}
