
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: '某知名科技公司',
      role: '高级全栈工程师',
      period: '2021 - 至今',
      description: '主导了公司核心 SaaS 平台的重构，采用 Next.js 和 GraphQL 提升了 40% 的首屏加载速度。负责后端微服务架构设计。',
      color: 'border-blue-500'
    },
    {
      company: '创新软件工作室',
      role: '前端负责人',
      period: '2019 - 2021',
      description: '带领 5 人开发团队完成多个跨平台移动应用（React Native）。通过引入 CI/CD 流程将发布效率提升了 50%。',
      color: 'border-purple-500'
    },
    {
      company: '互联网初创企业',
      role: '全栈开发员',
      period: '2017 - 2019',
      description: '负责公司初版产品的开发，搭建了完整的电商后台管理系统，熟悉从部署到运维的全链路过程。',
      color: 'border-pink-500'
    }
  ];

  return (
    <div className="py-12 space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-xs font-bold uppercase">My Journey</span>
        <h2 className="text-4xl font-bold">职业 <span className="text-purple-600">履历</span></h2>
        <p className="text-gray-500 text-lg">
          在不同规模的项目中积累了丰富的实战经验，专注于交付高质量、可维护的代码。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className={`bg-white p-8 rounded-3xl shadow-xl shadow-gray-100 border-b-8 ${exp.color} relative hover:-translate-y-2 transition-transform duration-300`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-2xl bg-gray-50 text-gray-600`}>
                <Briefcase size={24} />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                <Calendar size={14} />
                {exp.period}
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h3>
            <p className="text-purple-600 font-semibold mb-4">{exp.company}</p>
            <p className="text-gray-500 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
