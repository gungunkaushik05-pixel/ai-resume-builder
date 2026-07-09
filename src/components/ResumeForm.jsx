import ProjectsForm from "./ProjectsForm";
import SkillsForm from "./SkillsForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import { useState } from "react";
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
photo,
setPhoto,
})  {const handlePhotoChange = (e) => {
  const removePhoto = () => {
  setPhoto("");

  const fileInput = document.getElementById("photoInput");
  if (fileInput) {
    fileInput.value = "";
  }
};
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result);
    };

    reader.readAsDataURL(file);
  }
};
const removePhoto = () => {
  setPhoto("");

  const fileInput = document.getElementById("photoInput");
  if (fileInput) {
    fileInput.value = "";
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

<div className="mb-6">
  <label className="block mb-2 font-semibold">
    Profile Photo
  </label>

  <input
    id="photoInput"
    type="file"
    accept="image/*"
    onChange={handlePhotoChange}
    className="w-full border p-3 rounded-lg"
  />

  {photo && (
    <button
      type="button"
      onClick={removePhoto}
      className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
    >
      Remove Photo
    </button>
  )}
</div>
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
    </div>
  );
}

export default ResumeForm;