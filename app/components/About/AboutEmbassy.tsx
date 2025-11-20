
// 'use client'

// import { motion } from 'framer-motion'
// import { Shield, Users, Target, Award, Mail, Phone, MapPin, Clock, Globe, Building } from 'lucide-react'
// import { useLanguage } from '../Header/Header'

// interface TeamMember {
//   name: string
//   position: string
//   department: string
//   responsibilities: string[]
// }

// interface MissionValue {
//   icon: React.ComponentType<{ className?: string }>
//   title: string
//   description: string
//   metrics: string
// }

// interface EmbassyFact {
//   icon: React.ComponentType<{ className?: string }>
//   label: string
//   value: string
//   description: string
// }

// const AboutEmbassy = () => {
//   // Dynamic years calculation
//   const relationsStartYear = 1962
//   const currentYear = new Date().getFullYear()
//   const yearsOfRelations = currentYear - relationsStartYear

//   const { currentLanguage } = useLanguage()

//   // Language content
//   const content = {
//     en: {
//       sectionTitle: "Embassy Leadership",
//       mainHeading: "About Our Embassy",
//       subtitle: `The official diplomatic mission of the People's Republic of China in Uganda, dedicated to fostering mutual understanding and cooperation since ${relationsStartYear}.`,
//       leadershipTitle: "Embassy Leadership",
//       leadershipSubtitle: "Meet our dedicated team of diplomatic professionals committed to strengthening China-Uganda relations",
//       embassyInfo: "Embassy Information",
//       officeHours: "Office Hours",
//       regularHours: "Regular Office Hours",
//       emergencyServices: "Emergency Services",
//       fax: "Fax",
//       address: "Address",
//       generalLine: "General Line",
//       consularEmergency: "Consular Emergency",
//       email: "Email",
//       embassyFacts: [
//         { label: "Established", value: `${relationsStartYear}`, description: "Year of diplomatic relations" },
//         { label: "Location", value: "Kololo", description: "Diplomatic quarter, Kampala" },
//         { label: "Staff", value: "50+", description: "Diplomatic and local staff" },
//         { label: "Services", value: "24/7", description: "Consular emergency coverage" }
//       ],
//       missionValues: [
//         {
//           title: "Diplomatic Excellence",
//           description: "Maintaining and strengthening bilateral relations between China and Uganda through strategic diplomacy",
//           metrics: `${yearsOfRelations}+ Years of Relations`
//         },
//         {
//           title: "Citizen Services", 
//           description: "Providing comprehensive consular protection and services to Chinese citizens in Uganda",
//           metrics: "10,000+ Citizens Served"
//         },
//         {
//           title: "Economic Cooperation",
//           description: "Facilitating trade, investment, and economic partnerships between Chinese and Ugandan businesses",
//           metrics: "$2B+ Trade Volume"
//         },
//         {
//           title: "Cultural Exchange",
//           description: "Promoting mutual understanding through cultural, educational, and people-to-people exchanges",
//           metrics: "500+ Annual Exchanges"
//         }
//       ],
//       leadershipTeam: [
//         { 
//           name: "H.E. Zhang Lizhong",
//           position: "Ambassador Extraordinary and Plenipotentiary",
//           department: "Office of the Ambassador",
//           responsibilities: ["Chief Diplomatic Representative", "Bilateral Relations Oversight", "Strategic Partnership Development"]
//         },
//         { 
//           name: "Fan Xuecheng",
//           position: "Minister-Counsellor",
//           department: "Political Section", 
//           responsibilities: ["Political Diplomacy", "Public Affairs", "Intergovernmental Relations"]
//         },
//         { 
//           name: "Wang Hongbo", 
//           position: "Consul General",
//           department: "Consular Section",
//           responsibilities: ["Citizen Services", "Visa Processing", "Document Authentication"]
//         },
//         { 
//           name: "Li Xia",
//           position: "Commercial Counsellor", 
//           department: "Economic & Commercial Office",
//           responsibilities: ["Trade Relations", "Investment Promotion", "Economic Cooperation"]
//         }
//       ],
//       contactInfo: {
//         address: "Plot 37, Malcolm X Avenue, Kololo, Kampala, Republic of Uganda",
//         generalPhone: "+256 393 000174",
//         consularPhone: "+256 393 000172", 
//         email: "chinaemb_ug@mfa.gov.cn",
//         consularEmail: "consulate_uga@126.com",
//         fax: "+256 414 254456",
//         officeHours: "Monday - Friday: 9:00 AM - 5:00 PM",
//         emergencyHours: "24/7 Consular Emergency Services"
//       }
//     },
//     zh: {
//       sectionTitle: "使馆领导",
//       mainHeading: "关于我们的大使馆",
//       subtitle: `中华人民共和国在乌干达的官方外交使团，自${relationsStartYear}年以来致力于促进相互理解与合作。`,
//       leadershipTitle: "使馆领导",
//       leadershipSubtitle: "认识我们致力于加强中乌关系的专业外交团队",
//       embassyInfo: "使馆信息",
//       officeHours: "办公时间",
//       regularHours: "常规办公时间",
//       emergencyServices: "紧急服务",
//       fax: "传真",
//       address: "地址",
//       generalLine: "总机",
//       consularEmergency: "领事紧急情况",
//       email: "邮箱",
//       embassyFacts: [
//         { label: "建立", value: `${relationsStartYear}`, description: "外交关系年份" },
//         { label: "位置", value: "科洛洛", description: "外交区，坎帕拉" },
//         { label: "员工", value: "50+", description: "外交和本地员工" },
//         { label: "服务", value: "24/7", description: "领事紧急覆盖" }
//       ],
//       missionValues: [
//         {
//           title: "外交卓越",
//           description: "通过战略外交维持和加强中乌双边关系",
//           metrics: `${yearsOfRelations}+ 年关系`
//         },
//         {
//           title: "公民服务", 
//           description: "为在乌干达的中国公民提供全面的领事保护和服务",
//           metrics: "10,000+ 服务公民"
//         },
//         {
//           title: "经济合作",
//           description: "促进中乌企业间的贸易、投资和经济伙伴关系",
//           metrics: "$20亿+ 贸易额"
//         },
//         {
//           title: "文化交流",
//           description: "通过文化、教育和人文交流促进相互理解",
//           metrics: "500+ 年度交流"
//         }
//       ],
//       leadershipTeam: [
//         { 
//           name: "张利忠大使阁下",
//           position: "特命全权大使",
//           department: "大使办公室",
//           responsibilities: ["首席外交代表", "双边关系监督", "战略伙伴关系发展"]
//         },
//         { 
//           name: "范学成",
//           position: "公使衔参赞",
//           department: "政治处", 
//           responsibilities: ["政治外交", "公共事务", "政府间关系"]
//         },
//         { 
//           name: "王宏博", 
//           position: "总领事",
//           department: "领事处",
//           responsibilities: ["公民服务", "签证处理", "文件认证"]
//         },
//         { 
//           name: "李霞",
//           position: "商务参赞", 
//           department: "经济商务处",
//           responsibilities: ["贸易关系", "投资促进", "经济合作"]
//         }
//       ],
//       contactInfo: {
//         address: "乌干达坎帕拉市科洛洛区马尔科姆X大道37号",
//         generalPhone: "+256 393 000174",
//         consularPhone: "+256 393 000172", 
//         email: "chinaemb_ug@mfa.gov.cn",
//         consularEmail: "consulate_uga@126.com",
//         fax: "+256 414 254456",
//         officeHours: "周一至周五: 上午9:00 - 下午5:00",
//         emergencyHours: "24/7 领事紧急服务"
//       }
//     }
//   }

