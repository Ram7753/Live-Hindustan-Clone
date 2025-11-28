import Link from 'next/link';
import Image from 'next/image';
import { NewsArticle } from '@/types/news';

// Mock function to fetch articles by category
const getArticlesByCategory = async (category: string): Promise<NewsArticle[]> => {
  // In a real app, this would be an API call
  const allArticles: NewsArticle[] = [
    {
      id: '1',
      title: 'दिल्ली में भारी बारिश की चेतावनी, कई इलाकों में जलभराव की स्थिति',
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

  return allArticles.filter(article => 
    article.category.toLowerCase() === category.toLowerCase()
  );
};

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const articles = await getArticlesByCategory(params.category);
  const categoryName = decodeURIComponent(params.category);

  if (articles.length === 0) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">कोई लेख नहीं मिला</h2>
          <p className="text-gray-600 mb-6">हमें इस श्रेणी में कोई लेख नहीं मिला।</p>
          <Link 
            href="/" 
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            होम पेज पर वापस जाएं
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 border-b-2 border-red-600 pb-2 inline-block">
        {categoryName}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link 
            key={article.id} 
            href={`/articles/${article.id}`}
            className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                {article.category}
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-2">{article.description}</p>
              <div className="mt-3 text-sm text-gray-500">
                {new Date(article.publishedAt).toLocaleDateString('hi-IN')}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  const categoryName = decodeURIComponent(params.category);
  
  return {
    title: `${categoryName} - Live Hindustan`,
    description: `${categoryName} से जुड़ी ताज़ा खबरें और अपडेट्स`,
    openGraph: {
      title: `${categoryName} - Live Hindustan`,
      description: `${categoryName} से जुड़ी ताज़ा खबरें और अपडेट्स`,
      type: 'website',
    },
  };
}
