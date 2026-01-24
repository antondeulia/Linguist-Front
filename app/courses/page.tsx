import Link from "next/link"
import { ICourse } from "../core/interfaces"

import styles from "./page.module.css"

const getCourses = async (): Promise<ICourse[]> => {
	try {
		const res = await fetch("http://localhost:4200/api/courses", {
			cache: "no-cache",
		})

		return res.json()
	} catch (error) {
		throw new Error(`Unable to fetch courses: ${error}`)
	}
}

export default async function Courses() {
	const courses: ICourse[] = await getCourses()

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Courses:</h1>

			<ul className={styles.items}>
				{courses.map((course: ICourse) => (
					<li key={course.id} className={styles.item}>
						<p className={styles.itemTitle}>{course.name}</p>
						<Link href={`/courses/${course.id}`} className={styles.itemBtn}>
							Enroll
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
