// src/pages/ContactPage.tsx

import { useState } from 'react';
import { motion } from 'framer-motion';

// Using the same background as other headers for consistency
import heroBg from '../assets/backgrounds/background-about-hero.png'; 

// --- ICON IMPORTS ---
// Importing the specific icons needed for the cards
import { FaLinkedinIn } from 'react-icons/fa';
import { FiMail, FiLink } from 'react-icons/fi';


// --- COMPONENTS ---

// 1. The "Hero Form" Section Component
const HeroFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // for feedback message (success/failure)
  const [status, setStatus] = useState<string | null>(null);
  // shows sending message and will disable button when still loading 
  const [loading, setLoading] = useState(false);

  //updates form data upon input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // sends data to the API route
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

     // sends form data to API and handles response. site gets updated with success or error feedback
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus(data.error || 'Failed to send message.');
      }
    } catch (err) {
      setStatus('Failed to send message.');
    }

    setLoading(false);
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
              disabled = {loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status && <p className="mt-2 text-center text-white">{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
};
// 2. The Social Links Section Component - UPDATED
const SocialsSection = () => {
  // Updated data structure with icons and subtext
  const socialLinks = [
    { 
      name: 'Email Us', 
      href: 'mailto:enactus.saitpolytechnic@gmail.com',
      subtext: 'enactus.saitpolytechnic@gmail.com',
      icon: <FiMail size={32} />, // Mail Icon
      color: 'bg-gray-800 hover:bg-gray-900',
      textColor: 'text-white'
    },
    { 
      name: 'Connect on LinkedIn', 
      href: 'https://www.linkedin.com/company/enactus-sait/',
      subtext: 'Go to Profile →',
      icon: <FaLinkedinIn size={32} />, // LinkedIn Icon
      color: 'bg-blue-600 hover:bg-blue-700',
      textColor: 'text-white'
    },
    { 
      name: 'View LinkTree', 
      href: 'https://linktr.ee/EnactusSAIT?utm_source=linktree_profile_share&ltsid=a3c724df-7e68-4b46-8d1f-8fbc6407678f',
      subtext: 'See All Links →',
      icon: <FiLink size={32} />, // Link Icon
      color: 'bg-green-500 hover:bg-green-600',
      textColor: 'text-white'
    }
  ];
  
  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">Direct Contact</h2>
        <p className="text-lg text-gray-600 mt-4 mb-2">The fastest ways to connect with our team.</p>
        <div className="h-1.5 w-24 bg-yellow-400 mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className={`block p-8 rounded-2xl shadow-lg ${link.color} ${link.textColor} transition-all duration-300`}
            >
              {/* Updated layout to include icons */}
              <div className="flex flex-col items-center justify-center text-center h-full">
                <div className="mb-5">{link.icon}</div>
                <h3 className="text-xl font-bold">{link.name}</h3>
                <p className="mt-2 text-sm opacity-80">{link.subtext}</p>
              </div>
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