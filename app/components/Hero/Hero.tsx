// 'use client'

// import { motion } from 'framer-motion'
// import { MapPin, Clock, Users, ArrowRight, Shield, Globe, Star, Flag } from 'lucide-react'

// import { useLanguage } from '../Header/Header'


// export default function Hero() {
//   // Dynamic years calculation
//   const relationsStartYear = 1962
//   const currentYear = new Date().getFullYear()
//   const yearsOfRelations = currentYear - relationsStartYear

//   const { currentLanguage } = useLanguage()

//   // Language content
//   const content = {
//     en: {
//       embassyBadge: 'Embassy of China • Uganda',
//       mainHeading: 'Strengthening ',
//       diplomatic: 'Diplomatic',
//       excellence: 'Excellence',
//       subtitle: `Official diplomatic mission advancing ${yearsOfRelations} years of China-Uganda relations through strategic partnership, economic cooperation, and citizen services.`,
//       stats: [
//         { icon: Globe, number: `${yearsOfRelations}+`, label: "Years of Diplomacy", color: "text-blue-600" },
//         { icon: Shield, number: "24/7", label: "Consular Protection", color: "text-green-600" },
//         { icon: Users, number: "10K+", label: "Citizens Served", color: "text-purple-600" },
//         { icon: Flag, number: "200+", label: "Bilateral Agreements", color: "text-red-600" },
//       ],
//       emergencyTitle: "Consular Emergency",
//       consularServices: "Consular Services",
//       ourMission: "Our Mission",
//       embassyTitle: "Embassy of China",
//       embassyLocation: "in Uganda",
//       address: "📍 Plot 37, Malcolm X Avenue, Kololo",
//       generalPhone: "📞 General: +256 393 000174",
//       partnersSince: `🤝 Partners since ${relationsStartYear}`,
//       officialBadge: "OFFICIAL",
//       sinceBadge: `🤝 Since ${relationsStartYear}`,
//       yearsBadge: `🌍 ${yearsOfRelations} Years`,
//       scrollText: "EXPLORE EMBASSY SERVICES"
//     },
//     zh: {
//       embassyBadge: '中国大使馆 • 乌干达',
//       mainHeading: '加强',
//       diplomatic: '外交',
//       excellence: '卓越',
//       subtitle: `官方外交使团，推进中乌关系${yearsOfRelations}年，通过战略伙伴关系、经济合作和公民服务。`,
//       stats: [
//         { icon: Globe, number: `${yearsOfRelations}+`, label: "外交年数", color: "text-blue-600" },
//         { icon: Shield, number: "24/7", label: "领事保护", color: "text-green-600" },
//         { icon: Users, number: "10K+", label: "服务公民", color: "text-purple-600" },
//         { icon: Flag, number: "200+", label: "双边协议", color: "text-red-600" },
//       ],
//       emergencyTitle: "领事紧急情况",
//       consularServices: "领事服务",
//       ourMission: "我们的使命",
//       embassyTitle: "中国驻乌干达大使馆",
//       embassyLocation: "在乌干达",
//       address: "📍 科洛洛马尔科姆X大道37号",
//       generalPhone: "📞 总机: +256 393 000174",
//       partnersSince: `🤝 ${relationsStartYear}年起合作伙伴`,
//       officialBadge: "官方",
//       sinceBadge: `🤝 ${relationsStartYear}年起`,
//       yearsBadge: `🌍 ${yearsOfRelations} 年`,
//       scrollText: "探索使馆服务"
//     }
//   }

//   const t = content[currentLanguage]

//   const emergencyContacts = {
//     consular: '+256 393 000172',
//     general: '+256 393 000174',
//     email: 'consulate_uga@126.com'
//   }

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMWY1ZjkiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
//       {/* Floating Elements - Hidden on mobile */}
//       <motion.div
//         animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
//         transition={{ duration: 6, repeat: Infinity }}
//         className="absolute top-20 left-10 w-20 h-20 bg-red-100 rounded-full opacity-20 hidden lg:block"
//       />
//       <motion.div
//         animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
//         transition={{ duration: 8, repeat: Infinity, delay: 1 }}
//         className="absolute bottom-20 right-10 w-16 h-16 bg-blue-100 rounded-full opacity-30 hidden lg:block"
//       />

