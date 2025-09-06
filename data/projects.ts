// data/projects.ts
export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  details: { description: string; impact: string }[];
  links?: {
    demo?: string;
    code?: string;
    report?: string; // e.g. "/reports/<slug>.pdf" (served inline)
    nda?: boolean;   // true => show NDA lock instead of links
  };
  kpis?: { label: string; value: string; delta?: string }[];
};

export const projects: Project[] = [
  // ── Trading data / ETL / BI ──────────────────────────────────────────────
  {
    slug: "automated-etl-electronic-trading",
    title: "Automated Data Pipeline for Electronic Trading",
    summary: "Alteryx + Python pipeline to ingest & reconcile Bloomberg/Tradeweb; powers FX & FI cross-sell analytics.",
    tags: ["Alteryx", "Python", "ETL", "Trading Data"],
    details: [
      { description: "Problem: Manual reports and scattered data slowed decisions.", impact: "Freed analyst hours for revenue work." },
      { description: "Approach: Scheduled Alteryx flows + Python APIs; entity matching; SLA monitors.", impact: "Minutes not hours; consistent datasets." },
      { description: "Validation: Reconciled with venue data; unit tests for joins/outliers; anomaly alerts.", impact: "Trustworthy, auditable outputs." }
    ],
    links: { nda: true },
    kpis: [
      { label: "Clients covered", value: "10k+" },
      { label: "Prep time", value: "−80%", delta: "faster" },
      { label: "Data quality", value: "Alerts on", delta: "better" }
    ]
  },
  {
    slug: "sql-mis-tracker",
    title: "SQL-based MIS Tracker System",
    summary: "Normalized schema + indexed views for onboarding/offboarding and monthly leadership reporting.",
    tags: ["SQL", "Analytics", "Operations"],
    details: [
      { description: "Problem: Excel-macro workflows were fragile and slow for 10k+ accounts.", impact: "Single source of truth." },
      { description: "Approach: Tables, constraints, indexed views; role-based exports; change logs.", impact: "Query speed ↑, duplication ↓." },
      { description: "Validation: Reconciliation scripts; integrity checks; monthly backfills.", impact: "Reduced data errors ≈10%." }
    ],
    links: { nda: true },
    kpis: [
      { label: "Records managed", value: "10k+" },
      { label: "Data errors", value: "−10%", delta: "better" },
      { label: "Report time", value: "≤ 15 min", delta: "faster" }
    ]
  },
  {
    slug: "covid-powerbi-dashboard",
    title: "Interactive COVID-19 Analytics Dashboard",
    summary: "Multi-page Power BI with slicers, drilldowns & DAX KPIs.",
    tags: ["Power BI", "Dashboard", "Analytics"],
    details: [
      { description: "Approach: Star schema; DAX measures (growth, rolling avg); slicers; cohort visuals.", impact: "Interactive, presentation-ready insights." }
    ],
    links: { nda: true },
    kpis: [
      { label: "Pages", value: "4+" },
      { label: "Refresh", value: "Auto", delta: "live" },
      { label: "Manual effort", value: "−70%", delta: "less work" }
    ]
  },

  // ── Quant / ML / Crypto / Risk ───────────────────────────────────────────
  {
    slug: "intraday-alpha-xgb",
    title: "Intraday Alpha Modeling & Backtesting",
    summary: "Walk-forward XGBoost on microstructure & sentiment; cost-aware backtests.",
    tags: ["XGBoost", "Backtesting", "Microstructure", "Sentiment"],
    details: [
      { description: "Approach: Order-flow features (imbalance, microprice), sentiment embeddings; purged CV; slippage & cost modeling.", impact: "Reduced overfitting; robust OOS." },
      { description: "Results: Tuned thresholds & sizing; stress-tested around events.", impact: "Accuracy +15%; risk-adjusted returns +20%." }
    ],
    links: { nda: true },
    kpis: [
      { label: "OOS Accuracy", value: "+15%" },
      { label: "Risk-adj. returns", value: "+20%" },
      { label: "Max DD", value: "↓", delta: "better" }
    ]
  },
  {
    slug: "risk-score-sp500",
    title: "Risk Scoring for S&P 500 (Quarterly)",
    summary: "OLS + Random Forest mapping factor scores → next-quarter risk.",
    tags: ["Risk", "S&P500", "Python", "Stats"],
    details: [
      { description: "Approach: Factors—beta, Yang–Zhang vol, downside ratio, autocorr, liquidity; winsorized & sector-neutralized.", impact: "Stable inputs across sectors/caps." },
      { description: "Validation: Walk-forward by quarter; score-decile → drawdown mapping.", impact: "Explained variance ↑; actionable risk buckets." }
    ],
    links: { nda: true },
    kpis: [
      { label: "Explained variance", value: "+18%" },
      { label: "Risk buckets", value: "Deciles" },
      { label: "Ops reporting", value: "Batch XLS/PDF", delta: "faster" }
    ]
  },
  {
    slug: "btc-bollinger-llm",
    title: "Bitcoin Strategy: Bollinger Bands vs LLM-Aided",
    summary: "Compared LLM-generated rules vs classic bands under realistic costs.",
    tags: ["Crypto", "LLM", "Bollinger", "Backtesting"],
    details: [
      { description: "Approach: Prompted multiple LLMs for strategy variants; unified backtest framework with turnover/cost controls.", impact: "Comparable yardstick across ideas." },
      { description: "Results: Best variant delivered strong simulated CAGR with known drawdown trade-off.", impact: "140% return; 34% drawdown." }
    ],
    links: { nda: true },
    kpis: [
      { label: "Simulated return", value: "+140%" },
      { label: "Max DD", value: "34%" },
      { label: "Turnover control", value: "On", delta: "better" }
    ]
  },
  {
    slug: "stress-testing",
    title: "Stress Testing for Financial Portfolios",
    summary: "Historical scenarios (’08, COVID) with VaR/CVaR; PCA + XGBoost diagnostics.",
    tags: ["Risk", "VaR", "CVaR", "PCA"],
    details: [
      { description: "Approach: Parametric & historical VaR; CVaR(95/99); regime tagging.", impact: "Tail exposure quantified." },
      { description: "Results: Scenario losses and PCA diagnostics.", impact: "Potential losses $25M; noise reduced 20%." }
    ],
    links: { nda: true },
    kpis: [
      { label: "VaR(95%)", value: "27.4%" },
      { label: "CVaR(99%)", value: "36.2%" },
      { label: "Noise via PCA", value: "−20%", delta: "better" }
    ]
  },
  {
    slug: "altdata-btc-eth",
    title: "Alt-Data Factor Modeling – BTC & ETH",
    summary: "Sentiment, macro, and on-chain features; regime-aware backtests.",
    tags: ["Crypto", "ML", "Sentiment", "Alt-Data"],
    details: [
      { description: "Approach: News/macro/on-chain features; ensemble voting; regime splits.", impact: "More robust than single models." },
      { description: "Results: Modest positive returns with tight cost control on volatile assets.", impact: "≈6% returns; high DD in harsh regimes addressed via regime filters." }
    ],
    // ✅ viewable
    links: { report: "/reports/altdata-btc-eth.pdf" },
    kpis: [
      { label: "Return", value: "+6%" },
      { label: "Regime handling", value: "On", delta: "better" },
      { label: "Volatility", value: "High", delta: "managed" }
    ]
  },

  // ── Valuation / Accounting / Macro / Research ────────────────────────────
  {
    slug: "walgreens-lbo",
    title: "Structuring a Walgreens LBO",
    summary: "Debt stack, covenants and scenario forecasts to target ~22% IRR.",
    tags: ["Private Equity", "LBO", "Valuation"],
    details: [
      { description: "Approach: Revolver + term loans; cash sweeps; exit multiple grid; deleveraging paths.", impact: "Clear risk↔return map and covenant headroom tests." }
    ],
    // ✅ viewable
    links: { report: "/reports/walgreens-lbo.pdf" },
    kpis: [
      { label: "Target IRR", value: "≈22%" },
      { label: "Deal size", value: "$15B" },
      { label: "Covenant headroom", value: "✓", delta: "better" }
    ]
  },
  {
    slug: "valuation-applied-vs-lam",
    title: "Equity Valuation – Applied Materials vs LAM Research",
    summary: "Built DCFs, normalized statements and industry comp set; explained valuation gap.",
    tags: ["DCF", "Valuation", "Semiconductors"],
    details: [
      { description: "Approach: Base/bull/bear DCFs; WACC, ROIC, margins; supply-chain context.", impact: "Explained ~$10B valuation gap across scenarios." }
    ],
    // ✅ viewable
    links: { report: "/reports/valuation-applied-vs-lam.pdf" },
    kpis: [
      { label: "Scenarios", value: "3" },
      { label: "Method", value: "DCF + Comps" },
      { label: "Outcome", value: "Range view" }
    ]
  },
  {
    slug: "econ-indicators-us-indices",
    title: "Economic Indicators vs US Stock Indices",
    summary: "MLR & XGBoost to quantify GDP, inflation, unemployment effects.",
    tags: ["Econometrics", "Regression", "XGBoost"],
    details: [
      { description: "Approach: FRED/Yahoo data; lags & stationarity checks; SHAP for interpretability.", impact: "Macro-signal mapping for forecasts." }
    ],
    // ✅ viewable
    links: { report: "/reports/econ-indicators-us-indices.pdf" },
    kpis: [
      { label: "Indicators", value: "3+" },
      { label: "Modeling", value: "MLR + XGB" },
      { label: "Output", value: "Heatmaps" }
    ]
  },
  {
    slug: "strip-strap-options",
    title: "STRIP & STRAP Option Strategies",
    summary: "Hedging overlay on Indian equities; return profile boost with drawdown dampening.",
    tags: ["Options", "Derivatives", "Hedging"],
    details: [
      { description: "Approach: Backtest across tickers; IV regimes; payoff inspection.", impact: "≈18% improvement during study; drawdown dampening." }
    ],
    // ✅ viewable
    links: { report: "/reports/strip-strap-options.pdf" },
    kpis: [
      { label: "Return improvement", value: "≈18%" },
      { label: "DD effect", value: "Lower", delta: "better" },
      { label: "IV regimes", value: "Covered" }
    ]
  },
  {
    slug: "smart-supply-dcf",
    title: "Investment Proposal & Financial Modeling – Smart Supply Chain",
    summary: "3-statement model + capital budgeting with DCF/NPV/IRR.",
    tags: ["DCF", "NPV", "IRR", "Modeling"],
    details: [
      { description: "Approach: Pro-forma statements, capex plan, WACC, scenarios; investor-ready deck.", impact: "Transparent cash needs and return profile." }
    ],
    // ✅ viewable
    links: { report: "/reports/smart-supply-dcf.pdf" },
    kpis: [
      { label: "NPV", value: "₹78.6M" },
      { label: "IRR", value: "38%" },
      { label: "Payback", value: "2.9 yrs" }
    ]
  },
  {
    slug: "nifty-realty-portfolio",
    title: "Portfolio Analysis – NIFTY REALTY Index",
    summary: "Markowitz frontier + APT & Single-Index evaluation; risk–return trade-offs.",
    tags: ["Portfolio", "Markowitz", "APT"],
    details: [
      { description: "Approach: μ/Σ estimation; efficient frontier; CAPM/APT sanity checks; min-variance portfolio.", impact: "Informed allocation views and alpha expectations." }
    ],
    // ✅ viewable
    links: { report: "/reports/nifty-realty-portfolio.pdf" },
    kpis: [
      { label: "Annualized return", value: "71%" },
      { label: "Risk", value: "5.6%" },
      { label: "Undervalued picks", value: "Flagged" }
    ]
  },
  {
    slug: "dcx-ipo",
    title: "Post-IPO Analysis: DCX Systems",
    summary: "Fundamental + technical post-listing analysis with indicators.",
    tags: ["IPO", "Equity Research"],
    details: [
      { description: "Approach: Business quality, management, ratios; TA overlay.", impact: "Evidence-based stance with quantified signals." }
    ],
    // ✅ viewable
    links: { report: "/reports/dcx-ipo.pdf" },
    kpis: [
      { label: "Annualized return (thesis)", value: "26.72%" },
      { label: "Signals", value: "Multi-indicator" },
      { label: "Risk notes", value: "Tracked", delta: "better" }
    ]
  },
  {
    slug: "retail-accounting",
    title: "Accounting Operations & Financial Reporting (Retail)",
    summary: "End-to-end books, P&L and Balance Sheet; cash-flow discipline.",
    tags: ["Accounting", "Financial Statements"],
    details: [
      { description: "Approach: Journals, ledgers, trial balance; periodic close; drivers & variance reporting.", impact: "Accurate statements and controls; owner visibility." }
    ],
    links: { report: "/reports/finance-accounting.pdf" },
    kpis: [
      { label: "Transactions managed", value: "₹1 Cr+" },
      { label: "Reported profit", value: "₹20.05 Lakh" },
      { label: "Close speed", value: "Improved", delta: "faster" }
    ]
  },
  {
    slug: "textile-sector-analysis",
    title: "Financial Analysis of Textile Sector",
    summary: "Python + Excel ratio analysis with price behavior study; peer comps.",
    tags: ["Finance", "Excel", "Python"],
    details: [
      { description: "Approach: Trend & seasonality; profitability/leverage ratios; peer comparisons; filings sanity checks.", impact: "Clear health assessment and peer ranking." }
    ],
    links: { nda: true },
    kpis: [
      { label: "Tickers", value: "Multi-name" },
      { label: "Ratios", value: "Full set" },
      { label: "Output", value: "Report" }
    ]
  },
  {
    slug: "playstore-ml",
    title: "Google Play Store – Rating Prediction",
    summary: "Regression, clustering & discriminant analysis to explain ratings.",
    tags: ["SAS", "ML", "Regression"],
    details: [
      { description: "Approach: Feature engineering (installs, category, size), scaling, CV; model comparison.", impact: "Identified key rating drivers and improved fit." }
    ],
    links: { nda: true },
    kpis: [
      { label: "Models tried", value: "3+" },
      { label: "Improvement", value: "↑", delta: "better" },
      { label: "Deliverable", value: "Report" }
    ]
  },
  {
    slug: "fraud-detection",
    title: "Credit Card Fraud Detection",
    summary: "Decision Tree / Logistic Regression / SVM with strong test accuracy.",
    tags: ["Classification", "SVM", "LogReg"],
    details: [
      { description: "Approach: Class imbalance handling, scaling, grid search; confusion/ROC validation.", impact: "High recall on fraud class; balanced precision/recall." }
    ],
    links: { nda: true },
    kpis: [
      { label: "Test accuracy", value: "94%" },
      { label: "Recall", value: "High", delta: "better" },
      { label: "AUC", value: "Good" }
    ]
  }
];


