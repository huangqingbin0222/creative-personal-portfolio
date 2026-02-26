
import React from 'react';
import { ExternalLink, Play, Share2 } from 'lucide-react';

const SocialWorks: React.FC = () => {
  const works = [
    {
      title: '技术教程系列 - Bilibili',
      description: '在 B 站分享的前端深度教程，累计播放量 10w+，涵盖 React、Vue3 和 Node.js。',
      tags: ['教育', '前端', '视频'],
      imageUrl: 'https://picsum.photos/600/400?random=21'
    },
    {
      title: '个人技术周刊 - 知乎',
      description: '每周更新的技术思考与行业动态，拥有数千名固定订阅者，专注全栈开发趋势。',
      tags: ['专栏', '思考', '深度'],
      imageUrl: 'https://picsum.photos/600/400?random=22'
    },
    {
      title: '开源 UI 组件库 - GitHub',
      description: '一个基于 Tailwind CSS 的轻量级 React 组件库，旨在帮助开发者快速构建美观界面。',
      tags: ['开源', 'React', 'Tailwind'],
      imageUrl: 'https://picsum.photos/600/400?random=23'
    }
  ];

  return (
    <div className="py-12 space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold uppercase">Public Presence</span>
        <h2 className="text-4xl font-bold">社媒 <span className="text-indigo-600">作品</span></h2>
        <p className="text-gray-500 text-lg">
          我热爱分享与交流。在不同的社交平台上，我记录技术成长，分享开发心得。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {works.map((work, idx) => (
          <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-100 border border-gray-50 group">
            <div className="relative aspect-video overflow-hidden">
              <img src={work.imageUrl} alt={work.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                 <button className="p-3 bg-white rounded-full text-indigo-600 shadow-xl"><Play size={20} fill="currentColor" /></button>
                 <button className="p-3 bg-white rounded-full text-indigo-600 shadow-xl"><ExternalLink size={20} /></button>
              </div>
            </div>
            <div className="p-8 space-y-4">
              <div className="flex gap-2">
                {work.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2 py-1 rounded-md bg-indigo-50 text-indigo-500 text-[10px] font-bold uppercase">{tag}</span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{work.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{work.description}</p>
              <div className="pt-4 flex items-center justify-between">
                <button className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:gap-2 transition-all">
                  查看详情 <ArrowRight size={14} />
                </button>
                <Share2 size={16} className="text-gray-300" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Internal utility to match types used in SocialWorks
const ArrowRight: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

export default SocialWorks;
