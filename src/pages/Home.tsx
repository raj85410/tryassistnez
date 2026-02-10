import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CheckCircle, Users, Clock, TrendingUp, Star, ArrowRight, BookOpen, Headphones, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'We assist you excel';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Industry Expertise',
      description: 'Specialized knowledge in promotional products and decorator businesses',
      details: 'Our team understands the unique challenges of your industry and provides tailored solutions.'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Dedicated Support',
      description: '24/7 availability with personalized account management',
      details: 'Round-the-clock assistance ensures your business never misses a beat.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes and double-check systems',
      details: 'Every task undergoes thorough review to maintain the highest standards.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Cost Efficiency',
      description: 'Reduce overhead while increasing productivity',
      details: 'Save up to 70% compared to hiring in-house staff with no compromise on quality.'
    },
    {
      icon: <ArrowRight className="w-8 h-8" />,
      title: 'Scalable Solutions',
      description: 'Flexible plans that grow with your business needs',
      details: 'Easily adjust service levels as your business demands change.'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Proven Track Record',
      description: '50+ satisfied clients with 99% satisfaction rate',
      details: 'Join our growing family of successful businesses across the globe.'
    }
  ];

  const services = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Bookkeeping & Data Management',
      description: 'Comprehensive financial record-keeping, data entry, and catalog management tailored for promotional products businesses.',
      features: ['QuickBooks Management', 'Invoice Processing', 'Product Data Entry', 'Financial Reporting'],
      pricing: 'From $1000/month'
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: 'Virtual Assistance & Back-Office Support',
      description: 'Complete administrative support including order management, research, and e-commerce platform management.',
      features: ['Order Processing', 'Customer Support', 'Market Research', 'Email Management'],
      pricing: 'From $1000/month'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Creative Artwork & Design Support',
      description: 'Professional design proofing, mockup creation, and template development for promotional products.',
      features: ['Design Proofing', 'Mockup Creation', 'Template Design', 'Brand Guidelines'],
      pricing: 'From $1440/month'
    }
  ];

  const [stats, setStats] = useState({ clients: 0, support: 0, satisfaction: 0 });

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setStats({
          clients: Math.floor(50 * progress),
          support: Math.floor(500 * progress),
          satisfaction: Math.floor(99 * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setStats({ clients: 50, support: 500, satisfaction: 99 });
        }
      }, interval);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats();
        observer.disconnect();
      }
    });

    const statsElement = document.getElementById('stats-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-br from-primary via-purple-800 to-black text-white py-32 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-4">
              Assistnez
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-2">
              {typedText}
              {showCursor && <span className="border-r-4 border-white ml-1"></span>}
            </h2>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl font-body mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Dedicated professionals transforming your business operations through reliable virtual assistance
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <Link
              to="/contact#contact-form"
              className="inline-block bg-white text-primary px-10 py-4 rounded-full font-heading font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Why Choose Assistnez?</h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              We combine industry expertise with dedicated support to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
                whileTap={{ scale: 0.98 }}
                className="bg-deep-purple p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group border border-purple-900/50"
              >
                <div className="text-purple-300 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-200 font-body mb-4">{feature.description}</p>
                <p className="text-sm text-gray-300 font-body">{feature.details}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-heading font-bold text-xl">5.0 Rating</span>
              </div>
              <div className="text-2xl font-heading font-bold text-primary">
                50+ Clients
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed specifically for promotional products businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
                whileTap={{ scale: 0.98 }}
                className="bg-deep-purple p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-900/50"
              >
                <div className="text-purple-300 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-200 font-body mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-200 font-body">
                      <CheckCircle className="w-5 h-5 text-purple-300 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-purple-800 pt-4 mt-auto">
                  <p className="text-purple-300 font-heading font-bold text-xl mb-4">{service.pricing}</p>
                  <Link
                    to="/contact#contact-form"
                    className="inline-block w-full text-center bg-primary text-white px-6 py-3 rounded-lg font-heading font-semibold hover:bg-purple-700 transition-colors duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">What Our Clients Say</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-2xl shadow-xl"
          >
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xl font-body text-gray-700 mb-6 italic leading-relaxed">
              "The level of service and expertise provided by Assistnez is exceptional. They truly understand the promotional products industry and have become an invaluable extension of our team. Their attention to detail and commitment to quality has significantly improved our operations."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-heading font-bold text-xl mr-4">
                MC
              </div>
              <div>
                <p className="font-heading font-bold text-lg">Michael Chen</p>
                <p className="text-gray-600 font-body">CEO, PromoWorks Inc.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="stats-section" className="py-20 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl md:text-6xl font-heading font-bold mb-2">{stats.support}+</div>
              <div className="text-xl font-body">Hours of Support</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-heading font-bold mb-2">{stats.clients}+</div>
              <div className="text-xl font-body">Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl md:text-6xl font-heading font-bold mb-2">24/7</div>
              <div className="text-xl font-body">Availability</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-5xl md:text-6xl font-heading font-bold mb-2">{stats.satisfaction}%</div>
              <div className="text-xl font-body">Satisfaction Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl font-body mb-8 text-gray-300">
              Get in touch today and discover how Assistnez can elevate your operations
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
              <a href="mailto:info@assistnez.com" className="text-lg font-body hover:text-primary transition-colors">
                info@assistnez.com
              </a>
            </div>
            <Link
              to="/contact#contact-form"
              className="inline-block bg-primary text-white px-10 py-4 rounded-full font-heading font-bold text-lg hover:bg-purple-800 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
