import { useState } from 'react';
import { 
  GraduationCap, 
  Send, 
  CheckCircle2, 
  Award, 
  Code2, 
  Laptop, 
  ChevronRight,
  TrendingUp,
  Cloud,
  PenTool,
  Loader2,
  AlertCircle,
  Briefcase,
  Menu,
  X,
  Calendar,
  MessageCircle
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Exact Sparklynh Brand Logo
const SparklynhLogo = ({ className = "w-10 h-10" }) => (
  <svg 
    viewBox="0 0 160 140" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <defs>
      <linearGradient id="spkCloudGradCareer" x1="20" y1="50" x2="140" y2="120" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0284c7" />
        <stop offset="50%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <linearGradient id="spkNodeGradCareer" x1="10" y1="20" x2="120" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
    </defs>
    
    <path
      d="M36 102 C36 102 30 84 45 74 C50 71 58 72 64 76 C69 66 82 60 94 66 C105 58 120 63 125 76 C134 78 142 86 140 98 C138 108 128 112 118 112 L44 112 C36 112 36 102 36 102 Z"
      fill="url(#spkCloudGradCareer)"
      filter="drop-shadow(0px 8px 16px rgba(14, 165, 233, 0.25))"
    />

    <path 
      d="M58 84 C48 80 32 75 28 65 C24 55 30 45 40 45 C50 45 54 55 48 65 C43 72 52 78 60 82" 
      stroke="url(#spkNodeGradCareer)" 
      strokeWidth="6" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      fill="none" 
    />
    <circle cx="39" cy="54" r="8.5" fill="#ffffff" stroke="url(#spkNodeGradCareer)" strokeWidth="5.5" />

    <path 
      d="M68 80 C60 70 52 52 58 38 C64 24 80 24 85 36 C90 48 78 60 70 78" 
      stroke="url(#spkNodeGradCareer)" 
      strokeWidth="6" 
      strokeLinecap="round" 
      fill="none" 
    />
    <circle cx="71" cy="36" r="9.5" fill="#ffffff" stroke="url(#spkNodeGradCareer)" strokeWidth="6" />

    <path 
      d="M78 80 C80 66 88 44 100 36 C112 28 126 38 124 52 C122 66 106 72 88 82" 
      stroke="url(#spkNodeGradCareer)" 
      strokeWidth="6.5" 
      strokeLinecap="round" 
      fill="none" 
    />
    <circle cx="112" cy="45" r="10.5" fill="#ffffff" stroke="url(#spkNodeGradCareer)" strokeWidth="6.5" />

    <path 
      d="M50 92 C40 92 24 90 18 80 C12 68 22 56 34 60" 
      stroke="url(#spkNodeGradCareer)" 
      strokeWidth="5.5" 
      strokeLinecap="round" 
      fill="none" 
    />
    <circle cx="26" cy="74" r="7.5" fill="#ffffff" stroke="url(#spkNodeGradCareer)" strokeWidth="5.5" />
  </svg>
);

export default function Career() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    degree: 'B.Tech / BCA / MCA',
    graduationYear: '2025',
    track: 'Salesforce Development (Apex & LWC)',
    githubOrLinkedin: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [selectedRoleBadge, setSelectedRoleBadge] = useState('Salesforce Development (Apex & LWC)');

  const whatsappMessage = encodeURIComponent(
    "Hello Sparklynh Team! I am interested in exploring opportunities with your engineering firm."
  );

  const internships = [
    {
      title: "Salesforce Developer Intern",
      trackKey: "Salesforce Development (Apex & LWC)",
      icon: Cloud,
      duration: "3 - 6 Months",
      mode: "Remote",
      stipend: "Performance Stated / Paid",
      skills: ["Apex", "LWC", "SOQL", "Flows", "REST APIs"],
      desc: "Work on live enterprise orgs, production triggers, bulkified handlers, and custom Lightning Web Components under senior architects."
    },
    {
      title: "Full-Stack Web Engineering Intern",
      trackKey: "Full-Stack Web Engineering (React / Node)",
      icon: Code2,
      duration: "3 - 6 Months",
      mode: "Remote",
      stipend: "Performance Stated / Paid",
      skills: ["React.js", "Node.js", "Tailwind CSS", "PostgreSQL", "Next.js"],
      desc: "Build scalable multi-tenant SaaS dashboards, custom portals, third-party API webhooks, and responsive frontend applications."
    },
    {
      title: "Meta Ads & Growth Marketing Intern",
      trackKey: "Meta Ads & Growth Marketing",
      icon: TrendingUp,
      duration: "3 - 6 Months",
      mode: "Remote",
      stipend: "Performance Stated / Paid",
      skills: ["Meta Ads Manager", "Audience Research", "A/B Testing", "Pixel/CAPI"],
      desc: "Execute high-converting paid ad campaigns, hook testing, creative analytics, and automated lead generation pipelines."
    },
    {
      title: "Content & Tech Copywriting Intern",
      trackKey: "Content & Tech Copywriting",
      icon: PenTool,
      duration: "3 - 6 Months",
      mode: "Remote",
      stipend: "Performance Stated / Paid",
      skills: ["SEO Articles", "Landing Page Copy", "Tech Blogs", "Outreach Writing"],
      desc: "Craft high-ranking technical articles, conversion landing page copy, case studies, and email sequences that rank and convert."
    }
  ];

  const handleSelectRole = (role) => {
    setFormData((prev) => ({
      ...prev,
      track: role.trackKey,
      message: `Applying for ${role.title}. Primary interest in: ${role.skills.join(', ')}.`
    }));
    setSelectedRoleBadge(role.title);

    const applySection = document.getElementById('apply');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Agar local par chal raha hai toh localhost:5000 lega, live hone par Render
    const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
      ? 'http://localhost:5000'
      : 'https://sparklynh-web.onrender.com';

    try {
      const response = await fetch(`${API_BASE_URL}/api/salesforce/student`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          college: formData.college,
          degree: formData.degree,
          graduationYear: formData.graduationYear,
          track: formData.track,
          githubOrLinkedin: formData.githubOrLinkedin,
          message: formData.message
        })
      });

      const contentType = response.headers.get("content-type");
      let resData;
      if (contentType && contentType.includes("application/json")) {
        resData = await response.json();
      } else {
        throw new Error(`Server status ${response.status}: Route not responding with JSON.`);
      }

      if (!response.ok) {
        throw new Error(resData.message || 'Application could not be saved to Salesforce.');
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          college: '',
          degree: 'B.Tech / BCA / MCA',
          graduationYear: '2025',
          track: 'Salesforce Development (Apex & LWC)',
          githubOrLinkedin: '',
          message: ''
        });
      }, 7000);
    } catch (err) {
      setSubmitError(err.message || 'Server error. Please reach out directly on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-sky-500 selection:text-white pt-24 sm:pt-28">
      {/* Background Mesh Glow */}
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
            <Link to="/#services" onClick={() => setMobileMenuOpen(false)} className="block text-slate-700 font-medium py-2 hover:text-sky-600">Services</Link>
            <Link to="/#salesforce" onClick={() => setMobileMenuOpen(false)} className="block text-slate-700 font-medium py-2 hover:text-sky-600">Salesforce Cloud</Link>
            <Link to="/#case-studies" onClick={() => setMobileMenuOpen(false)} className="block text-slate-700 font-medium py-2 hover:text-sky-600">Our Deliveries</Link>
            <Link to="/#estimator" onClick={() => setMobileMenuOpen(false)} className="block text-slate-700 font-medium py-2 hover:text-sky-600">Scope & Discovery Call</Link>
            <Link to="/#why-sparklynh" onClick={() => setMobileMenuOpen(false)} className="block text-slate-700 font-medium py-2 hover:text-sky-600">Why Us</Link>
            
            <Link 
              to="/career" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`py-2 flex items-center justify-between rounded-lg px-2 ${currentPath === '/career' ? 'bg-sky-50 text-sky-600 font-bold' : 'text-slate-700 font-medium'}`}
            >
              <span>Careers & Internships</span>
              <span className="bg-sky-100 text-sky-700 text-[10px] px-2 py-0.5 rounded font-mono font-bold">Hiring</span>
            </Link>
            
            <Link 
              to="/team" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`block py-2 rounded-lg px-2 ${currentPath === '/team' ? 'bg-sky-50 text-sky-600 font-bold' : 'text-slate-700 font-medium'}`}
            >
              Team
            </Link>
            
            <Link to="/#contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-700 font-medium py-2 hover:text-sky-600">Contact</Link>
            
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

      {/* Hero */}
      <section className="relative pt-16 pb-16 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-semibold mb-6 shadow-2xs">
            <GraduationCap className="w-4 h-4 text-sky-600" />
            <span>Sparklynh Developer & Growth Fellowship</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Launch Your Tech Career with <br />
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Hands-On Production Engineering
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Skip boilerplate tutorial projects. Work directly on production Salesforce deployments, cloud SaaS apps, real ad accounts, and enterprise codebases with senior mentors in Jaipur.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-semibold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Experience Letter & Certificate</span>
            </div>
            <div className="flex items-center gap-2">
              <Laptop className="w-4 h-4 text-sky-600" />
              <span>Real Production Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-600" />
              <span>PPO Opportunity on Completion</span>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Tracks */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Available Internship Positions</h2>
            <p className="text-slate-600 text-sm mt-2">Select your domain, review the requirements, and submit your application below.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internships.map((intern, i) => {
              const Icon = intern.icon;
              return (
                <div key={i} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-400 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md">
                        {intern.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{intern.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium mt-1 mb-4">
                      <span>{intern.mode}</span>
                      <span>•</span>
                      <span className="text-emerald-600 font-semibold">{intern.stipend}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">{intern.desc}</p>
                  </div>

                  <div>
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 mb-6">
                      {intern.skills.map((skill, si) => (
                        <span key={si} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectRole(intern)}
                      className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span>Apply for this Track</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-white border-t border-slate-200 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-mono tracking-widest text-sky-600 font-bold">Fast-Track Entry</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">Submit Your Internship Application</h2>
            <p className="text-slate-600 text-sm mt-1">Fill out your academic and project details. Our technical team will get in touch within 48 hours.</p>
          </div>

          <div className="mb-6 p-4 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-xs text-slate-700">
              <Briefcase className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Applying for: <strong className="text-slate-900">{selectedRoleBadge}</strong></span>
            </div>
            <span className="text-[10px] font-mono font-bold bg-white px-2 py-0.5 rounded border border-sky-200 text-sky-700">
              Auto-Selected
            </span>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-lg">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Application Received!</h3>
                <p className="text-slate-600 text-sm max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your profile has been stored in our Salesforce Student portal. Please monitor your email for the technical screening schedule.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitError && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      disabled={isSubmitting}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@example.com"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      disabled={isSubmitting}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">College / University Name *</label>
                    <input
                      type="text"
                      required
                      disabled={isSubmitting}
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      placeholder="e.g. RTU / Arya / JECRC"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">Current Degree / Branch</label>
                    <input
                      type="text"
                      disabled={isSubmitting}
                      value={formData.degree}
                      onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                      placeholder="B.Tech CS / BCA / MCA"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">Graduation Year</label>
                    <select
                      disabled={isSubmitting}
                      value={formData.graduationYear}
                      onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-sky-500"
                    >
                      <option value="2024">2024 (Passout)</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">Selected Track *</label>
                  <select
                    disabled={isSubmitting}
                    value={formData.track}
                    onChange={(e) => {
                      setFormData({ ...formData, track: e.target.value });
                      setSelectedRoleBadge(e.target.value);
                    }}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-sky-500"
                  >
                    <option value="Salesforce Development (Apex & LWC)">Salesforce Development (Apex & LWC)</option>
                    <option value="Full-Stack Web Engineering (React / Node)">Full-Stack Web Engineering (React / Node)</option>
                    <option value="Meta Ads & Growth Marketing">Meta Ads & Growth Marketing</option>
                    <option value="Content & Tech Copywriting">Content & Tech Copywriting</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">GitHub / LinkedIn / Portfolio URL</label>
                  <input
                    type="url"
                    disabled={isSubmitting}
                    value={formData.githubOrLinkedin}
                    onChange={(e) => setFormData({ ...formData, githubOrLinkedin: e.target.value })}
                    placeholder="https://github.com/... or https://linkedin.com/in/..."
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">Statement of Purpose / Built Projects</label>
                  <textarea
                    rows={3}
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us briefly about your technical background or projects you have built..."
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-sky-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-extrabold text-sm shadow-md shadow-sky-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Saving Student Record in Salesforce...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Submit Internship Application</span>
                    </>
                  )}
                </button>
              </form>
            )}
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