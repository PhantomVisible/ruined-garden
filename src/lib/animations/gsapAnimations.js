import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize the Growing Ivy animation
 * @param {SVGPathElement} pathElement - The SVG path element for the ivy
 * @param {number} duration - Animation duration in seconds
 */
export function initGrowingIvy(pathElement, duration = 3) {
  if (!pathElement) return;

  const pathLength = pathElement.getTotalLength();

  // Set initial state
  gsap.set(pathElement, {
    strokeDasharray: pathLength,
    strokeDashoffset: pathLength,
  });

  // Create scroll-linked animation
  gsap.to(pathElement, {
    strokeDashoffset: 0,
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      onUpdate: (self) => {
        // Trigger leaf sprouts at certain scroll positions
        if (self.getVelocity() > 0) {
          createLeafSprout(pathElement);
        }
      },
    },
  });
}

/**
 * Create a leaf sprout animation at a random point along the ivy path
 * @param {SVGPathElement} pathElement - The SVG path element
 */
export function createLeafSprout(pathElement) {
  if (!pathElement) return;

  const pathLength = pathElement.getTotalLength();
  const randomPoint = Math.random() * pathLength * 0.8; // Use 80% of path to avoid edges

  // Get point on path
  const point = pathElement.getPointAtLength(randomPoint);

  // Create leaf element
  const leaf = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  leaf.setAttribute('cx', point.x);
  leaf.setAttribute('cy', point.y);
  leaf.setAttribute('r', '3');
  leaf.setAttribute('fill', '#3a5f52');
  leaf.setAttribute('class', 'leaf-sprout');

  // Append to SVG parent
  const svg = pathElement.closest('svg');
  if (svg) {
    svg.appendChild(leaf);

    // Remove after animation
    gsap.to(leaf, {
      duration: 1.5,
      opacity: 0,
      onComplete: () => {
        leaf.remove();
      },
    });
  }
}

/**
 * Initialize scroll-triggered text reveal animation
 * @param {HTMLElement} element - The element to animate
 * @param {Object} options - Animation options
 */
export function initScrollReveal(element, options = {}) {
  const {
    duration = 0.8,
    delay = 0,
    stagger = 0.05,
    trigger = element,
    start = 'top 80%',
    end = 'top 50%',
  } = options;

  // Split text into words if needed
  const children = element.querySelectorAll('[data-reveal]');

  if (children.length > 0) {
    gsap.from(children, {
      duration,
      delay,
      stagger,
      opacity: 0,
      y: 20,
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub: 0.5,
      },
    });
  } else {
    gsap.from(element, {
      duration,
      delay,
      opacity: 0,
      y: 20,
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub: 0.5,
      },
    });
  }
}

/**
 * Initialize parallax scroll effect
 * @param {HTMLElement} element - The element to animate
 * @param {number} speed - Parallax speed (0-1)
 */
export function initParallax(element, speed = 0.5) {
  gsap.to(element, {
    y: () => window.innerHeight * speed,
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false,
    },
  });
}

/**
 * Initialize crumbling wall mask reveal animation
 * @param {HTMLElement} maskElement - The mask element
 * @param {HTMLElement} contentElement - The content to reveal
 */
export function initCrumblingWallReveal(maskElement, contentElement) {
  if (!maskElement || !contentElement) return;

  // Create a timeline for the reveal
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: maskElement,
      start: 'top 60%',
      end: 'center 30%',
      scrub: 1,
      markers: false,
    },
  });

  tl.to(
    maskElement,
    {
      opacity: 0,
      duration: 1,
    },
    0
  ).to(
    contentElement,
    {
      opacity: 1,
      duration: 1,
    },
    0
  );

  return tl;
}

/**
 * Initialize hover glow effect
 * @param {HTMLElement} element - The element to add glow to
 * @param {string} glowColor - CSS color for glow
 */
export function initHoverGlow(element, glowColor = 'rgba(192, 178, 131, 0.3)') {
  if (!element) return;

  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      boxShadow: `0 0 30px ${glowColor}`,
      duration: 0.3,
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      boxShadow: '0 0 0px rgba(0, 0, 0, 0)',
      duration: 0.3,
    });
  });
}

/**
 * Initialize menu item hover animation
 * @param {HTMLElement} element - The menu item
 */
export function initMenuHover(element) {
  if (!element) return;

  const leaf = element.querySelector('[data-leaf]');

  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      backgroundColor: 'rgba(192, 178, 131, 0.1)',
      duration: 0.3,
    });

    if (leaf) {
      gsap.to(leaf, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
      });
    }
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      backgroundColor: 'transparent',
      duration: 0.3,
    });

    if (leaf) {
      gsap.to(leaf, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
      });
    }
  });
}

/**
 * Kill all ScrollTrigger animations
 */
export function killAllScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

/**
 * Refresh ScrollTrigger calculations
 */
export function refreshScrollTriggers() {
  ScrollTrigger.refresh();
}
