import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Testimonials' },
    { id: 'bookkeeping', name: 'Bookkeeping' },
    { id: 'virtual-assistance', name: 'Virtual Assistance' },
    { id: 'creative', name: 'Creative Services' }
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'PromoWorks Inc.',
      category: 'bookkeeping',
      rating: 5,
      text: 'The level of service and expertise provided by Assistnez is exceptional. They truly understand the promotional products industry and have become an invaluable extension of our team. Their attention to detail and commitment to quality has significantly improved our operations.',
      avatar: 'MC'
    },
    {
      name: 'Sarah Martinez',
      role: 'Operations Manager',
      company: 'BrandMakers Co.',
      category: 'virtual-assistance',
      rating: 5,
      text: 'Assistnez has been a game-changer for our business. Their virtual assistants handle our order processing seamlessly, allowing us to focus on growing our client base. The 24/7 support means we never miss an opportunity.',
      avatar: 'SM'
    },
    {
      name: 'David Thompson',
      role: 'Owner',
      company: 'CustomGear Solutions',
      category: 'bookkeeping',
      rating: 5,
      text: 'Our bookkeeping was a nightmare before Assistnez. Now everything is organized, timely, and accurate. They saved us thousands in potential errors and helped us identify cost-saving opportunities we never knew existed.',
      avatar: 'DT'
    },
    {
      name: 'Jennifer Lee',
      role: 'Creative Director',
      company: 'PromoBrand Studio',
      category: 'creative',
      rating: 5,
      text: 'The design support from Assistnez has elevated our client presentations. Their mockups are professional, their proofing is meticulous, and they always deliver on time. Our clients consistently comment on the quality of our visuals.',
      avatar: 'JL'
    },
    {
      name: 'Robert Johnson',
      role: 'Sales Director',
      company: 'Elite Promotional Products',
      category: 'virtual-assistance',
      rating: 5,
      text: 'The research and market analysis provided by Assistnez gives us a competitive edge. They keep us informed about industry trends and competitor activities, helping us make strategic decisions that drive growth.',
      avatar: 'RJ'
    },
    {
      name: 'Amanda Foster',
      role: 'Founder',
      company: 'Signature Promotions',
      category: 'bookkeeping',
      rating: 5,
      text: 'As a growing business, having reliable financial management is crucial. Assistnez not only keeps our books in order but provides insights that help us plan for the future. Their monthly reports are comprehensive and easy to understand.',
      avatar: 'AF'
    },
    {
      name: 'Marcus Williams',
      role: 'VP of Operations',
      company: 'PromoExpress LLC',
      category: 'virtual-assistance',
      rating: 5,
      text: 'The efficiency gains since partnering with Assistnez are remarkable. Order turnaround time has decreased by 40%, and customer satisfaction has increased significantly. They are truly an extension of our team.',
      avatar: 'MW'
    },
    {
      name: 'Lisa Anderson',
      role: 'Marketing Manager',
      company: 'BrandFirst Co.',
      category: 'creative',
      rating: 5,
      text: 'Working with Assistnez on our design needs has been fantastic. They understand branding and consistently deliver high-quality mockups that wow our clients. The turnaround time is impressive too.',
      avatar: 'LA'
    },
    {
      name: 'James Patterson',
      role: 'Owner',
      company: 'Quality Promos',
      category: 'virtual-assistance',
      rating: 5,
      text: 'The virtual administrative support has freed up so much of my time. I can now focus on sales and strategy while Assistnez handles the administrative tasks flawlessly. Best business decision I made this year.',
      avatar: 'JP'
    },
    {
      name: 'Emily Rodriguez',
      role: 'CFO',
      company: 'Premier Promotional Group',
      category: 'bookkeeping',
      rating: 5,
      text: 'Assistnez transformed our financial operations. Their bookkeeping is accurate, timely, and professional. Tax season is no longer stressful, and we have real-time visibility into our financial health.',
      avatar: 'ER'
    },
    {
      name: 'Christopher Davis',
      role: 'President',
      company: 'TopBrand Promotions',
      category: 'creative',
      rating: 5,
      text: 'The creative team at Assistnez is outstanding. They handle our artwork proofing with precision and have caught errors that could have been costly. Their attention to detail is unmatched.',
      avatar: 'CD'
    },
    {
      name: 'Nicole Brown',
      role: 'Business Owner',
      company: 'Creative Impressions',
      category: 'virtual-assistance',
      rating: 5,
      text: 'Assistnez has become an integral part of our success. From order management to customer communication, they handle everything professionally. Our customers often compliment us on our responsiveness.',
      avatar: 'NB'
    }
  ];

  const filteredTestimonials = selectedCategory === 'all'
    ? testimonials
    : testimonials.filter(t => t.category === selectedCategory);

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
            Client Testimonials
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-body max-w-3xl mx-auto"
          >
            See what our clients have to say about working with Assistnez
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-heading font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-2xl font-heading font-bold text-gray-700">
              5.0 Average Rating from {testimonials.length} Reviews
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative"
              >
                <div className="absolute top-6 right-6 text-primary opacity-20">
                  <Quote className="w-12 h-12" />
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 font-body mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center border-t pt-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-heading font-bold text-lg mr-4 flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-lg">{testimonial.name}</p>
                    <p className="text-gray-600 font-body text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 font-body text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl font-body mb-8 text-gray-300">
              Experience the same level of service and dedication that our clients rave about
            </p>
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

export default Testimonials;
