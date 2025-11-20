// 'use client'

// import { motion } from 'framer-motion'
// import { Calendar, Clock, MapPin, ArrowRight, ExternalLink, Megaphone, Users, Award, FileText } from 'lucide-react'
// import { useState } from 'react'
// import { useLanguage } from '../Header/Header'

// interface NewsItem {
//   id: number
//   title: string
//   description: string
//   date: string
//   time?: string
//   location?: string
//   type: 'press' | 'event' | 'announcement' | 'achievement'
//   category: string
//   image?: string
//   featured: boolean
// }

// interface Category {
//   id: string
//   label: string
//   count: number
// }

// interface TypeConfig {
//   color: string
//   icon: React.ComponentType<{ className?: string }>
//   label: string
// }

// const NewsEvents = () => {
//   const [activeFilter, setActiveFilter] = useState<string>('all')
//   const { currentLanguage } = useLanguage()

//   // Language content
//   const content = {
//     en: {
//       sectionTitle: "News & Events",
//       mainHeading: "Latest Updates",
//       subtitle: "Stay informed with the latest announcements, press releases, and events from the Embassy of China in Uganda",
//       featuredStories: "Featured Stories",
//       latestUpdates: "Latest Updates",
//       readFullStory: "Read Full Story",
//       readMore: "Read More",
//       featured: "Featured",
//       stayConnected: "Stay Connected",
//       newsletterText: "Subscribe to our newsletter for the latest diplomatic updates, events, and announcements",
//       subscribe: "Subscribe",
//       unsubscribe: "You can unsubscribe at any time. We respect your privacy.",
//       categories: [
//         { id: 'all', label: 'All News' },
//         { id: 'press', label: 'Press Releases' },
//         { id: 'event', label: 'Events' },
//         { id: 'announcement', label: 'Announcements' },
//         { id: 'achievement', label: 'Achievements' }
//       ],
//       typeLabels: {
//         press: 'Press Release',
//         event: 'Event',
//         announcement: 'Announcement',
//         achievement: 'Achievement'
//       },
//       newsItems: [
//         {
//           id: 1,
//           title: "Chinese Ambassador Meets Ugandan Foreign Minister",
//           description: "Productive discussions on strengthening bilateral ties and economic cooperation between China and Uganda. Both sides reaffirmed commitment to mutual development.",
//           date: "2024-01-15",
//           type: 'press' as const,
//           category: 'Diplomacy',
//           featured: true
//         },
//         {
//           id: 2,
//           title: "75th Chinese National Day Celebration",
//           description: "Join us in celebrating the 75th anniversary of the founding of the People's Republic of China. Cultural performances and diplomatic reception.",
//           date: "2024-09-28",
//           time: "18:00 - 21:00",
//           location: "Embassy Grand Hall",
//           type: 'event' as const,
//           category: 'Culture',
//           featured: true
//         },
//         {
//           id: 3,
//           title: "Updated Visa Application Requirements",
//           description: "Important updates to visa application procedures and required documentation effective immediately. Streamlined process for business and tourist visas.",
//           date: "2024-01-10",
//           type: 'announcement' as const,
//           category: 'Consular',
//           featured: false
//         },
//         {
//           id: 4,
//           title: "China-Uganda Business Forum 2024",
//           description: "Opportunities for Ugandan businesses to connect with Chinese investors and explore partnerships in technology, agriculture, and infrastructure.",
//           date: "2024-02-20",
//           time: "09:00 - 17:00",
//           location: "Kampala Serena Hotel",
//           type: 'event' as const,
//           category: 'Business',
//           featured: false
//         },
//         {
//           id: 5,
//           title: "Education Cooperation Agreement Signed",
//           description: "New partnership between Chinese and Ugandan universities for student exchange programs and research collaboration.",
//           date: "2024-01-08",
//           type: 'achievement' as const,
//           category: 'Education',
//           featured: false
//         },
//         {
//           id: 6,
//           title: "Infrastructure Project Completion Ceremony",
//           description: "Official inauguration of the new industrial park developed through China-Uganda cooperation, creating 2,000+ local jobs.",
//           date: "2024-01-05",
//           type: 'press' as const,
//           category: 'Development',
//           featured: false
//         }
//       ]
//     },
//     zh: {
//       sectionTitle: "新闻与活动",
//       mainHeading: "最新动态",
//       subtitle: "了解中国驻乌干达大使馆的最新公告、新闻稿和活动信息",
//       featuredStories: "精选故事",
//       latestUpdates: "最新更新",
//       readFullStory: "阅读全文",
//       readMore: "了解更多",
//       featured: "精选",
//       stayConnected: "保持联系",
//       newsletterText: "订阅我们的新闻通讯，获取最新的外交动态、活动和公告",
//       subscribe: "订阅",
//       unsubscribe: "您可以随时取消订阅。我们尊重您的隐私。",
//       categories: [
//         { id: 'all', label: '全部新闻' },
//         { id: 'press', label: '新闻稿' },
//         { id: 'event', label: '活动' },
//         { id: 'announcement', label: '公告' },
//         { id: 'achievement', label: '成就' }
//       ],
//       typeLabels: {
//         press: '新闻稿',
//         event: '活动',
//         announcement: '公告',
//         achievement: '成就'
//       },
//       newsItems: [
//         {
//           id: 1,
//           title: "中国大使会见乌干达外交部长",
//           description: "就加强中乌双边关系和经济合作进行富有成效的讨论。双方重申对共同发展的承诺。",
//           date: "2024-01-15",
//           type: 'press' as const,
//           category: '外交',
//           featured: true
//         },
//         {
//           id: 2,
//           title: "庆祝中华人民共和国成立75周年",
//           description: "加入我们庆祝中华人民共和国成立75周年。文化表演和外交招待会。",
//           date: "2024-09-28",
//           time: "18:00 - 21:00",
//           location: "大使馆大厅",
//           type: 'event' as const,
//           category: '文化',
//           featured: true
//         },
//         {
//           id: 3,
//           title: "更新签证申请要求",
//           description: "立即生效的签证申请程序和所需文件的重要更新。商务和旅游签证流程简化。",
//           date: "2024-01-10",
//           type: 'announcement' as const,
//           category: '领事',
//           featured: false
//         },
//         {
//           id: 4,
//           title: "2024中乌商业论坛",
//           description: "乌干达企业与投资者建立联系的机会，探索技术、农业和基础设施领域的合作伙伴关系。",
//           date: "2024-02-20",
//           time: "09:00 - 17:00",
//           location: "坎帕拉塞雷纳酒店",
//           type: 'event' as const,
//           category: '商业',
//           featured: false
//         },
//         {
//           id: 5,
//           title: "签署教育合作协议",
//           description: "中乌大学间的新伙伴关系，开展学生交流项目和科研合作。",
//           date: "2024-01-08",
//           type: 'achievement' as const,
//           category: '教育',
//           featured: false
//         },
//         {
//           id: 6,
//           title: "基础设施项目竣工仪式",
//           description: "通过中乌合作开发的新工业园正式落成，创造2000多个本地就业岗位。",
//           date: "2024-01-05",
//           type: 'press' as const,
//           category: '发展',
//           featured: false
//         }
//       ]
//     }
//   }

