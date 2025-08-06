
# 🌐 NGO Website Practice — Vercel Deployment

Live URL: [https://ngo-website-practice-imp.vercel.app/](https://ngo-website-practice-imp.vercel.app/)

This project is a **React-based NGO website** built with **Tailwind CSS v4** and deployed using **Vercel**. It serves as a practice project demonstrating Tailwind utility classes, responsive design, and animation techniques.

---

## 🚀 Tech Stack

- **Frontend:** React + Vite
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel

---

## 🧱 Key Tailwind Concepts Used

### 🔤 `whitespace-nowrap`

> Prevents text from wrapping to the next line, even if it overflows the container.

```css
/* Equivalent CSS */
white-space: nowrap;
```

**Use Case:** Ensures buttons, labels, or tags remain on a single line.

---

### 📦 `flex-shrink-0`

> Prevents an item inside a flex container from shrinking when space is tight.

```css
/* Equivalent CSS */
flex-shrink: 0;
```

**Use Case:** Keeps icons or elements from collapsing inside a flex row.

---

### 📐 `inset-0`

> Positions an absolutely or fixed-positioned element to fully cover its nearest positioned ancestor.

```css
/* Equivalent CSS */
top: 0;
right: 0;
bottom: 0;
left: 0;
```

**Use Case:** Useful for creating overlays, fullscreen modals, or filling containers.

---

## 📁 Project Structure (Simplified)

```
src/
├── assets/            # Static files (images, icons)
├── components/        # Reusable React components
├── App.jsx            # Main entry component
├── main.jsx           # App entry point
vite.config.js         # Vite build config with @tailwindcss/vite
```

---

## 🛠 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/jatin-ukey21/NGO-website-practice-imp

# 2. Navigate into the project directory
cd NGO-website-practice-imp

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

---

## 🌐 Deployment (Vercel)

Make sure to push your code (excluding `node_modules`) to GitHub and then import the repo into [Vercel](https://vercel.com/). Vercel automatically installs dependencies and builds your project.

If using `@tailwindcss/vite`, don't forget:

```bash
npm install -D @tailwindcss/vite
```

---

## 📸 Preview

![Preview Screenshot](link-to-preview-screenshot.png)

---

## 👨‍💻 Author

- [Jatin Ukey](https://github.com/jatin-ukey21)

---

