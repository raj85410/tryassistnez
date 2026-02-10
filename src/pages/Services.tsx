import { motion } from 'framer-motion';
import { CheckCircle, BookOpen, Headphones, Palette, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      icon: <BookOpen className="w-16 h-16" />,
      title: 'Bookkeeping & Data Management',
      subtitle: 'Accurate books and clear cash flow',
      categories: [
        {
          name: 'Bookkeeping',
          features: [
            'Invoice creation and reconciliation',
            'Accounts receivable & payable tracking',
            'Purchase order vs invoice matching',
            'Basic monthly financial reports',
            'Vendor payment tracking',
            'Job-level cost tracking (order profitability)',
            'Sales tax data preparation (non-filing support)',
            'Cleanup of overdue or mismatched entries'
          ]
        }
      ],
      businessImpact:
        'Improves financial clarity and cash-flow control while reducing revenue leakage and owner involvement.',
      pricing: {
        halfDay: '$1,000/month',
        fullTime: '$1,440/month'
      }
    },
    {
      icon: <Headphones className="w-16 h-16" />,
      title: 'Order Management & Operations',
      subtitle: 'Smooth, on-time, profitable orders',
      categories: [
        {
          name: 'Order Management',
          features: [
            'Sales order and purchase order creation',
            'Supplier & decorator coordination',
            'Artwork approval tracking',
            'Production timeline monitoring',
            'Rush and deadline-critical order handling',
            'Shipping coordination (FedEx / UPS)',
            'Proactive delay escalation',
            'Delivery confirmation and closure'
          ]
        },
        {
          name: 'Research & Presentation',
          features: [
            'Product sourcing and alternatives research',
            'Pricing validation and margin checks',
            'Client-ready quote creation',
            'Presentation decks for sales teams',
            'Timeline and feasibility validation',
            'Rush order cost vs delivery analysis',
            'Supplier comparison and recommendations'
          ]
        }
      ],
      businessImpact:
        'Ensures orders are delivered on time and profitably by eliminating execution errors and last-minute firefighting. Increases quote accuracy and win rates by aligning pricing, feasibility, and delivery expectations upfront.',
      pricing: {
        halfDay: '$1,000/month',
        fullTime: '$1,440/month'
      }
    },
    {
      icon: <Palette className="w-16 h-16" />,
      title: 'Artwork & Design Support',
      subtitle: 'Production-ready artwork from day one',
      categories: [
        {
          name: 'Artwork & Design Support',
          features: [
            'Artwork intake and requirement checks',
            'Print-ready file coordination',
            'Imprint method validation (screen print, embroidery, etc.)',
            'Mockup coordination with designers',
            'Artwork revision tracking',
            'Approval management between client & production',
            'File organization for production readiness'
          ]
        }
      ],
      businessImpact:
        'Reduces production delays and rework by ensuring artwork is production-ready from the start.',
      pricing: {
        halfDay: '$1,200/month',
        fullTime: '$1,440/month'
      }
    }
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-body max-w-3xl mx-auto"
          >
            Comprehensive solutions tailored for promotional products businesses and decorators
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {services.map((service, serviceIndex) => (
            <motion.div
              key={serviceIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20 last:mb-0"
            >
              <motion.div
                className="bg-deep-purple rounded-3xl shadow-2xl overflow-hidden border border-purple-900/50"
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                whileTap={{ scale: 0.995 }}
              >
                <div className="bg-gradient-to-r from-primary to-purple-800 text-white p-8 md:p-12">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="text-white">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-heading font-bold">{service.title}</h2>
                      <p className="text-xl font-body mt-2 text-gray-100">{service.subtitle}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {service.categories.map((category, catIndex) => (
                      <motion.div
                        key={catIndex}
                        className="bg-deep-purple/80 p-6 rounded-xl border border-purple-800/50 text-white"
                        whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <h3 className="text-xl font-heading font-bold mb-4 text-purple-200">{category.name}</h3>
                        <ul className="space-y-2">
                          {category.features.map((feature, featIndex) => (
                            <li key={featIndex} className="flex items-start text-gray-200 font-body">
                              <CheckCircle className="w-5 h-5 text-purple-300 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-deep-purple/80 border border-purple-800/50 p-6 rounded-xl mb-6 text-white">
                    <h3 className="text-xl font-heading font-bold mb-3 text-purple-200 flex items-center">
                      <ArrowRight className="w-6 h-6 mr-2" />
                      Business Impact
                    </h3>
                    <p className="text-gray-200 font-body text-lg leading-relaxed">{service.businessImpact}</p>
                  </div>

                  <div className="bg-deep-purple/80 p-6 rounded-xl border-2 border-primary text-white">
                    <h3 className="text-2xl font-heading font-bold mb-4 text-center text-white">Pricing Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-deep-purple p-6 rounded-lg border border-purple-800/50 text-center">
                        <p className="text-gray-300 font-body mb-2">Half-Day Support</p>
                        <p className="text-4xl font-heading font-bold text-purple-200 mb-2">{service.pricing.halfDay}</p>
                        <p className="text-sm text-gray-400 font-body">4 hours daily</p>
                      </div>
                      <div className="bg-deep-purple p-6 rounded-lg border-2 border-primary text-center">
                        <p className="text-gray-300 font-body mb-2">Full-Time Support</p>
                        <p className="text-4xl font-heading font-bold text-purple-200 mb-2">{service.pricing.fullTime}</p>
                        <p className="text-sm text-gray-400 font-body">8 hours daily</p>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <Link
                        to="/contact#contact-form"
                        className="inline-block bg-primary text-white px-8 py-3 rounded-full font-heading font-bold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
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
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl font-body mb-8 text-gray-300">
              Schedule a free consultation to discuss your specific needs
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

export default Services;
