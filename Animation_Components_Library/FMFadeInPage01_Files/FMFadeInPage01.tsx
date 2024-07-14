// Component Name: FMFadeInPage01
'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import {
  FMFadeInPage01Props,
  FMFadeInPage01PropsDefault,
} from './FMFadeInPage01Props';

export default function FMFadeInPage01({
  children,
  initial,
  animate,
  exit,
  transition,
}: Partial<FMFadeInPage01Props> & {
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={initial ?? FMFadeInPage01PropsDefault.initial}
      animate={animate ?? FMFadeInPage01PropsDefault.animate}
      exit={exit ?? FMFadeInPage01PropsDefault.exit}
      transition={transition ?? FMFadeInPage01PropsDefault.transition}>
      {children}
    </motion.div>
  );
}
/**
 * =====================================================================
 *   ORIGINAL DOCUMENTATION  (Append to end of component code block)
 * =====================================================================
 * File Name      : FMFadeInPage01.tsx
 * Component Name : FMFadeInPage01
 * Component Type : FramerMotion Fade In component
 * Date Created   : 2024-06-22
 * Dev Name       : Praditya manjhi
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer  : To meet web app requirements
 *
 * ------------------------------
 * Question: What does this component do?:
 * Answer  :
 * When any page in this website loads or is refreshed,
 * the navbar and the first section in that page first
 * to render in an invisible state, and then over a period
 * of 1 second, the opacity increases from 0 % opacity to
 * 100 % opacity.
 *
 * To use this component to perform fade in effects on
 * all web pages in a website, use this component to wrap
 * all child components in the main layout.tsx file.
 *
 *  return (
 *    <html lang='en'>
 *      <body className={inter.className}>
 *        <FMFadeInPage01>
 *          <Navbar />
 *          {children}
 *          <div className=' xl:mt-24'>
 *            <Footer />
 *          </div>
 *        </FMFadeInPage01>
 *      </body>
 *    </html>
 *  )
 *
 * To use this component to perform fade in effects on
 * a single web page, use this component to wrap all
 * child components in the page.tsx file for that  web
 * page.
 *
 *  return (
 *    <main>
 *      <FMFadeInPage01>
 *         </HeroSection>
 *         </FeaturesSection>
 *         </CustomerReviewSection>
 *         </CallToActioniSection>
 *      </FMFadeInPage01>
 *    </main>
 *  );
 *
 * You can also customize the fade in effect animation by
 * providing the option props that is provided in the component.
 * The props is Optional so you can either customize the effects by
 * passing props or you can use as it is.
 *
 *  return (
 *    <main>
 *      <FMFadeInPage01
 *       initial={{ opacity: 0 }}
 *       animate={{ opacity: 1 }}
 *       exit={{ opacity: 0 }}
 *       transition={{ duration: 5 }}>
 *         </HeroSection>
 *         </FeaturesSection>
 *         </CustomerReviewSection>
 *         </CallToActioniSection>
 *      </FMFadeInPage01>
 *    </main>
 *  );
 *
 * ------------------------------
 * Section Comments:   (Enter "none" if you have no comments)
 * none
 * ------------------------------
 * Input Comments:     (Enter "none" if you have no comments)
 * none
 * ------------------------------
 * Output Comments:    (Enter "none" if you have no comments)
 * Returns this component wrapping all children (web page content
 * for all web pages)
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer  : No
 *
 */
