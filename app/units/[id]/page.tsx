import { IUnit } from "@/app/core/interfaces"
import UnitClient from "@/components/unit/unitClient/UnitClient"

type PageProps = {
	params: Promise<{
		id: string
	}>
}

const getUnit = async (id: string): Promise<IUnit> => {
	try {
		const res = await fetch(`http://localhost:4200/api/units/${id}`)

		return res.json()
	} catch (error) {
		throw new Error(`Unable to fetch a unit: ${error}`)
	}
}

export default async function UnitPage({ params }: PageProps) {
	const { id } = await params

	const unit: IUnit = await getUnit(id)

	return <UnitClient unit={unit} />
}
