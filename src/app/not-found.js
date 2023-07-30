import Head from "next/head";
import Link from "next/link";

const Error = () => {
  return (
    <main>
      <Head>
        <title>Something went wrong!</title>
      </Head>
      <div className="flex h-[91vh] items-center justify-center p-3 w-full">
        <div className="text-center">
          <div className="inline-flex rounded-full bg-indigo-100 p-4">
            <div className="rounded-full stroke-indigo-600 bg-indigo-200 p-4">
              <svg
                className="w-16 h-16"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0002 9.33337V14M14.0002 18.6667H14.0118M25.6668 14C25.6668 20.4434 20.4435 25.6667 14.0002 25.6667C7.55684 25.6667 2.3335 20.4434 2.3335 14C2.3335 7.55672 7.55684 2.33337 14.0002 2.33337C20.4435 2.33337 25.6668 7.55672 25.6668 14Z"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <h1 className="mt-5 text-[36px] font-bold text-slate-800 dark:text-light lg:text-[50px]">
            404 - Page not found
          </h1>
          <p className="text-slate-600 dark:text-light mt-5 lg:text-lg">
            The page you are looking for does not exist or <br />
            has been removed.
          </p>
          
          <Link
                href="/"
                className="inline-flex items-center px-6 py-4 mt-4 font-semibold text-black dark:text-white transition-all duration-200 bg-yellow-300 rounded-full lg:mt-8 hover:bg-yellow-400 focus:bg-yellow-400 dark:bg-yellow-600"
                role="button"
              >
                Back to Home
              </Link>
        </div>
      </div>
    </main>
  );
};

export default Error;
