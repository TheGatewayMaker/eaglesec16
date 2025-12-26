import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-h1 text-primary-foreground font-bold mb-4">404</h1>
        <h2 className="text-h2 text-primary-foreground font-bold mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-primary-foreground opacity-90 mb-8 max-w-md">
          The page you're looking for doesn't exist or is still under development.
        </p>
        <Link
          to="/"
          className="bg-accent text-accent-foreground px-8 py-4 font-bold text-lg rounded-lg hover:opacity-90 transition-opacity inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
