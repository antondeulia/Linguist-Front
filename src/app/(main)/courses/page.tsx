import CourseCard from "@/src/components/cards/courseCard/CourseCard"
import styles from "./page.module.css"
import { ICourse } from "@/src/core/interfaces"

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
					<CourseCard key={course.id} course={course} />
				))}
			</ul>
		</div>
	)
}