//       <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          
//           {/* Left Content - Main Message */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center lg:text-left order-2 lg:order-1 mt-6 sm:mt-8 lg:mt-0"
//           >
//             {/* Embassy Badge */}
//             <motion.div
//               initial={{ scale: 0, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.2, type: "spring" }}
//               className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-sm mb-4 sm:mb-6"
//             >
//               <div className="flex items-center gap-1.5 sm:gap-2">
//                 <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse" />
//                 <span className="text-xs sm:text-sm font-semibold text-gray-700">{t.embassyBadge}</span>
//               </div>
//               <div className="w-px h-3 sm:h-4 bg-gray-300" />
//               <div className="flex gap-1 text-base sm:text-lg">
//                 <span>🇨🇳</span>
//                 <span className="text-gray-400">→</span>
//                 <span>🇺🇬</span>
//               </div>
//             </motion.div>

//             {/* Main Heading */}
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight"
//             >
//               {t.mainHeading}
//               <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
//                 {' '}{t.diplomatic}{' '}
//               </span>
//               {t.excellence}
//             </motion.h1>

//             {/* Subtitle */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
//             >
//               {t.subtitle}
//             </motion.p>

//             {/* Key Stats */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6 max-w-2xl"
//             >
//               {t.stats.map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.6 + index * 0.1 }}
//                   whileHover={{ y: -2, scale: 1.02 }}
//                   className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
//                 >
//                   <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ${stat.color} mx-auto mb-1 sm:mb-1.5 group-hover:scale-105 transition-transform`} />
//                   <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 leading-none">{stat.number}</div>
//                   <div className="text-xs text-gray-600 leading-tight mt-0.5">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Emergency Notice */}
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7 }}
//               className="bg-red-50 border border-red-200 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 max-w-2xl"
//             >
//               <div className="flex items-center gap-2 sm:gap-3">
//                 <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <h4 className="font-semibold text-red-900 text-xs sm:text-sm">{t.emergencyTitle}</h4>
//                   <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2 text-xs text-red-700 mt-1">
//                     <a href={`tel:${emergencyContacts.consular.replace(/\s/g, '')}`} className="hover:underline font-medium whitespace-nowrap">
//                       📞 {emergencyContacts.consular}
//                     </a>
//                     <a href={`mailto:${emergencyContacts.email}`} className="hover:underline whitespace-nowrap">
//                       ✉️ {emergencyContacts.email}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8 }}
//               className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -5px rgba(220, 38, 38, 0.3)" }}
//                 whileTap={{ scale: 0.97 }}
//                 className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 group w-full sm:w-auto"
//               >
//                 <span>{t.consularServices}</span>
//                 <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
//               </motion.button>
              
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="border-2 border-gray-800 text-gray-800 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-800 hover:text-white transition-all duration-300 w-full sm:w-auto"
//               >
//                 {t.ourMission}
//               </motion.button>
//             </motion.div>
//           </motion.div>

//           {/* Right Visual - Diplomatic Seal */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="flex justify-center items-center order-1 lg:order-2"
//           >
//             <div className="relative">
//               {/* Main Embassy Seal */}
//               <motion.div
//                 whileHover={{ y: -3, rotateY: 3 }}
//                 className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-lg sm:shadow-xl w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
//               >
//                 <div className="bg-white rounded-lg sm:rounded-xl w-full h-full flex flex-col items-center justify-center p-3 sm:p-4 lg:p-6 text-center">
//                   {/* Animated Chinese Character */}
//                   <motion.div
//                     animate={{ 
//                       rotate: [0, 2, -2, 0],
//                       scale: [1, 1.03, 1]
//                     }}
//                     transition={{ duration: 8, repeat: Infinity }}
//                     className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-red-600 to-red-700 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg border border-red-500"
//                   >
//                     <span className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">中</span>
//                   </motion.div>
                  
