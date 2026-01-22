"use client"

type Props = {
	initialState: any
}

export function SectionRunner({ initialState }: Props) {
	const { sectionType, progressId } = initialState
	const [task, setTask] = useState(initialState.task)

	switch (sectionType) {
		case "listening":
			return (
				<ListeningSection task={task} progressId={progressId} onNext={setTask} />
			)

		case "writing":
			return <WritingSection task={task} progressId={progressId} onNext={setTask} />

		default:
			return <div>Unknown section</div>
	}
}
