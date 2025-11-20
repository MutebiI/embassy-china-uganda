
// // // 'use client'

// // // import { motion } from 'framer-motion'
// // // import { MapPin, Phone, Mail, Clock, Send, ExternalLink, Building, Users, Briefcase, Shield } from 'lucide-react'
// // // import { useState } from 'react'
// // // import { useLanguage } from '../Header/Header'

// // // interface ContactForm {
// // //   name: string
// // //   email: string
// // //   subject: string
// // //   message: string
// // //   serviceType: string
// // // }

// // // interface Department {
// // //   icon: React.ComponentType<{ className?: string }>
// // //   title: string
// // //   contacts: {
// // //     type: string
// // //     number: string
// // //     email?: string
// // //   }[]
// // // }

// // // interface GeneralInfo {
// // //   icon: React.ComponentType<{ className?: string }>
// // //   title: string
// // //   content: string
// // //   link: string | null
// // //   external: boolean
// // // }

// // // interface ServiceType {
// // //   value: string
// // //   label: string
// // // }

// // // const ContactSection = () => {
// // //   const [formData, setFormData] = useState<ContactForm>({
// // //     name: '',
// // //     email: '',
// // //     subject: '',
// // //     message: '',
// // //     serviceType: 'general'
// // //   })

// // //   const [isSubmitting, setIsSubmitting] = useState(false)
// // //   const { currentLanguage } = useLanguage()



// // //   // Language content
// // //   const content = {
// // //     en: {
// // //       sectionTitle: "Contact Embassy",
// // //       mainHeading: "Get In Touch",
// // //       subtitle: "Connect with the appropriate department for efficient and professional assistance",
// // //       departmentContacts: "Department Contacts",
// // //       digitalPlatforms: "Digital Platforms",
// // //       officialWebsites: "Official Websites",
// // //       socialMedia: "Social Media",
// // //       sendMessage: "Send Message",
// // //       responseTime: "We'll respond within 24 hours",
// // //       fullName: "Full Name *",
// // //       emailAddress: "Email Address *",
// // //       departmentService: "Department / Service Type *",
// // //       subject: "Subject *",
// // //       message: "Message *",
// // //       sending: "Sending Message...",
// // //       sendButton: "Send Message",
// // //       thankYou: "Thank you for your message. We will get back to you soon!",
// // //       departments: [
// // //         {
// // //           title: "Administration Office",
// // //           contacts: [
// // //             { type: "General", number: "+256 393 000174" }
// // //           ]
// // //         },
// // //         {
// // //           title: "Political Affairs Office",
// // //           contacts: [
// // //             { type: "Public Diplomacy", number: "+256 393 000241" },
// // //             { type: "Protocol", number: "+256 393 000171", email: "chinaemb_ug@mfa.gov.cn" },
// // //             { type: "Education", number: "+256 393 000242" }
// // //           ]
// // //         },
// // //         {
// // //           title: "Economic & Commercial Affairs",
// // //           contacts: [
// // //             { type: "Foreign Aid", number: "+256 393 000243" },
// // //             { type: "Trade & Contracting", number: "+256 393 000245" },
// // //             { type: "Investment & Business", number: "+256 393 000247" },
// // //             { type: "COVID-19 Response", number: "+256 393 000248", email: "ug@mofcom.gov.cn" }
// // //           ]
// // //         },
// // //         {
// // //           title: "Consular Affairs",
// // //           contacts: [
// // //             { type: "Visa & Authentication", number: "+256 393 000172", email: "consulate_uga@126.com" }
// // //           ]
// // //         }
// // //       ],
// // //       generalInfo: [
// // //         {
// // //           title: "Embassy Address",
// // //           content: "Plot 37, Malcolm X Avenue, Kololo, Kampala, Republic of Uganda",
// // //           link: "https://maps.google.com/?q=Plot+37+Malcolm+X+Avenue+Kololo+Kampala",
// // //           external: true
// // //         },
// // //         {
// // //           title: "General Fax",
// // //           content: "+256 414 254456",
// // //           link: null,
// // //           external: false
// // //         },
// // //         {
// // //           title: "Office Hours",
// // //           content: "Monday - Friday: 9:00 AM - 5:00 PM",
// // //           link: null,
// // //           external: false
// // //         }
// // //       ],
// // //       websites: [
// // //         { name: "Embassy Website", url: "http://ug.china-embassy.org" },
// // //         { name: "Commercial Office", url: "http://ug.mofcom.gov.cn" }
// // //       ],
// // //       socialMedia: [
// // //         { name: "WeChat", handle: "chinaemb_ug" },
// // //         { name: "Twitter", handle: "@ChineseEmb_Uga" },
// // //         { name: "Facebook", handle: "Chinese Embassy in Uganda" },
// // //         { name: "YouTube", handle: "Chinese Embassy in Uganda" }
// // //       ],
// // //       serviceTypes: [
// // //         { value: 'general', label: 'General Inquiry' },
// // //         { value: 'visa', label: 'Visa Services' },
// // //         { value: 'consular', label: 'Consular Assistance' },
// // //         { value: 'political', label: 'Political Affairs' },
// // //         { value: 'commercial', label: 'Commercial Affairs' },
// // //         { value: 'education', label: 'Education & Culture' },
// // //         { value: 'emergency', label: 'Emergency Assistance' }
// // //       ]
// // //     },
// // //     zh: {
// // //       sectionTitle: "联系使馆",
// // //       mainHeading: "取得联系",
// // //       subtitle: "联系相关部门以获得高效专业的协助",
// // //       departmentContacts: "部门联系方式",
// // //       digitalPlatforms: "数字平台",
// // //       officialWebsites: "官方网站",
// // //       socialMedia: "社交媒体",
// // //       sendMessage: "发送消息",
// // //       responseTime: "我们将在24小时内回复",
// // //       fullName: "全名 *",
// // //       emailAddress: "电子邮件地址 *",
// // //       departmentService: "部门 / 服务类型 *",
// // //       subject: "主题 *",
// // //       message: "消息 *",
// // //       sending: "发送消息中...",
// // //       sendButton: "发送消息",
// // //       thankYou: "感谢您的留言。我们会尽快回复您！",
// // //       departments: [
// // //         {
// // //           title: "行政办公室",
// // //           contacts: [
// // //             { type: "总机", number: "+256 393 000174" }
// // //           ]
// // //         },
// // //         {
// // //           title: "政治事务处",
// // //           contacts: [
// // //             { type: "公共外交", number: "+256 393 000241" },
// // //             { type: "礼宾", number: "+256 393 000171", email: "chinaemb_ug@mfa.gov.cn" },
// // //             { type: "教育", number: "+256 393 000242" }
// // //           ]
// // //         },
// // //         {
// // //           title: "经济商务处",
// // //           contacts: [
// // //             { type: "对外援助", number: "+256 393 000243" },
// // //             { type: "贸易与承包", number: "+256 393 000245" },
// // //             { type: "投资与商业", number: "+256 393 000247" },
// // //             { type: "COVID-19响应", number: "+256 393 000248", email: "ug@mofcom.gov.cn" }
// // //           ]
// // //         },
// // //         {
// // //           title: "领事处",
// // //           contacts: [
// // //             { type: "签证与认证", number: "+256 393 000172", email: "consulate_uga@126.com" }
// // //           ]
// // //         }
// // //       ],
// // //       generalInfo: [
// // //         {
// // //           title: "使馆地址",
// // //           content: "乌干达坎帕拉市科洛洛区马尔科姆X大道37号",
// // //           link: "https://maps.google.com/?q=Plot+37+Malcolm+X+Avenue+Kololo+Kampala",
// // //           external: true
// // //         },
// // //         {
// // //           title: "总传真",
// // //           content: "+256 414 254456",
// // //           link: null,
// // //           external: false
// // //         },
// // //         {
// // //           title: "办公时间",
// // //           content: "周一至周五: 上午9:00 - 下午5:00",
// // //           link: null,
// // //           external: false
// // //         }
// // //       ],
// // //       websites: [
// // //         { name: "使馆网站", url: "http://ug.china-embassy.org" },
// // //         { name: "商务处网站", url: "http://ug.mofcom.gov.cn" }
// // //       ],
// // //       socialMedia: [
// // //         { name: "微信", handle: "chinaemb_ug" },
// // //         { name: "推特", handle: "@ChineseEmb_Uga" },
// // //         { name: "脸书", handle: "Chinese Embassy in Uganda" },
// // //         { name: "YouTube", handle: "Chinese Embassy in Uganda" }
// // //       ],
// // //       serviceTypes: [
// // //         { value: 'general', label: '一般咨询' },
// // //         { value: 'visa', label: '签证服务' },
// // //         { value: 'consular', label: '领事协助' },
// // //         { value: 'political', label: '政治事务' },
// // //         { value: 'commercial', label: '商务事务' },
// // //         { value: 'education', label: '教育与文化' },
// // //         { value: 'emergency', label: '紧急协助' }
// // //       ]
// // //     }
// // //   }

