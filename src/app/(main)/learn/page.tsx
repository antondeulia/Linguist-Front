"use client"

import { useEffect, useState } from "react"
import { ITrack } from "@/src/core/interfaces"
import styles from "./page.module.css"
import { apiFetch } from "@/src/utils"
import Track from "@/src/components/cards/track/Track"
import LearnHeader from "@/src/components/ui/learnHeader/LearnHeader"

const TRACK_COLORS = ["#58cc02", "#ffc800", "#ce82ff", "#00cd9c", "#ff4b4b"]

export default function Learn() {
	const [tracks, setTracks] = useState<ITrack[]>([])
	const [loading, setLoading] = useState(true) // Состояние загрузки
	const [activeData, setActiveData] = useState({
		title: "",
		color: TRACK_COLORS[0],
		section: 1,
		unit: 1,
	})

	useEffect(() => {
		const loadTracks = async () => {
			try {
				const data = await apiFetch("/tracks")
				setTracks(data)
				if (data.length > 0) {
					setActiveData({
						title: data[0].name,
						color: TRACK_COLORS[0],
						section: 1,
						unit: 1,
					})
				}
			} catch (error) {
				console.error("Ошибка при загрузке треков:", error)
			} finally {
				setLoading(false)
			}
		}
		loadTracks()
	}, [])

	useEffect(() => {
		if (tracks.length === 0) return

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setActiveData({
							title: entry.target.getAttribute("data-title") || "",
							color:
								entry.target.getAttribute("data-color") ||
								TRACK_COLORS[0],
							section: Number(entry.target.getAttribute("data-section")),
							unit: Number(entry.target.getAttribute("data-unit")),
						})
					}
				})
			},
			{
				rootMargin: "-100px 0px -80% 0px",
				threshold: 0,
			},
		)

		const trackElements = document.querySelectorAll("[data-track-container]")
		trackElements.forEach(el => observer.observe(el))

		return () => observer.disconnect()
	}, [tracks])

	if (loading) return <div className={styles.container}>Loading...</div>

	return (
		<div className={styles.container}>
			<LearnHeader
				title={activeData.title}
				color={activeData.color}
				sectionNumber={activeData.section}
				unitNumber={activeData.unit}
			/>

			<ul className={styles.tracks}>
				{tracks.map((track, i) => {
					const color = TRACK_COLORS[i % TRACK_COLORS.length]
					const sectionNumber = Math.floor(i / 6) + 1
					const unitNumber = i + 1

					return (
						<Track
							key={track.id}
							track={track}
							trackIndex={i}
							data={{
								color,
								section: sectionNumber,
								unit: unitNumber,
							}}
						/>
					)
				})}
			</ul>
		</div>
	)
}
