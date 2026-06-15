# Column — Online Learning Platform

A responsive, multi-section educational landing page built with **React** and **SCSS**. The project showcases smooth scroll animations, interactive image sliders, a contact form, and a dynamic scroll progress indicator.

---

## 🚀 Live Demo

[https://hamza-leon120.github.io/column/](https://hamza-leon120.github.io/column/)

---

## 📸 Screenshots

### 🖥️ Desktop Preview
![Desktop Preview](/src/img/Screenshot.png)

### 📱 Mobile View  
![Mobile Preview](/src/img/mobail-Screenshot.png)

---

## 📸 Features

- **Sticky Header** — fades out on scroll then reappears as a fixed navbar, with a responsive hamburger menu
- **Hero Slider** — manual image carousel with left/right navigation
- **Trending Courses** — infinite-loop carousel with clone-based seamless animation
- **Recent Publications** — sliding grid of publication cards
- **Enrolment Form** — validated form with name, email, and phone (Algerian format pattern)
- **Get In Touch** — contact form with name, email, subject, and message fields
- **Scroll Animations** — sections fade and slide in using `IntersectionObserver`
- **Scroll Progress Indicator** — conic-gradient circle showing page read percentage
- **Back to Top Button** — smooth scroll to top, visible after scrolling 300px
- **Footer** — social links, contact info, and email subscribe input

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Header.js            # Sticky nav with smooth scroll links
│   ├── Hero.js              # Hero section with image slider
│   ├── Enrol.js             # Enrolment section with form
│   ├── Offer.js             # What we offer section
│   ├── Trending.js          # Trending courses infinite carousel
│   ├── Exams.js             # Online exams section
│   ├── Publication.js       # Publications section
│   ├── Recent.js            # Recent publications slider
│   ├── Intructors.js        # Instructors grid
│   ├── GetInTouch.js        # Contact form section
│   ├── Footer.js            # Footer with subscribe input
│   ├── CoButton.js          # Reusable button component
│   ├── Online.js            # Reusable text + CTA block
│   ├── ScrollPercentage.js  # Circular scroll progress indicator
│   ├── Up.js                # Back to top button
│   └── Sections.js          # Renders all page sections
├── styles/
│   ├── style.scss           # Main stylesheet
│   ├── _layout.scss         # Layout variables and grid
│   └── _mixin.scss          # SCSS mixins
└── App.js                   # Root component with IntersectionObserver
```

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React | Component-based UI |
| SCSS | Styling and responsive layout |
| FontAwesome | Icons (brands + solid) |
| IntersectionObserver API | Scroll-triggered animations |
| CSS transforms | Sliders and carousels |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js >= 14
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/hamza-leon120/your-repo-name.git

# Navigate into the project
cd your-repo-name

# Install dependencies
npm install

# Start the development server
npm start
```

The app will run at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

---

## 📋 Component Overview

### `App.js`
Sets up a shared `allSection` ref array and an `IntersectionObserver` that triggers fade-in animations when sections enter the viewport (threshold: 30%).

### `Header.js`
- Hamburger menu toggles nav on mobile
- Smooth scrolls to section by matching `innerHTML` to element `id`
- Fades out between scroll positions 200–500px, then re-appears as fixed

### `Hero.js`
Manual image slider using `translateX` calculated from the container's computed width.

### `Trending.js`
Infinite carousel using cloned first/last slides. Resets position silently using a 0s transition timeout.

### `Recent.js`
Sliding grid where slide width is computed from the parent's width plus card margin.

### `ScrollPercentage.js`
Calculates `(scrollY + windowHeight) / pageHeight * 100` and renders it as a `conic-gradient` circle.

---

## 🤝 Author

**Aymen** — Junior Frontend Developer  
[LinkedIn](https://www.linkedin.com/in/your-profile) · [Portfolio](https://hamza-leon120.github.io/my-profail/) · [Upwork](https://www.upwork.com/freelancers/your-profile)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