// // //   const t = content[currentLanguage]

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault()
// // //     setIsSubmitting(true)
    
// // //     // Simulate form submission
// // //     await new Promise(resolve => setTimeout(resolve, 2000))
    
// // //     console.log('Form submitted:', formData)
// // //     setIsSubmitting(false)
    
// // //     // Reset form
// // //     setFormData({
// // //       name: '',
// // //       email: '',
// // //       subject: '',
// // //       message: '',
// // //       serviceType: 'general'
// // //     })
    
// // //     alert(t.thankYou)
// // //   }

// // //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
// // //     const { name, value } = e.target
// // //     setFormData(prev => ({
// // //       ...prev,
// // //       [name]: value
// // //     }))
// // //   }

// // //   const departments: Department[] = t.departments.map(dept => ({
// // //     ...dept,
// // //     icon: dept.title.includes("Administration") || dept.title.includes("行政") ? Building :
// // //           dept.title.includes("Political") || dept.title.includes("政治") ? Users :
// // //           dept.title.includes("Economic") || dept.title.includes("经济") ? Briefcase : Shield
// // //   }))

// // //   const generalInfo: GeneralInfo[] = t.generalInfo.map(info => ({
// // //     ...info,
// // //     icon: info.title.includes("Address") || info.title.includes("地址") ? MapPin :
// // //           info.title.includes("Fax") || info.title.includes("传真") ? Phone : Clock
// // //   }))

// // //   const serviceTypes: ServiceType[] = t.serviceTypes

// // //   return (
// // //     <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
// // //       <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
// // //         {/* Section Header */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.6 }}
// // //           viewport={{ once: true }}
// // //           className="text-center mb-8 sm:mb-12 lg:mb-16"
// // //         >
// // //           <motion.div
// // //             initial={{ scale: 0 }}
// // //             whileInView={{ scale: 1 }}
// // //             transition={{ delay: 0.2, type: "spring" }}
// // //             className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1 sm:px-4 sm:py-2 shadow-sm mb-3 sm:mb-4"
// // //           >
// // //             <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse"></div>
// // //             <span className="text-xs sm:text-sm font-semibold text-gray-700">{t.sectionTitle}</span>
// // //           </motion.div>
          
// // //           <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
// // //             {t.mainHeading}
// // //           </h2>
// // //           <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-2">
// // //             {t.subtitle}
// // //           </p>
// // //         </motion.div>

// // //         <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
// // //           {/* Contact Information */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: -30 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.6 }}
// // //             viewport={{ once: true }}
// // //             className="space-y-6 sm:space-y-8"
// // //           >
// // //             {/* Department Contacts */}
// // //             <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200/60">
// // //               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
// // //                 <Building className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
// // //                 {t.departmentContacts}
// // //               </h3>
              
// // //               <div className="space-y-4 sm:space-y-6">
// // //                 {departments.map((department, index) => (
// // //                   <motion.div
// // //                     key={department.title}
// // //                     initial={{ opacity: 0, y: 20 }}
// // //                     whileInView={{ opacity: 1, y: 0 }}
// // //                     transition={{ duration: 0.6, delay: index * 0.1 }}
// // //                     viewport={{ once: true }}
// // //                     className="border-l-4 border-blue-500 pl-3 sm:pl-4"
// // //                   >
// // //                     <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
// // //                       <department.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
// // //                       <h4 className="font-semibold text-gray-900 text-base sm:text-lg">{department.title}</h4>
// // //                     </div>
// // //                     <div className="space-y-1 sm:space-y-2">
// // //                       {department.contacts.map((contact, contactIndex) => (
// // //                         <div key={contactIndex} className="text-xs sm:text-sm">
// // //                           <p className="font-medium text-gray-700">{contact.type}</p>
// // //                           <div className="flex flex-col xs:flex-row xs:items-center gap-0 xs:gap-1 sm:gap-4 text-gray-600">
// // //                             <a 
// // //                               href={`tel:${contact.number.replace(/\s/g, '')}`}
// // //                               className="hover:text-blue-600 transition-colors break-words"
// // //                             >
// // //                               📞 {contact.number}
// // //                             </a>
// // //                             {contact.email && (
// // //                               <a 
// // //                                 href={`mailto:${contact.email}`}
// // //                                 className="hover:text-blue-600 transition-colors break-words text-xs"
// // //                               >
// // //                                 ✉️ {contact.email}
// // //                               </a>
// // //                             )}
// // //                           </div>
// // //                         </div>
// // //                       ))}
// // //                     </div>
// // //                   </motion.div>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* General Information */}
// // //             <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6">
// // //               {generalInfo.map((info, index) => (
// // //                 <motion.div
// // //                   key={info.title}
// // //                   initial={{ opacity: 0, y: 20 }}
// // //                   whileInView={{ opacity: 1, y: 0 }}
// // //                   transition={{ duration: 0.6, delay: index * 0.1 }}
// // //                   viewport={{ once: true }}
// // //                   className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-200/60"
// // //                 >
// // //                   <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
// // //                     <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
// // //                       <info.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
// // //                     </div>
// // //                     <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{info.title}</h4>
// // //                   </div>
// // //                   {info.link ? (
// // //                     <a 
// // //                       href={info.link}
// // //                       target={info.external ? "_blank" : "_self"}
// // //                       rel={info.external ? "noopener noreferrer" : ""}
// // //                       className="text-gray-600 hover:text-blue-600 transition-colors text-xs sm:text-sm break-words"
// // //                     >
// // //                       {info.content}
// // //                       {info.external && <ExternalLink className="w-3 h-3 inline ml-1" />}
// // //                     </a>
// // //                   ) : (
// // //                     <p className="text-gray-600 text-xs sm:text-sm break-words">{info.content}</p>
// // //                   )}
// // //                 </motion.div>
// // //               ))}
// // //             </div>

// // //             {/* Websites & Social Media */}
// // //             <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
// // //               <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">{t.digitalPlatforms}</h4>
              
// // //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
// // //                 <div>
// // //                   <h5 className="font-semibold mb-1 sm:mb-2 opacity-90 text-sm sm:text-base">{t.officialWebsites}</h5>
// // //                   <div className="space-y-1 sm:space-y-2">
// // //                     {t.websites.map((site, index) => (
// // //                       <a 
// // //                         key={index}
// // //                         href={site.url}
// // //                         target="_blank"
// // //                         rel="noopener noreferrer"
// // //                         className="block text-xs sm:text-sm opacity-90 hover:opacity-100 transition-opacity hover:underline break-words"
// // //                       >
// // //                         {site.name}
// // //                       </a>
// // //                     ))}
// // //                   </div>
// // //                 </div>
                
// // //                 <div>
// // //                   <h5 className="font-semibold mb-1 sm:mb-2 opacity-90 text-sm sm:text-base">{t.socialMedia}</h5>
// // //                   <div className="space-y-0.5 sm:space-y-1">
// // //                     {t.socialMedia.map((social, index) => (
// // //                       <p key={index} className="text-xs sm:text-sm opacity-90 break-words">
// // //                         {social.name}: <span className="font-mono text-xs">{social.handle}</span>
// // //                       </p>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </motion.div>

// // //           {/* Contact Form */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: 30 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.6 }}
// // //             viewport={{ once: true }}
// // //             className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-200/60"
// // //           >
// // //             <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
// // //               <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
// // //                 <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
// // //               </div>
// // //               <div>
// // //                 <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{t.sendMessage}</h3>
// // //                 <p className="text-gray-600 text-xs sm:text-sm">{t.responseTime}</p>
// // //               </div>
// // //             </div>
            
// // //             <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
// // //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
// // //                 <div className="space-y-1 sm:space-y-2">
// // //                   <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700">
// // //                     {t.fullName}
// // //                   </label>
// // //                   <input
// // //                     type="text"
// // //                     id="name"
// // //                     name="name"
// // //                     required
// // //                     value={formData.name}
// // //                     onChange={handleInputChange}
// // //                     className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
// // //                     placeholder={currentLanguage === 'en' ? "Your full name" : "您的全名"}
// // //                   />
// // //                 </div>
                
