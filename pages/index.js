import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list/event-list.component';

function HomePage() {
	const featuredEvents = getFeaturedEvents();

	return (
		<div>
			<EventList items={featuredEvents} />
		</div>
	);
}

export default HomePage;
