import { motion } from 'framer-motion';
import { FiBook, FiMapPin, FiAward } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa'; // ✅ FIXED

const Education = () => {
  const education = {
    degree: 'B.E. in Computer Engineering',
    institution: 'Gharda Institute of Technology, Maharashtra',
    period: '2022 - 2026',
    gpa: '9.0',
    location: 'Maharashtra, India'
  };

  const achievements = [
    'Consistently maintaining high academic performance',
    'Active participation in technical events and hackathons',
    'Strong foundation in computer science fundamentals',
    'Hands-on experience with modern technologies'
  ];

  return (
    <section id="education" className="section-padding">
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
            Education
          </motion.h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="project-card"
              style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}
            >
              {/* Icon */}
              <motion.div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '2rem'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2rem',
                  marginBottom: '1rem'
                }}>
                  <FaGraduationCap />
                </div>
              </motion.div>

              {/* Degree */}
              <motion.h3 
                style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                {education.degree}
              </motion.h3>

              {/* Institution */}
              <motion.div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                  color: '#667eea',
                  fontWeight: '500'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <FiBook size={16} />
                <span>{education.institution}</span>
              </motion.div>

              {/* Location */}
              <motion.div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                  color: 'rgb(75 85 99)',
                  fontSize: '0.875rem'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <FiMapPin size={14} />
                <span>{education.location}</span>
              </motion.div>

              {/* Duration */}
              <motion.div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  marginBottom: '1.5rem',
                  color: 'rgb(75 85 99)',
                  fontSize: '0.875rem'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <span>{education.period}</span>
              </motion.div>

              {/* GPA */}
              <motion.div
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 1.5rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  borderRadius: '1rem',
                  fontWeight: '600',
                  marginBottom: '2rem',
                  boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                GPA: {education.gpa}
              </motion.div>

              {/* Achievements */}
              <motion.div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1rem',
                  textAlign: 'left'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                viewport={{ once: true }}
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '1rem',
                      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                      borderRadius: '0.75rem',
                      border: '1px solid rgba(102, 126, 234, 0.2)'
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <FiAward 
                      size={20} 
                      style={{ 
                        color: '#667eea',
                        marginTop: '0.125rem',
                        flexShrink: 0
                      }} 
                    />
                    <span style={{
                      fontSize: '0.875rem',
                      color: 'rgb(75 85 99)',
                      lineHeight: '1.5'
                    }}>
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
