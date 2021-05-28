import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list/event-list.component';
import EventsSearch from '../../components/events/events-search/events-search.component';

function AllEventsPage() {
	const events = getAllEvents();

	return (
		<>
			<EventsSearch />
			<EventList items={events} />
		</>
	);
}

export default AllEventsPage;
