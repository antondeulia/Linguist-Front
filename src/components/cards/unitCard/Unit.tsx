"use client"

import { IUnit } from "@/src/core/interfaces"
import styles from "./unit.module.css"
import { useRouter } from "next/navigation"
import { apiFetch } from "@/src/utils"

type UnitProps = {
	unit: IUnit
	offsetX: number
}

export default function Unit({ unit, offsetX }: UnitProps) {
	const statusClass = !unit.isAvailable
		? styles.locked
		: unit.isCompleted
			? styles.completed
			: styles.available

	const router = useRouter()

	console.log(unit)

	const handleUnit = async () => {
		try {
			await apiFetch("/user-states", {
				method: "PATCH",
				body: JSON.stringify({
					currentUnitId: unit.id,
				}),
			})

			router.push("/lesson")
		} catch (error) {
			throw new Error(`Unable to update user state: ${error}`)
		}
	}

	return (
		<li className={styles.unit} style={{ transform: `translateX(${offsetX}px)` }}>
			<button
				onClick={handleUnit}
				disabled={!unit.isAvailable}
				className={`${styles.button} ${statusClass}`}
			>
				V
			</button>
		</li>
	)
}
