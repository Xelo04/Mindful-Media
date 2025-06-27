aaaaaaaaaaa# Mindful Media

**Mindful Media** is a web application that highlights the positive impact of social media on mental health, community support, and self-expression. The project allows users to read real-life stories, explore educational content, and share their own experiences through an interactive and accessible platform.

**You can visit the live website at [https://hashtag-mindful-media.netlify.app](https://hashtag-mindful-media.netlify.app)**

---

## 📖 Table of Contents

- [🚀 Features](#-features)
- [📂 Project Structure](#-project-structure)
- [🛠️ Technologies Used](#️-technologies-used)
- [🌟 Key Functionalities](#-key-functionalities)
- [⚙️ Installation and Usage](#️-installation-and-usage)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## 🚀 Features

- **Real-Life Stories**: Browse and filter user-submitted stories about positive experiences with social media.
- **Tabbed Educational Panel**: Explore themed content on building community, learning about mental health, and self-expression.
- **Team Member Carousel**: Meet the project team with a slider component.
- **Share Your Story**: Submit your own story via a secure form with EmailJS integration.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Dynamic Navbar**: Navigation adapts to the current page and highlights the "Share Your Story" section.
- **Accessible UI**: Uses semantic HTML and accessible components.

---

## 📂 Project Structure

```bash
Mindful-Media/
├── .env
├── .gitignore
├── index.html
├── LICENSE
├── netlify.toml
├── package.json
├── README.md
├── tsconfig.json
├── vite.config.ts
├── public/
│   ├── logo-icon.png
│   ├── logo.png
│   ├── sitemap.xml
│   ├── star.svg
│   ├── translate.svg
│   ├── contact-page/
│   ├── real-life-examples/
│   └── team-members/
└── src/
    ├── App.tsx
    ├── data.ts
    ├── main.tsx
    ├── tabbedPanelData.tsx
    ├── vite-env.d.ts
    ├── components/
    │   ├── filtered-list/
    │   ├── filters/
    │   ├── footer/
    │   ├── navbar/
    │   ├── popping-star/
    │   ├── tabbed-panel/
    │   ├── team-member-slider/
    │   └── user-story-form/
    ├── styles/
    └── pages/
        ├── about/
        ├── contact/
        ├── our-stories/
        └── your-story/
```

---

## 🛠️ Technologies Used

- **React**: UI library for building interactive interfaces.
- **Vite**: Fast build tool and development server.
- **TypeScript**: Type-safe JavaScript.
- **Sass (SCSS)**: For modular and maintainable styles.
- **React Router**: Client-side routing.
- **React Select**: Accessible dropdowns for filters and forms.
- **EmailJS**: Secure form submissions via email.
- **Netlify**: Hosting and continuous deployment.
- **Google Fonts & Material Icons**: Modern typography and icons.

---

## 🌟 Key Functionalities

1. **Story Filtering and Pagination**

   - Users can filter stories by age, gender, sexuality, and nationality.
   - Paginated display for easy browsing.

2. **Tabbed Educational Content**

   - Themed tabs with real-life examples and resources.

3. **Team Member Slider**

   - Carousel to meet and learn about the project team.

4. **User Story Submission**

   - Secure form with validation and EmailJS integration.
   - Optional email field for further contact.

5. **Responsive & Accessible Design**

   - Mobile-friendly layout.
   - Semantic HTML and ARIA labels for accessibility.

6. **SPA Routing & Sitemap**
   - Netlify configuration for proper SPA routing and sitemap.xml for SEO.

---

## ⚙️ Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/Xelo04/NASA-Daily-Photo
   cd NASA-Daily-Photo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a .env file in the root directory.
   Add your EmailJS keys:
   ```bash
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the app in your browser at http://localhost:5173.

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and submit a pull request.

---

## 📜 License

This project is under the MIT License - see the [LICENSE](./LICENSE) file for details.
