import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function ResumePreview({
  name,
  email,
  phone,
  github,
  linkedin,
  education,
  experience,
  skills,
  projects,
  summary,
  certifications,
}) {

  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Resume",
  });

  const downloadPDF = async () => {
    try {

      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = 210;
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      pdf.save("Resume.pdf");

    } catch (err) {
      console.log(err);
    }
  };

  return (

    <div>

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "20px",
        }}
      >

        <button
          onClick={handlePrint}
          style={{
            background: "#16a34a",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          🖨 Print
        </button>

        <button
          onClick={downloadPDF}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          📄 Download PDF
        </button>

      </div>

      <div
        ref={resumeRef}
        style={{
          width: "794px",
          minHeight: "1123px",
          background: "#ffffff",
          margin: "auto",
          padding: "40px",
          fontFamily: "Arial",
          color: "#222",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      >

        <h1
          style={{
            textAlign: "center",
            fontSize: "34px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          {name || "Your Name"}
        </h1>

        <div
          style={{
            textAlign: "center",
            fontSize: "15px",
            marginBottom: "25px",
          }}
        >
          {email} | {phone}
          <br />

          {linkedin && (
            <>
              LinkedIn :
              <a href={linkedin}> {linkedin}</a>
              <br />
            </>
          )}

          {github && (
            <>
              GitHub :
              <a href={github}> {github}</a>
            </>
          )}
        </div>

        <hr />

        <h2 style={{ marginTop: "25px" }}>
          Professional Summary
        </h2>

        <p style={{ lineHeight: "28px" }}>
          {summary || "Write your professional summary here."}
        </p>

        <hr style={{ margin: "25px 0" }} />
                <hr className="my-8" />

        {/* Education */}

        <h2 className="text-lg font-bold uppercase border-b-2 border-blue-600 pb-1 mb-3">
          Education
        </h2>

        {education.map((edu, index) => (
          <div key={index} className="mb-5">
            <h3 className="text-base font-semibold text-gray-800">
              {edu.college || "College Name"}
            </h3>

            <p className="text-sm text-gray-700">
              {edu.degree || "Degree"}
            </p>

            <p className="text-sm text-gray-600">
              CGPA: {edu.cgpa || "--"}
            </p>

            <p className="text-sm text-gray-600">
              {edu.year || "Passing Year"}
            </p>
          </div>
        ))}

        <hr className="my-8" />

        {/* Experience */}

        <h2 className="text-lg font-bold uppercase border-b-2 border-blue-600 pb-1 mb-3">
          Experience
        </h2>

        {experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-base font-semibold text-gray-800">
              {exp.role || "Job Role"}
            </h3>

            <p className="text-sm text-blue-600 font-medium">
              {exp.company || "Company Name"}
            </p>

            <p className="text-sm text-gray-500 mb-2">
              {exp.duration || "Duration"}
            </p>

            <p className="text-sm text-gray-700 leading-6">
              {exp.description || "Experience description"}
            </p>
          </div>
        ))}

        <hr className="my-8" />

        {/* Projects */}

        <h2 className="text-lg font-bold uppercase border-b-2 border-blue-600 pb-1 mb-3">
          Projects
        </h2>

        {projects.map((project, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-base font-semibold text-gray-800">
              {project.title || "Project Title"}
            </h3>

            <p className="text-sm text-blue-600 font-medium mb-1">
              Tech Stack: {project.techStack || "React, Firebase"}
            </p>

            <p className="text-sm text-gray-700 leading-6 mb-2">
              {project.description || "Project description"}
            </p>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-700 underline break-all"
              >
                {project.github}
              </a>
            )}
          </div>
        ))}

        <hr className="my-8" />

        {/* Skills */}

        <h2 className="text-lg font-bold uppercase border-b-2 border-blue-600 pb-1 mb-3">
          Skills
        </h2>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm font-medium"
            >
              {skill || "Skill"}
            </span>
          ))}
        </div>

        <hr className="my-8" />

        {/* Certifications */}

        <h2 className="text-lg font-bold uppercase border-b-2 border-blue-600 pb-1 mb-3">
          Certifications
        </h2>

        <ul className="list-disc ml-6 space-y-2">
          {certifications.map((certificate, index) => (
            <li key={index} className="text-sm text-gray-700">
              {certificate}
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default ResumePreview;