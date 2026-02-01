import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';

function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (window.location.hash === '#contact-form') {
      const el = document.getElementById('contact-form');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      company: '',
      email: '',
      phone: '',
      serviceInterest: '',
      message: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Full name is required'),
      company: Yup.string(),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      phone: Yup.string(),
      serviceInterest: Yup.string(),
      message: Yup.string()
        .min(10, 'Message must be at least 10 characters')
        .required('Message is required')
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form submitted:', values);
        setSubmitStatus('success');
        resetForm();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } catch (error) {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    }
  });

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Office Address',
      details: ['ABS Plaza', 'Jagatpura 7 Number', 'Jaipur, Rajasthan', 'India 302017']
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone',
      details: ['+44 (0)20 1234 5678']
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      details: ['support@assistnez.com', 'general.inquiries@assistnez.com']
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Business Hours',
      details: ['24/7 Availability', 'Response within 2-4 hours']
    }
  ];

  const serviceOptions = [
    'Bookkeeping & Data Management',
    'Virtual Assistance & Back-Office Support',
    'Creative Artwork & Design Support',
    'Multiple Services',
    'Not Sure Yet'
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-body max-w-3xl mx-auto"
          >
            Let's discuss how we can help transform your business operations
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Get In Touch</h2>
              <p className="text-lg font-body text-gray-600 mb-8">
                Have questions about our services? Ready to get started? Fill out the form and our team will
                get back to you within 2-4 hours.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start bg-gray-50 p-6 rounded-xl"
                  >
                    <div className="text-primary mr-4 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 font-body">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              id="contact-form"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-2xl"
            >
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="fullName" className="block font-heading font-semibold mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    {...formik.getFieldProps('fullName')}
                    className={`w-full px-4 py-3 border rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                      formik.touched.fullName && formik.errors.fullName
                        ? 'border-red-500'
                        : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {formik.touched.fullName && formik.errors.fullName && (
                    <p className="text-red-500 text-sm mt-1 font-body">{formik.errors.fullName}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="company" className="block font-heading font-semibold mb-2">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    {...formik.getFieldProps('company')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Your Company Name"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block font-heading font-semibold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...formik.getFieldProps('email')}
                    className={`w-full px-4 py-3 border rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                      formik.touched.email && formik.errors.email
                        ? 'border-red-500'
                        : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-1 font-body">{formik.errors.email}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block font-heading font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...formik.getFieldProps('phone')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="serviceInterest" className="block font-heading font-semibold mb-2">
                    Service Interest
                  </label>
                  <select
                    id="serviceInterest"
                    {...formik.getFieldProps('serviceInterest')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block font-heading font-semibold mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    {...formik.getFieldProps('message')}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none ${
                      formik.touched.message && formik.errors.message
                        ? 'border-red-500'
                        : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your needs..."
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-red-500 text-sm mt-1 font-body">{formik.errors.message}</p>
                  )}
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <p className="text-green-700 font-body">
                      Thank you for your message! We'll get back to you within 2-4 hours.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <p className="text-red-700 font-body">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-full bg-primary text-white px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-purple-800 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formik.isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
