// 'use client'

// import { motion } from 'framer-motion'
// import { FileText, Clock, Shield, CheckCircle, ArrowRight, Globe, User, BookOpen, Download, AlertTriangle } from 'lucide-react'
// import { useState } from 'react'
// import { useLanguage } from '../Header/Header'

// interface Service {
//   icon: React.ComponentType<{ className?: string }>
//   title: string
//   description: string
//   features: string[]
//   processingTime: string
//   fees: string
//   requiredDocs: string[]
//   emergency: boolean
//   contact: {
//     phone: string
//     email: string
//     hours: string
//   }
// }

// interface DownloadForm {
//   name: string
//   format: string
//   size: string
// }

// const ConsularServices = () => {
//   const [selectedService, setSelectedService] = useState<number | null>(null)
//   const { currentLanguage } = useLanguage()

//   // Language content
//   const content = {
//     en: {
//       sectionTitle: "Consular Services",
//       mainHeading: "Professional Consular Services",
//       subtitle: "Comprehensive consular assistance for both Chinese citizens and international visitors. Professional, efficient, and secure services you can trust.",
//       emergencyTitle: "24/7 Consular Emergency",
//       emergencyDescription: "Chinese citizens in distress can contact our emergency hotline for immediate assistance",
//       servicesInclude: "Services Include:",
//       processingTime: "Processing Time:",
//       fees: "Fees:",
//       requiredDocuments: "Required Documents:",
//       contactInformation: "Contact Information:",
//       applyNow: "Apply Now",
//       downloadTitle: "Download Application Forms",
//       downloadSubtitle: "Prepare your documents in advance for faster processing",
//       download: "Download",
//       services: [
//         {
//           title: "Visa Services",
//           description: "Comprehensive visa application and processing services for travel to China, including tourist, business, student, and work visas.",
//           features: ["Tourist Visa (L)", "Business Visa (M)", "Student Visa (X)", "Work Visa (Z)", "Transit Visa (G)"],
//           processingTime: "3-5 business days",
//           fees: "From $30 to $150 depending on type",
//           requiredDocs: ["Valid Passport (6+ months)", "Completed Application Form", "Passport Photo (35x45mm)", "Flight Itinerary", "Hotel Booking", "Invitation Letter if applicable"],
//           emergency: false,
//         },
//         {
//           title: "Document Legalization",
//           description: "Authentication and legalization of official documents for use in China, including educational, commercial, and personal documents.",
//           features: ["Degree Certificates", "Birth/Marriage Certificates", "Commercial Documents", "Power of Attorney", "Company Registration"],
//           processingTime: "2-4 business days",
//           fees: "$20 per document",
//           requiredDocs: ["Original Document", "Passport Copy", "Completed Application Form", "Previous Authentication if required"],
//           emergency: false,
//         },
//         {
//           title: "Citizen Services",
//           description: "Comprehensive support and assistance for Chinese citizens in Uganda, including passport services and emergency assistance.",
//           features: ["Passport Renewal", "Emergency Travel Document", "Notary Services", "Legal Assistance", "Birth Registration"],
//           processingTime: "Varies by service",
//           fees: "Contact for details",
//           requiredDocs: ["Current Chinese Passport", "Proof of Residence", "Application Forms", "Supporting Documents"],
//           emergency: true,
//         }
//       ],
//       downloadForms: [
//         { name: "Visa Application Form", format: "PDF", size: "245KB" },
//         { name: "Document Legalization Form", format: "PDF", size: "189KB" },
//         { name: "Passport Renewal Form", format: "PDF", size: "312KB" },
//         { name: "Notary Services Form", format: "PDF", size: "276KB" }
//       ]
//     },
//     zh: {
//       sectionTitle: "领事服务",
//       mainHeading: "专业领事服务",
//       subtitle: "为中国公民和国际访客提供全面的领事协助。专业、高效、安全的服务，值得信赖。",
//       emergencyTitle: "24/7 领事紧急情况",
//       emergencyDescription: "遇到困难的中国公民可以联系我们的紧急热线获得即时援助",
//       servicesInclude: "服务包括:",
//       processingTime: "处理时间:",
//       fees: "费用:",
//       requiredDocuments: "所需文件:",
//       contactInformation: "联系信息:",
//       applyNow: "立即申请",
//       downloadTitle: "下载申请表格",
//       downloadSubtitle: "提前准备文件以加快处理速度",
//       download: "下载",
//       services: [
//         {
//           title: "签证服务",
//           description: "全面的签证申请和处理服务，包括旅游、商务、学生和工作签证。",
//           features: ["旅游签证 (L)", "商务签证 (M)", "学生签证 (X)", "工作签证 (Z)", "过境签证 (G)"],
//           processingTime: "3-5个工作日",
//           fees: "根据类型从$30到$150",
//           requiredDocs: ["有效护照(6个月以上)", "完整申请表", "护照照片(35x45mm)", "航班行程", "酒店预订", "邀请函(如适用)"],
//           emergency: false,
//         },
//         {
//           title: "文件认证",
//           description: "官方文件的认证和合法化，包括教育、商业和个人文件。",
//           features: ["学位证书", "出生/结婚证书", "商业文件", "授权书", "公司注册"],
//           processingTime: "2-4个工作日",
//           fees: "每份文件$20",
//           requiredDocs: ["原始文件", "护照复印件", "完整申请表", "先前认证(如需要)"],
//           emergency: false,
//         },
//         {
//           title: "公民服务",
//           description: "为在乌干达的中国公民提供全面支持和援助，包括护照服务和紧急援助。",
//           features: ["护照更新", "紧急旅行证件", "公证服务", "法律协助", "出生登记"],
//           processingTime: "因服务而异",
//           fees: "请联系了解详情",
//           requiredDocs: ["当前中国护照", "居住证明", "申请表", "支持文件"],
//           emergency: true,
//         }
//       ],
//       downloadForms: [
//         { name: "签证申请表", format: "PDF", size: "245KB" },
//         { name: "文件认证表", format: "PDF", size: "189KB" },
//         { name: "护照更新表", format: "PDF", size: "312KB" },
//         { name: "公证服务表", format: "PDF", size: "276KB" }
//       ]
//     }
//   }

