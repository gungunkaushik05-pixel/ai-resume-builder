import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center bg-slate-100 text-center px-5">

      <h1 className="text-6xl font-bold text-blue-700">
        Build Your Dream Resume
      </h1>

      <p className="text-gray-600 text-xl mt-6 max-w-2xl">
        Create ATS-Friendly resumes in minutes with our AI powered Resume Builder.
      </p>

      <div className="mt-10 flex gap-5">
        <Link
  to="/login"
  className="bg-blue-600 text-white px-7 py-3 rounded-lg hover:bg-blue-700 transition"
>
  Create Resume
</Link>

        <button className="border-2 border-blue-600 text-blue-600 px-7 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
          View Templates
        </button>
      </div>

    </section>
  );
}

export default Hero;