function EducationForm({ education, setEducation }) {

  const addEducation = () => {
    setEducation([
      ...education,
      {
        college: "",
        degree: "",
        cgpa: "",
        year: "",
      },
    ]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...education];
    updated[index][field] = value;
    setEducation(updated);
  };

  const removeEducation = (index) => {
    const updated = education.filter((_, i) => i !== index);
    setEducation(updated);
  };

  return (
    <div className="mt-8">

      <h2 className="text-2xl font-bold text-blue-700 mb-5">
        Education
      </h2>

      <div className="space-y-4">

        {education.map((edu, index) => (
          <div key={index} className="space-y-4 mb-8">

            <input
              type="text"
              placeholder="College Name"
              value={edu.college}
              onChange={(e) =>
                handleChange(index, "college", e.target.value)
              }
              className="w-full border p-3 rounded-lg outline-none"
            />

            <input
              type="text"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) =>
                handleChange(index, "degree", e.target.value)
              }
              className="w-full border p-3 rounded-lg outline-none"
            />

            <input
              type="text"
              placeholder="CGPA"
              value={edu.cgpa}
              onChange={(e) =>
                handleChange(index, "cgpa", e.target.value)
              }
              className="w-full border p-3 rounded-lg outline-none"
            />

            <input
              type="text"
              placeholder="Passing Year"
              value={edu.year}
              onChange={(e) =>
                handleChange(index, "year", e.target.value)
              }
              className="w-full border p-3 rounded-lg outline-none"
            />

            {education.length > 1 && (
              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            )}

          </div>
        ))}

        <button
          type="button"
          onClick={addEducation}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add Education
        </button>

      </div>

    </div>
  );
}

export default EducationForm;