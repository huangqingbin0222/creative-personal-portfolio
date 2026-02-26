
import React from 'react';
import { Target, Flag, Rocket, CheckSquare, Clock, Map } from 'lucide-react';

const Plans: React.FC = () => {
  const plans = [
    {
      title: '2026年度目标',
      items: [
        { label: '运营个人社媒账号（目标万粉）', done: false },
        { label: '减脂（体脂到15%-18%）', done: false },
        { label: '开辟一个副业（目标副业赚5k）', done: false },
        { label: 'videcoding 10个项目以上+开发一个app', done: false }
      ],
      icon: <Target className="text-orange-500" />,
      color: 'bg-orange-50'
    }
  ];

  return (
    <div className="py-12 space-y-12">
       <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase">2026</span>
            <h2 className="text-4xl font-bold">年度 <span className="text-orange-600">目标</span></h2>
            <p className="text-gray-500 text-lg">
              新的一年，新的开始。以下是我2026年的关键目标，涵盖个人成长、健康、事业和创意等多个方面。
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl shadow-xl border border-blue-100 space-y-6">
            <h3 className="font-bold text-xl flex items-center gap-2 text-blue-700">
              <Map className="text-blue-500" size={24} /> 核心价值观
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {
                [
                  { title: '持续学习', desc: '保持好奇心，拥抱新技术' },
                  { title: '时间复利', desc: '持续投入，让时间成为成长的加速器，收获指数级回报' },
                  { title: '天马行空', desc: '发挥想象力，创造独特的解决方案' },
                  { title: '厚积薄发', desc: '积累知识与经验，时机成熟时爆发潜能' }
                ].map((val, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white border border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                    <div className="font-bold text-blue-800 mb-1">{val.title}</div>
                    <div className="text-sm text-blue-600">{val.desc}</div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          {plans.map((plan, idx) => (
            <div key={idx} className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-3xl shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-2xl ${plan.color} shadow-md`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{plan.title}</h3>
              </div>
              <ul className="space-y-5">
                {plan.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-center gap-4 p-3 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-orange-100 p-2 rounded-full">
                      {item.done ? (
                        <CheckSquare className="text-orange-600 flex-shrink-0" size={20} />
                      ) : (
                        <Clock className="text-orange-500 flex-shrink-0" size={20} />
                      )}
                    </div>
                    <span className={item.done ? 'text-gray-400 line-through' : 'text-gray-700 font-medium'}>
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Plans;
