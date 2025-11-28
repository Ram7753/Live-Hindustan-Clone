import { NewsArticle } from '@/types/news';

export const news: NewsArticle[] = [
  {
    id: '1',
    title: 'दिल्ली में भारी बारिश की चेतावनी, कई इलाकों में जलभराव की स्थिति',
    description: 'मौसम विभाग ने दिल्ली-एनसीआर में अगले 24 घंटे के दौरान भारी बारिश की चेतावनी जारी की है।',
    content:
      'मौसम विभाग के मुताबिक, दिल्ली-एनसीआर में अगले 24 घंटे के दौरान भारी बारिश होने की संभावना है। इसके चलते कई इलाकों में जलभराव की स्थिति बन सकती है। प्रशासन ने अलर्ट जारी करते हुए लोगों से सतर्क रहने की अपील की है।',
    category: 'देश',
    imageUrl:
      'https://images.unsplash.com/photo-1587474260584-011574585bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    publishedAt: new Date().toISOString(),
    author: 'रमेश शर्मा',
    url: '/articles/1',
    source: {
      name: 'Live Hindustan',
      url: 'https://www.livehindustan.com',
    },
  },
  {
    id: '2',
    title: 'टीम इंडिया ने जीता T20 सीरीज, कोहली ने खेली शानदार पारी',
    description: 'विराट कोहली के शतक की मदद से भारत ने वेस्टइंडीज के खिलाफ T20 सीरीज पर कब्जा जमा लिया है।',
    content:
      'विराट कोहली के शानदार शतक की बदौलत भारतीय क्रिकेट टीम ने वेस्टइंडीज के खिलाफ T20 सीरीज 3-2 से जीत ली है। कोहली ने नाबाद 110 रनों की पारी खेलकर टीम को जीत दिलाई। इस जीत के साथ ही भारत ने वेस्टइंडीज दौरे पर सभी तीनों फॉर्मेट जीतकर इतिहास रच दिया है।',
    category: 'खेल',
    imageUrl:
      'https://images.unsplash.com/photo-1608889825103-eb2e7177b2ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    publishedAt: new Date().toISOString(),
    author: 'सुरेश रैना',
    url: '/articles/2',
    source: {
      name: 'Live Hindustan',
      url: 'https://www.livehindustan.com',
    },
  },
  {
    id: '3',
    title: 'बिजली बिलों में कटौती के लिए नई योजना घोषित',
    description: 'सरकार ने घरेलू उपयोगकर्ताओं के लिए सब्सिडी बढ़ाने का प्रस्ताव रखा।',
    content:
      'केंद्र सरकार ने घरेलू उपयोगकर्ताओं के लिए बिजली सब्सिडी बढ़ाने का प्रस्ताव रखा है। यह कदम आर्थिक भार को कम करने और ऊर्जा की पहुंच बढ़ाने के उद्देश्य से लिया गया है।',
    category: 'आर्थिक',
    imageUrl:
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    publishedAt: new Date().toISOString(),
    author: 'नीलिमा वर्मा',
    url: '/articles/3',
    source: {
      name: 'Live Hindustan',
      url: 'https://www.livehindustan.com',
    },
  },
];

export default news;
