
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mono">
            小黄的新事
          </h2>
          <p className="text-gray-400 text-sm mt-2">© 2026 Built with Passion and React.</p>
        </div>
        
        <div className="flex gap-8 text-gray-500 text-sm font-medium">
          <a href="#" onClick={(e) => {
            e.preventDefault();
            document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
          }} className="hover:text-blue-600 transition-colors">关于我</a>
          <a href="#" onClick={(e) => {
            e.preventDefault();
            document.getElementById('hobbies-section')?.scrollIntoView({ behavior: 'smooth' });
          }} className="hover:text-blue-600 transition-colors">兴趣爱好</a>
          <a href="#" onClick={(e) => {
            e.preventDefault();
            document.getElementById('plans-section')?.scrollIntoView({ behavior: 'smooth' });
          }} className="hover:text-blue-600 transition-colors">年度计划</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
            G
          </div>
          <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 hover:bg-cyan-600 hover:text-white transition-colors cursor-pointer">
            B
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
            Z
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
