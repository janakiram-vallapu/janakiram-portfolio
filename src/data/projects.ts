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

    dataset: "Healthcare Dataset",
    duration: "2 Weeks",
    records: "5,067",

    github: "https://github.com/janakiram-vallapu/janakiram-portfolio",
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
  },

  {
    slug: "loan-approval-analysis",
    title: "Loan Approval Analysis",
    category: "Project",
    status: "Completed",
    featured: false,

    description:
      "Analyzed loan application data to identify key factors influencing loan approval decisions using SQL, Python, and Power BI.",

    tech: ["SQL", "Python", "Power BI"],

    dataset: "Loan Approval Dataset",
    duration: "2 Weeks",
    records: "6,000+",

    github: "https://github.com/janakiram-vallapu/janakiram-portfolio",
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
  },

  {
    slug: "hr-attrition-analysis",
    title: "HR Attrition Analysis",
    category: "Project",
    status: "Completed",
    featured: false,

    description:
      "Built an HR analytics solution to identify employee attrition trends and workforce risk factors using SQL, Excel, Python, and Power BI.",

    tech: ["SQL", "Python", "Excel", "Power BI"],

    dataset: "HR Employee Dataset",
    duration: "2 Weeks",
    records: "1,470",

    github: "https://github.com/janakiram-vallapu/janakiram-portfolio",
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
      "Overtime showed a strong relationship with employee attrition.",
      "Frequent business travel increased attrition risk.",
      "Work-life balance and tenure significantly influenced retention.",
      "Dashboard highlighted high-risk employee segments.",
    ],
  },
];