//   const t = content[currentLanguage]

//   const newsItems: NewsItem[] = t.newsItems

//   const categories: Category[] = t.categories.map(category => ({
//     ...category,
//     count: newsItems.filter(item => category.id === 'all' || item.type === category.id).length
//   }))

//   const filteredItems = activeFilter === 'all' 
//     ? newsItems 
//     : newsItems.filter(item => item.type === activeFilter)

//   const featuredItems = newsItems.filter(item => item.featured)
//   const regularItems = filteredItems.filter(item => !item.featured)

//   const getTypeConfig = (type: string): TypeConfig => {
//     switch (type) {
//       case 'press':
//         return { color: 'bg-blue-100 text-blue-800', icon: Megaphone, label: t.typeLabels.press }
//       case 'event':
//         return { color: 'bg-green-100 text-green-800', icon: Calendar, label: t.typeLabels.event }
//       case 'announcement':
//         return { color: 'bg-red-100 text-red-800', icon: FileText, label: t.typeLabels.announcement }
//       case 'achievement':
//         return { color: 'bg-purple-100 text-purple-800', icon: Award, label: t.typeLabels.achievement }
//       default:
//         return { color: 'bg-gray-100 text-gray-800', icon: FileText, label: 'News' }
//     }
//   }

//   return (
//     <section id="news" className="py-12 sm:py-20 bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMWY1ZjkiIGZpbGwtb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
//       <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-8 sm:mb-16"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             transition={{ delay: 0.2, type: "spring" }}
//             className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-sm mb-3 sm:mb-4"
//           >
//             <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse" />
//             <span className="text-xs sm:text-sm font-semibold text-gray-700">{t.sectionTitle}</span>
//           </motion.div>

