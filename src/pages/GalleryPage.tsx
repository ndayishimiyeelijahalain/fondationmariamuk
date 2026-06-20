import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'children', label: 'Children' },
    { id: 'women', label: 'Women Programs' },
    { id: 'education', label: 'Education' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'events', label: 'Events' },
    { id: 'sports', label: 'Taekwondo' },
    { id: 'culture', label: 'Culture' },
  ];

  const images = [
    { id: 1, src: '/gallery/children-01.jpg', category: 'children', title: 'Children Learning' },
    { id: 2, src: '/gallery/children-02.jpg', category: 'children', title: 'Children Activity' },
    { id: 3, src: '/gallery/children-03.jpg', category: 'children', title: 'Children Program' },
    { id: 4, src: '/gallery/children-04.jpg', category: 'children', title: 'Children Support' },
    { id: 5, src: '/gallery/children-05.jpg', category: 'children', title: 'Children Education' },
  
    { id: 6, src: '/gallery/woman-01.jpg', category: 'women', title: 'Women Empowerment' },
    { id: 7, src: '/gallery/woman-02.jpg', category: 'women', title: 'Women Training' },
    { id: 8, src: '/gallery/woman-03.jpg', category: 'women', title: 'Women Skills' },
  
    { id: 9, src: '/gallery/craft-01.jpg', category: 'culture', title: 'Craft Work' },
    { id: 10, src: '/gallery/craft-02.jpg', category: 'culture', title: 'Handcraft Activity' },
    { id: 11, src: '/gallery/craft-03.jpg', category: 'culture', title: 'Local Craft' },
  
    { id: 12, src: '/gallery/culture-01.jpg', category: 'culture', title: 'Cultural Event' },
    { id: 13, src: '/gallery/culture-02.jpg', category: 'culture', title: 'Culture Activity' },
    { id: 14, src: '/gallery/culture-03.jpg', category: 'culture', title: 'Community Culture' },
  
    { id: 15, src: '/gallery/taekwondo-01.jpg', category: 'sports', title: 'Taekwondo Training' },
    { id: 16, src: '/gallery/taekwondo-02.jpg', category: 'sports', title: 'Martial Arts' },
    { id: 17, src: '/gallery/taekwondo-03.jpg', category: 'sports', title: 'Sports Discipline' },
    { id: 18, src: '/gallery/taekwondo-04.jpg', category: 'sports', title: 'Training Session' },
  ];
  const filteredImages =
    selectedCategory === 'all'
      ? images
      : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-20">

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#1E3A5F] to-[#0F2744] overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
              {t.gallery.title}
            </h1>
            <p className="text-lg text-white/80">
              {t.gallery.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-gray-50 border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />

            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#1E3A5F]'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border'
                }`}
              >
                {t.gallery[`category${cat.id.charAt(0).toUpperCase() + cat.id.slice(1)}` as keyof typeof t.gallery]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredImages.map(img => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setSelectedImage(img.id)}
                  className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
                  <div className="absolute bottom-0 p-4 text-white opacity-0 group-hover:opacity-100">
                    {img.title}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white"
            >
              <X size={32} />
            </button>

            <motion.img
              src={images.find(i => i.id === selectedImage)?.src}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              onClick={e => e.stopPropagation()}
            />

            <button
              className="absolute left-4 text-white"
              onClick={e => {
                e.stopPropagation();
                const index = filteredImages.findIndex(i => i.id === selectedImage);
                const prev = filteredImages[(index - 1 + filteredImages.length) % filteredImages.length];
                setSelectedImage(prev.id);
              }}
            >
              <ChevronLeft size={40} />
            </button>

            <button
              className="absolute right-4 text-white"
              onClick={e => {
                e.stopPropagation();
                const index = filteredImages.findIndex(i => i.id === selectedImage);
                const next = filteredImages[(index + 1) % filteredImages.length];
                setSelectedImage(next.id);
              }}
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
