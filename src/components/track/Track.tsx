import styles from "./track.module.css"
import Unit from "../unit/Unit"
import { ITrack } from "@/src/core/interfaces"

type TrackProps = {
	track: ITrack
	trackIndex: number
}

const offsetX = (i: number, count: number, amplitude = 60) => {
	const t = i / (count - 1)
	return Math.sin(t * Math.PI) * amplitude
}

export default function Track({ track, trackIndex }: TrackProps) {
	const dir = trackIndex % 2 === 0 ? 1 : -1

	return (
		<li className={styles.track}>
			<h1>{track.name}</h1>
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
