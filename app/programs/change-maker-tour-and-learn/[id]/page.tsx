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
          label: "Change Maker Tour and Learn",
          href: "/programs/change-maker-tour-and-learn",
        },
      ]}
      id={decodeURIComponent(id)}
    />
  );
}
