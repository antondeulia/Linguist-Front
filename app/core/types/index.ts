export type ExerciseValidationResponse = {
	isAcceptable: string
	semanticLevel: string
	detectedLevel: string
	explanation?: string | null
}
