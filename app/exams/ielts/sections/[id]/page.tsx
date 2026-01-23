type Props = {
	params: Promise<{
		id: string
	}>
}

const getSectionProgress = async (id: string) => {
	try {
		const res = await fetch(`http://localhost:4200/api/section-attempts/${id}`, {
			cache: "no-cache",
		})

		return await res.json()
	} catch (error) {
		throw new Error(`Unable to fetch section progress: ${error}`)
	}
}

export default async function SectionPage({ params }: Props) {
	const { id } = await params

	const progress: {
		sectionType: string
		currentTask: {
			id: string
			order: number
			prompt: {
				instructions: string
				passage: string
			}
		}
	} = await getSectionProgress(id)

	console.log(progress)

	return (
		<div>
			<h1>Welcome to IELTS: {progress.sectionType}</h1>

			<div>{progress.currentTask.prompt.instructions}</div>

			<div>{progress.currentTask.prompt.passage}</div>

			<input type="text" placeholder="Type here..." />
		</div>
	)
}
