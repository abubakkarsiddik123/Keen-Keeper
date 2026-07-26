import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-purple-100 px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-8xl font-extrabold tracking-widest bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-black/80">
          Lost in Space
        </h2>

        <p className="mt-2 text-gray-600">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="rounded-lg bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;