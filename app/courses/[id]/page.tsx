import { Course, ITrack } from "@/app/core/interfaces"
import Track from "@/components/track/Track"

type PageProps = {
	params: Promise<{
		id: string
	}>
}

const getCourse = async (id: string): Promise<Course> => {
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

	const course = await getCourse(id)

	console.log(course)

	return (
		<div>
			<h1>{course.name}</h1>
			<p>Описание данного суперского курса</p>

			<ul>
				{course.tracks.map((track: ITrack) => (
					<Track key={track.id} track={track} />
				))}
			</ul>
		</div>
	)
}
