import Link from "next/link"

import styles from "./page.module.css"

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Welcome, Anton!</h1>
			<div className={styles.links}>
				<Link href="/courses" className={styles.link}>
					<h2 className={styles.linkTitle}>Courses:</h2>
					<p className={styles.linkText}>See all</p>
				</Link>
				<Link href="/exams" className={styles.link}>
					<h2 className={styles.linkTitle}>Exams:</h2>
					<p className={styles.linkText}>See all</p>
				</Link>
			</div>
		</div>
	)
}
