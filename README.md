# Appscrip-task-Bonaboina_Chithra_Gowtham

## Product Listing Page (PLP) - Next.js Implementation

This repository contains a fully functional, responsive, and SEO-optimized Product Listing Page (PLP) built as an assignment for Appscrip. The project is implemented using **Next.js** to demonstrate proficiency in **Server-Side Rendering (SSR)**, clean code architecture, and modern front-end best practices.

### 🔗 Live Demo & Repository

| Type | Link | Note |
| :--- | :--- | :--- |
| **Live Demo URL** | `[Your Netlify/Vercel URL Here]` | Hosted on Netlify/Vercel. |
| **GitHub Repo** | `[Repository Link Here]` | The source code you are viewing. |
| **Figma Design** | [Design Task - PLP](https://www.figma.com/file/N0Tv7yYLf3kfMLQjUncUlx/Design-Task---PLP?type=design&node-id=0-1&mode=design&t=mEpvVYQ7GInQPxXk-0) | Reference for the UI design. |

---

### ✨ Features Implemented

* **Server-Side Rendering (SSR):** Product data is fetched on the server using Next.js's `getServerSideProps` for improved initial load performance and SEO.
* **Responsive Design:** Seamless layout adaptation across Desktop, Tablet (768px), and Mobile (375px) breakpoints, as specified in the Figma design.
* **External API Integration:** Uses the **Fake Store API** (`https://fakestoreapi.com/`) for dynamic product data.
* **Comprehensive SEO:** Implements semantic HTML, meta tags, and Schema.org structured data.
* **Pure CSS Styling:** Styles are applied using native CSS (or CSS Modules), avoiding heavy external UI frameworks to ensure a minimal DOM size and fast load times.
* **Filtering and Search:** Functional filtering logic (e.g., by category or price) can be implemented client-side after initial data load.

---

### 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js (React) |
| **Language** | JavaScript (ES6+), HTML, CSS |
| **Styling** | Pure CSS / CSS Modules (No Bootstrap/Tailwind) |
| **Data Fetching**| Native `fetch` (or optional `axios`) |
| **Version Control**| Git / GitHub |
| **Hosting** | Netlify / Vercel |

---

### 🚀 Local Setup and Development

To run this project locally, you need Node.js (v14+) and npm installed.

#### Prerequisites

* Node.js (v14 or higher)
* npm or yarn

#### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/Appscrip-task-yourname.git](https://github.com/yourusername/Appscrip-task-yourname.git)
    cd Appscrip-task-yourname
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 📦 Project Structure