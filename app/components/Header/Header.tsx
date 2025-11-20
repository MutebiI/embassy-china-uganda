// 'use client'

// import { motion, AnimatePresence } from 'framer-motion'
// import { Menu, X, Phone, Mail, Globe, Shield, Search, Clock } from 'lucide-react'
// import { useState, useEffect, createContext, useContext } from 'react'

// // Create language context
// //chineese embassy context
// const LanguageContext = createContext()

// export const useLanguage = () => {
//   const context = useContext(LanguageContext)
//   if (!context) {
//     throw new Error('useLanguage must be used within a LanguageProvider')
//   }
//   return context
// }

// export const LanguageProvider = ({ children }) => {
//   const [currentLanguage, setCurrentLanguage] = useState('en')

//   const toggleLanguage = () => {
//     setCurrentLanguage(prev => prev === 'en' ? 'zh' : 'en')
//   }

//   return (
//     <LanguageContext.Provider value={{ currentLanguage, toggleLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   )
// }

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const { currentLanguage, toggleLanguage } = useLanguage()

//   // Track scroll for header appearance
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   // Language content
//   const content = {
//     en: {
//       menuItems: [
//         { name: 'Home', href: '#home', description: 'Embassy Overview' },
//         { name: 'Consular Services', href: '#consular', description: 'Visa & Citizen Services' },
//         { name: 'Bilateral Relations', href: '#relations', description: 'China-Uganda Partnership' },
//         { name: 'News & Events', href: '#news', description: 'Latest Updates' },
//         { name: 'About Embassy', href: '#about', description: 'Our Mission & Team' },
//         { name: 'Contact', href: '#contact', description: 'Get In Touch' },
//       ],
//       emergencyContacts: {
//         consular: '+256 393 000172',
//         email: 'consulate_uga@126.com',
//         hours: '24/7 Emergency Service'
//       },
//       emergencyText: 'Consular Emergency:',
//       emergencyShort: 'Emergency:',
//       call: 'Call',
//       emailText: 'Email',
//       embassyTitle: 'Embassy of China',
//       embassySubtitle: 'in the Republic of Uganda',
//       embassyShort: 'China Embassy',
//       countryShort: 'Uganda',
//       mobileEmergency: 'Emergency Contact',
//       language: 'Language',
//       english: 'EN',
//       chinese: '中文',
//       secureChannel: 'Secure Diplomatic Channel',
//       address: 'Plot 37, Malcolm X Avenue, Kololo',
//       generalPhone: 'General: +256 393 000174'
//     },
//     zh: {
//       menuItems: [
//         { name: '首页', href: '#home', description: '使馆概览' },
//         { name: '领事服务', href: '#consular', description: '签证与公民服务' },
//         { name: '双边关系', href: '#relations', description: '中乌合作伙伴关系' },
//         { name: '新闻活动', href: '#news', description: '最新动态' },
//         { name: '关于使馆', href: '#about', description: '我们的使命与团队' },
//         { name: '联系我们', href: '#contact', description: '取得联系' },
//       ],
//       emergencyContacts: {
//         consular: '+256 393 000172',
//         email: 'consulate_uga@126.com',
//         hours: '24/7 紧急服务'
//       },
//       emergencyText: '领事紧急情况:',
//       emergencyShort: '紧急:',
//       call: '呼叫',
//       emailText: '邮箱',
//       embassyTitle: '中国驻乌干达大使馆',
//       embassySubtitle: '在乌干达共和国',
//       embassyShort: '中国使馆',
//       countryShort: '乌干达',
//       mobileEmergency: '紧急联系',
//       language: '语言',
//       english: 'EN',
//       chinese: '中文',
//       secureChannel: '安全外交渠道',
//       address: '科洛洛马尔科姆X大道37号',
//       generalPhone: '总机: +256 393 000174'
//     }
//   }

//   const t = content[currentLanguage]

