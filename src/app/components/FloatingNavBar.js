import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FloatingNavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full px-3 py-3 shadow-lg">
      <ul className="flex">
        <li className="">
          <Link
            href="/"
            className={`transition-colors ${
              pathname === '/'
                ? 'font-bold text-white'
                : 'text-white/70 hover:text-yellow-400'
            }`}
          >
            Home
          </Link>
        </li>
        <li className="px-3">
          <Link
            href="/blog"
            className={`transition-colors ${
              pathname === '/blog'
                ? 'font-bold text-white'
                : 'text-white/70 hover:text-yellow-400'
            }`}
          >
            Writing
          </Link>
        </li>
      </ul>
    </nav>
  );
}
