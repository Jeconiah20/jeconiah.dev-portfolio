import { motion } from 'framer-motion'

const StorySection = () => {
  const milestones = [
    {
      year: '2022',
      title: 'The Beginning',
      description: 'Started my coding journey with the fundamentals. Learned how the web works and built my first static websites.',
      skills: ['HTML', 'CSS', 'JavaScript'],
      icon: '🚀',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      year: '2023',
      title: 'Frontend Mastery',
      description: 'Dove deep into modern frontend development. Built interactive UIs and learned component-based architecture.',
      skills: ['React', 'Tailwind CSS', 'Framer Motion'],
      icon: '⚛️',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      year: '2024',
      title: 'Backend Development',
      description: 'Expanded into server-side programming. Built APIs, worked with databases, and understood full application architecture.',
      skills: ['Express.js', 'EJS', 'Node.js', 'PostgreSQL'],
      icon: '⚙️',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      year: '2025',
      title: 'DevOps & Tooling',
      description: 'Mastered development workflows, version control, and deployment. Embraced the command line and containerization.',
      skills: ['Git', 'GitHub', 'Bash', 'Linux', 'Docker'],
      icon: '🐳',
      gradient: 'from-rose-500 to-orange-500',
    },
    {
      year: '2026',
      title: 'The Journey Continues',
      description: 'Exploring cloud services, AI/ML integration, and system design. Always learning, always growing.',
      skills: ['Cloud', 'AI/ML', 'System Design'],
      icon: '🌟',
      gradient: 'from-amber-500 to-rose-500',
    },
  ]

  return (
    <section id="story" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0f2a] to-[#0a0a1a]" />
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
              My Story
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of growth, learning, and becoming a fullstack developer
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-rose-500/50" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ amount: 0.3 }}
              className={`relative flex items-center mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-4 h-4 rounded-full bg-gradient-to-r ${milestone.gradient} shadow-lg`}
                />
              </div>

              {/* Year - Large display */}
              <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left'}`}>
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ amount: 0.3 }}
                  className={`text-7xl font-bold bg-gradient-to-r ${milestone.gradient} bg-clip-text text-transparent opacity-80`}
                >
                  {milestone.year}
                </motion.span>
              </div>

              {/* Content card */}
              <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 transition-all group"
                >
                  {/* Mobile year display */}
                  <div className="md:hidden mb-2">
                    <span className={`text-2xl font-bold bg-gradient-to-r ${milestone.gradient} bg-clip-text text-transparent`}>
                      {milestone.year}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{milestone.icon}</span>
                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {milestone.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {milestone.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {milestone.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 + 0.3 }}
                        viewport={{ amount: 0.3 }}
                        className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${milestone.gradient} bg-opacity-20 text-white/90 border border-white/10`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
            </span>
            <span className="text-gray-300">Currently: Building awesome things & open to opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StorySection
