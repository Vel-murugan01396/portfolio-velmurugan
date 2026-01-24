# Portfolio — Next.js Single Page

A single-page portfolio built with **Next.js** (JavaScript), **Tailwind CSS**, and the App Router.

## Features

- **Header** with section-wise links that smooth-scroll to Home, About, Projects, Contact
- **Home section**:
  - **Left**: Rounded gradient avatars (replace with your images later)
  - **Right**: Rotating heading slider — *Frontend Developer* → *React Developer* → *Next.js Developer*
  - **Bottom**: Short intro copy + “View Work” / “Get in Touch” buttons
- Placeholder About, Projects, and Contact sections for nav targets

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.js      # Root layout
  page.js        # Single page (Header + sections)
  globals.css    # Tailwind + slider keyframes
components/
  Header.js      # Sticky nav with scroll-to-section links
  HomeSection.js # Hero: rounded images, role slider, content, CTAs
```

## Customize

- **Rounded images**: Edit `roundImages` in `components/HomeSection.js` or replace the divs with `<Image>` pointing to your photos.
- **Slider roles**: Change the `roles` array in `HomeSection.js`.
- **Section content**: Update the placeholder sections in `app/page.js` or replace them with dedicated components.
