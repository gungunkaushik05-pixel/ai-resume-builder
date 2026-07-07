function ProjectsForm({ projects, setProjects }) {

  const addProject = () => {
    setProjects([
      ...projects,
      {
        title: "",
        techStack: "",
        description: "",
        github: "",
      },
    ]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  return (
    <div className="mt-8">

      <h2 className="text-2xl font-bold text-blue-700 mb-5">
        Projects
      </h2>

      {projects.map((project, index) => (
        <div key={index} className="space-y-3 mb-6">

          <input
            type="text"
            placeholder="Project Title"
            value={project.title}
            onChange={(e) =>
              handleChange(index, "title", e.target.value)
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Tech Stack"
            value={project.techStack}
            onChange={(e) =>
              handleChange(index, "techStack", e.target.value)
            }
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            placeholder="Description"
            value={project.description}
            onChange={(e) =>
              handleChange(index, "description", e.target.value)
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="GitHub Link"
            value={project.github}
            onChange={(e) =>
              handleChange(index, "github", e.target.value)
            }
            className="w-full border p-3 rounded-lg"
          />

        </div>
      ))}

      <button
        type="button"
        onClick={addProject}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg"
      >
        + Add Project
      </button>

    </div>
  );
}

export default ProjectsForm;