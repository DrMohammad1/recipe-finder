import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-2xl text-orange-500">
            Recipe Finder
          </Link>
          <div className="space-x-6">
            <Link href="/" className="text-gray-600 hover:text-orange-500">
              Home
            </Link>
            <Link href="/favorites" className="text-gray-600 hover:text-orange-500">
              Favorites
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-orange-500">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}