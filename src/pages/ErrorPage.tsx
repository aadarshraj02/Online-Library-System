import { Link } from "react-router-dom";

const ErrorPage = (): JSX.Element => {
  return (
    <div className="min-h-[82vh] flex flex-col items-center justify-center bg-zinc-100">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 ease-linear"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
