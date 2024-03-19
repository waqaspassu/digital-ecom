import { Input } from "@/components/ui/input";

const ForgetPassword = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
        <p className="text-gray-600 mb-6">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <Input id="email" />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py"
          ></button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
