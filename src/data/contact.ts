export const projectTypes = [
  "AI Assistant",
  "Telegram Bot",
  "Business Automation",
  "Web Application",
  "Backend / API",
  "Infrastructure / Deployment",
  "Not Sure Yet",
] as const;

export const budgetOptions = [
  "Under $250",
  "$250 – $500",
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500+",
  "Not Sure Yet",
] as const;

export type ProjectType = (typeof projectTypes)[number];
export type BudgetOption = (typeof budgetOptions)[number];
