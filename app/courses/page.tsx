import Link from "next/link"
import { Course } from "../core/interfaces"

const getCourses = async (): Promise<Course[]> => {
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
	const courses: Course[] = await getCourses()

	return (
		<div>
			<h1>Courses:</h1>

			<ul>
				{courses.map((course: Course) => (
					<li key={course.id}>
						<p>{course.name}</p>
						<Link href={`/courses/${course.id}`}>Enroll</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
