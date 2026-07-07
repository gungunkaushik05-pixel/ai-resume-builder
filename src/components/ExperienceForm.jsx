function ExperienceForm({ experience, setExperience }) {
  const addExperience = () => {
    setExperience([
      ...experience,
      {
        company: "",
        role: "",
        duration: "",
        description: "",
      },
    ]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...experience];
    updated[index][field] = value;
    setExperience(updated);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-5">
        Experience
      </h2>

      <div className="space-y-4">
        {experience.map((exp, index) => (
          <div key={index} className="space-y-4 mb-8">

            <input
              type="text"
              placeholder="Company Name"
              value={exp.company}
              onChange={(e) =>
                handleChange(index, "company", e.target.value)
              }
              className="w-full border p-3 rounded-lg outline-none"
            />

            <input
              type="text"
              placeholder="Job Role"
              value={exp.role}
              onChange={(e) =>
                handleChange(index, "role", e.target.value)
              }
              className="w-full border p-3 rounded-lg outline-none"
            />

            <input
              type="text"
              placeholder="Duration"
              value={exp.duration}
              onChange={(e) =>
                handleChange(index, "duration", e.target.value)
              }
              className="w-full border p-3 rounded-lg outline-none"
            />

            <textarea
              placeholder="Description"
              value={exp.description}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
              className="w-full border p-3 rounded-lg outline-none"
            />

          </div>
        ))}

        <button
          onClick={addExperience}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add Experience
        </button>
      </div>
    </div>
  );
}

export default ExperienceForm;