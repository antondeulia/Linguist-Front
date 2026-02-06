"use client"

import { ISection } from "@/src/core/interfaces"

import styles from "./section.module.css"
import { apiFetch } from "@/src/utils"
import { useRouter } from "next/navigation"

type Props = {
	section: ISection
}

export default function Section({ section }: Props) {
	const router = useRouter()

	const handleContinue = async () => {
		try {
			await apiFetch("/user-states", {
				method: "PATCH",
				body: JSON.stringify({
					currentSectionId: section.id,
				}),
			})

			router.push("/learn")
		} catch (error) {
			throw new Error(`Unable to update user state: ${error}`)
		}
	}

	return (
		<div className={`${styles.section} ${styles[section.variant]}`}>
			<div className={styles.textBlock}>
				<p
					className={`${styles.details} ${section.variant === "active" && styles.detailsActive}`}
				>
					See details
				</p>
				<p
					className={`${styles.name} ${section.variant === "locked" && styles.nameLocked}`}
				>
					{section.name}
				</p>
				{section.variant === "completed" && (
					<div className={styles.completedBlock}>
						<p className={styles.completedIcon}>V</p>
						<p className={styles.completedText}>Completed!</p>
					</div>
				)}
				{section.variant === "active" && (
					<div className={styles.progressBarBlock}>
						<p className={styles.progressBar}>Progress bar</p>
						<button className={styles.continueBtn} onClick={handleContinue}>
							Continue
						</button>
					</div>
				)}
				{section.variant === "locked" && (
					<div className={styles.lockedBlock}>
						<p className={styles.lockedBlockInfo}>48 Units</p>
						<button className={styles.lockedBlockBtn}>Jump to section</button>
					</div>
				)}
			</div>
			{section.variant === "completed" && (
				<button className={styles.button}>Review</button>
			)}
		</div>
	)
}
