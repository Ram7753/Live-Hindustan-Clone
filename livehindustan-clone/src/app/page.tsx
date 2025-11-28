import Image from 'next/image';
import Link from 'next/link';
import { news as mockNews } from '@/data/news';

export const metadata = {
  title: 'Live Hindustan - क्लोन (Demo)',
  description: 'Demo clone of Live Hindustan front page built with Next.js and TailwindCSS.',
};

const getNews = async () => {
  return mockNews;
};

export default async function Home() {
  const news = await getNews();
  const featured = news[0];
  const latest = news.slice(1);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breaking News Banner */}
      <div className="bg-red-600 text-white px-4 py-2 mb-6 rounded">
        <div className="flex items-center">
          <span className="font-bold mr-4">BREAKING:</span>
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee">
              {news.slice(0, 4).map((item) => (
                <span key={item.id} className="mx-8">{item.title}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main grid: Featured + Latest */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Featured */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded shadow overflow-hidden">
            <div className="relative h-80 w-full">
              <Image src={featured.imageUrl} alt={featured.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="text-sm text-red-600 font-medium mb-2">{featured.category}</div>
              <h2 className="text-2xl font-bold mb-2">{featured.title}</h2>
              <p className="text-gray-700 mb-4 line-clamp-3">{featured.description}</p>
              <Link href={featured.url} className="text-red-600 font-medium">पूरा पढ़ें →</Link>
            </div>
          </div>
        </div>

        {/* Latest */}
        <aside>
          <h3 className="text-lg font-bold mb-4">ताज़ा खबरें</h3>
          <div className="space-y-4">
            {latest.map((item) => (
              <Link key={item.id} href={item.url} className="flex gap-3 items-start bg-white p-3 rounded shadow-sm hover:shadow-md transition-shadow">
                <div className="w-20 h-16 relative flex-shrink-0 rounded overflow-hidden">
                  <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 line-clamp-2">{item.title}</h4>
                  <div className="text-xs text-gray-500 mt-1">{new Date(item.publishedAt).toLocaleDateString('hi-IN')}</div>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
