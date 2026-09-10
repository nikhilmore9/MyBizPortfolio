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
  { label: "Case Studies", href: "#case-studies" },
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

export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type CaseStudyDownload = {
  slug: string;
  title: string;
  org: string;
  period: string;
  description: string;
  summary: string;
  metrics: CaseStudyMetric[];
  pdfUrl: string;
};

export const caseStudyLibrary: CaseStudyDownload[] = [
  {
    slug: "enterprise-abm-supply-chain-consultancy",
    title: "Enterprise ABM for a Global Supply Chain Consultancy",
    org: "Global supply chain consultancy",
    period: "Sep 2023 – Apr 2026",
    description:
      "Built a 47-account enterprise ABM motion for a global supply chain consultancy, converting 20% of targeted C-suite contacts into meetings.",
    summary:
      "The work built a focused enterprise account-based marketing motion for a global supply chain and AI consultancy. Instead of treating every account equally, the programme introduced account prioritisation, buyer research, personalised messaging and coordinated sales follow-up across a 47-account universe, creating a shared operating rhythm between marketing and sales.",
    metrics: [
      { label: "Priority accounts", value: "47" },
      { label: "C-suite conversion", value: "20%" },
    ],
    pdfUrl: "/case-study-01-enterprise-abm-supply-chain.pdf",
  },
  {
    slug: "paid-demand-generation-supply-chain-consultancy",
    title: "Integrated Paid Demand Generation for a Global Supply Chain Consultancy",
    org: "Global supply chain consultancy",
    period: "Sep 2023 – Apr 2026",
    description:
      "Connected paid media with content, events, SEO and sales follow-up into one demand engine, contributing to $55M+ in sales-qualified pipeline.",
    summary:
      "The work connected paid campaigns with content, events, website, SEO, marketing automation and sales follow-up into one measurable demand engine, moving paid media from an isolated acquisition channel to one component of a broader, trackable pipeline system.",
    metrics: [
      { label: "Sales-qualified pipeline", value: "$55M+" },
      { label: "Attributed revenue growth", value: "+18% YoY" },
    ],
    pdfUrl: "/case-study-02-paid-demand-generation-supply-chain.pdf",
  },
  {
    slug: "website-conversion-optimisation-supply-chain",
    title: "Website and Conversion Optimisation for a Global Supply Chain Consultancy",
    org: "Global supply chain consultancy",
    period: "Sep 2023 – Apr 2026",
    description:
      "Rebuilt the website's conversion path to connect market narrative, SEO and demand capture, supporting a 45% increase in brand visibility.",
    summary:
      "The website work connected consulting propositions, content journeys, SEO activity, landing experiences and demand capture, creating a clearer path from a prospect's first question to a relevant business conversation.",
    metrics: [
      { label: "Brand visibility", value: "+45%" },
      { label: "Attributed revenue", value: "+18% YoY" },
    ],
    pdfUrl: "/case-study-03-website-conversion-optimisation.pdf",
  },
  {
    slug: "seo-thought-leadership-supply-chain",
    title: "SEO and Thought Leadership for a Global Supply Chain Consultancy",
    org: "Global supply chain consultancy",
    period: "Sep 2023 – Apr 2026",
    description:
      "Turned subject-matter expertise into an SEO and thought-leadership system, lifting brand visibility 45% through AI-enabled content operations.",
    summary:
      "The work strengthened organic visibility through content-led storytelling, thought leadership, technical SEO and AI-enabled marketing operations, turning subject-matter expertise into a discoverable, distributable commercial asset.",
    metrics: [
      { label: "Brand visibility", value: "+45%" },
      { label: "Attributed revenue", value: "+18% YoY" },
    ],
    pdfUrl: "/case-study-04-seo-thought-leadership.pdf",
  },
  {
    slug: "scaling-paid-acquisition-technology-company",
    title: "Scaling Paid Acquisition for a Global Technology Company",
    org: "Global technology company (cybersecurity education & certification)",
    period: "May 2021 – Sep 2023",
    description:
      "Managed a $4.79M three-year paid and outbound budget, scaling acquisition from $0 to $12M at 2.1x ROAS with a sub-18-month payback.",
    summary:
      "The work managed a $4.79M three-year paid and outbound demand-generation budget, connecting search, social and programmatic media with landing pages, email, automation and sales follow-up, scaling acquisition from a standing start into a measurable, disciplined system.",
    metrics: [
      { label: "Budget managed", value: "$4.79M / 3 yrs" },
      { label: "Acquisition scaled", value: "$0 → $12M" },
      { label: "ROAS", value: "2.1x" },
      { label: "Payback", value: "<18 months" },
    ],
    pdfUrl: "/case-study-05-scaling-paid-acquisition.pdf",
  },
  {
    slug: "reducing-cac-25-percent-technology-company",
    title: "Reducing CAC by 25% for a Global Technology Company",
    org: "Global technology company (cybersecurity education & certification)",
    period: "May 2021 – Sep 2023",
    description:
      "Combined channel mix, buyer-journey analysis and landing-page testing to cut customer acquisition cost 25%, from $340 to $255.",
    summary:
      "The work reduced customer acquisition cost by connecting channel mix, audience targeting, buyer-journey analysis, landing-page optimisation and structured A/B testing into a repeatable method for finding and removing funnel friction.",
    metrics: [
      { label: "CAC reduction", value: "25%" },
      { label: "CAC", value: "$340 → $255" },
    ],
    pdfUrl: "/case-study-06-reducing-cac-25-percent.pdf",
  },
  {
    slug: "global-marketing-operating-model-cloud-provider",
    title: "Global Marketing Operating Model for a Cloud Solutions Provider",
    org: "Global cloud and data centre solutions provider",
    period: "Mar 2017 – Mar 2018",
    description:
      "Scaled an international marketing team from 8 to 20 across India, the US and the UK, building the operating model behind a global cloud portfolio.",
    summary:
      "As CMO, the work scaled an international marketing team and built the operating model coordinating paid media, performance marketing, SEO, design, marketing operations and demand generation across geographies and agencies.",
    metrics: [
      { label: "Marketing team", value: "8 → 20" },
      { label: "Team capacity", value: "2.5x" },
    ],
    pdfUrl: "/case-study-07-global-marketing-operating-model.pdf",
  },
  {
    slug: "lifecycle-digital-revenue-growth-security-software",
    title: "Lifecycle and Digital Revenue Growth for a Global Security Software Company",
    org: "Global security software company",
    period: "Feb 2011 – Feb 2016",
    description:
      "Built a lifecycle engine spanning renewals, win-back and cross-sell that lifted repeat-customer conversion up to 30.5% year over year.",
    summary:
      "The work built a lifecycle engine integrating acquisition, license renewal, cart-abandonment recovery, win-back, cross-sell and upsell across email, SMS and social, turning the existing customer base into a growth asset.",
    metrics: [
      { label: "Repeat conversions", value: "up to +30.5% YoY" },
      { label: "Renewal/retention revenue", value: "₹5Cr+" },
      { label: "Digital revenue growth", value: "1.8x / 2 yrs" },
    ],
    pdfUrl: "/case-study-08-lifecycle-digital-revenue-growth.pdf",
  },
  {
    slug: "fractional-cmo-acquisition-engines",
    title: "Fractional CMO Acquisition Engines Across Eight Client Engagements",
    org: "Portfolio of eight consulting clients",
    period: "May 2018 – May 2021",
    description:
      "Built acquisition engines from scratch across eight fractional CMO engagements, delivering $2.2M in aggregate incremental revenue.",
    summary:
      "Across eight fractional CMO engagements, the work built acquisition engines from scratch, integrating paid media infrastructure, conversion-funnel optimisation, lifecycle automation and attribution frameworks tailored to each client's stage and economics.",
    metrics: [
      { label: "Incremental revenue", value: "$2.2M" },
      { label: "Qualified lead volume", value: "+27% aggregate" },
      { label: "Programmatic ROAS", value: "2.4x" },
    ],
    pdfUrl: "/case-study-09-fractional-cmo-acquisition-engines.pdf",
  },
  {
    slug: "mobile-app-growth-security-software",
    title: "Mobile App Growth for a Global Security Software Company",
    org: "Global security software company",
    period: "Feb 2011 – Feb 2016",
    description:
      "Took a new mobile app past 100,000 downloads in three months while building a 50K+ subscriber email audience alongside it.",
    summary:
      "The mobile-app launch combined Google Play visibility, performance marketing, email acquisition and product positioning, building both an install spike and a durable, owned audience beyond the download itself.",
    metrics: [
      { label: "App downloads", value: "100,000+ / 3 months" },
      { label: "Email subscribers", value: "50K+" },
    ],
    pdfUrl: "/case-study-10-mobile-app-growth.pdf",
  },
  {
    slug: "ecommerce-expansion-resellers-marketplaces",
    title: "E-commerce Expansion Through Resellers and Marketplaces",
    org: "Global security software company",
    period: "Feb 2011 – Feb 2016",
    description:
      "Expanded digital commerce by onboarding 50+ online resellers and marketplace partnerships, growing online sales 33% year over year.",
    summary:
      "The work expanded the digital commerce footprint by onboarding online resellers and establishing marketplace partnerships, connected to SEO, social and paid demand, building distribution beyond a single direct channel.",
    metrics: [
      { label: "Online resellers onboarded", value: "50+" },
      { label: "Online sales growth", value: "+33% YoY" },
    ],
    pdfUrl: "/case-study-11-ecommerce-resellers-marketplaces.pdf",
  },
  {
    slug: "loyalty-seo-growth-mobility-technology",
    title: "Loyalty and SEO Growth for a Mobility Technology Company",
    org: "Mobility and travel technology company",
    period: "Feb 2016 – Feb 2017",
    description:
      "Combined loyalty, partner engagement and SEO across a multi-site travel portfolio, lifting repeat conversion up to 30.5% year over year.",
    summary:
      "The work combined loyalty campaigns, partner engagement, SEO and multi-site e-commerce across a travel portfolio, treating retention and organic acquisition as parts of one connected demand system.",
    metrics: [
      { label: "Repeat conversions", value: "up to +30.5% YoY" },
      { label: "Organic users", value: "+12.6%" },
      { label: "Page views", value: "+21%" },
    ],
    pdfUrl: "/case-study-12-loyalty-seo-growth.pdf",
  },
  {
    slug: "local-digital-sales-growth-food-business",
    title: "Local Digital Sales Growth for a Multi-unit Food Business",
    org: "Multi-unit food and catering business",
    period: "Jan 2009 – Jun 2010",
    description:
      "Used grassroots marketing and process improvement to grow outside sales more than 100% within six months across a multi-unit food business.",
    summary:
      "The work combined grassroots marketing, social media, website, email and events with sales-process and operating improvements, turning local business demand into measurable, repeatable outside sales.",
    metrics: [
      { label: "Outside sales (6 months)", value: "+100%" },
      { label: "Order accuracy", value: "+75%" },
      { label: "Stores standardised", value: "180" },
    ],
    pdfUrl: "/case-study-13-local-digital-sales-growth.pdf",
  },
  {
    slug: "international-demand-generation-cloud-solutions",
    title: "International Demand Generation for a Global Cloud Solutions Provider",
    org: "Global cloud and data centre solutions provider",
    period: "Mar 2017 – Mar 2018",
    description:
      "Aligned solution architects, content and sales around persona-led messaging to take a technical cloud portfolio to market across India, the US and the UK.",
    summary:
      "As CMO, the work orchestrated international marketing for a technical portfolio spanning public cloud, private cloud, hyper-converged infrastructure, SIEM and managed services, aligning solution architects, content and sales around persona-led communication across India, the US and the UK.",
    metrics: [
      { label: "Markets", value: "India, US, UK" },
      { label: "Solution areas aligned", value: "6+" },
    ],
    pdfUrl: "/case-study-14-international-demand-generation.pdf",
  },
  {
    slug: "us-ecommerce-lead-generation-software-services",
    title: "US E-commerce Lead Generation for a Software Services Company",
    org: "Pune-based software services company",
    period: "Sep 2007 – Jan 2009",
    description:
      "Built a consultative business-development motion to generate qualified US e-commerce prospects through research-led discovery and follow-up.",
    summary:
      "The work built a consultative business-development motion for US e-commerce services: researching prospect context, leading with a specific business challenge, and using structured follow-up to create a repeatable path to qualified conversations.",
    metrics: [],
    pdfUrl: "/case-study-15-us-ecommerce-lead-generation.pdf",
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
