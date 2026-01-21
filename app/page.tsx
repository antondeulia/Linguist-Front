import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello Linguist!
      <div>
        <h2>Links:</h2>
        <ul>
          <li>
            <Link href="/courses">Courses</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
