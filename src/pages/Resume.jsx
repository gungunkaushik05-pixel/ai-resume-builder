
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../utils/firebase";
import { useState, useEffect } from "react";

import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";

function Resume() {
  const navigate = useNavigate();

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate("/login");
    }
  });

  return () => unsubscribe();
}, [navigate]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [summary, setSummary] = useState("");
  const [certifications, setCertifications] = useState([""]);

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
  const saveResume = async () => {
  try {
    const user = auth.currentUser;

await setDoc(doc(db, "resumes", user.uid), {
  name,
  email,
  phone,
  github,
  linkedin,
  summary,
  education,
  experience,
  skills,
  certifications,
  projects,
});
    alert("✅ Resume Saved Successfully!");
  } catch (error) {
    console.error(error);
    alert("❌ Error Saving Resume");
  }
};
  
       const loadResume = async () => {
  const user = auth.currentUser;

  if (!user) return;

  const docRef = doc(db, "resumes", user.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();

    setName(data.name || "");
    setEmail(data.email || "");
    setPhone(data.phone || "");
    setGithub(data.github || "");
    setLinkedin(data.linkedin || "");
    setSummary(data.summary || "");

    setEducation(data.education || [{
      college: "",
      degree: "",
      cgpa: "",
      year: "",
    }]);

    setExperience(data.experience || [{
      company: "",
      role: "",
      duration: "",
      description: "",
    }]);

    setSkills(data.skills || [""]);
    setCertifications(data.certifications || [""]);

    setProjects(data.projects || [{
      title: "",
      techStack: "",
      description: "",
      github: "",
    }]);
  }
};
useEffect(() => {
  loadResume();
}, []);

      

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="grid lg:grid-cols-2 gap-8">

        <ResumeForm
          name={name}
          setName={setName}

          email={email}
          setEmail={setEmail}

          phone={phone}
          setPhone={setPhone}

          github={github}
          setGithub={setGithub}

          linkedin={linkedin}
          setLinkedin={setLinkedin}

          summary={summary}
          setSummary={setSummary}

          education={education}
          setEducation={setEducation}

          experience={experience}
          setExperience={setExperience}

          skills={skills}
          setSkills={setSkills}

          certifications={certifications}
          setCertifications={setCertifications}

          projects={projects}
          setProjects={setProjects}
        />

        <div>
          <ResumePreview
            name={name}
            email={email}
            phone={phone}
            github={github}
            linkedin={linkedin}
            summary={summary}
            education={education}
            experience={experience}
            skills={skills}
            certifications={certifications}
            projects={projects}
          />

          <button
            onClick={saveResume}
            className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
          >
            💾 Save Resume
          </button>
        </div>

      </div>
    </div>
  );
}

export default Resume;