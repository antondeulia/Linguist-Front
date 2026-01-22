import { IExamSectionProgress } from "@/app/core/interfaces"
import { SectionRunner } from "@/components/exam/sectionRunner/SectionRunner"

type Props = {
	params: Promise<{
		progressId: string
	}>
}

const getProgress = async (progressId: string): Promise<IExamSectionProgress> => {
	console.log(progressId, " Progress ID here")
	try {
		const res = await fetch(
			`http://localhost:4200/api/exam-section-progresses/${progressId}`,
		)

		return await res.json()
	} catch (error) {
		throw new Error(`Unable to fetch section progress: ${error}`)
	}
}

export default async function ExamSectionProgressPage({ params }: Props) {
	const { progressId } = await params

	const progress = await getProgress(progressId)

	return <SectionRunner initialState={progress} />
}
