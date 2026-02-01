import { motion } from 'framer-motion';
import { Target, Heart, Shield, Lightbulb, Users, Award, TrendingUp, Clock } from 'lucide-react';

function About() {
  const coreValues = [
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Excellence',
      description: 'We strive for the highest quality in every task, ensuring accuracy and professionalism in all our services.'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Reliability',
      description: 'Count on us for consistent, dependable support. We meet deadlines and deliver results you can trust.'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Trust',
      description: 'Building long-term partnerships through transparency, integrity, and confidentiality in all interactions.'
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'Innovation',
      description: 'Continuously improving our processes and adopting new technologies to serve you better.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Active Clients' },
    { number: '500+', label: 'Hours of Support Monthly' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Availability' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-primary via-purple-800 to-black text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-heading font-bold mb-6"
          >
            About Assistnez
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-body max-w-3xl mx-auto"
          >
            Empowering businesses through exceptional virtual assistance
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center justify-center mb-8">
              <Target className="w-16 h-16 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-xl font-body text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
              To empower businesses with reliable, efficient, and professional virtual assistance services that enable growth,
              reduce operational costs, and allow business owners to focus on what they do best.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-white p-10 md:p-16 rounded-3xl shadow-2xl mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg font-body text-gray-700 leading-relaxed">
              <p>
                Assistnez was founded with a clear vision: to bridge the gap between ambitious promotional products businesses
                and the administrative support they need to thrive. We recognized that many talented entrepreneurs and
                established businesses were held back not by lack of vision, but by the overwhelming burden of day-to-day
                operational tasks.
              </p>
              <p>
                Our team brings together professionals with deep experience in the promotional products industry, combining
                technical expertise with an understanding of your unique challenges. We're not just virtual assistants; we're
                partners who understand the nuances of decorator businesses, supplier relationships, and the fast-paced nature
                of promotional product sales.
              </p>
              <p>
                Today, we proudly serve over 50 clients across the promotional products industry, providing specialized support
                in bookkeeping, order management, design proofing, and more. Our commitment to excellence and industry expertise
                sets us apart, making us the trusted partner for businesses looking to scale efficiently.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Core Values</h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 font-body">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Industry expertise combined with world-class service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary to-purple-800 text-white p-8 rounded-2xl shadow-xl"
            >
              <Users className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-4">Industry Specialists</h3>
              <p className="font-body leading-relaxed">
                Our team has extensive experience in the promotional products industry, understanding your workflow,
                terminology, and unique challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-purple-800 to-primary text-white p-8 rounded-2xl shadow-xl"
            >
              <Clock className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-4">24/7 Support</h3>
              <p className="font-body leading-relaxed">
                Round-the-clock availability ensures your business operations never stop, no matter your timezone or
                work schedule.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-primary to-purple-800 text-white p-8 rounded-2xl shadow-xl"
            >
              <TrendingUp className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-4">Scalable Solutions</h3>
              <p className="font-body leading-relaxed">
                Start with the support you need today and easily scale up as your business grows, with flexible plans
                and no long-term commitments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Track Record</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-heading font-bold mb-2">{stat.number}</div>
                <div className="text-lg md:text-xl font-body">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
