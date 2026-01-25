"use client"

import { IExercise } from "@/app/core/interfaces"
import styles from "./unitRunner.module.css"
import { useUnitScreenStore } from "@/app/core/stores/unitScreenStore"
import Exercise from "@/components/exercise/Exercise"
import UnitCompleted from "./unitCompleted/UnitCompleted"

export default function UnitRunner({ exercises }: { exercises: IExercise[] }) {
	const currentExerciseIndex = useUnitScreenStore(s => s.currentExerciseIndex)

	const segments = [
		{ id: "1", text: "I", translation: "я" },
		{ id: "2", text: " ", hover: false },
		{ id: "3", text: "have to", translation: "должен" },
		{ id: "4", text: " ", hover: false },
		{ id: "5", text: "go", translation: "идти" },
		{ id: "6", text: ".", hover: false },
	]

	const currentExercise = exercises[currentExerciseIndex]

	if (!currentExercise) {
		return <UnitCompleted />
	}

	return (
		<div className={`container ${styles.wrapper}`}>
			<div className={styles.counter}>
				{currentExerciseIndex + 1} / {exercises.length}
			</div>
			<Exercise
				exercise={{
					id: currentExercise.id,
					segments,
					currentIndex: currentExerciseIndex,
				}}
			/>
		</div>
	)
}
