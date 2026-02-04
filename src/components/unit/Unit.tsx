import { IUnit } from "@/src/core/interfaces"
import styles from "./unit.module.css"
import Link from "next/link"

type UnitProps = {
	unit: IUnit
	offsetX: number
}

export default function Unit({ unit, offsetX }: UnitProps) {
	// Определяем стиль в зависимости от статуса
	const statusClass = !unit.isAvailable
		? styles.locked
		: unit.isCompleted
			? styles.completed
			: styles.available

	return (
		<li
			className={styles.unit}
			/* OffsetX теперь живет здесь и не мешает анимации внутри */
			style={{ transform: `translateX(${offsetX}px)` }}
		>
			<Link
				href={`/units/${unit.id}`}
				className={`${styles.button} ${statusClass}`}
			>
				V
			</Link>
		</li>
	)
}
