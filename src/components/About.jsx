import { motion } from 'framer-motion';
import { FiUser, FiCode, FiHeart, FiTarget } from 'react-icons/fi';

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
    <section id="about" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="section-title gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '2rem',
              background: 'linear-gradient(to right, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            About Me
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Text & Highlights */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem',
                  color: '#4b5563'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                I’m a <strong style={{ color: '#667eea' }}>Final-year Computer Engineering student</strong> at Gharda Institute of Technology, passionate about <strong>web development, UI/UX design,</strong> and <strong>machine learning</strong> projects.
              </motion.p>

              <motion.p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.8',
                  marginBottom: '2rem',
                  color: '#4b5563'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                I combine creativity with technical expertise to build innovative solutions. My focus is on developing efficient, user-friendly applications while continuously learning and exploring emerging technologies.
              </motion.p>

              {/* Highlight Cards */}
              <motion.div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1.5rem'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    style={{
                      background: '#fff',
                      borderRadius: '1rem',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
                      padding: '1.5rem',
                      textAlign: 'center'
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div style={{
                      fontSize: '2rem',
                      color: '#667eea',
                      marginBottom: '0.5rem'
                    }}>
                      <highlight.icon />
                    </div>
                    <h4 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#333'
                    }}>
                      {highlight.title}
                    </h4>
                    <p style={{
                      fontSize: '0.95rem',
                      color: '#6b7280',
                      marginTop: '0.5rem'
                    }}>
                      {highlight.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Animated Logo */}
            <motion.div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
              }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                style={{
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: 'white',
                  position: 'relative'
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                }}
              >
                CMK

                {/* Animated rings */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    right: '-10px',
                    bottom: '-10px',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '50%'
                  }}
                  animate={{
                    rotate: [0, -360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
                  }}
                />

                <motion.div
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '-20px',
                    right: '-20px',
                    bottom: '-20px',
                    border: '2px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '50%'
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
