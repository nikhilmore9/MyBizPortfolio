export const personal = {
  name: "Nikhil More",
  role: "AI-First Demand Generation, Revenue Marketing & Performance Marketing Leader",
  location: "Pune, Maharashtra, India",
  email: "nikhil.more@live.com",
  phone: "+91 915 860 5755",
  phoneHref: "tel:+919158605755",
  linkedin: "https://www.linkedin.com/in/nikhilmore",
  resumeUrl: "/Nikhil_More_Resume_2026.pdf",
};

export const navLinks = [
  { label: "Impact", href: "#impact" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export type Metric = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  context: string;
};

export const metrics: Metric[] = [
  {
    value: 55,
    prefix: "$",
    suffix: "M+",
    label: "Sales-qualified pipeline",
    context:
      "Generated in 18 months at InspireXT through automated demand-generation frameworks.",
  },
  {
    value: 12,
    prefix: "$",
    suffix: "M",
    label: "Acquisition scaled at 2.1x ROAS",
    context:
      "Grown from $0 across a $4.79M three-year paid and outbound budget at EC-Council.",
  },
  {
    value: 25,
    suffix: "%",
    label: "CAC reduction",
    context: "Customer acquisition cost reduced from $340 to $255 at EC-Council.",
  },
  {
    value: 2.2,
    decimals: 1,
    prefix: "$",
    suffix: "M",
    label: "Incremental consulting revenue",
    context:
      "Delivered across eight consulting engagements spanning paid media, SEO, CRO and lifecycle automation.",
  },
  {
    value: 5,
    prefix: "₹",
    suffix: "Cr+",
    label: "Retention & expansion revenue",
    context:
      "Contributed at Quick Heal through renewal, win-back and cross-sell/upsell programmes.",
  },
  {
    value: 20,
    suffix: "%",
    label: "C-suite meeting conversion",
    context: "Of enterprise ABM targets, across a 47-account programme at InspireXT.",
  },
];

export const problems = [
  {
    problem: "Fragmented marketing activity",
    outcome: "An integrated demand and revenue engine",
  },
  {
    problem: "High acquisition cost",
    outcome: "Better channel economics, targeting, creative and conversion systems",
  },
  {
    problem: "Complex B2B buying journeys",
    outcome: "ABM, lifecycle orchestration and sales alignment",
  },
  {
    problem: "Unfocused AI adoption",
    outcome: "AI-first workflows governed by measurable commercial outcomes",
  },
];

export const pillars = [
  "Strategy & GTM",
  "Demand Generation & Paid Media",
  "ABM & Sales Alignment",
  "Lifecycle & Marketing Automation",
  "SEO, GEO, LLMO & Content",
  "CRO, Attribution, Analytics & AI",
];

export const caseStudies = [
  {
    company: "InspireXT",
    context: "Supply chain and AI consulting",
    intervention:
      "Built an automated demand-generation framework and led a 47-account enterprise ABM programme using LinkedIn Sales Navigator, Apollo.io and ZoomInfo.",
    result:
      "$55M+ in sales-qualified pipeline within 18 months; 20% of C-suite targets converted into meetings.",
    tags: ["Demand Generation", "ABM", "AI-Enabled Marketing Operations"],
  },
  {
    company: "EC-Council",
    context: "Cybersecurity education and certification",
    intervention:
      "Directed paid and outbound demand generation, buyer-journey mapping, landing-page optimisation and structured A/B testing across programmatic and search channels.",
    result:
      "$4.79M three-year budget managed; acquisition scaled from $0 to $12M at 2.1x ROAS; CAC reduced 25%, from $340 to $255.",
    tags: ["Performance Marketing", "Programmatic", "CRO", "Attribution"],
  },
  {
    company: "Quick Heal",
    context: "Cybersecurity software",
    intervention:
      "Built and ran license-renewal, cart-abandonment recovery, win-back, cross-sell and upsell programmes across HubSpot, Marketo, Zoho and Salesforce Marketing Cloud.",
    result:
      "₹5Cr+ (~$600K) in renewal, retention and cross-sell/upsell revenue; repeat customer conversions up 30.5% year over year.",
    tags: ["Lifecycle Marketing", "Automation", "CRM", "Retention"],
  },
];

export const aiLoop = [
  {
    step: "01",
    title: "Diagnose",
    description: "Diagnose the commercial problem before touching a channel or a tool.",
  },
  {
    step: "02",
    title: "Design",
    description: "Design the full-funnel system that connects activity to revenue.",
  },
  {
    step: "03",
    title: "Augment",
    description: "Augment execution with AI, automation and agentic workflows.",
  },
  {
    step: "04",
    title: "Compound",
    description: "Measure, learn and compound performance quarter over quarter.",
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  dates: string;
  context: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "InspireXT",
    role: "Senior Marketing Manager",
    dates: "Sep 2023 – Apr 2026",
    context: "Supply chain and AI consulting",
    highlights: [
      "Built automated demand-generation frameworks that generated $55M+ in sales-qualified pipeline in 18 months.",
      "Led a 47-account enterprise ABM programme using LinkedIn Sales Navigator, Apollo.io and ZoomInfo; converted 20% of C-suite targets into meetings.",
      "Drove an 18% year-over-year increase in attributed revenue and a 45% increase in brand visibility through content-led storytelling and AI-enabled marketing operations.",
    ],
  },
  {
    company: "EC-Council",
    role: "Senior Manager, Performance Marketing",
    dates: "May 2021 – Sep 2023",
    context: "Cybersecurity education and certification",
    highlights: [
      "Managed a $4.79M three-year paid and outbound demand-generation budget; scaled acquisition from $0 to $12M at 2.1x ROAS with a sub-18-month payback period.",
      "Reduced customer acquisition cost 25%, from $340 to $255, by improving channel mix, audience targeting and funnel performance.",
      "Used programmatic display channels, including DV360 and The Trade Desk, alongside paid media, email marketing and landing-page testing.",
    ],
  },
  {
    company: "Independent Practice",
    role: "Strategic Marketing Consultant & Growth Advisor",
    dates: "May 2018 – May 2021",
    context: "Growth advisory and fractional marketing leadership",
    highlights: [
      "Delivered $2.2M in incremental revenue across eight consulting engagements spanning paid media, SEO, CRO, lifecycle automation and attribution.",
      "Increased qualified lead volume 27% across clients; increased organic visibility by an average of 33% and delivered 2.4x ROAS through programmatic display.",
      "Led 12 website redesign and optimisation projects, improving average conversion rates 18%.",
    ],
  },
  {
    company: "ESDS Software Solution Pvt. Ltd.",
    role: "Chief Marketing Officer",
    dates: "Mar 2017 – Mar 2018",
    context: "Cloud infrastructure and data centre services",
    highlights: [
      "Directed an 8-to-20-person marketing team across India, the United States and the United Kingdom.",
      "Led marketing leadership, demand generation and digital growth initiatives across the organisation's markets.",
      "Managed cross-functional teams and agencies across paid media, performance marketing, SEO, design and marketing operations.",
    ],
  },
  {
    company: "Quick Heal Technologies Pvt. Ltd.",
    role: "Manager, Online Marketing",
    dates: "Feb 2011 – Feb 2016",
    context: "Cybersecurity software",
    highlights: [
      "Built and ran license-renewal, cart-abandonment recovery and win-back email/SMS campaigns contributing ₹5Cr+ (~$600K) in renewal, retention and cross-sell/upsell revenue.",
      "Increased repeat customer conversions up to 30.5% year over year; drove 1.8x digital revenue growth for two consecutive years.",
      "Improved SEO performance, increasing unique organic users 12.6%, page views 21% and average time on site 39%.",
    ],
  },
];

export const earlierExperience = [
  {
    role: "Head of Digital Marketing",
    company: "Prasanna Purple Mobility Solutions Pvt. Ltd.",
    dates: "Feb 2016 – Feb 2017",
  },
  {
    role: "Marketing Manager",
    company: "Rigel Networks LLC",
    dates: "Jun 2010 – Apr 2011",
  },
  {
    role: "Internet Marketing Expert",
    company: "Self-Employed",
    dates: "Jan 2009 – Jun 2010",
  },
  {
    role: "Business Development Executive",
    company: "Clarion Technologies Pvt. Ltd.",
    dates: "Sep 2007 – Jan 2009",
  },
  {
    role: "Senior Executive",
    company: "Homeward Residential, Inc.",
    dates: "Jun 2006 – Aug 2007",
  },
  {
    role: "Customer Care Executive",
    company: "Wipro BPO",
    dates: "May 2004 – Feb 2006",
  },
];

export const capabilities = [
  "Google Ads",
  "LinkedIn Ads",
  "DV360",
  "The Trade Desk",
  "HubSpot",
  "Marketo",
  "Salesforce",
  "Zoho",
  "GA4",
  "Adobe Analytics",
  "6sense",
  "Apollo.io",
  "ZoomInfo",
  "n8n",
  "AI Agents",
  "RAG Workflows",
];

export const education = [
  { credential: "MBA, Marketing & Sales", institution: "ICFAI University" },
  { credential: "LLB", institution: "Shivaji University" },
];

export const certifications = [
  "NSDC-Certified AI Generalist",
  "Google AI Essentials",
  "Google Ads Search Certification",
  "Google Ads Display Certification",
  "Google Analytics Certification",
  "HubSpot Inbound Marketing Certification",
  "LinkedIn Marketing Strategy Certification",
];

export const linkedInMessage =
  "Hi Nikhil, I'd like to discuss [my business challenge / an opportunity]. Would you be open to a short conversation this week?";
