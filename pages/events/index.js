import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list/event-list.component';
import EventsSearch from '../../components/events/events-search/events-search.component';

function AllEventsPage() {
	const router = useRouter();
	const events = getAllEvents();

	function findEventsHandler(year, month) {
		router.push(`/events/${year}/${month}`);
	}

	return (
		<>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</>
	);
}

export default AllEventsPage;
