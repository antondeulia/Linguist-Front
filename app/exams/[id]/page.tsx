import { IExam, IExamSection } from "@/app/core/interfaces/exam"

import styles from "./page.module.css"
import SectionCard from "@/components/exam/section/sectionCard/SectionCard"

type Props = {
	params: Promise<{
		id: string
	}>
}

const getExam = async (id: string): Promise<IExam> => {
	try {
		const res = await fetch(`http://localhost:4200/api/exams/${id}`, {
			cache: "no-cache",
		})

		return await res.json()
	} catch (error) {
		throw new Error("Unable to fetch an exam")
	}
}

export default async function ExamPage({ params }: Props) {
	const { id } = await params

	const exam: IExam = await getExam(id)

	console.log(exam)

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Exam: {exam.name}</h1>

			<ul className={styles.items}>
				{exam.sections?.map((section: IExamSection) => (
					<SectionCard key={section.id} section={section} />
				))}
			</ul>
		</div>
	)
}
