export type Project = {
  slug: string;
  title: string;
  category: "Project" | "Freelance";
  status: "Completed" | "In Progress";

  description: string;

  tech: string[];

  problem: string;

  approach: string[];

  insights: string[];

  dataset?: string;

  duration?: string;

  records?: string;

  github?: string;

  liveDemo?: string;

  image?: string;

  featured?: boolean;

  challenges: string[];

  solution: string[];
 
  businessImpact: string[];
};

export const projects: Project[] = [
  {
    slug: "healthcare-analysis",
    title: "Healthcare Analysis",
    category: "Project",
    status: "Completed",
    featured: true,

    description:
      "Designed an end-to-end healthcare analytics solution using SQL and Power BI to uncover patient trends, admission patterns, and operational insights.",

    tech: ["SQL", "Power BI", "DAX"],

    dataset: "Patients + Admissions + Doctors + Province Names",
    records: "5,067",

    github: "https://github.com/janakiram-vallapu/data-analytics-portfolio/tree/43099097d5d28a6bbbcf2f92964f69881f7933c9/PROJECTS/SQL_Healthcare_Analysis",
    liveDemo: "",

    image: "/projects/healthcare-analysis/dashboard.png",

    problem:
      "Healthcare organizations generate thousands of patient and admission records every day. The objective of this project was to analyze patient demographics, admission trends, diagnoses, and healthcare metrics to support better business decisions.",

    approach: [
      "Cleaned and prepared patient, admissions, doctors, and province datasets.",
      "Performed SQL analysis using joins, aggregate functions, subqueries, and CASE statements.",
      "Created KPIs and interactive visualizations in Power BI.",
      "Designed a dashboard to monitor patient trends and healthcare performance.",
    ],

    insights: [
      "Identified patient demographic trends across multiple regions.",
      "Analyzed hospital admission frequency and average length of stay.",
      "Created BMI and obesity classifications for health-risk analysis.",
      "Built an interactive dashboard for business reporting.",
    ],
    challenges: [
  "Large healthcare datasets contained inconsistent and missing values.",
  "Finding meaningful patient trends across multiple tables was challenging.",
],

solution: [
  "Cleaned and standardized the datasets using SQL.",
  "Built an interactive Power BI dashboard with KPIs and filters.",
],

businessImpact: [
  "Enabled faster analysis of patient demographics and admission trends.",
  "Provided interactive insights to support healthcare decision-making.",
],
  },

  {
    slug: "loan-approval-analysis",
    title: "Loan Approval Analysis",
    category: "Project",
    status: "Completed",
    featured: true,

    description:
      "Analyzed loan application data to identify key factors influencing loan approval decisions using SQL, Python, and Power BI.",

    tech: ["SQL", "Python", "Power BI"],

    dataset: "Loan Approval Dataset",
    records: "614",

    github: "https://github.com/janakiram-vallapu/data-analytics-portfolio/tree/43099097d5d28a6bbbcf2f92964f69881f7933c9/PROJECTS/Loan_Approval_Analysis",
    liveDemo: "",

    image: "/projects/loan-approval-analysis/dashboard.png",

    problem:
      "Financial institutions need to understand the factors affecting loan approvals to improve decision-making and reduce lending risks.",

    approach: [
      "Cleaned missing and inconsistent values using Python.",
      "Performed SQL analysis to identify approval trends.",
      "Developed KPIs and Power BI visualizations.",
      "Created an interactive dashboard for loan performance analysis.",
    ],

    insights: [
      "Credit history was one of the strongest approval factors.",
      "Income level significantly influenced approval rates.",
      "Loan amount and applicant profile affected approval probability.",
      "Dashboard enabled quick business decision-making.",
    ],
    challenges: [
  "Loan data contained missing values and inconsistent records.",
  "Identifying approval patterns required combining multiple variables.",
],

solution: [
  "Cleaned the dataset using Python and analyzed it with SQL.",
  "Created an interactive Power BI dashboard for decision support.",
],

businessImpact: [
  "Highlighted the factors influencing loan approvals.",
  "Helped visualize applicant risk and approval trends.",
],
  },

  {
    slug: "hr-attrition-analysis",
    title: "Employee Attrition Analysis",
    category: "Project",
    status: "Completed",
    featured: true,

    description:
      "Built an end-to-end HR analytics solution using Python, SQL, and Power BI to identify employee attrition trends and key workforce risk factors.",

    tech: ["SQL", "Python", "Power BI"],

    dataset: "HR Employee Dataset",
    records: "1,470",

    github: "https://github.com/janakiram-vallapu/data-analytics-portfolio/tree/43099097d5d28a6bbbcf2f92964f69881f7933c9/PROJECTS/HR-Employee-Attrition-Project",
    liveDemo: "",

    image: "/projects/hr-attrition-analysis/dashboard.png",

    problem:
      "Organizations experience employee turnover that impacts productivity and costs. This project analyzed workforce data to understand the key reasons behind employee attrition.",

    approach: [
      "Prepared and cleaned employee records.",
      "Performed exploratory data analysis using Python.",
      "Used SQL to identify attrition patterns.",
      "Developed Power BI dashboards and KPIs for HR reporting.",
    ],

    insights: [
      "Employees aged 18–25 who worked overtime showed a high attrition risk.",
      "Attrition varied significantly across departments, job roles, and compensation bands.",
      "Work-life balance and engagement factors strongly influenced employee retention.",
      "The dashboard helped identify high-risk workforce segments for retention analysis.",
    ],
    challenges: [
  "Understanding the key reasons behind employee attrition.",
  "Analyzing multiple HR factors affecting workforce retention.",
],

solution: [
  "Performed SQL analysis and exploratory data analysis.",
  "Built Power BI dashboards to monitor attrition metrics.",
],

businessImpact: [
  "Identified major factors contributing to employee turnover.",
  "Provided insights to improve employee retention strategies.",
],
  },

{
  slug: "superstore-sales-analysis",
  title: "Superstore Sales Analysis",
  category: "Project",
  status: "Completed",
  featured: false,

  description:
    "Built an interactive Excel dashboard to analyze Superstore sales performance using Power Query, Pivot Tables, Pivot Charts, and Slicers.",

  tech: ["Excel", "Power Query", "Pivot Tables"],

  dataset: "Superstore Dataset",
  records: "9,994",

  github: "https://github.com/janakiram-vallapu/data-analytics-portfolio/tree/43099097d5d28a6bbbcf2f92964f69881f7933c9/PROJECTS/Excel_End_To_End_Project",
  liveDemo: "",

  image: "/projects/superstore-sales-analysis/dashboard.png",

  problem:
    "Businesses require an easy way to monitor sales performance across regions, categories, customers, and time periods. This project transforms raw sales data into an interactive dashboard for business reporting.",

  approach: [
    "Imported and cleaned the Superstore dataset using Power Query.",
    "Created Pivot Tables and Pivot Charts for business analysis.",
    "Built KPIs to monitor sales, transactions, quantity, and averages.",
    "Designed an interactive Excel dashboard with Year and Region slicers."
  ],

  insights: [
    "Identified top-performing cities by sales.",
    "Compared regional sales performance.",
    "Analyzed sales by category and customer segment.",
    "Tracked monthly quantity trends using interactive visualizations."
  ],

  challenges: [
    "Transforming raw sales data into an analysis-ready format.",
    "Designing an interactive dashboard while keeping the layout simple."
  ],

  solution: [
    "Used Power Query for data preparation.",
    "Built Pivot Tables, Pivot Charts, KPIs, and Slicers to create a dynamic dashboard."
  ],

  businessImpact: [
    "Enabled quick monitoring of business performance.",
    "Helped stakeholders analyze sales trends and make data-driven decisions."
  ],
},
{
  slug: "trader-performance-vs-market-sentiment-report",
  title: "Trader Performance vs Market Sentiment Report",
  category: "Project",
  status: "Completed",
  featured: false,

  description:
    "Analyzed cryptocurrency trader performance against Fear & Greed market sentiment using Python and Power BI to identify profitability, trading activity, win-rate, and behavioral patterns.",

  tech: ["Python", "Power BI", "Pandas"],

  dataset: "Trading Data + Fear & Greed Index",

  github:
    "https://github.com/janakiram-vallapu/data-analytics-portfolio/tree/43099097d5d28a6bbbcf2f92964f69881f7933c9/PROJECTS/Primetrade_Project",

  liveDemo: "",

  image:
    "/projects/trader-performance-vs-market-sentiment-report/dashboard.png",

  problem:
    "The objective was to understand whether trader behavior and profitability change across different cryptocurrency market sentiment conditions such as Fear, Greed, Extreme Fear, and Extreme Greed.",

  approach: [
    "Cleaned and validated historical trading and market sentiment datasets using Python.",
    "Aligned trading dates with the Crypto Fear & Greed Index.",
    "Created performance metrics including Total PnL, Total Trades, Average Daily PnL, Average Trade Size, and Win Rate.",
    "Analyzed trader behavior and performance across different market sentiment conditions.",
    "Built an interactive Power BI dashboard for executive and trader-level analysis.",
  ],

  insights: [
    "Fear sentiment generated the highest average daily PnL at approximately $5.3K.",
    "Fear also recorded the highest trading activity at approximately 62K trades.",
    "Extreme Greed produced the highest average win rate at approximately 65%.",
    "Average trade size was highest during Fear conditions at approximately $9K.",
  ],

  challenges: [
    "Combining trading activity with market sentiment data at the correct date level.",
    "Creating meaningful trader-level and daily performance metrics from raw transaction data.",
  ],

  solution: [
    "Used Python and Pandas to clean, transform, merge, and analyze the datasets.",
    "Created an analysis-ready dataset and developed interactive Power BI dashboards for performance and behavioral analysis.",
  ],

  businessImpact: [
    "Highlighted how market sentiment relates to profitability, trading activity, trade size, and win rate.",
    "Provided trader-level and market-level insights that can support trading strategy evaluation and risk analysis.",
  ],
},
];