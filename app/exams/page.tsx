import Link from "next/link"
import { IExam } from "../core/interfaces/exam"
import styles from "./page.module.css"

const getExams = async (): Promise<IExam[]> => {
	try {
		const res = await fetch("http://localhost:4200/api/exams", {
			cache: "no-cache",
		})

		const data = await res.json()

		return data
	} catch (error) {
		throw new Error(`Unable to fetch exams: ${error}`)
	}
}

export default async function ExamsPage() {
	const exams: IExam[] = await getExams()

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Available Exams:</h1>

			<ul className={styles.items}>
				{exams.map((exam: IExam) => (
					<li key={exam.id} className={styles.item}>
						<p className={styles.itemTitle}>{exam.name}</p>
						<Link href={`/exams/${exam.id}`} className={styles.itemBtn}>
							Enroll
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