// // //                 <div className="space-y-1 sm:space-y-2">
// // //                   <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700">
// // //                     {t.emailAddress}
// // //                   </label>
// // //                   <input
// // //                     type="email"
// // //                     id="email"
// // //                     name="email"
// // //                     required
// // //                     value={formData.email}
// // //                     onChange={handleInputChange}
// // //                     className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
// // //                     placeholder={currentLanguage === 'en' ? "your.email@example.com" : "您的电子邮件@example.com"}
// // //                   />
// // //                 </div>
// // //               </div>

// // //               <div className="space-y-1 sm:space-y-2">
// // //                 <label htmlFor="serviceType" className="block text-xs sm:text-sm font-semibold text-gray-700">
// // //                   {t.departmentService}
// // //                 </label>
// // //                 <select
// // //                   id="serviceType"
// // //                   name="serviceType"
// // //                   required
// // //                   value={formData.serviceType}
// // //                   onChange={handleInputChange}
// // //                   className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
// // //                 >
// // //                   {serviceTypes.map(option => (
// // //                     <option key={option.value} value={option.value}>
// // //                       {option.label}
// // //                     </option>
// // //                   ))}
// // //                 </select>
// // //               </div>

// // //               <div className="space-y-1 sm:space-y-2">
// // //                 <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-700">
// // //                   {t.subject}
// // //                 </label>
// // //                 <input
// // //                   type="text"
// // //                   id="subject"
// // //                   name="subject"
// // //                   required
// // //                   value={formData.subject}
// // //                   onChange={handleInputChange}
// // //                   className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
// // //                   placeholder={currentLanguage === 'en' ? "Message subject" : "消息主题"}
// // //                 />
// // //               </div>

// // //               <div className="space-y-1 sm:space-y-2">
// // //                 <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700">
// // //                   {t.message}
// // //                 </label>
// // //                 <textarea
// // //                   id="message"
// // //                   name="message"
// // //                   required
// // //                   rows={4}
// // //                   value={formData.message}
// // //                   onChange={handleInputChange}
// // //                   className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-400 resize-vertical text-sm sm:text-base"
// // //                   placeholder={currentLanguage === 'en' ? "Please provide detailed information about your inquiry..." : "请提供有关您查询的详细信息..."}
// // //                 />
// // //               </div>

// // //               <motion.button
// // //                 type="submit"
// // //                 disabled={isSubmitting}
// // //                 whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
// // //                 whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
// // //                 className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-lg text-sm sm:text-base"
// // //               >
// // //                 {isSubmitting ? (
// // //                   <>
// // //                     <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
// // //                     {t.sending}
// // //                   </>
// // //                 ) : (
// // //                   <>
// // //                     <Send className="w-4 h-4 sm:w-5 sm:h-5" />
// // //                     {t.sendButton}
// // //                   </>
// // //                 )}
// // //               </motion.button>
// // //             </form>
// // //           </motion.div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // export default ContactSection

// // 'use client'

// // import { motion } from 'framer-motion'
// // import { MapPin, Phone, Mail, Clock, Send, ExternalLink, Building, Users, Briefcase, Shield } from 'lucide-react'
// // import { useState } from 'react'
// // import { useLanguage } from '../Header/Header'

// // interface ContactForm {
// //   name: string
// //   email: string
// //   subject: string
// //   message: string
// //   serviceType: string
// // }

// // interface Contact {
// //   type: string
// //   number: string
// //   email?: string
// // }

// // interface Department {
// //   icon: React.ComponentType<{ className?: string }>
// //   title: string
// //   contacts: Contact[]
// // }

// // interface GeneralInfo {
// //   icon: React.ComponentType<{ className?: string }>
// //   title: string
// //   content: string
// //   link: string | null
// //   external: boolean
// // }

// // interface ServiceType {
// //   value: string
// //   label: string
// // }

// // interface Website {
// //   name: string
// //   url: string
// // }

// // interface SocialMedia {
// //   name: string
// //   handle: string
// // }

// // interface DepartmentContent {
// //   title: string
// //   contacts: Contact[]
// // }

// // interface GeneralInfoContent {
// //   title: string
// //   content: string
// //   link: string | null
// //   external: boolean
// // }

// // interface LanguageContent {
// //   sectionTitle: string
// //   mainHeading: string
// //   subtitle: string
// //   departmentContacts: string
// //   digitalPlatforms: string
// //   officialWebsites: string
// //   socialMedia: string
// //   sendMessage: string
// //   responseTime: string
// //   fullName: string
// //   emailAddress: string
// //   departmentService: string
// //   subject: string
// //   message: string
// //   sending: string
// //   sendButton: string
// //   thankYou: string
// //   departments: DepartmentContent[]
// //   generalInfo: GeneralInfoContent[]
// //   websites: Website[]
// //   socialMedia: SocialMedia[]
// //   serviceTypes: ServiceType[]
// // }

// // interface ContentMap {
// //   en: LanguageContent
// //   zh: LanguageContent
// // }

// // interface LanguageContextType {
// //   currentLanguage: 'en' | 'zh'
// //   toggleLanguage: () => void
// // }

// // const ContactSection = () => {
// //   const [formData, setFormData] = useState<ContactForm>({
// //     name: '',
// //     email: '',
// //     subject: '',
// //     message: '',
// //     serviceType: 'general'
// //   })

// //   const [isSubmitting, setIsSubmitting] = useState(false)
// //   const { currentLanguage } = useLanguage() as LanguageContextType