//   const t = content[currentLanguage]

//   const services: Service[] = t.services.map(service => ({
//     ...service,
//     icon: service.title === "Visa Services" || service.title === "签证服务" ? Globe : 
//           service.title === "Document Legalization" || service.title === "文件认证" ? FileText : User,
//     contact: {
//       phone: "+256 393 000172",
//       email: "consulate_uga@126.com",
//       hours: service.emergency ? "24/7 Emergency Services Available" : "Mon-Fri: 9:00 AM - 4:00 PM"
//     }
//   }))

//   const emergencyContact = {
//     phone: "+256 393 000172",
//     email: "consulate_uga@126.com",
//     wechat: "chinaemb_ug"
//   }

//   const downloadForms: DownloadForm[] = t.downloadForms

//   return (
//     <section id="consular" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white to-blue-50/20 relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMWY1ZjkiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      
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

//         {/* Emergency Alert */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-2xl mb-8 sm:mb-12"
//         >
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
//             <div className="flex items-center gap-3 sm:gap-4 flex-1">
//               <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
//                 <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
//               </div>
//               <div className="flex-1">
//                 <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{t.emergencyTitle}</h3>
//                 <p className="opacity-90 text-xs sm:text-sm lg:text-base">
//                   {t.emergencyDescription}
//                 </p>
//               </div>
//             </div>
//             <div className="text-center lg:text-right w-full lg:w-auto">
//               <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{emergencyContact.phone}</div>
//               <div className="space-y-0.5 sm:space-y-1 text-xs sm:text-sm opacity-90">
//                 <p className="break-words">📧 {emergencyContact.email}</p>
//                 <p className="break-words">💬 WeChat: {emergencyContact.wechat}</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -4, scale: 1.01 }}
//               className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border-2 ${
//                 service.emergency ? 'border-red-200' : 'border-gray-200'
//               } hover:shadow-xl transition-all duration-500 group cursor-pointer`}
//               onClick={() => setSelectedService(selectedService === index ? null : index)}
//             >
//               {/* Service Header */}
//               <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
//                 <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 ${
//                   service.emergency ? 'bg-red-100' : 'bg-blue-100'
//                 } group-hover:scale-105 transition-transform`}>
//                   <service.icon className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ${
//                     service.emergency ? 'text-red-600' : 'text-blue-600'
//                   }`} />
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-start justify-between gap-2">
//                     <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 break-words">{service.title}</h3>
//                     {service.emergency && (
//                       <div className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-bold flex-shrink-0">
//                         {currentLanguage === 'en' ? 'EMERGENCY' : '紧急'}
//                       </div>
//                     )}
//                   </div>
//                   <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{service.description}</p>
//                 </div>
//               </div>

