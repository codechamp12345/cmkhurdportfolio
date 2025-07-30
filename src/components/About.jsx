import { motion } from 'framer-motion';
import { FiUser, FiCode, FiHeart, FiTarget } from 'react-icons/fi';
import Photo from "./PHOTO.jpg";



const About = () => {
  const highlights = [
    {
      icon: FiUser,
      title: 'Student',
      description: 'Final-year Computer Engineering student at Gharda Institute of Technology.'
    },
    {
      icon: FiCode,
      title: 'Developer',
      description: 'Passionate about web development, UI/UX, and machine learning projects.'
    },
    {
      icon: FiHeart,
      title: 'Creative',
      description: 'Combining creativity with technical expertise to build innovative solutions.'
    },
    {
      icon: FiTarget,
      title: 'Focused',
      description: 'Dedicated to building efficient, user-friendly applications while always learning.'
    }
  ];

  return (
    <section id="about" className="section-padding py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-center text-4xl font-bold mb-10 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(to right, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            {/* Text & Highlights */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.p
                className="text-gray-800 text-lg leading-7 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                I’m a <strong className="text-indigo-500">Final-year Computer Engineering student</strong> at Gharda Institute of Technology, passionate about <strong>web development, UI/UX design,</strong> and <strong>machine learning</strong> projects.
              </motion.p>

              <motion.p
                className="text-gray-800 text-lg leading-7 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                I combine creativity with technical expertise to build innovative solutions. My focus is on developing efficient, user-friendly applications while continuously learning and exploring emerging technologies.
              </motion.p>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-indigo-500 text-3xl mb-2">
                      <highlight.icon />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{highlight.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {highlight.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Photo Card */}
            <motion.div
              className="relative w-full md:w-[400px] h-[500px] rounded-[30px] overflow-hidden group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 mix-blend-overlay rounded-[30px] transition-all duration-500 group-hover:opacity-30"></div>
              <img 
                src={Photo}
                alt="Profile"
                className="w-full h-full object-cover rounded-[30px] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold mb-2">Chaitanya Khurd</h3>
                <p className="text-gray-200">Full Stack Developer</p>
              </div>
              <div className="absolute inset-0 border-2 border-gradient rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 border-2 border-indigo-500 rounded-[30px] opacity-0"></div>
                <div className="absolute inset-0 border-2 border-purple-600 rounded-[30px] opacity-0"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
