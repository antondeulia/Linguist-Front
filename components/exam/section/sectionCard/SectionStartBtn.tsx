"use client"

import { useRouter } from "next/navigation"
import styles from "./sectionCard.module.css"

type Props = {
	sectionId: string
}

export default function SectionStartBtn({ sectionId }: Props) {
	const router = useRouter()

	const handleStart = async () => {
		try {
			const res = await fetch(`http://localhost:4200/api/section-attempts/start`, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					sectionId,
				}),
				cache: "no-cache",
			})

			const data: {
				id: string
				userId: string
				sectionId: string
			} = await res.json()

			if ("ielts" === "ielts") {
				router.push(`/exams/ielts/sections/${data.id}`)
			}
		} catch (error) {
			throw new Error(`Unable to start the section: ${error}`)
		}
	}

	return (
		<button className={styles.itemBtn} onClick={handleStart}>
			Start
		</button>
	)
}
