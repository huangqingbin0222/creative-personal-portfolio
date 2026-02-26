
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Plans from './components/Plans';
import Footer from './components/Footer';
import { Tab } from './types';
import { MusicProvider } from './context/MusicContext';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Home);

  // 监听滚动事件，根据滚动位置更新活动标签
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // 获取各个部分的位置
      const heroSection = document.getElementById('hero-section');
      const aboutSection = document.getElementById('about-section');
      const hobbiesSection = document.getElementById('hobbies-section');
      const plansSection = document.getElementById('plans-section');
      
      if (heroSection && aboutSection && hobbiesSection && plansSection) {
        const heroTop = heroSection.offsetTop - 100;
        const aboutTop = aboutSection.offsetTop - 100;
        const hobbiesTop = hobbiesSection.offsetTop - 100;
        const plansTop = plansSection.offsetTop - 100;
        
        // 根据滚动位置更新活动标签
        if (scrollPosition < aboutTop) {
          setActiveTab(Tab.Home);
        } else if (scrollPosition < hobbiesTop) {
          setActiveTab(Tab.About);
        } else if (scrollPosition < plansTop) {
          setActiveTab(Tab.Hobbies);
        } else {
          setActiveTab(Tab.Plans);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MusicProvider>
      <div className="min-h-screen flex flex-col">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-grow pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            {/* 所有页面内容放在一个容器中，让用户可以滚动浏览 */}
            <section id="hero-section">
              <Hero onNavigate={setActiveTab} />
            </section>
            <section id="about-section" className="py-20">
              <About />
            </section>
            <section id="hobbies-section" className="py-20">
              <Hobbies />
            </section>
            <section id="plans-section" className="py-20">
              <Plans />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </MusicProvider>
  );
};

export default App;