// //   // Language content
// //   const content: ContentMap = {
// //     en: {
// //       sectionTitle: "Contact Embassy",
// //       mainHeading: "Get In Touch",
// //       subtitle: "Connect with the appropriate department for efficient and professional assistance",
// //       departmentContacts: "Department Contacts",
// //       digitalPlatforms: "Digital Platforms",
// //       officialWebsites: "Official Websites",
// //       socialMedia: "Social Media",
// //       sendMessage: "Send Message",
// //       responseTime: "We'll respond within 24 hours",
// //       fullName: "Full Name *",
// //       emailAddress: "Email Address *",
// //       departmentService: "Department / Service Type *",
// //       subject: "Subject *",
// //       message: "Message *",
// //       sending: "Sending Message...",
// //       sendButton: "Send Message",
// //       thankYou: "Thank you for your message. We will get back to you soon!",
// //       departments: [
// //         {
// //           title: "Administration Office",
// //           contacts: [
// //             { type: "General", number: "+256 393 000174" }
// //           ]
// //         },
// //         {
// //           title: "Political Affairs Office",
// //           contacts: [
// //             { type: "Public Diplomacy", number: "+256 393 000241" },
// //             { type: "Protocol", number: "+256 393 000171", email: "chinaemb_ug@mfa.gov.cn" },
// //             { type: "Education", number: "+256 393 000242" }
// //           ]
// //         },
// //         {
// //           title: "Economic & Commercial Affairs",
// //           contacts: [
// //             { type: "Foreign Aid", number: "+256 393 000243" },
// //             { type: "Trade & Contracting", number: "+256 393 000245" },
// //             { type: "Investment & Business", number: "+256 393 000247" },
// //             { type: "COVID-19 Response", number: "+256 393 000248", email: "ug@mofcom.gov.cn" }
// //           ]
// //         },
// //         {
// //           title: "Consular Affairs",
// //           contacts: [
// //             { type: "Visa & Authentication", number: "+256 393 000172", email: "consulate_uga@126.com" }
// //           ]
// //         }
// //       ],
// //       generalInfo: [
// //         {
// //           title: "Embassy Address",
// //           content: "Plot 37, Malcolm X Avenue, Kololo, Kampala, Republic of Uganda",
// //           link: "https://maps.google.com/?q=Plot+37+Malcolm+X+Avenue+Kololo+Kampala",
// //           external: true
// //         },
// //         {
// //           title: "General Fax",
// //           content: "+256 414 254456",
// //           link: null,
// //           external: false
// //         },
// //         {
// //           title: "Office Hours",
// //           content: "Monday - Friday: 9:00 AM - 5:00 PM",
// //           link: null,
// //           external: false
// //         }
// //       ],
// //       websites: [
// //         { name: "Embassy Website", url: "http://ug.china-embassy.org" },
// //         { name: "Commercial Office", url: "http://ug.mofcom.gov.cn" }
// //       ],
// //       socialMedia: [
// //         { name: "WeChat", handle: "chinaemb_ug" },
// //         { name: "Twitter", handle: "@ChineseEmb_Uga" },
// //         { name: "Facebook", handle: "Chinese Embassy in Uganda" },
// //         { name: "YouTube", handle: "Chinese Embassy in Uganda" }
// //       ],
// //       serviceTypes: [
// //         { value: 'general', label: 'General Inquiry' },
// //         { value: 'visa', label: 'Visa Services' },
// //         { value: 'consular', label: 'Consular Assistance' },
// //         { value: 'political', label: 'Political Affairs' },
// //         { value: 'commercial', label: 'Commercial Affairs' },
// //         { value: 'education', label: 'Education & Culture' },
// //         { value: 'emergency', label: 'Emergency Assistance' }
// //       ]
// //     },
// //     zh: {
// //       sectionTitle: "联系使馆",
// //       mainHeading: "取得联系",
// //       subtitle: "联系相关部门以获得高效专业的协助",
// //       departmentContacts: "部门联系方式",
// //       digitalPlatforms: "数字平台",
// //       officialWebsites: "官方网站",
// //       socialMedia: "社交媒体",
// //       sendMessage: "发送消息",
// //       responseTime: "我们将在24小时内回复",
// //       fullName: "全名 *",
// //       emailAddress: "电子邮件地址 *",
// //       departmentService: "部门 / 服务类型 *",
// //       subject: "主题 *",
// //       message: "消息 *",
// //       sending: "发送消息中...",
// //       sendButton: "发送消息",
// //       thankYou: "感谢您的留言。我们会尽快回复您！",
// //       departments: [
// //         {
// //           title: "行政办公室",
// //           contacts: [
// //             { type: "总机", number: "+256 393 000174" }
// //           ]
// //         },
// //         {
// //           title: "政治事务处",
// //           contacts: [
// //             { type: "公共外交", number: "+256 393 000241" },
// //             { type: "礼宾", number: "+256 393 000171", email: "chinaemb_ug@mfa.gov.cn" },
// //             { type: "教育", number: "+256 393 000242" }
// //           ]
// //         },
// //         {
// //           title: "经济商务处",
// //           contacts: [
// //             { type: "对外援助", number: "+256 393 000243" },
// //             { type: "贸易与承包", number: "+256 393 000245" },
// //             { type: "投资与商业", number: "+256 393 000247" },
// //             { type: "COVID-19响应", number: "+256 393 000248", email: "ug@mofcom.gov.cn" }
// //           ]
// //         },
// //         {
// //           title: "领事处",
// //           contacts: [
// //             { type: "签证与认证", number: "+256 393 000172", email: "consulate_uga@126.com" }
// //           ]
// //         }
// //       ],
// //       generalInfo: [
// //         {
// //           title: "使馆地址",
// //           content: "乌干达坎帕拉市科洛洛区马尔科姆X大道37号",
// //           link: "https://maps.google.com/?q=Plot+37+Malcolm+X+Avenue+Kololo+Kampala",
// //           external: true
// //         },
// //         {
// //           title: "总传真",
// //           content: "+256 414 254456",
// //           link: null,
// //           external: false
// //         },
// //         {
// //           title: "办公时间",
// //           content: "周一至周五: 上午9:00 - 下午5:00",
// //           link: null,
// //           external: false
// //         }
// //       ],
// //       websites: [
// //         { name: "使馆网站", url: "http://ug.china-embassy.org" },
// //         { name: "商务处网站", url: "http://ug.mofcom.gov.cn" }
// //       ],
// //       socialMedia: [
// //         { name: "微信", handle: "chinaemb_ug" },
// //         { name: "推特", handle: "@ChineseEmb_Uga" },
// //         { name: "脸书", handle: "Chinese Embassy in Uganda" },
// //         { name: "YouTube", handle: "Chinese Embassy in Uganda" }
// //       ],
// //       serviceTypes: [
// //         { value: 'general', label: '一般咨询' },
// //         { value: 'visa', label: '签证服务' },
// //         { value: 'consular', label: '领事协助' },
// //         { value: 'political', label: '政治事务' },
// //         { value: 'commercial', label: '商务事务' },
// //         { value: 'education', label: '教育与文化' },
// //         { value: 'emergency', label: '紧急协助' }
// //       ]
// //     }
// //   }

// //   const t = content[currentLanguage]

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     setIsSubmitting(true)
    
// //     // Simulate form submission
// //     await new Promise(resolve => setTimeout(resolve, 2000))
    
// //     console.log('Form submitted:', formData)
// //     setIsSubmitting(false)
    
// //     // Reset form
// //     setFormData({
// //       name: '',
// //       email: '',
// //       subject: '',
// //       message: '',
// //       serviceType: 'general'
// //     })
    
// //     alert(t.thankYou)
// //   }

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
// //     const { name, value } = e.target
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: value
// //     }))
// //   }

// //   const departments: Department[] = t.departments.map(dept => ({
// //     ...dept,
// //     icon: dept.title.includes("Administration") || dept.title.includes("行政") ? Building :
// //           dept.title.includes("Political") || dept.title.includes("政治") ? Users :
// //           dept.title.includes("Economic") || dept.title.includes("经济") ? Briefcase : Shield
// //   }))

// //   const generalInfo: GeneralInfo[] = t.generalInfo.map(info => ({
// //     ...info,
// //     icon: info.title.includes("Address") || info.title.includes("地址") ? MapPin :
// //           info.title.includes("Fax") || info.title.includes("传真") ? Phone : Clock
// //   }))

// //   const serviceTypes: ServiceType[] = t.serviceTypes

// //   return (
// //     <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
// //       <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
// //         {/* Section Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //           className="text-center mb-8 sm:mb-12 lg:mb-16"
// //         >
// //           <motion.div
// //             initial={{ scale: 0 }}
// //             whileInView={{ scale: 1 }}
// //             transition={{ delay: 0.2, type: "spring" }}
// //             className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1 sm:px-4 sm:py-2 shadow-sm mb-3 sm:mb-4"
// //           >
// //             <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse"></div>
// //             <span className="text-xs sm:text-sm font-semibold text-gray-700">{t.sectionTitle}</span>
// //           </motion.div>
          
// //           <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
// //             {t.mainHeading}
// //           </h2>
// //           <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-2">
// //             {t.subtitle}
// //           </p>
// //         </motion.div>

// //         <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
// //           {/* Contact Information */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6 }}
// //             viewport={{ once: true }}
// //             className="space-y-6 sm:space-y-8"
// //           >
// //             {/* Department Contacts */}
// //             <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200/60">
// //               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
// //                 <Building className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
// //                 {t.departmentContacts}
// //               </h3>
              
// //               <div className="space-y-4 sm:space-y-6">
// //                 {departments.map((department, index) => (
// //                   <motion.div
// //                     key={department.title}
// //                     initial={{ opacity: 0, y: 20 }}
// //                     whileInView={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.6, delay: index * 0.1 }}
// //                     viewport={{ once: true }}
// //                     className="border-l-4 border-blue-500 pl-3 sm:pl-4"
// //                   >
// //                     <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
// //                       <department.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
// //                       <h4 className="font-semibold text-gray-900 text-base sm:text-lg">{department.title}</h4>
// //                     </div>
// //                     <div className="space-y-1 sm:space-y-2">
// //                       {department.contacts.map((contact, contactIndex) => (
// //                         <div key={contactIndex} className="text-xs sm:text-sm">
// //                           <p className="font-medium text-gray-700">{contact.type}</p>
// //                           <div className="flex flex-col xs:flex-row xs:items-center gap-0 xs:gap-1 sm:gap-4 text-gray-600">
// //                             <a 
// //                               href={`tel:${contact.number.replace(/\s/g, '')}`}
// //                               className="hover:text-blue-600 transition-colors break-words"
// //                             >
// //                               📞 {contact.number}
// //                             </a>
// //                             {contact.email && (
// //                               <a 
// //                                 href={`mailto:${contact.email}`}
// //                                 className="hover:text-blue-600 transition-colors break-words text-xs"
// //                               >
// //                                 ✉️ {contact.email}
// //                               </a>
// //                             )}
// //                           </div>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* General Information */}
// //             <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6">
// //               {generalInfo.map((info, index) => (
// //                 <motion.div
// //                   key={info.title}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   transition={{ duration: 0.6, delay: index * 0.1 }}
// //                   viewport={{ once: true }}
// //                   className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-200/60"
// //                 >
// //                   <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
// //                     <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
// //                       <info.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
// //                     </div>
// //                     <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{info.title}</h4>
// //                   </div>
// //                   {info.link ? (
// //                     <a 
// //                       href={info.link}
// //                       target={info.external ? "_blank" : "_self"}
// //                       rel={info.external ? "noopener noreferrer" : ""}
// //                       className="text-gray-600 hover:text-blue-600 transition-colors text-xs sm:text-sm break-words"
// //                     >
// //                       {info.content}
// //                       {info.external && <ExternalLink className="w-3 h-3 inline ml-1" />}
// //                     </a>
// //                   ) : (
// //                     <p className="text-gray-600 text-xs sm:text-sm break-words">{info.content}</p>
// //                   )}
// //                 </motion.div>
// //               ))}
// //             </div>

