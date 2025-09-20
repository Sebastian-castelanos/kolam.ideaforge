// Interactive functionality for the Kolam website

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Gallery item interactions
  const galleryItems = document.querySelectorAll(".gallery-item")
  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      const pattern = this.dataset.pattern
      showPatternDetails(pattern)
    })

    // Add hover effects
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)"
    })

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Math card hover effects
  const mathCards = document.querySelectorAll(".math-card")
  mathCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const svg = this.querySelector(".math-svg")
      if (svg) {
        svg.style.filter = "drop-shadow(0 0 15px var(--primary))"
      }
    })

    card.addEventListener("mouseleave", function () {
      const svg = this.querySelector(".math-svg")
      if (svg) {
        svg.style.filter = "none"
      }
    })
  })

  // Cultural card animations
  const culturalCards = document.querySelectorAll(".cultural-card")
  culturalCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".cultural-icon svg")
      if (icon) {
        icon.style.transform = "scale(1.1) rotate(5deg)"
        icon.style.transition = "transform 0.3s ease"
      }
    })

    card.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".cultural-icon svg")
      if (icon) {
        icon.style.transform = "scale(1) rotate(0deg)"
      }
    })
  })

  // Button click effects
  const buttons = document.querySelectorAll(".btn")
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("span")
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.classList.add("ripple")

      this.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe sections for scroll animations
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(30px)"
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(section)
  })

  // Hero section is always visible
  const heroSection = document.querySelector(".hero-section")
  if (heroSection) {
    heroSection.style.opacity = "1"
    heroSection.style.transform = "translateY(0)"
  }
})

// Function to show pattern details (can be expanded)
function showPatternDetails(pattern) {
  const patternInfo = {
    lotus: {
      name: "Lotus Pattern",
      description: "Represents purity and spiritual awakening in Indian culture.",
      complexity: "Intermediate",
      symmetry: "4-fold rotational",
    },
    star: {
      name: "Star Pattern",
      description: "Symbolizes guidance and divine light.",
      complexity: "Advanced",
      symmetry: "5-fold rotational",
    },
    spiral: {
      name: "Spiral Pattern",
      description: "Represents the cosmic dance and eternal cycle.",
      complexity: "Beginner",
      symmetry: "Spiral symmetry",
    },
    geometric: {
      name: "Geometric Pattern",
      description: "Pure mathematical beauty in geometric form.",
      complexity: "Intermediate",
      symmetry: "8-fold rotational",
    },
  }

  const info = patternInfo[pattern]
  if (info) {
    alert(`${info.name}\n\n${info.description}\n\nComplexity: ${info.complexity}\nSymmetry: ${info.symmetry}`)
  }
}

// Add CSS for ripple effect
const style = document.createElement("style")
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)
