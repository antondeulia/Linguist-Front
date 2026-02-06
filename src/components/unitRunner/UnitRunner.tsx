"use client"

import styles from "./unitRunner.module.css"
import UnitCompleted from "./unitCompleted/UnitCompleted"
import { useUnitScreenStore } from "@/src/stores/unitScreenStore"
import { IExercise } from "@/src/core/interfaces"
import ExerciseAnswerForm from "./exerciseButtons/ExerciseButtons"
import ExerciseBody from "./exerciseBody/ExerciseBody"
import ExerciseHeader from "./exerciseHeader/ExerciseHeader"
import { useEffect } from "react"

type Props = {
	exercises: IExercise[]
}

export default function UnitRunner({ exercises }: Props) {
	const currentExerciseIndex = useUnitScreenStore(s => s.currentExerciseIndex)
	const setTotalExercises = useUnitScreenStore(s => s.setTotalExercises)
	const reset = useUnitScreenStore(s => s.reset)

	useEffect(() => {
		reset()
		setTotalExercises(exercises.length)
	}, [exercises.length])

	const currentExercise = exercises[currentExerciseIndex]

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
