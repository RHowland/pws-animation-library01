// Component Name: FMHoverGrow01
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import {
  FMHoverGrow01Props,
  FMHoverGrow01PropsDefault,
} from './FMHoverGrow01Props';

export default function FMHoverGrow01({
  children,
  transition,
  whileHover,
}: Partial<FMHoverGrow01Props> & {
  children: ReactNode;
}) {
  return (
    <motion.div
      transition={transition ?? FMHoverGrow01PropsDefault.transition}
      whileHover={whileHover ?? FMHoverGrow01PropsDefault.whileHover}>
      {children}
    </motion.div>
  );
}
/**
 * =====================================================================
 *   ORIGINAL DOCUMENTATION  (Append to end of component code block)
 * =====================================================================
 * File Name      : FMHoverGrow01.tsx
 * Component Name : FMHoverGrow01
 * Component Type : FramerMotion Fade In component
 * Date Created   : 2024-06-20
 * Dev Name       : Praditya manjhi
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer  : To implement a hover effect that scales items on interaction.
 *
 * ------------------------------
 * Question: What does this component do?:
 * Answer  :
 * This component wraps its children with Framer Motion's motion.div,
 * enabling a hover effect where the wrapped content grows about 5-10%
 * in size over a duration of 1 second when hovered over. When the mouse
 * pointer moves away, the content shrinks back to its original size
 * over the same duration.
 *
 *
 * To use this component to apply hover effects on individual elements like
 * buttons, images , div elements... wrap it around those components in
 * the respective files. For example:
 *
 * <FMHoverGrow01>
 *   <button className="button">Click Me</button>
 * </FMHoverGrow01>
 *
 * You can customize the hover effect animation by passing optional props
 * to adjust initial, animate, exit, and transition settings. If not provided,
 * default animations are used.
 *
 *  return (
 *    <FMHoverGrow01
 *     initial={{ scale: 1 }}
 *     animate={{ scale: 1.1 }}
 *     exit={{ scale: 1 }}
 *     transition={{ duration: 1 }}>
 *       <img src="example.png" alt="Example Image" />
 *    </FMHoverGrow01>
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
