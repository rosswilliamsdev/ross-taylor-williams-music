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
    const htmlEl = el as HTMLElement

    // Get stagger delay from data attribute (defaults to 0)
    const delayMultiplier = parseInt(htmlEl.dataset.delay || '0', 10)
    const delay = delayMultiplier * 80 // 80ms per increment

    // Set initial state
    htmlEl.style.opacity = '0'
    htmlEl.style.transform = 'translateY(30px)'

    // Trigger animation when element enters viewport
    inView(
      htmlEl,
      () => {
        // Calculate transition with delay
        const transitionDelay = delay > 0 ? `${delay}ms` : '0ms'

        // Animate to visible state
        htmlEl.style.transition =
          `opacity 400ms cubic-bezier(0, 0, 0.2, 1) ${transitionDelay}, transform 400ms cubic-bezier(0, 0, 0.2, 1) ${transitionDelay}`
        htmlEl.style.opacity = '1'
        htmlEl.style.transform = 'translateY(0)'
      },
      {
        // Trigger when element is 20% visible (increased from 0.1)
        amount: 0.2,
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