//           <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
//             {t.mainHeading}
//           </h2>
//           <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
//             {t.subtitle}
//           </p>
//         </motion.div>

//         {/* Category Filters */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-6 sm:mb-12 px-1"
//         >
//           {categories.map((category) => (
//             <motion.button
//               key={category.id}
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               onClick={() => setActiveFilter(category.id)}
//               className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
//                 activeFilter === category.id
//                   ? 'bg-red-600 text-white shadow-lg'
//                   : 'bg-white text-gray-700 hover:bg-gray-100 shadow border border-gray-200'
//               }`}
//             >
//               {category.label}
//               <span className={`ml-1.5 sm:ml-2 px-1 sm:px-1.5 py-0.5 rounded-full text-xs ${
//                 activeFilter === category.id ? 'bg-white/20' : 'bg-gray-100'
//               }`}>
//                 {category.count}
//               </span>
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Featured News */}
//         {featuredItems.length > 0 && (
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="mb-8 sm:mb-12"
//           >
//             <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
//               <Award className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" />
//               {t.featuredStories}
//             </h3>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
//               {featuredItems.map((item, index) => {
//                 const typeConfig = getTypeConfig(item.type)
//                 return (
//                   <motion.article
//                     key={item.id}
//                     initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6, delay: index * 0.2 }}
//                     viewport={{ once: true }}
//                     whileHover={{ y: -3, scale: 1.01 }}
//                     className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg sm:shadow-xl border border-gray-200 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 group cursor-pointer"
//                   >
//                     {/* Header */}
//                     <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
//                       <div className="flex items-center gap-2 flex-wrap">
//                         <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold ${typeConfig.color} flex items-center gap-1 whitespace-nowrap`}>
//                           <typeConfig.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
//                           {typeConfig.label}
//                         </span>
//                         <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded whitespace-nowrap">
//                           {item.category}
//                         </span>
//                       </div>
//                       <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
//                         <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
//                         <time dateTime={item.date} className="whitespace-nowrap">
//                           {new Date(item.date).toLocaleDateString(currentLanguage === 'en' ? 'en-US' : 'zh-CN', {
//                             month: 'short',
//                             day: 'numeric',
//                             year: 'numeric'
//                           })}
//                         </time>
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-red-600 transition-colors line-clamp-2 leading-tight">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed line-clamp-2 sm:line-clamp-3">
//                       {item.description}
//                     </p>

