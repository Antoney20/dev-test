/* eslint-disable react/prop-types */


const LoginForm = ({ formData, status, isLoading, onSubmit, onInputChange }) => {
  const { username, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-center text-2xl mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block">
            Username:
            <input
              type="text"
              id="username"
              value={username}
              name="username"
              onChange={onInputChange}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
        </div>
        <div>
          <label htmlFor="password" className="block">
            Password:
            <input
              type="password"
              id="password"
              value={password}
              name="password"
              onChange={onInputChange}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            disabled={isLoading || status === "submitting"}
            className="w-full bg-indigo-600 text-white py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            {isLoading || status === "submitting" ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      {status === "completed" && <p className="text-center text-green-500">Login successful!</p>}
    </div>
  );
};

export default LoginForm;