//   return (
//     <>
//       {/* Top Emergency Banner */}
//       <motion.div
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         className="bg-gradient-to-r from-red-700 to-red-800 text-white py-2 px-4 border-b border-red-600"
//       >
//         <div className="max-w-7xl mx-auto px-2 sm:px-4">
//           <div className="flex flex-col xs:flex-row justify-between items-center gap-2 text-xs sm:text-sm">
//             {/* Emergency Contact */}
//             <div className="flex items-center gap-2 sm:gap-4">
//               <motion.div
//                 className="flex items-center gap-1 sm:gap-2 bg-white/20 px-2 sm:px-3 py-1 rounded-full"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                 <span className="font-semibold hidden xs:inline">{t.emergencyText}</span>
//                 <span className="font-semibold xs:hidden">{t.emergencyShort}</span>
//                 <a 
//                   href={`tel:${t.emergencyContacts.consular.replace(/\s/g, '')}`}
//                   className="font-bold hover:underline flex items-center gap-1"
//                 >
//                   <Phone className="w-3 h-3" />
//                   <span className="hidden sm:inline">{t.emergencyContacts.consular}</span>
//                   <span className="sm:hidden">{t.call}</span>
//                 </a>
//               </motion.div>
//             </div>

//             {/* Secondary Info */}
//             <div className="flex items-center gap-2 sm:gap-4 text-xs opacity-90">
//               <div className="flex items-center gap-1">
//                 <Mail className="w-3 h-3 hidden xs:block" />
//                 <span className="hidden sm:inline">{t.emergencyContacts.email}</span>
//                 <span className="sm:hidden">{t.emailText}</span>
//               </div>
//               <div className="hidden md:flex items-center gap-1">
//                 <Clock className="w-3 h-3" />
//                 <span>{t.emergencyContacts.hours}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Main Navigation Header */}
//       <motion.header
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         className={`sticky top-0 z-50 transition-all duration-300 ${
//           isScrolled 
//             ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
//             : 'bg-white border-b border-gray-100'
//         }`}
//       >
//         <nav className="max-w-7xl mx-auto px-3 sm:px-4">
//           <div className="flex items-center justify-between py-3">
//             {/* Logo & Embassy Identity */}
//             <motion.div
//               className="flex items-center gap-2 sm:gap-3"
//               whileHover={{ scale: 1.02 }}
//             >
//               {/* Official Seal */}
//               <div className="relative">
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg border border-red-500">
//                   <span className="text-white font-bold text-base sm:text-lg">中</span>
//                 </div>
//                 {/* Active Status Indicator */}
//                 <motion.div
//                   className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 />
//               </div>

//               {/* Embassy Title */}
//               <div className="hidden sm:block">
//                 <motion.h1
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-lg sm:text-xl font-bold text-gray-900 leading-tight"
//                 >
//                   {t.embassyTitle}
//                 </motion.h1>
//                 <p className="text-xs text-gray-600 leading-tight">{t.embassySubtitle}</p>
//               </div>
              
//               {/* Mobile Embassy Title */}
//               <div className="sm:hidden">
//                 <motion.h1
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-sm font-bold text-gray-900 leading-tight"
//                 >
//                   {t.embassyShort}
//                 </motion.h1>
//                 <p className="text-xs text-gray-600 leading-tight">{t.countryShort}</p>
//               </div>
//             </motion.div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-1">
//               {t.menuItems.map((item, index) => (
//                 <motion.a
//                   key={item.name}
//                   href={item.href}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ 
//                     scale: 1.05,
//                     color: '#dc2626',
//                     y: -1
//                   }}
//                   className="group relative px-3 py-2 text-gray-700 hover:text-red-700 font-medium cursor-pointer transition-all duration-300 rounded-lg text-sm xl:text-base"
//                 >
//                   {item.name}
//                   {/* Hover Tooltip */}
//                   <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                     <div className="bg-gray-900 text-white text-xs py-1 px-2 rounded mt-2 whitespace-nowrap">
//                       {item.description}
//                     </div>
//                   </div>
//                 </motion.a>
//               ))}
//             </div>