//                     {/* Event Details */}
//                     {(item.time || item.location) && (
//                       <div className="flex flex-col xs:flex-row items-start xs:items-center gap-1 xs:gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
//                         {item.time && (
//                           <div className="flex items-center gap-1">
//                             <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
//                             <span className="whitespace-nowrap">{item.time}</span>
//                           </div>
//                         )}
//                         {item.location && (
//                           <div className="flex items-center gap-1">
//                             <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
//                             <span className="line-clamp-1">{item.location}</span>
//                           </div>
//                         )}
//                       </div>
//                     )}

//                     {/* Footer */}
//                     <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-200">
//                       <motion.button
//                         whileHover={{ x: 2 }}
//                         className="flex items-center gap-1.5 sm:gap-2 text-red-600 font-semibold text-xs sm:text-sm hover:text-red-700 transition-colors group/read"
//                       >
//                         {t.readFullStory}
//                         <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/read:translate-x-0.5 sm:group-hover/read:translate-x-1 transition-transform" />
//                       </motion.button>
//                       <div className="text-xs text-gray-400 whitespace-nowrap">
//                         {t.featured}
//                       </div>
//                     </div>
//                   </motion.article>
//                 )
//               })}
//             </div>
//           </motion.div>
//         )}

//         {/* Regular News Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
//             <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" />
//             {t.latestUpdates}
//           </h3>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             {regularItems.map((item, index) => {
//               const typeConfig = getTypeConfig(item.type)
//               return (
//                 <motion.article
//                   key={item.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -3 }}
//                   className="bg-white rounded-lg sm:rounded-xl p-4 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer"
//                 >
//                   {/* Header */}
//                   <div className="flex items-center justify-between mb-2 sm:mb-3">
//                     <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs font-medium ${typeConfig.color} whitespace-nowrap`}>
//                       {typeConfig.label}
//                     </span>
//                     <time className="text-xs text-gray-500 whitespace-nowrap" dateTime={item.date}>
//                       {new Date(item.date).toLocaleDateString(currentLanguage === 'en' ? 'en-US' : 'zh-CN', {
//                         month: 'short',
//                         day: 'numeric'
//                       })}
//                     </time>
//                   </div>

//                   {/* Content */}
//                   <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5 sm:mb-2 line-clamp-2 leading-tight group-hover:text-red-600 transition-colors">
//                     {item.title}
//                   </h4>
//                   <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2 sm:line-clamp-3">
//                     {item.description}
//                   </p>

//                   {/* Read More */}
//                   <motion.button
//                     whileHover={{ x: 1 }}
//                     className="flex items-center gap-1 text-red-600 font-medium text-xs sm:text-sm hover:text-red-700 transition-colors"
//                   >
//                     {t.readMore}
//                     <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
//                   </motion.button>
//                 </motion.article>
//               )
//             })}
//           </div>
//         </motion.div>

//         {/* Newsletter Signup */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-8 sm:mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white text-center"
//         >
//           <div className="max-w-2xl mx-auto">
//             <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-3 sm:mb-4 opacity-90" />
//             <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">{t.stayConnected}</h3>
//             <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 opacity-90">
//               {t.newsletterText}
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
//               <input
//                 type="email"
//                 placeholder={currentLanguage === 'en' ? "Enter your email address" : "输入您的电子邮件地址"}
//                 className="flex-1 px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 text-sm sm:text-base"
//               />
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="bg-white text-blue-600 px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap text-sm sm:text-base"
//               >
//                 {t.subscribe}
//                 <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
//               </motion.button>
//             </div>
//             <p className="text-xs sm:text-sm opacity-75 mt-3 sm:mt-4">
//               {t.unsubscribe}
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default NewsEvents

'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, ArrowRight, ExternalLink, Megaphone, Users, Award, FileText } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../Header/Header'

interface NewsItem {
  id: number
  title: string
  description: string
  date: string
  time?: string
  location?: string
  type: 'press' | 'event' | 'announcement' | 'achievement'
  category: string
  image?: string
  featured: boolean
}

interface Category {
  id: string
  label: string
  count: number
}

