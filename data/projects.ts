// data/projects.ts

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  category: string;  // 👈 add this line
  details: { description: string; impact: string }[];
  links?: {
    demo?: string;
    code?: string;
    report?: string; // e.g. "/reports/<slug>.pdf"
    nda?: boolean;   // true => show NDA lock instead of links
  };
  kpis?: { label: string; value: string; delta?: string }[];
};

export const projects: Project[] = [
  // ── Trading data / ETL / BI ──────────────────────────────────────────────
  {
    slug: "automated-etl-electronic-trading",
    title: "Automated Data Pipeline for Electronic Trading",
    summary:
      "Alteryx + Python ETL pipeline to ingest and reconcile Bloomberg/Tradeweb trading data for FX and Fixed Income analytics.",
    tags: ["Alteryx", "Python", "ETL", "Trading Data"],
    category: "Analytics & BI",
    details: [
      {
        description: "Problem: Reporting and reconciliation across platforms were manual, slow, and error-prone.",
        impact: "Freed analyst hours for revenue-generating work instead of ad-hoc data cleaning."
      },
      {
        description:
          "Approach: Designed scheduled Alteryx flows and Python APIs to ingest positions and trades, perform entity matching, and apply quality checks with SLA monitoring.",
        impact: "Reduced report prep from hours to minutes while standardizing data sets for downstream analytics."
      },
      {
        description:
          "Validation: Reconciled internal records with venue data, added unit tests on joins/outliers, and built anomaly alerts.",
        impact: "Delivered trustworthy, auditable outputs for client reporting and risk oversight."
      }
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
    summary:
      "Normalized SQL MIS replacing fragile Excel/VBA workflows for onboarding, offboarding and trading analytics exports.",
    tags: ["SQL", "Analytics", "Operations"],
    category: "Analytics & BI",
    details: [
      {
        description: "Problem: Excel-macro workflows were fragile and slow to scale to 10k+ accounts.",
        impact: "Created a single source of truth for onboarding/offboarding and analytics data."
      },
      {
        description:
          "Approach: Designed tables with constraints and indexed views, implemented role-based exports and change logs for auditability.",
        impact: "Improved query speed and reduced duplication across teams."
      },
      {
        description:
          "Validation: Added reconciliation scripts, integrity checks, and monthly backfills for historical consistency.",
        impact: "Reduced data errors by ~10% and cut leadership report prep to ≈15 minutes."
      }
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
    summary:
      "Multi-page Power BI dashboard with slicers, drilldowns and DAX KPIs to monitor cases, trends and cohorts.",
    tags: ["Power BI", "Dashboard", "Analytics"],
    category: "Analytics & BI",
    details: [
      {
        description:
          "Approach: Modeled data in a star schema, wrote DAX measures for growth and rolling averages, and added slicers for region/time comparisons.",
        impact: "Delivered interactive, presentation-ready insights for non-technical stakeholders."
      }
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
    summary:
      "Walk-forward XGBoost on microstructure and sentiment features with cost-aware intraday backtests.",
    tags: ["XGBoost", "Backtesting", "Microstructure", "Sentiment"],
    category: "ML & Trading",
    details: [
      {
        description:
          "Approach: Engineered order-flow features (imbalance, microprice, volatility regimes) and sentiment embeddings, applied purged and embargoed cross-validation, and modeled slippage and trading costs.",
        impact: "Reduced overfitting and made performance more representative of realistic execution."
      },
      {
        description:
          "Results: Tuned thresholds and position sizing, stress-tested strategies around macro events and volatility spikes.",
        impact: "Improved out-of-sample directional accuracy by ~15% and boosted risk-adjusted returns by ~20% in simulation."
      }
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
    summary:
      "OLS and Random Forest models mapping factor-based risk scores to next-quarter volatility and drawdowns.",
    tags: ["Risk", "S&P500", "Python", "Stats"],
    category: "Risk & Equities",
    details: [
      {
        description:
          "Approach: Constructed factor set including beta, Yang–Zhang volatility, downside ratio, autocorrelation and liquidity, winsorized and sector-neutralized across the index.",
        impact: "Produced stable inputs that generalized across sectors and market-cap buckets."
      },
      {
        description:
          "Validation: Ran walk-forward regressions and Random Forest models by quarter and mapped score deciles to realized drawdowns.",
        impact: "Improved explained variance of forward risk and created actionable risk buckets for portfolio analysis."
      }
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
    title: "LLM-Driven Bollinger Band Trading Framework (S&P 500 ETF)",
    summary:
      "AI-driven Bollinger Band trading framework where LLMs propose, refine and benchmark rule sets on S&P 500 ETF data.",
    tags: ["LLM", "Trading", "Bollinger Bands", "Python"],
    category: "ML & Trading",
    details: [
      {
        description:
          "Approach: Used advanced LLMs (Llama, GPT, Claude, Sonar) to auto-generate, critique and refine Bollinger Band-based trading rules, then benchmarked them against classic rule sets under realistic costs.",
        impact:
          "Created a systematic way to explore a wide space of trading rules while keeping evaluation consistent and comparable."
      },
      {
        description:
          "Results: Implemented real-time signal generation, position sizing and risk controls in Python (pandas-ta, NumPy, asyncio), optimizing latency for high-frequency decision loops.",
        impact:
          "Best LLM-inspired strategy achieved ~+140% cumulative returns with a maximum drawdown of ~34% on live-simulated S&P 500 ETF data."
      }
    ],
    links: { nda: true },
    kpis: [
      { label: "Cumulative return", value: "+140%" },
      { label: "Max DD", value: "34%" },
      { label: "LLM families", value: "4" }
    ]
  },
  {
    slug: "stress-testing",
    title: "Stress Testing for Financial Portfolios",
    summary:
      "Historical scenarios (’08 crisis, COVID crash) with VaR/CVaR and PCA + XGBoost diagnostics on drawdowns.",
    tags: ["Risk", "VaR", "CVaR", "PCA"],
    category: "Risk & Fixed Income",
    details: [
      {
        description:
          "Approach: Built parametric and historical VaR/CVaR at 95/99%, tagged regimes and simulated crisis scenarios on a multi-asset portfolio.",
        impact: "Quantified tail exposure and linked losses to underlying factors."
      },
      {
        description:
          "Results: Applied PCA and XGBoost to identify macro drivers behind drawdowns and disentangle signal from noise.",
        impact:
          "Estimated potential losses up to ~$25M in severe scenarios and reduced noise in factor interpretation by ~20%."
      }
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
    summary:
      "Crypto factor framework using sentiment, macro and on-chain features with regime-aware ensemble models.",
    tags: ["Crypto", "ML", "Sentiment", "Alt-Data"],
    category: "ML & Crypto",
    details: [
      {
        description:
          "Approach: Combined news sentiment, macro indicators and on-chain metrics into a unified feature set, then used ensemble voting models split by volatility regime.",
        impact: "Delivered more robust performance than single models in highly volatile environments."
      },
      {
        description:
          "Results: Focused on modest positive returns with strict cost control, applying tighter constraints in high-drawdown regimes.",
        impact:
          "Achieved ≈6% returns with high volatility while containing the worst drawdowns via regime filters and risk caps."
      }
    ],
    links: { report: "/reports/altdata-btc-eth.pdf" },
    kpis: [
      { label: "Return", value: "+6%" },
      { label: "Regime handling", value: "On", delta: "better" },
      { label: "Volatility", value: "High", delta: "managed" }
    ]
  },
  {
    slug: "mbs-prepayment-pricing",
    title: "MBS Prepayment & Pricing Framework – Rosetree Capital",
    summary:
      "Prepayment and pricing analysis for a $100M MBS pass-through under rate shocks and PSA/CPR variations.",
    tags: ["MBS", "Fixed Income", "Prepayment", "Risk"],
    category: "Risk & Fixed Income",
    details: [
      {
        description:
          "Approach: Stress-tested a $100M MBS pass-through under ±100 bps interest-rate shocks and varying PSA speeds, analyzing prepayment sensitivity and price response.",
        impact:
          "Helped quantify how rate scenarios and borrower incentives translate into uncertainty in MBS pricing."
      },
      {
        description:
          "Results: Built a valuation tool using PSA and incentive-adjusted CPR to model prepayment risk, convexity and cash-flow timing.",
        impact:
          "Provided a more nuanced view of prepayment risk and convexity for risk management and portfolio construction."
      }
    ],
    links: { nda: true },
    kpis: [
      { label: "Portfolio size", value: "$100M" },
      { label: "Rate shocks", value: "±100 bps" },
      { label: "Dimensions", value: "PSA & CPR" }
    ]
  },

  // ── Valuation / Macro / Research / Deals ─────────────────────────────────
  {
    slug: "walgreens-lbo",
    title: "Structuring a Walgreens LBO",
    summary:
      "Fully integrated LBO model for a $15B Walgreens acquisition with multi-tier capital structure and scenario analysis.",
    tags: ["Private Equity", "LBO", "Valuation"],
    category: "Valuation & Deals",
    details: [
      {
        description:
          "Approach: Built a 3-statement LBO model for a $15B Walgreens transaction, designing a capital stack with senior term loans, mezzanine debt and a revolver facility, fully linking income statement, balance sheet and cash-flow forecasts.",
        impact:
          "Enabled evaluation of transaction feasibility, leverage sustainability and investor return profiles under realistic financing constraints."
      },
      {
        description:
          "Results: Ran sensitivity and scenario analyses on leverage ratios, exit multiples and interest coverage to assess capital efficiency, credit risk and equity returns.",
        impact:
          "Optimized the structure to target ~22% IRR under base-case assumptions while keeping credit metrics within acceptable ranges."
      }
    ],
    links: { report: "/reports/walgreens-lbo.pdf" },
    kpis: [
      { label: "Target IRR", value: "≈22%" },
      { label: "Deal size", value: "$15B" },
      { label: "Capital layers", value: "3+" }
    ]
  },
  {
    slug: "valuation-applied-vs-lam",
    title: "Equity Valuation – Applied Materials vs LAM Research",
    summary:
      "DCF and comps-based valuation comparing two semiconductor leaders and explaining valuation dispersion.",
    tags: ["DCF", "Valuation", "Semiconductors"],
    category: "Valuation & Deals",
    details: [
      {
        description:
          "Approach: Built base, bull and bear DCFs; modeled WACC, ROIC and margins; and framed results in the context of semiconductor capex cycles and supply-chain dynamics.",
        impact: "Explained a ~$10B valuation gap between names across scenarios."
      }
    ],
    links: { report: "/reports/valuation-applied-vs-lam.pdf" },
    kpis: [
      { label: "Scenarios", value: "3" },
      { label: "Methods", value: "DCF + Comps" },
      { label: "Sector", value: "Semis" }
    ]
  },
  {
    slug: "econ-indicators-us-indices",
    title: "Economic Indicators vs US Stock Indices",
    summary:
      "MLR and XGBoost models linking GDP, inflation and unemployment to US stock index behavior.",
    tags: ["Econometrics", "Regression", "XGBoost"],
    category: "Macro & Econometrics",
    details: [
      {
        description:
          "Approach: Collected macro series (GDP, CPI, unemployment) from FRED and index levels from Yahoo Finance, engineered lags and tested for stationarity, and applied MLR and XGBoost with SHAP interpretability.",
        impact:
          "Mapped macro surprises and trends to index moves, helping contextualize macro risk in equity forecasts."
      }
    ],
    links: { report: "/reports/econ-indicators-us-indices.pdf" },
    kpis: [
      { label: "Indicators", value: "3+" },
      { label: "Models", value: "MLR + XGB" },
      { label: "Deliverable", value: "Heatmaps & charts" }
    ]
  },
  {
    slug: "strip-strap-options",
    title: "STRIP & STRAP Option Strategies",
    summary:
      "Backtested STRIP/STRAP overlays on Indian equities to shape return profiles and dampen drawdowns.",
    tags: ["Options", "Derivatives", "Hedging"],
    category: "Derivatives & Hedging",
    details: [
      {
        description:
          "Approach: Constructed STRIP and STRAP positions across multiple Indian equities, evaluated performance across implied-volatility regimes and studied payoff behavior around large moves.",
        impact:
          "Showed how asymmetric option overlays can improve portfolio convexity and protect downside risk."
      },
      {
        description:
          "Results: Backtests suggested ~18% return improvement during the study window with tangible drawdown dampening vs. unhedged exposure.",
        impact:
          "Demonstrated a practical overlay strategy for directional but risk-aware traders."
      }
    ],
    links: { report: "/reports/strip-strap-options.pdf" },
    kpis: [
      { label: "Return improvement", value: "≈18%" },
      { label: "DD effect", value: "Lower", delta: "better" },
      { label: "Markets", value: "India equities" }
    ]
  },
  {
    slug: "smart-supply-dcf",
    title: "Investment Proposal & Financial Modeling – Smart Supply Chain Venture",
    summary:
      "Integrated financial and valuation model (DCF, NPV, IRR, WACC) with pro-forma statements to assess a supply-chain venture.",
    tags: ["DCF", "NPV", "IRR", "Modeling"],
    category: "Valuation & Corporate Finance",
    details: [
      {
        description:
          "Approach: Built integrated financial and valuation models (DCF, NPV, IRR, WACC) and prepared pro-forma income statement, balance sheet and cash-flow projections, modeling revenue growth from ~₹1.6Cr to ~₹4.7Cr.",
        impact:
          "Assessed scalability, capital efficiency and funding needs with a coherent view of the venture’s financial trajectory."
      },
      {
        description:
          "Results: Delivered an investment feasibility analysis with NPV of ~₹78.6M, IRR of ~38% and a 2.9-year payback.",
        impact:
          "Provided data-driven input for investor decision-making and optimized capital budgeting and return expectations."
      }
    ],
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
    summary:
      "Markowitz efficient frontier, APT and Single-Index analysis for NIFTY REALTY constituents.",
    tags: ["Portfolio", "Markowitz", "APT"],
    category: "Portfolio & Factor Investing",
    details: [
      {
        description:
          "Approach: Estimated means and covariances, constructed Markowitz efficient frontier, and used CAPM/APT and Single-Index models to evaluate risk–return characteristics of real estate names.",
        impact:
          "Identified attractive allocations and highlighted undervalued/overvalued stocks via multi-factor diagnostics."
      }
    ],
    links: { report: "/reports/nifty-realty-portfolio.pdf" },
    kpis: [
      { label: "Annualized return", value: "71%" },
      { label: "Risk", value: "5.6%" },
      { label: "Outcome", value: "Efficient frontier" }
    ]
  },
  {
    slug: "dcx-ipo",
    title: "Post-IPO Analysis: DCX Systems",
    summary:
      "Post-listing fundamental and technical analysis of DCX Systems with indicator-based trading view.",
    tags: ["IPO", "Equity Research"],
    category: "Equity Research",
    details: [
      {
        description:
          "Approach: Evaluated business model, management quality and financial ratios, then overlaid technical indicators to form a combined fundamental/technical view.",
        impact:
          "Built an evidence-based stance with quantified signals and risk discussion for post-IPO performance."
      }
    ],
    links: { report: "/reports/dcx-ipo.pdf" },
    kpis: [
      { label: "Annualized return (thesis)", value: "26.72%" },
      { label: "Signals", value: "Multi-indicator" },
      { label: "View", value: "Combined FA/TA" }
    ]
  },
  {
    slug: "cross-platform-ab-ads",
    title: "Cross-Platform A/B Advertising Performance Analysis",
    summary:
      "A/B-style comparison of Facebook Ads vs. Google AdWords campaigns using Python and Power BI.",
    tags: ["Marketing Analytics", "A/B Testing", "Power BI"],
    category: "Analytics & BI",
    details: [
      {
        description:
          "Approach: Evaluated click-through rate, conversion and cost efficiency for Facebook and Google AdWords campaigns from 2021 to 2024 using Python for data wrangling and Power BI for visualization.",
        impact:
          "Created a unified view of media performance across channels and time, allowing apples-to-apples comparisons."
      },
      {
        description:
          "Results: Identified Facebook as ~2.3x more effective with ~37% lower acquisition cost relative to AdWords.",
        impact:
          "Supported optimized media spend decisions and improved marketing ROI allocation."
      }
    ],
    links: { nda: true },
    kpis: [
      { label: "Channels", value: "Facebook vs AdWords" },
      { label: "Cost improvement", value: "−37%", delta: "cheaper" },
      { label: "Effectiveness", value: "2.3x", delta: "better" }
    ]
  },

  // ── Accounting / Fundamental / Applied ML ─────────────────────────────────
  {
    slug: "retail-accounting",
    title: "Accounting Operations & Financial Reporting (Retail)",
    summary:
      "End-to-end bookkeeping, P&L, Balance Sheet and cash-flow discipline for a retail setup.",
    tags: ["Accounting", "Financial Statements"],
    category: "Accounting & Reporting",
    details: [
      {
        description:
          "Approach: Managed journal entries, ledgers and trial balance, produced periodic financial statements and implemented basic controls over inflows and outflows.",
        impact:
          "Improved accuracy of financial statements and provided the owner with clear visibility into profitability and cash health."
      }
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
    summary:
      "Sector-wide analysis using ratios, trend/seasonality and peer comparisons for textile companies.",
    tags: ["Finance", "Excel", "Python"],
    category: "Fundamental Analysis",
    details: [
      {
        description:
          "Approach: Analyzed trend and seasonality, profitability and leverage ratios, and peer comparisons using filings and market data.",
        impact:
          "Delivered a clear view of sector health and identified relatively stronger and weaker names."
      }
    ],
    links: { nda: true },
    kpis: [
      { label: "Companies", value: "Multi-name" },
      { label: "Ratios", value: "Full set" },
      { label: "Deliverable", value: "Report" }
    ]
  },
  {
    slug: "playstore-ml",
    title: "Google Play Store – Rating Prediction",
    summary:
      "ML models to predict high-rating apps using regression, clustering and discriminant analysis.",
    tags: ["SAS", "ML", "Regression"],
    category: "Applied ML",
    details: [
      {
        description:
          "Approach: Engineered features (installs, category, size, etc.), scaled variables and compared models including regression, clustering and discriminant analysis.",
        impact:
          "Identified key drivers of high ratings and improved model fit for classification of likely high-rating apps."
      }
    ],
    links: { nda: true },
    kpis: [
      { label: "Apps analyzed", value: "7,723" },
      { label: "Accuracy", value: "≈78%" },
      { label: "Deliverable", value: "Insights + model" }
    ]
  },
  {
    slug: "fraud-detection",
    title: "Credit Card Fraud Detection",
    summary:
      "Detection framework using Decision Trees, Logistic Regression and SVM with strong test accuracy.",
    tags: ["Classification", "SVM", "LogReg"],
    category: "Applied ML",
    details: [
      {
        description:
          "Approach: Addressed class imbalance, scaled features, ran grid search across Decision Tree, Logistic Regression and SVM, and evaluated using confusion matrices and ROC curves.",
        impact:
          "Achieved strong recall on the fraud class while maintaining balanced precision/recall for production viability."
      }
    ],
    links: { nda: true },
    kpis: [
      { label: "Test accuracy", value: "94%" },
      { label: "Recall", value: "High", delta: "better" },
      { label: "AUC", value: "Strong" }
    ]
  }
];
