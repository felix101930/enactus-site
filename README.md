# Enactus SAIT Official Website

Welcome to the official repository for the Enactus SAIT website. This project serves as the modern, interactive, and informational hub for the Enactus SAIT organization, built with a fully responsive and dynamic tech stack.

## **Live Site:** [https://enactus-site-mu.vercel.app/](https://enactus-site-mu.vercel.app/)

## Key Features

This project is more than just a static site. It's a showcase of modern web development techniques designed to create an engaging user experience.

- **Dynamic "Sticky" Navbar:** A navigation bar that transitions from transparent to a solid background on scroll, dynamically switching logos and text colors for maximum readability.
- **Fully Responsive Mobile Menu:** A beautifully animated "hamburger" menu that provides a seamless navigation experience on any device.
- **On-Scroll Animations:** Content sections gracefully fade into view as the user scrolls, powered by `react-intersection-observer`.
- **Advanced Scroll-Linked Animations:** The homepage features a "deck of cards" effect for projects, and the main projects page uses multiple layouts and parallax effects, all powered by `Framer Motion`.
- **Interactive Org Charts:** The "About Us" page features multiple, switchable views for exploring the team structure.
- **Component-Driven Architecture:** Built from the ground up with a modular and reusable component system, making the site easy to scale and maintain.

## Tech Stack

- **Frontend:** React, TypeScript
- **Build Tool:** Vite
- **Routing:** React Router
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion

## Project Structure

The project is organized with a clear and scalable folder structure.

- `src/pages/`: Contains the top-level component for each page of the site (e.g., `HomePage.tsx`, `AboutPage.tsx`).
- `src/components/`: This is the heart of the project, containing all our reusable components.
  - `/layouts/`: Holds the master templates like the `Navbar`, `Footer`, and main `Layout`.
  - `/sections/`: Contains the large, distinct content blocks for each page, organized into page-specific subfolders (e.g., `/home`, `/about`).
  - `/common/`: Holds small, globally reusable "Lego brick" components like buttons, animation wrappers (`FadeIn.tsx`), and utility components.
- `src/types/`: A central directory for all shared TypeScript data structures (e.g., `project.ts`).
- `src/assets/`: Contains all static assets like images, logos, and icons.
- `src/styles/`: For global CSS styles and Tailwind directives.

## Getting Started

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    ```sh
    git clone https://your-repository-url.git
    ```
2.  **Install NPM packages:**
    ```sh
    npm install
    ```
3.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The site will be available at `http://localhost:5173/`.

---

## TODO

Felix

- [ ] **Awards and Achievements Section**

Sophia

- [ ] **Resend Integration, Test Functionality**

Osele

- [ ] **About Us Section Follow Hierarchy Style, Use Placeholder Images**

## NOTES

- Create your branch following "feature/x"

- When done, send me a PR Request for merging

## Active Development Tasks

---

### **Assigned to: Felix**

- [ ] **Feature: Build Awards & Achievements Section**
  - **Goal:** Create a timeline visual of awards.
  - **Implementation Details:**
    - Add Images.

---

### **Assigned to: Sophia**

- [ ] **Feature: Implement and Test Contact Form Submission with ReSend**
  - **Goal:** Make the contact form on the `/contact` page fully functional so that submissions are sent to the team's email.
  - **Implementation Details:**
    - Use a personal email for testing
    - **Crucially,** manage the API key securely using environment variables (`.env` file), not hardcoded in the component.
    - Add success and error state handling to provide clear feedback to the user after they submit the form.
    - Add a logging system if possible either on backend or a log file (optional).

---

### **Assigned to: Osele**

- [ ] **Refactor: Create Hierarchial Style About Us Section**
  - **Goal:** Redesign the student team chart on the `/about` page to follow a hierarchial style format.
  - **Implementation Details:**
    - You can comment out the previous implementation (TeamSectionAbout ).
    - Use placeholder images for now
    - Utilize the previous hierarchial structure and names and roles.
    - Reference would be ENACTUS SFU Team Section

---

## Contribution Guidelines

To keep our workflow clean and organized, please follow these steps:

1.  **Create Your Branch:** Always create a new branch for your feature. Use a descriptive naming convention:

    ```sh
    git checkout -b feature/your-name/task-summary
    # Example: git checkout -b feature/sophia/contact-form-integration
    ```

2.  **Commit Your Work:** Make small, logical commits. Write clear and concise commit messages that explain _what_ you changed and _why_.

3.  **Open a Pull Request:** When your feature is complete and tested, push your branch to the repository and open a PR on GitHub to merge into the `main` branch.

4.  **Request a Review:** In your PR description, briefly summarize the changes you made. Assign me to review your code before it gets merged.