interface TypeConfig {
  color: string
  icon: React.ComponentType<{ className?: string }>
  label: string
}

// Define the return type for useLanguage hook
interface LanguageContextType {
  currentLanguage: 'en' | 'zh'
  toggleLanguage: () => void
}

interface LanguageContent {
  sectionTitle: string
  mainHeading: string
  subtitle: string
  featuredStories: string
  latestUpdates: string
  readFullStory: string
  readMore: string
  featured: string
  stayConnected: string
  newsletterText: string
  subscribe: string
  unsubscribe: string
  categories: Array<{
    id: string
    label: string
  }>
  typeLabels: {
    press: string
    event: string
    announcement: string
    achievement: string
  }
  newsItems: NewsItem[]
}

interface ContentMap {
  en: LanguageContent
  zh: LanguageContent
}

const NewsEvents = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const { currentLanguage } = useLanguage() as LanguageContextType

  // Language content
  const content: ContentMap = {
    en: {
      sectionTitle: "News & Events",
      mainHeading: "Latest Updates",
      subtitle: "Stay informed with the latest announcements, press releases, and events from the Embassy of China in Uganda",
      featuredStories: "Featured Stories",
      latestUpdates: "Latest Updates",
      readFullStory: "Read Full Story",
      readMore: "Read More",
      featured: "Featured",
      stayConnected: "Stay Connected",
      newsletterText: "Subscribe to our newsletter for the latest diplomatic updates, events, and announcements",
      subscribe: "Subscribe",
      unsubscribe: "You can unsubscribe at any time. We respect your privacy.",
      categories: [
        { id: 'all', label: 'All News' },
        { id: 'press', label: 'Press Releases' },
        { id: 'event', label: 'Events' },
        { id: 'announcement', label: 'Announcements' },
        { id: 'achievement', label: 'Achievements' }
      ],
      typeLabels: {
        press: 'Press Release',
        event: 'Event',
        announcement: 'Announcement',
        achievement: 'Achievement'
      },
      newsItems: [
        {
          id: 1,
          title: "Chinese Ambassador Meets Ugandan Foreign Minister",
          description: "Productive discussions on strengthening bilateral ties and economic cooperation between China and Uganda. Both sides reaffirmed commitment to mutual development.",
          date: "2024-01-15",
          type: 'press' as const,
          category: 'Diplomacy',
          featured: true
        },
        {
          id: 2,
          title: "75th Chinese National Day Celebration",
          description: "Join us in celebrating the 75th anniversary of the founding of the People's Republic of China. Cultural performances and diplomatic reception.",
          date: "2024-09-28",
          time: "18:00 - 21:00",
          location: "Embassy Grand Hall",
          type: 'event' as const,
          category: 'Culture',
          featured: true
        },
        {
          id: 3,
          title: "Updated Visa Application Requirements",
          description: "Important updates to visa application procedures and required documentation effective immediately. Streamlined process for business and tourist visas.",
          date: "2024-01-10",
          type: 'announcement' as const,
          category: 'Consular',
          featured: false
        },
        {
          id: 4,
          title: "China-Uganda Business Forum 2024",
          description: "Opportunities for Ugandan businesses to connect with Chinese investors and explore partnerships in technology, agriculture, and infrastructure.",
          date: "2024-02-20",
          time: "09:00 - 17:00",
          location: "Kampala Serena Hotel",
          type: 'event' as const,
          category: 'Business',
          featured: false
        },
        {
          id: 5,
          title: "Education Cooperation Agreement Signed",
          description: "New partnership between Chinese and Ugandan universities for student exchange programs and research collaboration.",
          date: "2024-01-08",
          type: 'achievement' as const,
          category: 'Education',
          featured: false
        },
        {
          id: 6,
          title: "Infrastructure Project Completion Ceremony",
          description: "Official inauguration of the new industrial park developed through China-Uganda cooperation, creating 2,000+ local jobs.",
          date: "2024-01-05",
          type: 'press' as const,
          category: 'Development',
          featured: false
        }
      ]
    },
    zh: {
      sectionTitle: "新闻与活动",
      mainHeading: "最新动态",
      subtitle: "了解中国驻乌干达大使馆的最新公告、新闻稿和活动信息",
      featuredStories: "精选故事",
      latestUpdates: "最新更新",
      readFullStory: "阅读全文",
      readMore: "了解更多",
      featured: "精选",
      stayConnected: "保持联系",
      newsletterText: "订阅我们的新闻通讯，获取最新的外交动态、活动和公告",
      subscribe: "订阅",
      unsubscribe: "您可以随时取消订阅。我们尊重您的隐私。",
      categories: [
        { id: 'all', label: '全部新闻' },
        { id: 'press', label: '新闻稿' },
        { id: 'event', label: '活动' },
        { id: 'announcement', label: '公告' },
        { id: 'achievement', label: '成就' }
      ],
      typeLabels: {
        press: '新闻稿',
        event: '活动',
        announcement: '公告',
        achievement: '成就'
      },
      newsItems: [
        {
          id: 1,
          title: "中国大使会见乌干达外交部长",
          description: "就加强中乌双边关系和经济合作进行富有成效的讨论。双方重申对共同发展的承诺。",
          date: "2024-01-15",
          type: 'press' as const,
          category: '外交',
          featured: true
        },
        {
          id: 2,
          title: "庆祝中华人民共和国成立75周年",
          description: "加入我们庆祝中华人民共和国成立75周年。文化表演和外交招待会。",
          date: "2024-09-28",
          time: "18:00 - 21:00",
          location: "大使馆大厅",
          type: 'event' as const,
          category: '文化',
          featured: true
        },
        {
          id: 3,
          title: "更新签证申请要求",
          description: "立即生效的签证申请程序和所需文件的重要更新。商务和旅游签证流程简化。",
          date: "2024-01-10",
          type: 'announcement' as const,
          category: '领事',
          featured: false
        },
        {
          id: 4,
          title: "2024中乌商业论坛",
          description: "乌干达企业与投资者建立联系的机会，探索技术、农业和基础设施领域的合作伙伴关系。",
          date: "2024-02-20",
          time: "09:00 - 17:00",
          location: "坎帕拉塞雷纳酒店",
          type: 'event' as const,
          category: '商业',
          featured: false
        },
        {
          id: 5,
          title: "签署教育合作协议",
          description: "中乌大学间的新伙伴关系，开展学生交流项目和科研合作。",
          date: "2024-01-08",
          type: 'achievement' as const,
          category: '教育',
          featured: false
        },
        {
          id: 6,
          title: "基础设施项目竣工仪式",
          description: "通过中乌合作开发的新工业园正式落成，创造2000多个本地就业岗位。",
          date: "2024-01-05",
          type: 'press' as const,
          category: '发展',
          featured: false
        }
      ]
    }
  }

  const t = content[currentLanguage]

  const newsItems: NewsItem[] = t.newsItems

  const categories: Category[] = t.categories.map(category => ({
    ...category,
    count: newsItems.filter(item => category.id === 'all' || item.type === category.id).length
  }))

  const filteredItems = activeFilter === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.type === activeFilter)

  const featuredItems = newsItems.filter(item => item.featured)
  const regularItems = filteredItems.filter(item => !item.featured)

  const getTypeConfig = (type: string): TypeConfig => {
    switch (type) {
      case 'press':
        return { color: 'bg-blue-100 text-blue-800', icon: Megaphone, label: t.typeLabels.press }
      case 'event':
        return { color: 'bg-green-100 text-green-800', icon: Calendar, label: t.typeLabels.event }
      case 'announcement':
        return { color: 'bg-red-100 text-red-800', icon: FileText, label: t.typeLabels.announcement }
      case 'achievement':
        return { color: 'bg-purple-100 text-purple-800', icon: Award, label: t.typeLabels.achievement }
      default:
        return { color: 'bg-gray-100 text-gray-800', icon: FileText, label: 'News' }
    }
  }

  return (
    <section id="news" className="py-12 sm:py-20 bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMWY1ZjkiIGZpbGwtb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
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

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-6 sm:mb-12 px-1"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveFilter(category.id)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeFilter === category.id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow border border-gray-200'
              }`}
            >
              {category.label}
              <span className={`ml-1.5 sm:ml-2 px-1 sm:px-1.5 py-0.5 rounded-full text-xs ${
                activeFilter === category.id ? 'bg-white/20' : 'bg-gray-100'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Featured News */}
        {featuredItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" />
              {t.featuredStories}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {featuredItems.map((item, index) => {
                const typeConfig = getTypeConfig(item.type)
                return (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg sm:shadow-xl border border-gray-200 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold ${typeConfig.color} flex items-center gap-1 whitespace-nowrap`}>
                          <typeConfig.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                          {typeConfig.label}
                        </span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded whitespace-nowrap">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <time dateTime={item.date} className="whitespace-nowrap">
                          {new Date(item.date).toLocaleDateString(currentLanguage === 'en' ? 'en-US' : 'zh-CN', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </time>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-red-600 transition-colors line-clamp-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {item.description}
                    </p>

                    {/* Event Details */}
                    {(item.time || item.location) && (
                      <div className="flex flex-col xs:flex-row items-start xs:items-center gap-1 xs:gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                        {item.time && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span className="whitespace-nowrap">{item.time}</span>
                          </div>
                        )}
                        {item.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span className="line-clamp-1">{item.location}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-200">
                      <motion.button
                        whileHover={{ x: 2 }}
                        className="flex items-center gap-1.5 sm:gap-2 text-red-600 font-semibold text-xs sm:text-sm hover:text-red-700 transition-colors group/read"
                      >
                        {t.readFullStory}
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/read:translate-x-0.5 sm:group-hover/read:translate-x-1 transition-transform" />
                      </motion.button>
                      <div className="text-xs text-gray-400 whitespace-nowrap">
                        {t.featured}
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* Regular News Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" />
            {t.latestUpdates}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {regularItems.map((item, index) => {
              const typeConfig = getTypeConfig(item.type)
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-lg sm:rounded-xl p-4 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs font-medium ${typeConfig.color} whitespace-nowrap`}>
                      {typeConfig.label}
                    </span>
                    <time className="text-xs text-gray-500 whitespace-nowrap" dateTime={item.date}>
                      {new Date(item.date).toLocaleDateString(currentLanguage === 'en' ? 'en-US' : 'zh-CN', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                  </div>

                  {/* Content */}
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5 sm:mb-2 line-clamp-2 leading-tight group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {item.description}
                  </p>

                  {/* Read More */}
                  <motion.button
                    whileHover={{ x: 1 }}
                    className="flex items-center gap-1 text-red-600 font-medium text-xs sm:text-sm hover:text-red-700 transition-colors"
                  >
                    {t.readMore}
                    <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </motion.button>
                </motion.article>
              )
            })}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white text-center"
        >
          <div className="max-w-2xl mx-auto">
            <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-3 sm:mb-4 opacity-90" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">{t.stayConnected}</h3>
            <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 opacity-90">
              {t.newsletterText}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <input
                type="email"
                placeholder={currentLanguage === 'en' ? "Enter your email address" : "输入您的电子邮件地址"}
                className="flex-1 px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 text-sm sm:text-base"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-blue-600 px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap text-sm sm:text-base"
              >
                {t.subscribe}
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.button>
            </div>
            <p className="text-xs sm:text-sm opacity-75 mt-3 sm:mt-4">
              {t.unsubscribe}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsEvents