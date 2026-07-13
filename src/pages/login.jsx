import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/resume");
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white shadow-lg rounded-xl p-8 text-center w-[400px]">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          Login
        </h1>

        <p className="text-gray-600 mb-6">
          Continue with Google to create your resume.
        </p>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default Login;