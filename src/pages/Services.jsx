import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Palette, Briefcase, Code, Smartphone, Search, ArrowRight, Award } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Services = () => {
  const location = useLocation()
  const serviceRefs = useRef([])

  useEffect(() => {
    // Scroll to specific service if coming from home page
    if (location.state?.scrollToService !== undefined) {
      const serviceIndex = location.state.scrollToService
      if (serviceRefs.current[serviceIndex]) {
        setTimeout(() => {
          serviceRefs.current[serviceIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          })
        }, 500)
      }
    }
  }, [location.state])

  const mainServices = [
    {
      icon: ShoppingCart,
      title: 'E-commerce Development',
      description: 'Build powerful online stores that convert visitors into customers with seamless shopping experiences.',
      features: [
        'Custom shopping cart solutions',
        'Payment gateway integration',
        'Inventory management systems',
        'Mobile-responsive design',
        'SEO optimization',
        'Analytics & reporting'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Palette,
      title: 'Brand Identity & Design',
      description: 'Create memorable brand experiences that resonate with your audience and stand out in the market.',
      features: [
        'Logo design & branding',
        'Brand guidelines & style guides',
        'Marketing materials',
        'Social media assets',
        'Print & digital design',
        'Brand strategy consulting'
      ],
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Briefcase,
      title: 'Portfolio Website Creation',
      description: 'Showcase your work with stunning, professional portfolio sites that highlight your expertise.',
      features: [
        'Custom portfolio layouts',
        'Interactive galleries',
        'Client testimonials',
        'Contact forms',
        'Blog integration',
        'Performance optimization'
      ],
      color: 'from-green-500 to-teal-600'
    }
  ]

  const additionalServices = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Design',
      description: 'Native and cross-platform mobile applications'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and visibility'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and project requirements.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive strategy and create wireframes and prototypes.'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Our designers create beautiful, user-friendly interfaces that align with your brand.'
    },
    {
      step: '04',
      title: 'Development',
      description: 'We build your project using the latest technologies and best practices.'
    },
    {
      step: '05',
      title: 'Launch',
      description: 'We deploy your project and provide ongoing support and maintenance.'
    }
  ]

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
            <div className="inline-flex items-center px-4 py-2 bg-[#192A55]/5 rounded-full text-[#192A55] text-sm font-medium mb-6 border border-[#192A55]/10">
              <Award className="w-4 h-4 mr-2 text-blue-600" />
              Professional Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#192A55]">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive digital solutions to help your business thrive in the modern world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                ref={(el) => (serviceRefs.current[index] = el)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-[#192A55] rounded-2xl flex items-center justify-center">
                        <service.icon size={32} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#192A55]">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-[#192A55] rounded-full"></div>
                          <span className="text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="relative"
                  >
                    <div className="w-full h-80 bg-white rounded-3xl flex items-center justify-center shadow-lg border border-gray-100">
                      <service.icon size={120} className="text-[#192A55] opacity-20" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 animate-root-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#192A55]">
              Additional <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We also offer a range of complementary services to support your digital presence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#192A55] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#192A55] mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#192A55]">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure your project is delivered on time and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#192A55] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-[#192A55] mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#192A55]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss your project and create something amazing together.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-br from-slate-900 to-slate-800 text-[#fff] px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 mx-auto hover:bg-slate-900 transition-colors"
              >
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
