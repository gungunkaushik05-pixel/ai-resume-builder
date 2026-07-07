function ResumePreview({ name, email, phone, education })    {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">
        Resume Preview
      </h2>

      <hr className="mb-6" />

      <h1 className="text-2xl font-bold">
        {name}
       
      </h1>

     <p className="text-gray-600 mt-2">
  {email || "your@email.com"}
</p>

      <p className="text-gray-600">
  {phone || "+91 9876543210"}
</p>
<hr className="my-6" />

<h2 className="text-xl font-bold text-blue-700 mb-4">
  Education
</h2>

{education.map((edu, index) => (
  <div key={index} className="mb-4">
    <h3 className="font-bold">
      {edu.college || "College Name"}
    </h3>

    <p>{edu.degree || "Degree"}</p>

    <p>CGPA: {edu.cgpa || "--"}</p>

    <p>{edu.year || "Year"}</p>
  </div>
))}
    </div>
  );
}

export default ResumePreview;