//               {/* Features */}
//               <div className="mb-4 sm:mb-6">
//                 <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
//                   <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
//                   {t.servicesInclude}
//                 </h4>
//                 <div className="grid grid-cols-1 xs:grid-cols-2 gap-1 sm:gap-2">
//                   {service.features.map((feature, featureIndex) => (
//                     <div key={featureIndex} className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600">
//                       <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
//                       <span className="break-words">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Quick Info */}
//               <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
//                 <div className="flex items-center justify-between text-xs sm:text-sm">
//                   <span className="text-gray-500">{t.processingTime}</span>
//                   <span className="font-semibold text-gray-900 text-right break-words">{service.processingTime}</span>
//                 </div>
//                 <div className="flex items-center justify-between text-xs sm:text-sm">
//                   <span className="text-gray-500">{t.fees}</span>
//                   <span className="font-semibold text-gray-900 text-right break-words">{service.fees}</span>
//                 </div>
//               </div>

//               {/* Expandable Details */}
//               <motion.div
//                 initial={false}
//                 animate={{ height: selectedService === index ? 'auto' : 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="overflow-hidden"
//               >
//                 <div className="border-t border-gray-200 pt-4 sm:pt-6 space-y-3 sm:space-y-4">
//                   {/* Required Documents */}
//                   <div>
//                     <h5 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm">{t.requiredDocuments}</h5>
//                     <ul className="space-y-0.5 sm:space-y-1">
//                       {service.requiredDocs.map((doc, docIndex) => (
//                         <li key={docIndex} className="text-xs text-gray-600 flex items-start gap-1 sm:gap-2">
//                           <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
//                           <span className="break-words">{doc}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Contact Information */}
//                   <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
//                     <h5 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm">{t.contactInformation}</h5>
//                     <div className="space-y-0.5 sm:space-y-1 text-xs">
//                       <p className="break-words">📞 {service.contact.phone}</p>
//                       <p className="break-words">📧 {service.contact.email}</p>
//                       <p className="break-words">🕒 {service.contact.hours}</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* CTA Button */}
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className={`w-full mt-4 sm:mt-6 py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold transition-colors flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base ${
//                   service.emergency 
//                     ? 'bg-red-600 text-white hover:bg-red-700' 
//                     : 'bg-blue-600 text-white hover:bg-blue-700'
//                 }`}
//               >
//                 {t.applyNow}
//                 <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
//               </motion.button>
//             </motion.div>
//           ))}
//         </div>

