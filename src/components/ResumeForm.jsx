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
})  {
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
      </div>
      <EducationForm
  education={education}
  setEducation={setEducation}
/>

    </div>
  );
}

export default ResumeForm;