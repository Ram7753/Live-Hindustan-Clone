import Image from 'next/image';
import { notFound } from 'next/navigation';
import { NewsArticle } from '@/types/news';
import { news } from '@/data/news';

// fetch article from shared mock data
const getArticle = async (id: string): Promise<NewsArticle | null> => {
  return news.find((a) => a.id === id) || null;
};

const getRelatedArticles = async (currentId: string): Promise<NewsArticle[]> => {
  return news.filter((a) => a.id !== currentId).slice(0, 2);
};

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const article = await getArticle(params.id);
  const relatedArticles = await getRelatedArticles(params.id);

  if (!article) {
    notFound();
  }

  const publishedDate = new Date(article.publishedAt);
  const formattedDate = publishedDate.toLocaleDateString('hi-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <ArticleStructuredData article={article} />
      {/* Article Header */}
      <header className="relative">
        <div className="h-96 w-full relative">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <span className="inline-block bg-red-600 text-white text-sm px-3 py-1 rounded-full mb-2">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{article.title}</h1>
            <div className="flex items-center text-gray-200 text-sm">
              <span>By {article.author}</span>
              <span className="mx-2">•</span>
              <time dateTime={article.publishedAt}>{formattedDate}</time>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="p-6 md:p-8">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {article.description}
          </p>
          <div className="space-y-4 text-gray-800">
            {article.content.split('।').filter(Boolean).map((paragraph, index) => (
              <p key={index} className="text-justify">
                {paragraph.trim()}{paragraph.trim() ? '।' : ''}
              </p>
            ))}
          </div>
        </div>

        {/* Article Footer */}
        <footer className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-between text-sm text-gray-500">
            <div>
              <span>स्रोत: </span>
              <a 
                href={article.source.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-600 hover:underline"
              >
                {article.source.name}
              </a>
            </div>
            <div>
              <button className="flex items-center text-gray-500 hover:text-red-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                शेयर करें
              </button>
            </div>
          </div>
        </footer>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="bg-gray-50 p-6 md:p-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-6">संबंधित खबरें</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedArticles.map((related) => (
              <a 
                key={related.id} 
                href={`/articles/${related.id}`}
                className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex">
                  <div className="w-1/3 h-32 relative">
                    <Image
                      src={related.imageUrl}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                      sizes="(max-width: 768px) 150px, 200px"
                    />
                  </div>
                  <div className="w-2/3 p-4">
                    <span className="text-xs font-medium text-red-600">{related.category}</span>
                    <h3 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors line-clamp-3">
                      {related.title}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

// Inject JSON-LD structured data for better SEO
function ArticleStructuredData({ article }: { article: any }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://example.com/articles/${article.id}`
    },
    "headline": article.title,
    "image": [article.imageUrl],
    "datePublished": article.publishedAt,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": article.source.name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://example.com/logo.png"
      }
    },
    "description": article.description
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const article = await getArticle(params.id);
  if (!article) {
    return {
      title: 'लेख नहीं मिला - Live Hindustan',
      description: 'माफ़ कीजिए, आप जिस लेख को ढूंढ रहे हैं वह उपलब्ध नहीं है।',
    };
  }

  return {
    title: `${article.title} - Live Hindustan`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [
        {
          url: article.imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [article.imageUrl],
    },
  };
}
