# 🛍️ Appscrip Frontend Assignment – Bonaboina Chithra Gowtham

**Live URL:** [https://appscrit-task-gowtham.netlify.app/](https://appscrit-task-gowtham.netlify.app/)  
**GitHub Repository:** [https://github.com/Tinku070/Appscrip-task-Bonaboina_Chithra_Gowtham](https://github.com/Tinku070/Appscrip-task-Bonaboina_Chithra_Gowtham)

---

## 📘 1. Objective

This project is a **Product Listing Page (PLP)** created as part of the Appscrip Frontend Development Task.  
It demonstrates the ability to convert **Figma UI** into a responsive, dynamic React.js application while maintaining clean code, SEO optimizations, and scalable architecture.

Key highlights:
- Built using **React.js (CRA)** with clean modular structure  
- Integrated with **FakeStoreAPI** for live product data  
- Responsive across desktop, tablet, and mobile  
- SEO-friendly (meta tags, schema markup, alt text, headings)  
- Deployed publicly on **Netlify**

---

## ⚙️ 2. Technology Stack

| Category | Technology |
|-----------|-------------|
| **Frontend Framework** | React.js (Create React App) |
| **Languages** | HTML5, CSS3, JavaScript (ES6) |
| **API** | [FakeStoreAPI](https://fakestoreapi.com/) |
| **Version Control** | Git + GitHub |
| **Deployment** | Netlify |
| **Build Tool** | react-scripts (Webpack) |
| **Editor** | Visual Studio Code |

---

## 🏗️ 3. Project Structure

### Appscrip-task-Bonaboina\_Chithra\_Gowtham/  
├── public/  
│ ├── index.html  
│ ├── favicon.ico  
│ └── assets/  
│ └── icons/  
│  
├── src/  
│ ├── assets/  
│ │ └── icons/  
│ ├── components/  
│ │ ├── Header.js / Header.css  
│ │ ├── Filters.js / Filters.css  
│ │ ├── ProductCard.js / ProductCard.css  
│ │ ├── ProductGrid.js / ProductGrid.css  
│ │ └── Footer.js / Footer.css  
│ ├── App.js  
│ ├── App.css  
│ └── index.js  
│  
├── package.json  
├── .nvmrc  
├── .gitignore  
└── README.md


---

## 🧩 4. Component Overview

### 🔹 Header
- Displays logo, search, wishlist, cart, and profile icons  
- Responsive layout (icons collapse on mobile)
- Sticky header with shadow  
- All icons are SVGs from `/src/assets/icons`

### 🔹 Filters
- Sidebar filter section (category, price, color)
- **“Hide Filter”** toggle for mobile  
- **“Recommended ▼”** dropdown aligned to right  
- Fully responsive and follows Figma structure  
- CSS grid/flex used for clean alignment

### 🔹 ProductGrid
- Fetches products from FakeStoreAPI  
- Displays them in a responsive grid (3/2/1 column)  
- Integrates with ProductCard component

### 🔹 ProductCard
- Displays product image, title, and price  
- Heart (wishlist) overlay icon  
- SEO-friendly `alt` tags for images  
- Hover animation for interactivity  

### 🔹 Footer
- About, Help, Shop, and Contact sections  
- Newsletter subscription form  
- Social and payment icons (PayPal, ApplePay, GPay, MasterCard)  
- Accordion-style layout on mobile  
- Fully responsive and pixel-perfect to Figma  

---

## 📱 5. Responsiveness

| Device | Layout |
|---------|--------|
| **Desktop** | 3-column grid, visible filters |
| **Tablet (768–1023px)** | 2-column grid, filters collapse |
| **Mobile (≤767px)** | 1-column grid, hide filters, accordion footer |

Media Queries Example:
```css
@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
```

🔍 6. SEO Optimizations
-----------------------

*   **Title:** Metta Muse | Discover Our Products
    
*   **Meta Description:**
    
```html
<meta name="description" content="Browse our exclusive collection of products on Metta Muse. Filter by category, price, and more.">
```


*   **Schema.org JSON-LD:**
    
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": []
}
</script>
```


*   **Headings:**
    
    *   H1 → Product Listing
        
    *   H2 → Filters, Recommendations
        
*   **Alt Text:** All product images use alt="Product: {title}"
    

🚀 7. Deployment (Netlify)
--------------------------

### Push final changes to GitHub:
```bash
git add .
git commit -m "Final build for Netlify"
git push origin main
```


1.  Go to [Netlify](https://app.netlify.com/)
    
2.  Choose **“Add new site → Import from GitHub”**
    
3.  Select the repo
    
4.  Set:
    
    *   **Build Command:** npm run build
        
    *   **Publish Directory:** build
        
    *   **Node Version:** 18 (via .nvmrc)
        
5.  Deploy 🎉Netlify will automatically rebuild when you push updates.
    

🧠 8. Learning Highlights
-------------------------

*   Implemented clean React component structure
    
*   Created responsive UI purely using CSS (no external UI libraries)
    
*   Applied semantic HTML for accessibility and SEO
    
*   Used Fetch API to retrieve and display products dynamically
    
*   Followed minimal dependency principles
    
*   Managed state cleanly using React hooks
    

🧾 9. Evaluation Checklist
--------------------------

|        Requirement        |             Status            |
|:-------------------------:|:-----------------------------:|
| HTML & CSS Implementation | ✅ Completed                   |
| Functional React Page     | ✅ Completed                   |
| Awareness of SSR          | ✅ Mentioned in documentation  |
| Responsive Design         | ✅ Mobile & Tablet ready       |
| Code Structure & Naming   | ✅ Modular & Consistent        |
| Minimum JS Packages       | ✅ Only React core & utilities |
| Screen Fit & Minimal DOM  | ✅ Optimized                   |
| SEO Settings              | ✅ Applied                     |
| Hosted Publicly           | ✅ Netlify Deployed            |
| GitHub Repository         | ✅ Public Repo Available       |
| Mock API Integration      | ✅ Using FakeStoreAPI          |

🧰 10. Future Improvements
--------------------------

*   Add working filters (price, category, rating)
    
*   Integrate sorting (low to high, high to low)
    
*   Add pagination or infinite scroll
    
*   Use Next.js for actual SSR build
    
*   Implement product detail and cart pages
    

👨‍💻 Author
------------

**Name:** Bonaboina Chithra Gowtham

**Email:** gowtham@example.com

**GitHub:** [Tinku070](https://github.com/Tinku070)

**Live App:** [https://appscrit-task-gowtham.netlify.app/](https://appscrit-task-gowtham.netlify.app/)

📄 License
----------

This project is developed as part of the **Appscrip Frontend Developer Assessment**.All assets and designs belong to Appscrip and are used solely for educational and demonstration purposes.

```yml
Would you like me to **convert this into a formatted PDF (developer report)** so you can attach it with your assignment submission or email to the reviewer? It will include logos, headings, and clean layout like a professional report.
```


