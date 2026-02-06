import Section from "@/src/components/cards/sectionCard/Section"
import styles from "./page.module.css"
import { apiFetch } from "@/src/utils"
import { ISection } from "@/src/core/interfaces"

const getSections = async (): Promise<ISection[]> => {
	return await apiFetch(`/sections`)
}

export default async function Sections() {
	const sections = await getSections()

	return (
		<ul className={styles.sections}>
			{sections.map(section => (
				<Section section={section} key={section.name} />
			))}
		</ul>
	)
}
