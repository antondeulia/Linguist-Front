"use client"

import { useUnitScreenStore } from "@/src/stores/unitScreenStore"
import styles from "./idlePanel.module.css"

type Props = {
	exerciseId: string
}

export default function IdlePanel({ exerciseId }: Props) {
	const check = useUnitScreenStore(s => s.check)
	const isCheckLoading = useUnitScreenStore(s => s.isCheckLoading)

	return (
		<div className={styles.buttons}>
			<button className={styles.btn}>Skip</button>
			<button
				className={styles.btn}
				onClick={() => {
					check(exerciseId)
				}}
				disabled={isCheckLoading}
			>
				{isCheckLoading ? "Checking..." : "Check"}
			</button>
		</div>
	)
}
