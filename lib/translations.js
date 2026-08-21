export const translations = {
  en: {
    nav: {
      home: "home",
      services: "services",
      resume: "resume",
      work: "work",
      contact: "contact",
    },
    header: {
      hireMe: "Start for free",
    },
    contactFab: {
      call: "Call",
      whatsapp: "WhatsApp",
      form: "Contact form",
    },
    home: {
      role: "Full Stack Engineer & AI Developer",
      greeting: "Hello, I'm",
      name: "Maik Bock",
      description:
        "I design, build, and deploy digital products end-to-end — sharp presence sites, online shops, AI integrations for businesses, and consumer apps. One person, full ownership, no handoffs. Let's figure out what you need, together.",
      downloadCV: "Download CV",
      terminal: {
        title: "deploy — your-project",
        lines: [
          { cmd: "design mockup --client", status: "✓ done" },
          { cmd: "build components --responsive", status: "✓ done" },
          { cmd: "integrate ai --pipeline", status: "✓ done" },
          { cmd: "connect domain", status: "✓ linked" },
          { cmd: "deploy --production", status: "✓ live" },
        ],
        live: "Your project, live and ready — design to deployment, one person.",
      },
      spectrum: {
        eyebrow: "What I Build",
        title: "One person, the full spectrum.",
        subtitle:
          "No hand-offs between designer, developer, and agency — I cover the whole range, end to end.",
        items: [
          {
            title: "Presence Sites",
            description:
              "Sharp, fast websites for businesses and consultants that make a strong first impression.",
          },
          {
            title: "Online Shops",
            description:
              "Storefronts and checkout flows built to convert — from product page to purchase.",
          },
          {
            title: "AI Integration",
            description:
              "LLMs, RAG pipelines, and automations woven into real business workflows.",
          },
          {
            title: "Consumer Apps",
            description:
              "Full-stack products for real users — designed, built, and shipped from scratch.",
          },
        ],
      },
      process: {
        eyebrow: "How I Work",
        title: "Four steps. No lost context.",
        subtitle:
          "One person owns the whole build, from the first sketch to the live deploy — so nothing gets lost in translation.",
        steps: [
          {
            title: "Discover",
            description:
              "A relaxed first conversation about what you're building, who it's for, and what success looks like.",
          },
          {
            title: "Design",
            description:
              "A visual direction and concept built around your brand — shared for feedback before any code is written.",
          },
          {
            title: "Build",
            description:
              "Clean, responsive, fast code — tested across devices, not just the one on my desk.",
          },
          {
            title: "Deploy & Support",
            description:
              "Your project goes live on your domain, with a support window for the first fixes and tweaks.",
          },
        ],
        video: {
          badge: "How I Work",
          caption: "A short look behind the scenes of a real project.",
          comingSoon: "Video coming soon",
        },
      },
      funnel: {
        eyebrow: "Getting Started",
        title: "Simple, personal, no risk.",
        subtitle:
          "No sales pitch, no fine print — just a straightforward way to see if we're a good fit.",
        steps: [
          {
            title: "Ask for free",
            description:
              "Send a message with what you have in mind. No cost, no obligation, no generic reply.",
          },
          {
            title: "Get to know each other, risk-free",
            description:
              "A short call or chat to talk through your idea and see if it's a good match — zero pressure.",
          },
          {
            title: "Shape the concept together",
            description:
              "We sketch out the right approach together, tailored to your project and your budget.",
          },
        ],
      },
      ctaBanner: {
        title: "Got a project in mind?",
        subtitle:
          "Let's talk it through — straightforward, tailored, and personal. First conversation is on me.",
        button: "Start your project",
      },
    },
    stats: [
      { num: 5, suffix: "+", text: "Years of experience" },
      { num: 12, suffix: "", text: "Projects completed" },
      { num: 147, suffix: "", text: "Code commits" },
    ],
    services: [
      {
        num: "01",
        title: "Web Development",
        description:
          "I build fast, reliable web experiences using modern frameworks and clean architecture.",
        href: "/services/web-development",
      },
      {
        num: "02",
        title: "UI/UX Design",
        description:
          "I design and prototype interfaces that feel natural - simple, intuitive... and next level!",
        href: "/services/ui-ux-design",
      },
      {
        num: "03",
        title: "Logo Design",
        description:
          "I craft bold, memorable identities - and built my own logo-generator tool to create unique designs at speed.",
        href: "/services/logo-design",
      },
      {
        num: "04",
        title: "SEO",
        description:
          "I optimize content and structure so search engines actually care - and people actually click.",
        href: "/services/seo",
      },
      {
        num: "05",
        title: "Backend Development",
        description:
          "I build scalable REST APIs and backend systems with Node.js, Python and SQL — clean, fast, and production-ready.",
        href: "/services/backend-development",
      },
      {
        num: "06",
        title: "AI Engineering",
        description:
          "I integrate LLMs, build RAG pipelines, and connect vector databases to create intelligent, context-aware applications.",
        href: "/services/ai-engineering",
      },
    ],
    resume: {
      tabs: {
        experience: "Experience",
        education: "Education",
        skills: "Skills",
        about: "About me",
      },
      experience: {
        title: "My experience",
        description:
          "I've built and shipped real products - learning by doing, failing forward, and delivering results that matter.",
      },
      education: {
        title: "My education",
        description: "School gave me structure - but projects gave me teeth.",
      },
      skills: {
        title: "My skills",
        description:
          "Want to build fast and visible web apps? These are the tools I use to get the job done.",
      },
      about: {
        title: "About me",
        description:
          "I turn ideas into sharp, working products - fast, curious, always improving.",
        fields: {
          Name: "Name",
          Phone: "Phone",
          Experience: "Experience",
          Nickname: "Nickname",
          Nationality: "Nationality",
          Email: "Email",
          Freelance: "Freelance",
          Languages: "Languages",
        },
        values: {
          Experience: "5+ Years",
          Freelance: "Available",
        },
      },
    },
    work: {
      projects: [
        {
          num: "01",
          category: "frontend",
          title: "project 1",
          description:
            "Responsive landing page built with vanilla HTML, CSS and JavaScript — pixel-perfect layout, smooth scroll interactions, and zero dependencies.",
          stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
          image: "/assets/work/thumb1.png",
          live: "",
          github: "",
        },
        {
          num: "02",
          category: "fullstack",
          title: "project 2",
          description:
            "Full-stack web application with server-side rendering, a Node.js REST API backend, and a Tailwind-styled frontend — deployed and production-ready.",
          stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
          image: "/assets/work/thumb2.png",
          live: "",
          github: "",
        },
        {
          num: "03",
          category: "frontend",
          title: "project 3",
          description:
            "Modern Next.js app with React Server Components, responsive Tailwind layout, and optimised performance — fast by default, clean by design.",
          stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
          image: "/assets/work/thumb3.png",
          live: "",
          github: "",
        },
      ],
    },
    contact: {
      title: "Let's work together",
      subtitle:
        "No pressure, no jargon — tell me what you're building and we'll figure out the right approach together. First conversation is free and non-binding.",
      firstname: "Firstname",
      lastname: "Lastname",
      email: "Email address",
      phone: "Phone number",
      selectService: "Select a service",
      message: "Type your message here.",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
      infoPhone: "Phone",
      infoEmail: "Email",
      infoAddress: "Address",
      infoAddressValue: "Cologne, Germany",
      qrCaption: "Scan to save my contact",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with",
    },
    serviceDetails: {
      backToServices: "Back to Services",
      getInTouch: "Get in Touch",
      web: {
        title: "Web Development",
        titleMobile: "Web\nDevelop-\nment",
        subtitle:
          "I build fast, reliable web experiences using modern frameworks and clean architecture. From concept to deployment, I deliver solutions that perform.",
        techHeading: "Technologies I Use",
        featuresHeading: "What You Get",
        features: [
          { title: "Modern Frameworks", description: "Building with cutting-edge technologies like React, Next.js, and TypeScript for optimal performance." },
          { title: "Performance First", description: "Every line of code is optimized for speed, SEO, and user experience." },
          { title: "Scalable Architecture", description: "Clean, maintainable code that grows with your business needs." },
          { title: "Responsive Design", description: "Pixel-perfect interfaces that work flawlessly on any device." },
        ],
        ctaTitle: "Ready to Start?",
        ctaText: "Let's build something great together. Reach out and let's discuss your project.",
      },
      uiux: {
        title: "UI/UX Design",
        subtitle:
          "I design and prototype interfaces that feel natural - simple, intuitive... and next level! Great design is invisible until you need it.",
        toolsHeading: "Design Tools & Methods",
        tools: ["Figma", "Adobe XD", "Sketch", "Wireframing", "Prototyping", "User Testing"],
        approachHeading: "Design Approach",
        features: [
          { title: "User-Centered Design", description: "Every design decision is driven by real user needs and behavior patterns." },
          { title: "Intuitive Interfaces", description: "Creating experiences that feel natural and require zero learning curve." },
          { title: "Rapid Prototyping", description: "From wireframes to interactive prototypes - fast iterations, better results." },
          { title: "Design Systems", description: "Building consistent, scalable design languages for your brand." },
        ],
        processHeading: "My Design Process",
        process: [
          { num: "01", title: "Research", desc: "Understanding users and business goals" },
          { num: "02", title: "Design", desc: "Creating wireframes and visual concepts" },
          { num: "03", title: "Prototype", desc: "Building interactive prototypes" },
          { num: "04", title: "Test", desc: "Validating with real users" },
        ],
        ctaTitle: "Let's Design Together",
        ctaText: "Ready to create an exceptional user experience? Let's talk about your project.",
      },
      logo: {
        title: "Logo Design",
        subtitle:
          "I craft bold, memorable identities - and built my own logo-generator tool to create unique designs at speed. Your brand deserves to be unforgettable.",
        toolsHeading: "Design Tools & Expertise",
        tools: ["Adobe Illustrator", "Photoshop", "Custom Tool", "Vector Design", "Color Theory", "Creative Concepts"],
        whyHeading: "Why Choose Me",
        features: [
          { title: "Memorable Identities", description: "Creating logos that stick in minds and stand out in markets." },
          { title: "Versatile Designs", description: "Logos that work perfectly across all mediums - from business cards to billboards." },
          { title: "Brand Strategy", description: "Every logo tells a story and communicates your brand values." },
          { title: "Fast Turnaround", description: "Built my own logo-generator tool to create unique designs at speed." },
        ],
        exampleHeading: "Real Example: Why This Logo Works",
        exampleIntro:
          "One of my own wordmarks for a brand called \"Paper\". A breakdown of why every detail matters:",
        examplePoints: [
          { title: "Concept Through Form", description: "The 'P' is shaped as a folded sheet of paper — the letterform IS the meaning. No icon needed: the typography itself communicates the brand." },
          { title: "Hidden Detail", description: "The orange 'e' contains a tiny pencil scribble — a quiet easter egg that reinforces 'writing on paper' without being literal." },
          { title: "Single Accent Color", description: "A monochrome wordmark with one orange highlight. The color guides the eye to exactly where the story sits, without competing with the typography." },
          { title: "Geometric Discipline", description: "Built from clean, consistent strokes and angles — feels crafted, scales cleanly, and reads at any size from favicon to billboard." },
          { title: "Negative Space", description: "Works equally well on dark and light backgrounds. The folded-paper 'P' reads instantly even when stripped down to a silhouette." },
        ],
        deliverablesHeading: "What You'll Receive",
        deliverables: [
          "High-resolution logo files (PNG, SVG, AI)",
          "Color and monochrome versions",
          "Brand guidelines document",
          "Social media kit",
          "Multiple concept variations",
          "Unlimited revisions until perfect",
        ],
        ctaTitle: "Ready for a Bold Identity?",
        ctaText: "Let's create a logo that makes your brand impossible to ignore.",
      },
      seo: {
        title: "SEO",
        subtitle:
          "I optimize content and structure so search engines actually care - and people actually click. No black-hat tricks, just results that last.",
        toolsHeading: "SEO Tools & Methods",
        tools: ["Keyword Research", "Google Analytics", "Search Console", "Performance Tracking", "Content Optimization", "Link Building"],
        approachHeading: "My SEO Approach",
        features: [
          { title: "Technical SEO", description: "Optimizing site structure, speed, and crawlability for search engines." },
          { title: "Content Strategy", description: "Creating and optimizing content that ranks and converts." },
          { title: "On-Page Optimization", description: "Meta tags, headers, and keyword optimization that actually works." },
          { title: "Analytics & Reporting", description: "Data-driven insights to continuously improve your rankings." },
        ],
        servicesHeading: "SEO Services",
        services: [
          { title: "SEO Audit", description: "Comprehensive analysis of your current SEO performance and opportunities." },
          { title: "Keyword Strategy", description: "Research and target the keywords that drive real business results." },
          { title: "Technical Optimization", description: "Fix technical issues holding your site back from ranking." },
          { title: "Content Creation", description: "SEO-optimized content that engages readers and ranks high." },
          { title: "Link Building", description: "Earn quality backlinks that boost your domain authority." },
          { title: "Local SEO", description: "Dominate local search results and attract nearby customers." },
        ],
        expectHeading: "What to Expect",
        expect: [
          { value: "+150%", label: "Organic Traffic", desc: "Average increase within 6 months" },
          { value: "Top 10", label: "Rankings", desc: "Target keywords in search results" },
          { value: "2-3x", label: "Conversions", desc: "Better traffic quality = more sales" },
        ],
        ctaTitle: "Ready to Rank Higher?",
        ctaText: "Let's optimize your site and start driving organic traffic that converts.",
      },
      backend: {
        title: "Backend\nDevelopment",
        subtitle:
          "Scalable REST APIs and backend systems built with Node.js, Python and SQL — clean, fast, and production-ready from day one.",
        stackHeading: "Stack",
        capabilitiesHeading: "Capabilities",
        capabilities: [
          "Scalable RESTful API design & implementation",
          "Relational schema modelling (PostgreSQL, MySQL)",
          "NoSQL integration via ORM techniques",
          "Microservices architecture & service boundaries",
          "Docker containerisation for consistent environments",
          "Clean Code, SOLID principles & Design Patterns",
          "Git-based versioning & CI/CD-ready structure",
          "Full-lifecycle deployment from concept to launch",
        ],
        processHeading: "Process",
        steps: [
          { num: "01", title: "Define", desc: "Data models, API contracts & service boundaries" },
          { num: "02", title: "Architect", desc: "Right stack, right structure — built to scale" },
          { num: "03", title: "Build", desc: "Endpoints, validation, tests, docs" },
          { num: "04", title: "Ship", desc: "Containerised, deployed, production-ready" },
        ],
        ctaTitle: "Need a solid backend?",
        ctaText: "API, database, Docker — let's scope it and ship it.",
      },
      ai: {
        eyebrow: "AI Engineering",
        title: "Turning raw AI into\nintelligent systems",
        subtitle:
          "I integrate LLMs, build RAG pipelines and connect vector databases — making AI actually useful for your specific domain.",
        ragHeading: "How RAG Works",
        pipeline: [
          { label: "Your Data", sub: "Docs, PDFs, DBs" },
          { label: "Embeddings", sub: "Vectorise content" },
          { label: "Vector DB", sub: "Pinecone / Milvus" },
          { label: "LLM", sub: "OpenAI / local" },
          { label: "Answer", sub: "Accurate & grounded" },
        ],
        bentoHeading: "What I Do",
        bento: [
          { title: "Prompt Engineering", body: "Chain-of-Thought & Few-Shot design that maximises LLM precision and minimises hallucinations." },
          { title: "RAG Pipelines", body: "Connect LLMs to your own knowledge base for accurate, domain-specific answers." },
          { title: "Vector Databases", body: "Efficient semantic search with Pinecone & Milvus." },
          { title: "LangChain Integration", body: "Composable chains, agents and memory layers built for production." },
          { title: "Workflow Automation", body: "AI-powered pipelines with n8n — connect tools, APIs and LLMs into smart, autonomous workflows." },
          { title: "Conversation Design", body: "Intent recognition, fallback strategies and context management for reliable AI conversations." },
        ],
        useCasesHeading: "Use Cases",
        useCases: [
          { n: "01", t: "Knowledge Bot", d: "Company docs → instant answers from your own data" },
          { n: "02", t: "Workflow Automation", d: "AI agents that trigger, reason and act autonomously" },
          { n: "03", t: "Semantic Search", d: "Meaning-based search across large document sets" },
          { n: "04", t: "AI-Powered Features", d: "Embed LLM capabilities into any existing product" },
        ],
        ctaTitle: "Let's build something smart",
        ctaText: "Chatbot, RAG system, automated workflow — let's scope it.",
      },
    },
  },
  de: {
    nav: {
      home: "Startseite",
      services: "Leistungen",
      resume: "Lebenslauf",
      work: "Projekte",
      contact: "Kontakt",
    },
    header: {
      hireMe: "Kostenlos anfragen",
    },
    contactFab: {
      call: "Anrufen",
      whatsapp: "WhatsApp",
      form: "Kontaktformular",
    },
    home: {
      role: "Full Stack Engineer & KI-Entwickler",
      greeting: "Hallo, ich bin",
      name: "Maik Bock",
      description:
        "Ich entwickle digitale Produkte von der ersten Skizze bis zum Live-Gang – scharfe Präsenzseiten, Online-Shops, KI-Integrationen für Unternehmen und Consumer Apps. Eine Ansprechperson, volle Verantwortung, keine Reibungsverluste. Lass uns gemeinsam herausfinden, was du brauchst.",
      downloadCV: "CV herunterladen",
      terminal: {
        title: "deploy — dein-projekt",
        lines: [
          { cmd: "design mockup --kunde", status: "✓ fertig" },
          { cmd: "build components --responsive", status: "✓ fertig" },
          { cmd: "integrate ai --pipeline", status: "✓ fertig" },
          { cmd: "connect domain", status: "✓ verknüpft" },
          { cmd: "deploy --production", status: "✓ live" },
        ],
        live: "Dein Projekt live und startklar — von Design bis Deployment, aus einer Hand.",
      },
      spectrum: {
        eyebrow: "Was ich baue",
        title: "Eine Person, die volle Bandbreite.",
        subtitle:
          "Keine Übergaben zwischen Designer, Entwickler und Agentur — ich decke das komplette Spektrum ab, von Anfang bis Ende.",
        items: [
          {
            title: "Präsenzseiten",
            description:
              "Scharfe, schnelle Webseiten für Unternehmen und Berater, die von der ersten Sekunde an überzeugen.",
          },
          {
            title: "Online-Shops",
            description:
              "Shopfrontends und Checkout-Flows, die konvertieren — von der Produktseite bis zum Kauf.",
          },
          {
            title: "KI-Integration",
            description:
              "LLMs, RAG-Pipelines und Automatisierungen, eingebettet in echte Geschäftsprozesse.",
          },
          {
            title: "Consumer Apps",
            description:
              "Full-Stack-Produkte für echte Nutzer — designed, gebaut und ausgeliefert von Grund auf.",
          },
        ],
      },
      process: {
        eyebrow: "So arbeite ich",
        title: "Vier Schritte. Kein Kontextverlust.",
        subtitle:
          "Eine Person verantwortet den gesamten Build, von der ersten Skizze bis zum Live-Gang — so geht nichts unterwegs verloren.",
        steps: [
          {
            title: "Kennenlernen",
            description:
              "Ein entspanntes erstes Gespräch darüber, was du vorhast, für wen es ist und wie Erfolg für dich aussieht.",
          },
          {
            title: "Design",
            description:
              "Eine visuelle Richtung und ein Konzept passend zu deiner Marke — zur Abstimmung, bevor eine Zeile Code geschrieben wird.",
          },
          {
            title: "Umsetzung",
            description:
              "Sauberer, responsiver, schneller Code — getestet auf verschiedenen Geräten, nicht nur auf meinem Schreibtisch.",
          },
          {
            title: "Deployment & Support",
            description:
              "Dein Projekt geht live auf deiner Domain, inklusive Support-Fenster für die ersten Anpassungen.",
          },
        ],
        video: {
          badge: "So arbeite ich",
          caption: "Ein kurzer Blick hinter die Kulissen eines echten Projekts.",
          comingSoon: "Video folgt in Kürze",
        },
      },
      funnel: {
        eyebrow: "Der Einstieg",
        title: "Unkompliziert, persönlich, risikofrei.",
        subtitle:
          "Kein Verkaufsgespräch, kein Kleingedrucktes — nur ein unkomplizierter Weg herauszufinden, ob wir zusammenpassen.",
        steps: [
          {
            title: "Kostenlos anfragen",
            description:
              "Schick mir kurz, was du vorhast. Kostenlos, unverbindlich, keine Standardantwort.",
          },
          {
            title: "Risikofrei kennenlernen",
            description:
              "Ein kurzes Gespräch, um deine Idee durchzugehen und zu schauen, ob es passt — ganz ohne Druck.",
          },
          {
            title: "Gemeinsam Konzept erarbeiten",
            description:
              "Wir entwickeln zusammen den passenden Ansatz — zugeschnitten auf dein Projekt und dein Budget.",
          },
        ],
      },
      ctaBanner: {
        title: "Hast du ein Projekt im Kopf?",
        subtitle:
          "Lass uns unkompliziert, individuell und persönlich darüber sprechen. Das erste Gespräch geht auf mich.",
        button: "Projekt starten",
      },
    },
    stats: [
      { num: 5, suffix: "+", text: "Jahre Erfahrung" },
      { num: 12, suffix: "", text: "Projekte abgeschlossen" },
      { num: 147, suffix: "", text: "Code Commits" },
    ],
    services: [
      {
        num: "01",
        title: "Web-Entwicklung",
        description:
          "Ich baue schnelle, zuverlässige Web-Erfahrungen mit modernen Frameworks und sauberer Architektur.",
        href: "/services/web-development",
      },
      {
        num: "02",
        title: "UI/UX Design",
        description:
          "Ich entwerfe Interfaces die sich natürlich anfühlen – simpel, intuitiv... und auf dem nächsten Level!",
        href: "/services/ui-ux-design",
      },
      {
        num: "03",
        title: "Logo Design",
        description:
          "Ich erschaffe prägnante, einprägsame Identitäten – und habe einen eigenen Logo-Generator entwickelt.",
        href: "/services/logo-design",
      },
      {
        num: "04",
        title: "SEO",
        description:
          "Ich optimiere Inhalte und Struktur damit Suchmaschinen aufmerksam werden – und Menschen klicken.",
        href: "/services/seo",
      },
      {
        num: "05",
        title: "Backend-Entwicklung",
        description:
          "Ich entwickle skalierbare REST APIs und Backend-Systeme mit Node.js, Python und SQL – sauber, schnell und produktionsreif.",
        href: "/services/backend-development",
      },
      {
        num: "06",
        title: "KI-Entwicklung",
        description:
          "Ich integriere LLMs, baue RAG Pipelines und verbinde Vektordatenbanken für intelligente, kontextbewusste Anwendungen.",
        href: "/services/ai-engineering",
      },
    ],
    resume: {
      tabs: {
        experience: "Erfahrung",
        education: "Ausbildung",
        skills: "Fähigkeiten",
        about: "Über mich",
      },
      experience: {
        title: "Meine Erfahrung",
        description:
          "Ich habe echte Produkte gebaut und ausgeliefert – durch Lernen, Scheitern und Ergebnisse die zählen.",
      },
      education: {
        title: "Meine Ausbildung",
        description:
          "Die Schule gab mir Struktur – Projekte haben mich scharf gemacht.",
      },
      skills: {
        title: "Meine Fähigkeiten",
        description:
          "Du willst schnelle und sichtbare Web-Apps? Das sind die Tools mit denen ich es umsetze.",
      },
      about: {
        title: "Über mich",
        description:
          "Ich verwandle Ideen in scharfe, funktionierende Produkte – schnell, neugierig, immer lernend.",
        fields: {
          Name: "Name",
          Phone: "Telefon",
          Experience: "Erfahrung",
          Nickname: "Spitzname",
          Nationality: "Nationalität",
          Email: "E-Mail",
          Freelance: "Freelance",
          Languages: "Sprachen",
        },
        values: {
          Experience: "5+ Jahre",
          Freelance: "Verfügbar",
        },
      },
    },
    work: {
      projects: [
        {
          num: "01",
          category: "frontend",
          title: "Projekt 1",
          description:
            "Responsive Landing Page mit vanilla HTML, CSS und JavaScript – pixelgenaues Layout, sanfte Scroll-Interaktionen und null Abhängigkeiten.",
          stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
          image: "/assets/work/thumb1.png",
          live: "",
          github: "",
        },
        {
          num: "02",
          category: "fullstack",
          title: "Projekt 2",
          description:
            "Full-Stack-Webanwendung mit serverseitigem Rendering, Node.js REST API Backend und Tailwind-Frontend – deployed und produktionsreif.",
          stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
          image: "/assets/work/thumb2.png",
          live: "",
          github: "",
        },
        {
          num: "03",
          category: "frontend",
          title: "Projekt 3",
          description:
            "Moderne Next.js-App mit React Server Components, responsivem Tailwind-Layout und optimierter Performance – schnell von Grund auf, sauber im Design.",
          stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
          image: "/assets/work/thumb3.png",
          live: "",
          github: "",
        },
      ],
    },
    contact: {
      title: "Lass uns zusammenarbeiten",
      subtitle:
        "Ganz unkompliziert: Erzähl mir, was du vorhast – gemeinsam finden wir den passenden Weg. Das Erstgespräch ist kostenlos und unverbindlich.",
      firstname: "Vorname",
      lastname: "Nachname",
      email: "E-Mail-Adresse",
      phone: "Telefonnummer",
      selectService: "Dienst auswählen",
      message: "Gib hier deine Nachricht ein.",
      send: "Nachricht senden",
      sending: "Wird gesendet...",
      success: "Nachricht erfolgreich gesendet!",
      error: "Nachricht konnte nicht gesendet werden. Bitte versuche es erneut.",
      infoPhone: "Telefon",
      infoEmail: "E-Mail",
      infoAddress: "Adresse",
      infoAddressValue: "Köln, Deutschland",
      qrCaption: "Scannen, um meinen Kontakt zu speichern",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
      builtWith: "Gebaut mit",
    },
    serviceDetails: {
      backToServices: "Zurück zu Leistungen",
      getInTouch: "Kontakt aufnehmen",
      web: {
        title: "Web-Entwicklung",
        titleMobile: "Web-\nEntwick-\nlung",
        subtitle:
          "Ich entwickle schnelle, zuverlässige Web-Erfahrungen mit modernen Frameworks und sauberer Architektur. Vom Konzept bis zur Inbetriebnahme – Lösungen, die performen.",
        techHeading: "Technologien, die ich nutze",
        featuresHeading: "Was du bekommst",
        features: [
          { title: "Moderne Frameworks", description: "Modernste Technologien wie React, Next.js und TypeScript für optimale Performance." },
          { title: "Performance zuerst", description: "Jede Codezeile ist auf Geschwindigkeit, SEO und Nutzererlebnis optimiert." },
          { title: "Skalierbare Architektur", description: "Sauberer, wartbarer Code, der mit deinem Geschäft wächst." },
          { title: "Responsives Design", description: "Pixelgenaue Oberflächen, die auf jedem Gerät einwandfrei funktionieren." },
        ],
        ctaTitle: "Bereit zu starten?",
        ctaText: "Lass uns gemeinsam etwas Großartiges bauen. Melde dich, und wir besprechen dein Projekt.",
      },
      uiux: {
        title: "UI/UX Design",
        subtitle:
          "Ich entwerfe und prototypisiere Interfaces, die sich natürlich anfühlen – simpel, intuitiv... und auf dem nächsten Level! Gutes Design ist unsichtbar, bis man es braucht.",
        toolsHeading: "Design-Tools & Methoden",
        tools: ["Figma", "Adobe XD", "Sketch", "Wireframing", "Prototyping", "User Testing"],
        approachHeading: "Design-Ansatz",
        features: [
          { title: "Nutzerzentriertes Design", description: "Jede Design-Entscheidung basiert auf echten Nutzerbedürfnissen und Verhaltensmustern." },
          { title: "Intuitive Interfaces", description: "Erlebnisse, die sich natürlich anfühlen und keine Lernkurve haben." },
          { title: "Schnelles Prototyping", description: "Vom Wireframe zum interaktiven Prototyp – schnelle Iterationen, bessere Ergebnisse." },
          { title: "Design-Systeme", description: "Konsistente, skalierbare Designsprachen für deine Marke." },
        ],
        processHeading: "Mein Design-Prozess",
        process: [
          { num: "01", title: "Recherche", desc: "Nutzer und Geschäftsziele verstehen" },
          { num: "02", title: "Design", desc: "Wireframes und visuelle Konzepte erstellen" },
          { num: "03", title: "Prototyp", desc: "Interaktive Prototypen bauen" },
          { num: "04", title: "Test", desc: "Mit echten Nutzern validieren" },
        ],
        ctaTitle: "Lass uns gemeinsam designen",
        ctaText: "Bereit für ein außergewöhnliches Nutzererlebnis? Lass uns über dein Projekt sprechen.",
      },
      logo: {
        title: "Logo Design",
        subtitle:
          "Ich erschaffe prägnante, einprägsame Identitäten – und habe einen eigenen Logo-Generator entwickelt, um einzigartige Designs schnell umzusetzen. Deine Marke verdient es, unvergesslich zu sein.",
        toolsHeading: "Design-Tools & Expertise",
        tools: ["Adobe Illustrator", "Photoshop", "Eigenes Tool", "Vektor-Design", "Farblehre", "Kreative Konzepte"],
        whyHeading: "Warum mich wählen",
        features: [
          { title: "Einprägsame Identitäten", description: "Logos, die im Kopf bleiben und im Markt herausstechen." },
          { title: "Vielseitige Designs", description: "Logos, die auf allen Medien funktionieren – von der Visitenkarte bis zur Plakatwand." },
          { title: "Markenstrategie", description: "Jedes Logo erzählt eine Geschichte und kommuniziert deine Markenwerte." },
          { title: "Schnelle Umsetzung", description: "Eigener Logo-Generator entwickelt, um einzigartige Designs blitzschnell zu liefern." },
        ],
        exampleHeading: "Echtes Beispiel: Warum dieses Logo funktioniert",
        exampleIntro:
          "Eines meiner eigenen Logos für eine Marke namens \"Paper\". Ein Blick darauf, warum jedes Detail zählt:",
        examplePoints: [
          { title: "Konzept durch Form", description: "Das 'P' ist als gefaltetes Blatt Papier gestaltet – die Buchstabenform IST die Bedeutung. Kein Icon nötig: die Typografie selbst kommuniziert die Marke." },
          { title: "Verstecktes Detail", description: "Das orange 'e' enthält ein winziges Bleistift-Gekritzel – ein leiser Easter Egg, der die Idee 'Schreiben auf Papier' verstärkt, ohne plump zu sein." },
          { title: "Eine Akzentfarbe", description: "Eine monochrome Wortmarke mit nur einem orangen Highlight. Die Farbe lenkt den Blick genau dorthin, wo die Geschichte sitzt, ohne mit der Typografie zu konkurrieren." },
          { title: "Geometrische Disziplin", description: "Aus sauberen, konsistenten Strichen und Winkeln gebaut – wirkt handwerklich, skaliert klar und liest sich in jeder Größe vom Favicon bis zur Plakatwand." },
          { title: "Negativraum", description: "Funktioniert auf hellen wie dunklen Hintergründen gleichermaßen. Das gefaltete-Papier-'P' wird sofort erkannt, selbst als reine Silhouette." },
        ],
        deliverablesHeading: "Was du bekommst",
        deliverables: [
          "Hochauflösende Logo-Dateien (PNG, SVG, AI)",
          "Farb- und Schwarzweiß-Versionen",
          "Marken-Guideline-Dokument",
          "Social-Media-Kit",
          "Mehrere Konzept-Varianten",
          "Unbegrenzte Revisionen bis zur Perfektion",
        ],
        ctaTitle: "Bereit für eine starke Identität?",
        ctaText: "Lass uns ein Logo gestalten, das deine Marke unmöglich zu ignorieren macht.",
      },
      seo: {
        title: "SEO",
        subtitle:
          "Ich optimiere Inhalte und Struktur, damit Suchmaschinen wirklich aufmerksam werden – und Menschen tatsächlich klicken. Keine Black-Hat-Tricks, nur nachhaltige Ergebnisse.",
        toolsHeading: "SEO-Tools & Methoden",
        tools: ["Keyword-Recherche", "Google Analytics", "Search Console", "Performance-Tracking", "Content-Optimierung", "Linkaufbau"],
        approachHeading: "Mein SEO-Ansatz",
        features: [
          { title: "Technisches SEO", description: "Optimierung von Seitenstruktur, Geschwindigkeit und Crawlbarkeit für Suchmaschinen." },
          { title: "Content-Strategie", description: "Inhalte erstellen und optimieren, die ranken und konvertieren." },
          { title: "On-Page-Optimierung", description: "Meta-Tags, Überschriften und Keyword-Optimierung, die wirklich greifen." },
          { title: "Analyse & Reporting", description: "Datenbasierte Insights, um deine Rankings kontinuierlich zu verbessern." },
        ],
        servicesHeading: "SEO-Leistungen",
        services: [
          { title: "SEO-Audit", description: "Umfassende Analyse deiner aktuellen SEO-Performance und Potenziale." },
          { title: "Keyword-Strategie", description: "Recherche und Targeting der Keywords, die echten Geschäftserfolg bringen." },
          { title: "Technische Optimierung", description: "Technische Probleme beheben, die dein Ranking blockieren." },
          { title: "Content-Erstellung", description: "SEO-optimierte Inhalte, die Leser fesseln und hoch ranken." },
          { title: "Linkaufbau", description: "Hochwertige Backlinks gewinnen, die deine Domain-Autorität steigern." },
          { title: "Local SEO", description: "Lokale Suchergebnisse dominieren und Kunden in der Nähe gewinnen." },
        ],
        expectHeading: "Was du erwarten kannst",
        expect: [
          { value: "+150%", label: "Organischer Traffic", desc: "Durchschnittlicher Anstieg innerhalb von 6 Monaten" },
          { value: "Top 10", label: "Rankings", desc: "Ziel-Keywords in den Suchergebnissen" },
          { value: "2-3x", label: "Conversions", desc: "Bessere Traffic-Qualität = mehr Verkäufe" },
        ],
        ctaTitle: "Bereit, höher zu ranken?",
        ctaText: "Lass uns deine Seite optimieren und organischen Traffic erzeugen, der konvertiert.",
      },
      backend: {
        title: "Backend-\nEntwicklung",
        subtitle:
          "Skalierbare REST APIs und Backend-Systeme mit Node.js, Python und SQL – sauber, schnell und produktionsreif vom ersten Tag an.",
        stackHeading: "Stack",
        capabilitiesHeading: "Fähigkeiten",
        capabilities: [
          "Skalierbares RESTful-API-Design & Umsetzung",
          "Modellierung relationaler Schemata (PostgreSQL, MySQL)",
          "NoSQL-Integration über ORM-Techniken",
          "Microservices-Architektur & Service-Grenzen",
          "Docker-Containerisierung für konsistente Umgebungen",
          "Clean Code, SOLID-Prinzipien & Design Patterns",
          "Git-basierte Versionierung & CI/CD-bereite Struktur",
          "Volle Deployment-Pipeline vom Konzept bis zum Launch",
        ],
        processHeading: "Prozess",
        steps: [
          { num: "01", title: "Definieren", desc: "Datenmodelle, API-Verträge & Service-Grenzen" },
          { num: "02", title: "Architektur", desc: "Richtiger Stack, richtige Struktur – auf Skalierung gebaut" },
          { num: "03", title: "Bauen", desc: "Endpunkte, Validierung, Tests, Docs" },
          { num: "04", title: "Deployen", desc: "Containerisiert, deployed, produktionsreif" },
        ],
        ctaTitle: "Brauchst du ein solides Backend?",
        ctaText: "API, Datenbank, Docker – lass uns das Projekt definieren und ausliefern.",
      },
      ai: {
        eyebrow: "KI-Entwicklung",
        title: "Aus roher KI werden\nintelligente Systeme",
        subtitle:
          "Ich integriere LLMs, baue RAG-Pipelines und verbinde Vektordatenbanken – damit KI für deinen Anwendungsfall wirklich nützlich wird.",
        ragHeading: "Wie RAG funktioniert",
        pipeline: [
          { label: "Deine Daten", sub: "Docs, PDFs, DBs" },
          { label: "Embeddings", sub: "Inhalte vektorisieren" },
          { label: "Vektor-DB", sub: "Pinecone / Milvus" },
          { label: "LLM", sub: "OpenAI / lokal" },
          { label: "Antwort", sub: "Präzise & fundiert" },
        ],
        bentoHeading: "Was ich mache",
        bento: [
          { title: "Prompt Engineering", body: "Chain-of-Thought- und Few-Shot-Design für maximale LLM-Präzision und minimierte Halluzinationen." },
          { title: "RAG-Pipelines", body: "LLMs an deine eigene Wissensbasis anbinden für präzise, domänenspezifische Antworten." },
          { title: "Vektordatenbanken", body: "Effiziente semantische Suche mit Pinecone und Milvus." },
          { title: "LangChain-Integration", body: "Komponierbare Chains, Agents und Memory-Layer – produktionsreif." },
          { title: "Workflow-Automatisierung", body: "KI-gesteuerte Pipelines mit n8n – Tools, APIs und LLMs zu smarten, autonomen Workflows verbinden." },
          { title: "Conversation Design", body: "Intent-Erkennung, Fallback-Strategien und Kontext-Management für zuverlässige KI-Dialoge." },
        ],
        useCasesHeading: "Anwendungsfälle",
        useCases: [
          { n: "01", t: "Wissensbot", d: "Firmen-Docs → sofortige Antworten aus deinen eigenen Daten" },
          { n: "02", t: "Workflow-Automatisierung", d: "KI-Agents, die selbstständig auslösen, denken und handeln" },
          { n: "03", t: "Semantische Suche", d: "Bedeutungsbasierte Suche über große Dokumentmengen" },
          { n: "04", t: "KI-Features", d: "LLM-Fähigkeiten in jedes bestehende Produkt einbetten" },
        ],
        ctaTitle: "Lass uns etwas Smartes bauen",
        ctaText: "Chatbot, RAG-System, automatisierter Workflow – lass uns das Projekt definieren.",
      },
    },
  },
  pl: {
    nav: {
      home: "strona główna",
      services: "usługi",
      resume: "CV",
      work: "projekty",
      contact: "kontakt",
    },
    header: {
      hireMe: "Zacznij bezpłatnie",
    },
    contactFab: {
      call: "Zadzwoń",
      whatsapp: "WhatsApp",
      form: "Formularz kontaktowy",
    },
    home: {
      role: "Inżynier Full Stack & Programista AI",
      greeting: "Cześć, jestem",
      name: "Maik Bock",
      description:
        "Projektuję, buduję i wdrażam produkty cyfrowe od A do Z – dopracowane strony wizytówkowe, sklepy online, integracje AI dla firm i aplikacje konsumenckie. Jedna osoba, pełna odpowiedzialność, zero tarcia. Wspólnie ustalmy, czego potrzebujesz.",
      downloadCV: "Pobierz CV",
      terminal: {
        title: "deploy — twój-projekt",
        lines: [
          { cmd: "design mockup --klient", status: "✓ gotowe" },
          { cmd: "build components --responsive", status: "✓ gotowe" },
          { cmd: "integrate ai --pipeline", status: "✓ gotowe" },
          { cmd: "connect domain", status: "✓ podłączona" },
          { cmd: "deploy --production", status: "✓ live" },
        ],
        live: "Twój projekt na żywo — od projektu po wdrożenie, jedna osoba.",
      },
      spectrum: {
        eyebrow: "Co buduję",
        title: "Jedna osoba, pełne spektrum.",
        subtitle:
          "Bez przekazywania między projektantem, deweloperem i agencją — obejmuję cały zakres, od początku do końca.",
        items: [
          {
            title: "Strony wizytówkowe",
            description:
              "Dopracowane, szybkie strony dla firm i konsultantów, które robią dobre pierwsze wrażenie.",
          },
          {
            title: "Sklepy online",
            description:
              "Frontendy sklepów i procesy zakupowe zbudowane pod konwersję — od strony produktu po zakup.",
          },
          {
            title: "Integracja AI",
            description:
              "LLM-y, pipeline'y RAG i automatyzacje wplecione w realne procesy biznesowe.",
          },
          {
            title: "Aplikacje konsumenckie",
            description:
              "Produkty full-stack dla realnych użytkowników — zaprojektowane, zbudowane i wdrożone od zera.",
          },
        ],
      },
      process: {
        eyebrow: "Jak pracuję",
        title: "Cztery kroki. Zero utraconego kontekstu.",
        subtitle:
          "Jedna osoba odpowiada za cały projekt, od pierwszego szkicu po wdrożenie — dzięki temu nic po drodze nie ginie.",
        steps: [
          {
            title: "Poznajemy się",
            description:
              "Swobodna pierwsza rozmowa o tym, co budujesz, dla kogo i jak wygląda dla ciebie sukces.",
          },
          {
            title: "Projekt",
            description:
              "Kierunek wizualny i koncepcja dopasowana do twojej marki — do akceptacji, zanim powstanie choć linijka kodu.",
          },
          {
            title: "Budowa",
            description:
              "Czysty, responsywny, szybki kod — testowany na różnych urządzeniach, nie tylko na moim biurku.",
          },
          {
            title: "Wdrożenie i wsparcie",
            description:
              "Twój projekt trafia na twoją domenę, z oknem wsparcia na pierwsze poprawki.",
          },
        ],
        video: {
          badge: "Jak pracuję",
          caption: "Krótkie spojrzenie za kulisy prawdziwego projektu.",
          comingSoon: "Wideo wkrótce",
        },
      },
      funnel: {
        eyebrow: "Pierwszy krok",
        title: "Prosto, personalnie, bez ryzyka.",
        subtitle:
          "Bez nachalnej sprzedaży i drobnego druku — po prostu prosty sposób, by sprawdzić, czy do siebie pasujemy.",
        steps: [
          {
            title: "Zapytaj bezpłatnie",
            description:
              "Napisz, co masz na myśli. Bez kosztów, bez zobowiązań, bez szablonowej odpowiedzi.",
          },
          {
            title: "Poznajmy się bez ryzyka",
            description:
              "Krótka rozmowa, by omówić twój pomysł i sprawdzić, czy pasujemy — zupełnie bez presji.",
          },
          {
            title: "Wspólnie opracujmy koncepcję",
            description:
              "Razem ustalamy właściwe podejście, dopasowane do twojego projektu i budżetu.",
          },
        ],
      },
      ctaBanner: {
        title: "Masz pomysł na projekt?",
        subtitle:
          "Porozmawiajmy o nim — prosto, indywidualnie i personalnie. Pierwsza rozmowa jest na mnie.",
        button: "Rozpocznij projekt",
      },
    },
    stats: [
      { num: 5, suffix: "+", text: "Lat doświadczenia" },
      { num: 12, suffix: "", text: "Ukończonych projektów" },
      { num: 147, suffix: "", text: "Commitów w kodzie" },
    ],
    services: [
      {
        num: "01",
        title: "Tworzenie stron",
        description:
          "Buduję szybkie, niezawodne aplikacje webowe z nowoczesnymi frameworkami i czystą architekturą.",
        href: "/services/web-development",
      },
      {
        num: "02",
        title: "Projektowanie UI/UX",
        description:
          "Projektuję interfejsy, które działają naturalnie – proste, intuicyjne... i na najwyższym poziomie!",
        href: "/services/ui-ux-design",
      },
      {
        num: "03",
        title: "Projektowanie logo",
        description:
          "Tworzę wyraziste, zapadające w pamięć identyfikacje – i zbudowałem własny generator logo.",
        href: "/services/logo-design",
      },
      {
        num: "04",
        title: "SEO",
        description:
          "Optymalizuję treści i strukturę, by wyszukiwarki to zauważyły – a ludzie klikali.",
        href: "/services/seo",
      },
      {
        num: "05",
        title: "Backend",
        description:
          "Buduję skalowalne REST API i systemy backendowe z Node.js, Python i SQL – czyste, szybkie i gotowe na produkcję.",
        href: "/services/backend-development",
      },
      {
        num: "06",
        title: "Inżynieria AI",
        description:
          "Integruję LLM, buduję pipeline'y RAG i podłączam bazy wektorowe do inteligentnych aplikacji.",
        href: "/services/ai-engineering",
      },
    ],
    resume: {
      tabs: {
        experience: "Doświadczenie",
        education: "Edukacja",
        skills: "Umiejętności",
        about: "O mnie",
      },
      experience: {
        title: "Moje doświadczenie",
        description:
          "Budowałem i wdrażałem prawdziwe produkty – ucząc się przez działanie, wyciągając wnioski z błędów i dostarczając wyniki.",
      },
      education: {
        title: "Moja edukacja",
        description: "Szkoła dała mi strukturę – projekty dały mi pazury.",
      },
      skills: {
        title: "Moje umiejętności",
        description:
          "Chcesz budować szybkie i widoczne aplikacje? Oto narzędzia, których używam.",
      },
      about: {
        title: "O mnie",
        description:
          "Zamieniam pomysły w ostre, działające produkty – szybko, z ciekawością, zawsze się doskonaląc.",
        fields: {
          Name: "Imię",
          Phone: "Telefon",
          Experience: "Doświadczenie",
          Nickname: "Pseudonim",
          Nationality: "Narodowość",
          Email: "E-mail",
          Freelance: "Freelance",
          Languages: "Języki",
        },
        values: {
          Experience: "5+ Lat",
          Freelance: "Dostępny",
        },
      },
    },
    work: {
      projects: [
        {
          num: "01",
          category: "frontend",
          title: "Projekt 1",
          description:
            "Responsywna strona landingowa zbudowana z HTML, CSS i JavaScript – pikselowo idealny layout, płynne interakcje i zero zależności.",
          stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
          image: "/assets/work/thumb1.png",
          live: "",
          github: "",
        },
        {
          num: "02",
          category: "fullstack",
          title: "Projekt 2",
          description:
            "Aplikacja full-stack z renderowaniem po stronie serwera, REST API w Node.js i frontendem w Tailwind – wdrożona i gotowa na produkcję.",
          stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
          image: "/assets/work/thumb2.png",
          live: "",
          github: "",
        },
        {
          num: "03",
          category: "frontend",
          title: "Projekt 3",
          description:
            "Nowoczesna aplikacja Next.js z React Server Components, responsywnym layoutem Tailwind i zoptymalizowaną wydajnością.",
          stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
          image: "/assets/work/thumb3.png",
          live: "",
          github: "",
        },
      ],
    },
    contact: {
      title: "Pracujmy razem",
      subtitle:
        "Bez presji i żargonu — powiedz mi, co planujesz, a wspólnie znajdziemy najlepsze podejście. Pierwsza rozmowa jest bezpłatna i niezobowiązująca.",
      firstname: "Imię",
      lastname: "Nazwisko",
      email: "Adres e-mail",
      phone: "Numer telefonu",
      selectService: "Wybierz usługę",
      message: "Wpisz tutaj swoją wiadomość.",
      send: "Wyślij wiadomość",
      sending: "Wysyłanie...",
      success: "Wiadomość wysłana pomyślnie!",
      error: "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
      infoPhone: "Telefon",
      infoEmail: "E-mail",
      infoAddress: "Adres",
      infoAddressValue: "Kolonia, Niemcy",
      qrCaption: "Zeskanuj, aby zapisać mój kontakt",
    },
    footer: {
      rights: "Wszelkie prawa zastrzeżone.",
      builtWith: "Zbudowane z",
    },
    serviceDetails: {
      backToServices: "Powrót do usług",
      getInTouch: "Skontaktuj się",
      web: {
        title: "Tworzenie stron",
        titleMobile: "Tworze-\nnie\nstron",
        subtitle:
          "Buduję szybkie, niezawodne aplikacje webowe z nowoczesnymi frameworkami i czystą architekturą. Od koncepcji po wdrożenie – rozwiązania, które działają.",
        techHeading: "Technologie, których używam",
        featuresHeading: "Co dostajesz",
        features: [
          { title: "Nowoczesne frameworki", description: "Najnowsze technologie jak React, Next.js i TypeScript dla maksymalnej wydajności." },
          { title: "Wydajność na pierwszym miejscu", description: "Każda linia kodu zoptymalizowana pod kątem szybkości, SEO i UX." },
          { title: "Skalowalna architektura", description: "Czysty, łatwy w utrzymaniu kod, który rośnie razem z biznesem." },
          { title: "Responsywny design", description: "Pikselowo idealne interfejsy działające bezbłędnie na każdym urządzeniu." },
        ],
        ctaTitle: "Gotowy na start?",
        ctaText: "Zbudujmy razem coś wielkiego. Odezwij się i porozmawiajmy o twoim projekcie.",
      },
      uiux: {
        title: "Projektowanie UI/UX",
        subtitle:
          "Projektuję i prototypuję interfejsy, które działają naturalnie – proste, intuicyjne... i na najwyższym poziomie! Dobry design jest niewidoczny, dopóki nie stanie się potrzebny.",
        toolsHeading: "Narzędzia i metody projektowe",
        tools: ["Figma", "Adobe XD", "Sketch", "Wireframing", "Prototypowanie", "Testy użytkowników"],
        approachHeading: "Podejście do projektowania",
        features: [
          { title: "Design zorientowany na użytkownika", description: "Każda decyzja projektowa oparta na rzeczywistych potrzebach i zachowaniach użytkowników." },
          { title: "Intuicyjne interfejsy", description: "Tworzę doświadczenia naturalne, bez krzywej uczenia się." },
          { title: "Szybkie prototypowanie", description: "Od wireframe'ów po interaktywne prototypy – szybkie iteracje, lepsze rezultaty." },
          { title: "Systemy designu", description: "Buduję spójne, skalowalne języki designu dla twojej marki." },
        ],
        processHeading: "Mój proces projektowy",
        process: [
          { num: "01", title: "Badania", desc: "Zrozumienie użytkowników i celów biznesowych" },
          { num: "02", title: "Projekt", desc: "Tworzenie wireframe'ów i koncepcji wizualnych" },
          { num: "03", title: "Prototyp", desc: "Budowanie interaktywnych prototypów" },
          { num: "04", title: "Testy", desc: "Walidacja z prawdziwymi użytkownikami" },
        ],
        ctaTitle: "Zaprojektujmy to razem",
        ctaText: "Gotowy na wyjątkowe doświadczenie użytkownika? Porozmawiajmy o twoim projekcie.",
      },
      logo: {
        title: "Projektowanie logo",
        subtitle:
          "Tworzę wyraziste, zapadające w pamięć identyfikacje – i zbudowałem własny generator logo, by szybko dostarczać unikalne projekty. Twoja marka zasługuje na to, by być niezapomniana.",
        toolsHeading: "Narzędzia i kompetencje projektowe",
        tools: ["Adobe Illustrator", "Photoshop", "Własne narzędzie", "Projekt wektorowy", "Teoria koloru", "Kreatywne koncepcje"],
        whyHeading: "Dlaczego ja",
        features: [
          { title: "Zapadające w pamięć identyfikacje", description: "Logo, które pozostaje w głowach i wyróżnia się na rynku." },
          { title: "Wszechstronne projekty", description: "Logo, które działa na wszystkich nośnikach – od wizytówki po billboard." },
          { title: "Strategia marki", description: "Każde logo opowiada historię i komunikuje wartości twojej marki." },
          { title: "Szybka realizacja", description: "Zbudowałem własny generator logo, by szybko dostarczać unikalne projekty." },
        ],
        exampleHeading: "Prawdziwy przykład: dlaczego to logo działa",
        exampleIntro:
          "Jedno z moich własnych logo dla marki \"Paper\". Spójrz, dlaczego liczy się każdy detal:",
        examplePoints: [
          { title: "Koncept przez formę", description: "Litera 'P' ma kształt złożonej kartki papieru – sama forma niesie znaczenie. Bez ikony: typografia komunikuje markę." },
          { title: "Ukryty detal", description: "Pomarańczowe 'e' kryje malutki rysunek ołówka – cichy easter egg, który wzmacnia ideę 'pisania na papierze' bez dosłowności." },
          { title: "Jeden kolor akcentu", description: "Monochromatyczny logotyp z jednym pomarańczowym akcentem. Kolor prowadzi wzrok dokładnie tam, gdzie kryje się historia." },
          { title: "Geometryczna dyscyplina", description: "Zbudowane z czystych, spójnych linii i kątów – wygląda rzemieślniczo, skaluje się idealnie od favicon po billboard." },
          { title: "Przestrzeń negatywowa", description: "Działa zarówno na ciemnych, jak i jasnych tłach. Złożona kartka 'P' jest natychmiast rozpoznawalna, nawet jako sylwetka." },
        ],
        deliverablesHeading: "Co otrzymasz",
        deliverables: [
          "Pliki logo w wysokiej rozdzielczości (PNG, SVG, AI)",
          "Wersje kolorowe i monochromatyczne",
          "Dokument wytycznych marki",
          "Zestaw social media",
          "Wiele wariantów koncepcji",
          "Nieograniczone poprawki aż do perfekcji",
        ],
        ctaTitle: "Gotowy na mocną tożsamość?",
        ctaText: "Stwórzmy logo, którego nie da się zignorować.",
      },
      seo: {
        title: "SEO",
        subtitle:
          "Optymalizuję treści i strukturę, by wyszukiwarki naprawdę zauważyły – a ludzie naprawdę klikali. Bez sztuczek black-hat, tylko trwałe efekty.",
        toolsHeading: "Narzędzia i metody SEO",
        tools: ["Badanie słów kluczowych", "Google Analytics", "Search Console", "Śledzenie wydajności", "Optymalizacja treści", "Budowanie linków"],
        approachHeading: "Moje podejście do SEO",
        features: [
          { title: "SEO techniczne", description: "Optymalizacja struktury, szybkości i indeksowalności strony." },
          { title: "Strategia treści", description: "Tworzenie i optymalizacja treści, które rankują i konwertują." },
          { title: "Optymalizacja on-page", description: "Meta tagi, nagłówki i optymalizacja słów kluczowych, które naprawdę działają." },
          { title: "Analityka i raportowanie", description: "Dane pozwalające stale poprawiać twoje rankingi." },
        ],
        servicesHeading: "Usługi SEO",
        services: [
          { title: "Audyt SEO", description: "Kompleksowa analiza obecnej wydajności SEO i możliwości." },
          { title: "Strategia słów kluczowych", description: "Badanie i targetowanie słów, które dają realny zysk biznesowy." },
          { title: "Optymalizacja techniczna", description: "Naprawa problemów technicznych blokujących ranking." },
          { title: "Tworzenie treści", description: "Treści zoptymalizowane SEO, które angażują czytelników i wysoko rankują." },
          { title: "Budowanie linków", description: "Zdobywanie wartościowych backlinków zwiększających autorytet domeny." },
          { title: "Local SEO", description: "Dominacja w lokalnych wynikach i pozyskanie klientów z okolicy." },
        ],
        expectHeading: "Czego się spodziewać",
        expect: [
          { value: "+150%", label: "Ruch organiczny", desc: "Średni wzrost w ciągu 6 miesięcy" },
          { value: "Top 10", label: "Pozycje", desc: "Słowa kluczowe w wynikach wyszukiwania" },
          { value: "2-3x", label: "Konwersje", desc: "Lepszy ruch = więcej sprzedaży" },
        ],
        ctaTitle: "Gotowy, by wyżej rankować?",
        ctaText: "Zoptymalizujmy twoją stronę i zacznijmy generować ruch, który konwertuje.",
      },
      backend: {
        title: "Tworzenie\nbackendu",
        subtitle:
          "Skalowalne REST API i systemy backendowe z Node.js, Python i SQL – czyste, szybkie i gotowe na produkcję od pierwszego dnia.",
        stackHeading: "Stack",
        capabilitiesHeading: "Możliwości",
        capabilities: [
          "Skalowalne projektowanie i implementacja REST API",
          "Modelowanie schematów relacyjnych (PostgreSQL, MySQL)",
          "Integracja NoSQL przez techniki ORM",
          "Architektura mikroserwisów i granice usług",
          "Konteneryzacja Docker dla spójnych środowisk",
          "Clean Code, zasady SOLID i wzorce projektowe",
          "Wersjonowanie Git i struktura gotowa pod CI/CD",
          "Pełen cykl wdrożenia od koncepcji do startu",
        ],
        processHeading: "Proces",
        steps: [
          { num: "01", title: "Zdefiniuj", desc: "Modele danych, kontrakty API i granice usług" },
          { num: "02", title: "Zaprojektuj", desc: "Właściwy stack, właściwa struktura – budowane na skalę" },
          { num: "03", title: "Buduj", desc: "Endpointy, walidacja, testy, dokumentacja" },
          { num: "04", title: "Wdróż", desc: "Skonteneryzowane, wdrożone, gotowe na produkcję" },
        ],
        ctaTitle: "Potrzebujesz solidnego backendu?",
        ctaText: "API, baza danych, Docker – określmy zakres i wdróżmy to.",
      },
      ai: {
        eyebrow: "Inżynieria AI",
        title: "Z surowej AI tworzę\ninteligentne systemy",
        subtitle:
          "Integruję LLM-y, buduję pipeline'y RAG i podłączam bazy wektorowe – sprawiam, że AI naprawdę przydaje się w twojej dziedzinie.",
        ragHeading: "Jak działa RAG",
        pipeline: [
          { label: "Twoje dane", sub: "Docs, PDF, DB" },
          { label: "Embeddings", sub: "Wektoryzacja treści" },
          { label: "Baza wektorowa", sub: "Pinecone / Milvus" },
          { label: "LLM", sub: "OpenAI / lokalny" },
          { label: "Odpowiedź", sub: "Precyzyjna i ugruntowana" },
        ],
        bentoHeading: "Co robię",
        bento: [
          { title: "Prompt Engineering", body: "Chain-of-Thought i Few-Shot, które maksymalizują precyzję LLM i minimalizują halucynacje." },
          { title: "Pipeline'y RAG", body: "Łączę LLM-y z twoją bazą wiedzy dla precyzyjnych odpowiedzi z domeny." },
          { title: "Bazy wektorowe", body: "Wydajne wyszukiwanie semantyczne z Pinecone i Milvus." },
          { title: "Integracja LangChain", body: "Komponowalne chainy, agenci i memory layers – gotowe na produkcję." },
          { title: "Automatyzacja workflow", body: "Pipeline'y AI z n8n – łączenie narzędzi, API i LLM-ów w smart, autonomiczne workflow." },
          { title: "Projektowanie konwersacji", body: "Rozpoznawanie intencji, strategie fallback i zarządzanie kontekstem dla niezawodnych dialogów AI." },
        ],
        useCasesHeading: "Przypadki użycia",
        useCases: [
          { n: "01", t: "Bot wiedzy", d: "Dokumenty firmowe → natychmiastowe odpowiedzi z twoich danych" },
          { n: "02", t: "Automatyzacja workflow", d: "Agenci AI, którzy samodzielnie wyzwalają, rozumują i działają" },
          { n: "03", t: "Wyszukiwanie semantyczne", d: "Wyszukiwanie po znaczeniu w dużych zbiorach dokumentów" },
          { n: "04", t: "Funkcje AI", d: "Wbudowanie możliwości LLM w dowolny istniejący produkt" },
        ],
        ctaTitle: "Zbudujmy coś inteligentnego",
        ctaText: "Chatbot, system RAG, automatyczny workflow – określmy zakres.",
      },
    },
  },
};