//   const t = content[currentLanguage]

//   const embassyFacts: EmbassyFact[] = t.embassyFacts.map(fact => ({
//     ...fact,
//     icon: fact.label.includes("Established") || fact.label.includes("建立") ? Building :
//           fact.label.includes("Location") || fact.label.includes("位置") ? MapPin :
//           fact.label.includes("Staff") || fact.label.includes("员工") ? Users : Globe
//   }))

//   const missionValues: MissionValue[] = t.missionValues.map(value => ({
//     ...value,
//     icon: value.title.includes("Diplomatic") || value.title.includes("外交") ? Shield :
//           value.title.includes("Citizen") || value.title.includes("公民") ? Users :
//           value.title.includes("Economic") || value.title.includes("经济") ? Target : Award
//   }))

//   const leadershipTeam: TeamMember[] = t.leadershipTeam

//   return (
//     <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute top-0 right-0 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-red-50 rounded-full -translate-y-24 sm:-translate-y-32 lg:-translate-y-36 translate-x-24 sm:translate-x-32 lg:translate-x-36 opacity-60"></div>
//       <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-blue-50 rounded-full translate-y-32 sm:translate-y-40 lg:translate-y-48 -translate-x-32 sm:-translate-x-40 lg:-translate-x-48 opacity-40"></div>
      
