
'use client'

import { motion } from 'framer-motion'
import { Calendar, Handshake, TrendingUp, Users, MapPin, Star, Globe, Award, Building, Heart } from 'lucide-react'
import { useLanguage } from '../Header/Header' // Updated import path

interface Milestone {
  year: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  significance: string
}

interface CooperationArea {
  title: string
  description: string
  projects: string[]
  value: string
  growth: string
  icon: React.ComponentType<{ className?: string }>
}

interface Initiative {
  title: string
  description: string
  progress: string
  impact: string
}

interface Statistic {
  metric: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

// Define the return type for useLanguage hook
interface LanguageContextType {
  currentLanguage: 'en' | 'zh'
  toggleLanguage: () => void
}

interface MilestoneContent {
  year: string
  title: string
  description: string
  significance: string
}

interface CooperationAreaContent {
  title: string
  description: string
  projects: string[]
  value: string
  growth: string
}

interface InitiativeContent {
  title: string
  description: string
  progress: string
  impact: string
}

interface StatisticContent {
  metric: string
  label: string
}

interface LanguageContent {
  sectionTitle: string
  mainHeading: string
  subtitle: string
  historicalTitle: string
  historicalSubtitle: string
  cooperationTitle: string
  cooperationSubtitle: string
  initiativesTitle: string
  initiativesSubtitle: string
  ctaText: string
  ctaButton: string
  progress: string
  keyProjects: string
  milestones: MilestoneContent[]
  cooperationAreas: CooperationAreaContent[]
  currentInitiatives: InitiativeContent[]
  statistics: StatisticContent[]
}

interface ContentMap {
  en: LanguageContent
  zh: LanguageContent
}

const ChinaUgandaRelations = () => {
  // Dynamic years calculation
  const relationsStartYear = 1962
  const currentYear = new Date().getFullYear()
  const yearsOfRelations = currentYear - relationsStartYear

  const { currentLanguage } = useLanguage() as LanguageContextType

  // Language content
  const content: ContentMap = {
    en: {
      sectionTitle: "China-Uganda Relations",
      mainHeading: "Strategic Partnership",
      subtitle: `${yearsOfRelations} years of friendship, cooperation, and mutual development between the People's Republic of China and the Republic of Uganda`,
      historicalTitle: "Historical Milestones",
      historicalSubtitle: `Key moments that have shaped the strong bilateral relationship between China and Uganda since ${relationsStartYear}`,
      cooperationTitle: "Areas of Cooperation",
      cooperationSubtitle: `Strategic partnership areas driving mutual development and prosperity over ${yearsOfRelations} years`,
      initiativesTitle: "Current Strategic Initiatives",
      initiativesSubtitle: `Building on ${yearsOfRelations} years of partnership`,
      ctaText: "Interested in learning more about our cooperation opportunities?",
      ctaButton: "Contact Our Economic Office",
      progress: "Progress",
      keyProjects: "Key Projects:",
      milestones: [
        {
          year: "1962",
          title: "Diplomatic Relations Established",
          description: "Formal diplomatic relations established following Uganda's independence, marking the beginning of bilateral friendship",
          significance: "Foundation of bilateral ties"
        },
        {
          year: "1980s",
          title: "Economic Cooperation Begins",
          description: "Launch of joint infrastructure projects and economic partnerships, focusing on agriculture and industry",
          significance: "Economic partnership expansion"
        },
        {
          year: "2000",
          title: "Forum on China-Africa Cooperation",
          description: "Uganda becomes active member of FOCAC, strengthening bilateral ties under multilateral framework",
          significance: "Multilateral cooperation platform"
        },
        {
          year: "2018",
          title: "Comprehensive Cooperative Partnership",
          description: "Elevation to comprehensive cooperative partnership, covering politics, economy, and culture",
          significance: "Strategic partnership upgrade"
        }
      ],
      cooperationAreas: [
        {
          title: "Infrastructure Development",
          description: "Strategic infrastructure projects transforming Uganda's economic landscape",
          projects: ["Entebbe Expressway", "Karuma Hydro Power Plant", "Kampala-Entebbe Railway", "Industrial Parks Development"],
          value: "$1.8B",
          growth: "+25% since 2020"
        },
        {
          title: "Trade & Investment",
          description: "Growing economic ties and investment partnerships between Chinese and Ugandan businesses",
          projects: ["Bilateral Trade Agreements", "Chinese Investments in Uganda", "Export Partnerships", "Technology Transfer"],
          value: "$890M",
          growth: "+18% annual growth"
        },
        {
          title: "Education & Culture",
          description: "People-to-people exchanges and educational cooperation fostering mutual understanding",
          projects: ["Confucius Institutes", "Student Exchange Programs", "Cultural Festivals", "Technical Training"],
          value: "600+ Students",
          growth: "50+ annual exchanges"
        }
      ],
      currentInitiatives: [
        {
          title: "Belt and Road Cooperation",
          description: "Infrastructure connectivity and economic corridor development under BRI framework",
          progress: "85%",
          impact: "Enhanced regional connectivity"
        },
        {
          title: "Agricultural Modernization",
          description: "Technology transfer and capacity building in agricultural sector",
          progress: "70%", 
          impact: "Increased food security"
        },
        {
          title: "Digital Economy Partnership",
          description: "Cooperation in telecommunications, e-commerce, and digital infrastructure",
          progress: "60%",
          impact: "Digital transformation acceleration"
        }
      ],
      statistics: [
        { metric: `${yearsOfRelations}+`, label: "Years of Diplomatic Relations" },
        { metric: "$2.1B", label: "Total Bilateral Trade" },
        { metric: "120+", label: "Chinese Companies in Uganda" },
        { metric: "15K+", label: "Employment Created" }
      ]
    },
    zh: {
      sectionTitle: "中乌关系",
      mainHeading: "战略伙伴关系",
      subtitle: `${yearsOfRelations}年的友谊、合作与共同发展，连接中华人民共和国与乌干达共和国`,
      historicalTitle: "历史里程碑",
      historicalSubtitle: `自${relationsStartYear}年以来塑造中乌双边关系的关键时刻`,
      cooperationTitle: "合作领域",
      cooperationSubtitle: `${yearsOfRelations}年来推动共同发展与繁荣的战略伙伴关系领域`,
      initiativesTitle: "当前战略倡议",
      initiativesSubtitle: `建立在${yearsOfRelations}年伙伴关系基础上`,
      ctaText: "有兴趣了解更多关于我们的合作机会吗？",
      ctaButton: "联系我们的经济办公室",
      progress: "进展",
      keyProjects: "关键项目:",
      milestones: [
        {
          year: "1962",
          title: "建立外交关系",
          description: "乌干达独立后正式建立外交关系，标志着双边友谊的开始",
          significance: "双边关系基础"
        },
        {
          year: "1980年代",
          title: "经济合作开始",
          description: "启动联合基础设施项目和经济伙伴关系，重点关注农业和工业",
          significance: "经济伙伴关系扩展"
        },
        {
          year: "2000",
          title: "中非合作论坛",
          description: "乌干达成为FOCAC积极成员，在多边框架下加强双边关系",
          significance: "多边合作平台"
        },
        {
          year: "2018",
          title: "全面合作伙伴关系",
          description: "提升为全面合作伙伴关系，涵盖政治、经济和文化",
          significance: "战略伙伴关系升级"
        }
      ],
      cooperationAreas: [
        {
          title: "基础设施发展",
          description: "战略性基础设施项目改变乌干达经济格局",
          projects: ["恩德培高速公路", "卡鲁马水电站", "坎帕拉-恩德培铁路", "工业园区开发"],
          value: "$18亿",
          growth: "自2020年增长+25%"
        },
        {
          title: "贸易与投资",
          description: "中乌企业间不断增长的经济联系和投资伙伴关系",
          projects: ["双边贸易协定", "中国在乌干达投资", "出口伙伴关系", "技术转让"],
          value: "$8.9亿",
          growth: "年增长+18%"
        },
        {
          title: "教育与文化",
          description: "人文交流和教文合作促进相互理解",
          projects: ["孔子学院", "学生交流项目", "文化节", "技术培训"],
          value: "600+ 学生",
          growth: "50+ 年度交流"
        }
      ],
      currentInitiatives: [
        {
          title: "一带一路合作",
          description: "在一带一路框架下的基础设施连通性和经济走廊发展",
          progress: "85%",
          impact: "增强区域连通性"
        },
        {
          title: "农业现代化",
          description: "农业部门的技术转让和能力建设",
          progress: "70%", 
          impact: "提高粮食安全"
        },
        {
          title: "数字经济伙伴关系",
          description: "电信、电子商务和数字基础设施合作",
          progress: "60%",
          impact: "加速数字化转型"
        }
      ],
      statistics: [
        { metric: `${yearsOfRelations}+`, label: "外交关系年数" },
        { metric: "$21亿", label: "双边贸易总额" },
        { metric: "120+", label: "在乌干达的中国公司" },
        { metric: "1.5万+", label: "创造的就业" }
      ]
    }
  }

  const t = content[currentLanguage]

  const milestones: Milestone[] = t.milestones.map(milestone => ({
    ...milestone,
    icon: milestone.title.includes("Diplomatic") || milestone.title.includes("外交") ? Handshake :
          milestone.title.includes("Economic") || milestone.title.includes("经济") ? TrendingUp :
          milestone.title.includes("Forum") || milestone.title.includes("论坛") ? Users : Star
  }))

  const cooperationAreas: CooperationArea[] = t.cooperationAreas.map(area => ({
    ...area,
    icon: area.title.includes("Infrastructure") || area.title.includes("基础设施") ? Building :
          area.title.includes("Trade") || area.title.includes("贸易") ? TrendingUp : Globe
  }))

  const currentInitiatives: Initiative[] = t.currentInitiatives

  const keyStatistics: Statistic[] = t.statistics.map(stat => ({
    ...stat,
    icon: stat.label.includes("Years") || stat.label.includes("年数") ? Calendar :
          stat.label.includes("Trade") || stat.label.includes("贸易") ? TrendingUp :
          stat.label.includes("Companies") || stat.label.includes("公司") ? Building : Users
  }))

  return (
    <section id="relations" className="py-12 sm:py-20 bg-gradient-to-br from-white to-red-50/20 relative overflow-hidden">
      {/* Background Elements - Hidden on small mobile */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-red-100 rounded-full opacity-20 -translate-x-32 -translate-y-32 hidden sm:block"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-100 rounded-full opacity-30 translate-x-40 translate-y-40 hidden sm:block"></div>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-sm mb-3 sm:mb-4"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700">{t.sectionTitle}</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            {t.mainHeading}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            {t.subtitle}
          </p>
        </motion.div>
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-16"
>
  {keyStatistics.map((stat, index) => (
    <motion.div
      key={stat.label}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -3, scale: 1.03 }}
      className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 shadow-lg border border-gray-200 group hover:shadow-xl transition-all duration-300 text-center" // Added text-center here
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
        <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
      </div>
      <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-1 leading-none text-center"> {/* Added text-center here */}
        {stat.metric}
      </div>
      <div className="text-xs sm:text-sm text-gray-600 leading-tight line-clamp-2 text-center"> {/* Added text-center here */}
        {stat.label}
      </div>
    </motion.div>
  ))}
</motion.div>

        {/* Key Statistics - FIXED VERSION */}
  
        {/* Key Statistics */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-16"
        >
          {keyStatistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3, scale: 1.03 }}
              className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 shadow-lg border border-gray-200 group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-1 leading-none">{stat.metric}</div>
              <div className="text-xs sm:text-sm text-gray-600 leading-tight line-clamp-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Historical Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20"
        >
          <div className="text-center mb-6 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              {t.historicalTitle}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2 sm:px-0">
              {t.historicalSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, rotateX: 3 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 group relative"
              >
                {/* Year Badge */}
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg whitespace-nowrap">
                    {milestone.year}
                  </div>
                </div>

                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 mt-1 sm:mt-2 group-hover:scale-105 sm:group-hover:scale-110 transition-transform">
                  <milestone.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-blue-600" />
                </div>
                
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 text-center leading-tight">{milestone.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">{milestone.description}</p>
                
                <div className="bg-gray-50 rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 text-center">
                  <span className="text-xs font-semibold text-blue-600 leading-tight">{milestone.significance}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Cooperation Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="text-center mb-6 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              {t.cooperationTitle}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2 sm:px-0">
              {t.cooperationSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {cooperationAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 transition-transform flex-shrink-0">
                    <area.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">{area.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">{area.growth}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed line-clamp-2 sm:line-clamp-3">{area.description}</p>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl sm:text-2xl font-bold text-blue-600">{area.value}</span>
                    <div className="bg-green-100 text-green-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold whitespace-nowrap">
                      {area.growth}
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <h5 className="font-semibold text-gray-900 text-xs sm:text-sm">{t.keyProjects}</h5>
                    <ul className="space-y-0.5 sm:space-y-1">
                      {area.projects.map((project, projectIndex) => (
                        <li key={projectIndex} className="flex items-center gap-1.5 sm:gap-2 text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span className="leading-tight">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Initiatives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-2xl"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">{t.initiativesTitle}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{t.initiativesSubtitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {currentInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 backdrop-blur-sm border border-white/20"
              >
                <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 leading-tight">{initiative.title}</h4>
                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2 sm:line-clamp-3">{initiative.description}</p>
                
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm mb-1">
                      <span>{t.progress}</span>
                      <span className="font-semibold">{initiative.progress}</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-1.5 sm:h-2">
                      <div 
                        className="bg-green-500 h-1.5 sm:h-2 rounded-full transition-all duration-1000"
                        style={{ width: initiative.progress }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-green-400">
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="leading-tight">{initiative.impact}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/20 text-center"
          >
            <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
              {t.ctaText}
            </p>
            <button className="bg-white text-gray-900 px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base w-full sm:w-auto">
              {t.ctaButton}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ChinaUgandaRelations