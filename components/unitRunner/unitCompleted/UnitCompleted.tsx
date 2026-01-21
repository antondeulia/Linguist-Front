"use client"

import { useRouter } from "next/navigation"
import styles from "./unitCompleted.module.css"
import { useEffect, useRef } from "react"

export default function UnitCompleted() {
	const router = useRouter()
	const finishRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		finishRef.current?.focus()
	}, [])

	const handleExit = () => {
		router.back()
	}

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Congratulations! You finished this unit!</h1>

			<div className={styles.buttons}>
				<button className={styles.resetBtn}>Restart</button>
				<button ref={finishRef} className={styles.finishBtn} onClick={handleExit}>
					Finish
				</button>
			</div>
		</div>
	)
}
