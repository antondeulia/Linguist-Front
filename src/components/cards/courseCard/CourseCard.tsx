"use client"

import { ICourse } from "@/src/core/interfaces"
import styles from "./courseCard.module.css"
import { apiFetch } from "@/src/utils"
import { useRouter } from "next/navigation"

type Props = {
	course: ICourse
}

export default function CourseCard({ course }: Props) {
	const router = useRouter()

	const handleEnroll = async (courseId: string) => {
		await apiFetch("/user-states", {
			method: "PATCH",
			body: JSON.stringify({
				currentCourseId: courseId,
			}),
		})

		router.push("/learn")
	}

	return (
		<li className={styles.item}>
			<p className={styles.itemTitle}>{course.name}</p>
			<button onClick={() => handleEnroll(course.id)} className={styles.itemBtn}>
				Enroll
			</button>
		</li>
	)
}