//                   <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-1.5 leading-tight">
//                     {t.embassyTitle}
//                   </h3>
//                   <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm">{t.embassyLocation}</p>
                  
//                   {/* Flags Display */}
//                   <motion.div
//                     animate={{ scale: [1, 1.02, 1] }}
//                     transition={{ duration: 4, repeat: Infinity }}
//                     className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl mb-2 sm:mb-3"
//                   >
//                     <span className="text-2xl sm:text-3xl">🇨🇳</span>
//                     <motion.div
//                       animate={{ rotate: [0, 8, -8, 0] }}
//                       transition={{ duration: 6, repeat: Infinity }}
//                     >
//                       <Star className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-yellow-500" />
//                     </motion.div>
//                     <span className="text-2xl sm:text-3xl">🇺🇬</span>
//                   </motion.div>

//                   <div className="text-xs text-gray-500 space-y-0.5">
//                     <p className="leading-tight">{t.address}</p>
//                     <p className="leading-tight">{t.generalPhone}</p>
//                     <p className="leading-tight">{t.partnersSince}</p>
//                   </div>
//                 </div>

//                 {/* Authenticity Badge */}
//                 <motion.div
//                   animate={{ rotate: [0, 2, -2, 0] }}
//                   transition={{ duration: 5, repeat: Infinity }}
//                   className="absolute -top-1 -right-1 sm:-top-1 sm:-right-1 bg-green-500 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold shadow-lg"
//                 >
//                   {t.officialBadge}
//                 </motion.div>
//               </motion.div>

//               {/* Floating Diplomatic Elements - Hidden on mobile */}
//               <motion.div
//                 animate={{ y: [0, -8, 0], rotate: [0, 180, 360] }}
//                 transition={{ duration: 8, repeat: Infinity }}
//                 className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 bg-blue-600 text-white px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-lg font-semibold text-xs hidden lg:block whitespace-nowrap"
//               >
//                 {t.sinceBadge}
//               </motion.div>

//               <motion.div
//                 animate={{ y: [0, 6, 0], rotate: [0, -6, 0] }}
//                 transition={{ duration: 6, repeat: Infinity, delay: 2 }}
//                 className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-green-600 text-white px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-lg font-semibold text-xs hidden lg:block whitespace-nowrap"
//               >
//                 {t.yearsBadge}
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Scroll Indicator - Hidden on mobile */}
//         <motion.div
//           animate={{ y: [0, 6, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="hidden lg:flex flex-col items-center gap-1.5 sm:gap-2 mt-6 sm:mt-12"
//         >
//           <span className="text-gray-400 text-xs sm:text-sm font-medium tracking-widest">{t.scrollText}</span>
//           <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-red-600 rounded-full flex justify-center">
//             <motion.div
//               animate={{ y: [0, 8, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="w-1 h-1.5 sm:h-2 bg-red-600 rounded-full mt-1.5"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Users, ArrowRight, Shield, Globe, Star, Flag } from 'lucide-react'
import { useLanguage } from '../Header/Header'

// Define the return type for useLanguage hook
interface LanguageContextType {
  currentLanguage: 'en' | 'zh'
  toggleLanguage: () => void
}

interface StatContent {
  icon: React.ComponentType<{ className?: string }>
  number: string
  label: string
  color: string
}

interface LanguageContent {
  embassyBadge: string
  mainHeading: string
  diplomatic: string
  excellence: string
  subtitle: string
  stats: StatContent[]
  emergencyTitle: string
  consularServices: string
  ourMission: string
  embassyTitle: string
  embassyLocation: string
  address: string
  generalPhone: string
  partnersSince: string
  officialBadge: string
  sinceBadge: string
  yearsBadge: string
  scrollText: string
}

