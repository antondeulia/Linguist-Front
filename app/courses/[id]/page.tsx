import { ICourse, ITrack } from "@/app/core/interfaces"
import styles from "./page.module.css"
import Track from "@/components/track/Track"

type PageProps = {
	params: Promise<{
		id: string
	}>
}

const getCourse = async (id: string): Promise<ICourse> => {
	try {
		const res = await fetch(`http://localhost:4200/api/courses/${id}`, {
			cache: "no-cache",
		})

		return res.json()
	} catch (error) {
		throw new Error(`Unable to fetch a course: ${error}`)
	}
}

export default async function CoursePage({ params }: PageProps) {
	const { id } = await params

	const course: ICourse = await getCourse(id)

	return (
		<div>
			<ul className={styles.items}>
				{course.tracks.map((track: ITrack) => (
					<Track key={track.id} track={track} />
				))}
			</ul>
		</div>
	)
}
