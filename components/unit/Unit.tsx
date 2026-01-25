import { IUnit } from "@/app/core/interfaces"

import styles from "./unit.module.css"
import Link from "next/link"

type UnitProps = {
	unit: IUnit
}

export default function Unit({ unit }: UnitProps) {
	return (
		<li
			className={`${styles.unit} ${
				!unit.isAvailable
					? styles.locked
					: unit.isCompleted
						? styles.completed
						: styles.available
			}`}
		>
			<Link href={`/units/${unit.id}`}>Unit: {unit.name}</Link>
		</li>
	)
}
