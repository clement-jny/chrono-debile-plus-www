// import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
// import { Separator } from '@/components/ui/separator';
import { Search } from 'lucide-react';

const Header = () => {
  //   const [search, setSearch] = useState('');

  //   useEffect(() => {
  //     const handleKeyDown = (event: KeyboardEvent) => {
  //       if (event.key === 'Enter') {
  //         // Handle search submission
  //         console.log('Search submitted:', search);
  //       }
  //     };

  //     window.addEventListener('keydown', handleKeyDown);

  //     return () => {
  //       window.removeEventListener('keydown', handleKeyDown);
  //     };
  //   }, [search]);

  return (
    <header className='flex items-center justify-between bg-gray-800 text-white p-4'>
      <h1 className='text-2xl font-bold'>
        <a href='/' className='text-white relative'>
          ChronoDebile
          <span className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text'>
            +
          </span>
          <span className='absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'></span>
        </a>
      </h1>

      <nav className='flex'>
        <Button variant='link' className='text-white' asChild>
          <a href='/stock'>Stock</a>
        </Button>

        {/* <Separator orientation='vertical' className='text-white' /> */}

        <Button variant='link' className='text-white' asChild>
          <a href='/about'>About</a>
        </Button>
      </nav>

      <div className='flex items-center'>
        <Search className='text-white' />
        <input
          type='text'
          placeholder='Search...'
          className='p-2 rounded  border-gray-300'
          //   value={search}
          //   onChange={(e) => setSearch(e.target.value)}
          //   onKeyDown={(e) => {
          //     if (e.key === 'Enter') {
          //       console.log('Search submitted:', search);
          //     }
          //   }}
        />
        {/* <Button
          variant='link'
          className='ml-2 text-white'
          onClick={() => console.log('Search submitted:', search)}>
          Search
        </Button> */}
      </div>
      {/* <div className='flex items-center'>
        <button className='ml-4 p-2 bg-blue-500 text-white rounded'>
          Search
        </button>
      </div> */}
    </header>
  );
};

export { Header };
