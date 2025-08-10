import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Filter, Award } from 'lucide-react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'branding', label: 'Branding' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'webapp', label: 'Web Apps' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Luxury Fashion Store',
      category: 'ecommerce',
      description: 'A high-end fashion e-commerce platform with advanced filtering and seamless checkout.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Creative Agency Rebrand',
      category: 'branding',
      description: 'Complete brand identity redesign for a creative agency including logo, guidelines, and assets.',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
      tags: ['Brand Design', 'Logo', 'Guidelines', 'Print'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Artist Portfolio Website',
      category: 'portfolio',
      description: 'A stunning portfolio website for a contemporary artist showcasing their work.',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop',
      tags: ['React', 'Framer Motion', 'Tailwind', 'CMS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Tech Startup Dashboard',
      category: 'webapp',
      description: 'A comprehensive analytics dashboard for a tech startup with real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Organic Food Store',
      category: 'ecommerce',
      description: 'An eco-friendly e-commerce platform for organic food products with subscription features.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop',
      tags: ['Shopify', 'React', 'Subscription', 'Payment'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Restaurant Brand Identity',
      category: 'branding',
      description: 'Modern brand identity for a fine dining restaurant including menu design and signage.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      tags: ['Brand Design', 'Menu Design', 'Signage', 'Photography'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 7,
      title: 'Photographer Portfolio',
      category: 'portfolio',
      description: 'A minimalist portfolio website for a professional photographer with gallery features.',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop',
      tags: ['Next.js', 'Lightbox', 'Gallery', 'SEO'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 8,
      title: 'Project Management Tool',
      category: 'webapp',
      description: 'A collaborative project management tool with team features and real-time updates.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 9,
      title: 'Jewelry E-commerce',
      category: 'ecommerce',
      description: 'Elegant e-commerce platform for luxury jewelry with 360° product views.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop',
      tags: ['React', 'Three.js', 'Stripe', 'CMS'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 animate-root-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full text-color text-sm font-medium mb-6 border border-[#192A55]/10">
              <Award className="w-4 h-4 mr-2 text-color" />
              Our Work
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#192A55]">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of successful projects that showcase our expertise and creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg text-white'
                    : 'bg-white text-[#192A55] hover:bg-slate-900 hover:text-white border border-gray-200'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#41ffb9]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                          <div className="flex space-x-3">
                            <motion.a
                              href={project.liveUrl}
                              whileHover={{ scale: 1.1 }}
                              className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-colors"
                            >
                              <ExternalLink size={18} />
                            </motion.a>
                            <motion.a
                              href={project.githubUrl}
                              whileHover={{ scale: 1.1 }}
                              className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-colors"
                            >
                              <Github size={18} />
                            </motion.a>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-color text-xs font-medium px-3 py-1 rounded-full">
                          {filters.find(f => f.id === project.category)?.label}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-color mb-3">{project.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">200+</div>
              <div className="text-sm md:text-base font-medium text-white">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">150+</div>
              <div className="text-sm md:text-base font-medium text-white">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">5</div>
              <div className="text-sm md:text-base font-medium text-white">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">24/7</div>
              <div className="text-sm md:text-base font-medium text-white">Support</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
