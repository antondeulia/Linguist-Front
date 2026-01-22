import Link from "next/link"
import { IExam } from "../core/interfaces"

import styles from "./page.module.css"

const getExams = async (): Promise<IExam[] | []> => {
	try {
		const res = await fetch("http://localhost:4200/api/exams")
		return await res.json()
	} catch (error) {
		throw new Error(`Unable to fetch exams: ${error}`)
	}
}

export default async function ExamsPage() {
	const exams = await getExams()

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Exams:</h1>
			<ul className={styles.exams}>
				{exams.map((exam: IExam) => (
					<li key={exam.id} className={styles.exam}>
						<p className={styles.examTitle}>
							{exam.code}: {exam.name}
						</p>
						<Link href={`/exams/${exam.id}`} className={styles.examLink}>
							Start
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
