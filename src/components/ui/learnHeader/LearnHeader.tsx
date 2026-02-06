import Link from "next/link"
import styles from "./learnHeader.module.css"

interface LearnHeaderProps {
	title: string
	color: string
	sectionNumber: number
	unitNumber: number
}

export default function LearnHeader({
	title,
	color,
	sectionNumber,
	unitNumber,
}: LearnHeaderProps) {
	return (
		<div
			className={styles.header}
			style={{
				backgroundColor: color,
				transition: "background-color 0.4s ease",
			}}
		>
			<div className={styles.block}>
				<Link href="/sections" className={styles.link}>
					<span className={styles.linkArrow}>{"←"}</span>
					<span className={styles.linkText}>
						Section {sectionNumber}, Unit {unitNumber}
					</span>
				</Link>

				<p className={styles.title}>{title}</p>
			</div>
		</div>
	)
}
