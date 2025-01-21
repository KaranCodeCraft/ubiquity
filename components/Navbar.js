export default function Navbar() {
  return (
    <>
      <header className="bg-white text-themeGreen body-font shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-themeGreen mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-themeGreen rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl font-semibold">Ubiquity</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-700">Home</a>
            <a className="mr-5 hover:text-gray-700">About</a>
            <a className="mr-5 hover:text-gray-700">Services</a>
            <a className="mr-5 hover:text-gray-700">Contact</a>
          </nav>
        </div>
      </header>
    </>
  );
}
