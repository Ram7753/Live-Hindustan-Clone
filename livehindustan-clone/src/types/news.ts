export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  imageUrl: string;
  publishedAt: string;
  author: string;
  url: string;
  source: {
    name: string;
    url: string;
  };
}
