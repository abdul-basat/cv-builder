import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./App.css";

function App() {
  const [cvData, setCvData] = useState({
    name: "",
    email: "",
    education: "",
    experience: "",
    skills: "",
  });
  const [selectedTemplate, setSelectedTemplate] = useState("modern");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData((prev) => ({ ...prev, [name]: value }));
  };

  const templates = ["modern", "classic"];

  const downloadPDF = () => {
    const preview = document.getElementById("cv-preview");
    html2canvas(preview, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const width = imgWidth * ratio;
      const height = imgHeight * ratio;

      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("cv.pdf");
    });
  };

  return (
    <div className="App">
      <h1>CV Builder</h1>
      <div className="cv-container">
        <section className="form-section">
          <h2>Enter Your Details</h2>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={cvData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={cvData.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Education:
              <textarea
                name="education"
                value={cvData.education}
                onChange={handleChange}
              />
            </label>
            <label>
              Experience:
              <textarea
                name="experience"
                value={cvData.experience}
                onChange={handleChange}
              />
            </label>
            <label>
              Skills:
              <textarea
                name="skills"
                value={cvData.skills}
                onChange={handleChange}
              />
            </label>
          </form>
        </section>
        <section className="preview-section">
          <h2>Preview</h2>
          <div className="template-selector">
            <label>Select Template: </label>
            {templates.map((template) => (
              <button
                key={template}
                onClick={() => setSelectedTemplate(template)}
                className={selectedTemplate === template ? "active" : ""}
              >
                {template.charAt(0).toUpperCase() + template.slice(1)}
              </button>
            ))}
          </div>
          <div id="cv-preview" className={`cv-preview ${selectedTemplate}`}>
            <h3>{cvData.name || "Your Name"}</h3>
            <p>{cvData.email || "Your Email"}</p>
            <h4>Education</h4>
            <p>{cvData.education || "Your Education"}</p>
            <h4>Experience</h4>
            <p>{cvData.experience || "Your Experience"}</p>
            <h4>Skills</h4>
            <p>{cvData.skills || "Your Skills"}</p>
          </div>
          <button className="download-btn" onClick={downloadPDF}>
            Download PDF
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;