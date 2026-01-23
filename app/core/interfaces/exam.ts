export interface IExam {
	id: string
	code: string
	name: string
	sections?: IExamSection[]
}

export interface IExamSection {
	id: string
	name: string
	examId: string
}

export interface ISectionProgress {}
