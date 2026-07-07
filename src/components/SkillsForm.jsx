function SkillsForm({ skills, setSkills }) {

  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleChange = (index, value) => {
    const updated = [...skills];
    updated[index] = value;
    setSkills(updated);
  };

  return (
    <div className="mt-8">

      <h2 className="text-2xl font-bold text-blue-700 mb-5">
        Skills
      </h2>

      {skills.map((skill, index) => (
        <input
          key={index}
          type="text"
          placeholder="Enter Skill"
          value={skill}
          onChange={(e) =>
            handleChange(index, e.target.value)
          }
          className="w-full border p-3 rounded-lg mb-3"
        />
      ))}

      <button
        type="button"
        onClick={addSkill}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg"
      >
        + Add Skill
      </button>

    </div>
  );
}

export default SkillsForm;