//       <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-8 sm:mb-12 lg:mb-16"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             transition={{ delay: 0.2, type: "spring" }}
//             className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1 sm:px-4 sm:py-2 shadow-sm mb-3 sm:mb-4"
//           >
//             <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse" />
//             <span className="text-xs sm:text-sm font-semibold text-gray-700">{t.sectionTitle}</span>
//           </motion.div>

//           <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
//             {t.mainHeading}
//           </h2>
//           <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-2">
//             {t.subtitle}
//           </p>
//         </motion.div>

//         {/* Embassy Facts */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16"
//         >
//           {embassyFacts.map((fact, index) => (
//             <motion.div
//               key={fact.label}
//               initial={{ opacity: 0, scale: 0 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -3, scale: 1.03 }}
//               className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 text-center shadow-lg border border-gray-200 group hover:shadow-xl transition-all duration-300"
//             >
//               <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-105 transition-transform">
//                 <fact.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
//               </div>
//               <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-1">{fact.value}</div>
//               <div className="font-semibold text-gray-700 text-xs sm:text-sm lg:text-base mb-1">{fact.label}</div>
//               <div className="text-xs text-gray-500">{fact.description}</div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Mission & Values */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
//         >
//           {missionValues.map((value, index) => (
//             <motion.div
//               key={value.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -4, rotateX: 3 }}
//               className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 group"
//             >
//               <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
//                 <value.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
//               </div>
//               <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
//               <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{value.description}</p>
//               <div className="bg-gray-50 rounded-lg px-2 sm:px-3 py-1 sm:py-2">
//                 <span className="text-xs font-semibold text-blue-600">{value.metrics}</span>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Leadership Team */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="mb-12 sm:mb-16"
//         >
//           <div className="text-center mb-6 sm:mb-8 lg:mb-12">
//             <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
//               {t.leadershipTitle}
//             </h3>
//             <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
//               {t.leadershipSubtitle}
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
//             {leadershipTeam.map((member, index) => (
//               <motion.div
//                 key={member.name}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -3, scale: 1.01 }}
//                 className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
//               >
//                 <div className="flex items-start gap-3 sm:gap-4">
//                   <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
//                     <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 break-words">{member.name}</h4>
//                     <p className="text-red-600 font-semibold text-sm sm:text-base mb-1 sm:mb-2 break-words">{member.position}</p>
//                     <p className="text-gray-700 text-xs sm:text-sm mb-2 sm:mb-3 break-words">{member.department}</p>
                    
//                     <div className="space-y-1 sm:space-y-2">
//                       {member.responsibilities.map((responsibility, respIndex) => (
//                         <div key={respIndex} className="flex items-center gap-1 sm:gap-2 text-xs text-gray-600">
//                           <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
//                           <span className="break-words">{responsibility}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Contact Information */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-2xl"
//         >
//           <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
//             <div>
//               <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
//                 <Building className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-red-400" />
//                 {t.embassyInfo}
//               </h3>
              
//               <div className="space-y-3 sm:space-y-4">
//                 <div className="flex items-start gap-2 sm:gap-3">
//                   <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-0.5 flex-shrink-0" />
//                   <div className="flex-1">
//                     <p className="font-semibold text-sm sm:text-base">{t.address}</p>
//                     <p className="text-gray-300 text-xs sm:text-sm break-words">{t.contactInfo.address}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-2 sm:gap-3">
//                   <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-0.5 flex-shrink-0" />
//                   <div className="flex-1 space-y-1 sm:space-y-2">
//                     <div>
//                       <p className="font-semibold text-sm sm:text-base">{t.generalLine}</p>
//                       <a href={`tel:${t.contactInfo.generalPhone.replace(/\s/g, '')}`} className="text-gray-300 text-xs sm:text-sm hover:text-white transition-colors break-words">
//                         {t.contactInfo.generalPhone}
//                       </a>
//                     </div>
//                     <div>
//                       <p className="font-semibold text-sm sm:text-base">{t.consularEmergency}</p>
//                       <a href={`tel:${t.contactInfo.consularPhone.replace(/\s/g, '')}`} className="text-red-300 text-xs sm:text-sm hover:text-red-200 transition-colors font-medium break-words">
//                         {t.contactInfo.consularPhone}
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-2 sm:gap-3">
//                   <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-0.5 flex-shrink-0" />
//                   <div className="flex-1 space-y-1">
//                     <p className="font-semibold text-sm sm:text-base">{t.email}</p>
//                     <a href={`mailto:${t.contactInfo.email}`} className="text-gray-300 text-xs sm:text-sm hover:text-white transition-colors block break-words">
//                       {t.contactInfo.email}
//                     </a>
//                     <a href={`mailto:${t.contactInfo.consularEmail}`} className="text-red-300 text-xs sm:text-sm hover:text-red-200 transition-colors block break-words">
//                       {t.contactInfo.consularEmail}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 backdrop-blur-sm">
//               <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-1 sm:gap-2">
//                 <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
//                 {t.officeHours}
//               </h4>
//               <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
//                 <div>
//                   <p className="font-semibold text-white text-sm sm:text-base">{t.regularHours}</p>
//                   <p className="text-gray-300 break-words">{t.contactInfo.officeHours}</p>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-green-400 text-sm sm:text-base">{t.emergencyServices}</p>
//                   <p className="text-green-300 break-words">{t.contactInfo.emergencyHours}</p>
//                 </div>
//                 <div className="pt-2 sm:pt-3 border-t border-white/20">
//                   <p className="font-semibold text-sm sm:text-base">{t.fax}</p>
//                   <p className="text-gray-300 break-words">{t.contactInfo.fax}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default AboutEmbassy

