"use client"

import { useUnitScreenStore } from "@/src/stores/unitScreenStore"
import styles from "./wrongPanel.module.css"

export default function WrongPanel() {
	const result = useUnitScreenStore(s => s.checkResult)

	const handleContinue = useUnitScreenStore(s => s.continue)

	return (
		<div className={styles.wrapper}>
			<div className={styles.block}>
				<p className={styles.icon}>X</p>
				<div className={styles.textBlock}>
					<h2 className={styles.title}>Correct solution:</h2>
					<p className={styles.text}>
						{result?.explanation || "No explanation"}
					</p>
				</div>
			</div>
			<button className={styles.btn} onClick={handleContinue}>
				Continue
			</button>
		</div>
	)
}
