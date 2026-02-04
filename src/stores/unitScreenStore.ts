import { create } from "zustand"
import { ExerciseValidationResponse } from "../core/types"

export type ScreenStatus = "idle" | "correct" | "wrong"

type UnitScreenState = {
	status: ScreenStatus

	inputValue: string
	setInputValue: (value: string) => void
	resetInput: () => void

	checkResult: ExerciseValidationResponse | null
	check: (exerciseId: string) => void
	isCheckLoading: boolean

	currentExerciseIndex: number
	continue: () => void
}

export const useUnitScreenStore = create<UnitScreenState>((set, get) => ({
	status: "idle",

	inputValue: "",
	setInputValue: value => set({ inputValue: value }),
	resetInput: () => set({ inputValue: "" }),

	checkResult: null,
	check: async (exerciseId: string) => {
		const value = get().inputValue

		if (value.length < 3) return

		set({ isCheckLoading: true })
		try {
			const res = await fetch("http://localhost:4200/api/exercises/validate", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					exerciseId,
					response: value,
				}),
			})

			const data: ExerciseValidationResponse = await res.json()

			set({
				checkResult: data,
			})

			if (data.isAcceptable) {
				set({ status: "correct" })
			} else {
				set({ status: "wrong" })
			}

			set({ isCheckLoading: false })
		} catch (error) {
			set({ isCheckLoading: false })
			throw new Error(`Unable to validate user answer: ${error}`)
		}
	},
	isCheckLoading: false,

	currentExerciseIndex: 0,
	continue: () => {
		set(state => ({
			status: "idle",
			inputValue: "",
			checkResult: null,
			currentExerciseIndex: state.currentExerciseIndex + 1,
		}))
	},
}))
