---
description: General instructions and conventions for working with the Candy AI project.
---

<!-- BEGIN:nextjs-agent-rules -->
## 🚨 This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## 🤖 Project Overview & Environment
- **Framework**: Next.js 16.2.6 (App Router)
- **Language**: TypeScript (`^5`)
- **Styling**: Tailwind CSS v4
- **Package Manager**: npm

## 🏗️ Essential Commands
- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Start**: `npm run start`
- **Lint**: `npm run lint`

## 📐 Conventions
- Use the **App Router** (`app/` directory).
- Use **Tailwind v4** syntax and classes for styling.
- Refer to `package.json` for specific package versions constraint (e.g., React 19, Next 16).
- Adhere to the formatting defined in `eslint.config.mjs`.

## 📚 Documentation
- See [README.md](README.md) for getting started instructions.
