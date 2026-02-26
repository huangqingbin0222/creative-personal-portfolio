
import React, { useState } from 'react';
import { ArrowRight, Download, Coffee, Code, Bug, MousePointer2 } from 'lucide-react';
import { Tab } from '../types';

interface HeroProps {
  onNavigate: (tab: Tab) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleImageClick = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between pt-2 lg:pt-4 pb-10 lg:pb-20 gap-16">
      <div className="flex-1 space-y-8 order-2 lg:order-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          探索新可能...
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            <span className="text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">黄庆滨</span> 个人网站
          </h1>
          <div className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-600 mt-2 flex flex-wrap gap-x-4 gap-y-2">
            <span>坐标：深圳</span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span>星座：双鱼座</span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span>家乡：广东惠来</span>
          </div>
          
          <div className="bg-[#1e1e2e] rounded-xl p-6 shadow-2xl max-w-md border border-gray-700/50 mono text-sm transform hover:scale-[1.02] transition-transform">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-gray-500 ml-2"></span>
            </div>
            <div className="space-y-2">
              <p className="text-blue-400"># <span className="text-gray-300">自我简介</span></p>
              <p className="text-green-400">
                <span className="text-purple-400">^^</span> 大家好，我是2024届计算机专业毕业的选手。本以为毕业能稳稳敲代码、改 bug、走向技术岗，结果求职路上和计算机工作擦肩而过，最终被运营岗位成功 “收留”。虽然没走上纯技术路线，但平时依旧爱研究点新技术、新工具，保持着程序员的好奇心和折腾欲。目前对新媒体方向特别感兴趣，正用计算机思维做运营、用技术思路搞内容，主打一个专业不跑偏、兴趣不缺席、转行不躺平！
              </p>
              <div className="w-1 h-5 bg-white/50 animate-pulse inline-block" />
            </div>
          </div>

          <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
            这里是一个记录个人的网站。不管是生活里的小感悟，还是职场上的摸爬滚打，都想慢慢沉淀下来。不追求一步到位，只希望在每一段经历里丰富自己、提升自己，把日子过得有迹可循、越来越好。未来也会继续保持热爱，一边学习，一边向前，活成自己喜欢的样子。
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => onNavigate(Tab.About)}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-xl shadow-blue-200 hover:opacity-90 transition-all"
          >
            开始了解 <ArrowRight size={20} />
          </button>
        </div>

      </div>

      <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 relative">
        <div className="relative w-72 h-72 sm:w-96 sm:h-96">
          {/* Glowing circles */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse" />
          
          <div 
            className="relative z-10 w-full h-full rounded-full border-8 border-white shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200 group cursor-pointer"
            onClick={handleImageClick}
          >
            <div className={`w-full h-full transition-transform duration-1000 ease-in-out transform ${isFlipped ? 'rotate-y-180' : 'rotate-y-0'} preserve-3d`}>
              <img 
                src="/images/pic_01.jpg" 
                alt="Profile" 
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${isFlipped ? 'hidden' : 'block'}`}
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <img 
                src="/images/pic_02.png" 
                alt="Profile" 
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 absolute top-0 left-0 ${isFlipped ? 'block scale-150' : 'hidden'}`}
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-0 -left-4 z-20 w-12 h-12 bg-[#444444] rounded-full flex items-center justify-center text-green-400 shadow-xl animate-float">
            <Coffee size={20} />
          </div>
          <div className="absolute top-1/2 -right-6 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-xl animate-float" style={{animationDelay: '1s'}}>
            <Code size={20} />
          </div>
          <div className="absolute -bottom-4 left-1/4 z-20 w-12 h-12 bg-[#1e1e2e] rounded-full flex items-center justify-center text-blue-400 shadow-xl animate-float" style={{animationDelay: '1.5s'}}>
            <Bug size={20} />
          </div>
          <div className="absolute bottom-10 -right-10 z-20 w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-2xl transform rotate-12">
             <MousePointer2 size={24} />
          </div>
        </div>
      </div>


    </div>
  );
};

export default Hero;
