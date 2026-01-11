import React from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { Send, User, Mail, MessageSquare } from "lucide-react";

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    // Note: Ensure you replace these with your actual IDs from EmailJS
    emailjs.sendForm(
      "service_3upjh0y",
      "template_d0jnqp6",
      e.target,
      "jCJlCCe1CGNqslo1O"
    ).then(
      () => {
        toast.success("Message sent successfully !");
        e.target.reset();
      },
      () => {
        toast.error("Message failed to send!");
      }
    );
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-[#0f0715] relative overflow-hidden px-6">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full"></div>

      {/* Heading Section */}
      <div className="relative z-10 text-center mb-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
          Get In Touch
        </h1>
        <p className="text-gray-400 mt-4 text-lg">Have a project in mind? Let's build something great together.</p>
      </div>

      {/* Glass Form Card */}
      <form
        onSubmit={sendEmail}
        className="relative z-10 w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl flex flex-col gap-6"
      >
        {/* Name Input */}
        <div className="relative">
          <label className="text-sm text-purple-300 ml-2 mb-2 block font-medium">Your Name</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input 
              name="name" 
              placeholder="John Doe" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              required 
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="relative">
          <label className="text-sm text-purple-300 ml-2 mb-2 block font-medium">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input 
              name="email" 
              type="email" 
              placeholder="john@example.com" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              required 
            />
          </div>
        </div>

        {/* Message Textarea */}
        <div className="relative">
          <label className="text-sm text-purple-300 ml-2 mb-2 block font-medium">Your Message</label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-6 text-gray-500" size={20} />
            <textarea 
              name="message" 
              placeholder="Tell me about your project..." 
              rows="4"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
              required 
            />
          </div>
        </div>

        {/* Submit Button */}
        <button className="group relative w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl font-bold text-white shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3">
          <span>Send Message</span>
          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </form>

      {/* Footer hint */}
      <p className="mt-8 text-gray-500 text-sm italic">
        I usually respond within 24 hours.
      </p>
    </div>
  );
};

export default Contact;