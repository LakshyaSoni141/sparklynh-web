import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Mail, 
  Sparkles, 
  ChevronRight,
  ShieldCheck,
  Award,
  ArrowUpRight,
  Menu,
  X,
  Calendar,
  MessageCircle
} from 'lucide-react';

// Exact Sparklynh Brand Logo
const SparklynhLogo = ({ className = "w-10 h-10" }) => (
  <svg 
    viewBox="0 0 160 140" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <defs>
      <linearGradient id="spkCloudGradTeam" x1="20" y1="50" x2="140" y2="120" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0284c7" />
        <stop offset="50%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <linearGradient id="spkNodeGradTeam" x1="10" y1="20" x2="120" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
    </defs>
    
    <path
      d="M36 102 C36 102 30 84 45 74 C50 71 58 72 64 76 C69 66 82 60 94 66 C105 58 120 63 125 76 C134 78 142 86 140 98 C138 108 128 112 118 112 L44 112 C36 112 36 102 36 102 Z"
      fill="url(#spkCloudGradTeam)"
      filter="drop-shadow(0px 8px 16px rgba(14, 165, 233, 0.25))"
    />

    <path 
      d="M58 84 C48 80 32 75 28 65 C24 55 30 45 40 45 C50 45 54 55 48 65 C43 72 52 78 60 82" 
      stroke="url(#spkNodeGradTeam)" 
      strokeWidth="6" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      fill="none" 
    />
    <circle cx="39" cy="54" r="8.5" fill="#ffffff" stroke="url(#spkNodeGradTeam)" strokeWidth="5.5" />

    <path 
      d="M68 80 C60 70 52 52 58 38 C64 24 80 24 85 36 C90 48 78 60 70 78" 
      stroke="url(#spkNodeGradTeam)" 
      strokeWidth="6" 
      strokeLinecap="round" 
      fill="none" 
    />
    <circle cx="71" cy="36" r="9.5" fill="#ffffff" stroke="url(#spkNodeGradTeam)" strokeWidth="6" />

    <path 
      d="M78 80 C80 66 88 44 100 36 C112 28 126 38 124 52 C122 66 106 72 88 82" 
      stroke="url(#spkNodeGradTeam)" 
      strokeWidth="6.5" 
      strokeLinecap="round" 
      fill="none" 
    />
    <circle cx="112" cy="45" r="10.5" fill="#ffffff" stroke="url(#spkNodeGradTeam)" strokeWidth="6.5" />

    <path 
      d="M50 92 C40 92 24 90 18 80 C12 68 22 56 34 60" 
      stroke="url(#spkNodeGradTeam)" 
      strokeWidth="5.5" 
      strokeLinecap="round" 
      fill="none" 
    />
    <circle cx="26" cy="74" r="7.5" fill="#ffffff" stroke="url(#spkNodeGradTeam)" strokeWidth="5.5" />
  </svg>
);

