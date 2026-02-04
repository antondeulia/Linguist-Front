"use client"

import styles from "./exerciseBody.module.css"
import UnitCompleted from "../unitCompleted/UnitCompleted"
import { IExercise } from "@/src/core/interfaces"
import { useUnitScreenStore } from "@/src/stores/unitScreenStore"
import { useEffect, useRef } from "react"

type Props = {
	exercise: IExercise
	currentIndex: number
}

export default function ExerciseBody({ exercise, currentIndex }: Props) {
	const textAreaRef = useRef<HTMLTextAreaElement>(null)

	useEffect(() => {
		textAreaRef.current?.focus()
	}, [currentIndex])

	const { segments } = exercise

	if (!(currentIndex + 1)) {
		return <UnitCompleted />
	}

	const inputValue = useUnitScreenStore(s => s.inputValue)
	const setInputValue = useUnitScreenStore(s => s.setInputValue)

	const check = useUnitScreenStore(s => s.check)
	const checkResult = useUnitScreenStore(s => s.checkResult)

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Write this in English</h1>
			<p className={styles.text}>
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
			<textarea
				onChange={e => setInputValue(e.target.value)}
				value={inputValue}
				className={styles.textarea}
				placeholder="Переведите текст на английский..."
				onKeyDown={e => {
					if (e.key === "Enter") {
						e.preventDefault()
						check(exercise.id)
					}
				}}
				disabled={checkResult?.detectedLevel ? true : false}
				ref={textAreaRef}
			/>
		</div>
	)
}
