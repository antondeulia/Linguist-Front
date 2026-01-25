import type { ITrack, IUnit } from "@/app/core/interfaces"

import styles from "./track.module.css"
import Unit from "../unit/Unit"

type TrackProps = {
	track: ITrack
}

export default function Track({ track }: TrackProps) {
	return (
		<li
			className={`${styles.wrapper} ${
				!track.isAvailable
					? styles.trackLocked
					: track.isCompleted
						? styles.trackCompleted
						: styles.trackAvailable
			}`}
		>
			<div className={styles.title}>Topic: {track.name}</div>

			<ul className={styles.units}>
				{track.units.map((unit: IUnit) => (
					<Unit key={unit.id} unit={unit} />
				))}
			</ul>
		</li>
	)
}
