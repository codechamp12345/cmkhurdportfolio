import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import { FiDownload, FiMail, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5rem 1rem',
      position: 'relative',
      overflow: 'hidden',
      background: '#f9f9fc'
    }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))',
        zIndex: -1
      }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <motion.h2
            className="gradient-text-secondary"
            style={{
              fontWeight: '500',
              marginBottom: '1rem',
              fontSize: '1.25rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.h2>

          <motion.h1
            className="gradient-text"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '700',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
              background: 'linear-gradient(to right, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Chaitanya Mahendra Khurd
          </motion.h1>

          <motion.div
            style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              marginBottom: '2rem',
              minHeight: '2rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Typewriter
              options={{
                strings: [
                  'MERN Stack Developer',
                  'UI/UX Designer',
                  'Machine Learning Enthusiast'
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: 'gradient-text-accent',
                cursorClassName: 'gradient-text-accent'
              }}
            />
          </motion.div>

          <motion.p
            style={{
              color: 'rgb(75 85 99)',
              maxWidth: '42rem',
              margin: '0 auto 2rem',
              lineHeight: '1.75',
              fontSize: '1.125rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Crafting digital experiences through code and design, specializing in full-stack development
            and creating user-centric solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {/* Contact Button */}
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'linear-gradient(to right, #667eea, #764ba2)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '999px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  textDecoration: 'none'
                }}
              >
                <FiMail />
                Contact Me
              </Link>
            </motion.div>

            {/* Download CV Button */}
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/resume.pdf"
                download
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'linear-gradient(to right, #667eea, #764ba2)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '999px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  textDecoration: 'none'
                }}
              >
                <FiDownload />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Down Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'rgb(75 85 99)',
              fontSize: '0.875rem'
            }}
          >
            <span>Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiArrowDown size={16} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Decorative Circles */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
          borderRadius: '50%',
          zIndex: -1
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.1), rgba(245, 87, 108, 0.1))',
          borderRadius: '50%',
          zIndex: -1
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </section>
  );
};

export default Hero;
