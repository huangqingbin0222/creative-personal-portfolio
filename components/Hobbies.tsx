
import React, { useRef, useContext } from 'react';
import { Music, Plane, Dumbbell } from 'lucide-react';
import { MusicContext } from '../context/MusicContext';

const Hobbies: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);
  const videos = ['/video/lq/lq01.mp4', '/video/lq/lq02.mp4'];
  
  // 使用音乐 Context
  const musicContext = useContext(MusicContext);
  if (!musicContext) {
    throw new Error('Hobbies must be used within a MusicProvider');
  }

  const { songs, currentSongName, isPlaying, playSong } = musicContext;
  
  const handleVideoMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  
  const handleVideoMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  
  const handleVideoEnded = () => {
    // 视频播放结束后循环播放当前视频
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };
  
  const handleWheel = (e: React.WheelEvent) => {
    // 阻止默认的页面滚动行为
    e.preventDefault();
    
    // 鼠标滚轮切换视频
    if (e.deltaY > 0) {
      // 向下滚动，播放下一个视频
      setCurrentVideoIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % videos.length;
        // 切换视频后自动播放
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.play();
          }
        }, 100);
        return newIndex;
      });
    } else {
      // 向上滚动，播放上一个视频
      setCurrentVideoIndex((prevIndex) => {
        const newIndex = (prevIndex - 1 + videos.length) % videos.length;
        // 切换视频后自动播放
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.play();
          }
        }, 100);
        return newIndex;
      });
    }
  };
  
  const interests = [
    { name: '篮球', icon: <span className="text-3xl">🏀</span>, color: 'bg-orange-50 text-orange-500', desc: '在球场上挥洒汗水' },
    { name: '音乐', icon: <Music size={32} />, color: 'bg-purple-50 text-purple-500', desc: '在旋律中寻找灵感' },
    { name: '旅行', icon: <Plane size={32} />, color: 'bg-green-50 text-green-500', desc: '探索未知的地理与文化' },
    { name: '健身', icon: <Dumbbell size={32} />, color: 'bg-blue-50 text-blue-500', desc: '强健体魄，磨练意志' },
  ];

  return (
    <div className="py-12 space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase">Life Outside Code</span>
        <h2 className="text-4xl font-bold">兴趣 <span className="text-blue-500">爱好</span></h2>
        <p className="text-gray-500 text-lg">
          除了编写代码，我也热爱探索生活的多样性。这些爱好让我在技术之外保持充沛的创造力。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {interests.map((hobby, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-100 border border-gray-50 flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300 relative">
            <div className={`p-4 rounded-full ${hobby.color} mb-6 group-hover:rotate-12 transition-transform`}>
              {hobby.icon}
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{hobby.name}</h3>
            <p className="text-xs text-gray-400">{hobby.desc}</p>
            
            {/* 篮球爱好的视频展示 */}
            {hobby.name === '篮球' && (
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 bg-white rounded-3xl shadow-2xl flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible scale-90 group-hover:scale-110 transition-all duration-500 ease-out z-500 p-4"
                style={{ 
                  width: '200px', 
                  height: '280px',
                  '@media (min-width: 640px)': {
                    width: '250px',
                    height: '350px'
                  },
                  '@media (min-width: 1024px)': {
                    width: '300px',
                    height: '400px'
                  }
                }}
              >
                <div className="w-full h-full">
                  <video 
                    ref={videoRef}
                    key={currentVideoIndex} // 强制重新渲染视频元素以切换视频
                    src={videos[currentVideoIndex]} 
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                    onMouseEnter={handleVideoMouseEnter}
                    onMouseLeave={handleVideoMouseLeave}
                    onEnded={handleVideoEnded}
                    onWheel={handleWheel}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
              </div>
            )}
            
            {/* 音乐爱好的歌单展示 */}
            {hobby.name === '音乐' && (
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 bg-white rounded-3xl shadow-2xl flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible scale-90 group-hover:scale-110 transition-all duration-500 ease-out z-500 p-4"
                style={{ 
                  width: '200px', 
                  height: '280px',
                  '@media (min-width: 640px)': {
                    width: '240px',
                    height: '320px'
                  },
                  '@media (min-width: 1024px)': {
                    width: '280px',
                    height: '350px'
                  }
                }}
              >
                <div className="w-full h-full flex flex-col space-y-4">
                  <h4 className="text-base font-bold text-blue-600 text-center mb-3">我的歌单</h4>
                  <ul className="space-y-2 overflow-y-auto flex-grow pr-2">
                    {songs.map((song, index) => (
                      <li key={index} className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                        <div 
                          className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-300 transition-colors"
                          onClick={() => playSong(song.name)}
                        >
                          {currentSongName === song.name && isPlaying ? '⏸' : '▶'}
                        </div>
                        <p className="font-semibold text-xs text-gray-700 flex-1">{song.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
        <h3 className="text-xl font-bold text-blue-600 mb-8 text-center">近期生活</h3>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          {/* 最近状态 */}
          <div className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto animate-pulse">
              🌱
            </div>
            <h4 className="font-semibold text-blue-700 text-center mb-2">最近状态</h4>
            <p className="text-gray-600 text-center">上班中</p>
          </div>
          
          {/* 箭头连接 */}
          <div className="hidden md:block w-12 h-1 bg-dashed border-t-2 border-blue-300 relative">
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1">
              <div className="w-4 h-4 border-t-2 border-r-2 border-blue-400 transform rotate-45"></div>
            </div>
          </div>
          <div className="block md:hidden w-full h-8 flex items-center justify-center">
            <div className="w-16 h-1 bg-dashed border-t-2 border-blue-300 relative">
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1">
                <div className="w-4 h-4 border-t-2 border-r-2 border-blue-400 transform rotate-45"></div>
              </div>
            </div>
          </div>
          
          {/* 最近在听 */}
          <div className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto animate-pulse">
              🎵
            </div>
            <h4 className="font-semibold text-blue-700 text-center mb-2">最近在听</h4>
            <p className="text-gray-600 text-center">Capper</p>
          </div>
          
          {/* 箭头连接 */}
          <div className="hidden md:block w-12 h-1 bg-dashed border-t-2 border-blue-300 relative">
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1">
              <div className="w-4 h-4 border-t-2 border-r-2 border-blue-400 transform rotate-45"></div>
            </div>
          </div>
          <div className="block md:hidden w-full h-8 flex items-center justify-center">
            <div className="w-16 h-1 bg-dashed border-t-2 border-blue-300 relative">
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1">
                <div className="w-4 h-4 border-t-2 border-r-2 border-blue-400 transform rotate-45"></div>
              </div>
            </div>
          </div>
          
          {/* 最近感兴趣 */}
          <div className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto animate-pulse">
              🌟
            </div>
            <h4 className="font-semibold text-blue-700 text-center mb-2">最近感兴趣</h4>
            <p className="text-gray-600 text-center">AI、自媒体、基金</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Hobbies;
