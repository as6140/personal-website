import { Logo } from "@once-ui-system/core";
import { processMusicItems } from "./spotify-config";

const person = {
  firstName: "Alexander",
  lastName: "Shropshire",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Scientist · AI/ML Engineer · Entrepreneur · Investor · Adventurer",
  avatar: "/images/avatar.jpg?v=2",
  email: "ashropshire7@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish (CEFR B1)"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Join My Contact Book!</>,
  description: (
    <>
      Drop your info and tell me what we have in common — I'll reach out when I have something genuinely relevant to share, an opportunity that fits, or just to connect. No spam, no newsletters. Just intentional, purpose-built outreach from a real human.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/alexandershropshire/",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/as6140",
  },
  {
    name: "Medium",
    icon: "medium",
    link: "https://medium.com/@as6140",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/alex_shrop",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transforming data into actionable insights</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Recession Forecast Dashboard</strong></>,
    href: "/projects/recession-forecast-app",
  },
  subline: (
    <>
      Staff Data Scientist with 10+ years building ML systems and analytics infrastructure across B2B SaaS, FinTech, and Media.
      When I'm not working with data, I'm investing, algo trading, operating small businesses, climbing mountains, playing soccer, or chasing the next adventure.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/alexandershropshire",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Staff Data Scientist and ML/AI Engineer with 10+ years shipping data products, ML models, and analytics infrastructure across FinTech, B2B SaaS, and Media.
        Currently at LaunchDarkly, finishing my MS in Computational Data Science at Georgia Tech, and always building something at the intersection of AI, investing, and entrepreneurship.
        <br /><br />
        Outside of data: algo trading, small business acquisition hunting, Spanish fluency (CEFR B1), mountain climbing, soccer, surfing, and chasing the next adventure. Let's connect.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "LaunchDarkly",
        timeframe: "October 2024 - Present",
        role: "Staff Data Scientist",
        achievements: [
          <>
            Leading strategic data science at LaunchDarkly — deploying ML/AI models, building Snowflake/dbt/Looker analytics infrastructure,
            and translating complex quantitative analyses into decisions that move the business. Focus areas: product analytics, revenue intelligence, customer health, and data democratization.
          </>,
        ],
        images: [],
      },
      {
        company: "Brex",
        timeframe: "December 2019 - January 2024",
        role: "Multiple Roles",
        achievements: [
          <>
            <strong>Senior Data Scientist, Spend Management Product Analytics</strong> (March 2023 - January 2024)
            <br />
            Conjured Python, SQL, and machine learning magic to automate Enterprise product operations and decision-making. 
            Architected dynamic recommendation and prioritization systems and cooked up novel KPIs. 
            Project coverage: Accounting/Controller Products, Reporting Platform, Product Attach/Retention.
          </>,
          <>
            <strong>Senior Data Scientist, Startups Product Analytics</strong> (July 2022 - March 2023)
            <br />
            Pioneered experimentation standards while piloting Brex's first ROI-backed rewards/pricing experiments. 
            Jazzed up new or messy data using DBT, Fractal, Airflow, Snowflake, Looker, & Amplitude as we scaled to thousands of venture-backed acquisitions per month. 
            Project coverage: Venture-Backed Startups Product & GTM, Rewards Product, Insights Product, Data Infra.
          </>,
          <>
            <strong>Data Scientist II, Finance Analytics</strong> (October 2020 - June 2022)
            <br />
            Democratized financial analysis superpowers across the company by building a real-time customer-level P&L tool. 
            Pioneered finance's first ML-based time series forecasting models. 
            Built reputation as the data disentangler for complex financial audits, investor data rooms, and M&A due diligence processes.
          </>,
          <>
            <strong>Finance Data Analyst</strong> (December 2019 - October 2020)
            <br />
            Turbocharged month-end financial reporting, added data-driven fuel to weekly LT business reviews. 
            Invigorated metrics, models, and pipelines for OKRs, board, investor, and auditor materials.
          </>,
        ],
        images: [],
      },
      {
        company: "Legendary Entertainment",
        timeframe: "February 2018 - April 2019",
        role: "Multiple Roles",
        achievements: [
          <>
            <strong>Manager, Digital Analytics</strong> (July 2018 - April 2019)
            <br />
            Contributed to Legendary's "Moneyball" approach to filmmaking — using data science to decide which movies to make, which actors to cast, and how to market them. Built audience prediction and content performance models across Legendary Digital properties.
          </>,
          <>
            <strong>Senior Analyst, Applied Analytics</strong> (February 2018 - June 2018)
            <br />
            Analyzed film performance and market trends to inform strategic production and marketing decisions.
          </>,
        ],
        images: [],
      },
      {
        company: "Vevo",
        timeframe: "June 2015 - May 2017",
        role: "Multiple Roles",
        achievements: [
          <>
            <strong>Sales Operations Reporting Analyst</strong> (August 2016 - May 2017)
            <br />
            Analyzed music video performance and user engagement to optimize content recommendations and ad strategy.
          </>,
          <>
            <strong>Yield, Pricing & Inventory Analyst</strong> (June 2015 - August 2016)
            <br />
            Managed yield optimization, pricing strategy, and inventory analysis for video advertising and content distribution.
          </>,
        ],
        images: [],
      },
      {
        company: "AOL",
        timeframe: "June 2013 - May 2015",
        role: "Multiple Roles",
        achievements: [
          <>
            <strong>Client Services & Video Yield Analytics</strong> (June 2013 - May 2015)
            <br />
            Analyzed video yield and ad performance to optimize digital advertising revenue; managed client services operations for AOL's video content platform.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Georgia Institute of Technology - Colleges of Computing, Business, and Engineering",
        description: (
          <>
            <strong>Master of Science - MS, Analytics (Computational Data Science Track)</strong>
            <br />
            Atlanta, GA · (January 2023 - December 2025) · Advanced program focusing on computational data science, machine learning, and statistical analysis for solving complex business problems.
          </>
        ),
      },
      {
        name: "New York University - Leonard N. Stern School of Business",
        description: (
          <>
            <strong>Bachelor of Science, Finance, Management (Stern School of Business) & Producing (Tisch School of the Arts)</strong>
            <br />
            New York, NY · Dual degree program combining business fundamentals with creative arts, providing a unique perspective on finance, management, and entertainment industry dynamics.
          </>
        ),
      },
    ],
  },
  otherEducation: {
    display: true, // set to false to hide this section
    title: "Other Education & Certifications",
    institutions: [
      {
        name: "",
        description: (
          <>
            <strong>Certificate, Film Production</strong> · UCLA, Los Angeles, CA · Film Production, Directing, Digital Cinematography, Editing, Writing, Casting
            <br /><br />
            <strong>Udacity Nanodegree, Data Analyst</strong> · Comprehensive program covering data analysis, SQL, Python, statistics, and visualization
            <br /><br />
            <strong>Advanced Data Analysis with ChatGPT</strong> · Coursera, Nov 2024
            <br /><br />
            <strong>LaunchDarkly Platinum Developer Certification</strong> · Oct 2024–2026 · Product Development, Release Engineering, Experimentation
            <br /><br />
            <strong>CS198.2x: Blockchain Technology</strong> · UC Berkeley, Dec 2021
            <br /><br />
            <strong>CS198.1x: Bitcoin and Cryptocurrencies</strong> · UC Berkeley, Sep 2021
            <br /><br />
            <strong>Exploratory Data Analysis in Python</strong> · DataCamp
            <br /><br />
            <strong>Object-Oriented Programming in Python</strong> · DataCamp
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Top Skills",
        description: (
          <>
            <strong>Core Skills:</strong> Python, Machine Learning, Data Analysis, SQL, Business Intelligence, AI
            <br />
            <strong>Advanced Skills:</strong> Large Language Models (LLM), Natural Language Processing (NLP), Forecasting, Product Development, Financial Analysis
            <br />
            <strong>Technical Skills:</strong> Web Development, Object-Oriented Programming (OOP), Optimization Models, Regression Models, Artificial Neural Networks, Classification Systems, Random Forest
            <br />
            <strong>Tools & Platforms:</strong> DBT, Fractal, Airflow, Snowflake, Looker, Amplitude, Pandas, NumPy, Tableau, Amazon Web Services (AWS), Flask, PySpark, HTML, Git, Microsoft Excel, Google Analytics, Google Adwords
          </>
        ),
        images: [],
      },
      {
        title: "Languages",
        description: (
          <>
            <strong>English:</strong> Native or Bilingual
            <br />
            <strong>Spanish:</strong> Conversational / Limited Working - currently working through CEFR B1
          </>
        ),
        images: [],
      },
    ],
  },
  recommendations: {
    display: false, // set to false to hide this section
    title: "Professional Recommendations",
    recommendations: [
      {
        name: "Robert Price",
        role: "Data Science Manager at Brex",
        linkedinUrl: "https://www.linkedin.com/in/alexandershropshire/details/recommendations/",
        highlights: [
          "One of the most talented and dedicated data scientists I've worked with",
          "He is incredibly skilled at analyzing complex data sets and identifying patterns and insights that others might miss",
          "He deeply understands statistical applications and is skilled in various techniques",
          "He understands the importance of data-driven decision-making and can communicate complex ideas in a way that is easy for non-technical stakeholders to understand"
        ]
      },
      {
        name: "Hirav Gandhi",
        role: "Product Manager at Plaid",
        linkedinUrl: "https://www.linkedin.com/in/alexandershropshire/details/recommendations/",
        highlights: [
          "One of the best data scientists I have worked with in my career as a product leader",
          "Has the rare combination of analytical fortitude and business sense that makes him an invaluable asset to any product team",
          "Quickly dived into the product area and understood not only how our product worked for customers, but also the value proposition to our various customer segments",
          "Presented numerous novel explorations into how we could further optimize the product and business using data science and rigorous statistical analysis"
        ]
      },
      {
        name: "Carrie Collins",
        role: "Technology Strategy at Ford",
        linkedinUrl: "https://www.linkedin.com/in/alexandershropshire/details/recommendations/",
        highlights: [
          "Alex was instrumental as a subject matter expert as our team conducted research on the use of data analytics in the entertainment industry",
          "He was able to walk us through the process of source IP evaluation, movie green-lighting and financing, and marketing and theatrical distribution",
          "His experience and expertise in this area helped us to better understand trends in Big Data and recent innovations in applied analytics",
          "Alex earns my highest recommendation as an expert in his field"
        ]
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/projects",
  label: "Data Projects & Research",
  title: `Data Projects & Research – ${person.name}`,
  description: `Data science, machine learning, and research projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /projects routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Photo Gallery",
  description: "A casual space to share some highlights and memories from recent travels, adventures, weddings, and cultural experiences that I've enjoyed while being a remote worker for the past few years!",
  images: [
    // Profile Photo (Keep at top)
    {
      src: "/images/gallery/oaxaca_profile_blue.jpeg",
      alt: "Oaxaca Profile - Blue Wall Portrait",
      caption: "Oaxaca, MX - Somewhere in Centro",
      orientation: "vertical",
    },
    
    // Newer Photos (Most Recent First)
    {
      src: "/images/gallery/paris_starrynight.jpg",
      alt: "Paris Starry Night",
      caption: "Paris, France - Attempted my own Starry Night with an iPhone",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/newport_channa.jpg",
      alt: "Newport Channa",
      caption: "Newport Beach, CA - Hanging at the beach with my friend's daughter",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/utah_snowbird.jpg",
      alt: "Utah Snowbird",
      caption: "Snowbird, UT - Skiing at Snowbird resort",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vegas_olivia.jpeg",
      alt: "Vegas Olivia",
      caption: "Las Vegas, NV - Airplane fun with my niece",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vegas_skydiving.jpg",
      alt: "Las Vegas, NV - Skydiving fun with my sisters",
      caption: "Skydiving over Las Vegas",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/grandrapids_squad.jpeg",
      alt: "Grand Rapids Squad",
      caption: "Grand Rapids, MI - Botanic gardens at a friend's wedding",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/atlanta_aveek.jpg",
      alt: "Atlanta Aveek",
      caption: "Atlanta, GA - Celebrating a friend's wedding",
      orientation: "horizontal",
    },
    
    // Oaxaca Collection (6 photos - excluding profile)
    {
      src: "/images/gallery/oaxaca_ceremonialdance.jpg",
      alt: "Oaxaca Ceremonial Dance",
      caption: "Teotitlán del Valle, MX - Traditional Zapotec Dance @ Iglesia de Nuestra Señora de la Natividad",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/oaxaca_cuaji_hike.jpeg",
      alt: "Oaxaca Cuaji Hike",
      caption: " - Hiking in the Sierra Norte Mountains",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/oaxaca_cuajimoloyas_hike.jpeg",
      alt: "Oaxaca Cuajimoloyas Hike",
      caption: "Oaxaca, MX - Mountain trails in Cuajimoloyas",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/oaxaca_hierve.jpg",
      alt: "Oaxaca Hierve el Agua",
      caption: "Oaxaca, MX - Natural mineral springs at Hierve el Agua",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/oaxaca_plate.jpeg",
      alt: "Oaxaca Traditional Plate",
      caption: "Oaxaca, MX - Lunch at Mercado Orgánico La Cosecha",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/oaxaca_waterfall.jpeg",
      alt: "Oaxaca Waterfall",
      caption: "Oaxaca, MX - Cascadas de Santiago Apoala",
      orientation: "vertical",
    },
    
    // Guadalajara Collection (4 photos)
    {
      src: "/images/gallery/gdl_cantaritos.jpg",
      alt: "Guadalajara Cantaritos",
      caption: "Guadalajara, MX - dance party at Cantaritos el Güero",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gdl_chivas.jpg",
      alt: "Guadalajara Chivas",
      caption: "Guadalajara, MX - Chivas football match",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gdl_nightfall.jpg",
      alt: "Guadalajara Nightfall",
      caption: "Guadalajara, MX - City lights at dusk",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gdl_sunset.jpg",
      alt: "Guadalajara Sunset",
      caption: "Guadalajara, MX - Golden hour",
      orientation: "horizontal",
    },
    
    // New York City Collection (2 photos)
    {
      src: "/images/gallery/nyc_alex_raj_dj.jpeg",
      alt: "NYC Alex Raj DJ",
      caption: "Brooklyn, NY - Attempting to DJ at a friend's birthday",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/nyc_cooking.jpg",
      alt: "NYC Cooking",
      caption: "New York, NY - Culinary school for PTO",
      orientation: "vertical",
    },
    
    // Alaska Collection (2 photos)
    {
      src: "/images/gallery/alaska_brex.jpeg",
      alt: "Alaska Brex",
      caption: "Girdwood, AK - Alaska adventure with Brex team",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/alaska_glacier_on.jpg",
      alt: "Alaska Glacier",
      caption: "Matanuska Glacier, AK - Hiking on a glacier",
      orientation: "horizontal",
    },
    
    // Ireland Collection (2 photos)
    {
      src: "/images/gallery/ireland_cliffs.jpg",
      alt: "Ireland Cliffs",
      caption: "Kerry, Ireland - Irish coastline near Dunquin Pier",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ireland_sheep.jpg",
      alt: "Ireland Sheep",
      caption: "Kerry, Ireland - Exploring a farm with Sheep, Border Collies, and Donkeys",
      orientation: "vertical",
    },
    
    // Iztaccíhuatl Collection (2 photos)
    {
      src: "/images/gallery/izta_sunny.jpeg",
      alt: "Iztaccíhuatl Sunny",
      caption: "Iztaccíhuatl, MX - Sun has risen at volcano",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/izta_sunrise.jpeg",
      alt: "Iztaccíhuatl Sunrise",
      caption: "Iztaccíhuatl, MX - Sunrise over the volcano",
      orientation: "horizontal",
    },
    
    // Palm Springs Collection (2 photos)
    {
      src: "/images/gallery/palm_springs_best_man_speech.jpeg",
      alt: "Palm Springs Best Man Speech",
      caption: "Palm Springs, CA - Best man speech",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/palm_springs_groomsman.jpeg",
      alt: "Palm Springs Groomsman",
      caption: "Palm Springs, CA - Groomsman at friend's wedding",
      orientation: "horizontal",
    },
    
    // Individual Destinations
    {
      src: "/images/gallery/madrid_bernabeau.jpg",
      alt: "Madrid Bernabéu",
      caption: "Madrid, Spain - Real Madrid game at the Bernabeau",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/utah_sunset.jpeg",
      alt: "Utah Sunset",
      caption: "Brighton, UT - Skiing sunset at Brighton Resort",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/mexico_city_zach.jpg",
      alt: "Mexico City Zach",
      caption: "Mexico City, MX - Exploring Centro with a friend",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/iceland_waterfall.jpeg",
      alt: "Iceland Waterfall",
      caption: "Seljalandsfoss, Iceland - admiring a waterfall with friends",
      orientation: "horizontal",
    },
  ],
};

const musicData = processMusicItems();

const music = {
  path: "/music",
  label: "Music",
  title: `Music – ${person.name}`,
  description: `Music collection and playlists by ${person.name}`,
  profile: musicData.profile,
  playlists: musicData.playlists,
  albums: musicData.albums,
};

export { person, social, newsletter, home, about, blog, work, gallery, music };

