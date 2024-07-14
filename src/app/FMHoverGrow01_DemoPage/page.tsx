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
      <div className='flex items-center flex-col gap-2'>
        <h2>FM Hover-Grow01 Documentation and Demonstration Page</h2>
        {/* Section 1: Call-to-action link */}
        <FMHoverGrow01>
          <Link href='/' className='text-sm text-gray-800 mr-4 pr-4'>
            Go to home page
          </Link>
        </FMHoverGrow01>

        {/* Section 2: Call-to-action button */}
        <FMHoverGrow01>
          <Button>Page Twelve</Button>
        </FMHoverGrow01>

        <FMHoverGrow01 transition={{ duration: 0.5 }}>
          with 0.5 second duration
        </FMHoverGrow01>

        <FMHoverGrow01
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.5 }}>
          with 0.5 second duration and scale of 150 %
        </FMHoverGrow01>

        <FMHoverGrow01 transition={{ duration: 0.5 }} whileHover={{ scale: 2 }}>
          with 0.5 second duration and scale of 200 %
        </FMHoverGrow01>
      </div>
    </main>
  );
}
