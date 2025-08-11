import { motion } from 'framer-motion'
import { ArrowRight, Star, Users, Award, TrendingUp, CheckCircle, ShoppingCart, Palette, Briefcase, Shield, Clock, Target, Quote, Globe } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { StaggerContainer, StaggerItem, FloatingElement } from '../components/ScrollAnimations'

const Home = () => {
  const navigate = useNavigate()

  const handleServiceClick = (serviceIndex) => {
    navigate('/services', { state: { scrollToService: serviceIndex } })
  }

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients', description: 'Trusted by businesses worldwide' },
    { icon: Award, value: '1000+', label: 'Projects Delivered', description: 'Successfully completed projects' },
    { icon: Star, value: '4.9/5', label: 'Client Satisfaction', description: 'Average client rating' },
    { icon: TrendingUp, value: '300%', label: 'Growth Rate', description: 'Average client business growth' }
  ]

  const services = [
    {
      title: 'E-commerce Solutions',
      description: 'Transform your business with cutting-edge online stores that drive sales and enhance customer experience',
      icon: ShoppingCart,
      features: ['Custom Shopping Cart', 'Payment Integration', 'Inventory Management', 'Mobile Optimization']
    },
    {
      title: 'Brand Identity & Design',
      description: 'Craft compelling brand stories that connect with your audience and stand out in the marketplace',
      icon: Palette,
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Digital Assets']
    },
    {
      title: 'Portfolio & Corporate Sites',
      description: 'Professional websites that showcase your expertise and build trust with potential clients',
      icon: Briefcase,
      features: ['Responsive Design', 'CMS Integration', 'SEO Optimization', 'Performance Tuned']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      quote: 'DOt&Dash transformed our online presence completely. Our sales increased by 300% within the first quarter.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, Creative Studio',
      quote: 'The team delivered beyond our expectations. The attention to detail and professionalism is unmatched.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, Fashion Brand',
      quote: 'Working with DOt&Dash was a game-changer. They understood our vision and brought it to life perfectly.',
      rating: 5
    }
  ]

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Proven Track Record',
      description: '5+ years of delivering exceptional digital solutions'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising quality'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Focused on achieving your business objectives'
    },
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Recognized for excellence in design and development'
    }
  ]

  return (
    <div className="pt-[2rem]">
      {/* Hero Section */}
      <section className="relative min-h-screen py-[3rem] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 ">
        {/* Clean Professional Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 via-transparent to-transparent"></div>
        </div>

        {/* Subtle Professional Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-100/20 to-teal-100/20 rounded-full blur-3xl"></div>
        </div>

        {/* Professional Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #1e40af 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 w-[95%] py-[3rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-6 py-3 bg-emerald-50 rounded-full text-color text-sm font-medium border border-blue-100">
                <Award className="w-4 h-4 mr-2" />
                <span className="font-semibold">
                  Best Digital Solutions
                </span>
              </div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-slate-600">We Build </span>
                <br />
                <span className="gradient-text text-7xl">
                  Digital Excellence
                </span>
                <br />
                <span className="text-slate-600">That Delivers Results</span>
              </motion.h1>

              <motion.p
                className="text-xl text-slate-600 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We transform ambitious ideas into powerful digital solutions. From stunning websites to comprehensive e-commerce platforms, we deliver results that exceed expectations and drive business growth.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <span>Get Started</span>
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>

                <Link to="/portfolio">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 flex items-center space-x-2"
                  >
                    <Globe size={20} />
                    <span>View Our Work</span>
                  </motion.button>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex items-center space-x-8 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-700">500+</div>
                  <div className="text-sm text-slate-500">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">1000+</div>
                  <div className="text-sm text-slate-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-700">4.9★</div>
                  <div className="text-sm text-slate-500">Rating</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Professional Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Dashboard Card */}
                <div className="animate-root-colors rounded-3xl shadow-2xl p-8 border border-slate-200">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">Analytics Dashboard</div>
                          <div className="text-sm text-slate-500">Real-time Performance</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-600">+247%</div>
                        <div className="text-sm text-slate-500">Growth</div>
                      </div>
                    </div>

                    <div className="h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center border border-blue-100">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-slate-900 mb-2">2,847</div>
                        <div className="text-sm text-slate-600">Active Users</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="text-lg font-bold text-slate-900">99.9%</div>
                        <div className="text-xs text-slate-500">Uptime</div>
                      </div>
                      <div className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="text-lg font-bold text-slate-900">0.8s</div>
                        <div className="text-xs text-slate-500">Load Time</div>
                      </div>
                      <div className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="text-lg font-bold text-slate-900">A+</div>
                        <div className="text-xs text-slate-500">Security</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <FloatingElement duration={6} amplitude={15}>
                  <div className="absolute -bottom-10 -right-4 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                </FloatingElement>

                <FloatingElement duration={4} delay={1} amplitude={10}>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl border-4 border-white">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </FloatingElement>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our track record speaks for itself. Here's what we've achieved together with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group h-[38vh]"
              >
                <div className="bg-white/5 backdrop-blur-sm h-full rounded-2xl p-6 hover:scale-105 transition-all duration-300 border border-white/10">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg ${
                    index === 0 ? 'bg-gradient-to-br from-blue-500 to-indigo-600' :
                    index === 1 ? 'bg-gradient-to-br from-emerald-500 to-teal-600' :
                    index === 2 ? 'bg-gradient-to-br from-indigo-500 to-purple-600' :
                    'bg-gradient-to-br from-teal-500 to-cyan-600'
                  }`}>
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                    index === 0 ? 'text-blue-400' :
                    index === 1 ? 'text-emerald-400' :
                    index === 2 ? 'text-indigo-400' :
                    'text-teal-400'
                  }`}>{stat.value}</div>
                  <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                  <div className="text-sm text-slate-400">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-emerald-50 rounded-full text-color text-sm font-medium mb-6 border border-blue-100">
              <Target className="w-4 h-4 mr-2" />
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Services That Drive <span className="gradient-text">Success</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From concept to launch, we provide comprehensive digital solutions that transform your business and exceed your expectations.
            </p>
          </motion.div>

          <StaggerContainer>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="glass-gradient p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 h-full border border-white/20 backdrop-blur-xl group cursor-pointer"
                    onClick={() => handleServiceClick(index)}
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 ${
                      index === 0 ? 'bg-gradient-to-br from-blue-500 to-indigo-600' :
                      index === 1 ? 'bg-gradient-to-br from-emerald-500 to-teal-600' :
                      'bg-gradient-to-br from-indigo-500 to-purple-600'
                    }`}>
                      <service.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                            index === 0 ? 'bg-blue-500' :
                            index === 1 ? 'bg-emerald-500' :
                            'bg-indigo-500'
                          }`}></div>
                          <span className="text-slate-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className={`w-full text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 ${
                        index === 0 ? 'bg-gradient-to-r from-blue-600 to-indigo-600' :
                        index === 1 ? 'bg-gradient-to-r from-emerald-600 to-teal-600' :
                        'bg-gradient-to-r from-indigo-600 to-purple-600'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleServiceClick(index)
                      }}
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-gradient rounded-3xl p-8 hover:scale-105 transition-all duration-300 border border-white/10"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-emerald-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-white/70">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 animate-root-colors">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/3 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-800">
              Why Choose <span className="gradient-text">DOt&Dash</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine creativity, technology, and strategy to deliver exceptional results that drive your business forward.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br1 relative overflow-hidden">
        {/* Floating Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-teal-400/15 to-cyan-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Let's discuss your project and create something extraordinary together. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.07, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute w-full inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Start Your Journey</span>
                  <ArrowRight size={20} className="relative z-10" />
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-gradient border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
                >
                  View Our Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
