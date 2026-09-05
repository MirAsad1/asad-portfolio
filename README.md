# Asad's Portfolio

A modern, responsive portfolio website rebuilt with React and Tailwind CSS to showcase my work as an **AI Engineer** and **Software Developer**. It highlights my projects, experience, technical skills, and provides an easy way to get in touch.

## ✨ Features

* Responsive, dark-themed UI with scroll-reveal animations
* Sticky navbar with scroll-based "dock" effect and scrollspy active-link highlighting
* Projects section with expandable descriptions and tech-stack icons
* Experience timeline and categorized skills
* Contact form powered by Formspree (no backend required)
* Resume download
* Fully static — deployable on Vercel with zero server maintenance

## 🛠️ Tech Stack

<p>
  <img src="https://cdn.simpleicons.org/react" height="36" alt="React" />
  <img src="https://cdn.simpleicons.org/vite" height="36" alt="Vite" />
  <img src="https://cdn.simpleicons.org/tailwindcss" height="36" alt="Tailwind CSS" />
  <img src="https://cdn.simpleicons.org/javascript" height="36" alt="JavaScript" />
  <img src="https://cdn.simpleicons.org/vercel" height="36" alt="Vercel" />
  <img src="https://cdn.simpleicons.org/formspree" height="36" alt="Formspree" />
</p>

## 🚀 Getting Started

```bash
git clone https://github.com/MirAsad1/asad-portfolio.git
cd portfolio-react

npm install

# copy the example env file and add your Formspree form ID
cp .env.example .env

npm run dev
```

The app will be running at `http://localhost:5173`.

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `VITE_FORMSPREE_FORM_ID` | Form ID from your [Formspree](https://formspree.io) dashboard, used to send contact form submissions |

## 📁 Project Structure

See [ARCHITECTURE.md](./ARCHITECTURE.md) for a full breakdown of the component structure and technical decisions.

## 🌐 Live Demo

https://your-vercel-url.vercel.app _(update after deployment)_

## 📄 Alternate Version

An alternate Django + SQLite version of this portfolio, with an admin panel for content management, is available [here](https://github.com/MirAsad1/asad-portfolio-django).