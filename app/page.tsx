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

			<div className={styles.block}>
				<h2 className={styles.blockTitle}>Menu:</h2>
				<ul className={styles.items}>
					{items.map(item => (
						<li key={item.id} className={styles.item}>
							<Link href={item.href}>{item.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
