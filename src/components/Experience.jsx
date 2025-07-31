import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
const experiences = [
  {
    title: 'Web Development Intern',
    company: 'Gadre Infotech Pvt. Ltd.',
      period: 'Dec 2024',
      location: 'Remote',
    description: 'UI/UX Design for MCQ Questions website & Website Devvlopment',
      technologies: ['UI/UX Design', 'Web Development', 'Frontend']
  },
  {
    title: 'Frontend Development Intern',
    company: 'TechnoHack',
      period: 'Jan - Feb 2024',
      location: 'Remote',
    description: 'Frontend development and UI implementation',
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript']
  }
];

  return (
    <section id="experience" className="section-padding">
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
            Work Experience
          </motion.h2>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative'
          }}>
            {/* Timeline line */}
            <motion.div
              style={{
                position: 'absolute',
                left: '2rem',
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                zIndex: 1
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
            
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                style={{
                  position: 'relative',
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'flex-start'
                }}
              >
                {/* Timeline dot */}
                <motion.div
                  style={{
                    width: '1rem',
                    height: '1rem',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    flexShrink: 0,
                    marginTop: '0.5rem',
                    position: 'relative',
                    zIndex: 2
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.5 }}
                />
                
                <motion.div
                  className="project-card"
                  style={{
                    flex: 1,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    <div style={{ flex: 1 }}>
                      <motion.h3 
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: '600',
                          marginBottom: '0.5rem',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                        whileHover={{ scale: 1.02 }}
                      >
                        {exp.title}
                      </motion.h3>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.5rem',
                        color: '#667eea',
                        fontWeight: '500'
                      }}>
                        <FiBriefcase size={16} />
                        <span>{exp.company}</span>
                      </div>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          color: 'rgb(75 85 99)',
                          fontSize: '0.875rem'
                        }}>
                          <FiCalendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          color: 'rgb(75 85 99)',
                          fontSize: '0.875rem'
                        }}>
                          <FiMapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <motion.p 
                    style={{
                      color: 'rgb(75 85 99)',
                      marginBottom: '1.5rem',
                      lineHeight: '1.6',
                      fontSize: '1rem'
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {exp.description}
                  </motion.p>
                  
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + 0.4 + techIndex * 0.1 }}
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
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;