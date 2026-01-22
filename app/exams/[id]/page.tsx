import { IExam, IExamSection } from "@/app/core/interfaces"

import styles from "./page.module.css"
import { ExamView } from "@/components/exam/examView/ExamView"

type Props = {
	params: Promise<{ id: string }>
}

const getExam = async (id: string): Promise<IExam> => {
	try {
		const res = await fetch(`http://localhost:4200/api/exams/${id}`)

		const data = await res.json()

		console.log(data)

		return data
	} catch (error) {
		throw new Error(`Unable to fetch an exam: ${error}`)
	}
}

export default async function ExamPage({ params }: Props) {
	const { id } = await params

	const exam = await getExam(id)

	return <ExamView exam={exam} />
}
