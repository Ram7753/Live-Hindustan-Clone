import Link from 'next/link';
import Image from 'next/image';
import { NewsArticle } from '@/types/news';
import SearchBar from '@/components/SearchBar';

// Mock function to search articles
const searchArticles = async (query: string): Promise<NewsArticle[]> => {
  // In a real app, this would be an API call
  const allArticles: NewsArticle[] = [
    {
      id: '1',
      title: 'दिल्ली में भारी बारिश की चेतावनी',
      description: 'मौसम विभाग ने दिल्ली-एनसीआर में अगले 24 घंटे के दौरान भारी बारिश की चेतावनी जारी की है।',
      content: 'मौसम विभाग के मुताबिक, दिल्ली-एनसीआर में अगले 24 घंटे के दौरान भारी बारिश होने की संभावना है।',
      category: 'देश',
      imageUrl: 'https://images.unsplash.com/photo-1587474260584-011574585bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      publishedAt: new Date().toISOString(),
      author: 'रमेश शर्मा',
      url: '/article/1',
      source: { name: 'Live Hindustan', url: 'https://www.livehindustan.com' }
    },
    // Add more mock articles...
  ];

  if (!query) return [];
  
  const searchTerm = query.toLowerCase();
  return allArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm) ||
      article.description.toLowerCase().includes(searchTerm) ||
      article.content.toLowerCase().includes(searchTerm)
  );
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query = Array.isArray(searchParams.q) ? searchParams.q[0] : searchParams.q || '';
  const searchResults = await searchArticles(query || '');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto mb-8">
        <SearchBar initialValue={query} />
      </div>

      {query ? (
        <>
          <h1 className="text-2xl font-bold mb-6">
            "{decodeURIComponent(query)}" के लिए खोज परिणाम
          </h1>
          
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((article) => (
                <Link 
                  key={article.id} 
                  href={`/articles/${article.id}`}
                  className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 hover:text-red-600 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {article.description}
                    </p>
                    <div className="mt-3 text-sm text-gray-500">
                      {new Date(article.publishedAt).toLocaleDateString('hi-IN')}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold mb-2">कोई परिणाम नहीं मिला</h2>
              <p className="text-gray-600">हमें आपकी खोज से मेल खाता कोई लेख नहीं मिला।</p>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">कुछ खोजें</h2>
          <p className="text-gray-600">खोज बार में कीवर्ड टाइप करें और एंटर दबाएं</p>
        </div>
      )}
    </div>
  );
}

export function generateMetadata({
  searchParams,
}: {
  searchParams: { q?: string | string[] };
}) {
  const query = Array.isArray(searchParams.q) ? searchParams.q[0] : searchParams.q;
  const title = query ? `"${decodeURIComponent(query)}" के लिए खोज परिणाम` : 'खोज';
  
  return {
    title: `${title} - Live Hindustan`,
    description: query 
      ? `"${decodeURIComponent(query)}" से संबंधित खबरें और लेख`
      : 'Live Hindustan पर खोजें',
  };
}
