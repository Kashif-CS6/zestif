import Link from "next/link";
import Form from "next/form";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          🍽️ Restaurant Signup
        </h2>
        <Form action={"/"} className="space-y-4">
          <input type="text" placeholder="Restaurant Name" className="input" />
          <input type="email" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input"
          />
          <input type="tel" placeholder="Contact Number" className="input" />
          <input type="text" placeholder="City" className="input" />
          <input type="text" placeholder="Full Address" className="input" />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </Form>
        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-green-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
