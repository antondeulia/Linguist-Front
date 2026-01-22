export interface IExam {
	id: string
	code: string
	name: string

	examSections: IExamSection[]
}

export interface IExamSection {
	id: string
	type: string
	examId: string
}

export interface IExamSectionProgress {
	id: string
	sectionId: string
	userId: string
	state: string
	createdAt: Date
	finishedAt?: Date
}
