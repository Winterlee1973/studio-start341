🚀 Static Site Deployment Guide with Firebase, VS Code, and Firebase Studio

This guide documents the full setup we used to deploy a static site using Next.js, Firebase Hosting, and a combination of VS Code and Firebase Studio. It's beginner-friendly, clear, and includes every step you need.

🧱 Project Overview

Framework: Next.js (v15+)

Build method: output: 'export' (static HTML)

Editor: Firebase Studio (cloud-based) and VS Code (locally)

Deployment: Firebase Hosting (via CLI)

Version Control: GitHub (optional but recommended)

🛠 Local Environment Setup

Clone your repo from GitHub

git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

Install dependencies

npm install

Configure next.config.ts

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

Set up .gitignore (from project root)

/node_modules
/.next
/out

🌐 Firebase Hosting Setup (CLI)

Install Firebase CLI

npm install -g firebase-tools

Login to Firebase

firebase login

Initialize Firebase in your project

firebase init hosting

Choose "Use an existing project"

Choose your Firebase project (e.g. start341-portfolio-showcase)

Set public directory as out

Say No to SPA rewrite unless needed

Say No to GitHub deploys if you're using CLI

Update firebase.json if needed

{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}

🚀 Building and Deploying (Local Workflow)

1. Build the static site

npm run build

2. Deploy using Firebase CLI

firebase deploy --only hosting

✅ Your site is now live at: https://<project-id>.web.app

✏️ Using Firebase Studio for Cloud-Based Editing

You can log into Firebase Studio to:

View your repo files

Edit files (like in VS Code)

Push changes to GitHub (if connected)

Note: Firebase Studio does not run npm run build. You must build locally to regenerate /out.

🔁 Best Practice Summary

Task

Tool

Code Editing

Firebase Studio or VS Code

Build Project

Local machine using VS Code terminal

Deploy to Firebase

Firebase CLI (firebase deploy)

Track changes

GitHub (optional, but helpful)

✅ You Now Have:

A clean, static Next.js site

Firebase Studio for quick edits

VS Code for full control

One-command deploys using Firebase CLI

Enjoy your blazing-fast, no-server-needed site! 🚀

Let me know if you want to automate builds later with GitHub Actions!

