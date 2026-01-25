"use client"

import { ExerciseValidationResponse } from "@/app/core/types"
import { FormEvent, useEffect, useState } from "react"

import styles from "./exerciseAnswerForm.module.css"
import { ScreenStatus } from "@/app/core/stores/unitScreenStore"

type Props = {
	exerciseId: string
	onCompleted: ({ isCompleted }: { isCompleted: boolean }) => void
	onContinue: () => void
	status: ScreenStatus
	onExit: () => void
}

export default function ExerciseAnswerForm({
	exerciseId,
	onCompleted,
	onContinue,
	status,
	onExit,
}: Props) {
	const [input, setInput] = useState("")
	const [result, setResult] = useState<ExerciseValidationResponse | null>(null)

	const [isLoading, setIsLoading] = useState(false)

	const [value, setValue] = useState("")

	useEffect(() => {
		setValue("")
	}, [exerciseId])

	const handleSubmit = async (e: FormEvent) => {
		if (input.length < 3) return
		e.preventDefault()
		setIsLoading(true)

		try {
			const res = await fetch("http://localhost:4200/api/exercises/validate", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					exerciseId,
					response: input,
				}),
			})

			const data: ExerciseValidationResponse = await res.json()

			setResult(data)
			setIsLoading(false)

			onCompleted({ isCompleted: Boolean(data.isAcceptable) })
		} catch (error) {
			setIsLoading(false)
			throw new Error(`Unable to validate user answer: ${error}`)
		}
	}

	function handleKeyDown(e: React.KeyboardEvent) {
		if (e.key !== "Enter") return

		if (status === "idle" || status === "wrong") {
			return
		}

		e.preventDefault()
		onContinue()
		setInput("")
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<input
				type="text"
				onChange={e => setInput(e.target.value)}
				value={input}
				className={styles.input}
				placeholder="Type..."
				onKeyDown={handleKeyDown}
			/>
			<div className={styles.buttons}>
				<button type="button" onClick={onExit} className={styles.exitBtn}>
					Exit
				</button>

				{status === "idle" && (
					<button
						type="submit"
						disabled={isLoading}
						className={styles.checkBtn}
					>
						{isLoading ? "Checking" : "Check"}
					</button>
				)}
				{status === "wrong" && (
					<button
						type="submit"
						disabled={isLoading}
						className={styles.checkBtn}
					>
						Try again
					</button>
				)}
				{status === "correct" && (
					<button
						type="button"
						onClick={() => {
							onContinue()
							setInput("")
						}}
						className={styles.continueBtn}
					>
						Continue
					</button>
				)}
			</div>

			{result && <span>{result.isAcceptable ? "✅" : "❌"}</span>}
		</form>
	)
}