// //             {/* Websites & Social Media */}
// //             <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
// //               <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">{t.digitalPlatforms}</h4>
              
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
// //                 <div>
// //                   <h5 className="font-semibold mb-1 sm:mb-2 opacity-90 text-sm sm:text-base">{t.officialWebsites}</h5>
// //                   <div className="space-y-1 sm:space-y-2">
// //                     {t.websites.map((site, index) => (
// //                       <a 
// //                         key={index}
// //                         href={site.url}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                         className="block text-xs sm:text-sm opacity-90 hover:opacity-100 transition-opacity hover:underline break-words"
// //                       >
// //                         {site.name}
// //                       </a>
// //                     ))}
// //                   </div>
// //                 </div>
                
// //                 <div>
// //                   <h5 className="font-semibold mb-1 sm:mb-2 opacity-90 text-sm sm:text-base">{t.socialMedia}</h5>
// //                   <div className="space-y-0.5 sm:space-y-1">
// //                     {t.socialMedia.map((social, index) => (
// //                       <p key={index} className="text-xs sm:text-sm opacity-90 break-words">
// //                         {social.name}: <span className="font-mono text-xs">{social.handle}</span>
// //                       </p>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </motion.div>

// //           {/* Contact Form */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6 }}
// //             viewport={{ once: true }}
// //             className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-200/60"
// //           >
// //             <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
// //               <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
// //                 <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
// //               </div>
// //               <div>
// //                 <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{t.sendMessage}</h3>
// //                 <p className="text-gray-600 text-xs sm:text-sm">{t.responseTime}</p>
// //               </div>
// //             </div>
            
// //             <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
// //                 <div className="space-y-1 sm:space-y-2">
// //                   <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700">
// //                     {t.fullName}
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="name"
// //                     name="name"
// //                     required
// //                     value={formData.name}
// //                     onChange={handleInputChange}
// //                     className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
// //                     placeholder={currentLanguage === 'en' ? "Your full name" : "您的全名"}
// //                   />
// //                 </div>
                
// //                 <div className="space-y-1 sm:space-y-2">
// //                   <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700">
// //                     {t.emailAddress}
// //                   </label>
// //                   <input
// //                     type="email"
// //                     id="email"
// //                     name="email"
// //                     required
// //                     value={formData.email}
// //                     onChange={handleInputChange}
// //                     className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
// //                     placeholder={currentLanguage === 'en' ? "your.email@example.com" : "您的电子邮件@example.com"}
// //                   />
// //                 </div>
// //               </div>

// //               <div className="space-y-1 sm:space-y-2">
// //                 <label htmlFor="serviceType" className="block text-xs sm:text-sm font-semibold text-gray-700">
// //                   {t.departmentService}
// //                 </label>
// //                 <select
// //                   id="serviceType"
// //                   name="serviceType"
// //                   required
// //                   value={formData.serviceType}
// //                   onChange={handleInputChange}
// //                   className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
// //                 >
// //                   {serviceTypes.map(option => (
// //                     <option key={option.value} value={option.value}>
// //                       {option.label}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>

// //               <div className="space-y-1 sm:space-y-2">
// //                 <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-700">
// //                   {t.subject}
// //                 </label>
// //                 <input
// //                   type="text"
// //                   id="subject"
// //                   name="subject"
// //                   required
// //                   value={formData.subject}
// //                   onChange={handleInputChange}
// //                   className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
// //                   placeholder={currentLanguage === 'en' ? "Message subject" : "消息主题"}
// //                 />
// //               </div>

// //               <div className="space-y-1 sm:space-y-2">
// //                 <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700">
// //                   {t.message}
// //                 </label>
// //                 <textarea
// //                   id="message"
// //                   name="message"
// //                   required
// //                   rows={4}
// //                   value={formData.message}
// //                   onChange={handleInputChange}
// //                   className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-400 resize-vertical text-sm sm:text-base"
// //                   placeholder={currentLanguage === 'en' ? "Please provide detailed information about your inquiry..." : "请提供有关您查询的详细信息..."}
// //                 />
// //               </div>

// //               <motion.button
// //                 type="submit"
// //                 disabled={isSubmitting}
// //                 whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
// //                 whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
// //                 className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-lg text-sm sm:text-base"
// //               >
// //                 {isSubmitting ? (
// //                   <>
// //                     <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
// //                     {t.sending}
// //                   </>
// //                 ) : (
// //                   <>
// //                     <Send className="w-4 h-4 sm:w-5 sm:h-5" />
// //                     {t.sendButton}
// //                   </>
// //                 )}
// //               </motion.button>
// //             </form>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default ContactSection

// 'use client'

// import { motion } from 'framer-motion'
// import { MapPin, Phone, Mail, Clock, Send, ExternalLink, Building, Users, Briefcase, Shield } from 'lucide-react'
// import { useState } from 'react'
// import { useLanguage } from '../Header/Header'

// interface ContactForm {
//   name: string
//   email: string
//   subject: string
//   message: string
//   serviceType: string
// }

// interface Contact {
//   type: string
//   number: string
//   email?: string
// }

// interface Department {
//   icon: React.ComponentType<{ className?: string }>
//   title: string
//   contacts: Contact[]
// }

// interface GeneralInfo {
//   icon: React.ComponentType<{ className?: string }>
//   title: string
//   content: string
//   link: string | null
//   external: boolean
// }

// interface ServiceType {
//   value: string
//   label: string
// }

// interface Website {
//   name: string
//   url: string
// }

// interface SocialMedia {
//   name: string
//   handle: string
// }

// interface DepartmentContent {
//   title: string
//   contacts: Contact[]
// }

// interface GeneralInfoContent {
//   title: string
//   content: string
//   link: string | null
//   external: boolean
// }

// interface LanguageContent {
//   sectionTitle: string
//   mainHeading: string
//   subtitle: string
//   departmentContacts: string
//   digitalPlatforms: string
//   officialWebsites: string
//   socialMedia: string
//   sendMessage: string
//   responseTime: string
//   fullName: string
//   emailAddress: string
//   departmentService: string
//   subject: string
//   message: string
//   sending: string
//   sendButton: string
//   thankYou: string
//   departments: DepartmentContent[]
//   generalInfo: GeneralInfoContent[]
//   websites: Website[]
//   socialMediaList: SocialMedia[]  // Changed from socialMedia to socialMediaList
//   serviceTypes: ServiceType[]
// }

// interface ContentMap {
//   en: LanguageContent
//   zh: LanguageContent
// }

// interface LanguageContextType {
//   currentLanguage: 'en' | 'zh'
//   toggleLanguage: () => void
// }

// const ContactSection = () => {
//   const [formData, setFormData] = useState<ContactForm>({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//     serviceType: 'general'
//   })

//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const { currentLanguage } = useLanguage() as LanguageContextType

