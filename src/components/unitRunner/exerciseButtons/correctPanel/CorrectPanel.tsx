"use client"

import { useUnitScreenStore } from "@/src/stores/unitScreenStore"
import styles from "./correctPanel.module.css"
import { useEffect, useRef } from "react"

export default function CorrectPanel() {
	const result = useUnitScreenStore(s => s.checkResult)

	const handleContinue = useUnitScreenStore(s => s.continue)

	const btnRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		btnRef.current?.focus()
	}, [])

	return (
		<div className={styles.wrapper}>
			<div className={styles.block}>
				<p className={styles.icon}>V</p>
				<div className={styles.textBlock}>
					<h2 className={styles.title}>Excellen!</h2>
					<p className={styles.text}>
						{result?.explanation || "No explanation"}
					</p>
				</div>
			</div>
			<button className={styles.btn} onClick={handleContinue} ref={btnRef}>
				Continue
			</button>
		</div>
	)
}
