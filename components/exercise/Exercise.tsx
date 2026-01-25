"use client"

import { useState } from "react"
import styles from "./exercise.module.css"
import ExerciseAnswerForm from "./exerciseAnswerForm/ExerciseAnswerForm"
import { useUnitScreenStore } from "@/app/core/stores/unitScreenStore"
import { useRouter } from "next/navigation"
import UnitCompleted from "../unit/unitRunner/unitCompleted/UnitCompleted"

type Props = {
	exercise: {
		id: string
		currentIndex: number
		segments: {
			id: string
			text: string
			translation?: string
			hover?: boolean
		}[]
	}
}

export default function Exercise({ exercise }: Props) {
	const { segments, currentIndex } = exercise
	const router = useRouter()

	const status = useUnitScreenStore(s => s.status)
	const setStatus = useUnitScreenStore(s => s.setStatus)

	const nextExercise: () => void = useUnitScreenStore(s => s.nextExercise)

	const handleComplete = ({ isCompleted }: { isCompleted: boolean }) => {
		setStatus(isCompleted ? "correct" : "wrong")
	}

	const handleContinue = () => {
		setStatus("idle")
		nextExercise()
	}

	const handleExit = () => {
		router.back()
	}

	if (!(currentIndex + 1)) {
		return <UnitCompleted />
	}

	return (
		<div>
			<p className={styles.exercise}>
				{segments.map(seg => {
					const interactive = seg.hover !== false && seg.translation
					return (
						<span
							key={seg.id}
							className={
								interactive
									? `${styles.seg} ${styles.segHover}`
									: styles.seg
							}
							data-translation={interactive ? seg.translation : undefined}
						>
							{seg.text}
						</span>
					)
				})}
			</p>
			<ExerciseAnswerForm
				exerciseId={exercise.id}
				onCompleted={handleComplete}
				onContinue={handleContinue}
				status={status}
				onExit={handleExit}
			/>
		</div>
	)
}
