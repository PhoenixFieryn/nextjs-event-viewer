import EventItem from '../event-item/event-item.component';
import styles from './event-list.module.css';

function EventList(props) {
	const { items } = props;

	return (
		<ul className={styles.list}>
			{items.map((event) => (
				<li>
					<EventItem key={event.id} {...event} />
				</li>
			))}
		</ul>
	);
}

export default EventList;
