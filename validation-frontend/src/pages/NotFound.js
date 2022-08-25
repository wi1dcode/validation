import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <main class="h-screen w-full flex flex-col justify-center items-center bg-stone-900">
      <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div class="bg-sky-900 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button class="mt-5">
        <a class="relative inline-block text-sm font-medium text-sky-900 group active:text-sky-500 focus:outline-none focus:ring">
          <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-sky-900 group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <Link to="/">
            <span class="relative block px-8 py-3 bg-stone-900 border border-current">
              Go Home
            </span>
          </Link>
        </a>
      </button>
    </main>
  )
}

export default NotFound
