export type ExpProject = { title: string; description: string; impact: string };
export type Experience = {
  slug: string;
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  summary: string;
  projects: ExpProject[];
};

export const experiences: Experience[] = [
  {
    slug: "idx-2025",
    company: "IDX",
    role: "Intern, Quant Research and Technology",
    location: "Champaign, IL",
    start: "June 2025",
    end: "Aug 2025",
    summary:
      "Researched and built ML-based risk models across S&P 500 and crypto; coded strategies with reduced lookahead bias and developed crypto D-apps for trading.",
    projects: [
      {
        title: "S&P 500 risk modeling",
        description:
          "Developed a risk scoring engine for every S&P 500 constituent using multiple risk factors and benchmarked against sectors. Further optimized values with ML techniques across different timelines. Features included realized vol, beta, downside drawdown; models: Random Forest, XGBoost regressor.",
        impact:
          "Improved risk stratification; faster iterations and better risk-scoring for downstream Sharpe ratio applications."
      },
      {
        title: "Crypto D-app development",
        description:
          "Built two apps using YO blockchain and Blockdaemon frameworks for clients to deposit/redeem cryptocurrency to buy/sell interest-bearing yield tokens.",
        impact:
          "Launched a new service line for portfolio-management clients, opening additional revenue via spread margins."
      }
    ]
  },
  {
    slug: "nomura-2023",
    company: "Nomura Structured Finance Services",
    role: "Intern, Global Markets – Electronic Trading Client Services",
    location: "Mumbai, India",
    start: "May 2023",
    end: "Sep 2023",
    summary:
      "Automation for trading client setups; MIS; analytics pipelines for FX & Fixed Income.",
    projects: [
      {
        title: "Client Setup Reconciliation",
        description:
          "Spearheaded an Alteryx pipeline comparing internal records vs. Bloomberg/Tradeweb across multiple data layers to detect setup mismatches and reduce risk of lost business.",
        impact: "Reduced operational risk by ~60%."
      },
      {
        title: "SQL MIS Tracker",
        description:
          "Built a scalable MIS for onboarding/offboarding & analytics exports and migrated data from a VBA-based system to handle >10k clients reliably.",
        impact:
          "Reduced data errors and inefficiencies by ~10%; generated insight reports within ~15 minutes with charts/visualizations (~50% faster than the macro-based system)."
      },
      {
        title: "Daily Trading Analytics",
        description:
          "Power BI dashboards for 10k+ clients; cross-sell insights by comparing data across Bloomberg, Tradeweb, and MarketAxess.",
        impact:
          "Improved visibility across products and identified cross-sell opportunities."
      }
    ]
  },
  {
    slug: "ibm-pheme-2022",
    company: "IBM Pheme Soft",
    role: "Python Web Developer Intern",
    location: "Mumbai, India",
    start: "May 2022",
    end: "Jun 2022",
    summary:
      "Django app for new-hire orientation; REST APIs; SQL persistence.",
    projects: [
      {
        title: "Orientation Portal",
        description:
          "End-to-end Django onboarding app for new hires with document processing, background checks, and introduction videos.",
        impact:
          "Improved onboarding throughput by converting a full day’s onboarding into a self-paced, employee-led activity."
      },
      {
        title: "REST Integrations",
        description:
          "APIs for cross-module data flow with validation and error handling.",
        impact:
          "Reliable data exchange and storage integrity for background-check documents."
      }
    ]
  }
];
