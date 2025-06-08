import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <div className="bg-white/30 backdrop-blur-md p-10 rounded-2xl shadow-xl max-w-md w-full text-center border border-white/20">
        <h1 className="text-7xl font-extrabold text-white drop-shadow mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-white mb-2">
          Page Not Found
        </h2>
        <p className="text-white/90 mb-6">
          Sorry, we couldn’t find the page you were looking for.
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-purple-700 font-semibold px-6 py-2 rounded-full hover:bg-purple-100 transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
