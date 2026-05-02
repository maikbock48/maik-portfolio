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
      hireMe: "Hire me",
    },
    home: {
      role: "Full Stack Engineer & AI Developer",
      greeting: "Hello, I'm",
      name: "Maik Bock",
      description:
        "I build full-stack web apps, scalable APIs, and AI-powered systems - fast, sharp, and impossible to ignore. Let's create something great.",
      downloadCV: "Download CV",
    },
    stats: [
      { num: 3, suffix: "+", text: "Years of experience" },
      { num: 9, suffix: "", text: "Projects completed" },
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
          Experience: "3+ Years",
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
        "If you are serious about building something great, reach out - I move fast and expect the same.",
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
      hireMe: "Engagier mich",
    },
    home: {
      role: "Full Stack Engineer & KI-Entwickler",
      greeting: "Hallo, ich bin",
      name: "Maik Bock",
      description:
        "Ich entwickle Full-Stack-Webanwendungen, skalierbare APIs und KI-gestützte Systeme – schnell, präzise und unmöglich zu ignorieren. Lass uns etwas Großartiges bauen.",
      downloadCV: "CV herunterladen",
    },
    stats: [
      { num: 3, suffix: "+", text: "Jahre Erfahrung" },
      { num: 9, suffix: "", text: "Projekte abgeschlossen" },
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
          Experience: "3+ Jahre",
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
        "Wenn du ernsthaft etwas Großartiges aufbauen willst, melde dich – ich arbeite schnell und erwarte das Gleiche.",
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
    },
  },
};
