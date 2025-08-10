import { motion } from 'framer-motion'
import { Users, Target, Award, Heart, Linkedin, Twitter, Github } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay ahead of the curve by embracing new technologies and creative solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their vision and bring it to life.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering exceptional quality and results.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and it shows in every pixel, line of code, and design decision.'
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'With over 8 years of experience in design, Sarah leads our creative vision and ensures every project tells a compelling story.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Michael brings technical expertise and innovative solutions to complex development challenges with 10+ years of experience.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX/UI Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Emily specializes in creating intuitive user experiences that delight users and drive business results.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'David Kim',
      role: 'Brand Strategist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'David helps brands find their unique voice and position in the market through strategic thinking and creative execution.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
  ]

  const stats = [
    { value: '5+', label: 'Years in Business' },
    { value: '200+', label: 'Projects Delivered' },
    { value: '150+', label: 'Happy Clients' },
    { value: '50+', label: 'Awards Won' }
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
            <div className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full text-color text-sm font-medium mb-6 border border-[#192A55]/10">
              <Users className="w-4 h-4 mr-2 text-color" />
              About Us
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-700">
              About <span className="gradient-text">Dot&Dash</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're a passionate team of designers and developers creating digital experiences that make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-600">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2019, DOt&Dash began as a small team of passionate designers and developers
                  who believed that great design could change the world. We started with a simple mission:
                  to help businesses tell their stories through beautiful, functional digital experiences.
                </p>
                <p>
                  Over the years, we've grown into a full-service digital agency, but our core values
                  remain the same. We believe in the power of collaboration, the importance of innovation,
                  and the impact of thoughtful design.
                </p>
                <p>
                  Today, we're proud to have worked with over 150 clients, from startups to Fortune 500
                  companies, helping them achieve their digital goals and connect with their audiences
                  in meaningful ways.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Our team working together"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 animate-root-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-700">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-color mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#192A55]">
              Meet Our <span className="text-[#D4BF7E]">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals who bring creativity, expertise, and passion to every project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-100"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#192A55] mb-2">{member.name}</h3>
                <p className="text-[#D4BF7E] text-sm mb-4 font-medium">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-gray-100 hover:bg-[#192A55] rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-8 h-8 bg-gray-100 hover:bg-[#192A55] rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-colors"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href={member.social.github}
                    className="w-8 h-8 bg-gray-100 hover:bg-[#192A55] rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.value}</div>
                <div className="text-sm md:text-base font-medium text-white">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
