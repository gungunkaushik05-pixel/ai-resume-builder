function Features() {
  return (
    <section className="py-20 bg-white">

      <h2 className="text-4xl font-bold text-center text-blue-700">
        Why Choose Our Resume Builder?
      </h2>

      <p className="text-center text-gray-600 mt-4">
        Everything you need to build a professional resume.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 mt-12">

        <div className="p-6 shadow-lg rounded-xl">
          <h3 className="text-2xl font-semibold mb-3">
            ATS Friendly
          </h3>

          <p className="text-gray-600">
            Build resumes that easily pass ATS screening systems.
          </p>
        </div>

        <div className="p-6 shadow-lg rounded-xl">
          <h3 className="text-2xl font-semibold mb-3">
            AI Suggestions
          </h3>

          <p className="text-gray-600">
            Get smart AI recommendations to improve your resume.
          </p>
        </div>

        <div className="p-6 shadow-lg rounded-xl">
          <h3 className="text-2xl font-semibold mb-3">
            PDF Download
          </h3>

          <p className="text-gray-600">
            Download your resume instantly in PDF format.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;