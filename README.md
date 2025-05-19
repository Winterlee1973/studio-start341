# 🚀 Static Site Deployment Guide with Firebase, VS Code, and Firebase Studio

This guide documents the full setup we used to deploy a static site using Next.js, Firebase Hosting, and a combination of VS Code and Firebase Studio. It's beginner-friendly, clear, and includes every step you need.

---

## 🧱 Project Overview

- **Framework:** Next.js (v15+)
- **Build method:** Static export (`output: 'export'`)
- **Editor:** Firebase Studio (cloud-based) and VS Code (locally)
- **Deployment:** Firebase Hosting (via CLI)
- **Version Control:** GitHub (optional but recommended)

---

## 🛠 Local Environment Setup

1. **Clone your repo from GitHub**

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
Install dependencies

bash
Copy
Edit
npm install
Configure next.config.ts

ts
Copy
Edit
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
Set up .gitignore

gitignore
Copy
Edit
/node_modules
/.next
/out
🌐 Firebase Hosting Setup (CLI)
You do not need Firebase Data Connect or GraphQL features to deploy a static site.

Install Firebase CLI

bash
Copy
Edit
npm install -g firebase-tools
Login to Firebase

bash
Copy
Edit
firebase login
Initialize Firebase in your project

bash
Copy
Edit
firebase init hosting
Choose: Use an existing project

Select your Firebase project (e.g. start341-portfolio-showcase)

Set public directory to out

Choose: No for SPA rewrite (unless your app needs it)

Choose: No for GitHub deploys (if deploying manually)

Update firebase.json if needed

json
Copy
Edit
{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
🚀 Building and Deploying (Local Workflow)
Build your static site

bash
Copy
Edit
npm run build
This generates your site into the out/ directory.

Deploy to Firebase Hosting

bash
Copy
Edit
firebase deploy --only hosting
✅ Your site is now live at:
https://<your-project-id>.web.app

✏️ Using Firebase Studio for Cloud-Based Editing
Firebase Studio allows you to:

View and edit files (like a browser-based VS Code)

Connect to GitHub

Push/pull commits

🔥 Important: Firebase Studio does not run npm run build.
You must build your site locally to regenerate /out.

🔁 Best Practice Summary
Task	Tool
Code Editing	Firebase Studio / VS Code
Build Project	VS Code terminal
Deploy to Firebase	Firebase CLI (firebase deploy)
Track changes	GitHub (optional)

✅ You Now Have:
A clean static Next.js site

Firebase Studio for quick browser-based edits

VS Code for full developer control

One-command deploys via Firebase CLI

Enjoy your blazing-fast, no-server-needed site! 🚀