interface ContentMap {
  en: LanguageContent
  zh: LanguageContent
}

export default function Hero() {
  // Dynamic years calculation
  const relationsStartYear = 1962
  const currentYear = new Date().getFullYear()
  const yearsOfRelations = currentYear - relationsStartYear

  const { currentLanguage } = useLanguage() as LanguageContextType

  // Language content
  const content: ContentMap = {
    en: {
      embassyBadge: 'Embassy of China • Uganda',
      mainHeading: 'Strengthening ',
      diplomatic: 'Diplomatic',
      excellence: 'Excellence',
      subtitle: `Official diplomatic mission advancing ${yearsOfRelations} years of China-Uganda relations through strategic partnership, economic cooperation, and citizen services.`,
      stats: [
        { icon: Globe, number: `${yearsOfRelations}+`, label: "Years of Diplomacy", color: "text-blue-600" },
        { icon: Shield, number: "24/7", label: "Consular Protection", color: "text-green-600" },
        { icon: Users, number: "10K+", label: "Citizens Served", color: "text-purple-600" },
        { icon: Flag, number: "200+", label: "Bilateral Agreements", color: "text-red-600" },
      ],
      emergencyTitle: "Consular Emergency",
      consularServices: "Consular Services",
      ourMission: "Our Mission",
      embassyTitle: "Embassy of China",
      embassyLocation: "in Uganda",
      address: "📍 Plot 37, Malcolm X Avenue, Kololo",
      generalPhone: "📞 General: +256 393 000174",
      partnersSince: `🤝 Partners since ${relationsStartYear}`,
      officialBadge: "OFFICIAL",
      sinceBadge: `🤝 Since ${relationsStartYear}`,
      yearsBadge: `🌍 ${yearsOfRelations} Years`,
      scrollText: "EXPLORE EMBASSY SERVICES"
    },
    zh: {
      embassyBadge: '中国大使馆 • 乌干达',
      mainHeading: '加强',
      diplomatic: '外交',
      excellence: '卓越',
      subtitle: `官方外交使团，推进中乌关系${yearsOfRelations}年，通过战略伙伴关系、经济合作和公民服务。`,
      stats: [
        { icon: Globe, number: `${yearsOfRelations}+`, label: "外交年数", color: "text-blue-600" },
        { icon: Shield, number: "24/7", label: "领事保护", color: "text-green-600" },
        { icon: Users, number: "10K+", label: "服务公民", color: "text-purple-600" },
        { icon: Flag, number: "200+", label: "双边协议", color: "text-red-600" },
      ],
      emergencyTitle: "领事紧急情况",
      consularServices: "领事服务",
      ourMission: "我们的使命",
      embassyTitle: "中国驻乌干达大使馆",
      embassyLocation: "在乌干达",
      address: "📍 科洛洛马尔科姆X大道37号",
      generalPhone: "📞 总机: +256 393 000174",
      partnersSince: `🤝 ${relationsStartYear}年起合作伙伴`,
      officialBadge: "官方",
      sinceBadge: `🤝 ${relationsStartYear}年起`,
      yearsBadge: `🌍 ${yearsOfRelations} 年`,
      scrollText: "探索使馆服务"
    }
  }

  const t = content[currentLanguage]

  const emergencyContacts = {
    consular: '+256 393 000172',
    general: '+256 393 000174',
    email: 'consulate_uga@126.com'
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMWY1ZjkiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      {/* Floating Elements - Hidden on mobile */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-20 h-20 bg-red-100 rounded-full opacity-20 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-10 w-16 h-16 bg-blue-100 rounded-full opacity-30 hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          
          {/* Left Content - Main Message */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1 mt-6 sm:mt-8 lg:mt-0"
          >
            {/* Embassy Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-sm mb-4 sm:mb-6"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-gray-700">{t.embassyBadge}</span>
              </div>
              <div className="w-px h-3 sm:h-4 bg-gray-300" />
              <div className="flex gap-1 text-base sm:text-lg">
                <span>🇨🇳</span>
                <span className="text-gray-400">→</span>
                <span>🇺🇬</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight"
            >
              {t.mainHeading}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                {' '}{t.diplomatic}{' '}
              </span>
              {t.excellence}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
            >
              {t.subtitle}
            </motion.p>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6 max-w-2xl"
            >
              {t.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
                >
                  <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ${stat.color} mx-auto mb-1 sm:mb-1.5 group-hover:scale-105 transition-transform`} />
                  <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 leading-none">{stat.number}</div>
                  <div className="text-xs text-gray-600 leading-tight mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Emergency Notice */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-red-50 border border-red-200 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 max-w-2xl"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-red-900 text-xs sm:text-sm">{t.emergencyTitle}</h4>
                  <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2 text-xs text-red-700 mt-1">
                    <a href={`tel:${emergencyContacts.consular.replace(/\s/g, '')}`} className="hover:underline font-medium whitespace-nowrap">
                      📞 {emergencyContacts.consular}
                    </a>
                    <a href={`mailto:${emergencyContacts.email}`} className="hover:underline whitespace-nowrap">
                      ✉️ {emergencyContacts.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -5px rgba(220, 38, 38, 0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 group w-full sm:w-auto"
              >
                <span>{t.consularServices}</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="border-2 border-gray-800 text-gray-800 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-800 hover:text-white transition-all duration-300 w-full sm:w-auto"
              >
                {t.ourMission}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Visual - Diplomatic Seal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Embassy Seal */}
              <motion.div
                whileHover={{ y: -3, rotateY: 3 }}
                className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-lg sm:shadow-xl w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
              >
                <div className="bg-white rounded-lg sm:rounded-xl w-full h-full flex flex-col items-center justify-center p-3 sm:p-4 lg:p-6 text-center">
                  {/* Animated Chinese Character */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 2, -2, 0],
                      scale: [1, 1.03, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-red-600 to-red-700 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg border border-red-500"
                  >
                    <span className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">中</span>
                  </motion.div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-1.5 leading-tight">
                    {t.embassyTitle}
                  </h3>
                  <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm">{t.embassyLocation}</p>
                  
                  {/* Flags Display */}
                  <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl mb-2 sm:mb-3"
                  >
                    <span className="text-2xl sm:text-3xl">🇨🇳</span>
                    <motion.div
                      animate={{ rotate: [0, 8, -8, 0] }}
                      transition={{ duration: 6, repeat: Infinity }}
                    >
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-yellow-500" />
                    </motion.div>
                    <span className="text-2xl sm:text-3xl">🇺🇬</span>
                  </motion.div>

                  <div className="text-xs text-gray-500 space-y-0.5">
                    <p className="leading-tight">{t.address}</p>
                    <p className="leading-tight">{t.generalPhone}</p>
                    <p className="leading-tight">{t.partnersSince}</p>
                  </div>
                </div>

                {/* Authenticity Badge */}
                <motion.div
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -top-1 -right-1 sm:-top-1 sm:-right-1 bg-green-500 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold shadow-lg"
                >
                  {t.officialBadge}
                </motion.div>
              </motion.div>

              {/* Floating Diplomatic Elements - Hidden on mobile */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 bg-blue-600 text-white px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-lg font-semibold text-xs hidden lg:block whitespace-nowrap"
              >
                {t.sinceBadge}
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0], rotate: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-green-600 text-white px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-lg font-semibold text-xs hidden lg:block whitespace-nowrap"
              >
                {t.yearsBadge}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hidden lg:flex flex-col items-center gap-1.5 sm:gap-2 mt-6 sm:mt-12"
        >
          <span className="text-gray-400 text-xs sm:text-sm font-medium tracking-widest">{t.scrollText}</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-red-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1.5 sm:h-2 bg-red-600 rounded-full mt-1.5"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}