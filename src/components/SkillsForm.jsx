function SkillsForm({ skills, setSkills }) {

  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleChange = (index, value) => {
    const updated = [...skills];
    updated[index] = value;
    setSkills(updated);
  };

  const removeSkill = (index) => {
    const updated = skills.filter((_, i) => i !== index);
    setSkills(updated);
  };

  return (
    <div className="mt-8">

      <h2 className="text-2xl font-bold text-blue-700 mb-5">
        Skills
      </h2>

      <div className="space-y-4">

        {skills.map((skill, index) => (
          <div key={index} className="mb-4">

            <input
              type="text"
              placeholder="Enter Skill"
              value={skill}
              onChange={(e) =>
                handleChange(index, e.target.value)
              }
              className="w-full border p-3 rounded-lg"
            />

            {skills.length > 1 && (
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            )}

          </div>
        ))}

        <button
          type="button"
          onClick={addSkill}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add Skill
        </button>

      </div>

    </div>
  );
}

export default SkillsForm;