//         {/* Download Forms Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           viewport={{ once: true }}
//           className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-200"
//         >
//           <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
//             <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
//               <Download className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-600" />
//             </div>
//             <div className="flex-1">
//               <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{t.downloadTitle}</h3>
//               <p className="text-gray-600 text-sm sm:text-base">{t.downloadSubtitle}</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
//             {downloadForms.map((form, index) => (
//               <motion.div
//                 key={form.name}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -2 }}
//                 className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200 hover:border-blue-300 transition-colors group cursor-pointer"
//               >
//                 <div className="flex items-center justify-between mb-1 sm:mb-2">
//                   <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
//                   <span className="text-xs font-medium text-gray-500 bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
//                     {form.format}
//                   </span>
//                 </div>
//                 <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1 break-words">{form.name}</h4>
//                 <p className="text-xs text-gray-500">{form.size}</p>
//                 <div className="mt-2 sm:mt-3 flex items-center gap-1 sm:gap-2 text-blue-600 text-xs font-medium group-hover:text-blue-700 transition-colors">
//                   <Download className="w-3 h-3" />
//                   {t.download}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default ConsularServices
// //typescript setting 1
'use client'

import { motion } from 'framer-motion'
import { FileText, Clock, Shield, CheckCircle, ArrowRight, Globe, User, BookOpen, Download, AlertTriangle } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../Header/Header'

interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features: string[]
  processingTime: string
  fees: string
  requiredDocs: string[]
  emergency: boolean
  contact: {
    phone: string
    email: string
    hours: string
  }
}

interface DownloadForm {
  name: string
  format: string
  size: string
}

// Define the return type for useLanguage hook
interface LanguageContextType {
  currentLanguage: 'en' | 'zh'
  toggleLanguage: () => void
}

interface ServiceContent {
  title: string
  description: string
  features: string[]
  processingTime: string
  fees: string
  requiredDocs: string[]
  emergency: boolean
}

interface LanguageContent {
  sectionTitle: string
  mainHeading: string
  subtitle: string
  emergencyTitle: string
  emergencyDescription: string
  servicesInclude: string
  processingTime: string
  fees: string
  requiredDocuments: string
  contactInformation: string
  applyNow: string
  downloadTitle: string
  downloadSubtitle: string
  download: string
  services: ServiceContent[]
  downloadForms: DownloadForm[]
}

interface ContentMap {
  en: LanguageContent
  zh: LanguageContent
}

