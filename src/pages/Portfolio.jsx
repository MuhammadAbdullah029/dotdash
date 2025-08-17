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
    { id: 'blog', label: 'Blog' }
  ]

  const projects = [
  {
    id: 1,
    title: 'Photographer Portfolio',
    category: 'portfolio',
    description: 'A minimalist and elegant portfolio website for a professional photographer, featuring a dynamic gallery and seamless user experience.',
    image: '/Portfolio/Portfolio.png',
    tags: ['React', 'TailwindCSS'],
    liveUrl: 'https://muhammadabdullah029.github.io/RichardRyan/',
    githubUrl: 'https://github.com/MuhammadAbdullah029/RichardRyan'
  },
  {
    id: 2,
    title: 'Redix',
    category: 'branding',
    description: 'A modern brand identity and web presence for Ridex, a platform to search and book affordable rental cars with ease.',
    image: '/Portfolio/redix.png',
    tags: ['Brand Design', 'Logo', 'Guidelines'],
    liveUrl: 'https://muhammadabdullah029.github.io/redix/',
    githubUrl: 'https://github.com/MuhammadAbdullah029/redix'
  },
  {
    id: 3,
    title: 'Anon Ecommerce Website',
    category: 'ecommerce',
    description: 'A sleek and secure e-commerce platform for anonymous products, offering a modern design and intuitive shopping experience.',
    image: '/Portfolio/anon.png',
    tags: ['React', 'Framer Motion', 'Tailwind', 'CMS'],
    liveUrl: 'https://muhammadabdullah029.github.io/anon/',
    githubUrl: 'https://github.com/MuhammadAbdullah029/anon'
  },
  {
    id: 4,
    title: 'Blogy',
    category: 'blog',
    description: 'A clean and modern blogging platform designed for content creators, with a focus on readability and user engagement.',
    image: '/Portfolio/blogy.png',
    tags: ['React.js', 'Tailwind CSS'],
    liveUrl: 'https://muhammadabdullah029.github.io/blogy/',
    githubUrl: 'https://github.com/MuhammadAbdullah029/blogy'
  },
  {
    id: 5,
    title: 'Casmart E-commerce',
    category: 'ecommerce',
    description: 'A cutting-edge e-commerce site for smart home devices, featuring a stylish interface and smooth shopping journey.',
    image: '/Portfolio/casmart.png',
    tags: ['React', 'Tailwind CSS', 'Stripe'],
    liveUrl: 'https://muhammadabdullah029.github.io/casmart/',
    githubUrl: 'https://github.com/MuhammadAbdullah029/casmart'
  },
  {
    id: 6,
    title: 'Das Grüne Agency',
    category: 'branding',
    description: 'A vibrant branding project for Das Grüne, a digital agency, showcasing creative design and interactive web elements.',
    image: '/Portfolio/DasGrune.webp',
    tags: ['Brand Design', 'React', 'GSAP'],
    liveUrl: 'https://das-grune-kmc4081zb-muhammad-abdullahs-projects-fd44b5c2.vercel.app/',
    githubUrl: 'https://github.com/MuhammadAbdullah029/Das-Grune'
  },
  {
    id: 7,
    title: 'Tickr',
    category: 'ecommerce',
    description: 'A high-performance e-commerce platform for digital products, optimized for speed, SEO, and user experience.',
    image: '/Portfolio/Tickr.png',
    tags: ['HTML', 'CSS', 'JS', 'SEO'],
    liveUrl: 'https://muhammadabdullah029.github.io/tickr/',
    githubUrl: 'https://github.com/MuhammadAbdullah029/tickr'
  },
  {
    id: 8,
    title: 'Travel Agency',
    category: 'branding',
    description: 'A visually appealing website for a travel agency, designed to inspire adventure and simplify trip planning.',
    image: '/Portfolio/Travel.png',
    tags: ['HTML', 'CSS', 'JS', 'SEO'],
    liveUrl: 'https://muhammadabdullah029.github.io/travel/',
    githubUrl: 'https://github.com/MuhammadAbdullah029/travel'
  },
  {
    id: 9,
    title: 'vCard Portfolio',
    category: 'portfolio',
    description: 'A stylish and responsive portfolio website to showcase personal projects and professional skills.',
    image: '/Portfolio/portfolio.png',
    tags: ['HTML', 'CSS', 'JS'],
    liveUrl: 'https://muhammadabdullah029.github.io/vCard/',
    githubUrl: 'https://github.com/MuhammadAbdullah029/vCard'
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
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">30+</div>
              <div className="text-sm md:text-base font-medium text-white">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">25+</div>
              <div className="text-sm md:text-base font-medium text-white">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">3</div>
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
