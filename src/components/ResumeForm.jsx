import ProjectsForm from "./ProjectsForm";
import SkillsForm from "./SkillsForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import { useState } from "react";
import { generateSummary } from "../utils/gemini";
import CertificatesForm from "./CertificatesForm";

function ResumeForm({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  education,
  setEducation,
  experience,
setExperience,
skills,
setSkills,
projects,
setProjects,
summary,
setSummary,
github,
setGithub,

linkedin,
setLinkedin,
certifications,
setCertifications,


})  {
  
  

    

  
const handleGenerateSummary = async () => {
  try {
    const aiSummary = await generateSummary({
      name,
      skills,
      projects,
      experience,
    });

    setSummary(aiSummary);
  } catch (error) {
    console.error(error);
    alert("Failed to generate AI summary.");
  }
};
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">

      <h2 className="text-3xl font-bold text-blue-700 mb-6">
        Resume Details
      </h2>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">
          Full Name
          <p className="mt-3 text-blue-700 font-semibold">
            {name}
            </p>
        </label>

        
        <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-3 rounded-lg outline-none"
        
        />  
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">
          Email
        </label>

        <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full border p-3 rounded-lg outline-none"
/>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">
          Phone Number
        </label>

        <input
  type="text"
  placeholder="Enter your phone number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="w-full border p-3 rounded-lg outline-none"
/>
<div className="mb-4">
  <label className="block mb-2 font-semibold">
    LinkedIn
  </label>

  <input
    type="text"
    placeholder="https://linkedin.com/in/yourname"
    value={linkedin}
    onChange={(e) => setLinkedin(e.target.value)}
    className="w-full border p-3 rounded-lg outline-none"
  />
</div>

<div className="mb-4">
  <label className="block mb-2 font-semibold">
    GitHub
  </label>

  <input
    type="text"
    placeholder="https://github.com/yourname"
    value={github}
    onChange={(e) => setGithub(e.target.value)}
    className="w-full border p-3 rounded-lg outline-none"
  />
</div>


  
<div className="mb-6">
  <label className="block mb-2 font-semibold">
    Professional Summary
  </label>

  <textarea
    placeholder="Write a short professional summary..."
    value={summary}
    onChange={(e) => setSummary(e.target.value)}
    rows={5}
    className="w-full border p-3 rounded-lg outline-none resize-none"
  />
</div>
<button
  type="button"
  onClick={handleGenerateSummary}
  className="mt-3 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700"
>
  ✨ Generate AI Summary
</button>
      </div>
      <EducationForm
  education={education}
  setEducation={setEducation}
/>
<ExperienceForm
  experience={experience}
  setExperience={setExperience}
/>
<SkillsForm
  skills={skills}
  setSkills={setSkills}
/>
<ProjectsForm
  projects={projects}
  setProjects={setProjects}
/>
<CertificatesForm
  certifications={certifications}
  setCertifications={setCertifications}
/>
    </div>
  );
}

export default ResumeForm;