// Custom Native LinkedIn SVG
const LinkedinIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Team() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hello Sparklynh Team! I came across your team profiles and would like to discuss a project."
  );

  const teamMembers = [
    {
      id: "lakshya-soni",
      name: "Lakshya Soni",
      role: "Salesforce Developer & Integration Specialist",
      specialization: "Salesforce CRM, Apex, LWC, API Integrations & Automation",
      experience: "2+ Years of Experience",
      image: `${import.meta.env.BASE_URL}lakshya.jpeg`,
      bio: "Specializes in building scalable Salesforce solutions, custom Apex applications, Lightning Web Components, and enterprise integrations. Experienced in designing automated business workflows and connecting Salesforce with platforms like Shopify, SharePoint, MuleSoft, and Microsoft Graph API. Focused on delivering reliable, scalable, and efficient cloud solutions.",
      linkedin: "https://www.linkedin.com/in/lakshyasoni-jaipur/",
      email: "lakshyasoni@sparklynh.com"
    },
    {
      id: "harish-yadav",
      name: "Harish Yadav",
      role: "Salesforce Administrator & Service Cloud Specialist",
      specialization: "Salesforce Administration, Service Cloud, CRM Automation & Customer Support Solutions",
      experience: "2+ Years of Experience",
      image: `${import.meta.env.BASE_URL}harish.png`,
      bio: "Specializes in Salesforce administration, Service Cloud implementation, business process automation, case management, and CRM optimization. Focused on streamlining customer support operations and delivering efficient Salesforce solutions.",
      linkedin: "https://www.linkedin.com/in/harish-yadav-348a6b257/",
      email: "harishyadav@sparklynh.com"
    },
    {
      id: "rajdeep-singh",
      name: "Rajdeep Singh",
      role: "Salesforce Administrator & Developer",
      specialization: "Sales Cloud, Apex, Lightning Web Components & CRM Automation",
      experience: "3+ Years of Experience",
      image: `${import.meta.env.BASE_URL}rajdeep.jpeg`,
      bio: "Specializes in Salesforce administration, custom development, Sales Cloud implementation, Apex programming, and business process automation. Focused on optimizing sales operations, streamlining CRM workflows, and building scalable Salesforce solutions.",
      linkedin: "https://www.linkedin.com/in/rajdeepsinghsisodia/",
      email: "rajdeepsingh@sparklynh.com"
    },
    {
      id: "lakshay-sharma",
      name: "Lakshay Sharma",
      role: "EDI Specialist & Integration Engineer",
      specialization: "ANSI X12 EDI, HIPAA EDI, Boomi, iPaaS & API Integration",
      experience: "2+ Years of Experience",
      image: `${import.meta.env.BASE_URL}lakshay.png`,
      bio: "Specializes in EDI integrations, ANSI X12 transaction standards (834, 856, 850, 810, 999), HIPAA EDI, and enterprise iPaaS solutions. Experienced in data mapping, SQL, Boomi integrations, and building seamless API-driven business workflows.",
      linkedin: "https://www.linkedin.com/in/lakshay-sharma2/",
      email: "lakshaysharma@sparklynh.com"
    },
    {
      id: "sachin-choudhary",
      name: "Sachin Choudhary",
      role: "Data Scientist & AI Engineer",
      specialization: "Python, SQL, Machine Learning, Deep Learning & Generative AI",
      experience: "2+ Years of Experience",
      image: `${import.meta.env.BASE_URL}sachin.png`,
      bio: "Specializes in data science, artificial intelligence, machine learning, deep learning, and generative AI. Experienced in Python and SQL, with a focus on developing intelligent solutions, building predictive models, and leveraging large language models to solve real-world business challenges.",
      linkedin: "https://www.linkedin.com/in/sachin-choudhary-83735b2a8/",
      email: "sachinchoudhary@sparklynh.com"
    },
    {
      id: "nivanshu-gupta",
      name: "Nivanshu Gupta",
      role: "QA Engineer & Manual Testing Specialist",
      specialization: "Quality Assurance, Manual Testing, Mobile App Testing & Healthcare Software Testing",
      experience: "3+ Years of Experience",
      image: `${import.meta.env.BASE_URL}nivanshu.jpg`,
      bio: "Specializes in quality assurance, manual software testing, mobile application testing, and healthcare domain testing. Focused on ensuring software reliability, identifying defects, validating application functionality, and delivering seamless user experiences through effective testing practices.",
      linkedin: "https://www.linkedin.com/in/nivanshu-gupta-00844126a/",
      email: "nivanshugupta@sparklynh.com"
    }
  ];

  const handleMemberClick = (memberId) => {
    navigate(`/team/${memberId}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-sky-500 selection:text-white pt-24 sm:pt-28">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-blue-200/40 rounded-full blur-[150px]" />
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
            <Link 
              to="/#estimator" 
              className="underline font-semibold hover:text-sky-700 transition-colors text-sky-600"
            >
              Schedule Technical Discovery →
            </Link>
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
            <Link to="/#services" className="hover:text-sky-600 transition-colors whitespace-nowrap">Services</Link>
            <Link to="/#salesforce" className="hover:text-sky-600 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap">
              <span>Salesforce</span>
              <span className="bg-sky-50 text-sky-700 border border-sky-200/80 text-[10px] px-1.5 py-0.5 rounded font-mono font-bold leading-none">
                Hub
              </span>
            </Link>
            <Link to="/#case-studies" className="hover:text-sky-600 transition-colors whitespace-nowrap">Deliveries</Link>
            <Link to="/#estimator" className="hover:text-sky-600 transition-colors whitespace-nowrap">Scope & Discovery</Link>
            <Link to="/#why-sparklynh" className="hover:text-sky-600 transition-colors whitespace-nowrap">Why Us</Link>
            
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

            <Link to="/#contact" className="hover:text-sky-600 transition-colors whitespace-nowrap">Contact</Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href={`https://wa.me/919828124829?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 hover:bg-emerald-100 transition-all flex items-center justify-center cursor-pointer shadow-2xs"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <Link
              to="/#estimator"
              className="px-3.5 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Call</span>
            </Link>
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
            <Link 
              to="/#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 font-medium py-2 hover:text-sky-600"
            >
              Services
            </Link>
            <Link 
              to="/#salesforce" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 font-medium py-2 hover:text-sky-600"
            >
              Salesforce Cloud
            </Link>
            <Link 
              to="/#case-studies" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 font-medium py-2 hover:text-sky-600"
            >
              Our Deliveries
            </Link>
            <Link 
              to="/#estimator" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 font-medium py-2 hover:text-sky-600"
            >
              Scope & Discovery Call
            </Link>
            <Link 
              to="/#why-sparklynh" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 font-medium py-2 hover:text-sky-600"
            >
              Why Us
            </Link>

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

            <Link 
              to="/#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 font-medium py-2 hover:text-sky-600"
            >
              Contact
            </Link>
            <div className="pt-2 flex flex-col gap-2">
              <Link
                to="/#estimator"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-lg bg-sky-600 text-white font-bold text-center text-xs shadow-xs"
              >
                Schedule Technical Discovery
              </Link>
              <a
                href={`https://wa.me/919828124829?text=${whatsappMessage}`}
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

      {/* Hero Section */}
      <section className="relative pt-16 pb-14 z-10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>The Minds Behind Sparklynh</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Meet the Builders & <br />
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Architects Shaping the Future
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our multidisciplinary squad of certified Salesforce developers, full-stack engineers, and growth marketers delivering global-standard products right from Jaipur.
          </p>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-500 font-semibold uppercase tracking-wider font-mono">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Direct Senior Access</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-sky-500" /> Enterprise Certified</span>
          </div>
        </div>
      </section>

      {/* Team Cards Grid */}
      <section className="pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                onClick={() => handleMemberClick(member.id)}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-sky-400 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Image Container with Hover Zoom */}
                  <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90" />
                    
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="px-2.5 py-1 rounded-full bg-sky-500/90 text-[10px] font-mono font-bold tracking-wider uppercase mb-2 inline-block backdrop-blur-xs">
                        {member.experience}
                      </span>
                      <h3 className="text-xl font-bold text-white flex items-center justify-between">
                        <span>{member.name}</span>
                        <ArrowUpRight className="w-5 h-5 text-sky-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </h3>
                      <p className="text-xs text-sky-200 font-medium">{member.role}</p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                        Core Expertise
                      </span>
                      <p className="text-xs font-semibold text-slate-800">
                        {member.specialization}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-600 group-hover:text-sky-700 flex items-center gap-1">
                    <span>View Profile & Work</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-50 hover:bg-sky-50 text-slate-500 hover:text-sky-600 transition-colors"
                      title="LinkedIn"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="p-1.5 rounded-lg bg-slate-50 hover:bg-sky-50 text-slate-500 hover:text-sky-600 transition-colors"
                      title="Send Email"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <p>© 2026 Sparklynh Technologies Pvt. Ltd. • Jaipur, Rajasthan, India</p>
      </footer>
    </div>
  );
}