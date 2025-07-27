import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaPython, FaGithub, FaFigma, FaAws
} from 'react-icons/fa';
import {
  SiExpress, SiMongodb, SiTailwindcss, SiFirebase,
  SiJavascript, SiHtml5, SiCss3, SiTypescript, SiDocker,
  SiTensorflow, SiOpencv
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React.js', icon: FaReact, color: '#61DAFB', category: 'Frontend' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933', category: 'Backend' },
    { name: 'Express.js', icon: SiExpress, color: '#000000', category: 'Backend' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', category: 'Styling' },
    { name: 'Figma', icon: FaFigma, color: '#F24E1E', category: 'Design' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', category: 'Backend' },
    { name: 'GitHub', icon: FaGithub, color: '#181717', category: 'Tools' },
    { name: 'Python', icon: FaPython, color: '#3776AB', category: 'Language' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Language' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26', category: 'Frontend' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6', category: 'Frontend' },
    
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="section-padding">
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
            Skills & Technologies
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {category}
                </h3>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1.5rem',
                  maxWidth: '1200px',
                  margin: '0 auto'
                }}>
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 100
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.05,
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                        className="skill-card"
                        style={{ position: 'relative', overflow: 'hidden' }}
                      >
                        <motion.div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            position: 'relative',
                            zIndex: 2
                          }}
                        >
                          <motion.div
                            style={{
                              fontSize: '3rem',
                              color: skill.color,
                              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                            }}
                            whileHover={{
                              scale: 1.2,
                              rotate: 360,
                              transition: { duration: 0.5 }
                            }}
                          >
                            <skill.icon />
                          </motion.div>

                          <h4 style={{
                            fontSize: '1.125rem',
                            fontWeight: '600',
                            color: 'var(--color-primary)',
                            textAlign: 'center',
                            margin: 0
                          }}>
                            {skill.name}
                          </h4>

                          <motion.div
                            style={{
                              width: '40px',
                              height: '3px',
                              background: `linear-gradient(135deg, ${skill.color} 0%, ${skill.color}80 100%)`,
                              borderRadius: '2px'
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: '40px' }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            viewport={{ once: true }}
                          />
                        </motion.div>

                        {/* Glow effect */}
                        <motion.div
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            background: `radial-gradient(circle, ${skill.color}20 0%, transparent 70%)`,
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1
                          }}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
