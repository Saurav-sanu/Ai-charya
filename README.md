# 🧠 AI-Charya – AI-Powered Career & Resume Assistant

https://ai-charya.vercel.app/

AI-Charya is a full-stack web application that helps users craft better resumes, explore industry insights, and improve their career prospects with the power of AI. Built with **Next.js 14 App Router**, **Google Gemini AI**, and **Prisma ORM**, it provides an intuitive and intelligent experience.

---

## ✨ Features

### 🔐 Authentication
- Integrated **Clerk** for seamless user sign-in/sign-up.
- Server-side user validation using `auth()`.

### 📝 Resume Builder
- Dynamic form sections for **Contact Info**, **Experience**, **Projects**, **Education**, and **Skills**.
- Integrated **Google Gemini 1.5 Flash** to improve resume descriptions.
- React Hook Form + Zod used for schema-based validation and form control.
- Resume auto-saves to database using **Prisma upsert**.

### 📈 Quiz and Performance Tracking
- AI-generated quizzes tailored to the user's industry.
- Scores stored and tracked over time.
- Interactive **line chart** using **Recharts** to visualize performance.

### 📊 Industry Insights
- Upon onboarding, AI generates:
  - Salary ranges for roles
  - Market outlook
  - Growth rate
  - Top & recommended skills
- Insights are stored and reused to avoid redundant API calls.

### 🌐 Full-stack Integration
- **PostgreSQL** via Prisma for database.
- **Server Actions** used for secure DB/AI logic.
- Smart caching with `revalidatePath()` and fallback states.
- UI feedback with **Sonner** toasts.

---

## 🛠️ Tech Stack

| Category        | Tools / Libraries                                |
|----------------|--------------------------------------------------|
| **Frontend**    | Next.js 14, React, Tailwind CSS, Shadcn UI       |
| **Backend**     | Prisma ORM, PostgreSQL, Clerk, Google Gemini AI  |
| **AI**          | Google Generative AI – Gemini 1.5 Flash          |
| **Charts**      | Recharts                                         |
| **Forms**       | React Hook Form, Zod                             |
| **Deployment**  | Vercel                                           |

---


## 🧪 Local Development

```bash
# 1. Clone the repo
git clone https://github.com/saurav-sanu/ai-charya.git
cd ai-charya

# 2. Install dependencies
npm install

# 3. Set environment variables
touch .env

# Add the following:
# CLERK_SECRET_KEY=
# CLERK_PUBLISHABLE_KEY=
# GEMINI_API_KEY=
# DATABASE_URL=postgresql://...

# 4. Run Prisma migrations
npx prisma generate
npx prisma migrate dev

# 5. Start the development server
npm run dev
🙋‍♂️ Author
Saurav Kumar
Connect on LinkedIn
Portfolio Projects
