// Component Name: FMFadeIn01Props
// 
export interface FMFadeIn01_PageProps {
  initial: { opacity: number };       // Initial state of the animation
  animate: { opacity: number };       // Target state of the animation
  exit: { opacity: number };          // State when the component exits
  transition: { duration: number };   // Duration of the transition
}

export const FMFadeIn01_PageProps = {
  initial: { opacity: 0 },            // Start opacity at 0
  animate: { opacity: 1 },            // End opacity at 1
  exit: { opacity: 0 },               // Exit opacity at 0
  transition: { duration: 1 },        // Duration of 1 second
};

/**
* File Name      : Example.FMFadeIn01-PageProps.tsx 
* Component Name : FMFadeIn01_PageProps
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