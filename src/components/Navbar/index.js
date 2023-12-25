import Link from 'next/link';

function Navbar () {
  return (
    <>  
      <nav className="flex flex-wrap items-center p-3 bg-gray-900">
        <Link href="/">
          <span className="text-xl font-bold tracking-wide text-white uppercase">
            Markdown Blog
          </span>
        </Link>
      </nav>
    </> 
  );  
};

export default Navbar;