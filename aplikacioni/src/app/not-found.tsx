import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>Udhëtimi nuk u gjet</h1>
      <p>Kontrollo lidhjen ose kthehu te lista e udhëtimeve.</p>
      <Link className="action" href="/">Kthehu te lista</Link>
    </main>
  );
}
