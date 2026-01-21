export interface Course {
	id: string
	name: string
	sourceLang: string
	targetLang: string
	tracks: ITrack[]
}

export interface ITrack {
	id: string
	name: string
	courseId: string
	units: IUnit[]
}

export interface IUnit {
	id: string
	name: string
	trackId: string
	exercises: Exercise[]
	unitProgresses: UnitProgress[]
}

export interface UnitProgress {
	id: string
	isCompleted: boolean
}

export interface Exercise {
	id: string
	text: string
	type: "fromSourceToTarget" | "fromTargetToSource"
	sourceLang: string
	targetLang: string
	unitId: string
}
