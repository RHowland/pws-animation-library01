import FMHoverGrow01 from '@/components/animation/FMHoverGrow01';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Component Name: FMHoverGrow01_DevDemoPage
export default function FMHoverGrow01_DocDemoPage() {
  // this component missing the predefined component that is mentioned in the docs
  // so, I have created this component to demonstrate the usage of the predefined component
  // and to showcase its functionality.

  // Usage of FMHoverGrow01 component with default props
  // <FMHoverGrow01 />
  return (
    <main>
      <div className='p-4'>
        {/* Page Title */}
        <div className='flex items-center flex-col gap-2 mb-8'>
          <h2 className='text-3xl font-bold'>
            FMHoverGrow01 Documentation and Demonstration Page
          </h2>
        </div>

        {/* Demonstration Area */}
        <div className='h-[10cm] flex items-center justify-around bg-gray-100 p-4 mb-8'>
          <FMHoverGrow01>
            <button className='bg-blue-500 text-white py-2 px-4 rounded'>
              Hover Me
            </button>
          </FMHoverGrow01>
          <FMHoverGrow01>
            <div className='bg-white shadow-lg p-6 rounded-lg'>
              <h3 className='text-lg font-bold mb-2'>Card Title</h3>
              <p className='text-gray-700'>Card content goes here.</p>
            </div>
          </FMHoverGrow01>
        </div>

        {/* Additional Examples */}
        <div className='flex flex-col items-center gap-4 mb-8'>
          <FMHoverGrow01>
            <Link href='/' className='text-sm text-gray-800 hover:underline'>
              Go to home page
            </Link>
          </FMHoverGrow01>

          <FMHoverGrow01>
            <Button>Page Twelve</Button>
          </FMHoverGrow01>

          <FMHoverGrow01 transition={{ duration: 0.5 }}>
            <div className='p-4 bg-gray-200 rounded'>
              with 0.5 second duration
            </div>
          </FMHoverGrow01>

          <FMHoverGrow01
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.5 }}>
            <div className='p-4 bg-gray-200 rounded'>
              with 0.5 second duration and scale of 150%
            </div>
          </FMHoverGrow01>

          <FMHoverGrow01
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 2 }}>
            <div className='p-4 bg-gray-200 rounded'>
              with 0.5 second duration and scale of 200%
            </div>
          </FMHoverGrow01>

          <FMHoverGrow01
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 0.8 }}>
            <div className='p-4 bg-gray-200 rounded'>
              with 0.5 second duration and scale of 80%
            </div>
          </FMHoverGrow01>
        </div>
      </div>
    </main>
  );
}
