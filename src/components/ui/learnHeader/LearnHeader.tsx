import Link from "next/link"
import styles from "./learnHeader.module.css"

export default function LearnHeader() {
	return (
		<div className={styles.header}>
			<div className={styles.block}>
				<Link href="/sections" className={styles.link}>
					<span className={styles.linkArrow}>{"<-"}</span>
					<span className={styles.linkText}>Section 2, Unit 1</span>
				</Link>
				<p className={styles.blockName}>Get around town</p>
			</div>
		</div>
	)
}
