import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Alexander",
  lastName: "Shropshire",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Scientist, Analytics & Machine Learning Engineer, Systematic Algo Trader, Small Business Investor & Operator, Art Nerd, Outdoor Adventurer, and Sports Fan",
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
      I'm always on the hunt for new collaborators, partners, mentors, and friends. This isn't a newsletter, but a way to express openness to direct, professional or personal outreach! Think LinkedIn connection or Instagram follow, but more intentional and purpose-built.
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
      I'm Alex, a creative, passionate, and extroverted Staff Data Scientist/Analyst and ML/Analytics Engineer, published technical writer, 
      and lifelong student with 10+ years of experience in advanced analytics and machine learning in product, finance, and GTM data science functions in the B2B SaaS, FinTech, and Media industries.
      <br /><br />
      Beyond Data/ML/AI, I also love connecting about investing, algorithmic trading, acquisition entrepreneurship, small business operations, soccer, yoga, hiking, skiing, surfing, diving, and immersive cultural and adventure travel. Let's chat!
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
        Hi, I'm Alex! I'm a creative, passionate, and extroverted Staff Data Scientist/Analyst and ML/Analytics Engineer, published technical writer, 
        and lifelong student with 10+ years of experience in advanced analytics and machine learning in product, finance, and GTM data science functions in the B2B SaaS, FinTech, and Media industries.
        <br /><br />
        Currently, I'm focused on helping LaunchDarkly evolve its product and business with strategic data-driven products, tooling, and insights while:
        <br />
        • Completing the final courses of my Masters in Computational Data Analytics at Georgia Tech part-time
        <br />
        • Experimenting with AI Agents for workflow automation
        <br />
        • Becoming fluent in Spanish (currently working through CEFR B1)
        <br />
        • Learning to invest more effectively
        <br />
        • Training to climb tall mountains
        <br /><br />
        Beyond Data/ML/AI, I also love connecting about investing, algorithmic trading, acquisition entrepreneurship, small business operations, soccer, yoga, hiking, skiing, surfing, diving, and immersive cultural and adventure travel. Let's chat!
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
            Lead strategic data science initiatives to solve critical business problems by leveraging advanced ML/AI techniques, 
            data warehouse analytics, and statistical modeling to create material impacts across the organization.
          </>,
          <>
            Architect and deploy machine learning models and AI-driven solutions that enable stakeholders throughout the company 
            to make data-driven decisions, driving improved business results through creative technical solutions.
          </>,
          <>
            Develop sophisticated data models and analytics infrastructure using Snowflake, dbt, and Looker to enable 
            self-service analytics and democratize data access across the organization.
          </>,
          <>
            Translate complex quantitative analyses and ML model outputs into clear, actionable insights through 
            advanced visualizations, comprehensive documentation, and interactive data assets for business stakeholders.
          </>,
          <>
            Establish best practices for data quality testing, model validation, and analytics governance while 
            mentoring team members and refining technical infrastructure for reliability and performance.
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
            <strong>Manager, Digital Analytics - Legendary Digital</strong> (July 2018 - April 2019)
            <br />
            Applied data science to film and entertainment analytics, developing models for audience prediction and content performance optimization. 
            Contributed to Legendary's "Moneyball" approach to filmmaking, using big data to help decide which movies to make, which actors to cast, 
            and how to market finished products.
          </>,
          <>
            <strong>Senior Analyst, Applied Analytics</strong> (February 2018 - June 2018)
            <br />
            Analyzed film performance data and market trends to support strategic decision-making in movie production and marketing.
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
            Analyzed music video performance data and user engagement metrics to optimize content recommendations and advertising strategies.
          </>,
          <>
            <strong>Yield, Pricing, & Inventory Analyst</strong> (June 2015 - August 2016)
            <br />
            Managed yield optimization, pricing strategies, and inventory analysis for music video advertising and content distribution.
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
            <strong>AOL On Video Client Services & Operations</strong> (January 2015 - May 2015)
            <br />
            Managed client services and operations for video content, ensuring smooth delivery and client satisfaction.
          </>,
          <>
            <strong>Video Yield & Analytics</strong> (June 2014 - December 2014)
            <br />
            Analyzed video yield and performance metrics to optimize advertising revenue and content monetization strategies.
          </>,
          <>
            <strong>Account Management Intern</strong> (June 2013 - August 2013)
            <br />
            Supported account management activities and learned the fundamentals of digital advertising and client relations.
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
        name: "Flatiron School",
        description: (
          <>
            <strong>Data Science & Machine Learning Immersive Bootcamp</strong>
            <br />
            Seattle, WA · Intensive program covering Python, statistics, machine learning algorithms, and real-world data science projects to build practical skills for industry applications.
          </>
        ),
      },
      {
        name: "Università Bocconi",
        description: (
          <>
            <strong>International Business Exchange Program, Finance and Economics</strong>
            <br />
            Milan, Italy · International exchange program at one of Europe's leading business schools, focusing on global finance, economics, and cross-cultural business practices.
          </>
        ),
      },
      {
        name: "UCLA",
        description: (
          <>
            <strong>Certificate, Film Production</strong>
            <br />
            Los Angeles, CA · Film Production, Directing, Digital Cinematography, Editing, Writing, Casting · Comprehensive program covering all aspects of film production and storytelling.
          </>
        ),
      },
      {
        name: "Damien High School",
        description: (
          <>
            <strong>High School Diploma</strong>
            <br />
            La Verne, CA · Foundation in academic excellence and leadership development.
          </>
        ),
      },
      {
        name: "Online Courses & MOOCs",
        description: (
          <>
            <strong>Udacity Nanodegree, Data Analyst</strong> · Online · Comprehensive program covering data analysis, SQL, Python, statistics, and data visualization techniques for extracting insights from complex datasets.
            <br /><br />
            <strong>Advanced Data Analysis with ChatGPT</strong> · Coursera, Nov 2024 · Skills: NLP, Python, Data Analysis
            <br /><br />
            <strong>LaunchDarkly Platinum Developer Certification</strong> · LaunchDarkly, Oct 2024-2026 · Skills: Product Development, Release Engineering, Experimentation
            <br /><br />
            <strong>CS198.2x: Blockchain Technology</strong> · UC Berkeley, Dec 2021 · Blockchain Technology
            <br /><br />
            <strong>CS198.1x: Bitcoin and Cryptocurrencies</strong> · UC Berkeley, Sep 2021 · Cryptocurrency Analysis
            <br /><br />
            <strong>Exploratory Data Analysis in Python</strong> · DataCamp · Skills: Python, Data Analysis
            <br /><br />
            <strong>Object-Oriented Programming in Python</strong> · DataCamp · Skills: Python, OOP
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
        description: <>English (Native or Bilingual), Spanish (Limited Working - currently working through CEFR B1)</>,
        images: [],
      },

      {
        title: "Professional Recommendations",
        description: (
          <>
            <strong>Robert Price, Data Science Manager at Brex:</strong> "I have had the pleasure of working with Alex for over two years at Brex, and he is one of the most talented and dedicated data scientists I've worked with. Alex's attention to detail is excellent. He is incredibly skilled at analyzing complex data sets and identifying patterns and insights that others might miss. He is meticulous in his work and always takes the time to ensure that his analyses are accurate and reliable. Alex's statistical chops are also impressive. He deeply understands statistical applications and is skilled in various techniques. He is always eager to learn and apply new statistical methods to real-world problems. In addition to his technical skills, Alex also has excellent business intuition. He understands the importance of data-driven decision-making and can communicate complex ideas in a way that is easy for non-technical stakeholders to understand. He is a valuable asset to any team, and I'd love to work with him again."
            <br /><br />
            <strong>Hirav Gandhi, Product Manager at Plaid:</strong> "Alex is one of the best data scientists I have worked with in my career as a product leader. Alex is highly autonomous and has the rare combination of analytical fortitude and business sense that makes him an invaluable asset to any product team. When Alex first started working with our team, he quickly dived into the product area and understood not only how our product worked for customers, but also the value proposition to our various customer segments and what mattered for our business objectives as well. Alex demonstrated not only impressive acumen in these areas, but also worked hand in hand with our engineers to throughly understand our data architecture and instrumentation. Alex then collaborated heavily with my product team and me to lay out the right metrics and key results tied to our business objectives and ensure we had all of the right data at our fingertips. Using his deep knowledge of the entire domain, Alex then presented numerous novel explorations into how we could further optimize the product and business using data science and rigorous statistical analysis. Thanks to his strong analyses and deep collaboration, my team was able to devise and prioritize multiple initiatives that significantly improved the quality of our Accounting product. Overall, it was a pleasure to work with Alex and I would thoroughly recommend him as a data science partner for any team looking for a collaborative yet highly autonomous, product minded individual."
            <br /><br />
            <strong>Carrie Collins, Technology Strategy at Ford:</strong> "Alex was instrumental as a subject matter expert as our team conducted research on the use of data analytics in the entertainment industry as part of a larger project focused on film-making. We engaged Alex early on in our project and he was able to walk us through the process of source IP evaluation, movie green-lighting and financing, and marketing and theatrical distribution. His experience and expertise in this area helped us to better understand trends in Big Data and recent innovations in applied analytics as they apply to film-making and to the broader digital media entertainment space. These insights allowed us to expand our firm's knowledge base and provided a strong foundation for our future recommendations to clients in the digital media and entertainment industries. Alex earns my highest recommendation as an expert in his field."
          </>
        ),
        images: [],
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
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /projects routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

