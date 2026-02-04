"use client"

import Link from "next/link"
import styles from "./sidebar.module.css"
import { usePathname } from "next/navigation"

type SidebarItem = {
	name: string
	href: string
}

const sidebarItems: SidebarItem[] = [
	{ name: "Learn", href: "/learn" },
	{ name: "Practice", href: "/practice" },
	{ name: "Exams", href: "/exams" },
]

export default function Sidebar() {
	const pathname = usePathname()

	return (
		<aside className={styles.aside}>
			<Link className={styles.logo} href="/">
				Linguist
			</Link>

			<div className={styles.items}>
				{sidebarItems.map((item, i) => {
					const isActive =
						pathname === item.href || pathname.startsWith(item.href)

					return (
						<Link
							href={item.href}
							key={i}
							className={`${styles.item} ${isActive && styles.active}`}
						>
							{item.name}
						</Link>
					)
				})}
			</div>
		</aside>
	)
}
