import PageTransition from "../components/PageTransition";
import EventsHeader from "../components/EventsHeader";
import EventCard from "../components/EventCard";

const events = [
  {
    id: 1,
    title: "Opening Ceremony",
    date: "10 September 2024",
    time: "09:00 AM",
    location: "Main Arena",
    image:
      "https://picsum.photos/700/400?random=1",
  },
  {
    id: 2,
    title: "Web Technologies",
    date: "11 September 2024",
    time: "10:30 AM",
    location: "Hall B",
    image:
      "https://picsum.photos/700/400?random=2",
  },
  {
    id: 3,
    title: "Closing Ceremony",
    date: "15 September 2024",
    time: "06:00 PM",
    location: "Main Arena",
    image:
      "https://picsum.photos/700/400?random=3",
  },
    {
    id: 4,
    title: "Closing Ceremony",
    date: "15 September 2024",
    time: "06:00 PM",
    location: "Main Arena",
    image:
      "https://picsum.photos/700/400?random=4",
  },
    {
    id: 5,
    title: "Closing Ceremony",
    date: "15 September 2024",
    time: "06:00 PM",
    location: "Main Arena",
    image:
      "https://picsum.photos/700/400?random=5",
  },
    {
    id: 6,
    title: "Closing Ceremony",
    date: "15 September 2024",
    time: "06:00 PM",
    location: "Main Arena",
    image:
      "https://picsum.photos/700/400?random=6",
  },
];

export default function Events() {
  return (
    <PageTransition>

      <div className="max-w-6xl mx-auto p-8">

        <EventsHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">

          {events.map((event) => (
            <EventCard
              key={event.id}
              {...event}
            />
          ))}

        </div>

      </div>

    </PageTransition>
  );
}