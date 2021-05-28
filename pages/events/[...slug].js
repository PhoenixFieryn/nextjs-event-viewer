import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list/event-list.component';
import ResultsTitle from '../../components/events/results-title/results-title.component';
import Button from '../../components/ui/button/button.component';
import ErrorAlert from '../../components/ui/error-alert/error-alert.component';

function FilteredEventsPage() {
	const router = useRouter();

	let filterData = router.query.slug;

	if (!filterData) {
		return <p className="center">Loading...</p>;
	}

	filterData = filterData.map((element) => +element);

	if (
		filterData.some((num) => isNaN(num)) ||
		filterData[0] > 2030 ||
		filterData[0] < 2021 ||
		filterData[1] > 12 ||
		filterData[0] < 1
	) {
		return (
			<>
				<ErrorAlert>
					<p>Invalid filter. Please adjust your query.</p>
				</ErrorAlert>
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</>
		);
	}

	const filteredEvents = getFilteredEvents({ year: filterData[0], month: filterData[1] });

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<>
				<ErrorAlert>
					<p>No events found for the query.</p>
				</ErrorAlert>
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</>
		);
	}

	const date = new Date(filterData[0], filterData[1] - 1);

	return (
		<>
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</>
	);
}

export default FilteredEventsPage;
