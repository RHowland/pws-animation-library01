// Component Name: FMFadeInSection01Props
//
export interface FMFadeInSection01Props {
  initial?: { opacity: number; y: number }; // Initial state of the animation (optional)
  animate?: { opacity: number; y: number }; // Target state of the animation (optional)
  exit?: { opacity: number; y: number }; // State when the component exits (optional)
  transition?: { opacity: number; y: { duration: number }; duration: number }; // Transition configuration (optional)
}

// Default values for FMFadeInSection01Props if not provided.
export const FMFadeInSection01PropsDefault: FMFadeInSection01Props = {
  initial: { opacity: 0, y: 50 }, // Default initial state: fully transparent and slightly below viewport
  animate: { opacity: 1, y: 0 }, // Default animate state: fully opaque and at normal position
  exit: { opacity: 0, y: 50 }, // Default exit state: fully transparent and slightly below viewport
  transition: { opacity: 0, y: { duration: 1 }, duration: 1 }, // Default transition: fade and move with 1 second duration
};
/**
 * File Name      : Example.FMFadeInPage01rops.tsx
 * Component Name : FMFadeInSection01Props
 * Component Type : FramerMotion Fade-in animation
 * Date Created   : 2024-06-20
 * Dev Name       : Rich Howland
 * ------------------------------
 *
 * Detailed Documentation for this Properties component.
 *
 * initial
 * - What it does:
 *   Defines the starting state of the animation.
 * - Common use case:
 *   Set initial visual properties (e.g., opacity 0).
 * - Other properties it works with:
 *   animate, transition.
 * - When to not use this property:
 *   only if you want no animation.
 * - Acceptable range of values:
 *   { opacity number of 0 to 1 }.
 * - Commonly used values:
 *   { opacity 0 }, { opacity 0.5 }.
 *
 * animate
 * - What it does:
 *   Defines the end state of the animation.
 * - Common use case:
 *   Set target visual properties (e.g., opacity 1).
 * - Other properties it works with:
 *   initial, transition.
 * - When to not use this property:
 *   only if you want no animation.
 * - Acceptable range of values
 *   { opacity number 0 to 1}.
 * - Commonly used values:
 *   { opacity 1 }, { opacity 0.8 }.
 *
 * exit
 * - What it does:
 *   Defines the state when the component exits.
 * - Common use case:
 *   Set exit visual properties (e.g., opacity 0).
 * - Other properties it works with:
 *   initial, animate.
 * - When to not use this property:
 *   only if you don't need an exit animation.
 * - Acceptable range of values:
 *   { opacity number 0 to 1 }.
 * - Commonly used values:
 *   { opacity 0 }, { opacity 0.5 }.
 *
 * transition
 * - What it does:
 *   Defines the duration and type of the transition.
 * - Common use case:
 *   Set timing for animations (e.g., duration 1 second).
 * - Other properties it works:
 *   with initial, animate, exit.
 * - When to not use this property:
 *   only if you do not want a default transition.
 * - Acceptable range of values:
 *   { duration number }.
 * - Commonly used values { duration 1 }, { duration 0.5 }.
 *
 */