'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Target, Award, Mail, Phone, MapPin, Clock, Globe, Building } from 'lucide-react'
import { useLanguage } from '../Header/Header'

interface TeamMember {
  name: string
  position: string
  department: string
  responsibilities: string[]
}

interface MissionValue {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  metrics: string
}

interface EmbassyFact {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  description: string
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
  leadershipTitle: string
  leadershipSubtitle: string
  embassyInfo: string
  officeHours: string
  regularHours: string
  emergencyServices: string
  fax: string
  address: string
  generalLine: string
  consularEmergency: string
  email: string
  embassyFacts: Array<{
    label: string
    value: string
    description: string
  }>
  missionValues: Array<{
    title: string
    description: string
    metrics: string
  }>
  leadershipTeam: TeamMember[]
  contactInfo: {
    address: string
    generalPhone: string
    consularPhone: string
    email: string
    consularEmail: string
    fax: string
    officeHours: string
    emergencyHours: string
  }
}

interface ContentMap {
  en: LanguageContent
  zh: LanguageContent
}

const AboutEmbassy = () => {
  // Dynamic years calculation
  const relationsStartYear = 1962
  const currentYear = new Date().getFullYear()
  const yearsOfRelations = currentYear - relationsStartYear

  const { currentLanguage } = useLanguage() as LanguageContextType

  // Language content
  const content: ContentMap = {
    en: {
      sectionTitle: "Embassy Leadership",
      mainHeading: "About Our Embassy",
      subtitle: `The official diplomatic mission of the People's Republic of China in Uganda, dedicated to fostering mutual understanding and cooperation since ${relationsStartYear}.`,
      leadershipTitle: "Embassy Leadership",
      leadershipSubtitle: "Meet our dedicated team of diplomatic professionals committed to strengthening China-Uganda relations",
      embassyInfo: "Embassy Information",
      officeHours: "Office Hours",
      regularHours: "Regular Office Hours",
      emergencyServices: "Emergency Services",
      fax: "Fax",
      address: "Address",
      generalLine: "General Line",
      consularEmergency: "Consular Emergency",
      email: "Email",
      embassyFacts: [
        { label: "Established", value: `${relationsStartYear}`, description: "Year of diplomatic relations" },
        { label: "Location", value: "Kololo", description: "Diplomatic quarter, Kampala" },
        { label: "Staff", value: "50+", description: "Diplomatic and local staff" },
        { label: "Services", value: "24/7", description: "Consular emergency coverage" }
      ],
      missionValues: [
        {
          title: "Diplomatic Excellence",
          description: "Maintaining and strengthening bilateral relations between China and Uganda through strategic diplomacy",
          metrics: `${yearsOfRelations}+ Years of Relations`
        },
        {
          title: "Citizen Services", 
          description: "Providing comprehensive consular protection and services to Chinese citizens in Uganda",
          metrics: "10,000+ Citizens Served"
        },
        {
          title: "Economic Cooperation",
          description: "Facilitating trade, investment, and economic partnerships between Chinese and Ugandan businesses",
          metrics: "$2B+ Trade Volume"
        },
        {
          title: "Cultural Exchange",
          description: "Promoting mutual understanding through cultural, educational, and people-to-people exchanges",
          metrics: "500+ Annual Exchanges"
        }
      ],
      leadershipTeam: [
        { 
          name: "H.E. Zhang Lizhong",
          position: "Ambassador Extraordinary and Plenipotentiary",
          department: "Office of the Ambassador",
          responsibilities: ["Chief Diplomatic Representative", "Bilateral Relations Oversight", "Strategic Partnership Development"]
        },
        { 
          name: "Fan Xuecheng",
          position: "Minister-Counsellor",
          department: "Political Section", 
          responsibilities: ["Political Diplomacy", "Public Affairs", "Intergovernmental Relations"]
        },
        { 
          name: "Wang Hongbo", 
          position: "Consul General",
          department: "Consular Section",
          responsibilities: ["Citizen Services", "Visa Processing", "Document Authentication"]
        },
        { 
          name: "Li Xia",
          position: "Commercial Counsellor", 
          department: "Economic & Commercial Office",
          responsibilities: ["Trade Relations", "Investment Promotion", "Economic Cooperation"]
        }
      ],
      contactInfo: {
        address: "Plot 37, Malcolm X Avenue, Kololo, Kampala, Republic of Uganda",
        generalPhone: "+256 393 000174",
        consularPhone: "+256 393 000172", 
        email: "chinaemb_ug@mfa.gov.cn",
        consularEmail: "consulate_uga@126.com",
        fax: "+256 414 254456",
        officeHours: "Monday - Friday: 9:00 AM - 5:00 PM",
        emergencyHours: "24/7 Consular Emergency Services"
      }
    },
    zh: {
      sectionTitle: "使馆领导",
      mainHeading: "关于我们的大使馆",
      subtitle: `中华人民共和国在乌干达的官方外交使团，自${relationsStartYear}年以来致力于促进相互理解与合作。`,
      leadershipTitle: "使馆领导",
      leadershipSubtitle: "认识我们致力于加强中乌关系的专业外交团队",
      embassyInfo: "使馆信息",
      officeHours: "办公时间",
      regularHours: "常规办公时间",
      emergencyServices: "紧急服务",
      fax: "传真",
      address: "地址",
      generalLine: "总机",
      consularEmergency: "领事紧急情况",
      email: "邮箱",
      embassyFacts: [
        { label: "建立", value: `${relationsStartYear}`, description: "外交关系年份" },
        { label: "位置", value: "科洛洛", description: "外交区，坎帕拉" },
        { label: "员工", value: "50+", description: "外交和本地员工" },
        { label: "服务", value: "24/7", description: "领事紧急覆盖" }
      ],
      missionValues: [
        {
          title: "外交卓越",
          description: "通过战略外交维持和加强中乌双边关系",
          metrics: `${yearsOfRelations}+ 年关系`
        },
        {
          title: "公民服务", 
          description: "为在乌干达的中国公民提供全面的领事保护和服务",
          metrics: "10,000+ 服务公民"
        },
        {
          title: "经济合作",
          description: "促进中乌企业间的贸易、投资和经济伙伴关系",
          metrics: "$20亿+ 贸易额"
        },
        {
          title: "文化交流",
          description: "通过文化、教育和人文交流促进相互理解",
          metrics: "500+ 年度交流"
        }
      ],
      leadershipTeam: [
        { 
          name: "张利忠大使阁下",
          position: "特命全权大使",
          department: "大使办公室",
          responsibilities: ["首席外交代表", "双边关系监督", "战略伙伴关系发展"]
        },
        { 
          name: "范学成",
          position: "公使衔参赞",
          department: "政治处", 
          responsibilities: ["政治外交", "公共事务", "政府间关系"]
        },
        { 
          name: "王宏博", 
          position: "总领事",
          department: "领事处",
          responsibilities: ["公民服务", "签证处理", "文件认证"]
        },
        { 
          name: "李霞",
          position: "商务参赞", 
          department: "经济商务处",
          responsibilities: ["贸易关系", "投资促进", "经济合作"]
        }
      ],
      contactInfo: {
        address: "乌干达坎帕拉市科洛洛区马尔科姆X大道37号",
        generalPhone: "+256 393 000174",
        consularPhone: "+256 393 000172", 
        email: "chinaemb_ug@mfa.gov.cn",
        consularEmail: "consulate_uga@126.com",
        fax: "+256 414 254456",
        officeHours: "周一至周五: 上午9:00 - 下午5:00",
        emergencyHours: "24/7 领事紧急服务"
      }
    }
  }

  const t = content[currentLanguage]

  const embassyFacts: EmbassyFact[] = t.embassyFacts.map(fact => ({
    ...fact,
    icon: fact.label.includes("Established") || fact.label.includes("建立") ? Building :
          fact.label.includes("Location") || fact.label.includes("位置") ? MapPin :
          fact.label.includes("Staff") || fact.label.includes("员工") ? Users : Globe
  }))

  const missionValues: MissionValue[] = t.missionValues.map(value => ({
    ...value,
    icon: value.title.includes("Diplomatic") || value.title.includes("外交") ? Shield :
          value.title.includes("Citizen") || value.title.includes("公民") ? Users :
          value.title.includes("Economic") || value.title.includes("经济") ? Target : Award
  }))

  const leadershipTeam: TeamMember[] = t.leadershipTeam

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-red-50 rounded-full -translate-y-24 sm:-translate-y-32 lg:-translate-y-36 translate-x-24 sm:translate-x-32 lg:translate-x-36 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-blue-50 rounded-full translate-y-32 sm:translate-y-40 lg:translate-y-48 -translate-x-32 sm:-translate-x-40 lg:-translate-x-48 opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1 sm:px-4 sm:py-2 shadow-sm mb-3 sm:mb-4"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700">{t.sectionTitle}</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t.mainHeading}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-2">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Embassy Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16"
        >
          {embassyFacts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3, scale: 1.03 }}
              className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 text-center shadow-lg border border-gray-200 group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-105 transition-transform">
                <fact.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-1">{fact.value}</div>
              <div className="font-semibold text-gray-700 text-xs sm:text-sm lg:text-base mb-1">{fact.label}</div>
              <div className="text-xs text-gray-500">{fact.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
        >
          {missionValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, rotateX: 3 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
                <value.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{value.description}</p>
              <div className="bg-gray-50 rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                <span className="text-xs font-semibold text-blue-600">{value.metrics}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              {t.leadershipTitle}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
              {t.leadershipSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 break-words">{member.name}</h4>
                    <p className="text-red-600 font-semibold text-sm sm:text-base mb-1 sm:mb-2 break-words">{member.position}</p>
                    <p className="text-gray-700 text-xs sm:text-sm mb-2 sm:mb-3 break-words">{member.department}</p>
                    
                    <div className="space-y-1 sm:space-y-2">
                      {member.responsibilities.map((responsibility, respIndex) => (
                        <div key={respIndex} className="flex items-center gap-1 sm:gap-2 text-xs text-gray-600">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span className="break-words">{responsibility}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Building className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-red-400" />
                {t.embassyInfo}
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-semibold text-sm sm:text-base">{t.address}</p>
                    <p className="text-gray-300 text-xs sm:text-sm break-words">{t.contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 space-y-1 sm:space-y-2">
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{t.generalLine}</p>
                      <a href={`tel:${t.contactInfo.generalPhone.replace(/\s/g, '')}`} className="text-gray-300 text-xs sm:text-sm hover:text-white transition-colors break-words">
                        {t.contactInfo.generalPhone}
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{t.consularEmergency}</p>
                      <a href={`tel:${t.contactInfo.consularPhone.replace(/\s/g, '')}`} className="text-red-300 text-xs sm:text-sm hover:text-red-200 transition-colors font-medium break-words">
                        {t.contactInfo.consularPhone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 space-y-1">
                    <p className="font-semibold text-sm sm:text-base">{t.email}</p>
                    <a href={`mailto:${t.contactInfo.email}`} className="text-gray-300 text-xs sm:text-sm hover:text-white transition-colors block break-words">
                      {t.contactInfo.email}
                    </a>
                    <a href={`mailto:${t.contactInfo.consularEmail}`} className="text-red-300 text-xs sm:text-sm hover:text-red-200 transition-colors block break-words">
                      {t.contactInfo.consularEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 backdrop-blur-sm">
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-1 sm:gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                {t.officeHours}
              </h4>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">{t.regularHours}</p>
                  <p className="text-gray-300 break-words">{t.contactInfo.officeHours}</p>
                </div>
                <div>
                  <p className="font-semibold text-green-400 text-sm sm:text-base">{t.emergencyServices}</p>
                  <p className="text-green-300 break-words">{t.contactInfo.emergencyHours}</p>
                </div>
                <div className="pt-2 sm:pt-3 border-t border-white/20">
                  <p className="font-semibold text-sm sm:text-base">{t.fax}</p>
                  <p className="text-gray-300 break-words">{t.contactInfo.fax}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutEmbassy