import { useUnitScreenStore } from "@/src/stores/unitScreenStore"
import styles from "./exerciseHeader.module.css"

export default function ExerciseHeader() {
	const currentExerciseIndex = useUnitScreenStore(s => s.currentExerciseIndex)

	return (
		<header className={styles.header}>
			<button className={styles.close}>×</button>

			<div className={styles.progress}>
				<div className={styles.progressFill} style={{ width: `40%` }} />
			</div>
		</header>
	)
}