//   // Language content
//   const content: ContentMap = {
//     en: {
//       sectionTitle: "Contact Embassy",
//       mainHeading: "Get In Touch",
//       subtitle: "Connect with the appropriate department for efficient and professional assistance",
//       departmentContacts: "Department Contacts",
//       digitalPlatforms: "Digital Platforms",
//       officialWebsites: "Official Websites",
//       socialMedia: "Social Media",
//       sendMessage: "Send Message",
//       responseTime: "We'll respond within 24 hours",
//       fullName: "Full Name *",
//       emailAddress: "Email Address *",
//       departmentService: "Department / Service Type *",
//       subject: "Subject *",
//       message: "Message *",
//       sending: "Sending Message...",
//       sendButton: "Send Message",
//       thankYou: "Thank you for your message. We will get back to you soon!",
//       departments: [
//         {
//           title: "Administration Office",
//           contacts: [
//             { type: "General", number: "+256 393 000174" }
//           ]
//         },
//         {
//           title: "Political Affairs Office",
//           contacts: [
//             { type: "Public Diplomacy", number: "+256 393 000241" },
//             { type: "Protocol", number: "+256 393 000171", email: "chinaemb_ug@mfa.gov.cn" },
//             { type: "Education", number: "+256 393 000242" }
//           ]
//         },
//         {
//           title: "Economic & Commercial Affairs",
//           contacts: [
//             { type: "Foreign Aid", number: "+256 393 000243" },
//             { type: "Trade & Contracting", number: "+256 393 000245" },
//             { type: "Investment & Business", number: "+256 393 000247" },
//             { type: "COVID-19 Response", number: "+256 393 000248", email: "ug@mofcom.gov.cn" }
//           ]
//         },
//         {
//           title: "Consular Affairs",
//           contacts: [
//             { type: "Visa & Authentication", number: "+256 393 000172", email: "consulate_uga@126.com" }
//           ]
//         }
//       ],
//       generalInfo: [
//         {
//           title: "Embassy Address",
//           content: "Plot 37, Malcolm X Avenue, Kololo, Kampala, Republic of Uganda",
//           link: "https://maps.google.com/?q=Plot+37+Malcolm+X+Avenue+Kololo+Kampala",
//           external: true
//         },
//         {
//           title: "General Fax",
//           content: "+256 414 254456",
//           link: null,
//           external: false
//         },
//         {
//           title: "Office Hours",
//           content: "Monday - Friday: 9:00 AM - 5:00 PM",
//           link: null,
//           external: false
//         }
//       ],
//       websites: [
//         { name: "Embassy Website", url: "http://ug.china-embassy.org" },
//         { name: "Commercial Office", url: "http://ug.mofcom.gov.cn" }
//       ],
//       socialMediaList: [  // Changed from socialMedia to socialMediaList
//         { name: "WeChat", handle: "chinaemb_ug" },
//         { name: "Twitter", handle: "@ChineseEmb_Uga" },
//         { name: "Facebook", handle: "Chinese Embassy in Uganda" },
//         { name: "YouTube", handle: "Chinese Embassy in Uganda" }
//       ],
//       serviceTypes: [
//         { value: 'general', label: 'General Inquiry' },
//         { value: 'visa', label: 'Visa Services' },
//         { value: 'consular', label: 'Consular Assistance' },
//         { value: 'political', label: 'Political Affairs' },
//         { value: 'commercial', label: 'Commercial Affairs' },
//         { value: 'education', label: 'Education & Culture' },
//         { value: 'emergency', label: 'Emergency Assistance' }
//       ]
//     },
//     zh: {
//       sectionTitle: "联系使馆",
//       mainHeading: "取得联系",
//       subtitle: "联系相关部门以获得高效专业的协助",
//       departmentContacts: "部门联系方式",
//       digitalPlatforms: "数字平台",
//       officialWebsites: "官方网站",
//       socialMedia: "社交媒体",
//       sendMessage: "发送消息",
//       responseTime: "我们将在24小时内回复",
//       fullName: "全名 *",
//       emailAddress: "电子邮件地址 *",
//       departmentService: "部门 / 服务类型 *",
//       subject: "主题 *",
//       message: "消息 *",
//       sending: "发送消息中...",
//       sendButton: "发送消息",
//       thankYou: "感谢您的留言。我们会尽快回复您！",
//       departments: [
//         {
//           title: "行政办公室",
//           contacts: [
//             { type: "总机", number: "+256 393 000174" }
//           ]
//         },
//         {
//           title: "政治事务处",
//           contacts: [
//             { type: "公共外交", number: "+256 393 000241" },
//             { type: "礼宾", number: "+256 393 000171", email: "chinaemb_ug@mfa.gov.cn" },
//             { type: "教育", number: "+256 393 000242" }
//           ]
//         },
//         {
//           title: "经济商务处",
//           contacts: [
//             { type: "对外援助", number: "+256 393 000243" },
//             { type: "贸易与承包", number: "+256 393 000245" },
//             { type: "投资与商业", number: "+256 393 000247" },
//             { type: "COVID-19响应", number: "+256 393 000248", email: "ug@mofcom.gov.cn" }
//           ]
//         },
//         {
//           title: "领事处",
//           contacts: [
//             { type: "签证与认证", number: "+256 393 000172", email: "consulate_uga@126.com" }
//           ]
//         }
//       ],
//       generalInfo: [
//         {
//           title: "使馆地址",
//           content: "乌干达坎帕拉市科洛洛区马尔科姆X大道37号",
//           link: "https://maps.google.com/?q=Plot+37+Malcolm+X+Avenue+Kololo+Kampala",
//           external: true
//         },
//         {
//           title: "总传真",
//           content: "+256 414 254456",
//           link: null,
//           external: false
//         },
//         {
//           title: "办公时间",
//           content: "周一至周五: 上午9:00 - 下午5:00",
//           link: null,
//           external: false
//         }
//       ],
//       websites: [
//         { name: "使馆网站", url: "http://ug.china-embassy.org" },
//         { name: "商务处网站", url: "http://ug.mofcom.gov.cn" }
//       ],
//       socialMediaList: [  // Changed from socialMedia to socialMediaList
//         { name: "微信", handle: "chinaemb_ug" },
//         { name: "推特", handle: "@ChineseEmb_Uga" },
//         { name: "脸书", handle: "Chinese Embassy in Uganda" },
//         { name: "YouTube", handle: "Chinese Embassy in Uganda" }
//       ],
//       serviceTypes: [
//         { value: 'general', label: '一般咨询' },
//         { value: 'visa', label: '签证服务' },
//         { value: 'consular', label: '领事协助' },
//         { value: 'political', label: '政治事务' },
//         { value: 'commercial', label: '商务事务' },
//         { value: 'education', label: '教育与文化' },
//         { value: 'emergency', label: '紧急协助' }
//       ]
//     }
//   }

//   const t = content[currentLanguage]

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
    
//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 2000))
    
//     console.log('Form submitted:', formData)
//     setIsSubmitting(false)
    
//     // Reset form
//     setFormData({
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//       serviceType: 'general'
//     })
    
