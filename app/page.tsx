import Link from "next/link"

import styles from "./page.module.css"

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}> Welcome, Anton!</h1>

			<ul className={styles.items}>
				<li className={styles.item}>
					<Link href="/courses">Courses</Link>
				</li>
				<li className={styles.item}>
					<Link href="/exams">Exams</Link>
				</li>
			</ul>
		</div>
	)
}
