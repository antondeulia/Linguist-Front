import styles from "./track.module.css"
import Unit from "../unitCard/Unit"
import { ITrack } from "@/src/core/interfaces"

type TrackProps = {
	track: ITrack
	trackIndex: number
	data: {
		color: string
		section: number
		unit: number
	}
}

const offsetX = (i: number, count: number, amplitude = 60) => {
	const t = i / (count - 1)
	return Math.sin(t * Math.PI) * amplitude
}

export default function Track({ track, trackIndex, data }: TrackProps) {
	const dir = trackIndex % 2 === 0 ? 1 : -1

	return (
		<li
			className={styles.track}
			data-track-container
			data-id={track.id}
			data-title={track.name}
			data-color={data.color}
			data-section={data.section}
			data-unit={data.unit}
		>
			<h1 className={styles.title}>{track.name}</h1>
			<ul className={styles.units}>
				{track.units.map((unit, i) => (
					<Unit
						key={unit.id}
						unit={unit}
						offsetX={offsetX(i, track.units.length) * dir}
					/>
				))}
			</ul>
		</li>
	)
}
