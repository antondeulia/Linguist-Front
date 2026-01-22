"use client"

import { IExam, IExamSection, IExamSectionProgress } from "@/app/core/interfaces"
import { useRouter } from "next/navigation"

import styles from "./examView.module.css"

type Props = {
	exam: IExam
}

export function ExamView({ exam }: Props) {
	const router = useRouter()
	async function startSection(sectionId: string) {
		const res = await fetch(
			`http://localhost:4200/api/exam-section-progresses/${sectionId}/start`,
			{
				method: "POST",
			},
		)

		const data: IExamSectionProgress = await res.json()

		console.log(data.id)

		router.push(`/exam-sections/${data.id}`)
	}

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Exam: {exam.name}</h1>

			<ul className={styles.sections}>
				{exam.examSections.map((section: IExamSection) => (
					<li key={section.id} className={styles.section}>
						<h2 className={styles.sectionTitle}>Section: {section.type}</h2>
						<button
							onClick={() => startSection(section.id)}
							className={styles.sectionBtn}
						>
							Start
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
