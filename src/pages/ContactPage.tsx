// src/pages/ContactPage.tsx

import { useState } from 'react';
import { motion } from 'framer-motion';

// Using the same background as other headers for consistency
import heroBg from '../assets/backgrounds/background-about-hero.png'; 

// --- COMPONENTS ---

// 1. The "Hero Form" Section Component
const HeroFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:enactus.saitpolytechnic@gmail.com?subject=[Website Inquiry] ${encodeURIComponent(formData.subject)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0A%0D%0A${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="relative h-[85vh] min-h-[700px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Enactus Team" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content Grid */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Headline */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-yellow-400">
            Let's Start a Conversation.
          </h1>
          <p className="mt-6 text-xl text-gray-200 max-w-lg">
            We're always looking for passionate students, innovative partners, and community leaders to join our mission.
          </p>
        </motion.div>

        {/* RIGHT: Glassmorphism Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Send us a message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" name="name" required placeholder="Name"
                value={formData.name} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:bg-white/30 focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
              />
              <input 
                type="email" name="email" required placeholder="Email"
                value={formData.email} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:bg-white/30 focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
              />
            </div>
            <input 
              type="text" name="subject" required placeholder="Subject"
              value={formData.subject} onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:bg-white/30 focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
            />
            <textarea 
              name="message" rows={3} required placeholder="Your message..."
              value={formData.message} onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:bg-white/30 focus:ring-2 focus:ring-yellow-400 outline-none transition-all resize-none"
            ></textarea>
            <button 
              type="submit" 
              className="w-full py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transform hover:scale-105 transition-all shadow-lg"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

// 2. The Social Links Section Component
const SocialsSection = () => {
  const socialLinks = [
    { name: 'Connect on LinkedIn', href: 'https://www.linkedin.com/company/enactus-sait/', color: 'hover:border-blue-500' },
    { name: 'Follow on Instagram', href: 'https://www.instagram.com/EnactusSAIT', color: 'hover:border-pink-500' },
    { name: 'View our LinkTree', href: 'https://linktr.ee/EnactusSAIT?utm_source=linktree_profile_share&ltsid=a3c724df-7e68-4b46-8d1f-8fbc6407678f', color: 'hover:border-green-500' }
  ];
  
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Us Elsewhere</h2>
        <p className="text-gray-600 mb-12">Stay up to date with our latest events and announcements.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className={`block bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 border-b-4 border-transparent ${link.color} transition-all duration-300`}
            >
              <h3 className="text-xl font-bold text-gray-900">{link.name}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};


// 3. The Main Page Wrapper
function ContactPage() {
  return (
    <main className="bg-white">
      <HeroFormSection />
      <SocialsSection />
    </main>
  );
}

export default ContactPage;