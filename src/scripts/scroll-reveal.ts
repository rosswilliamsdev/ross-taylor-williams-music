import { inView } from 'motion'

/**
 * Scroll-triggered reveal animations using Motion
 * Applies subtle fade-up animation to elements with class "scroll-reveal"
 */

export function initScrollReveal() {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    // If user prefers reduced motion, don't animate - just ensure visibility
    const elements = document.querySelectorAll('.scroll-reveal')
    elements.forEach((el) => {
      ;(el as HTMLElement).style.opacity = '1'
      ;(el as HTMLElement).style.transform = 'none'
    })
    return
  }

  // Apply scroll reveal to all elements with class "scroll-reveal"
  const elements = document.querySelectorAll('.scroll-reveal')

  elements.forEach((el) => {
    // Set initial state
    ;(el as HTMLElement).style.opacity = '0'
    ;(el as HTMLElement).style.transform = 'translateY(30px)'

    // Trigger animation when element enters viewport
    inView(
      el as HTMLElement,
      () => {
        // Animate to visible state
        ;(el as HTMLElement).style.transition =
          'opacity 400ms cubic-bezier(0, 0, 0.2, 1), transform 400ms cubic-bezier(0, 0, 0.2, 1)'
        ;(el as HTMLElement).style.opacity = '1'
        ;(el as HTMLElement).style.transform = 'translateY(0)'
      },
      {
        // Trigger when element is 10% visible
        amount: 0.1,
      },
    )
  })
}

// Auto-initialize on DOM ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveal)
  } else {
    initScrollReveal()
  }
}
