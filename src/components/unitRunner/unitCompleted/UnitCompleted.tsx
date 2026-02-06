"use client"

import { useRouter } from "next/navigation"
import styles from "./unitCompleted.module.css"
import { useEffect, useRef } from "react"
import { useUnitScreenStore } from "@/src/stores"

export default function UnitCompleted() {
	const router = useRouter()
	const finishRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		finishRef.current?.focus()
	}, [])

	const handleExit = async () => {
		router.refresh()
		router.back()
	}

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Congratulations! You finished this unit!</h1>

			<div className={styles.buttons}>
				<button className={styles.btn}>Restart</button>
				<button className={styles.btn} ref={finishRef} onClick={handleExit}>
					Finish
				</button>
			</div>
		</div>
	)
}
