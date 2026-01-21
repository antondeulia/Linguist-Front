import { IUnit } from "@/app/core/interfaces"

import styles from "./unit.module.css"
import Link from "next/link"

type UnitProps = {
	unit: IUnit
}

export default function Unit({ unit }: UnitProps) {
	return (
		<li
			className={`${unit.unitProgresses[0]?.isCompleted ? styles.completed : styles.idle} ${styles.unit}`}
		>
			<Link href={`/units/${unit.id}`}>Unit: {unit.name}</Link>

			{unit.unitProgresses[0]?.isCompleted ? <div>✅</div> : <div>❌</div>}
		</li>
	)
}
