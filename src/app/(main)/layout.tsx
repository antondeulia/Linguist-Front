import Sidebar from "@/src/components/ui/sidebar/Sidebar"
import "../../app/globals.css"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="layout">
			<Sidebar />
			<main>{children}</main>
		</div>
	)
}
