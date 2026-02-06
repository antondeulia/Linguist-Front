import UnitRunner from "@/src/components/unitRunner/UnitRunner"
import { IExercise } from "@/src/core/interfaces"
import { apiFetch } from "@/src/utils"

const getExercises = async (): Promise<IExercise[]> => {
	return await apiFetch(`/exercises`)
}

export default async function Lesson() {
	const exercises: IExercise[] = await getExercises()

	return <UnitRunner exercises={exercises} />
}
