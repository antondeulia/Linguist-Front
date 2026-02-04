"use client"

import styles from "./unitRunner.module.css"
import UnitCompleted from "./unitCompleted/UnitCompleted"
import { useUnitScreenStore } from "@/src/stores/unitScreenStore"
import { IUnit } from "@/src/core/interfaces"
import ExerciseAnswerForm from "./exerciseButtons/ExerciseButtons"
import ExerciseBody from "./exerciseBody/ExerciseBody"
import ExerciseHeader from "./exerciseHeader/ExerciseHeader"

type Props = {
	unit: IUnit
}

export default function UnitRunner({ unit }: Props) {
	const currentExerciseIndex = useUnitScreenStore(s => s.currentExerciseIndex)

	const currentExercise = unit.exercises[currentExerciseIndex]

	if (!currentExercise) {
		return <UnitCompleted />
	}

	return (
		<div className={styles.screen}>
			<div className={styles.runner}>
				<ExerciseHeader />

				<ExerciseBody
					exercise={currentExercise}
					currentIndex={currentExerciseIndex}
				/>

				<ExerciseAnswerForm exerciseId={currentExercise.id} />
			</div>
		</div>
	)
}
