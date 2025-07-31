import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23f3f4f6\' fill-opacity=\'1\' d=\'M0,96L48,117.3C96,139,192,181,288,197.3C384,213,480,171,576,160C672,149,768,171,864,186.7C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E')] opacity-5" />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-100 to-purple-200 opacity-10"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 opacity-10"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
      />

      {/* Main Content */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <motion.h2
            className="text-2xl font-semibold mb-2 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.h2>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Chaitanya Mahendra Khurd
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
                wrapperClassName: 'bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-transparent bg-clip-text',
                cursorClassName: 'text-indigo-500'
              }}
            />
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Passionate Full Stack Developer specializing in the MERN stack, I build responsive and intuitive web applications that deliver exceptional user experiences.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg font-semibold text-lg text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              <span className="cursor-pointer">View Projects</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg font-semibold text-lg text-white bg-gradient-to-r from-pink-500 to-red-500 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              <span className="cursor-pointer">Contact Me</span>
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Link to="about" smooth duration={500}>
              <FiArrowDown className="text-3xl text-gray-500 hover:text-indigo-500 transition" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
