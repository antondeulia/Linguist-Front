export interface ICourse {
	id: string
	name: string
	sourceLang: string
	targetLang: string
	tracks: ITrack[]
}

export interface ITrack {
	id: string
	name: string
	isCompleted: boolean
	isAvailable: boolean
	units: IUnit[]
}

export interface IUnit {
	id: string
	name: string
	isCompleted: boolean
	isAvailable: boolean
	exercises?: IExercise[]
}

export interface IExercise {
	id: string
	text: string
	type: "fromSourceToTarget" | "fromTargetToSource"
	sourceLang: string
	targetLang: string
	unitId: string
}
