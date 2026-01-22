import { Dispatch, SetStateAction } from "react"

type Props = {
	progressId: string
	task: {
		type: string
	}
	onNext: Dispatch<SetStateAction<{ type: string }>>
}

export function ListeningSection({ task, progressId, onNext }: Props) {
	switch (task.type) {
		case "listening_mcq":
			return (
				<div>Listening here</div>
				// <ListeningMCQ
				// 	audioUrl={task.config.audioUrl}
				// 	questionsCount={task.config.questions}
				// 	timeLimit={task.timeLimit}
				// 	onSubmit={answer => submit(progressId, task.id, answer, onNext)}
				// />
			)

		default:
			return <div>Unknown listening task</div>
	}
}
