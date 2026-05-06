import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100 text-black/70 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-8xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          404
        </h1>

        <p className="mt-4 text-2xl font-semibold">Lost in space</p>

        <p className="mt-2 text-gray-400">
          The page youre looking for doesnt exist or has been moved.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