//             {/* Right Side Actions */}
//             <div className="hidden sm:flex items-center gap-2 lg:gap-4">
//               {/* Language Switcher - Now functional */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1 lg:px-3 cursor-pointer"
//                 onClick={toggleLanguage}
//               >
//                 <Globe className="w-3 h-3 lg:w-4 lg:h-4 text-gray-600" />
//                 <button className={`px-1 lg:px-2 py-1 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
//                   currentLanguage === 'en' 
//                     ? 'bg-white text-red-700 shadow-sm' 
//                     : 'text-gray-600 hover:text-gray-900'
//                 }`}>
//                   {t.english}
//                 </button>
//                 <button className={`px-1 lg:px-2 py-1 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
//                   currentLanguage === 'zh' 
//                     ? 'bg-white text-red-700 shadow-sm' 
//                     : 'text-gray-600 hover:text-gray-900'
//                 }`}>
//                   {t.chinese}
//                 </button>
//               </motion.div>

//               {/* Search Button */}
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors"
//               >
//                 <Search className="w-3 h-3 lg:w-4 lg:h-4 text-gray-600" />
//               </motion.button>
//             </div>

//             {/* Mobile Actions - Language switcher + Menu button */}
//             <div className="sm:hidden flex items-center gap-2">
//               {/* Mobile Language Switcher - Compact version */}
//               <motion.button
//                 onClick={toggleLanguage}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors font-medium text-xs"
//                 aria-label="Toggle language"
//               >
//                 {currentLanguage === 'en' ? t.english : t.chinese}
//               </motion.button>

//               {/* Mobile Menu Button */}
//               <motion.button
//                 className="w-8 h-8 bg-gray-100 hover:bg-red-100 rounded-xl flex items-center justify-center transition-colors"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={() => setIsOpen(!isOpen)}
//                 aria-label="Toggle menu"
//               >
//                 <AnimatePresence mode="wait">
//                   {isOpen ? (
//                     <motion.div
//                       key="close"
//                       initial={{ rotate: -90, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: 90, opacity: 0 }}
//                     >
//                       <X className="w-4 h-4 text-gray-700" />
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="menu"
//                       initial={{ rotate: 90, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: -90, opacity: 0 }}
//                     >
//                       <Menu className="w-4 h-4 text-gray-700" />
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.button>
//             </div>
//           </div>

//           {/* Mobile Navigation */}
//           <AnimatePresence>
//             {isOpen && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: 'auto' }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="sm:hidden bg-white border-t border-gray-200 rounded-b-2xl shadow-xl overflow-hidden"
//               >
//                 {/* Emergency Access in Mobile */}
//                 <div className="bg-red-50 border-b border-red-200 p-4">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-sm font-semibold text-red-900">{t.mobileEmergency}</span>
//                     <Shield className="w-4 h-4 text-red-600" />
//                   </div>
//                   <a 
//                     href={`tel:${t.emergencyContacts.consular.replace(/\s/g, '')}`}
//                     className="flex items-center gap-2 text-red-700 font-bold text-base hover:text-red-800"
//                   >
//                     <Phone className="w-4 h-4" />
//                     {t.emergencyContacts.consular}
//                   </a>
//                   <div className="flex items-center gap-2 mt-2 text-xs text-red-700">
//                     <Mail className="w-3 h-3" />
//                     <span className="break-all">{t.emergencyContacts.email}</span>
//                   </div>
//                 </div>

//                 {/* Mobile Menu Items */}
//                 <div className="p-2">
//                   {t.menuItems.map((item, index) => (
//                     <motion.a
//                       key={item.name}
//                       href={item.href}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       whileHover={{ x: 8, backgroundColor: '#fef2f2' }}
//                       className="block px-4 py-3 text-gray-700 hover:text-red-700 font-medium border-b border-gray-100 last:border-b-0 transition-all duration-300 rounded-lg"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       <div className="font-semibold text-sm">{item.name}</div>
//                       <div className="text-xs text-gray-500 mt-1">{item.description}</div>
//                     </motion.a>
//                   ))}
//                 </div>

