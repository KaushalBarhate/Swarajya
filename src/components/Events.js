import React, { useState } from "react";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  React.useEffect(() => {
    if (data) {
      setEvents(data);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-5">Upcoming Events</h1>
      <div className="w-full max-w-lg">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden my-5"
          >
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-56 object-cover object-center"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{event.name}</div>
              <p className="text-gray-700 text-base">{event.description}</p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {event.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
