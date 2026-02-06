"use client"

import { useUnitScreenStore } from "@/src/stores/unitScreenStore"
import styles from "./exerciseHeader.module.css"
import { useRouter } from "next/navigation"

export default function ExerciseHeader() {
	const currentExerciseIndex = useUnitScreenStore(s => s.currentExerciseIndex)
	const totalExercises = useUnitScreenStore(s => s.totalExercises)

	const router = useRouter()

	const handleExit = () => {
		router.push("/learn")
	}

	const progressPercentage =
		totalExercises > 0 ? (currentExerciseIndex / totalExercises) * 100 : 0

	return (
		<header className={styles.header}>
			<button className={styles.close} onClick={handleExit}>
				×
			</button>

			<div className={styles.progress}>
				<div
					className={styles.progressFill}
					style={{ width: `${progressPercentage}%` }}
				/>
			</div>
		</header>
	)
}
