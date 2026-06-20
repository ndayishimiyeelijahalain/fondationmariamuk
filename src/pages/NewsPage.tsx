import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Search, Filter, ArrowRight } from 'lucide-react';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'news', label: 'News' },
    { id: 'stories', label: 'Success Stories' },
    { id: 'events', label: 'Events' },
    { id: 'press', label: 'Press Releases' },
  ];

  const articles = [
    {
      id: 1,
      title: 'Fondation Mariam Celebrates 46 Years of Service',
      excerpt: 'A milestone celebration of four decades of transforming lives across Burundi.',
      category: 'news',
      date: '2024-06-15',
      author: 'Fondation Mariam Team',
      image: 'gallery/children-05.jpg',
      featured: true,
    },
    {
      id: 2,
      title: 'Marie-Claire\'s Journey to Education',
      excerpt: 'From vulnerability to university - one beneficiary\'s inspiring story.',
      category: 'stories',
      date: '2024-06-10',
      author: 'Communications Team',
      image: 'gallery/children-05.jpg',
      featured: false,
    },
    {
      id: 3,
      title: 'New Healthcare Program Launched',
      excerpt: 'Expanding medical support to reach more communities in need.',
      category: 'news',
      date: '2024-06-05',
      author: 'Program Team',
      image: '',
      featured: false,
    },
    {
      id: 4,
      title: 'Taekwondo Team Wins Regional Championship',
      excerpt: 'Our youth athletes bring home 3 gold medals from the regional tournament.',
      category: 'events',
      date: '2024-05-28',
      author: 'Sports Department',
      image: '',
      featured: false,
    },
    {
      id: 5,
      title: 'Partnership Announcement with USAID',
      excerpt: 'New collaboration to expand educational opportunities for vulnerable children.',
      category: 'press',
      date: '2024-05-20',
      author: 'Partnerships Team',
      image: '',
      featured: false,
    },
    {
      id: 6,
      title: 'Graduation Ceremony for Vocational Training',
      excerpt: '200 women complete tailoring and entrepreneurship programs.',
      category: 'events',
      date: '2024-05-15',
      author: 'Women Empowerment Team',
      image: '',
      featured: false,
    },
  ];

  const filteredArticles = articles
    .filter(a => selectedCategory === 'all' || a.category === selectedCategory)
    .filter(a =>
      searchQuery === '' ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = filteredArticles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#1E3A5F] to-[#0F2744] overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
              News & Stories
            </h1>
            <p className="text-lg text-white/80">
              Updates, impact stories, and announcements from Fondation Mariam
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-100 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2 overflow-x-auto">
              <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#1E3A5F]'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-2 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === 'all' && searchQuery === '' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative rounded-2xl overflow-hidden h-80 lg:h-full">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-medium mb-4">
                    Featured
                  </span>
                  <h2 className="text-3xl font-serif font-bold text-[#1E3A5F] mb-4 group-hover:text-[#D4AF37] transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredArticle.author}
                    </div>
                  </div>
                  <Link
                    to={`/news/${featuredArticle.id}`}
                    className="inline-flex items-center gap-2 text-[#1E3A5F] font-medium hover:text-[#D4AF37] transition-colors"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-1 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#1E3A5F] rounded-full text-xs font-medium capitalize">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-[#1E3A5F] mb-2 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </div>
                    <Link
                      to={`/news/${article.id}`}
                      className="text-[#D4AF37] font-medium hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
