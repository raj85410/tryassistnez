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
      subtitle: 'Comprehensive financial and data solutions',
      categories: [
        {
          name: 'Comprehensive Bookkeeping Services',
          features: [
            'QuickBooks setup and management',
            'Accounts payable and receivable',
            'Bank reconciliation',
            'Financial statement preparation',
            'Expense tracking and categorization',
            'Invoice generation and management',
            'Payroll processing support',
            'Tax preparation assistance'
          ]
        },
        {
          name: 'Data Entry & Catalog Management',
          features: [
            'Product catalog data entry',
            'Pricing updates and maintenance',
            'Inventory tracking and management',
            'Supplier information management',
            'Customer database maintenance',
            'Order history documentation',
            'SKU and product code organization',
            'Digital file organization'
          ]
        },
        {
          name: 'Financial Reporting & Analysis',
          features: [
            'Monthly financial reports',
            'Profit and loss statements',
            'Cash flow analysis',
            'Budget preparation and monitoring',
            'Cost analysis and reduction strategies',
            'Revenue trend analysis',
            'Key performance indicator tracking',
            'Custom report generation'
          ]
        },
        {
          name: 'Compliance & Record Keeping',
          features: [
            'Document digitization and storage',
            'Compliance documentation',
            'Audit trail maintenance',
            'Records retention management',
            'Financial document organization',
            'Regulatory compliance support'
          ]
        }
      ],
      businessImpact: 'Streamline your financial operations and gain real-time insights into your business performance. Our bookkeeping services help you make informed decisions while ensuring accuracy and compliance.',
      pricing: {
        halfDay: '$1,000/month',
        fullTime: '$1,440/month'
      }
    },
    {
      icon: <Headphones className="w-16 h-16" />,
      title: 'Virtual Assistance & Back-Office Support',
      subtitle: 'Complete administrative and operational support',
      categories: [
        {
          name: 'Order Management & Processing',
          features: [
            'Order entry and tracking',
            'Customer inquiry handling',
            'Shipping coordination',
            'Return and exchange processing',
            'Order status updates',
            'Purchase order management',
            'Vendor communication',
            'Delivery confirmation tracking'
          ]
        },
        {
          name: 'Research & Market Analysis',
          features: [
            'Competitor analysis',
            'Market trend research',
            'Product sourcing and research',
            'Pricing analysis',
            'Supplier verification',
            'Industry news monitoring',
            'Lead generation research',
            'Customer feedback analysis'
          ]
        },
        {
          name: 'Virtual Administrative Support',
          features: [
            'Email management and filtering',
            'Calendar scheduling and coordination',
            'Meeting preparation and notes',
            'Document preparation and formatting',
            'Travel arrangements',
            'Customer communication',
            'Data compilation and reporting',
            'General administrative tasks'
          ]
        },
        {
          name: 'E-commerce & Platform Management',
          features: [
            'Website content updates',
            'Product listing management',
            'Online store maintenance',
            'Platform integration support',
            'Customer review monitoring',
            'Digital marketing support'
          ]
        }
      ],
      businessImpact: 'Focus on growth while we handle the day-to-day operations. Our virtual assistants seamlessly integrate with your team, providing reliable support that scales with your business needs.',
      pricing: {
        halfDay: '$1,000/month',
        fullTime: '$1,440/month'
      }
    },
    {
      icon: <Palette className="w-16 h-16" />,
      title: 'Creative Artwork & Design Support',
      subtitle: 'Professional design services for promotional products',
      categories: [
        {
          name: 'Artwork & Design Proofing',
          features: [
            'Design file review and quality check',
            'Color accuracy verification',
            'File format conversion',
            'Resolution and sizing verification',
            'Print-ready file preparation',
            'Design specification documentation',
            'Client proof creation',
            'Artwork version control'
          ]
        },
        {
          name: 'Mockups & Virtual Samples',
          features: [
            '3D product visualization',
            'Digital mockup creation',
            'Virtual sample presentation',
            'Product rendering',
            'Multi-angle product views',
            'Branded mockup templates',
            'Presentation-ready visuals',
            'Custom mockup development'
          ]
        },
        {
          name: 'Template & Layout Creation',
          features: [
            'Product template design',
            'Layout standardization',
            'Brand guideline templates',
            'Marketing material templates',
            'Order form design',
            'Presentation templates',
            'Social media graphics',
            'Email signature design'
          ]
        },
        {
          name: 'Design Support & Consultation',
          features: [
            'Design recommendation and guidance',
            'File troubleshooting',
            'Design optimization for production',
            'Color matching assistance',
            'Typography consultation',
            'Brand consistency review'
          ]
        }
      ],
      businessImpact: 'Deliver professional, production-ready designs consistently. Our creative team ensures every piece of artwork meets industry standards while maintaining your brand identity.',
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
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
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
                      <div key={catIndex} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                        <h3 className="text-xl font-heading font-bold mb-4 text-primary">{category.name}</h3>
                        <ul className="space-y-2">
                          {category.features.map((feature, featIndex) => (
                            <li key={featIndex} className="flex items-start text-gray-700 font-body">
                              <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-gray-50 p-6 rounded-xl mb-6">
                    <h3 className="text-xl font-heading font-bold mb-3 text-primary flex items-center">
                      <ArrowRight className="w-6 h-6 mr-2" />
                      Business Impact
                    </h3>
                    <p className="text-gray-700 font-body text-lg leading-relaxed">{service.businessImpact}</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border-2 border-primary">
                    <h3 className="text-2xl font-heading font-bold mb-4 text-center">Pricing Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <p className="text-gray-600 font-body mb-2">Half-Day Support</p>
                        <p className="text-4xl font-heading font-bold text-primary mb-2">{service.pricing.halfDay}</p>
                        <p className="text-sm text-gray-500 font-body">4 hours daily</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md text-center border-2 border-primary">
                        <p className="text-gray-600 font-body mb-2">Full-Time Support</p>
                        <p className="text-4xl font-heading font-bold text-primary mb-2">{service.pricing.fullTime}</p>
                        <p className="text-sm text-gray-500 font-body">8 hours daily</p>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <Link
                        to="/contact"
                        className="inline-block bg-primary text-white px-8 py-3 rounded-full font-heading font-bold hover:bg-purple-800 transition-all duration-300 transform hover:scale-105"
                      >
                        Get Custom Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
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
              to="/contact"
              className="inline-block bg-primary text-white px-10 py-4 rounded-full font-heading font-bold text-lg hover:bg-purple-800 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;
