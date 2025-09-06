// data/education.ts
export type Education = {
  slug: string;
  school: string;
  degree: string;     // e.g., "M.S. in Financial Engineering"
  location?: string;
  start: string;      // e.g., "Aug 2024"
  end: string;        // e.g., "May 2026"
  gpa?: string;       // e.g., "3.85/4.00"
  summary?: string;   // 1–2 lines about focus, thesis, or track
  coursework?: string[]; // selected courses
  highlights?: string[]; // awards, societies, TA/RA, papers, etc.
};

export const education: Education[] = [
  {
    slug: "school-1",
    school: "Gies College of Business, University of Illinois Urbana-Champaign",
    degree: "M.S. in Financial Mathematics",
    location: "Champaign, IL",
    start: "Aug 2024",
    end: "Aug 2025",
    gpa: "3.7/4",
    summary:
      "Focus on quantitative finance, risk modeling, and machine learning for markets.",
    coursework: [
      "Quantiative Finance II",
      "Advanced Data Science and Python for Finance",
      "Big Data Analytics in Finance",
      "Fixed Income Portfolios",
      "Managing Market Risks for Financial Institutions",
      "Quantamental Investments",
      "Financial Economics",
      "Investments",
      "Technology Entrepreneurship and Innovation",
    ],
    highlights: [
      "Represented UIUC at the Annual Private Equity Case Competition hosted by Purdue University in January 2025",
    ],
  },
  {
    slug: "school-2",
    school: "MPSTME, NMIMS University",
    degree: "MBA in Technology Management",
    location: "Mumbai, India",
    start: "July 2019",
    end: "August 2024",
    gpa: "3.8/4",
    summary:
      "Specialization in Finance and Business Analytics; capstone on market microstructure.",
    coursework: [
      "Financial Analysis and Working Capital Management",
      "Financial Management",
      "Financial Risk Management",
      "Financial Planning and Portfolio Management",
      "Business Visualization",
      "Business Analytics",
      "Programming for Business Analytics using SAS",
      "Management of Information Systems",
      "Project Management",
    ],
    highlights: [
      "Meritorious Student (Top 5%)",
      "Winner - Student Research Competition hosted at NMIMS",
      "Finance Club — Director",
    ],
  },
  {
    slug: "school-3",
    school: "MPSTME, NMIMS University",
    degree: "B.Tech in Information Technology",
    location: "Mumbai, India",
    start: "July 2019",
    end: "August 2024",
    gpa: "3.8/4",
    summary:
      "Specialization in IT and Data Systems",
    coursework: [
      "Python Programming",
      "Advanced Database Management Systems",
      "Object Oriented Programming in Java",
      "C++",
      "Cyber Forensics",
      "Mobile Application Development",
      "Engineering Mathematics - I, II, III, IV",
      "Cloud Computing",
      "Data Structures and Algorithms",
    ],
    highlights: [
      "Honors in Artificial Intelligence and Machine Learning from IBM",
      "Meritorious Student (Top 5%)",
      "Winner - Student Capstone Project Competition hosted at NMIMS",
      "ACM Hackathon - Honors award winner",
    ],
  },
];
