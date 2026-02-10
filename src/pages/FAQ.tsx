import { motion } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'services', name: 'Services' },
    { id: 'pricing', name: 'Pricing' },
    { id: 'support', name: 'Support' }
  ];

  const faqs = [
    {
      category: 'general',
      question: 'What is Assistnez?',
      answer: 'Assistnez is a virtual assistant service company specializing in supporting promotional products businesses and decorators. We provide comprehensive bookkeeping, administrative support, and creative design services tailored to your industry needs.'
    },
    {
      category: 'general',
      question: 'Who can benefit from your services?',
      answer: 'Our services are ideal for promotional products businesses, decorators, screen printers, embroiderers, and any company in the custom merchandise industry looking to streamline operations and reduce overhead costs.'
    },
    {
      category: 'services',
      question: 'What services do you offer?',
      answer: 'We offer three main service categories: (1) Bookkeeping & Data Management including QuickBooks management, financial reporting, and catalog management; (2) Virtual Assistance & Back-Office Support covering order processing, research, and administrative tasks; (3) Creative Artwork & Design Support including design proofing, mockup creation, and template development.'
    },
    {
      category: 'services',
      question: 'Can I customize my service package?',
      answer: 'Absolutely! We understand that every business has unique needs. We can create a custom package combining elements from our different service categories to match your specific requirements. Contact us to discuss your needs.'
    },
    {
      category: 'services',
      question: 'Do you have experience with promotional products industry software?',
      answer: 'Yes! Our team is experienced with industry-specific software including SAGE Online, OrderMyGear, CompanyStores, and various e-commerce platforms commonly used in the promotional products industry.'
    },
    {
      category: 'pricing',
      question: 'What are your pricing options?',
      answer: 'We offer flexible pricing with two main options: Half-Day support starting at $1,000/month (4 hours daily) and Full-Time support at $1,440/month (8 hours daily). Creative services may have slightly different pricing. Contact us for a custom quote based on your needs.'
    },
    {
      category: 'pricing',
      question: 'Are there any setup fees or long-term contracts?',
      answer: 'We believe in earning your business every month. There are no setup fees, and we offer month-to-month service with no long-term contracts required. You can scale up, scale down, or pause services as your business needs change.'
    },
    {
      category: 'pricing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and ACH payments. Invoices are sent monthly, and payment is due within 15 days of invoice date.'
    },
    {
      category: 'support',
      question: 'What are your business hours?',
      answer: 'We offer 24/7 availability to support businesses across different time zones. Your dedicated assistant will work during your preferred hours, and we have backup support available around the clock for urgent matters.'
    },
    {
      category: 'support',
      question: 'How quickly can you respond to urgent requests?',
      answer: 'We pride ourselves on rapid response times. For urgent matters, we typically respond within 1-2 hours during business hours and within 4 hours for after-hours requests. Your dedicated assistant will work with you to establish communication protocols that work best for your business.'
    },
    {
      category: 'support',
      question: 'How do you ensure quality and accuracy?',
      answer: 'We have a rigorous quality control process that includes double-checking all work, regular quality audits, and ongoing training for our team. Each client is assigned a dedicated assistant and a backup support team member to ensure consistency and reliability.'
    },
    {
      category: 'support',
      question: 'How do we communicate and share files?',
      answer: 'We use the communication tools you are already comfortable with - email, Slack, Microsoft Teams, or phone calls. For file sharing, we work with platforms like Google Drive, Dropbox, or your existing project management software.'
    },
    {
      category: 'general',
      question: 'How do I get started?',
      answer: 'Getting started is easy! Simply contact us through our website, email, or phone. We will schedule a free consultation to discuss your needs, provide a customized quote, and if you decide to move forward, we can have your dedicated assistant onboarded and ready to work within 3-5 business days.'
    },
    {
      category: 'services',
      question: 'Can you handle confidential information?',
      answer: 'Yes, absolutely. We take confidentiality and data security very seriously. All team members sign comprehensive non-disclosure agreements, and we follow industry best practices for data security. We can also work within your existing security protocols and systems.'
    },
    {
      category: 'pricing',
      question: 'What if I need additional hours beyond my plan?',
      answer: 'No problem! If you occasionally need extra support beyond your plan, we can accommodate that on an hourly basis. We can also help you upgrade to a higher tier if you consistently need more hours. We are flexible and work with your changing needs.'
    },
    {
      category: 'support',
      question: 'What happens if I am not satisfied with the service?',
      answer: 'Your satisfaction is our priority. If you are not completely satisfied, let us know immediately. We will work to resolve any issues quickly. If we cannot meet your expectations, you can cancel at any time with 30 days notice, no questions asked.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-body max-w-3xl mx-auto"
          >
            Find answers to common questions about our services
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 font-body text-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-8 px-4 bg-gray-50 sticky top-0 z-10">
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
        <div className="max-w-4xl mx-auto">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                >
                  <button
                    onClick={() => toggleExpand(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-heading font-bold text-lg pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                        expandedIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedIndex === index ? 'auto' : 0,
                      opacity: expandedIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p className="font-body text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl font-body text-gray-600">
                No questions found matching your search. Try different keywords or browse all categories.
              </p>
            </motion.div>
          )}
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
              Still Have Questions?
            </h2>
            <p className="text-xl font-body mb-8 text-gray-300">
              Our team is here to help. Contact us and we will get back to you within 2-4 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact#contact-form"
                className="inline-block bg-primary text-white px-10 py-4 rounded-full font-heading font-bold text-lg hover:bg-purple-800 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Get Started
              </Link>
              <a
                href="mailto:info@assistnez.com"
                className="inline-block bg-white text-primary px-10 py-4 rounded-full font-heading font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
