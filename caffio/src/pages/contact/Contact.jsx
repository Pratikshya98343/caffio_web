import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: digitsOnly }));

      if (!/^\d*$/.test(value)) {
        setErrors(prev => ({ ...prev, phone: 'Phone number must contain only digits' }));
      } else {
        setErrors(prev => ({ ...prev, phone: '' }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (name === 'name' && errors.name) {
        setErrors(prev => ({ ...prev, name: '' }));
      }
      if (name === 'message' && errors.message) {
        setErrors(prev => ({ ...prev, message: '' }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    const newErrors = { name: '', phone: '', message: '' };
    let isValid = true;

    if (!name.trim() || name.trim().split(' ').length < 2) {
      newErrors.name = 'Please enter your full name (first and last).';
      isValid = false;
    }

    if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits.';
      isValid = false;
    }

    if (!message.trim()) {
      newErrors.message = 'Please enter a message.';
      isValid = false;
    }

    if (!email.trim()) {
      alert('Email is required.');
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) return;

    console.log('Form submitted:', formData);
    alert('Message sent successfully!');

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setErrors({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-5">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-amber-800 container mx-auto px-6 py-12 relative z-10">   
          CONTACT US
        </h1>
        <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full mb-6"></div>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          We'd love to hear from you! Get in touch with us for any questions about our services, 
          reservations, or just to say hello.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info (unchanged) */}
          <div className="bg-orange-50 rounded-3xl p-12 shadow-lg">
            {/* ... your static info code remains unchanged */}
            <h3 className="text-4xl font-bold text-gray-800 mb-10">Get In Touch</h3>
            <div className="relative overflow-hidden rounded-xl mb-8">
              <img src="/image/map.png" alt="Map" className="w-full h-64 object-cover" />
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-xl text-center shadow-sm">
                <p className="text-gray-600 text-lg leading-relaxed">
                  We're here to help! Send us a message using the form and we'll get back to you as soon as possible. 
                  For immediate assistance, please check our footer for contact details and business hours.
                </p>
              </div>
              <div className="p-6 bg-orange-100 rounded-xl text-center">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Special Events & Catering</h4>
                <p className="text-gray-600">
                  Planning a special event? We offer catering services and private bookings. 
                  Let us know your requirements in the message form!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-blue-50 rounded-3xl p-12 shadow-lg">
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={`w-full p-4 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none transition-all duration-200 ${
                    errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-orange-400 focus:ring-orange-400/20'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full p-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-200"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className={`w-full p-4 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none transition-all duration-200 ${
                    errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-orange-400 focus:ring-orange-400/20'
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell us what's on your mind..."
                  className={`w-full p-4 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none resize-none transition-all duration-200 ${
                    errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-orange-400 focus:ring-orange-400/20'
                  }`}
                  required
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-orange-400 hover:bg-orange-500 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
