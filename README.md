# Moon Parallax Landing Page

A scroll-driven landing page built with **HTML, CSS and GSAP**, featuring layered parallax effects, section snapping, and subtle motion animations.

This project is a **technical reinterpretation** of a visual concept originally presented in a tutorial by **Nicolai Palmkvist**, rebuilt entirely from scratch without the use of page builders.

You can see a live preview here: https://devis4wd.github.io/gsap-moon-parallax-landing/

---

## Overview

The goal of this project was to recreate a visually rich, scroll-based landing page by focusing on:

- manual HTML structure
- custom CSS layout and layering
- GSAP-powered animations and scroll behavior
- responsive, art-directed images
- section-based navigation with snap scrolling

The implementation prioritizes **clarity, control and learning**, rather than production-ready optimization.

---

## Features

- Full-screen, section-based layout
- Scroll-driven parallax animations using **GSAP + ScrollTrigger**
- Layered images with depth perception
- Art-directed responsive images via `<picture>` and breakpoints
- Section snap scrolling for controlled navigation
- Smooth navigation between sections using GSAP ScrollToPlugin
- Dynamic header text updated based on the active section
- Subtle motion effects (fade-ins, scale pulses, parallax offsets)

---

## Tech Stack

- HTML5
- CSS3 (Flexbox, clamp-based typography, media queries)
- JavaScript (ES6)
- GSAP 3
  - ScrollTrigger
  - ScrollToPlugin
  - Custom GSAP effects

No frameworks or page builders were used.

---

## Project Structure
```/
├── index.html
├── css/
│ └── style.css
├── js/
│ └── script.js
└── img/
  └── responsive, art-directed images
```


---

## Implementation Notes

- All layouts and animations are hand-coded.
- Parallax layers are managed via absolute positioning and z-index stacking.
- Animations are orchestrated through multiple GSAP timelines:
  - Section 1 runs on page load
  - Sections 2–4 trigger on scroll entry
- Scroll snapping is implemented with `ScrollTrigger.snap`.
- Native anchor scrolling was replaced with **GSAP ScrollToPlugin** to ensure smooth navigation compatible with ScrollTrigger.
- Header text dynamically updates based on the active section using ScrollTrigger callbacks.
- Images are cropped and adapted per breakpoint rather than simply resized.

---

## Credits and Attribution

### Design and Visual Assets

- Original design concept and images are provided in the following tutorial:
  https://www.youtube.com/watch?v=Zl-MS9TY8_w
- Tutorial author and asset owner: **Nicolai Palmkvist**

The original tutorial implementation uses Elementor. This repository does **not** reuse any page-builder code (which is the purpose of the whole 
exercise). 

### Code Implementation

- HTML structure rebuilt from scratch
- Custom CSS (approximately 85% original, adapted to a different markup)
- Entire JavaScript logic rewritten using GSAP
- Custom animation timing, scroll logic, and responsive behavior

---

## Educational Purpose

This project was created **solely for educational and portfolio purposes**.

It is intended as:
- a learning exercise for GSAP and ScrollTrigger
- a demonstration of scroll-based animation techniques
- a personal front-end development portfolio project

It is **not intended for commercial use**.

---

## License

### Code

All original code in this repository is licensed under the **GNU General Public License v2.0 (GPLv2)**.

You are free to study, modify, and redistribute the code under the terms of the GPLv2.

### Design and Images

All images and the original visual design concept are **not covered by the GPL license**.

They remain the property of **Nicolai Palmkvist** and are included here **only for educational demonstration purposes**, as presented in the original tutorial.



