import Link from "next/link"

import styles from "./page.module.css"

const items = [
	{
		id: 1,
		href: "/courses",
		name: "Courses",
	},
	{
		id: 2,
		href: "/exams",
		name: "Exams",
	},
]

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Hello, Anton!</h1>
		</div>
	)
}
