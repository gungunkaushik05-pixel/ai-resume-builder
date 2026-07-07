function ResumePreview({
  name,
  email,
  phone,
  education,
  experience,
  skills,
  projects,
})     {

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">
        Resume Preview
      </h2>

      <hr className="mb-6" />

      <h1 className="text-2xl font-bold">
        {name}
       
      </h1>

     <p className="text-gray-600 mt-2">
  {email || "your@email.com"}
</p>

      <p className="text-gray-600">
  {phone || "+91 9876543210"}
</p>
<hr className="my-6" />

<h2 className="text-xl font-bold text-blue-700 mb-4">
  Education
</h2>

{education.map((edu, index) => (
  <div key={index} className="mb-4">
    <h3 className="font-bold">
      {edu.college || "College Name"}
    </h3>

    <p>{edu.degree || "Degree"}</p>

    <p>CGPA: {edu.cgpa || "--"}</p>

    <p>{edu.year || "Year"}</p>
  </div>
))}
<hr className="my-6" />

<h2 className="text-xl font-bold text-blue-700 mb-4">
  Experience
</h2>

{experience.map((exp, index) => (
  <div key={index} className="mb-4">
    <h3 className="font-bold">
      {exp.company || "Company Name"}
    </h3>

    <p>{exp.role || "Job Role"}</p>

    <p>{exp.duration || "Duration"}</p>

    <p>{exp.description || "Description"}</p>
  </div>
))}
<hr className="my-6" />

<h2 className="text-xl font-bold text-blue-700 mb-4">
  Skills
</h2>

<div className="flex flex-wrap gap-2">
  {skills.map((skill, index) => (
    <span
      key={index}
      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
    >
      {skill || "Skill"}
    </span>
  ))}
</div>
<hr className="my-6" />

<h2 className="text-xl font-bold text-blue-700 mb-4">
  Projects
</h2>

{projects.map((project, index) => (
  <div key={index} className="mb-5">

    <h3 className="font-bold">
      {project.title || "Project Title"}
    </h3>

    <p>
      <strong>Tech:</strong>{" "}
      {project.techStack || "Tech Stack"}
    </p>

    <p>
      {project.description || "Project Description"}
    </p>

    <p className="text-blue-600 break-all">
      {project.github || "GitHub Link"}
    </p>

  </div>
))}

    </div>
  );
}

export default ResumePreview;