import { IExamSection } from "@/app/core/interfaces/exam"

import styles from "./sectionCard.module.css"
import SectionStartBtn from "./SectionStartBtn"

type Props = {
	section: IExamSection
}

export default async function SectionCard({ section }: Props) {
	return (
		<li className={styles.item}>
			<p className={styles.itemTitle}>{section.name}</p>
			<SectionStartBtn sectionId={section.id} />
		</li>
	)
}