//                 {/* Mobile Language Switcher in Menu (optional - can remove since we have it in header now) */}
//                 <div className="px-4 py-3 border-t border-gray-200">
//                   <div className="flex items-center justify-center gap-2">
//                     <span className="text-xs text-gray-600">{t.language}:</span>
//                     <button 
//                       onClick={() => {
//                         if (currentLanguage !== 'en') {
//                           toggleLanguage()
//                         }
//                       }}
//                       className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
//                         currentLanguage === 'en' 
//                           ? 'bg-red-700 text-white shadow-sm' 
//                           : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                       }`}
//                     >
//                       {t.english}
//                     </button>
//                     <button 
//                       onClick={() => {
//                         if (currentLanguage !== 'zh') {
//                           toggleLanguage()
//                         }
//                       }}
//                       className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
//                         currentLanguage === 'zh' 
//                           ? 'bg-red-700 text-white shadow-sm' 
//                           : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                       }`}
//                     >
//                       {t.chinese}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Mobile Footer */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.6 }}
//                   className="bg-gray-50 px-4 py-3 border-t border-gray-200"
//                 >
//                   <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
//                     <div className="flex items-center gap-2">
//                       <Shield className="w-3 h-3 text-green-600" />
//                       <span className="text-xs">{t.secureChannel}</span>
//                     </div>
//                   </div>
//                   <div className="text-xs text-gray-500 space-y-1">
//                     <p className="flex items-start gap-1">
//                       <span>📍</span>
//                       <span className="break-words">{t.address}</span>
//                     </p>
//                     <p className="flex items-center gap-1">
//                       <span>📞</span>
//                       <span>{t.generalPhone}</span>
//                     </p>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </nav>
//       </motion.header>
//     </>
//   )
// }

// export default Header
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, Globe, Shield, Search, Clock } from 'lucide-react'
import { useState, useEffect, createContext, useContext, ReactNode } from 'react'

// Define interfaces for TypeScript
interface MenuItem {
  name: string
  href: string
  description: string
}

interface EmergencyContacts {
  consular: string
  email: string
  hours: string
}

interface LanguageContent {
  menuItems: MenuItem[]
  emergencyContacts: EmergencyContacts
  emergencyText: string
  emergencyShort: string
  call: string
  emailText: string
  embassyTitle: string
  embassySubtitle: string
  embassyShort: string
  countryShort: string
  mobileEmergency: string
  language: string
  english: string
  chinese: string
  secureChannel: string
  address: string
  generalPhone: string
}

interface ContentMap {
  en: LanguageContent
  zh: LanguageContent
}

interface LanguageContextType {
  currentLanguage: 'en' | 'zh'
  toggleLanguage: () => void
}

