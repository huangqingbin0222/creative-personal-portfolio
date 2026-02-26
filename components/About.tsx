
import React from 'react';

const About: React.FC = () => {

  return (
    <div className="py-12 space-y-16">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl shadow-gray-100 border-t-[6px] border-blue-500 relative">
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-px bg-blue-200 flex-grow" />
                  <h2 className="text-blue-600 font-bold tracking-widest text-sm uppercase">About Me</h2>
                  <div className="h-px bg-blue-200 flex-grow" />
                </div>

                <div className="relative space-y-16">
                  {/* 时间轴线 - 仅在中等及以上屏幕显示 */}
                  <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2" />
                  
                  {/* 时间轴项 0 - 2025.12 第一次看雪 */}
                  <div className="flex flex-col md:flex-row md:items-center relative">
                    <div className="md:w-1/3 pr-6 md:pr-12 flex md:justify-end mb-6 md:mb-0">
                      <div className="w-32 h-32 rounded-xl overflow-hidden shadow-md flex-shrink-0 transition-all duration-300 hover:shadow-xl group hover:w-48 hover:h-48">
                        <img src="/images/1.4.jpg" alt="第一次看雪" className="w-full h-full object-cover transition-transform duration-500" onContextMenu={(e) => e.preventDefault()} draggable="false" />
                      </div>
                    </div>
                    <div className="hidden md:block absolute left-1/3 top-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-md transform -translate-x-1/2 -translate-y-1/2" />
                    <div className="md:w-2/3 pl-0 md:pl-12">
                      <div className="text-sm font-semibold text-blue-600 mb-2">2025.12</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">第一次看雪</h3>
                      <p className="text-gray-600 leading-relaxed">
                        人生第一次看到雪景，银装素裹的世界，感受冬日的浪漫与宁静。
                      </p>
                    </div>
                  </div>
                  
                  {/* 时间轴项 1 - 2025.08 杭州西湖 */}
                  <div className="flex flex-col md:flex-row md:items-center relative">
                    <div className="md:w-1/3 pr-6 md:pr-12 flex md:justify-end mb-6 md:mb-0">
                      <div className="w-32 h-32 rounded-xl overflow-hidden shadow-md flex-shrink-0 transition-all duration-300 hover:shadow-xl group hover:w-48 hover:h-48">
                        <img src="/images/1.5.jpg" alt="杭州西湖" className="w-full h-full object-cover transition-transform duration-500" onContextMenu={(e) => e.preventDefault()} draggable="false" />
                      </div>
                    </div>
                    <div className="hidden md:block absolute left-1/3 top-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-md transform -translate-x-1/2 -translate-y-1/2" />
                    <div className="md:w-2/3 pl-0 md:pl-12">
                      <div className="text-sm font-semibold text-blue-600 mb-2">2025.08</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">杭州西湖</h3>
                      <p className="text-gray-600 leading-relaxed">
                        游览杭州西湖，感受江南水乡的韵味，欣赏湖光山色的美景。
                      </p>
                    </div>
                  </div>
                  
                  {/* 时间轴项 2 - 2025.04 厦门 */}
                  <div className="flex flex-col md:flex-row md:items-center relative">
                    <div className="md:w-1/3 pr-6 md:pr-12 flex md:justify-end mb-6 md:mb-0">
                      <div className="w-32 h-32 rounded-xl overflow-hidden shadow-md flex-shrink-0 transition-all duration-300 hover:shadow-xl group hover:w-48 hover:h-48">
                        <img src="/images/1.6.jpg" alt="厦门" className="w-full h-full object-cover transition-transform duration-500" onContextMenu={(e) => e.preventDefault()} draggable="false" />
                      </div>
                    </div>
                    <div className="hidden md:block absolute left-1/3 top-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-md transform -translate-x-1/2 -translate-y-1/2" />
                    <div className="md:w-2/3 pl-0 md:pl-12">
                      <div className="text-sm font-semibold text-blue-600 mb-2">2025.04</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">厦门</h3>
                      <p className="text-gray-600 leading-relaxed">
                        游览厦门，感受海滨城市的魅力，欣赏鼓浪屿的风光。
                      </p>
                    </div>
                  </div>
                  
                  {/* 时间轴项 3 - 2024.10 进入职场 */}
                  <div className="flex flex-col md:flex-row md:items-center relative">
                    <div className="md:w-1/3 pr-6 md:pr-12 flex md:justify-end mb-6 md:mb-0">
                      <div className="w-32 h-32 rounded-xl overflow-hidden shadow-md flex-shrink-0 transition-all duration-300 hover:shadow-xl group hover:w-48 hover:h-48">
                        <img src="/images/1.1.jpg" alt="进入职场" className="w-full h-full object-cover transition-transform duration-500" onContextMenu={(e) => e.preventDefault()} draggable="false" />
                      </div>
                    </div>
                    <div className="hidden md:block absolute left-1/3 top-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-md transform -translate-x-1/2 -translate-y-1/2" />
                    <div className="md:w-2/3 pl-0 md:pl-12">
                      <div className="text-sm font-semibold text-blue-600 mb-2">2024.10</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">进入职场</h3>
                      <p className="text-gray-600 leading-relaxed">
                        毕业后进入职场，虽非纯技术路线，仍保持对新技术的好奇，用技术思维做新媒体。
                      </p>
                    </div>
                  </div>
                  
                  {/* 时间轴项 4 - 2024.06 快乐的毕业 */}
                  <div className="flex flex-col md:flex-row md:items-center relative">
                    <div className="md:w-1/3 pr-6 md:pr-12 flex md:justify-end mb-6 md:mb-0">
                      <div className="w-32 h-32 rounded-xl overflow-hidden shadow-md flex-shrink-0 transition-all duration-300 hover:shadow-xl group hover:w-48 hover:h-48">
                        <img src="/images/1.2.jpg" alt="快乐的毕业" className="w-full h-full object-cover transition-transform duration-500" onContextMenu={(e) => e.preventDefault()} draggable="false" />
                      </div>
                    </div>
                    <div className="hidden md:block absolute left-1/3 top-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-md transform -translate-x-1/2 -translate-y-1/2" />
                    <div className="md:w-2/3 pl-0 md:pl-12">
                      <div className="text-sm font-semibold text-blue-600 mb-2">2024.06</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">快乐的毕业</h3>
                      <p className="text-gray-600 leading-relaxed">
                        大学四年，学习计算机知识，结交朋友，参加活动，顺利毕业。
                      </p>
                    </div>
                  </div>
                  
                  {/* 时间轴项 5 - 2020.06 高中毕业 */}
                  <div className="flex flex-col md:flex-row md:items-center relative">
                    <div className="md:w-1/3 pr-6 md:pr-12 flex md:justify-end mb-6 md:mb-0">
                      <div className="w-32 h-32 rounded-xl overflow-hidden shadow-md flex-shrink-0 transition-all duration-300 hover:shadow-xl group hover:w-48 hover:h-48">
                        <img src="/images/1.3.jpg" alt="广州读大学" className="w-full h-full object-cover transition-transform duration-500" onContextMenu={(e) => e.preventDefault()} draggable="false" />
                      </div>
                    </div>
                    <div className="hidden md:block absolute left-1/3 top-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-md transform -translate-x-1/2 -translate-y-1/2" />
                    <div className="md:w-2/3 pl-0 md:pl-12">
                      <div className="text-sm font-semibold text-blue-600 mb-2">2020.06</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">高中毕业</h3>
                      <p className="text-gray-600 leading-relaxed">
                        2020年高中毕业，培养良好习惯，为大学学习打下基础。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
        </div>


      </div>


    </div>
  );
};

export default About;
