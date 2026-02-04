"use client"

import styles from "./exerciseButtons.module.css"
import WrongPanel from "./wrongPanel/WrongPanel"
import CorrectPanel from "./correctPanel/CorrectPanel"
import IdlePanel from "./idlePanel/IdlePanel"
import { useUnitScreenStore } from "@/src/stores/unitScreenStore"

type Props = {
	exerciseId: string
}

export default function ExerciseAnswerForm({ exerciseId }: Props) {
	const status = useUnitScreenStore(s => s.status)

	return (
		<div
			className={`${styles.wrapper}
				${
					(status === "idle" && styles.idle) ||
					(status === "correct" && styles.correct) ||
					(status === "wrong" && styles.wrong)
				}
		`}
		>
			{status === "idle" && (
				<div className={styles.container}>
					<IdlePanel exerciseId={exerciseId} />
				</div>
			)}
			{status === "wrong" && (
				<div className={styles.container}>
					<WrongPanel />
				</div>
			)}
			{status === "correct" && (
				<div className={styles.container}>
					<CorrectPanel />
				</div>
			)}
		</div>
	)
}
