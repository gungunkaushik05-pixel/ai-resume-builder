import { useState } from "react";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";

function Resume() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState([
  
  {
    college: "",
    degree: "",
    cgpa: "",
    year: "",
  },
]);
const [experience, setExperience] = useState([
  {
    company: "",
    role: "",
    duration: "",
    description: "",
  },
]);
const [skills, setSkills] = useState([""]);
const [projects, setProjects] = useState([
  {
    title: "",
    techStack: "",
    description: "",
    github: "",
  },
]);
const [photo, setPhoto] = useState("");
const [summary, setSummary] = useState("");
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="grid grid-cols-2 gap-8">

        {/* Left Side */}<ResumeForm
        name={name}
        setName={setName}
        email={email}
  setEmail={setEmail}
  phone={phone}
  setPhone={setPhone}
  education={education}
setEducation={setEducation}
experience={experience}
setExperience={setExperience}
skills={skills}
setSkills={setSkills}
projects={projects}
setProjects={setProjects}
 photo={ photo}
setPhoto={setPhoto}
summary={summary}
setSummary={setSummary}
        
        />
       

        {/* Right Side */}
        <ResumePreview
  name={name}
  email={email}
  phone={phone}
  education={education}
  experience={experience}
  skills={skills}
  projects={projects}
  photo={photo}
  summary={summary}
/>

      </div>
    </div>
  );
}

export default Resume;