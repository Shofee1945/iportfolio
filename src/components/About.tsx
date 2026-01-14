'use client';

import { motion } from 'framer-motion';
import { 
  User,
  GraduationCap,
  Briefcase,
  Award,
  MapPin,
  Calendar,
  Code 
} from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2022 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      icon: <Briefcase className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Leading development of scalable web applications using modern tech stack.'
    },
    {
      year: '2020 - 2022',
      title: 'Frontend Developer',
      company: 'Digital Solutions Co.',
      icon: <Code className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      description: 'Built responsive user interfaces and collaborated with design teams.'
    },
    {
      year: '2018 - 2020',
      title: 'Computer Science Degree',
      company: 'State University',
      icon: <GraduationCap className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',
      description: 'Specialized in software engineering and web technologies.'
    },
    {
      year: '2017',
      title: 'First Web Project',
      company: 'Freelance',
      icon: <Award className="w-5 h-5" />,
      color: 'from-orange-500 to-yellow-500',
      description: 'Started freelance journey with basic HTML/CSS websites.'
    }
  ];

  const highlights = [
    { icon: <MapPin />, title: 'Based in', value: 'Jakarta, Indonesia' },
    { icon: <Calendar />, title: 'Experience', value: '5+ Years' },
    { icon: <Briefcase />, title: 'Projects', value: '50+' },
    { icon: <Award />, title: 'Certifications', value: '12' },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Circle akan dipindah nanti ke sistem baru */}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              My <span className="gradient-text">Journey</span>
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            From passion to profession - the story behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Profile & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div className="glass rounded-[2rem] p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                    <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                      <User className="w-20 h-20 text-gray-400" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-white font-bold">5+</span>
                  </div>
                </div>

                {/* Bio */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Full Stack Developer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Specializing in modern web technologies and scalable architecture.
                    Passionate about creating digital solutions that make an impact.
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 font-medium">
                      Available
                    </div>
                    <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-300 font-medium">
                      Remote Work
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass rounded-2xl p-6 text-center group hover:scale-[1.02] transition-transform"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-blue-600 dark:text-blue-400">
                      {item.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {item.title}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-[2rem] p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Career <span className="gradient-text">Timeline</span>
              </h3>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-pink-500/30" />
                
                {/* Timeline items */}
                <div className="space-y-8">
                  {timeline.map((item, idx) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative flex gap-6"
                    >
                      {/* Timeline dot */}
                      <div className="relative z-10">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                          <div className="text-white">
                            {item.icon}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-2">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">
                            {item.year}
                          </span>
                          <h4 className="font-bold text-gray-900 dark:text-white">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                          {item.company}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="glass rounded-[2rem] p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Development <span className="gradient-text">Philosophy</span>
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>Write clean, maintainable code that tells a story</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>Prioritize user experience in every decision</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>Stay curious and continuously learn new technologies</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>Build scalable solutions that grow with your business</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;