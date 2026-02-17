---
description: How to deploy the portfolio website
---

# Deployment Guide

This guide covers the best ways to deploy your portfolio website. Since it is built with **Vite + React**, we recommend using **Vercel** or **Netlify**.

## Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Vite projects.

### Step 1: Initialize Git
If you haven't already, turn your project into a Git repository:
1. Open terminal in the project folder.
2. Run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

### Step 2: Push to GitHub
1. Create a new repository on [GitHub](https://github.com/new).
2. Follow the instructions to push your local code to GitHub.

### Step 3: Connect to Vercel
1. Go to [Vercel](https://vercel.com/dashboard).
2. Click **"Add New"** > **"Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect **Vite** settings. Click **"Deploy"**.

---

## Option 2: Netlify

Netlify is another excellent choice for static websites.

1. Go to [Netlify](https://app.netlify.com/).
2. Click **"Add new site"** > **"Import an existing project"**.
3. Connect your GitHub and select the repository.
4. Set Build command to `npm run build` and Publish directory to `dist`.
5. Click **"Deploy site"**.

---

## Option 3: Manual Deploy (Vercel CLI)

If you don't want to use GitHub, you can use the Vercel CLI:
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project folder.
3. Follow the prompts to deploy.
