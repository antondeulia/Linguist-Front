import { create } from "zustand"

export type ScreenStatus = "idle" | "correct" | "wrong"

type UnitScreenState = {
	status: ScreenStatus
	setStatus: (status: ScreenStatus) => void
	reset: () => void

	currentExerciseIndex: number
	nextExercise: () => void
}

export const useUnitScreenStore = create<UnitScreenState>(set => ({
	status: "idle",
	setStatus: status => set({ status }),
	reset: () => set({ status: "idle" }),

	currentExerciseIndex: 0,
	nextExercise: () =>
		set(state => ({
			currentExerciseIndex: state.currentExerciseIndex + 1,
		})),
}))
