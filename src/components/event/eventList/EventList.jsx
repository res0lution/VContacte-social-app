import React from "react";
import InfiniteScroll from "react-infinite-scroller";

import EventListItem from "./EventListItem";

const EventList = ({ events, moreEvents, getNextEvents, loading }) => (
  <>
    {events && events.length !== 0 && (
      <InfiniteScroll
        pageStart={0}
        loadMore={getNextEvents}
        hasMore={!loading && moreEvents}
        initialLoad={false}
      >
        {events &&
          events.map((event) => <EventListItem key={event.id} event={event} />)}
      </InfiniteScroll>
    )}
  </>
);

export default EventList;