//     alert(t.thankYou)
//   }

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const departments: Department[] = t.departments.map(dept => ({
//     ...dept,
//     icon: dept.title.includes("Administration") || dept.title.includes("行政") ? Building :
//           dept.title.includes("Political") || dept.title.includes("政治") ? Users :
//           dept.title.includes("Economic") || dept.title.includes("经济") ? Briefcase : Shield
//   }))

//   const generalInfo: GeneralInfo[] = t.generalInfo.map(info => ({
//     ...info,
//     icon: info.title.includes("Address") || info.title.includes("地址") ? MapPin :
//           info.title.includes("Fax") || info.title.includes("传真") ? Phone : Clock
//   }))

//   const serviceTypes: ServiceType[] = t.serviceTypes

//   return (
//     <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
//       <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
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
//             <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse"></div>
//             <span className="text-xs sm:text-sm font-semibold text-gray-700">{t.sectionTitle}</span>
//           </motion.div>
          
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
//             {t.mainHeading}
//           </h2>
//           <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-2">
//             {t.subtitle}
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="space-y-6 sm:space-y-8"
//           >
//             {/* Department Contacts */}
//             <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200/60">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
//                 <Building className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
//                 {t.departmentContacts}
//               </h3>
              
//               <div className="space-y-4 sm:space-y-6">
//                 {departments.map((department, index) => (
//                   <motion.div
//                     key={department.title}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     className="border-l-4 border-blue-500 pl-3 sm:pl-4"
//                   >
//                     <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
//                       <department.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
//                       <h4 className="font-semibold text-gray-900 text-base sm:text-lg">{department.title}</h4>
//                     </div>
//                     <div className="space-y-1 sm:space-y-2">
//                       {department.contacts.map((contact, contactIndex) => (
//                         <div key={contactIndex} className="text-xs sm:text-sm">
//                           <p className="font-medium text-gray-700">{contact.type}</p>
//                           <div className="flex flex-col xs:flex-row xs:items-center gap-0 xs:gap-1 sm:gap-4 text-gray-600">
//                             <a 
//                               href={`tel:${contact.number.replace(/\s/g, '')}`}
//                               className="hover:text-blue-600 transition-colors break-words"
//                             >
//                               📞 {contact.number}
//                             </a>
//                             {contact.email && (
//                               <a 
//                                 href={`mailto:${contact.email}`}
//                                 className="hover:text-blue-600 transition-colors break-words text-xs"
//                               >
//                                 ✉️ {contact.email}
//                               </a>
//                             )}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* General Information */}
//             <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6">
//               {generalInfo.map((info, index) => (
//                 <motion.div
//                   key={info.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-200/60"
//                 >
//                   <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
//                     <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
//                       <info.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
//                     </div>
//                     <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{info.title}</h4>
//                   </div>
//                   {info.link ? (
//                     <a 
//                       href={info.link}
//                       target={info.external ? "_blank" : "_self"}
//                       rel={info.external ? "noopener noreferrer" : ""}
//                       className="text-gray-600 hover:text-blue-600 transition-colors text-xs sm:text-sm break-words"
//                     >
//                       {info.content}
//                       {info.external && <ExternalLink className="w-3 h-3 inline ml-1" />}
//                     </a>
//                   ) : (
//                     <p className="text-gray-600 text-xs sm:text-sm break-words">{info.content}</p>
//                   )}
//                 </motion.div>
//               ))}
//             </div>

//             {/* Websites & Social Media */}
//             <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
//               <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">{t.digitalPlatforms}</h4>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//                 <div>
//                   <h5 className="font-semibold mb-1 sm:mb-2 opacity-90 text-sm sm:text-base">{t.officialWebsites}</h5>
//                   <div className="space-y-1 sm:space-y-2">
//                     {t.websites.map((site, index) => (
//                       <a 
//                         key={index}
//                         href={site.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="block text-xs sm:text-sm opacity-90 hover:opacity-100 transition-opacity hover:underline break-words"
//                       >
//                         {site.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
                
//                 <div>
//                   <h5 className="font-semibold mb-1 sm:mb-2 opacity-90 text-sm sm:text-base">{t.socialMedia}</h5>
//                   <div className="space-y-0.5 sm:space-y-1">
//                     {t.socialMediaList.map((social, index) => (  // Changed from t.socialMedia to t.socialMediaList
//                       <p key={index} className="text-xs sm:text-sm opacity-90 break-words">
//                         {social.name}: <span className="font-mono text-xs">{social.handle}</span>
//                       </p>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-200/60"
//           >
//             <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
//               <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
//                 <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
//               </div>
//               <div>
//                 <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{t.sendMessage}</h3>
//                 <p className="text-gray-600 text-xs sm:text-sm">{t.responseTime}</p>
//               </div>
//             </div>
            
//             <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//                 <div className="space-y-1 sm:space-y-2">
//                   <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700">
//                     {t.fullName}
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
//                     placeholder={currentLanguage === 'en' ? "Your full name" : "您的全名"}
//                   />
//                 </div>
                
//                 <div className="space-y-1 sm:space-y-2">
//                   <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700">
//                     {t.emailAddress}
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
//                     placeholder={currentLanguage === 'en' ? "your.email@example.com" : "您的电子邮件@example.com"}
//                   />
//                 </div>
//               </div>

//               <div className="space-y-1 sm:space-y-2">
//                 <label htmlFor="serviceType" className="block text-xs sm:text-sm font-semibold text-gray-700">
//                   {t.departmentService}
//                 </label>
//                 <select
//                   id="serviceType"
//                   name="serviceType"
//                   required
//                   value={formData.serviceType}
//                   onChange={handleInputChange}
//                   className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
//                 >
//                   {serviceTypes.map(option => (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="space-y-1 sm:space-y-2">
//                 <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-700">
//                   {t.subject}
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   required
//                   value={formData.subject}
//                   onChange={handleInputChange}
//                   className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
//                   placeholder={currentLanguage === 'en' ? "Message subject" : "消息主题"}
//                 />
//               </div>

//               <div className="space-y-1 sm:space-y-2">
//                 <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700">
//                   {t.message}
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   rows={4}
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-400 resize-vertical text-sm sm:text-base"
//                   placeholder={currentLanguage === 'en' ? "Please provide detailed information about your inquiry..." : "请提供有关您查询的详细信息..."}
//                 />
//               </div>

//               <motion.button
//                 type="submit"
//                 disabled={isSubmitting}
//                 whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
//                 whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
//                 className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-lg text-sm sm:text-base"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                     {t.sending}
//                   </>
//                 ) : (
//                   <>
//                     <Send className="w-4 h-4 sm:w-5 sm:h-5" />
//                     {t.sendButton}
//                   </>
//                 )}
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ContactSection

'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, ExternalLink, Building, Users, Briefcase, Shield } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../Header/Header'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  serviceType: string
}

interface Contact {
  type: string
  number: string
  email?: string
}

interface Department {
  icon: React.ComponentType<{ className?: string }>
  title: string
  contacts: Contact[]
}

interface GeneralInfo {
  icon: React.ComponentType<{ className?: string }>
  title: string
  content: string
  link: string | null
  external: boolean
}

interface ServiceType {
  value: string
  label: string
}

interface Website {
  name: string
  url: string
}

interface SocialMedia {
  name: string
  handle: string
}

interface DepartmentContent {
  title: string
  contacts: Contact[]
}

interface GeneralInfoContent {
  title: string
  content: string
  link: string | null
  external: boolean
}

interface LanguageContent {
  sectionTitle: string
  mainHeading: string
  subtitle: string
  departmentContacts: string
  digitalPlatforms: string
  officialWebsites: string
  socialMedia: string
  sendMessage: string
  responseTime: string
  fullName: string
  emailAddress: string
  departmentService: string
  subject: string
  message: string
  sending: string
  sendButton: string
  thankYou: string
  departments: DepartmentContent[]
  generalInfo: GeneralInfoContent[]
  websites: Website[]
  socialMediaList: SocialMedia[]
  serviceTypes: ServiceType[]
}

interface ContentMap {
  en: LanguageContent
  zh: LanguageContent
}

interface LanguageContextType {
  currentLanguage: 'en' | 'zh'
  toggleLanguage: () => void
}

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
    serviceType: 'general'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const { currentLanguage } = useLanguage() as LanguageContextType

  // Language content
  const content: ContentMap = {
    en: {
      sectionTitle: "Contact Embassy",
      mainHeading: "Get In Touch",
      subtitle: "Connect with the appropriate department for efficient and professional assistance",
      departmentContacts: "Department Contacts",
      digitalPlatforms: "Digital Platforms",
      officialWebsites: "Official Websites",
      socialMedia: "Social Media",
      sendMessage: "Send Message",
      responseTime: "We'll respond within 24 hours",
      fullName: "Full Name *",
      emailAddress: "Email Address *",
      departmentService: "Department / Service Type *",
      subject: "Subject *",
      message: "Message *",
      sending: "Sending Message...",
      sendButton: "Send Message",
      thankYou: "Thank you for your message. We will get back to you soon!",
      departments: [
        {
          title: "Administration Office",
          contacts: [
            { type: "General", number: "+256 393 000174" }
          ]
        },
        {
          title: "Political Affairs Office",
          contacts: [
            { type: "Public Diplomacy", number: "+256 393 000241" },
            { type: "Protocol", number: "+256 393 000171", email: "chinaemb_ug@mfa.gov.cn" },
            { type: "Education", number: "+256 393 000242" }
          ]
        },
        {
          title: "Economic & Commercial Affairs",
          contacts: [
            { type: "Foreign Aid", number: "+256 393 000243" },
            { type: "Trade & Contracting", number: "+256 393 000245" },
            { type: "Investment & Business", number: "+256 393 000247" },
            { type: "COVID-19 Response", number: "+256 393 000248", email: "ug@mofcom.gov.cn" }
          ]
        },
        {
          title: "Consular Affairs",
          contacts: [
            { type: "Visa & Authentication", number: "+256 393 000172", email: "consulate_uga@126.com" }
          ]
        }
      ],
      generalInfo: [
        {
          title: "Embassy Address",
          content: "Plot 37, Malcolm X Avenue, Kololo, Kampala, Republic of Uganda",
          link: "https://maps.google.com/?q=Plot+37+Malcolm+X+Avenue+Kololo+Kampala",
          external: true
        },
        {
          title: "General Fax",
          content: "+256 414 254456",
          link: null,
          external: false
        },
        {
          title: "Office Hours",
          content: "Monday - Friday: 9:00 AM - 5:00 PM",
          link: null,
          external: false
        }
      ],
      websites: [
        { name: "Embassy Website", url: "http://ug.china-embassy.org" },
        { name: "Commercial Office", url: "http://ug.mofcom.gov.cn" }
      ],
      socialMediaList: [
        { name: "WeChat", handle: "chinaemb_ug" },
        { name: "Twitter", handle: "@ChineseEmb_Uga" },
        { name: "Facebook", handle: "Chinese Embassy in Uganda" },
        { name: "YouTube", handle: "Chinese Embassy in Uganda" }
      ],
      serviceTypes: [
        { value: 'general', label: 'General Inquiry' },
        { value: 'visa', label: 'Visa Services' },
        { value: 'consular', label: 'Consular Assistance' },
        { value: 'political', label: 'Political Affairs' },
        { value: 'commercial', label: 'Commercial Affairs' },
        { value: 'education', label: 'Education & Culture' },
        { value: 'emergency', label: 'Emergency Assistance' }
      ]
    },
    zh: {
      sectionTitle: "联系使馆",
      mainHeading: "取得联系",
      subtitle: "联系相关部门以获得高效专业的协助",
      departmentContacts: "部门联系方式",
      digitalPlatforms: "数字平台",
      officialWebsites: "官方网站",
      socialMedia: "社交媒体",
      sendMessage: "发送消息",
      responseTime: "我们将在24小时内回复",
      fullName: "全名 *",
      emailAddress: "电子邮件地址 *",
      departmentService: "部门 / 服务类型 *",
      subject: "主题 *",
      message: "消息 *",
      sending: "发送消息中...",
      sendButton: "发送消息",
      thankYou: "感谢您的留言。我们会尽快回复您！",
      departments: [
        {
          title: "行政办公室",
          contacts: [
            { type: "总机", number: "+256 393 000174" }
          ]
        },
        {
          title: "政治事务处",
          contacts: [
            { type: "公共外交", number: "+256 393 000241" },
            { type: "礼宾", number: "+256 393 000171", email: "chinaemb_ug@mfa.gov.cn" },
            { type: "教育", number: "+256 393 000242" }
          ]
        },
        {
          title: "经济商务处",
          contacts: [
            { type: "对外援助", number: "+256 393 000243" },
            { type: "贸易与承包", number: "+256 393 000245" },
            { type: "投资与商业", number: "+256 393 000247" },
            { type: "COVID-19响应", number: "+256 393 000248", email: "ug@mofcom.gov.cn" }
          ]
        },
        {
          title: "领事处",
          contacts: [
            { type: "签证与认证", number: "+256 393 000172", email: "consulate_uga@126.com" }
          ]
        }
      ],
      generalInfo: [
        {
          title: "使馆地址",
          content: "乌干达坎帕拉市科洛洛区马尔科姆X大道37号",
          link: "https://maps.google.com/?q=Plot+37+Malcolm+X+Avenue+Kololo+Kampala",
          external: true
        },
        {
          title: "总传真",
          content: "+256 414 254456",
          link: null,
          external: false
        },
        {
          title: "办公时间",
          content: "周一至周五: 上午9:00 - 下午5:00",
          link: null,
          external: false
        }
      ],
      websites: [
        { name: "使馆网站", url: "http://ug.china-embassy.org" },
        { name: "商务处网站", url: "http://ug.mofcom.gov.cn" }
      ],
      socialMediaList: [
        { name: "微信", handle: "chinaemb_ug" },
        { name: "推特", handle: "@ChineseEmb_Uga" },
        { name: "脸书", handle: "Chinese Embassy in Uganda" },
        { name: "YouTube", handle: "Chinese Embassy in Uganda" }
      ],
      serviceTypes: [
        { value: 'general', label: '一般咨询' },
        { value: 'visa', label: '签证服务' },
        { value: 'consular', label: '领事协助' },
        { value: 'political', label: '政治事务' },
        { value: 'commercial', label: '商务事务' },
        { value: 'education', label: '教育与文化' },
        { value: 'emergency', label: '紧急协助' }
      ]
    }
  }

  const t = content[currentLanguage]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      serviceType: 'general'
    })
    
    alert(t.thankYou)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const departments: Department[] = t.departments.map(dept => ({
    ...dept,
    icon: dept.title.includes("Administration") || dept.title.includes("行政") ? Building :
          dept.title.includes("Political") || dept.title.includes("政治") ? Users :
          dept.title.includes("Economic") || dept.title.includes("经济") ? Briefcase : Shield
  }))

  const generalInfo: GeneralInfo[] = t.generalInfo.map(info => ({
    ...info,
    icon: info.title.includes("Address") || info.title.includes("地址") ? MapPin :
          info.title.includes("Fax") || info.title.includes("传真") ? Phone : Clock
  }))

  const serviceTypes: ServiceType[] = t.serviceTypes

  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-10 lg:mb-12 w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1 sm:px-4 sm:py-2 shadow-sm mb-2 sm:mb-3"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700">{t.sectionTitle}</span>
          </motion.div>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 px-2">
            {t.mainHeading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-2">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 w-full"
          >
            {/* Department Contacts */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-200/60 w-full">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                <Building className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                {t.departmentContacts}
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {departments.map((department, index) => (
                  <motion.div
                    key={department.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-2 sm:border-l-4 border-blue-500 pl-2 sm:pl-3"
                  >
                    <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <department.icon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{department.title}</h4>
                    </div>
                    <div className="space-y-1">
                      {department.contacts.map((contact, contactIndex) => (
                        <div key={contactIndex} className="text-xs">
                          <p className="font-medium text-gray-700">{contact.type}</p>
                          <div className="flex flex-col gap-0.5 text-gray-600">
                            <a 
                              href={`tel:${contact.number.replace(/\s/g, '')}`}
                              className="hover:text-blue-600 transition-colors break-all text-xs"
                            >
                              📞 {contact.number}
                            </a>
                            {contact.email && (
                              <a 
                                href={`mailto:${contact.email}`}
                                className="hover:text-blue-600 transition-colors break-all text-xs"
                              >
                                ✉️ {contact.email}
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* General Information */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {generalInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200/60 w-full"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{info.title}</h4>
                  </div>
                  {info.link ? (
                    <a 
                      href={info.link}
                      target={info.external ? "_blank" : "_self"}
                      rel={info.external ? "noopener noreferrer" : ""}
                      className="text-gray-600 hover:text-blue-600 transition-colors text-xs sm:text-sm break-words block"
                    >
                      {info.content}
                      {info.external && <ExternalLink className="w-2.5 h-2.5 inline ml-1" />}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-xs sm:text-sm break-words">{info.content}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Websites & Social Media */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg sm:rounded-xl p-3 sm:p-4 text-white w-full">
              <h4 className="font-bold text-sm sm:text-base mb-2 sm:mb-3">{t.digitalPlatforms}</h4>
              
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                <div>
                  <h5 className="font-semibold mb-1 opacity-90 text-xs sm:text-sm">{t.officialWebsites}</h5>
                  <div className="space-y-1">
                    {t.websites.map((site, index) => (
                      <a 
                        key={index}
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-xs opacity-90 hover:opacity-100 transition-opacity hover:underline break-all"
                      >
                        {site.name}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-1 opacity-90 text-xs sm:text-sm">{t.socialMedia}</h5>
                  <div className="space-y-0.5">
                    {t.socialMediaList.map((social, index) => (
                      <p key={index} className="text-xs opacity-90 break-all">
                        {social.name}: <span className="font-mono text-xs">{social.handle}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 shadow-xl border border-gray-200/60 w-full"
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Send className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{t.sendMessage}</h3>
                <p className="text-gray-600 text-xs">{t.responseTime}</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700">
                    {t.fullName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-400 text-sm"
                    placeholder={currentLanguage === 'en' ? "Your full name" : "您的全名"}
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700">
                    {t.emailAddress}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-400 text-sm"
                    placeholder={currentLanguage === 'en' ? "your.email@example.com" : "您的电子邮件@example.com"}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="serviceType" className="block text-xs sm:text-sm font-semibold text-gray-700">
                  {t.departmentService}
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm"
                >
                  {serviceTypes.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-700">
                  {t.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-400 text-sm"
                  placeholder={currentLanguage === 'en' ? "Message subject" : "消息主题"}
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700">
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-400 resize-vertical text-sm"
                  placeholder={currentLanguage === 'en' ? "Please provide detailed information about your inquiry..." : "请提供有关您查询的详细信息..."}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 sm:py-3 px-4 rounded-lg font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 shadow-md text-sm"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {t.sending}
                  </>
                ) : (
                  <>
                    <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                    {t.sendButton}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection