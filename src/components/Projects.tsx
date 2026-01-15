'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, Eye, Sparkles, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with real-time inventory, payment processing, and admin dashboard.',
      tech: ['Next.js 14', 'Stripe', 'MongoDB', 'Tailwind', 'Redux'],
      github: '#',
      live: '#',
      imageColor: 'from-blue-500/20 to-cyan-500/20',
      accentColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    },
    {
      title: 'AI SaaS Dashboard',
      description: 'Analytics platform with machine learning predictions and interactive data visualizations.',
      tech: ['React', 'FastAPI', 'PostgreSQL', 'Chart.js', 'Docker'],
      github: '#',
      live: '#',
      imageColor: 'from-purple-500/20 to-pink-500/20',
      accentColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
    },
    {
      title: 'Fitness Tracker App',
      description: 'Mobile-first fitness application with workout plans, progress tracking, and social features.',
      tech: ['React Native', 'Node.js', 'Firebase', 'Expo', 'GraphQL'],
      github: '#',
      live: '#',
      imageColor: 'from-green-500/20 to-emerald-500/20',
      accentColor: 'bg-gradient-to-r from-green-500 to-emerald-500',
    },
    {
      title: 'Cryptocurrency Dashboard',
      description: 'Real-time crypto trading dashboard with portfolio management and market analytics.',
      tech: ['Vue.js', 'WebSockets', 'Express', 'Redis', 'AWS'],
      github: '#',
      live: '#',
      imageColor: 'from-orange-500/20 to-red-500/20',
      accentColor: 'bg-gradient-to-r from-orange-500 to-red-500',
    },
    {
      title: 'Collaboration Tool',
      description: 'Project management platform with real-time collaboration, video calls, and file sharing.',
      tech: ['TypeScript', 'Socket.io', 'PostgreSQL', 'WebRTC', 'S3'],
      github: '#',
      live: '#',
      imageColor: 'from-indigo-500/20 to-violet-500/20',
      accentColor: 'bg-gradient-to-r from-indigo-500 to-violet-500',
    },
    {
      title: 'Healthcare Portal',
      description: 'Secure patient management system with appointment scheduling and telemedicine features.',
      tech: ['Next.js', 'Python', 'MySQL', 'JWT', 'Twilio'],
      github: '#',
      live: '#',
      imageColor: 'from-teal-500/20 to-cyan-500/20',
      accentColor: 'bg-gradient-to-r from-teal-500 to-cyan-500',
    },
  ];

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-white">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <p className="text-gray-600 text-gray-300 max-w-3xl mx-auto text-lg">
            Showcasing my best work - from concept to deployment
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              project={project}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 glass rounded-2xl text-lg font-semibold hover:shadow-2xl transition-all group"
          >
            View All Projects
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

// 3D Card Component
const ProjectCard = ({ project, index, hoveredIndex, setHoveredIndex }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHoveredIndex(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative cursor-pointer group"
    >
      {/* Card Glow Effect */}
      <div className={`absolute -inset-2 rounded-3xl bg-gradient-to-r ${project.imageColor} blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />

      {/* Main Card */}
      <div className="relative glass rounded-[2rem] p-8 h-full transform-gpu overflow-hidden">
        {/* Project Image Placeholder */}
        <div className="relative mb-6">
          <div className={`aspect-video rounded-2xl ${project.imageColor} flex items-center justify-center overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent" />
            <div className="relative z-10 text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm flex items-center justify-center">
                <Eye className="w-8 h-8 text-white/80" />
              </div>
              <span className="text-white/90 font-semibold">Project Preview</span>
            </div>
          </div>
          
          {/* Live Badge */}
          <div className="absolute top-4 right-4">
            <div className={`px-4 py-2 rounded-full ${project.accentColor} text-white text-sm font-semibold flex items-center gap-2`}>
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Live
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 text-white group-hover:gradient-text transition-all">
            {project.title}
          </h3>
          <p className="text-gray-600 text-gray-300 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((tech: string, idx: number) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-gray-100 bg-gray-800 rounded-full text-sm font-medium text-gray-700 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6">
            <motion.a
              href={project.github}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-3 rounded-xl bg-gray-100 bg-gray-800 text-gray-700 text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <Github className="w-5 h-5" />
              Code
            </motion.a>
            <motion.a
              href={project.live}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-3 rounded-xl text-white font-medium flex items-center justify-center gap-2"
              style={{ background: `linear-gradient(135deg, ${project.accentColor.split('from-')[1].split(' ')[0]} 0%, ${project.accentColor.split('to-')[1].split(' ')[0]} 100%)` }}
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </motion.a>
          </div>
        </div>

        {/* Hover Effect Line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 ${project.accentColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-[2rem]`} />
      </div>

      {/* Floating Elements on Hover */}
      {hoveredIndex === index && (
        <>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`absolute -top-3 -right-3 w-6 h-6 rounded-full ${project.accentColor}`}
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className={`absolute -bottom-3 -left-3 w-6 h-6 rounded-full ${project.accentColor}`}
          />
        </>
      )}
    </motion.div>
  );
};

export default Projects;
