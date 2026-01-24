"use client"

import { useState } from "react"
import { IExercise } from "@/app/core/interfaces"
import { useRouter } from "next/navigation"

import styles from "./unitRunner.module.css"
import { useUnitScreenStore } from "@/app/core/stores/unitScreenStore"
import UnitCompleted from "./unitCompleted/UnitCompleted"
import ExerciseAnswerForm from "@/components/exerciseAnswerForm/ExerciseAnswerForm"

export default function UnitRunner({ exercises }: { exercises: IExercise[] }) {
	const [index, setIndex] = useState(0)

	const setStatus = useUnitScreenStore(s => s.setStatus)
	const status = useUnitScreenStore(s => s.status)

	const current = exercises[index]

	const handleComplete = ({ isCompleted }: { isCompleted: boolean }) => {
		setStatus(isCompleted ? "correct" : "wrong")
	}

	const handleContinue = () => {
		setStatus("idle")
		setIndex(i => i + 1)
	}

	const router = useRouter()
	const handleExit = () => {
		router.back()
	}

	if (!current) {
		return <UnitCompleted />
	}

	return (
		<div className={`container ${styles.wrapper}`}>
			<div className={styles.counter}>
				{index + 1} / {exercises.length}
			</div>

			<div className={styles.main}>
				<h2 className={styles.text}>{current.text}</h2>
				<ExerciseAnswerForm
					exerciseId={current.id}
					onCompleted={handleComplete}
					onContinue={handleContinue}
					status={status}
					onExit={handleExit}
				/>
			</div>
		</div>
	)
}
