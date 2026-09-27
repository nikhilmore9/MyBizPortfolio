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
  { label: "Impact", href: "/#impact" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Experience", href: "/#experience" },
  { label: "Approach", href: "/#approach" },
  { label: "Things I've Built", href: "/things-i-built" },
  { label: "Contact", href: "/#contact" },
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
    prefix: "£",
    suffix: "M+",
    label: "Sales-qualified pipeline",
    context:
      "Company-reported combined sourced and influenced pipeline over 31 months at InspireXT.",
  },
  {
    value: 12,
    prefix: "$",
    suffix: "M",
    label: "Acquisition scaled at 2.5x ROAS",
    context:
      "Campaign-attributed revenue from a $4.79M, 28-month paid and outbound budget at EC-Council.",
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
    value: 12,
    prefix: "₹",
    suffix: "Cr",
    label: "Website renewal revenue",
    context:
      "Generated at Quick Heal in 2016 through license renewal, cart recovery, win-back and customer-assistance campaigns.",
  },
  {
    value: 20,
    suffix: "%",
    label: "MQL-to-SQL conversion",
    context: "Of worked MQLs progressed to SQL and completed a demo, across the 47-account ABM programme at InspireXT.",
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
    context: "Supply chain, enterprise technology and AI consulting",
    intervention:
      "Built an automated demand-generation framework and owned a partner-led, 47-account enterprise ABM programme using LinkedIn Sales Navigator, Apollo.io and ZoomInfo.",
    result:
      "£55M+ in company-reported sales-qualified pipeline over 31 months; 20% of worked MQLs in the account set progressed to SQL and demo.",
    tags: ["Demand Generation", "ABM", "AI-Enabled Marketing Operations"],
  },
  {
    company: "EC-Council",
    context: "Cybersecurity education and certification",
    intervention:
      "Directed paid and outbound demand generation, buyer-journey mapping, landing-page optimisation and structured A/B testing across programmatic and search channels.",
    result:
      "$4.79M managed over 28 months; $12M in campaign-attributed revenue at 2.5x ROAS on media spend; CAC reduced 25%, from $340 to $255.",
    tags: ["Performance Marketing", "Programmatic", "CRO", "Attribution"],
  },
  {
    company: "Quick Heal",
    context: "Cybersecurity software",
    intervention:
      "Built and ran license-renewal, cart-abandonment recovery, win-back, cross-sell and upsell programmes across HubSpot, Marketo, Zoho and Salesforce Marketing Cloud.",
    result:
      "₹12Cr in website renewal revenue in 2016; repeat customer conversions up 30.5% year over year.",
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
      "Owned a partner-led, 47-account enterprise ABM motion for a global supply chain consultancy, with 20% of worked MQLs in the account set progressing to SQL and demo.",
    summary:
      "The work built a focused enterprise account-based marketing motion for a global supply chain and AI consultancy. Instead of treating every account equally, the programme introduced account prioritisation, buyer research, personalised messaging and coordinated sales follow-up across a 47-account universe, creating a shared operating rhythm between marketing and sales.",
    metrics: [
      { label: "Priority accounts", value: "47" },
      { label: "MQL-to-SQL + demo", value: "20%" },
    ],
    pdfUrl: "/case-study-01-enterprise-abm-supply-chain.pdf",
  },
  {
    slug: "paid-demand-generation-supply-chain-consultancy",
    title: "Integrated Paid Demand Generation for a Global Supply Chain Consultancy",
    org: "Global supply chain consultancy",
    period: "Sep 2023 – Apr 2026",
    description:
      "Connected paid media with content, events, SEO and sales follow-up into one demand engine, contributing to £55M+ in company-reported sales-qualified pipeline.",
    summary:
      "The work connected paid campaigns with content, events, website, SEO, marketing automation and sales follow-up into one measurable demand engine, moving paid media from an isolated acquisition channel to one component of a broader, trackable pipeline system.",
    metrics: [
      { label: "Sales-qualified pipeline", value: "£55M+" },
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
      "Managed $4.79M in paid-media spend over 28 months, generating $12M in campaign-attributed revenue at 2.5x ROAS, excluding agency fees.",
    summary:
      "The work managed $4.79M in paid-media spend over 28 months, connecting search, social and programmatic media with landing pages, email, automation and sales follow-up, scaling acquisition into a measurable, disciplined system tracked through multi-touch attribution.",
    metrics: [
      { label: "Media spend", value: "$4.79M / 28 mo" },
      { label: "Attributed revenue", value: "$12M" },
      { label: "ROAS", value: "2.5x" },
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
      { label: "Website renewal revenue (2016)", value: "₹12Cr" },
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
      "Across eight confidential B2B growth engagements, the work built acquisition engines from scratch, integrating paid media infrastructure, conversion-funnel optimisation, lifecycle automation and attribution frameworks tailored to each client's stage and economics.",
    metrics: [
      { label: "Incremental revenue", value: "$2.2M" },
      { label: "Conversion rate lift", value: "+18% avg" },
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
    context: "Supply chain, enterprise technology and AI consulting",
    highlights: [
      "Contributed to £55M+ in company-reported combined sourced and influenced sales-qualified pipeline over 31 months, across Oracle, Salesforce and consulting campaigns.",
      "Owned a partner-led, 47-account enterprise ABM programme using LinkedIn Sales Navigator, Apollo.io and ZoomInfo, from account research through sales handoff; 20% of worked MQLs in the account set progressed to SQL and demo.",
      "Ran a separate top-of-funnel motion sustaining ~100 MQLs/month across global consulting practices; trailing MQL-to-SQL conversion improved 27% as scoring and routing matured.",
      "Directed channel, agency and tool allocation against a budget that scaled to approximately ₹35 lakh, managing six direct reports and two specialist agencies.",
      "Improved organic visibility for the targeted keyword set by 45% through focused on-page and off-page SEO, contributing to an 18% year-over-year increase in attributed revenue.",
    ],
  },
  {
    company: "EC-Council",
    role: "Senior Manager, Performance Marketing",
    dates: "May 2021 – Sep 2023",
    context: "Cybersecurity education and certification",
    highlights: [
      "Managed $4.79M in paid-media spend over 28 months across Google, Meta, LinkedIn, YouTube, display and programmatic campaigns for global certification and Cyber Range offerings.",
      "Generated $12M in campaign-attributed revenue through multi-touch attribution — 2.5x ROAS on media spend, excluding agency fees.",
      "Reduced media-only CAC 25%, from $340 to $255 per paid certification-seat purchase, across the multi-channel portfolio.",
      "Reworked retargeting around top-of-funnel educational content and tracked multi-touch journeys from first ad interaction through purchase and renewal — some purchases closed up to 18 months after first touch.",
    ],
  },
  {
    company: "Independent Practice",
    role: "Demand Generation Architect & Fractional Marketing Leader",
    dates: "May 2018 – May 2021",
    context: "Eight confidential B2B growth engagements",
    highlights: [
      "Delivered $2.2M in campaign-attributed client revenue across eight confidential B2B growth engagements spanning paid media, SEO, CRO, lifecycle automation and attribution.",
      "Delivered 2.4x attributed revenue-to-media-spend ROAS on The Trade Desk and DV360, tracked through client CRM and conversion analytics.",
      "Optimised 12 client websites by reducing high-intent forms from 7+ fields to 3–4 and adding Apollo, Clearbit and ZoomInfo enrichment to HubSpot/Zoho; conversion rates rose an average 18% across engagements while sales acceptance held stable.",
    ],
  },
  {
    company: "ESDS Software Solution Pvt. Ltd.",
    role: "Chief Marketing Officer",
    dates: "Mar 2017 – Mar 2018",
    context: "Cloud infrastructure and data centre services",
    highlights: [
      "Led global marketing strategy across India, the US and the UK for cloud, datacentre and managed-services lines; coordinated OEM alliances and Marketing Development Funds.",
      "Built digital assets and multi-channel campaign activity that supported a $15M enterprise sales pipeline across cloud and datacentre solution lines.",
      "Scaled the marketing team from eight to more than 20 through hiring and restructuring across product marketing, content, design/UX, video, technical writing, paid media, SEO, email, campaign execution and BDR operations.",
      "Directed global resource allocation and agency delivery using agile sprint rhythms aligned to enterprise pipeline priorities.",
    ],
  },
  {
    company: "Prasanna Purple Mobility Solutions Pvt. Ltd.",
    role: "Head of Digital Marketing",
    dates: "Feb 2016 – Feb 2017",
    context: "Mobility and travel",
    highlights: [
      "Led digital acquisition, campaign planning, partner programmes and online visibility across the business.",
    ],
  },
  {
    company: "Quick Heal Technologies Pvt. Ltd.",
    role: "Manager, Online Marketing",
    dates: "Feb 2011 – Feb 2016",
    context: "Cybersecurity software and e-commerce",
    highlights: [
      "Generated ₹12 crore in website renewal revenue in 2016 through license renewal, cart recovery, win-back email/SMS and customer-assistance campaigns.",
      "Built the fresh-sales e-commerce channel from a ₹25,000 monthly sales baseline in 2011 to more than ₹5 crore in cumulative new-customer sales over five years.",
      "Increased repeat customer conversions by a reported 30.5% relative year-over-year lift; drove 1.8x digital revenue growth for two consecutive years.",
      "Expanded online marketing from a solo role to a 28-person function: 13 direct reports and 15 dotted-line reportees across content, creative, SEO, campaigns, email and retention.",
      "Improved SEO performance, increasing unique organic users 12.6%, page views 21% and average time on site 39%.",
    ],
  },
];

export const earlierExperience = [
  {
    role: "Marketing Manager",
    company: "Rigel Networks LLC",
    dates: "Jun 2010 – Jan 2011",
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
  "Meta Ads",
  "YouTube Ads",
  "DV360",
  "The Trade Desk",
  "HubSpot",
  "Marketo",
  "Salesforce",
  "Salesforce Marketing Cloud",
  "Zoho CRM",
  "Zoho Marketing Automation",
  "Zapier",
  "GA4",
  "Google Search Console",
  "Adobe Analytics",
  "Looker Studio",
  "Ahrefs",
  "SEMrush",
  "Apollo.io",
  "ZoomInfo",
  "n8n",
  "LiteLLM",
  "Firecrawl",
  "Retell AI",
  "Next.js",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "Vercel",
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
  "Google AI-Powered Performance Ads Certification",
  "Google Ads Search Certification",
  "Google Ads Display Certification",
  "Google Analytics Certification",
  "HubSpot Inbound Marketing Certification",
  "HubSpot Content Marketing Certification",
  "HubSpot Social Media Certification",
  "LinkedIn Marketing Strategy Certification",
  "LinkedIn Advertising Fundamentals Certification",
  "LinkedIn Marketing Measurement Certification",
  "The Trade Desk Marketing Essentials Certification",
  "IIM Bangalore Marketing 5.0 Certification (in progress)",
];

export type ThingsIBuiltCta = {
  label: string;
  href: string;
};

export type ThingsIBuiltPage = {
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    primaryCta: ThingsIBuiltCta;
    secondaryCta: ThingsIBuiltCta;
  };
  problem: {
    eyebrow: string;
    headline: string;
    body: string[];
  };
  whatIBuilt: {
    eyebrow: string;
    headline: string;
    subhead: string;
    intro: string;
    layers: { title: string; description: string }[];
    stats: { value: string; label: string }[];
  };
  whyThisMatters: {
    eyebrow: string;
    headline: string;
    body: string[];
    pullQuote?: string;
  };
  whatThisIsnt: {
    eyebrow: string;
    headline: string;
    intro: string;
    body: string[];
  };
  closing: {
    headline: string;
    body: string[];
    primaryCta: ThingsIBuiltCta;
  };
};

export const thingsIBuilt: ThingsIBuiltPage = {
  hero: {
    eyebrow: "Things That I Built",
    headline:
      "I got tired of doing the same manual decision 40 times. So I built my way out of it.",
    subhead:
      "Not a case study. Not a client deliverable. This is the system running on my own pipeline, right now, that decides which prospects deserve my attention today — before I've even opened my laptop.",
    primaryCta: {
      label: "Read the Full Field Note (PDF)",
      href: "/the-battle-card-engine.pdf",
    },
    secondaryCta: {
      label: "See How It Works",
      href: "#what-i-built",
    },
  },
  problem: {
    eyebrow: "The Problem",
    headline:
      "Every “AI in sales” post is about writing a better cold email. That's not the bottleneck anymore.",
    body: [
      "Everyone has AI drafting outreach now. That race is over, and it was never the hard part.",
      "The real bottleneck is earlier: knowing which account is worth a human's time today — before anyone opens a tab to check. With 200 accounts in motion and signal scattered across email, calls, WhatsApp, and meeting notes, that question doesn't get easier with more data. It gets harder. More data just means a bigger pile to sift through by hand every single morning.",
      "I didn't need another tool that helps me write faster. I needed something that tells me where to point my attention before I write anything at all.",
    ],
  },
  whatIBuilt: {
    eyebrow: "What I Built",
    headline: "The Battle Card Engine",
    subhead:
      "A system that maps my accounts, listens across every channel a relationship actually happens in, scores what changed, and hands me a battle card — every morning, before I've looked at anything.",
    intro:
      "It runs on four layers, and each one replaces a specific manual habit I used to repeat by hand, every week, without thinking about it:",
    layers: [
      {
        title: "It Discovers",
        description:
          "instead of me manually searching LinkedIn and guessing who actually matters at an account, it maps the real buying committee: the decision-maker, the influencer, the economic voice, the end user.",
      },
      {
        title: "It Listens",
        description:
          "instead of relationship intelligence living in five disconnected places (my inbox, my phone, a WhatsApp thread, my memory), it pulls every signal into one account record, so nothing gets lost just because it happened outside the “official” channel.",
      },
      {
        title: "It Prioritises",
        description:
          "instead of a dashboard full of data I still have to sort through myself, it scores what actually changed today and surfaces only the handful of accounts that earned my attention.",
      },
      {
        title: "It Briefs",
        description:
          "instead of five to ten minutes of re-reading old notes before every call, it hands me a decision: call this account, here's why, here's how to open.",
      },
    ],
    stats: [
      { value: "3–5x", label: "More accounts qualified per week than manual research" },
      { value: "+35%", label: "Higher email/LinkedIn response and engagement vs. static sequences" },
      { value: "20+ hrs", label: "Saved per week, self-tracked over ~2.5 months" },
    ],
  },
  whyThisMatters: {
    eyebrow: "Why This Is Different",
    headline:
      "I'm not an engineer who learned marketing. I'm a marketer who got tired enough to learn to build.",
    body: [
      "17+ years of B2B performance marketing taught me exactly which manual decisions are worth automating and which aren't. That's the part most “AI-first” positioning skips — knowing what's actually expensive to do by hand, because you've done it by hand for nearly two decades.",
      "This system didn't start as a product idea. It started as personal frustration with the fortieth time I did the same research pass on an account. I built the thinnest version that removed the pain, ran it on my own real pipeline first, and only then thought about whether it could be useful to anyone else.",
      "It has been. I've since built SmartFollow AI, a workspace-scoped CRM product with AI summaries and source-linked Q&A, carrying the same approval gates, source links and quarantine workflows over to outbound messages, CRM changes and publishing. It's in private staging now, with a small pilot planned — proof this wasn't a one-off hack, but a pattern that holds up outside my own inbox too.",
    ],
  },
  whatThisIsnt: {
    eyebrow: "What This Isn't",
    headline:
      "This is a memory layer for my own relationships. Not a surveillance tool. Not magic. Not finished.",
    intro: "A few things worth saying plainly:",
    body: [
      "This captures signal on my own sales conversations, feeding my own follow-up decisions. It's not third-party surveillance, and it doesn't replace judgement — the score is a recommendation, not a verdict. I can accept it, ignore it, or override it, every time.",
      "The numbers above are self-tracked, not independently audited. I say that because I'd rather you trust a number I can defend than be impressed by one I can't.",
      "And it isn't the only system I've built this way. The same principle — find the repeat cost, build the thinnest version that removes it, run it on your own work first — is behind an inbox assistant that triages and drafts my email, a research agent that tracks industry trends for me, and a couple of smaller tools besides.",
    ],
  },
  closing: {
    headline: "I stopped asking AI to write better emails. I asked it to tell me who to email.",
    body: [
      "That question — what should I actually work on right now — is the one worth building for. This is one answer to it. It won't be the last system I build to answer it.",
      "If you're building something similar, or trying to figure out where to start: I'm happy to compare notes.",
    ],
    primaryCta: {
      label: "Read the Full Field Note (PDF)",
      href: "/the-battle-card-engine.pdf",
    },
  },
};

export const inboxAssistant: ThingsIBuiltPage = {
  hero: {
    eyebrow: "Things That I Built",
    headline: "[PLACEHOLDER: hero headline — personal frustration → I built my way out of it, applied to email triage]",
    subhead: "[PLACEHOLDER: hero subhead, same voice/length as the Battle Card Engine's subhead]",
    primaryCta: {
      label: "Read the Full Field Note (PDF)",
      href: "/the-inbox-assistant.pdf",
    },
    secondaryCta: {
      label: "See How It Works",
      href: "#what-i-built",
    },
  },
  problem: {
    eyebrow: "The Problem",
    headline: "[PLACEHOLDER: name the oversaturated take — e.g. everyone already has AI writing email drafts — then pivot to the real bottleneck]",
    body: [
      "[PLACEHOLDER: paragraph naming the obvious/oversaturated take on AI + email]",
      "[PLACEHOLDER: paragraph pivoting to the actual bottleneck this system solves]",
      "[PLACEHOLDER: paragraph on what you needed instead]",
    ],
  },
  whatIBuilt: {
    eyebrow: "What I Built",
    headline: "[PLACEHOLDER: name of the system]",
    subhead: "[PLACEHOLDER: one-sentence mechanism summary]",
    intro: "[PLACEHOLDER: intro sentence framing however many layers/steps genuinely describe this system]",
    layers: [
      {
        title: "[PLACEHOLDER: verb-first layer name]",
        description: "[PLACEHOLDER: replaces this manual habit — does this instead]",
      },
    ],
    stats: [
      { value: "[STAT]", label: "[PLACEHOLDER: metric label]" },
      { value: "[STAT]", label: "[PLACEHOLDER: metric label]" },
      { value: "[STAT]", label: "[PLACEHOLDER: metric label]" },
    ],
  },
  whyThisMatters: {
    eyebrow: "Why This Is Different",
    headline: "[PLACEHOLDER: headline, marketer-who-learned-to-build framing]",
    body: [
      "[PLACEHOLDER: paragraph on what most “AI-first” positioning skips]",
      "[PLACEHOLDER: personal-frustration origin story for this system]",
      "[PLACEHOLDER: proof it generalized beyond personal use, if applicable]",
    ],
    pullQuote: "[PLACEHOLDER: one-line italic pull-quote summarizing the system]",
  },
  whatThisIsnt: {
    eyebrow: "What This Isn't",
    headline: "[PLACEHOLDER: headline framing what this system is and isn't]",
    intro: "A few things worth saying plainly:",
    body: [
      "[PLACEHOLDER: caveat on judgement/human override]",
      "[PLACEHOLDER: caveat on the numbers being self-tracked]",
      "[PLACEHOLDER: caveat cross-referencing the Battle Card Engine and the other systems in this series]",
    ],
  },
  closing: {
    headline: "[PLACEHOLDER: “I stopped asking AI to X. I asked it to Y.” applied to this system]",
    body: [
      "[PLACEHOLDER: closing paragraph]",
      "[PLACEHOLDER: closing paragraph, invitation to compare notes]",
    ],
    primaryCta: {
      label: "Read the Full Field Note (PDF)",
      href: "/the-inbox-assistant.pdf",
    },
  },
};

export const linkedInMessage =
  "Hi Nikhil, I'd like to discuss [my business challenge / an opportunity]. Would you be open to a short conversation this week?";
