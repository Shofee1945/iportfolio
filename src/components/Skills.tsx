'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Server, Database, Cloud, Smartphone, Zap, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Framer Motion', level: 85 },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python/FastAPI', level: 85 },
        { name: 'REST/GraphQL', level: 88 },
        { name: 'Authentication', level: 92 },
      ]
    },
    {
      title: 'UI/UX Design',
      icon: <Palette className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Figma', level: 88 },
        { name: 'Prototyping', level: 85 },
        { name: 'User Research', level: 80 },
        { name: 'Design Systems', level: 82 },
      ]
    },
    {
      title: 'Database & DevOps',
      icon: <Database className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'MongoDB/PostgreSQL', level: 87 },
        { name: 'AWS/Azure', level: 83 },
        { name: 'Docker/K8s', level: 80 },
        { name: 'CI/CD', level: 85 },
      ]
    }
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: <Zap className="w-5 h-5" />, level: 95 },
    { name: 'Team Collaboration', icon: <Cpu className="w-5 h-5" />, level: 90 },
    { name: 'Communication', icon: <Smartphone className="w-5 h-5" />, level: 92 },
    { name: 'Project Management', icon: <Cloud className="w-5 h-5" />, level: 85 },
  ];

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-600 to-purple-600 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-white">
              My <span className="gradient-text">Skills</span>
            </h2>
          </div>
          <p className="text-gray-600 text-gray-300 max-w-3xl mx-auto text-lg">
            A comprehensive skill set to tackle any development challenge
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass rounded-[2rem] p-8 h-full hover:shadow-2xl transition-all duration-300">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold text-gray-600 text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 text-white mb-4">
              Professional <span className="gradient-text">Skills</span>
            </h3>
            <p className="text-gray-600 text-gray-300">
              Beyond technical expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="glass rounded-2xl p-6 text-center group cursor-default"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="text-blue-400">
                    {skill.icon}
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 text-white mb-2">
                  {skill.name}
                </h4>
                <div className="flex items-center justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < Math.floor(skill.level / 20)
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                          : 'bg-gray-800'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-[2rem] p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 text-white mb-4">
                Development <span className="gradient-text">Experience</span>
              </h3>
              <p className="text-gray-600 text-gray-300">
                Years of hands-on experience across the stack
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { year: '3+', title: 'Years Experience', desc: 'Full Stack Development' },
                { year: '50+', title: 'Projects Completed', desc: 'From concept to deployment' },
                { year: '100%', title: 'Client Satisfaction', desc: 'Delivering exceptional results' },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900"
                >
                  <div className="text-5xl font-bold gradient-text mb-2">
                    {item.year}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-gray-400">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Learning Path */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-gray-800"
            >
              <h4 className="text-2xl font-bold  text-white mb-6 text-center">
                Currently <span className="gradient-text">Learning</span>
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {['Web3 Development', 'Machine Learning', 'Rust', 'Three.js', 'Serverless Architecture'].map((tech, idx) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 font-medium hover:shadow-lg transition-all"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
