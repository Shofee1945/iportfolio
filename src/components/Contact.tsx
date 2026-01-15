// src/components/Contact.tsx - SIMPLE VERSION
'use client';

import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 text-white mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-600 text-gray-300">
            Let's work together!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: <Mail />, title: 'Email', value: 'hello@example.com' },
            { icon: <Phone />, title: 'Phone', value: '+62 812 3456 7890' },
            { icon: <MapPin />, title: 'Location', value: 'Jakarta, Indonesia' },
          ].map((item) => (
            <div key={item.title} className="glass rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <div className="text-blue-600 dark:text-blue-400">
                  {item.icon}
                </div>
              </div>
              <h3 className="font-bold text-gray-900 text-white mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-gray-400">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Simple Form */}
        <div className="glass rounded-2xl p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-white bg-gray-900 border border-gray-300 border-gray-700"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-white bg-gray-900 border border-gray-300 border-gray-700"
                placeholder="hello@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-gray-300 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white bg-gray-900 border border-gray-300 border-gray-700"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
