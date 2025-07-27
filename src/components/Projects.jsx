import { motion } from 'framer-motion';
import { FiGithub, FiEye, FiCode } from 'react-icons/fi';

const Projects = () => {
const projects = [
  {
      title: 'BrandHash',
      description: 'MERN stack social media reward platform with admin panel',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: '#',
      demo: 'https://https-github-com-codechamp12345-has.vercel.app',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop'
    },
    {
      title: 'Kalkai Furniture & Electronics',
      description: 'Full-stack e-commerce website built using MERN stack with admin panel and product tracking.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: '#',
      demo: 'https://kalkai-furnitures-project-done-frontend.vercel.app/',
      image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400&h=250&fit=crop'
    },
    {
      title: 'Complaint Box – Feedback System',
      description: 'Firebase-based feedback collection platform built with HTML, CSS, and JS. Data is stored in Google Sheets.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    github: '#',
      demo: '#',
      image: 'https://plus.unsplash.com/premium_photo-1702598604444-8ac3b474b86d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'GST Invoice Generator',
    description: 'Frontend project using HTML/CSS/JS for local business',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop'
    }
  ];

  return (
    <section id="projects" className="section-padding">
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
          >
            Featured Projects
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="project-card"
                style={{
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <motion.div
                  style={{
                    width: '100%',
                    height: '200px',
                    borderRadius: '0.75rem',
                    overflow: 'hidden',
                    marginBottom: '1.5rem',
                    position: 'relative'
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.3s'
                  }} />
                </motion.div>

                <div style={{ position: 'relative', zIndex: 2 }}>
                  <motion.h3 
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      marginBottom: '0.75rem',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>

                  <p style={{
                    color: 'rgb(75 85 99)',
                    marginBottom: '1.5rem',
                    lineHeight: '1.6',
                    fontSize: '1rem'
                  }}>
                    {project.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        viewport={{ once: true }}
                        style={{
                          padding: '0.375rem 0.75rem',
                          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                          color: '#667eea',
                          borderRadius: '1rem',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          border: '1px solid rgba(102, 126, 234, 0.2)'
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)'
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div style={{
                    display: 'flex',
                    gap: '1rem'
                  }}>
                    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.75rem 1.25rem',
                          background: 'transparent',
                          border: '2px solid #667eea',
                          color: '#667eea',
                          borderRadius: '0.5rem',
                          textDecoration: 'none',
                          transition: 'all 0.3s',
                          fontWeight: '500'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#667eea';
                          e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = '#667eea';
                        }}
                      >
                        <FiCode size={16} />
                        Code
                      </a>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.75rem 1.25rem',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white',
                          borderRadius: '0.5rem',
                          textDecoration: 'none',
                          transition: 'all 0.3s',
                          fontWeight: '500'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        <FiEye size={16} />
                        Demo
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
