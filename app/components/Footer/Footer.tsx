
'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Globe, Shield } from 'lucide-react'
import { useLanguage } from '../Header/Header'
const currentYear = new Date().getFullYear()

// Define TypeScript interfaces for our content structure
interface ContactInfo {
  address: string;
  phone: string;
  emergency: string;
  email: string;
  fax: string;
}


interface OfficeHours {
  weekdays: string;
  weekend: string;
  emergency: string;
  closed: string;
}

interface QuickLink {
  name: string;
  href: string;
}

interface FooterSections {
  contact: string;
  hours: string;
  services: string;
  about: string;
  quickLinks: string;
}

interface FooterContent {
  sections: FooterSections;
  contactInfo: ContactInfo;
  officeHours: OfficeHours;
  services: string[];
  quickLinks: QuickLink[];
  aboutText: string;
  emergencyNotice: string;
  copyright: string;
  privacyPolicy: string;
  termsOfUse: string;
  sitemap: string;
  secureChannel: string;
}

interface FooterContentMap {
  en: FooterContent;
  zh: FooterContent;
}

// Define the return type for useLanguage hook
interface LanguageContextType {
  currentLanguage: 'en' | 'zh';
  toggleLanguage: () => void;
}

const Footer = () => {
  const { currentLanguage } = useLanguage() as LanguageContextType

  // Language content - following the same pattern as Header
  const content: FooterContentMap = {
    en: {
      sections: {
        contact: 'Contact Information',
        hours: 'Office Hours',
        services: 'Consular Services',
        about: 'About Embassy',
        quickLinks: 'Quick Links'
      },
      contactInfo: {
        address: 'Plot 37, Malcolm X Avenue, Kololo, Kampala',
        phone: '+256 393 000174',
        emergency: '+256 393 000172',
        email: 'consulate_uga@126.com',
        fax: '+256 393 000175'
      },
      officeHours: {
        weekdays: 'Monday - Friday: 9:00 AM - 5:00 PM',
        weekend: 'Saturday: 9:00 AM - 12:00 PM',
        emergency: 'Emergency Services: 24/7',
        closed: 'Sunday & Public Holidays: Closed'
      },
      services: [
        'Visa Applications',
        'Passport Services',
        'Notarial Services',
        'Legal Assistance',
        'Emergency Assistance'
      ],
      quickLinks: [
        { name: 'Home', href: '#home' },
        { name: 'Consular Services', href: '#consular' },
        { name: 'Bilateral Relations', href: '#relations' },
        { name: 'News & Events', href: '#news' },
        { name: 'About Embassy', href: '#about' },
        { name: 'Contact', href: '#contact' }
      ],
      aboutText: 'The Embassy of China in Uganda is dedicated to strengthening bilateral relations and providing comprehensive consular services to Chinese citizens and foreign nationals.',
      emergencyNotice: 'For consular emergencies outside office hours, call our 24/7 emergency line.',
      copyright: `© ${currentYear} Embassy of China in Uganda. All rights reserved.`,
      privacyPolicy: 'Privacy Policy',
      termsOfUse: 'Terms of Use',
      sitemap: 'Sitemap',
      secureChannel: 'Secure Diplomatic Channel'
    },
    zh: {
      sections: {
        contact: '联系信息',
        hours: '办公时间',
        services: '领事服务',
        about: '关于使馆',
        quickLinks: '快速链接'
      },
      contactInfo: {
        address: '坎帕拉科洛洛马尔科姆X大道37号',
        phone: '+256 393 000174',
        emergency: '+256 393 000172',
        email: 'consulate_uga@126.com',
        fax: '+256 393 000175'
      },
      officeHours: {
        weekdays: '周一至周五: 上午9:00 - 下午5:00',
        weekend: '周六: 上午9:00 - 中午12:00',
        emergency: '紧急服务: 24/7',
        closed: '周日及公共假日: 休息'
      },
      services: [
        '签证申请',
        '护照服务',
        '公证服务',
        '法律协助',
        '紧急援助'
      ],
      quickLinks: [
        { name: '首页', href: '#home' },
        { name: '领事服务', href: '#consular' },
        { name: '双边关系', href: '#relations' },
        { name: '新闻活动', href: '#news' },
        { name: '关于使馆', href: '#about' },
        { name: '联系我们', href: '#contact' }
      ],
      aboutText: '中国驻乌干达大使馆致力于加强双边关系，为中国公民和外国国民提供全面的领事服务。',
      emergencyNotice: '非办公时间领事紧急情况，请拨打我们的24/7紧急热线。',
      copyright: `© ${currentYear} 中国驻乌干达大使馆。保留所有权利。`,
      privacyPolicy: '隐私政策',
      termsOfUse: '使用条款',
      sitemap: '网站地图',
      secureChannel: '安全外交渠道'
    }
  }

  // Type-safe access to content - TypeScript now knows currentLanguage can only be 'en' or 'zh'
  const t = content[currentLanguage]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-4 text-red-400">{t.sections.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">{t.contactInfo.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-400" />
                <div>
                  <p className="text-gray-300">{t.contactInfo.phone}</p>
                  <p className="text-red-300 font-semibold text-sm">{t.contactInfo.emergency} (24/7)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-400" />
                <p className="text-gray-300">{t.contactInfo.email}</p>
              </div>
            </div>
            
            {/* Emergency Notice */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 p-4 bg-red-900/30 border border-red-700 rounded-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-red-400" />
                <span className="text-sm font-semibold text-red-300">{t.secureChannel}</span>
              </div>
              <p className="text-sm text-gray-300">{t.emergencyNotice}</p>
            </motion.div>
          </motion.div>

          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-red-400">{t.sections.hours}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>{t.officeHours.weekdays}</p>
                  <p>{t.officeHours.weekend}</p>
                  <p className="text-red-300 font-semibold mt-1">{t.officeHours.emergency}</p>
                  <p className="text-gray-400 mt-1">{t.officeHours.closed}</p>
                </div>
              </div>
            </div>

            {/* Consular Services */}
            <h3 className="text-lg font-semibold mb-4 mt-6 text-red-400">{t.sections.services}</h3>
            <ul className="space-y-2">
              {t.services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-gray-300 text-sm"
                >
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links & About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-red-400">{t.sections.quickLinks}</h3>
            <ul className="space-y-2 mb-6">
              {t.quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4 text-red-400">{t.sections.about}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t.aboutText}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              {t.copyright}
            </motion.p>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-6 text-sm"
            >
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                {t.privacyPolicy}
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                {t.termsOfUse}
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                {t.sitemap}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer