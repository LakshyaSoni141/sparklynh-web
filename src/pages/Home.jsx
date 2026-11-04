import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import {
  Cloud,
  Code2,
  Server,
  Cpu,
  Layers,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Calendar,
  ArrowUpRight,
  Database,
  Building2,
  Clock,
  Send,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Globe2,
  Award,
  Lock,
  MessageCircle,
  Loader2,
  AlertCircle,
  TrendingUp,
  PenTool
} from 'lucide-react';

// Exact Sparklynh Brand Logo (Cloud + 4 radiating circuit nodes)
const SparklynhLogo = ({ className = "w-10 h-10" }) => (
  <svg 
    viewBox="0 0 160 140" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <defs>
      <linearGradient id="spkCloudGrad" x1="20" y1="50" x2="140" y2="120" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0284c7" />
        <stop offset="50%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <linearGradient id="spkNodeGrad" x1="10" y1="20" x2="120" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
      <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    {/* Base Cloud Silhouette */}
    <path
      d="M36 102 C36 102 30 84 45 74 C50 71 58 72 64 76 C69 66 82 60 94 66 C105 58 120 63 125 76 C134 78 142 86 140 98 C138 108 128 112 118 112 L44 112 C36 112 36 102 36 102 Z"
      fill="url(#spkCloudGrad)"
      filter="drop-shadow(0px 8px 16px rgba(14, 165, 233, 0.25))"
    />

    {/* Radiating Connected Circuit Nodes */}
    <path 
      d="M58 84 C48 80 32 75 28 65 C24 55 30 45 40 45 C50 45 54 55 48 65 C43 72 52 78 60 82" 
      stroke="url(#spkNodeGrad)" 
      strokeWidth="6" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      fill="none" 
    />
    <circle cx="39" cy="54" r="8.5" fill="#ffffff" stroke="url(#spkNodeGrad)" strokeWidth="5.5" />

    <path 
      d="M68 80 C60 70 52 52 58 38 C64 24 80 24 85 36 C90 48 78 60 70 78" 
      stroke="url(#spkNodeGrad)" 
      strokeWidth="6" 
      strokeLinecap="round" 
      fill="none" 
    />
    <circle cx="71" cy="36" r="9.5" fill="#ffffff" stroke="url(#spkNodeGrad)" strokeWidth="6" />

    <path 
      d="M78 80 C80 66 88 44 100 36 C112 28 126 38 124 52 C122 66 106 72 88 82" 
      stroke="url(#spkNodeGrad)" 
      strokeWidth="6.5" 
      strokeLinecap="round" 
      fill="none" 
    />
    <circle cx="112" cy="45" r="10.5" fill="#ffffff" stroke="url(#spkNodeGrad)" strokeWidth="6.5" />

    <path 
      d="M50 92 C40 92 24 90 18 80 C12 68 22 56 34 60" 
      stroke="url(#spkNodeGrad)" 
      strokeWidth="5.5" 
      strokeLinecap="round" 
      fill="none" 
    />
    <circle cx="26" cy="74" r="7.5" fill="#ffffff" stroke="url(#spkNodeGrad)" strokeWidth="5.5" />
  </svg>
);

