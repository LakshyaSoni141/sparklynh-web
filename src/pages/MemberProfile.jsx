import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Briefcase,
  Layers,
  Menu,
  X
} from 'lucide-react';

const SparklynhLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="spkCloudGradProf" x1="20" y1="50" x2="140" y2="120" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0284c7" />
        <stop offset="50%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <linearGradient id="spkNodeGradProf" x1="10" y1="20" x2="120" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
    </defs>
    <path d="M36 102 C36 102 30 84 45 74 C50 71 58 72 64 76 C69 66 82 60 94 66 C105 58 120 63 125 76 C134 78 142 86 140 98 C138 108 128 112 118 112 L44 112 C36 112 36 102 36 102 Z" fill="url(#spkCloudGradProf)" />
    <circle cx="39" cy="54" r="8.5" fill="#ffffff" stroke="url(#spkNodeGradProf)" strokeWidth="5.5" />
    <circle cx="71" cy="36" r="9.5" fill="#ffffff" stroke="url(#spkNodeGradProf)" strokeWidth="6" />
    <circle cx="112" cy="45" r="10.5" fill="#ffffff" stroke="url(#spkNodeGradProf)" strokeWidth="6.5" />
    <circle cx="26" cy="74" r="7.5" fill="#ffffff" stroke="url(#spkNodeGradProf)" strokeWidth="5.5" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function MemberProfile() {
  const { id } = useParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const teamDatabase = {
    "lakshya-soni": {
      name: "Lakshya Soni",
      role: "Salesforce Developer & Integration Specialist",
      specialization: "Salesforce CRM, Apex, LWC, API Integrations & Enterprise Cloud",
      experience: "2+ Years Experience",
      image: `${import.meta.env.BASE_URL}lakshya.jpeg`,
      location: "Jaipur, Rajasthan, India",
      linkedin: "https://www.linkedin.com/in/lakshyasoni-jaipur/",
      email: "lakshyasoni@sparklynh.com",
      about: "Specializes in architecting scalable Salesforce solutions, custom Apex triggers, responsive Lightning Web Components, and automated middleware integrations. Experienced in connecting Salesforce with Shopify, SharePoint, MuleSoft, and Microsoft Graph API.",
      skills: ["Apex & LWC", "Sales & Service Cloud", "REST/SOAP Web Services", "Microsoft Graph API", "MuleSoft Integrations", "SharePoint Document Sync", "SOQL Optimization", "Flow Automation"],
      highlights: [
        "Architected custom Salesforce EmailMessage and Case SharePoint attachment interfaces with batch processing.",
        "Built automated lead and order ingestion pipelines with bi-directional payment webhooks.",
        "Developed custom CPQ pricing rule calculators and governor-limit optimized trigger architectures."
      ]
    },
    "harish-yadav": {
      name: "Harish Yadav",
      role: "Salesforce Administrator & Service Cloud Specialist",
      specialization: "Salesforce Administration, Service Cloud, CRM Automation & Operations",
      experience: "2+ Years Experience",
      image: `${import.meta.env.BASE_URL}harish.png`,
      location: "Jaipur, Rajasthan, India",
      linkedin: "https://www.linkedin.com/in/harish-yadav-348a6b257/",
      email: "harishyadav@sparklynh.com",
      about: "Specializes in end-to-end Salesforce Administration, omnichannel customer support workflows, case escalation matrices, and declarative flow orchestration.",
      skills: ["Salesforce Setup & Security", "Service Cloud", "Omni-Channel Routing", "Screen & Auto-Launched Flows", "Case Management", "Permission Sets & Profiles", "Audit & Reporting"],
      highlights: [
        "Configured omnichannel support engines decreasing first response latency across client service tickets.",
        "Created complex declarative business flows replacing outdated workflow rules.",
        "Managed user provisioning, license distribution, and granular sharing architecture audits."
      ]
    },
    "rajdeep-singh": {
      name: "Rajdeep Singh",
      role: "Salesforce Administrator & Developer",
      specialization: "Sales Cloud, Apex, Lightning Web Components & Process Engineering",
      experience: "3+ Years of Experience",
      image: `${import.meta.env.BASE_URL}rajdeep.jpeg`,
      location: "Jaipur, Rajasthan, India",
      linkedin: "https://www.linkedin.com/in/rajdeepsinghsisodia/",
      email: "rajdeepsingh@sparklynh.com",
      about: "Combines administration rigor with custom development capabilities. Focuses on revenue pipeline engineering, customized opportunity stages, automated quote generation, and scalable Apex codebases.",
      skills: ["Sales Cloud CRM", "Apex Batch Classes", "Lightning Web Components", "Opportunity Automation", "Data Cleansing & Validation", "AppExchange Packages", "Custom Report Types"],
      highlights: [
        "Engineered custom Sales Cloud pipelines with dynamic milestone tracking and automated reminders.",
        "Built custom responsive LWC deal overview cards replacing static record page interfaces.",
        "Cleaned dormant technical debt across client orgs, improving unit test coverage past 90%."
      ]
    },
    "lakshay-sharma": {
      name: "Lakshay Sharma",
      role: "EDI Specialist & Integration Engineer",
      specialization: "ANSI X12 EDI, HIPAA Standards, Boomi iPaaS & API Gateways",
      experience: "2+ Years of Experience",
      image: `${import.meta.env.BASE_URL}lakshay.png`,
      location: "Jaipur, Rajasthan, India",
      linkedin: "https://www.linkedin.com/in/lakshay-sharma2/",
      email: "lakshaysharma@sparklynh.com",
      about: "Specializes in mission-critical EDI pipelines and enterprise middleware solutions. Deep domain experience with healthcare and supply chain transaction sets, automated data mapping, and iPaaS connectivity.",
      skills: ["ANSI X12 EDI", "EDI 834, 856, 850, 810", "HIPAA Compliance", "Dell Boomi iPaaS", "SQL & ETL Pipelines", "REST APIs", "Error Handling & Logging"],
      highlights: [
        "Implemented seamless ANSI X12 batch processing engines for real-time order and enrollment validation.",
        "Configured Boomi middleware connections connecting ERPs to custom web applications.",
        "Constructed automated translation and error-alerting bots reducing transmission discrepancies."
      ]
    },
    "sachin-choudhary": {
      name: "Sachin Choudhary",
      role: "Data Scientist & AI Engineer",
      specialization: "Python, SQL, Machine Learning, Deep Learning & Generative AI",
      experience: "2+ Years of Experience",
      image: `${import.meta.env.BASE_URL}sachin.png`,
      location: "Jaipur, Rajasthan, India",
      linkedin: "https://www.linkedin.com/in/sachin-choudhary-83735b2a8/",
      email: "sachinchoudhary@sparklynh.com",
      about: "Translates complex unstructured data into automated business intelligence. Builds custom machine learning predictive pipelines, vector-embedded RAG workflows, and LLM-powered applications.",
      skills: ["Python", "SQL", "Machine Learning & Scikit-learn", "Deep Learning", "LLM APIs & Prompt Chains", "Vector Databases", "Predictive Analytics"],
      highlights: [
        "Engineered internal RAG search applications allowing instant search across technical PDF manuals.",
        "Constructed customer churn and lifetime value prediction models for e-commerce platforms.",
        "Developed automated data-cleaning scripts processing millions of rows with high reliability."
      ]
    },
    "nivanshu-gupta": {
      name: "Nivanshu Gupta",
      role: "QA Engineer & Manual Testing Specialist",
      specialization: "Quality Assurance, Manual Testing, Mobile App QA & Healthcare Domain",
      experience: "3+ Years of Experience",
      image: `${import.meta.env.BASE_URL}nivanshu.jpg`,
      location: "Jaipur, Rajasthan, India",
      linkedin: "https://www.linkedin.com/in/nivanshu-gupta-00844126a/",
      email: "nivanshugupta@sparklynh.com",
      about: "Dedicated quality assurance professional ensuring production software releases remain bug-free, resilient, and user-friendly. Experienced in regression cycles, boundary value tests, and cross-platform verification.",
      skills: ["Manual Functional Testing", "Mobile App QA (iOS/Android)", "Test Case Design", "Regression & Smoke Testing", "Healthcare Compliance QA", "Defect Tracking (Jira)", "API Testing (Postman)"],
      highlights: [
        "Led QA validation on enterprise web applications with zero critical defects escaping to production.",
        "Created exhaustive end-to-end regression test suites covering multi-role user authorizations.",
        "Conducted cross-device responsive performance tests for customer-facing mobile platforms."
      ]
    }
  };

  const member = teamDatabase[id];

  if (!member) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Team Member Not Found</h2>
        <p className="text-slate-600 text-sm mb-6">The requested team profile does not exist.</p>
        <Link to="/team" className="px-5 py-2.5 rounded-xl bg-sky-600 text-white font-semibold text-xs shadow-sm hover:bg-sky-500 transition-colors">
          Return to Team Directory
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-sky-500 selection:text-white pt-24 sm:pt-28">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-blue-200/40 rounded-full blur-[150px]" />
      </div>

      {/* STATIC FIXED HEADER */}
      <div className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="bg-gradient-to-r from-slate-100 via-sky-50 to-blue-50 border-b border-slate-200 py-2 text-center text-xs text-slate-600 px-4 flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-medium text-slate-700">
              Headquartered in <strong className="text-slate-900">Jaipur, India</strong> • Delivering Worldwide across US, UK, Middle East & APAC
            </span>
          </div>
        </div>

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

          <nav className="hidden lg:flex items-center gap-6 text-[13px] font-semibold text-slate-600 shrink-0">
            <Link to="/#services" className="hover:text-sky-600 transition-colors">Services</Link>
            <Link to="/#salesforce" className="hover:text-sky-600 transition-colors">Salesforce</Link>
            <Link to="/#case-studies" className="hover:text-sky-600 transition-colors">Deliveries</Link>
            <Link to="/#estimator" className="hover:text-sky-600 transition-colors">Scope</Link>
            <Link to="/career" className="hover:text-sky-600 transition-colors">Careers</Link>
            <Link to="/team" className="bg-sky-50 text-sky-600 font-bold border border-sky-200 px-2.5 py-1 rounded-lg">Team</Link>
            <Link to="/#contact" className="hover:text-sky-600 transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-2.5">
            <Link to="/team" className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Team</span>
            </Link>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-slate-600">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 shadow-lg">
            <Link to="/#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">Services</Link>
            <Link to="/team" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sky-600 font-bold">Team Directory</Link>
            <Link to="/career" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">Careers</Link>
            <Link to="/#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">Contact</Link>
          </div>
        )}
      </div>

      {/* Profile Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-blue-950 p-6 sm:p-10 text-white relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-sky-400/40 shadow-xl shrink-0 bg-slate-800">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center" />
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-[11px] font-mono font-bold uppercase inline-block">
                  {member.experience}
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">{member.name}</h1>
                <p className="text-sm sm:text-base text-sky-200 font-medium">{member.role}</p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{member.location}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Verified Core Member</span>
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-3">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-sm">
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <a href={`mailto:${member.email}`} className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 flex items-center gap-2 transition-all">
                    <Mail className="w-4 h-4 text-sky-300" />
                    <span>{member.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-6 sm:p-10 space-y-10">
            <div>
              <h2 className="text-xs uppercase font-mono tracking-widest text-sky-600 font-bold mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>Executive Overview</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {member.about}
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase font-mono tracking-widest text-sky-600 font-bold mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Skills & Technical Stack</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold font-mono shadow-2xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs uppercase font-mono tracking-widest text-sky-600 font-bold mb-4 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Impact & Production Deliverables</span>
              </h2>
              <div className="space-y-3">
                {member.highlights.map((highlight, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-500 mt-12">
        <p>© 2026 Sparklynh Technologies Pvt. Ltd. • Jaipur, Rajasthan, India</p>
      </footer>
    </div>
  );
}