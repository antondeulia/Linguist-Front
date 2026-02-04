import { ITrack } from "@/src/core/interfaces"
import styles from "./page.module.css"
import { apiFetch } from "@/src/utils"
import Track from "@/src/components/track/Track"
import Link from "next/link"
import LearnHeader from "@/src/components/ui/learnHeader/LearnHeader"

const getTracks = async (): Promise<ITrack[]> => {
	return await apiFetch("/tracks")
}

export default async function Learn() {
	const tracks: ITrack[] = await getTracks()

	return (
		<ul className={styles.tracks}>
			<LearnHeader />

			{tracks.map((track, i) => (
				<Track key={track.id} track={track} trackIndex={i} />
			))}
		</ul>
	)
}
