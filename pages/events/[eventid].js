import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getEventById } from '../../dummy-data';

import EventSummary from '../../components/events/event-detail/event-summary';
import EventLogistics from '../../components/events/event-detail/event-logistics';
import EventContent from '../../components/events/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert/error-alert.component';

function EventDetailPage() {
	const router = useRouter();

	const eventId = router.query.eventId;
	const event = getEventById(eventId);

	if (!event) {
		return (
			<ErrorAlert>
				<p>No event found!</p>
			</ErrorAlert>
		);
	}

	return (
		<Fragment>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				title={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</Fragment>
	);
}

export default EventDetailPage;
