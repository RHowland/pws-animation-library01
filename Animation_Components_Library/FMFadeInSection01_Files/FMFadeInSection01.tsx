// Component Name: FMFadeInSection01
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // For detecting when the section comes into view
import { ReactNode } from 'react';
import {
  FMFadeInSection01Props,
  FMFadeInSection01PropsDefault,
} from './FMFadeInSection01Props';

export default function FMFadeInSection01({
  children,
  initial,
  animate,
  exit,
  transition,
}: Partial<FMFadeInSection01Props> & {
  children: ReactNode;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation once
    rootMargin: '0px 0px -30% 0px', // Adjusted root margin to trigger animation at 25-30% visibility
  });

  const animationProps = {
    initial: initial ?? FMFadeInSection01PropsDefault.initial,
    animate: inView
      ? animate ?? FMFadeInSection01PropsDefault.animate
      : FMFadeInSection01PropsDefault.initial,
    exit: exit ?? FMFadeInSection01PropsDefault.exit,
    transition: transition ?? FMFadeInSection01PropsDefault.transition,
  };

  return (
    <motion.div
      ref={ref}
      initial={animationProps.initial}
      animate={animationProps.animate}
      exit={animationProps.exit}
      transition={animationProps.transition}>
      {children}
    </motion.div>
  );
}
/**
 * =====================================================================
 *   ORIGINAL DOCUMENTATION  (Append to end of component code block)
 * =====================================================================
 * File Name      : FMFadeInSection01.tsx
 * Component Name : FMFadeInSection01
 * Component Type : FramerMotion Fade In Scroll up component
 * Date Created   : 2024-07-14
 * Dev Name       : Praditya manjhi
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer  : To meet web app requirements
 *
 * ------------------------------
 * Question: What does this component do?:
 * Answer  :
 * This component wraps its children with Framer Motion's motion.div,
 * using react-intersection-observer to detect when the section
 * containing it comes into view. Once the section is about 25-30% visible
 * from the bottom of the viewport, it triggers animations defined by
 * the initial, animate, exit, and transition props. These animations
 * control the opacity and position (y-axis) of the wrapped content,
 * providing a fade-in effect as the section scrolls into view.
 *
 *
 * To use this component to perform fade in scroll up effects on
 * a component, use this component to wrap the component that you want to
 * perform fade in scroll.
 *
 *  return (
 *    <main>
 *      <FMFadeInSection01>
 *         <section aria-label='Hero'>
 *            <Hero />
 *         </section>
 *      </FMFadeInSection01>
 *    </main>
 *  );
 *
 * You can also customize the fade in Scroll effect animation by
 * providing the option props that is provided in the component.
 * The props is Optional so you can either customize the effects by
 * passing props or you can use as it is.
 *
 *  return (
 *    <main>
 *      <FMFadeInSection01
 *          initial={{ opacity: 0, y: 200 }}
 *          exit={{ opacity: 0, y: 200 }}
 *          transition={{ opacity: 0, y: { duration: 1 }, duration: 1 }}
 *          transition={{ duration: 5 }}>
 *             <section aria-label='Hero'>
 *                <Hero />
 *             </section>
 *      </FMFadeInSection01>
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
