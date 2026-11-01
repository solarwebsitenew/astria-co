import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { featureddata } from '@/app/types/featureddata'
import { testimonials } from '@/app/types/testimonials'
import { articles } from '@/app/types/articles'
import { footerlinks } from '@/app/types/footerlinks'

// header nav-links data
const headerData: HeaderItem[] = [
  { label: 'About Us', href: '#About' },
  { label: 'Services', href: '#services-section' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Team', href: '#Team' },
  { label: 'FAQ', href: '#FAQ' },
  { label: 'Blog', href: '#Blog' },
]

// about data
const Aboutdata: aboutdata[] = [
  {
    heading: 'About Us.',
    imgSrc: '/images/aboutus/imgOne.svg',
    paragraph:
      'Astria & Co is a full-funnel performance marketing agency. We partner with startups and scaling businesses to drive predictable revenue through data-backed Meta & Google Ads, SEO, and global campaigns.',
    link: 'Learn more',
  },
  {
    heading: 'Our Services.',
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph:
      'From high-ROI Meta & Google Ads to Performance SEO, Global TikTok Campaigns, high-converting website development, WhatsApp automation, and custom CRM setup.',
    link: 'Explore services',
  },
  {
    heading: 'Our Results.',
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph:
      'Proven track record that impacts your bottom line: up to 4.8x ROAS on paid ads, 240% organic traffic growth, and over 40% reduction in customer acquisition costs.',
    link: 'View case studies',
  },
]

// work-data
const WorkData: workdata[] = [
  {
    profession: 'Founder & Head of Growth',
    name: 'Aryan Soni',
    imgSrc: '/images/team/founder-image.png',
  },
  {
    profession: 'Meta & Google Media Buyer',
    name: 'Priya Mehta',
    imgSrc: '/images/wework/avatar3.svg',
  },
  {
    profession: 'Senior SEO Strategist',
    name: 'Rohan Verma',
    imgSrc: '/images/wework/avatar4.svg',
  },
  {
    profession: 'Global TikTok Campaign Lead',
    name: 'Kavita Rao',
    imgSrc: '/images/wework/avatar.svg',
  },
  {
    profession: 'CRO & Funnel Lead',
    name: 'Arjun Nair',
    imgSrc: '/images/wework/avatar3.svg',
  },
  {
    profession: 'Attribution & Analytics',
    name: 'Siddharth Patel',
    imgSrc: '/images/wework/avatar4.svg',
  },
]

// featured data
const FeaturedData: featureddata[] = [
  {
    tag: 'Meta Ads & D2C',
    stat: '4.6x ROAS',
    client: 'D2C Lifestyle Brand (US & India)',
    heading: 'Scaled to 4.6x Blended ROAS with High-Converting UGC Video Creatives',
    imgSrc: '/images/featured/case-meta-d2c.png',
    metrics: ['4.6x Blended ROAS', '₹11.5L+ ($138k) Rev', 'Meta & UGC Creatives'],
  },
  {
    tag: 'SEO & Inbound',
    stat: '+240% Growth',
    client: 'B2B Tech Platform (UK & Europe)',
    heading: '240% Inbound Lead Growth & #1 Google Commercial Keyword Rankings',
    imgSrc: '/images/featured/case-seo-growth.png',
    metrics: ['#1 Google Rankings', '+240% Traffic Spike', 'Zero Ad Spend Inbound'],
  },
  {
    tag: 'Lead Gen Funnel',
    stat: '68% Lower CPL',
    client: 'Healthcare & Real Estate (UAE & Asia)',
    heading: '3,200+ Verified Customer Leads Generated with 68% CPL Reduction',
    imgSrc: '/images/featured/case-lead-gen.png',
    metrics: ['-68% CPL Reduction', '3,200+ Qualified Leads', 'Meta + Funnel CRO'],
  },
  {
    tag: 'Google Ads & Automation',
    stat: '₹18L Pipeline',
    client: 'High-Ticket Consulting (Global)',
    heading: 'Google Search Ads + Automated 60-Second WhatsApp Lead Routing Flow',
    imgSrc: '/images/featured/case-google-whatsapp.png',
    metrics: ['₹18L+ ($220k) Pipeline', '38% Booking Rate', 'WhatsApp Automation'],
  },
]

// plans data
const PlansData = [
  {
    heading: 'Startup',
    price: {
      monthly: 15000,
      yearly: 13500,
    },
    user: 'per month',
    features: {
      meta: 'Meta Ads (Facebook & Instagram)',
      social: 'Social Media Handling & Regular Posting',
      video: 'Reels & Video Editing Included',
      design: 'Graphic Designing (Ad Creatives & Posts)',
      website: 'Basic Website Build & Management',
      reporting: 'Monthly Growth & Performance Report',
    },
  },
  {
    heading: 'Business',
    price: {
      monthly: 25000,
      yearly: 22500,
    },
    user: 'per month',
    features: {
      meta: 'Meta Ads with Strategic Funnel & Audience Testing',
      social: 'Full Social Media Management with Strategic Posting',
      website: 'Modern High-Converting Website Build',
      gmb: 'Google My Business (GMB) Optimization',
      seo: 'Medium On-Page & Technical SEO',
      crm: 'Basic CRM Setup & Lead Management',
      support: 'Bi-Weekly Strategy & Growth Reviews',
    },
  },
  {
    heading: 'Enterprise',
    price: {
      monthly: 50000,
      yearly: 45000,
    },
    user: 'per month',
    features: {
      ads: 'Complete Meta Ads & Google Ads Management',
      website: 'Full Premium Website (Dynamic & High-Speed)',
      seo: 'Daily SEO, Keyword Domination & Backlinks',
      automation: 'Complete WhatsApp Automation Setup',
      business: 'Full Business Setup & End-to-End Management',
      crm: 'Custom CRM Pipeline & Lead Routing',
      manager: 'Dedicated Growth Manager & 24/7 Priority Support',
    },
  },
]

// testimonial data
const TestimonialsData: testimonials[] = [
  {
    name: 'Vikram Singhania',
    profession: 'Founder & CEO, D2C Apparel (US & India)',
    comment:
      'Astria & Co completely transformed our paid marketing. They took our monthly revenue from $35k to $240k while maintaining a 4.4x ROAS on Meta. Best agency decision we made.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Marcus Vance',
    profession: 'VP of Growth, FinTech SaaS (London, UK)',
    comment:
      'Their rigorous creative testing framework and landing page sprints slashed our CAC by 42% across UK and European markets. Weekly reporting gives us total clarity on every dollar invested.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 5,
  },
  {
    name: 'Ananya Deshmukh',
    profession: 'Head of Marketing, E-Commerce Group (Dubai, UAE)',
    comment:
      'Managing multi-currency Google PMax and TikTok campaigns seamlessly across the GCC and Europe. Astria & Co operates with the speed and ownership of an elite in-house team.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 5,
  },
  {
    name: 'Oliver Schmidt',
    profession: 'Managing Director, Health & Wellness (Berlin, Germany)',
    comment:
      'Google Performance Max and YouTube ads managed by Astria & Co consistently out-deliver our expectations. Scaled our European seasonal campaign to record-breaking ROAS!',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Sameer Kapoor',
    profession: 'Co-Founder, B2B Cloud Platform (Singapore)',
    comment:
      'Unlike other agencies who sell vanity impressions, Astria & Co is relentlessly focused on pipeline velocity, SQLs, and actual revenue. Outstanding strategic media buying.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 5,
  },
  {
    name: 'Sarah Jenkins',
    profession: 'Founder, Direct-to-Consumer Goods (New York, USA)',
    comment:
      'Real growth, zero fluff. Astria & Co helped us scale our ad spend 5x across Meta and TikTok without eroding our contribution margins. Highly recommended to any ambitious brand.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 5,
  },
]

// artical data
const ArticlesData: articles[] = [
  {
    time: '5 min read',
    heading: 'Mastering Meta Ads in 2026:',
    heading2: 'The Creative Scaling Framework',
    name: 'By Astria & Co Growth Team',
    date: 'February 2026',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '6 min read',
    heading: 'Google Performance Max Playbook:',
    heading2: 'How We Hit 5.2x ROAS for D2C',
    name: 'By Astria & Co Growth Team',
    date: 'January 2026',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '4 min read',
    heading: 'Slashing Customer Acquisition Cost (CAC):',
    heading2: 'Funnel Optimization Strategies',
    name: 'By Astria & Co Growth Team',
    date: 'January 2026',
    imgSrc: '/images/articles/article3.png',
  },
  {
    time: '5 min read',
    heading: 'Server-Side Tracking & CAPI:',
    heading2: 'The Post-Cookie Attribution Guide',
    name: 'By Astria & Co Growth Team',
    date: 'December 2025',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '7 min read',
    heading: 'High-Converting UGC Ads:',
    heading2: 'Hooks, Angles & Scripting That Convert',
    name: 'By Astria & Co Growth Team',
    date: 'November 2025',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '4 min read',
    heading: 'Scaling Past $100k/Month:',
    heading2: 'Budget Allocation & Media Buying Rules',
    name: 'By Astria & Co Growth Team',
    date: 'November 2025',
    imgSrc: '/images/articles/article3.png',
  },
]

// footer links data
const FooterLinksData: footerlinks[] = [
  {
    section: 'Quick Links',
    links: [
      { label: 'About Us', href: '#About' },
      { label: 'Services', href: '#services-section' },
      { label: 'Case Studies', href: '#case-studies' },
      { label: 'Team', href: '#Team' },
      { label: 'FAQ', href: '#FAQ' },
      { label: 'Blog', href: '#Blog' },
    ],
  },
  {
    section: 'Services',
    links: [
      { label: 'Meta Ads (FB & IG)', href: '#services-section' },
      { label: 'Google Ads & PMax', href: '#services-section' },
      { label: 'Performance SEO', href: '#services-section' },
      { label: 'Global TikTok Ads', href: '#services-section' },
    ],
  },
  {
    section: 'Company',
    links: [
      { label: 'Case Studies', href: '#case-studies' },
      { label: 'Growth Audit', href: '#join-us' },
      { label: 'Privacy Policy', href: '/' },
      { label: 'Terms & Conditions', href: '/' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    headerData,
    Aboutdata,
    WorkData,
    FeaturedData,
    PlansData,
    TestimonialsData,
    ArticlesData,
    FooterLinksData,
  })
}
