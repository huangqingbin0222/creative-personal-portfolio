
import React, { useContext, useState } from 'react';
import { Github, Linkedin, Music, SkipBack, Play, Pause, SkipForward, Menu, X } from 'lucide-react';
import { Tab } from '../types';
import { MusicContext } from '../context/MusicContext';

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const tabs = [
    { id: Tab.Home, label: 'Home' },
    { id: Tab.About, label: 'MyLife' },
    { id: Tab.Hobbies, label: 'Hobbies' },
    { id: Tab.Plans, label: 'Plan' },
  ];

  // 使用音乐 Context
  const musicContext = useContext(MusicContext);
  if (!musicContext) {
    throw new Error('Header must be used within a MusicProvider');
  }

  const { isPlaying, togglePlay, playPrevious, playNext } = musicContext;

  // 跳转到兴趣爱好-音乐
  const navigateToMusicHobby = () => {
    setActiveTab(Tab.Hobbies);
  };

  // 关闭移动菜单
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mono cursor-pointer"
            onClick={() => {
              setActiveTab(Tab.Home);
              closeMobileMenu();
            }}
          >
            小黄的新事
          </h1>
        </div>

        {/* 桌面导航 */}
        <nav className="hidden md:flex items-center gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                // 滚动到对应的部分
                if (tab.id === Tab.Home) {
                  document.getElementById('hero-section')?.scrollIntoView({ behavior: 'smooth' });
                } else if (tab.id === Tab.About) {
                  document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
                } else if (tab.id === Tab.Hobbies) {
                  document.getElementById('hobbies-section')?.scrollIntoView({ behavior: 'smooth' });
                } else if (tab.id === Tab.Plans) {
                  document.getElementById('plans-section')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`text-xl font-medium transition-colors relative py-1 ${
                activeTab === tab.id ? 'text-blue-600' : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* 移动菜单按钮 */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {/* 音乐播放器 */}
          <div 
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-blue-200 cursor-pointer"
            onClick={navigateToMusicHobby}
          >
            <Music size={14} />
            <div className="flex items-center gap-2">
              <button onClick={(e) => { e.stopPropagation(); playPrevious(); }} className="hover:text-white/80 transition-colors">
                <SkipBack size={14} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); togglePlay(); }} className="hover:text-white/80 transition-colors">
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              </button>
              <button onClick={(e) => { e.stopPropagation(); playNext(); }} className="hover:text-white/80 transition-colors">
                <SkipForward size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 移动导航菜单 */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  closeMobileMenu();
                  // 滚动到对应的部分
                  if (tab.id === Tab.Home) {
                    document.getElementById('hero-section')?.scrollIntoView({ behavior: 'smooth' });
                  } else if (tab.id === Tab.About) {
                    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
                  } else if (tab.id === Tab.Hobbies) {
                    document.getElementById('hobbies-section')?.scrollIntoView({ behavior: 'smooth' });
                  } else if (tab.id === Tab.Plans) {
                    document.getElementById('plans-section')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`text-xl font-medium transition-colors py-3 ${
                  activeTab === tab.id ? 'text-blue-600' : 'text-gray-500 hover:text-blue-500'
                }`}
              >
                {tab.label}
              </button>
            ))}
            {/* 移动音乐播放器 */}
            <div 
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-blue-200 cursor-pointer mt-4"
              onClick={() => {
                navigateToMusicHobby();
                closeMobileMenu();
              }}
            >
              <Music size={14} />
              <div className="flex items-center gap-2">
                <button onClick={(e) => { e.stopPropagation(); playPrevious(); }} className="hover:text-white/80 transition-colors">
                  <SkipBack size={14} />
                </button>
                <button onClick={(e) => { e.stopPropagation(); togglePlay(); }} className="hover:text-white/80 transition-colors">
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>
                <button onClick={(e) => { e.stopPropagation(); playNext(); }} className="hover:text-white/80 transition-colors">
                  <SkipForward size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
