export const NavBar = () => {
  return (
    <nav className='bg-slate-950 border-b border-teal-400'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <a href="/" className='text-white text-2xl font-bold'>
                HK<span className='text-teal-400'>.</span>
              </a>
            </div>
          </div>

          <div className='hidden md:flex flex-grow justify-end'>
            <div className='ml-4 flex items-center space-x-4'>
              <a href="/" className='text-white hover:bg-teal-400 hover:text-black rounded-lg p-2'>
                Home
              </a>
              <a href="/projects" className='text-white hover:bg-teal-400 hover:text-black rounded-lg p-2'>
                Projects
              </a>
              <a href="/skills" className='text-white hover:bg-teal-400 hover:text-black rounded-lg p-2'>
                Skills
              </a>
              <a href="/workexperience" className='text-white hover:bg-teal-400 hover:text-black rounded-lg p-2'>
                Work Experience
              </a>
            </div>
          </div>

          <div className='md:hidden flex items-center'>
            <button className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-400'>
            </button>
          </div>
      </div>
    </nav>
  );
};