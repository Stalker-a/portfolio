import { budgetOptions, projectTypes, type BudgetOption, type ProjectType } from "@/data/contact";

const MAX_BODY_LENGTH = 8_000;
const MAX_COMPANY_LENGTH = 150;
const MAX_CONTACT_LENGTH = 150;
const MAX_DESCRIPTION_LENGTH = 4_000;
const MAX_NAME_LENGTH = 100;
const MAX_URL_LENGTH = 500;
const MIN_DESCRIPTION_LENGTH = 20;

type ContactSubmission = {
  budget: BudgetOption;
  company: string;
  contact: string;
  description: string;
  name: string;
  projectType: ProjectType;
  projectUrl: string;
};

type FieldErrors = Partial<Record<keyof ContactSubmission, string>>;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readText(value: unknown) {
  return typeof value === "string" ? value.trim() : null;
}

function isHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function validateSubmission(payload: Record<string, unknown>) {
  const errors: FieldErrors = {};
  const name = readText(payload.name);
  const contact = readText(payload.contact);
  const company = readText(payload.company);
  const projectType = readText(payload.projectType);
  const budget = readText(payload.budget);
  const projectUrl = readText(payload.projectUrl);
  const description = readText(payload.description);

  if (!name || name.length > MAX_NAME_LENGTH) {
    errors.name = "Enter a name up to 100 characters.";
  }

  if (!contact || contact.length > MAX_CONTACT_LENGTH) {
    errors.contact = "Enter an email or Telegram username up to 150 characters.";
  }

  if (company === null || company.length > MAX_COMPANY_LENGTH) {
    errors.company = "Company must be up to 150 characters.";
  }

  if (!projectType || !projectTypes.includes(projectType as ProjectType)) {
    errors.projectType = "Select a valid project type.";
  }

  if (!budget || !budgetOptions.includes(budget as BudgetOption)) {
    errors.budget = "Select a valid budget option.";
  }

  if (projectUrl === null || projectUrl.length > MAX_URL_LENGTH || (projectUrl && !isHttpUrl(projectUrl))) {
    errors.projectUrl = "Enter a valid URL up to 500 characters.";
  }

  if (!description || description.length < MIN_DESCRIPTION_LENGTH || description.length > MAX_DESCRIPTION_LENGTH) {
    errors.description = "Describe the project in 20 to 4000 characters.";
  }

  if (Object.keys(errors).length > 0 || !name || !contact || company === null || !projectType || !budget || projectUrl === null || !description) {
    return { errors };
  }

  return {
    data: {
      budget: budget as BudgetOption,
      company,
      contact,
      description,
      name,
      projectType: projectType as ProjectType,
      projectUrl,
    } satisfies ContactSubmission,
  };
}

function formatTelegramMessage(submission: ContactSubmission) {
  return [
    "🚀 New Portfolio Lead",
    "",
    "Name:",
    submission.name,
    "",
    "Contact:",
    submission.contact,
    "",
    "Company:",
    submission.company || "Not provided",
    "",
    "Project Type:",
    submission.projectType,
    "",
    "Budget:",
    submission.budget,
    "",
    "Project URL:",
    submission.projectUrl || "Not provided",
    "",
    "Description:",
    submission.description,
  ].join("\n");
}

export async function POST(request: Request) {
  const body = await request.text();

  if (body.length > MAX_BODY_LENGTH) {
    return Response.json({ error: "Please shorten your request and try again." }, { status: 413 });
  }

  let payload: unknown;

  try {
    payload = JSON.parse(body);
  } catch {
    return Response.json({ error: "Unable to process this request." }, { status: 400 });
  }

  if (!isRecord(payload)) {
    return Response.json({ error: "Unable to process this request." }, { status: 400 });
  }

  const honeypot = readText(payload.website);
  if (honeypot) {
    return Response.json({ success: true });
  }

  const validation = validateSubmission(payload);
  if ("errors" in validation) {
    return Response.json(
      { error: "Please review the highlighted fields.", fields: validation.errors },
      { status: 400 },
    );
  }

  const botToken = process.env.TELEGRAM_CONTACT_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CONTACT_CHAT_ID;

  if (!botToken || !chatId) {
    return Response.json({ error: "The contact form is temporarily unavailable." }, { status: 503 });
  }

  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      body: JSON.stringify({
        chat_id: chatId,
        disable_web_page_preview: true,
        text: formatTelegramMessage(validation.data),
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    if (!telegramResponse.ok) {
      return Response.json({ error: "Unable to send your request right now." }, { status: 502 });
    }
  } catch {
    return Response.json({ error: "Unable to send your request right now." }, { status: 502 });
  }

  return Response.json({ success: true });
}
