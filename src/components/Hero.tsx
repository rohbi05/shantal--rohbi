import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Information */}
          <div className="order-2 lg:order-1 text-left">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Shantal Rohbi
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Passionate about creating beautiful, user-friendly applications with modern technologies.
              Specialized in React, Node.js, and cloud architecture.
            </p>
            
            <div className="flex space-x-6 mb-12">
              <a 
                href="https://github.com" 
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>

            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-600/20 dark:bg-indigo-400/20 rounded-full blur-2xl "></div>
              <img
                src=" ./shan.jpg"
                alt="Profile"
                
                
            
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="#projects"
            className="animate-bounce text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}