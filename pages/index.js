import Link from 'next/link';

export default function Home() {
  return (
    <div>
    <h1>Galblease 2 Search</h1>
  <Link href="/api/proxy">
    <a>Search</a>
    </Link>
    </div>
  );
}
