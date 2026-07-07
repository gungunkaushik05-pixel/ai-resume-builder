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
        
        />
       

        {/* Right Side */}
        <ResumePreview
  name={name}
  email={email}
  phone={phone}
  education={education}
/>

      </div>
    </div>
  );
}

export default Resume;