// Create language context with proper typing
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'zh'>('en')

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'en' ? 'zh' : 'en')
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { currentLanguage, toggleLanguage } = useLanguage()

  // Track scroll for header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Language content
  const content: ContentMap = {
    en: {
      menuItems: [
        { name: 'Home', href: '#home', description: 'Embassy Overview' },
        { name: 'Consular Services', href: '#consular', description: 'Visa & Citizen Services' },
        { name: 'Bilateral Relations', href: '#relations', description: 'China-Uganda Partnership' },
        { name: 'News & Events', href: '#news', description: 'Latest Updates' },
        { name: 'About Embassy', href: '#about', description: 'Our Mission & Team' },
        { name: 'Contact', href: '#contact', description: 'Get In Touch' },
      ],
      emergencyContacts: {
        consular: '+256 393 000172',
        email: 'consulate_uga@126.com',
        hours: '24/7 Emergency Service'
      },
      emergencyText: 'Consular Emergency:',
      emergencyShort: 'Emergency:',
      call: 'Call',
      emailText: 'Email',
      embassyTitle: 'Embassy of China',
      embassySubtitle: 'in the Republic of Uganda',
      embassyShort: 'China Embassy',
      countryShort: 'Uganda',
      mobileEmergency: 'Emergency Contact',
      language: 'Language',
      english: 'EN',
      chinese: '中文',
      secureChannel: 'Secure Diplomatic Channel',
      address: 'Plot 37, Malcolm X Avenue, Kololo',
      generalPhone: 'General: +256 393 000174'
    },
    zh: {
      menuItems: [
        { name: '首页', href: '#home', description: '使馆概览' },
        { name: '领事服务', href: '#consular', description: '签证与公民服务' },
        { name: '双边关系', href: '#relations', description: '中乌合作伙伴关系' },
        { name: '新闻活动', href: '#news', description: '最新动态' },
        { name: '关于使馆', href: '#about', description: '我们的使命与团队' },
        { name: '联系我们', href: '#contact', description: '取得联系' },
      ],
      emergencyContacts: {
        consular: '+256 393 000172',
        email: 'consulate_uga@126.com',
        hours: '24/7 紧急服务'
      },
      emergencyText: '领事紧急情况:',
      emergencyShort: '紧急:',
      call: '呼叫',
      emailText: '邮箱',
      embassyTitle: '中国驻乌干达大使馆',
      embassySubtitle: '在乌干达共和国',
      embassyShort: '中国使馆',
      countryShort: '乌干达',
      mobileEmergency: '紧急联系',
      language: '语言',
      english: 'EN',
      chinese: '中文',
      secureChannel: '安全外交渠道',
      address: '科洛洛马尔科姆X大道37号',
      generalPhone: '总机: +256 393 000174'
    }
  }

  const t = content[currentLanguage]

  return (
    <>
      {/* Top Emergency Banner */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-red-700 to-red-800 text-white py-2 px-4 border-b border-red-600"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex flex-col xs:flex-row justify-between items-center gap-2 text-xs sm:text-sm">
            {/* Emergency Contact */}
            <div className="flex items-center gap-2 sm:gap-4">
              <motion.div
                className="flex items-center gap-1 sm:gap-2 bg-white/20 px-2 sm:px-3 py-1 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-semibold hidden xs:inline">{t.emergencyText}</span>
                <span className="font-semibold xs:hidden">{t.emergencyShort}</span>
                <a 
                  href={`tel:${t.emergencyContacts.consular.replace(/\s/g, '')}`}
                  className="font-bold hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  <span className="hidden sm:inline">{t.emergencyContacts.consular}</span>
                  <span className="sm:hidden">{t.call}</span>
                </a>
              </motion.div>
            </div>

            {/* Secondary Info */}
            <div className="flex items-center gap-2 sm:gap-4 text-xs opacity-90">
              <div className="flex items-center gap-1">
                <Mail className="w-3 h-3 hidden xs:block" />
                <span className="hidden sm:inline">{t.emergencyContacts.email}</span>
                <span className="sm:hidden">{t.emailText}</span>
              </div>
              <div className="hidden md:flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{t.emergencyContacts.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
            : 'bg-white border-b border-gray-100'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo & Embassy Identity */}
            <motion.div
              className="flex items-center gap-2 sm:gap-3"
              whileHover={{ scale: 1.02 }}
            >
              {/* Official Seal */}
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg border border-red-500">
                  <span className="text-white font-bold text-base sm:text-lg">中</span>
                </div>
                {/* Active Status Indicator */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Embassy Title */}
              <div className="hidden sm:block">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-lg sm:text-xl font-bold text-gray-900 leading-tight"
                >
                  {t.embassyTitle}
                </motion.h1>
                <p className="text-xs text-gray-600 leading-tight">{t.embassySubtitle}</p>
              </div>
              
              {/* Mobile Embassy Title */}
              <div className="sm:hidden">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm font-bold text-gray-900 leading-tight"
                >
                  {t.embassyShort}
                </motion.h1>
                <p className="text-xs text-gray-600 leading-tight">{t.countryShort}</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {t.menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    color: '#dc2626',
                    y: -1
                  }}
                  className="group relative px-3 py-2 text-gray-700 hover:text-red-700 font-medium cursor-pointer transition-all duration-300 rounded-lg text-sm xl:text-base"
                >
                  {item.name}
                  {/* Hover Tooltip */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-gray-900 text-white text-xs py-1 px-2 rounded mt-2 whitespace-nowrap">
                      {item.description}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden sm:flex items-center gap-2 lg:gap-4">
              {/* Language Switcher - Now functional */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1 lg:px-3 cursor-pointer"
                onClick={toggleLanguage}
              >
                <Globe className="w-3 h-3 lg:w-4 lg:h-4 text-gray-600" />
                <button className={`px-1 lg:px-2 py-1 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                  currentLanguage === 'en' 
                    ? 'bg-white text-red-700 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}>
                  {t.english}
                </button>
                <button className={`px-1 lg:px-2 py-1 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                  currentLanguage === 'zh' 
                    ? 'bg-white text-red-700 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}>
                  {t.chinese}
                </button>
              </motion.div>

              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Search className="w-3 h-3 lg:w-4 lg:h-4 text-gray-600" />
              </motion.button>
            </div>

            {/* Mobile Actions - Language switcher + Menu button */}
            <div className="sm:hidden flex items-center gap-2">
              {/* Mobile Language Switcher - Compact version */}
              <motion.button
                onClick={toggleLanguage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors font-medium text-xs"
                aria-label="Toggle language"
              >
                {currentLanguage === 'en' ? t.english : t.chinese}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                className="w-8 h-8 bg-gray-100 hover:bg-red-100 rounded-xl flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <X className="w-4 h-4 text-gray-700" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Menu className="w-4 h-4 text-gray-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="sm:hidden bg-white border-t border-gray-200 rounded-b-2xl shadow-xl overflow-hidden"
              >
                {/* Emergency Access in Mobile */}
                <div className="bg-red-50 border-b border-red-200 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-red-900">{t.mobileEmergency}</span>
                    <Shield className="w-4 h-4 text-red-600" />
                  </div>
                  <a 
                    href={`tel:${t.emergencyContacts.consular.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-red-700 font-bold text-base hover:text-red-800"
                  >
                    <Phone className="w-4 h-4" />
                    {t.emergencyContacts.consular}
                  </a>
                  <div className="flex items-center gap-2 mt-2 text-xs text-red-700">
                    <Mail className="w-3 h-3" />
                    <span className="break-all">{t.emergencyContacts.email}</span>
                  </div>
                </div>

                {/* Mobile Menu Items */}
                <div className="p-2">
                  {t.menuItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 8, backgroundColor: '#fef2f2' }}
                      className="block px-4 py-3 text-gray-700 hover:text-red-700 font-medium border-b border-gray-100 last:border-b-0 transition-all duration-300 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="font-semibold text-sm">{item.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                    </motion.a>
                  ))}
                </div>

                {/* Mobile Language Switcher in Menu */}
                <div className="px-4 py-3 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs text-gray-600">{t.language}:</span>
                    <button 
                      onClick={() => {
                        if (currentLanguage !== 'en') {
                          toggleLanguage()
                        }
                      }}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                        currentLanguage === 'en' 
                          ? 'bg-red-700 text-white shadow-sm' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {t.english}
                    </button>
                    <button 
                      onClick={() => {
                        if (currentLanguage !== 'zh') {
                          toggleLanguage()
                        }
                      }}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                        currentLanguage === 'zh' 
                          ? 'bg-red-700 text-white shadow-sm' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {t.chinese}
                    </button>
                  </div>
                </div>

                {/* Mobile Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gray-50 px-4 py-3 border-t border-gray-200"
                >
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                    <div className="flex items-center gap-2">
                      <Shield className="w-3 h-3 text-green-600" />
                      <span className="text-xs">{t.secureChannel}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p className="flex items-start gap-1">
                      <span>📍</span>
                      <span className="break-words">{t.address}</span>
                    </p>
                    <p className="flex items-center gap-1">
                      <span>📞</span>
                      <span>{t.generalPhone}</span>
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  )
}

export default Header