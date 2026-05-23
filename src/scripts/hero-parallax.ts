/**
 * Hero background parallax effect
 * Scrolls hero background at ~35% of content scroll speed
 */

export function initHeroParallax() {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    return // Don't apply parallax if user prefers reduced motion
  }

  const hero = document.querySelector('#top') as HTMLElement
  const heroBackground = document.querySelector('#top .hero-bg') as HTMLElement

  if (!hero || !heroBackground) {
    return
  }

  // Add will-change for performance
  heroBackground.style.willChange = 'transform'

  let ticking = false

  function updateParallax() {
    const scrollY = window.scrollY
    const heroHeight = hero.offsetHeight

    // Only apply parallax while hero is in view
    if (scrollY < heroHeight) {
      // Scroll at 35% speed (0.35 multiplier creates subtle parallax)
      const parallaxOffset = scrollY * 0.35
      heroBackground.style.transform = `translateY(${parallaxOffset}px)`
    }

    ticking = false
  }

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax)
      ticking = true
    }
  }

  // Listen to scroll events
  window.addEventListener('scroll', requestTick, { passive: true })

  // Clean up on page unload
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('scroll', requestTick)
    if (heroBackground) {
      heroBackground.style.willChange = 'auto'
    }
  })
}

// Auto-initialize on DOM ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroParallax)
  } else {
    initHeroParallax()
  }
}
