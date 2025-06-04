# 📄 CV Builder Pro: Client-Side & Interactive

**Build beautiful, professional resumes directly in your browser with this feature-rich, client-side CV builder!**

## 🌟 Overview

CV Builder Pro is a modern, single-page web application designed to provide a seamless and interactive experience for creating and customizing professional resumes. Built with React and Vite, it operates entirely within your browser, requiring no backend or page reloads. Users can dynamically add, remove, reorder, and edit content blocks, seeing their changes reflected in real-time on a live preview. The application leverages local storage to save your work and allows you to export your final CV as a PDF.

## ✨ Features

*   **Fully Client-Side:** No backend dependencies. Works offline once loaded.
*   **Block-Based Architecture:**
    *   Dynamically add, remove, and reorder content sections (blocks).
    *   Modular design for flexible CV structures.
*   **Predefined Content Blocks:**
    *   **Personal Information / Bio:** Name, photo (via URL), contact details, summary.
    *   **Academic Qualifications:** Degree, institution, year, grades.
    *   **Professional Qualifications:** Certifications, specializations, training.
    *   **Work Experience:** Job title, employer, duration, responsibilities.
    *   **Languages:** Spoken/written fluency levels.
    *   **Hobbies & Interests:** Personalize your CV.
*   **In-Place Editing (WYSIWYG):**
    *   Click directly on text in the live preview to edit content inline.
    *   Changes are immediately reflected.
    *   Alternative form-based editing also available for each block.
*   **Real-Time Preview:** See your CV take shape as you type and make changes.
*   **Template Selection:**
    *   Choose between "Modern" and "Classic" templates with distinct styling.
    *   The preview updates instantly to reflect the chosen template.
*   **Responsive Design:**
    *   Intuitive and user-friendly interface that adapts to desktops, tablets, and mobile devices.
*   **Local Data Handling:**
    *   All CV data is automatically saved to your browser's local storage.
    *   Resume your work anytime without losing changes.
*   **PDF Export:**
    *   Download your completed CV as a high-quality PDF document.
    *   Optimized to capture the selected template and layout accurately.
*   **Customizable Sections:** Add multiple instances of blocks like Education, Experience, etc.

## 🛠 Tech Stack

*   **Frontend:**
    *   [React](https://reactjs.org/) (v18.2.0) - For building the dynamic user interface.
    *   [Vite](https://vitejs.dev/) - For fast development and optimized builds.
    *   HTML5 & CSS3 - For structure and extensive custom styling.
*   **PDF Generation:**
    *   [html2canvas](https://html2canvas.hertzen.com/) - For capturing the CV preview as an image.
    *   [jsPDF](https://parall.ax/products/jspdf) - For generating PDF documents from the captured image.
*   **State Management:** React Hooks (`useState`, `useEffect`).
*   **Browser Features:** Local Storage API.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v16.x or higher recommended)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation & Running Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/cv-builder-pro.git # Replace with actual repo URL
    cd cv-builder-pro
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # OR
    # yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # OR
    # yarn dev
    ```
    This will start the Vite development server, typically at `http://localhost:5173`. Open this URL in your browser to use the application.

4.  **Build for production:**
    ```bash
    npm run build
    # OR
    # yarn build
    ```
    This command bundles the application into the `dist` directory for deployment.

## 🧑‍💻 Usage Guide

1.  **Load the Application:** Open the application in your web browser. If you have previous data saved in local storage, it will automatically load.
2.  **Personal Information:** Start by filling out your name, contact details, and summary. Click on any field in the preview to edit it directly.
3.  **Add Sections:**
    *   Use the "Select Section Type" dropdown in the left-hand panel to choose a CV section (e.g., Education, Work Experience).
    *   Click the "Add Section" button. The new section will appear in the form panel and on the live preview.
4.  **Edit Content:**
    *   **In-Place Editing:** Click on any text within the CV preview on the right. It will become an editable field. Changes are saved when you click away (blur) or press Enter (for single-line fields).
    *   **Form Editing:** Use the dedicated forms in the left-hand panel to edit the content for each block.
5.  **Reorder Sections:** Use the "↑" (Up) and "↓" (Down) arrows on each block in the preview to change its position in the CV. The "Personal Information" block is fixed at the top.
6.  **Remove Sections:** Click the "Remove" button (often styled with a trash icon or red text) associated with each block in the form panel to delete it. The "Personal Information" block cannot be removed.
7.  **Select a Template:** Choose between "Modern" or "Classic" templates using the buttons above the CV preview. The preview will update to reflect the new style.
8.  **Download PDF:** Once you're satisfied with your CV, click the "Download PDF" button. Your CV will be saved as `cv.pdf`.

## 🖼 Screenshots

*(Placeholder: Add screenshots of the application here to showcase the UI, different templates, and the editing process. For example: Main UI, Modern Template Preview, Classic Template Preview, In-place Editing in Action)*

## 💾 Local Storage

The CV Builder automatically saves all your data (the content and order of your CV blocks) to your browser's local storage. This means:
*   Your work is preserved even if you close the browser tab or refresh the page.
*   When you reopen the application, your previous state is loaded.
*   No data is sent to any server; it all stays within your browser.

To clear the data, you would typically need to clear your browser's local storage for this specific site manually via developer tools.

## 📄 PDF Export

The "Download PDF" feature uses `html2canvas` to take a "screenshot" of the CV preview area and then `jspdf` to convert this image into a PDF document.
*   The PDF is generated in A4 portrait format.
*   The export process is optimized to capture the selected template's styling.
*   UI elements like editing controls are automatically excluded from the PDF.

## 🙌 Contributing

Contributions are welcome! If you have ideas for new features, bug fixes, or improvements, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourAmazingFeature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
5.  Push to the branch (`git push origin feature/YourAmazingFeature`).
6.  Open a Pull Request.

Please ensure your code adheres to the existing style and that any new features are well-documented.

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file in the repository for full details. (Note: Ensure a `LICENSE` file with the MIT License text is present in the repository root).

---

Made with ❤️ for crafting perfect CVs.
