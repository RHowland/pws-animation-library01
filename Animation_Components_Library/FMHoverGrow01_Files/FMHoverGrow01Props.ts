// Component Name: FMHoverGrow01Props
//
export interface FMHoverGrow01Props {
  transition: { duration: number }; // Duration of the transition
  whileHover: { scale: number }; // Hover scale of the component
}

export const FMHoverGrow01PropsDefault = {
  transition: { duration: 1 }, // Duration of 1 second
  whileHover: { scale: 1.1 }, // scale of 10%
};

/**
 * File Name      : Example.FMFadeInPage01rops.tsx
 * Component Name : FMHoverGrow01Props
 * Component Type : FramerMotion Fade-in animation
 * Date Created   : 2024-06-20
 * Dev Name       : Praditya manjhi
 * ------------------------------
 *
 * Detailed Documentation for this Properties component.
 *
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
 *  * whileHover
 * - What it does:
 *   Defines the scale transformation when the component is hovered.
 * - Common use case:
 *   Scale up the component (e.g., scale 1.1) on hover.
 * - Other properties it works with:
 *   animate.
 * - When to not use this property:
 *   Only if you do not want a hover effect or want to keep the scale unchanged on hover.
 * - Acceptable range of values:
 *   { scale number }.
 * - Commonly used values:
 *   { scale 1.1 }, { scale 1.2 }.
 *
 */
