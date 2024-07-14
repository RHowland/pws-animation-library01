import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <div className='p-4 max-w-[700px]'>
        <div className='whitespace-pre-wrap bg-gray-100 p-4 border border-gray-300 rounded-md mb-4'>
          <section>
            <h1 className='text-2xl font-bold mt-2'>PWS Animation Library</h1>
            <h2 className='text-xl font-semibold mt-2 mb-4'>Introduction</h2>
            <p className='mt-2'>
              The purpose of this WEB APP is to serve as a test bed to develop
              an in-house library of commonly used animation components.
            </p>
            <p className='mt-2'>
              The purpose of this WEB PAGE is to serve as a menu with links to
              different web pages for the animation components in this library.
            </p>
            <p className='mt-4'>Key to the Animation Component Names:</p>
            <p className='mt-2 ml-4'>Example name: FMFadeInPage01</p>
            <p className='ml-4'>
              &apos;FM&apos; = Framer-Motion library is used (AN = Anime.js, LO
              = Lottie)
            </p>
            <p className='ml-4'>
              &apos;FadeIn&apos; = this is a fade-in effect component
            </p>
            <p className='ml-4'>
              &apos;Page01&apos; = refers to our first fade in component.
            </p>
          </section>

          <div className='w-full h-[2px] rounded-sm bg-black my-8'></div>
          <section>
            <h2 className='text-xl font-semibold mt-4'>
              Component Name: FMFadeInPage01
            </h2>
            <p className='mt-2'>
              This component wraps the navbar and hero section of a web page and
              when the web page loads, the navbar and hero sections will fade
              into view over a duration of 0.5 to 1.0 seconds.
            </p>
            <p className='mt-2'>
              For documentation on this component, please refer to this file:
              FMFadeInPage01_Docs.txt which can be found in this folder:
            </p>
            <code className='block w-full p-2 bg-gray-800 text-white rounded-lg mt-2'>
              ./Animation_Components_Library/FMFadeInPage01_Files
            </code>

            <Link href='/FMFadeInPage01_DemoPage' passHref>
              <button className='mt-4 inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition duration-150 ease-in-out'>
                View Component
              </button>
            </Link>
          </section>
          <div className='w-full h-[2px] rounded-sm bg-black my-8'></div>
          <section>
            <h2 className='text-xl font-semibold mt-4'>
              Component Name: FMFadeInSection01
            </h2>
            <p className='mt-2'>
              This component wraps a section in a web page and when the user
              scrolls down the page, and that section is partially visible, the
              section content will fade into view over a duration of 0.5 to 1.0
              seconds.
            </p>
            <p className='mt-2'>
              For documentation on this component, please refer to this file:
              FMFadeInSection01_Docs.txt which can be found in this folder:
            </p>
            <code className='block w-full p-2 bg-gray-800 text-white rounded-lg mt-2'>
              ./Animation_Components_Library/FMFadeInSection01_Files
            </code>

            <Link href='/FMFadeInSection01_DemoPage' passHref>
              <button className='mt-4 inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition duration-150 ease-in-out'>
                View Component
              </button>
            </Link>
          </section>
          <div className='w-full h-[2px] rounded-sm bg-black my-8'></div>
          <section>
            <h2 className='text-xl font-semibold mt-4'>
              Component Name: FMHoverGrow01
            </h2>
            <p className='mt-2'>
              This component wraps a button or small image and when the user
              hovers the mouse pointer over that item, it will grow about 5%
              larger in size. When the mouse pointer hovers away, that item will
              shrink back to its original size.
            </p>
            <p className='mt-2'>
              For documentation on this component, please refer to this file:
              FMHoverGrow01_Docs.txt which can be found in this folder:
            </p>
            <code className='block w-full p-2 bg-gray-800 text-white rounded-lg mt-2'>
              ./Animation_Components_Library/FMHoverGrow01_Files
            </code>

            <Link href='/FMHoverGrow01_DemoPage' passHref>
              <button className='mt-4 inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition duration-150 ease-in-out'>
                View Component
              </button>
            </Link>
          </section>
          <div className='w-full h-[2px] rounded-sm bg-black my-8'></div>
        </div>
      </div>
    </main>
  );
}
