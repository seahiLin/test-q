import { ListTemplate } from "@/app/list-template";
import UpcomingHero from "@/public/imgs/upcoming-event-hero.png";

export default function AiMasterGuestSpeakerSeries() {
  return (
    <ListTemplate type="events" title="Upcoming Events" heroImg={UpcomingHero} />
  )
}