// Dedicated Custom Social SVGs
const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Home() {
  const location = useLocation();
  const currentPath = location.pathname;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('salesforce');
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Scope & Track Selection States
  const [estService, setEstService] = useState('salesforce');
  const [estScope, setEstScope] = useState('mvp');
  const [estTimeline, setEstTimeline] = useState('standard');
  const [estAddons, setEstAddons] = useState({
    ciCd: true,
    aiAgents: false,
    securityAudit: false,
    migration: false,
  });

  // Lead / Enquiry Form State
  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Salesforce Consulting & LWC',
    meetingSlot: 'Tomorrow, 3:00 PM IST',
    message: ''
  });

  // Salesforce Project Enquiry Sync Handler
  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const selectedAddonsList = Object.keys(estAddons).filter((k) => estAddons[k]);

    const enquiryPayload = {
      name: leadForm.name,
      email: leadForm.email,
      phone: leadForm.phone,
      company: leadForm.company || 'Not Specified',
      service: estService.toUpperCase(),
      scope: estScope.toUpperCase(),
      timeline: estTimeline.toUpperCase(),
      addons: selectedAddonsList,
      budget: 'Custom Quote on Discovery',
      meetingSlot: leadForm.meetingSlot || 'Flexible',
      message: leadForm.message || 'Direct Enquiry from Scope Configurator & Schedule Call'
    };

    try {
      const response = await fetch('https://sparklynh-web.onrender.com/api/salesforce/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enquiryPayload),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || 'Failed to synchronize enquiry with Salesforce.');
      }

      setFormSubmitted(true);
      if (showConsultModal) {
        setShowConsultModal(false);
      }
      setTimeout(() => {
        setFormSubmitted(false);
        setLeadForm({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: 'Salesforce Consulting & LWC',
          meetingSlot: 'Tomorrow, 3:00 PM IST',
          message: ''
        });
      }, 7000);
    } catch (err) {
      console.error('Salesforce Enquiry Sync Error:', err);
      setSubmitError(err.message || 'Sync request could not reach the server. Please try again or reach out on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Sparklynh Team! I came across your website and want to discuss a project for my company."
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-sky-500 selection:text-white pt-24 sm:pt-28">
      {/* Background Decorative Mesh Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-[140px] transform-gpu" />
        <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-blue-200/40 rounded-full blur-[150px] transform-gpu" />
        <div className="absolute -bottom-40 left-1/3 w-[700px] h-[700px] bg-cyan-200/30 rounded-full blur-[160px] transform-gpu" />
      </div>

      {/* STATIC FIXED HEADER WRAPPER */}
      <div className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        {/* Top Banner Notice */}
        <div className="bg-gradient-to-r from-slate-100 via-sky-50 to-blue-50 border-b border-slate-200 py-2 text-center text-xs text-slate-600 px-4 flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-medium text-slate-700">
              Headquartered in <strong className="text-slate-900">Jaipur, India</strong> • Delivering Worldwide across US, UK, Middle East & APAC
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 border-l border-slate-300 pl-3">
            <span className="bg-sky-100 text-sky-700 border border-sky-300 text-[10px] px-2 py-0.5 rounded font-mono">
              GST & MSME Compliant
            </span>
            <button 
              onClick={() => setShowConsultModal(true)}
              className="underline font-semibold hover:text-sky-700 transition-colors cursor-pointer text-sky-600"
            >
              Schedule Technical Discovery →
            </button>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <SparklynhLogo className="w-9 h-9 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-900 leading-none flex items-center gap-1">
                SPARKLYNH
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block"></span>
              </span>
              <p className="text-[8.5px] uppercase font-mono tracking-widest text-sky-600 font-bold mt-1">
                Tech Hub • Jaipur
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[13px] font-semibold text-slate-600 shrink-0">
            <a href="#services" className="hover:text-sky-600 transition-colors whitespace-nowrap">Services</a>
            <a href="#salesforce" className="hover:text-sky-600 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap">
              <span>Salesforce</span>
              <span className="bg-sky-50 text-sky-700 border border-sky-200/80 text-[10px] px-1.5 py-0.5 rounded font-mono font-bold leading-none">
                Hub
              </span>
            </a>
            <a href="#case-studies" className="hover:text-sky-600 transition-colors whitespace-nowrap">Deliveries</a>
            <a href="#estimator" className="hover:text-sky-600 transition-colors whitespace-nowrap">Scope & Discovery</a>
            <a href="#why-sparklynh" className="hover:text-sky-600 transition-colors whitespace-nowrap">Why Us</a>
            
            {/* Dynamic Active Highlight for Careers */}
            <Link 
              to="/career" 
              className={`flex items-center gap-1.5 transition-all whitespace-nowrap px-2.5 py-1 rounded-lg ${
                currentPath === '/career'
                  ? 'bg-sky-50 text-sky-600 font-bold border border-sky-200'
                  : 'hover:text-sky-600 text-slate-600 font-semibold'
              }`}
            >
              <span>Careers</span>
              <span className="bg-sky-100 text-sky-700 text-[10px] px-1.5 py-0.5 rounded font-mono font-bold leading-none">
                Hiring
              </span>
            </Link>

            {/* Dynamic Active Highlight for Team */}
            <Link 
              to="/team" 
              className={`transition-all whitespace-nowrap px-2.5 py-1 rounded-lg ${
                currentPath === '/team'
                  ? 'bg-sky-50 text-sky-600 font-bold border border-sky-200'
                  : 'hover:text-sky-600 text-slate-600 font-semibold'
              }`}
            >
              Team
            </Link>

            <a href="#contact" className="hover:text-sky-600 transition-colors whitespace-nowrap">Contact</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href={`https://wa.me/918209116792?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 hover:bg-emerald-100 transition-all flex items-center justify-center cursor-pointer shadow-2xs"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setShowConsultModal(true)}
              className="px-3.5 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Call</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 shadow-lg">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 font-medium py-2 hover:text-sky-600"
            >
              Services
            </a>
            <a 
              href="#salesforce" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 font-medium py-2 hover:text-sky-600"
            >
              Salesforce Cloud
            </a>
            <a 
              href="#case-studies" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 font-medium py-2 hover:text-sky-600"
            >
              Our Deliveries
            </a>
            <a 
              href="#estimator" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 font-medium py-2 hover:text-sky-600"
            >
              Scope & Discovery Call
            </a>
            <a 
              href="#why-sparklynh" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 font-medium py-2 hover:text-sky-600"
            >
              Why Us
            </a>

            {/* Mobile Link with Active Indicator */}
            <Link 
              to="/career" 
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 flex items-center justify-between rounded-lg px-2 ${
                currentPath === '/career' ? 'bg-sky-50 text-sky-600 font-bold' : 'text-slate-700 font-medium'
              }`}
            >
              <span>Careers & Internships</span>
              <span className="bg-sky-100 text-sky-700 text-[10px] px-2 py-0.5 rounded font-mono font-bold">
                Hiring
              </span>
            </Link>

            <Link 
              to="/team" 
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 rounded-lg px-2 ${
                currentPath === '/team' ? 'bg-sky-50 text-sky-600 font-bold' : 'text-slate-700 font-medium'
              }`}
            >
              Team
            </Link>

            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 font-medium py-2 hover:text-sky-600"
            >
              Contact
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowConsultModal(true);
                }}
                className="w-full py-2.5 rounded-lg bg-sky-600 text-white font-bold text-center text-xs shadow-xs"
              >
                Schedule Technical Discovery
              </button>
              <a
                href={`https://wa.me/918209116792?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-emerald-50 text-emerald-700 font-semibold text-center text-xs border border-emerald-200 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-200 text-sky-800 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>Jaipur’s Premier Salesforce & Software Engineering Startup</span>
              <span className="w-1 h-1 rounded-full bg-sky-500"></span>
              <span className="text-slate-600 font-semibold">Serving Global & Pan-India Enterprises</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Architecting Scalable <br />
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Salesforce, SaaS & Modern Cloud
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              <strong className="text-slate-900">Sparklynh</strong> is an elite software & growth engineering company based in Jaipur, Rajasthan. 
              We build mission-critical Salesforce solutions, full-stack SaaS apps, custom APIs, Meta ad pipelines, and authority content systems.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setShowConsultModal(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-extrabold text-base shadow-lg shadow-sky-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Hire Dedicated Developers</span>
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
              
              <a
                href="#estimator"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-semibold text-base transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4 text-sky-600" />
                <span>Configure Scope & Book Discovery</span>
              </a>

              <a
                href={`https://wa.me/918209116792?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-700 font-semibold text-base transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-600 text-xs uppercase tracking-wider font-semibold">
              <div className="flex items-center justify-center gap-2">
                <Cloud className="w-4 h-4 text-sky-600" />
                <span>Salesforce Certified PD1 & PD2</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Server className="w-4 h-4 text-blue-600" />
                <span>AWS & Google Cloud Architects</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Strict Indian NDA & IP Transfer</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Globe2 className="w-4 h-4 text-purple-600" />
                <span>US / UK / IST Flexible Hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVERED - ALL 9 REAL PROJECTS GRID */}
      <section id="case-studies" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-sky-600 font-bold">
                Portfolio & Deliveries
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                What We Delivered & Built
              </h2>
            </div>
            <p className="mt-4 md:mt-0 text-slate-600 max-w-sm text-sm">
              Explore 9 battle-tested engineering, cloud, marketing, and design solutions shipped for our enterprise partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Salesforce Apex & LWC */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:border-sky-400 hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="h-44 bg-gradient-to-tr from-sky-100 to-blue-100 p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded bg-white/80 text-sky-800 text-xs font-semibold shadow-sm">
                      Salesforce Org
                    </span>
                    <span className="text-xs text-slate-600 font-mono">CRM Architecture</span>
                  </div>
                  <div className="z-10">
                    <span className="text-2xl font-black text-slate-900">Custom Apex & LWC Suite</span>
                    <p className="text-xs text-sky-700 mt-1 font-medium">Lead Flow & Payment Sync</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    End-to-End CRM Automation
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Designed custom Apex triggers, bulkified handlers, and responsive Lightning Web Components (LWC) featuring automated lead validation, custom quote logic, and payment gateway webhooks.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-2 text-[11px] font-mono text-slate-600">
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Apex</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">LWC</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">REST API</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Sales Cloud</span>
                </div>
              </div>
            </div>

            {/* Card 2: IoT & Event Attendance */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:border-emerald-400 hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="h-44 bg-gradient-to-tr from-emerald-100 to-teal-100 p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded bg-white/80 text-emerald-800 text-xs font-semibold shadow-sm">
                      IoT & Operations
                    </span>
                    <span className="text-xs text-slate-600 font-mono">Live Badging</span>
                  </div>
                  <div className="z-10">
                    <span className="text-2xl font-black text-slate-900">Event Attendance & Tracking</span>
                    <p className="text-xs text-emerald-700 mt-1 font-medium">Instant QR / RFID Check-in</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    On-Ground Event Logistics Portal
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Built a real-time attendee management system featuring sub-second QR scans, automated on-demand badge printing, live attendance analytics, and synchronized multi-desk dashboards.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-2 text-[11px] font-mono text-slate-600">
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">QR Scanning</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Node.js</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">WebSockets</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Live Analytics</span>
                </div>
              </div>
            </div>

            {/* Card 3: Engineering & CAD Schematics */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:border-amber-400 hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="h-44 bg-gradient-to-tr from-amber-100 to-orange-100 p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded bg-white/80 text-amber-800 text-xs font-semibold shadow-sm">
                      Engineering & CAD
                    </span>
                    <span className="text-xs text-slate-600 font-mono">3D Drafting</span>
                  </div>
                  <div className="z-10">
                    <span className="text-2xl font-black text-slate-900">Industrial CAD Schematics</span>
                    <p className="text-xs text-amber-700 mt-1 font-medium">Component & Layout Prototyping</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    Precision 2D/3D Design Pipeline
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Engineered precise 2D/3D mechanical component drawings, spatial architectural plans, and interactive web-based 3D models to ensure design-for-manufacturing (DFM) compliance.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-2 text-[11px] font-mono text-slate-600">
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">AutoCAD</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">SolidWorks</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">3D Web Render</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">DFM</span>
                </div>
              </div>
            </div>

            {/* Card 4: SaaS Full-Stack Cloud Apps */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="h-44 bg-gradient-to-tr from-blue-100 to-indigo-100 p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded bg-white/80 text-blue-800 text-xs font-semibold shadow-sm">
                      SaaS / Web
                    </span>
                    <span className="text-xs text-slate-600 font-mono">Modern Stack</span>
                  </div>
                  <div className="z-10">
                    <span className="text-2xl font-black text-slate-900">Full-Stack Cloud Web Apps</span>
                    <p className="text-xs text-blue-700 mt-1 font-medium">Multi-Tenant Architecture</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Custom Portal & SaaS Applications
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Architected high-performance Next.js and React web apps with role-based authentication, real-time database synchronization, automated PDF invoices, and scalable multi-tenant infrastructure.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-2 text-[11px] font-mono text-slate-600">
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">React / Next.js</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">PostgreSQL</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Tailwind</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Stripe/Razorpay</span>
                </div>
              </div>
            </div>

            {/* Card 5: AI & Doc Parser */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:border-purple-400 hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="h-44 bg-gradient-to-tr from-purple-100 to-pink-100 p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded bg-white/80 text-purple-800 text-xs font-semibold shadow-sm">
                      AI & NLP
                    </span>
                    <span className="text-xs text-slate-600 font-mono">Internal RAG</span>
                  </div>
                  <div className="z-10">
                    <span className="text-2xl font-black text-slate-900">Agentic AI & Doc Parser</span>
                    <p className="text-xs text-purple-700 mt-1 font-medium">Enterprise Automation</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                    Intelligent Document & Query Pipeline
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Deployed vector-embedded RAG pipelines that parse complex invoices, technical documentation, and contracts into structured database tables and automated CRM records.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-2 text-[11px] font-mono text-slate-600">
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Python</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Vector DB</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">LLM APIs</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Auto-ETL</span>
                </div>
              </div>
            </div>

            {/* Card 6: CI/CD & Cloud DevOps */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:border-sky-400 hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="h-44 bg-gradient-to-tr from-sky-100 to-indigo-100 p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded bg-white/80 text-sky-800 text-xs font-semibold shadow-sm">
                      DevOps
                    </span>
                    <span className="text-xs text-slate-600 font-mono">Zero Downtime</span>
                  </div>
                  <div className="z-10">
                    <span className="text-2xl font-black text-slate-900">Automated CI/CD Workflows</span>
                    <p className="text-xs text-sky-700 mt-1 font-medium">Docker & Cloud Scale</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    Containerized Cloud Deployments
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Built automated GitHub Actions pipelines, containerized Docker microservices, automated SSL renewals, and hardened reverse proxies for continuous high-availability deployments.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-2 text-[11px] font-mono text-slate-600">
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Docker</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">GitHub Actions</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Linux VPS</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Nginx</span>
                </div>
              </div>
            </div>

            {/* Card 7: Meta Ads & Performance Funnels */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:border-indigo-400 hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="h-44 bg-gradient-to-tr from-indigo-100 via-sky-100 to-blue-100 p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded bg-white/80 text-indigo-800 text-xs font-semibold shadow-sm">
                      Growth & Acquisition
                    </span>
                    <span className="text-xs text-slate-600 font-mono">Paid Meta Media</span>
                  </div>
                  <div className="z-10">
                    <span className="text-2xl font-black text-slate-900">Meta Ads & Performance Funnels</span>
                    <p className="text-xs text-indigo-700 mt-1 font-medium">Targeted CPL & ROAS Scaling</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    High-Converting Ad Campaigns & Lead Gen
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Executed data-driven Meta (Facebook & Instagram) advertising campaigns featuring dynamic ad creatives, laser-focused audience segmentation, and real-time CRM lead routing.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-2 text-[11px] font-mono text-slate-600">
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Meta Ads Manager</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">CAPI Pixel</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">A/B Testing</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">CRM Sync</span>
                </div>
              </div>
            </div>

            {/* Card 8: Social Media Management */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:border-rose-400 hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="h-44 bg-gradient-to-tr from-rose-100 to-pink-100 p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded bg-white/80 text-rose-800 text-xs font-semibold shadow-sm">
                      Brand Presence
                    </span>
                    <span className="text-xs text-slate-600 font-mono">Social Engine</span>
                  </div>
                  <div className="z-10">
                    <span className="text-2xl font-black text-slate-900">Social Media Management</span>
                    <p className="text-xs text-rose-700 mt-1 font-medium">Organic Reach & Community Growth</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                    End-to-End Brand Account Scaling
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Managed end-to-end social media channels through structured content calendars, high-impact short-form videos, carousel designs, and community management workflows that turn followers into clients.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-2 text-[11px] font-mono text-slate-600">
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Instagram/LinkedIn</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Reels Direction</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Brand Identity</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Analytics</span>
                </div>
              </div>
            </div>

            {/* Card 9: Content Writing & Copywriting */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:border-amber-400 hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="h-44 bg-gradient-to-tr from-amber-100 via-orange-100 to-yellow-100 p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded bg-white/80 text-amber-800 text-xs font-semibold shadow-sm">
                      Copy & SEO
                    </span>
                    <span className="text-xs text-slate-600 font-mono">Authority Media</span>
                  </div>
                  <div className="z-10">
                    <span className="text-2xl font-black text-slate-900">Content Writing & Copywriting</span>
                    <p className="text-xs text-amber-700 mt-1 font-medium">SEO Blogs, Pitch Decks & Web Copy</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    Conversion Copy & Technical Articles
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Produced authoritative technical blog content, whitepapers, landing page conversion copy, and email outreach sequences crafted to drive organic SEO traffic and turn visitors into pipeline revenue.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-2 text-[11px] font-mono text-slate-600">
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">SEO Strategy</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Landing Page Copy</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Tech Blogs</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200">Email Sequences</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SERVICES HUB */}
      <section id="services" className="py-24 relative bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-sky-600 font-bold">
                End-To-End Tech Offerings
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                What We Build & Optimize at Sparklynh
              </h2>
            </div>
            <p className="mt-4 md:mt-0 text-slate-600 max-w-md text-sm leading-relaxed">
              We cover everything from native Salesforce org development to full-stack web platforms, Meta ad campaigns, and content branding pipelines.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 border-b border-slate-200 mb-8 pb-4">
            <button
              onClick={() => setActiveTab('salesforce')}
              className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'salesforce'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Cloud className="w-4 h-4 shrink-0" />
              <span className="truncate">Salesforce</span>
            </button>
            <button
              onClick={() => setActiveTab('saas')}
              className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'saas'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Layers className="w-4 h-4 shrink-0" />
              <span className="truncate">SaaS Dev</span>
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'web'
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Code2 className="w-4 h-4 shrink-0" />
              <span className="truncate">Web / Apps</span>
            </button>
            <button
              onClick={() => setActiveTab('growth')}
              className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'growth'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <TrendingUp className="w-4 h-4 shrink-0" />
              <span className="truncate">Meta Ads & SMM</span>
            </button>
            <button
              onClick={() => setActiveTab('content')}
              className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'content'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <PenTool className="w-4 h-4 shrink-0" />
              <span className="truncate">Content Studio</span>
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer col-span-2 md:col-span-1 ${
                activeTab === 'ai'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Cpu className="w-4 h-4 shrink-0" />
              <span className="truncate">AI & Agents</span>
            </button>
          </div>

          {/* Active Tab Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
            <div className="lg:col-span-7 space-y-6">
              {activeTab === 'salesforce' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-semibold">
                    Salesforce Specialists • Jaipur Delivery Center
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Custom Apex, LWC, Agentforce & Cloud Transformations
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Stop letting dirty CRM data, sluggish page performance, and broken trigger cycles slow your enterprise down. 
                    Sparklynh architects bulletproof, governor-limit optimized Salesforce orgs built to scale.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-600" />
                        Apex Triggers & LWC UIs
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">Bulkified trigger frameworks, custom reactive LWC components, and 90%+ unit test coverage.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-600" />
                        Sales & Service Cloud
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">Lead lifecycle pipelines, CPQ quotation logic, omnichannel routing, and customer portal setup.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-600" />
                        REST/SOAP & ERP Sync
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">Bi-directional integrations with Stripe, SAP, NetSuite, Razorpay, Zoho, and internal DBs.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-600" />
                        Flows & Agentforce AI
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">Migrating legacy workflow rules to screen/auto-launched Flows and deploying Einstein AI agents.</p>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'growth' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-800 text-xs font-semibold">
                    Growth Engine • Paid Media & Social Management
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Targeted Meta Ads & Complete Social Media Handling
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Scale customer acquisition with high-converting ads and authoritative social presence. We combine creative storytelling with data-driven funnel optimization.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                        Meta Ads (FB & Instagram)
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">Performance ad sets, high-converting hooks, audience testing, and lowest cost per qualified lead.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                        Complete Social Media Management
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">End-to-end grid curation, reels creation, posting schedule, stories, and audience community engagement.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                        Direct CRM Attribution
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">Meta Conversions API (CAPI) integrated directly into your Salesforce or database for zero lead leakage.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                        Retargeting & ROI Optimization
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">Warm audience retargeting funnels that convert passive profile visitors into paying business clients.</p>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'content' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-semibold">
                    Authority Voice • Content & Copywriting
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    High-Converting Copywriting & Technical Content
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Words that educate, rank, and sell. We craft authoritative content for tech founders, service companies, and B2B enterprises that want to lead their niche.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600" />
                        Landing Page & Ad Copywriting
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">Punchy, psychological headline copy and benefit-driven CTAs that maximize conversion rates.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600" />
                        SEO Technical Articles & Blogs
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">In-depth technical articles that rank on Google Search and build brand trust with developers & CTOs.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600" />
                        Pitch Decks & Whitepapers
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">Institutional pitch documentation and case studies designed for investors and enterprise buyers.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600" />
                        Email Drip & WhatsApp Sequences
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">Automated follow-up campaigns that nurture prospects and turn discovery calls into signed contracts.</p>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'saas' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-300 text-blue-800 text-xs font-semibold">
                    Product Incubator & MVP Lab
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    B2B SaaS Engineering: From Wireframe to Revenue
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    We partner with Indian and global founders to build scalable multi-tenant SaaS products with integrated billing, authentication, and high concurrency.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        Multi-Tenant Data Isolation
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">Role-based access control (RBAC), team workspaces, and enterprise tenant segregation.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        Billing (Stripe & Razorpay)
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">Usage-based metering, global recurring subscriptions, tax invoicing, and GST compliance.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        High-Concurrency APIs
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">GraphQL/REST services with Redis caching, event brokers, and sub-100ms response times.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        Analytics & Dashboards
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">Real-time user engagement graphs, cohort metrics, and CSV/PDF financial exports.</p>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'web' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-semibold">
                    Modern Stack Mastery
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Next.js, React, Node.js & Flutter App Development
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Custom web platforms and cross-platform iOS/Android mobile apps crafted for speed, modern aesthetics, and seamless user experiences.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-600" />
                        Next.js 14 & React UIs
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">Server Actions, Edge caching, SEO optimization, and sub-second First Contentful Paint.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-600" />
                        Flutter & React Native
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">One codebase powering slick, native-feeling apps across App Store and Google Play.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-600" />
                        Database Engineering
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">PostgreSQL, MongoDB, Supabase indexing, automated migrations, and read replicas.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-600" />
                        Enterprise Portal Modernization
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">Converting slow legacy PHP/Java monoliths into responsive modular web architectures.</p>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'ai' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-semibold">
                    Next-Gen AI Systems
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Agentic AI Workflows, LLM fine-tuning & Enterprise RAG
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Move beyond generic prompts. We ground custom AI models in your internal company documentation, customer databases, and Salesforce records safely.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-600" />
                        Custom Enterprise RAG
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">Private Pinecone/Qdrant vector stores that answer inquiries grounded solely in your company data.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-600" />
                        Autonomous Lead Qualification
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">AI agents that converse with inbound visitors, qualify intent, and write details into Salesforce.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-600" />
                        Smart Document Extraction
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">Parse Indian GST invoices, bills of lading, and PDF contracts straight to structured SQL tables.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-600" />
                        Private Self-Hosted Models
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">Llama 3 / Mistral deployments running inside your secure VPC for complete data sovereignty.</p>
                    </div>
                  </div>
                </>
              )}

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => setShowConsultModal(true)}
                  className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Book Strategy Call</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <a
                  href={`https://wa.me/918209116792?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-700 font-semibold text-sm hover:bg-emerald-100 transition-all inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Interactive Visual Preview on Right */}
            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl font-mono text-xs text-slate-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-slate-400 text-[11px]">sparklynh_core_architecture.ts</span>
              </div>

              <div className="space-y-3 text-slate-300">
                <p className="text-sky-400">// Sparklynh Hub • Jaipur Engineering & Growth</p>
                <p>
                  <span className="text-purple-400">const</span> startupEngine = <span className="text-blue-400">new</span> <span className="text-yellow-300">SparklynhStudio</span>({'{'}
                </p>
                <div className="pl-4 space-y-1">
                  <p>headquarters: <span className="text-emerald-300">'Jaipur, Rajasthan, IN'</span>,</p>
                  <p>salesforceCertified: <span className="text-purple-300">true</span>,</p>
                  <p>activeSectors: [<span className="text-emerald-300">'Salesforce'</span>, <span className="text-emerald-300">'SaaS'</span>, <span className="text-emerald-300">'Meta Ads'</span>, <span className="text-emerald-300">'Content'</span>],</p>
                  <p>activeClients: [<span className="text-emerald-300">'India'</span>, <span className="text-emerald-300">'USA'</span>, <span className="text-emerald-300">'UK'</span>, <span className="text-emerald-300">'UAE'</span>],</p>
                  <p>slaResponse: <span className="text-emerald-300">'&lt; 15 mins'</span>,</p>
                  <p>contractCompliance: <span className="text-emerald-300">'GST & MSME Verified'</span></p>
                </div>
                <p>{'}'});</p>
                
                <div className="mt-4 pt-3 border-t border-slate-800 space-y-2">
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>Engine Cluster Latency</span>
                    <span className="text-emerald-400 font-bold">OPTIMAL (18ms)</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-sky-400 to-emerald-400 h-full w-[98%]" />
                  </div>
                  <p className="text-[10px] text-slate-400">Live Status: 100% test class pass rate & CRM webhooks active.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SALESFORCE DEEP DIVE SECTION */}
      <section id="salesforce" className="py-20 bg-gradient-to-b from-transparent via-slate-100/70 to-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono tracking-widest text-sky-600 font-bold">
              Specialized Salesforce Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-3">
              Supercharge Your Salesforce Investment
            </h2>
            <p className="mt-4 text-slate-600 text-base">
              Most businesses unlock only a fraction of what Salesforce can do. Sparklynh reorganizes, codes, and automates your CRM so your sales teams close deals faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-lg transition-all group shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Apex & LWC Engineering</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Tailored Lightning Web Components that load instantly and respect governor limits, coupled with scalable asynchronous batch classes.
              </p>
              <ul className="text-xs text-slate-700 space-y-2">
                <li className="flex items-center gap-2">✓ Complex validation & pricing calculators</li>
                <li className="flex items-center gap-2">✓ Queueable & Schedulable batch frameworks</li>
                <li className="flex items-center gap-2">✓ Beautiful responsive custom LWC dashboards</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all group shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">ERP, Payment & API Integrations</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Unify your Salesforce with Razorpay, Stripe, NetSuite, SAP, Slack, and internal custom backends with zero data loss.
              </p>
              <ul className="text-xs text-slate-700 space-y-2">
                <li className="flex items-center gap-2">✓ Custom Named Credentials & REST APIs</li>
                <li className="flex items-center gap-2">✓ Webhook ingestion with retry mechanisms</li>
                <li className="flex items-center gap-2">✓ MuleSoft, Zapier, and direct endpoints</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all group shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Org Health & License Audit</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Deep architectural analysis of technical debt, failing test classes, duplicate records, and unused expensive user licenses.
              </p>
              <ul className="text-xs text-slate-700 space-y-2">
                <li className="flex items-center gap-2">✓ Clean up dormant code & legacy workflows</li>
                <li className="flex items-center gap-2">✓ Security sharing rules and profiles lockdown</li>
                <li className="flex items-center gap-2">✓ Save up to 35% on recurring Salesforce costs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SPARKLYNH & JAIPUR HUB SECTION */}
      <section id="why-sparklynh" className="py-20 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-semibold">
                Jaipur IT Ecosystem Advantage
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Why Global & Indian Businesses Choose Sparklynh
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Jaipur has evolved into one of India’s top-tier IT hubs, housing thousands of certified Salesforce architects, cloud specialists, and full-stack engineers. 
                Sparklynh brings you Silicon Valley engineering standards with the cost-efficiency, dedication, and flexibility of Jaipur's premier talent.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Award className="w-5 h-5 text-sky-600 mb-2" />
                  <h4 className="font-bold text-slate-900 text-sm">Direct Founder Engagement</h4>
                  <p className="text-xs text-slate-500 mt-1">No bureaucratic middle management. Speak directly with senior architects on every sprint.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Clock className="w-5 h-5 text-blue-600 mb-2" />
                  <h4 className="font-bold text-slate-900 text-sm">Overlap with US / EU & IST</h4>
                  <p className="text-xs text-slate-500 mt-1">Flexible shift timings ensuring seamless daily standups and live Slack collaboration.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Lock className="w-5 h-5 text-emerald-600 mb-2" />
                  <h4 className="font-bold text-slate-900 text-sm">100% IP & NDA Protection</h4>
                  <p className="text-xs text-slate-500 mt-1">Legally binding NDAs, strict code repos ownership transfer, and zero third-party leakage.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mb-2" />
                  <h4 className="font-bold text-slate-900 text-sm">Transparent Fixed or Retainer Models</h4>
                  <p className="text-xs text-slate-500 mt-1">GST registered billing for Indian corporations; direct wire & international invoicing for global partners.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-3xl p-8 relative shadow-sm">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-600">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Sparklynh Headquarters</h3>
                    <p className="text-xs text-sky-700 font-medium">Pink City Tech Corridor • Jaipur, Rajasthan, India</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 text-xs text-slate-700 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Registration:</span>
                    <span className="text-slate-900 font-medium">MSME & GST Certified IT Firm</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Primary Timezone:</span>
                    <span className="text-slate-900 font-medium">Indian Standard Time (IST / UTC+5:30)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Global Coverage:</span>
                    <span className="text-sky-700 font-medium">US (EST/PST), UK (GMT), UAE (GST)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Average Dev Experience:</span>
                    <span className="text-slate-900 font-medium">6.8 Years (Mid to Principal)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setShowConsultModal(true)}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-extrabold text-sm shadow-md shadow-sky-500/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Schedule Meeting with Jaipur Lead</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT SCOPE CONFIGURATOR & DIRECT MEET SCHEDULER */}
      <section id="estimator" className="py-24 relative bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-semibold mb-3">
              Interactive Scope & Meet Booking
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Configure Project Scope & Schedule Discovery Call
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-xl mx-auto">
              Select your project scope and requirements, and book a discovery call directly with our senior team to receive a customized project proposal.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Configuration controls */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <label className="text-xs font-semibold uppercase text-slate-500 tracking-wider block mb-2">
                    1. Primary Service / Technology Track
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'salesforce', label: 'Salesforce & LWC' },
                      { id: 'meta_ads', label: 'Meta Ads & Lead Gen' },
                      { id: 'social_media', label: 'Social Media Handling' },
                      { id: 'content_writing', label: 'Content & Copywriting' },
                      { id: 'saas', label: 'Full-Stack SaaS MVP' },
                      { id: 'web', label: 'Web & Mobile App' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setEstService(item.id)}
                        className={`p-3 rounded-xl text-xs font-semibold text-left transition-all border cursor-pointer ${
                          estService === item.id
                            ? 'bg-sky-50 border-sky-500 text-sky-800 shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase text-slate-500 tracking-wider block mb-2">
                    2. Project Scope & Architecture
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'prototype', label: 'Starter / POC' },
                      { id: 'mvp', label: 'Growth / MVP' },
                      { id: 'enterprise', label: 'Full Scale Engine' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setEstScope(item.id)}
                        className={`p-3 rounded-xl text-xs font-semibold text-center transition-all border cursor-pointer ${
                          estScope === item.id
                            ? 'bg-blue-50 border-blue-500 text-blue-800 shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase text-slate-500 tracking-wider block mb-2">
                    3. Target Delivery Pace
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setEstTimeline('standard')}
                      className={`p-3 rounded-xl text-xs font-semibold text-center border cursor-pointer ${
                        estTimeline === 'standard'
                          ? 'bg-sky-50 border-sky-500 text-sky-800'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                    >
                      Standard Timeline
                    </button>
                    <button
                      type="button"
                      onClick={() => setEstTimeline('rush')}
                      className={`p-3 rounded-xl text-xs font-semibold text-center border cursor-pointer ${
                        estTimeline === 'rush'
                          ? 'bg-purple-50 border-purple-500 text-purple-800'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      Fast Track Sprint
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase text-slate-500 tracking-wider block mb-2">
                    4. Hardening & Add-ons
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { key: 'ciCd', label: 'CI/CD & Tracking Setup' },
                      { key: 'aiAgents', label: 'AI Copilot / Automation' },
                      { key: 'securityAudit', label: 'SOC2 / Data Compliance' },
                      { key: 'migration', label: 'Legacy Data / Asset Migration' },
                    ].map((addon) => (
                      <button
                        key={addon.key}
                        type="button"
                        onClick={() =>
                          setEstAddons((prev) => ({
                            ...prev,
                            [addon.key]: !prev[addon.key],
                          }))
                        }
                        className={`p-2.5 rounded-xl border text-left flex items-center justify-between cursor-pointer ${
                          estAddons[addon.key]
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-800'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <span className="truncate pr-1">{addon.label}</span>
                        <span className="text-[10px] font-mono font-bold">
                          {estAddons[addon.key] ? '✓' : '+'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-xs font-semibold text-sky-900 block">Pricing & Commercials:</span>
                    <span className="text-sm font-bold text-sky-700">
                      Tailored Custom Quote on Discovery
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white border border-sky-200 text-sky-800 text-xs font-mono font-bold shadow-2xs">
                    Milestone Guaranteed
                  </span>
                </div>
              </div>

              {/* Right Output Card: Direct Meet Scheduler Form */}
              <div className="lg:col-span-6 bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl text-white">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-medium pb-3 border-b border-slate-800 mb-4">
                    <span className="flex items-center gap-1.5 text-white font-semibold">
                      <Calendar className="w-4 h-4 text-sky-400" />
                      Book Discovery & Architecture Call
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-semibold">
                      Salesforce Automated
                    </span>
                  </div>

                  {formSubmitted ? (
                    <div className="py-12 text-center space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Project Enquiry Registered!</h3>
                      <p className="text-slate-300 text-xs leading-relaxed max-w-sm mx-auto">
                        Your request has been submitted successfully! We will get back to you via email shortly at <strong className="text-sky-400">{leadForm.email}</strong> with your calendar invite and custom proposal.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleLeadSubmit} className="space-y-3.5">
                      {submitError && (
                        <div className="p-3 bg-rose-500/20 border border-rose-500/40 rounded-xl text-rose-300 text-xs flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{submitError}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            disabled={isSubmitting}
                            value={leadForm.name}
                            onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                            Email (For Meet Invite) *
                          </label>
                          <input
                            type="email"
                            required
                            disabled={isSubmitting}
                            value={leadForm.email}
                            onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                            placeholder="name@company.com"
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                            Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            disabled={isSubmitting}
                            value={leadForm.phone}
                            onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                            placeholder="+1 (555) 000-0000"
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                            Company Name
                          </label>
                          <input
                            type="text"
                            disabled={isSubmitting}
                            value={leadForm.company}
                            onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })}
                            placeholder="Company Inc."
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                          Select Preferred Meeting Slot *
                        </label>
                        <select
                          disabled={isSubmitting}
                          value={leadForm.meetingSlot}
                          onChange={(e) => setLeadForm({ ...leadForm, meetingSlot: e.target.value })}
                          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-400"
                        >
                          <option value="Tomorrow, 3:00 PM IST">Tomorrow, 3:00 PM IST</option>
                          <option value="Tomorrow, 7:30 PM IST">Tomorrow, 7:30 PM IST (US Overlap)</option>
                          <option value="Friday, 11:30 AM IST">Friday, 11:30 AM IST</option>
                          <option value="Monday, 5:00 PM IST">Monday, 5:00 PM IST (UK Overlap)</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                          Specific Requirements or Notes
                        </label>
                        <textarea
                          rows={2}
                          disabled={isSubmitting}
                          value={leadForm.message}
                          onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                          placeholder="Briefly describe what you need (e.g. Meta Ads campaign, Instagram management, Salesforce development, or SEO blogs)..."
                          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-extrabold text-sm shadow-md shadow-sky-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-white" />
                            <span>Creating Enquiry & Sending Meet Link...</span>
                          </>
                        ) : (
                          <>
                            <Calendar className="w-4 h-4 text-white" />
                            <span>Send Enquiry & Schedule Google Meet</span>
                            <ArrowUpRight className="w-4 h-4 text-white" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-800 mt-4 flex items-center justify-between text-[11px] text-slate-400">
                  <span>NDA & IP Transferred</span>
                  <span className="text-emerald-400 font-semibold">Automatic Google Meet Email</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE / CONTACT SECTION - SYNCED TO SALESFORCE */}
      <section id="contact" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-mono tracking-widest text-sky-600 font-bold">
                Direct Contact
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                Let's Build Your Vision with Sparklynh.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Reach out to our engineering and growth team. Whether you need an enterprise Salesforce deployment, an MVP launched in 4 weeks, high-converting Meta Ads, or authority content creation.
              </p>

              <div className="space-y-4 pt-4 text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-900">Sparklynh Headquarters</span>
                    <span className="text-xs text-slate-500">Jaipur, Rajasthan, India • PIN 302016</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-900">Direct / WhatsApp Business</span>
                    <a href={`https://wa.me/918209116792?text=${whatsappMessage}`} className="text-xs text-emerald-600 hover:underline font-medium">
                      +91 98281 24829 (Instant Reply)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-900">Official Enterprise Email</span>
                    <span className="text-xs text-slate-500">contact@sparklynh.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Card with Salesforce Sync */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg relative">
              {formSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Enquiry Registered!</h3>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto">
                    Thank you! Your project enquiry has been recorded in our Salesforce system. A confirmation email with meeting details has been dispatched.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  {submitError && (
                    <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        disabled={isSubmitting}
                        value={leadForm.phone}
                        onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        disabled={isSubmitting}
                        value={leadForm.company}
                        onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })}
                        placeholder="Company Inc."
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Required Service Track
                    </label>
                    <select
                      disabled={isSubmitting}
                      value={leadForm.service}
                      onChange={(e) => setLeadForm({ ...leadForm, service: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:opacity-50"
                    >
                      <option value="Salesforce Consulting & LWC">Salesforce Apex, LWC & CRM</option>
                      <option value="Meta Ads & Promotion">Meta Ads & Performance Marketing (FB/Instagram)</option>
                      <option value="Social Media Handling">Social Media Account Management & Reels</option>
                      <option value="Content & Copywriting">Content Writing, SEO Articles & Conversion Copy</option>
                      <option value="SaaS Platform Development">SaaS Product Development</option>
                      <option value="Full-Stack Web & Mobile">Full-Stack Web / Mobile (Flutter)</option>
                      <option value="AI Agent & Automation">AI Integration & Automation</option>
                      <option value="Dedicated Dev Team">Dedicated Developers / Growth Team Retainer</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Project Goals & Deliverables *
                    </label>
                    <textarea
                      required
                      disabled={isSubmitting}
                      rows={3}
                      value={leadForm.message}
                      onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                      placeholder="Briefly describe what you need (e.g. Meta Ads campaign, Instagram management, Salesforce development, or SEO blogs)..."
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 resize-none disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-extrabold text-sm shadow-md shadow-sky-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Syncing with Salesforce...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        <span>Contact Us</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MODERN EXECUTIVE FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-xs relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-sky-500/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
            
            {/* Column 1: Brand & Bio & Socials (4 Cols) */}
            <div className="lg:col-span-4 space-y-5">
              <a href="#" className="flex items-center gap-3 group">
                <SparklynhLogo className="w-9 h-9 transition-transform group-hover:scale-105" />
                <div className="flex flex-col">
                  <span className="font-black text-white text-lg tracking-tight leading-none flex items-center gap-1">
                    SPARKLYNH
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block"></span>
                  </span>
                  <p className="text-[9px] uppercase font-mono tracking-widest text-sky-400 font-bold mt-1">
                    Technologies Pvt. Ltd.
                  </p>
                </div>
              </a>

              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Architecting enterprise-grade Salesforce solutions, custom SaaS platforms, high-converting Meta Ad campaigns, and authority digital content. Built with engineering excellence in Jaipur, delivering globally.
              </p>

              {/* Direct Social Channels */}
              <div className="pt-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-2.5">
                  Connect With Us
                </span>
                <div className="flex items-center gap-2.5">
                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/918209116792?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all shadow-sm"
                    title="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/sparklynh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 hover:text-white hover:bg-sky-600 hover:border-sky-500 transition-all shadow-sm"
                    title="Connect on LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/sparklynhtechnology/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-rose-400 hover:text-white hover:bg-rose-600 hover:border-rose-500 transition-all shadow-sm"
                    title="Follow on Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Core Engineering & Growth (3 Cols) */}
            <div className="lg:col-span-3 space-y-3">
              <span className="text-xs font-bold text-white uppercase tracking-wider block font-mono">
                Services & Capabilities
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#salesforce" className="hover:text-sky-400 transition-colors inline-flex items-center gap-1.5">
                    <span className="text-sky-500">›</span> Salesforce Apex & LWC Engineering
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-sky-400 transition-colors inline-flex items-center gap-1.5">
                    <span className="text-sky-500">›</span> Meta Ads & Performance Funnels
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-sky-400 transition-colors inline-flex items-center gap-1.5">
                    <span className="text-sky-500">›</span> Social Media Account Management
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-sky-400 transition-colors inline-flex items-center gap-1.5">
                    <span className="text-sky-500">›</span> Technical Content & Copywriting
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-sky-400 transition-colors inline-flex items-center gap-1.5">
                    <span className="text-sky-500">›</span> Full-Stack SaaS MVP Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-sky-400 transition-colors inline-flex items-center gap-1.5">
                    <span className="text-sky-500">›</span> Custom Agentic AI & RAG Workflows
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Navigation & Company (2 Cols) */}
            <div className="lg:col-span-2 space-y-3">
              <span className="text-xs font-bold text-white uppercase tracking-wider block font-mono">
                Company
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#why-sparklynh" className="hover:text-sky-400 transition-colors">Why Sparklynh</a>
                </li>
                <li>
                  <a href="#case-studies" className="hover:text-sky-400 transition-colors">Delivered Work </a>
                </li>
                <li>
                  <a href="#estimator" className="hover:text-sky-400 transition-colors">Scope Configurator</a>
                </li>
                <li>
                  <button 
                    onClick={() => setShowConsultModal(true)} 
                    className="hover:text-sky-400 transition-colors cursor-pointer text-left"
                  >
                    Book Discovery Call
                  </button>
                </li>
                <li>
                  <a href="#contact" className="hover:text-sky-400 transition-colors">Contact Sales</a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Jaipur HQ Info (3 Cols) */}
            <div className="lg:col-span-3 space-y-3">
              <span className="text-xs font-bold text-white uppercase tracking-wider block font-mono">
                Jaipur Delivery Hub
              </span>
              <div className="space-y-2.5 text-xs text-slate-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Jaipur, Rajasthan, India - 302016</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href={`https://wa.me/918209116792?text=${whatsappMessage}`} className="hover:text-emerald-400 transition-colors">
                    +91 98281 24829
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <a href="mailto:contact@sparklynh.com" className="hover:text-sky-400 transition-colors">
                    contact@sparklynh.com
                  </a>
                </div>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-slate-300 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>IST, US & UK Overlap Shifts</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Compliance */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
              <span>© 2026 Sparklynh Technologies Pvt. Ltd. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-slate-400 font-mono">GST & MSME Registered</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-slate-400">
                <span>Handcrafted in Jaipur, Rajasthan 🇮🇳</span>
              </span>
              <span>•</span>
              <span className="text-sky-400 font-medium">Global Delivery</span>
            </div>
          </div>
        </div>
      </footer>

      {/* DIRECT CONSULTATION MODAL */}
      {showConsultModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setShowConsultModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Book 1-on-1 Strategy & Discovery Call</h3>
                <p className="text-xs text-sky-700 font-medium">Direct Salesforce Sync & Instant Google Meet</p>
              </div>
            </div>

            <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6 text-xs text-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Meeting Platform:</span>
                <span className="font-semibold text-slate-900">Google Meet</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Duration:</span>
                <span className="font-semibold text-slate-900">30 Minutes</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Timezone Support:</span>
                <span className="text-sky-700 font-medium">IST, EST, PST, GMT Flexible</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-2">
                  Select an Available Slot (IST):
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {['Tomorrow, 3:00 PM IST', 'Tomorrow, 7:30 PM IST', 'Friday, 11:30 AM IST', 'Monday, 5:00 PM IST'].map((slot, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setLeadForm((prev) => ({ ...prev, meetingSlot: slot }));
                        setShowConsultModal(false);
                        const element = document.getElementById('estimator');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium hover:border-sky-500 hover:bg-sky-50 transition-all text-center cursor-pointer shadow-sm"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/918209116792?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold text-center flex items-center justify-center gap-2 hover:bg-emerald-100 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Prefer chatting on WhatsApp instead?</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}