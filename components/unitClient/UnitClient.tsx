"use client"

import { useUnitScreenStore } from "@/app/core/stores/unitScreenStore"
import styles from "./unitClient.module.css"
import UnitRunner from "@/components/unitRunner/UnitRunner"
import { IUnit } from "@/app/core/interfaces"

export default function UnitClient({ unit }: { unit: IUnit }) {
	const status = useUnitScreenStore(s => s.status)

	return (
		<div
			className={`${styles.screen} ${
				status === "correct"
					? styles.correct
					: status === "wrong"
						? styles.wrong
						: ""
			}`}
		>
			<UnitRunner exercises={unit.exercises} />
		</div>
	)
}