const ConsularServices = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const { currentLanguage } = useLanguage() as LanguageContextType

  // Language content
  const content: ContentMap = {
    en: {
      sectionTitle: "Consular Services",
      mainHeading: "Professional Consular Services",
      subtitle: "Comprehensive consular assistance for both Chinese citizens and international visitors. Professional, efficient, and secure services you can trust.",
      emergencyTitle: "24/7 Consular Emergency",
      emergencyDescription: "Chinese citizens in distress can contact our emergency hotline for immediate assistance",
      servicesInclude: "Services Include:",
      processingTime: "Processing Time:",
      fees: "Fees:",
      requiredDocuments: "Required Documents:",
      contactInformation: "Contact Information:",
      applyNow: "Apply Now",
      downloadTitle: "Download Application Forms",
      downloadSubtitle: "Prepare your documents in advance for faster processing",
      download: "Download",
      services: [
        {
          title: "Visa Services",
          description: "Comprehensive visa application and processing services for travel to China, including tourist, business, student, and work visas.",
          features: ["Tourist Visa (L)", "Business Visa (M)", "Student Visa (X)", "Work Visa (Z)", "Transit Visa (G)"],
          processingTime: "3-5 business days",
          fees: "From $30 to $150 depending on type",
          requiredDocs: ["Valid Passport (6+ months)", "Completed Application Form", "Passport Photo (35x45mm)", "Flight Itinerary", "Hotel Booking", "Invitation Letter if applicable"],
          emergency: false,
        },
        {
          title: "Document Legalization",
          description: "Authentication and legalization of official documents for use in China, including educational, commercial, and personal documents.",
          features: ["Degree Certificates", "Birth/Marriage Certificates", "Commercial Documents", "Power of Attorney", "Company Registration"],
          processingTime: "2-4 business days",
          fees: "$20 per document",
          requiredDocs: ["Original Document", "Passport Copy", "Completed Application Form", "Previous Authentication if required"],
          emergency: false,
        },
        {
          title: "Citizen Services",
          description: "Comprehensive support and assistance for Chinese citizens in Uganda, including passport services and emergency assistance.",
          features: ["Passport Renewal", "Emergency Travel Document", "Notary Services", "Legal Assistance", "Birth Registration"],
          processingTime: "Varies by service",
          fees: "Contact for details",
          requiredDocs: ["Current Chinese Passport", "Proof of Residence", "Application Forms", "Supporting Documents"],
          emergency: true,
        }
      ],
      downloadForms: [
        { name: "Visa Application Form", format: "PDF", size: "245KB" },
        { name: "Document Legalization Form", format: "PDF", size: "189KB" },
        { name: "Passport Renewal Form", format: "PDF", size: "312KB" },
        { name: "Notary Services Form", format: "PDF", size: "276KB" }
      ]
    },
    zh: {
      sectionTitle: "领事服务",
      mainHeading: "专业领事服务",
      subtitle: "为中国公民和国际访客提供全面的领事协助。专业、高效、安全的服务，值得信赖。",
      emergencyTitle: "24/7 领事紧急情况",
      emergencyDescription: "遇到困难的中国公民可以联系我们的紧急热线获得即时援助",
      servicesInclude: "服务包括:",
      processingTime: "处理时间:",
      fees: "费用:",
      requiredDocuments: "所需文件:",
      contactInformation: "联系信息:",
      applyNow: "立即申请",
      downloadTitle: "下载申请表格",
      downloadSubtitle: "提前准备文件以加快处理速度",
      download: "下载",
      services: [
        {
          title: "签证服务",
          description: "全面的签证申请和处理服务，包括旅游、商务、学生和工作签证。",
          features: ["旅游签证 (L)", "商务签证 (M)", "学生签证 (X)", "工作签证 (Z)", "过境签证 (G)"],
          processingTime: "3-5个工作日",
          fees: "根据类型从$30到$150",
          requiredDocs: ["有效护照(6个月以上)", "完整申请表", "护照照片(35x45mm)", "航班行程", "酒店预订", "邀请函(如适用)"],
          emergency: false,
        },
        {
          title: "文件认证",
          description: "官方文件的认证和合法化，包括教育、商业和个人文件。",
          features: ["学位证书", "出生/结婚证书", "商业文件", "授权书", "公司注册"],
          processingTime: "2-4个工作日",
          fees: "每份文件$20",
          requiredDocs: ["原始文件", "护照复印件", "完整申请表", "先前认证(如需要)"],
          emergency: false,
        },
        {
          title: "公民服务",
          description: "为在乌干达的中国公民提供全面支持和援助，包括护照服务和紧急援助。",
          features: ["护照更新", "紧急旅行证件", "公证服务", "法律协助", "出生登记"],
          processingTime: "因服务而异",
          fees: "请联系了解详情",
          requiredDocs: ["当前中国护照", "居住证明", "申请表", "支持文件"],
          emergency: true,
        }
      ],
      downloadForms: [
        { name: "签证申请表", format: "PDF", size: "245KB" },
        { name: "文件认证表", format: "PDF", size: "189KB" },
        { name: "护照更新表", format: "PDF", size: "312KB" },
        { name: "公证服务表", format: "PDF", size: "276KB" }
      ]
    }
  }

  const t = content[currentLanguage]

  const services: Service[] = t.services.map(service => ({
    ...service,
    icon: service.title === "Visa Services" || service.title === "签证服务" ? Globe : 
          service.title === "Document Legalization" || service.title === "文件认证" ? FileText : User,
    contact: {
      phone: "+256 393 000172",
      email: "consulate_uga@126.com",
      hours: service.emergency ? "24/7 Emergency Services Available" : "Mon-Fri: 9:00 AM - 4:00 PM"
    }
  }))

  const emergencyContact = {
    phone: "+256 393 000172",
    email: "consulate_uga@126.com",
    wechat: "chinaemb_ug"
  }

  const downloadForms: DownloadForm[] = t.downloadForms

  return (
    <section id="consular" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white to-blue-50/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMWY1ZjkiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      
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

        {/* Emergency Alert */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-2xl mb-8 sm:mb-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3 sm:gap-4 flex-1">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{t.emergencyTitle}</h3>
                <p className="opacity-90 text-xs sm:text-sm lg:text-base">
                  {t.emergencyDescription}
                </p>
              </div>
            </div>
            <div className="text-center lg:text-right w-full lg:w-auto">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{emergencyContact.phone}</div>
              <div className="space-y-0.5 sm:space-y-1 text-xs sm:text-sm opacity-90">
                <p className="break-words">📧 {emergencyContact.email}</p>
                <p className="break-words">💬 WeChat: {emergencyContact.wechat}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border-2 ${
                service.emergency ? 'border-red-200' : 'border-gray-200'
              } hover:shadow-xl transition-all duration-500 group cursor-pointer`}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
            >
              {/* Service Header */}
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 ${
                  service.emergency ? 'bg-red-100' : 'bg-blue-100'
                } group-hover:scale-105 transition-transform`}>
                  <service.icon className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ${
                    service.emergency ? 'text-red-600' : 'text-blue-600'
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 break-words">{service.title}</h3>
                    {service.emergency && (
                      <div className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-bold flex-shrink-0">
                        {currentLanguage === 'en' ? 'EMERGENCY' : '紧急'}
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4 sm:mb-6">
                <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                  {t.servicesInclude}
                </h4>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-1 sm:gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="break-words">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-500">{t.processingTime}</span>
                  <span className="font-semibold text-gray-900 text-right break-words">{service.processingTime}</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-500">{t.fees}</span>
                  <span className="font-semibold text-gray-900 text-right break-words">{service.fees}</span>
                </div>
              </div>

              {/* Expandable Details */}
              <motion.div
                initial={false}
                animate={{ height: selectedService === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="border-t border-gray-200 pt-4 sm:pt-6 space-y-3 sm:space-y-4">
                  {/* Required Documents */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm">{t.requiredDocuments}</h5>
                    <ul className="space-y-0.5 sm:space-y-1">
                      {service.requiredDocs.map((doc, docIndex) => (
                        <li key={docIndex} className="text-xs text-gray-600 flex items-start gap-1 sm:gap-2">
                          <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="break-words">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                    <h5 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm">{t.contactInformation}</h5>
                    <div className="space-y-0.5 sm:space-y-1 text-xs">
                      <p className="break-words">📞 {service.contact.phone}</p>
                      <p className="break-words">📧 {service.contact.email}</p>
                      <p className="break-words">🕒 {service.contact.hours}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full mt-4 sm:mt-6 py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold transition-colors flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base ${
                  service.emergency 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {t.applyNow}
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Download Forms Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-200"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <Download className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{t.downloadTitle}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{t.downloadSubtitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {downloadForms.map((form, index) => (
              <motion.div
                key={form.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200 hover:border-blue-300 transition-colors group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  <span className="text-xs font-medium text-gray-500 bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                    {form.format}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1 break-words">{form.name}</h4>
                <p className="text-xs text-gray-500">{form.size}</p>
                <div className="mt-2 sm:mt-3 flex items-center gap-1 sm:gap-2 text-blue-600 text-xs font-medium group-hover:text-blue-700 transition-colors">
                  <Download className="w-3 h-3" />
                  {t.download}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ConsularServices