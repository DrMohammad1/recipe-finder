import SearchBar from '@/components/SearchBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Recipe Finder
          </h1>
          <p className="text-gray-600 mb-8">
            Discover delicious recipes for any occasion
          </p>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}