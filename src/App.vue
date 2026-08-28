<template>
  <div id="portfolio-app">
    <Navbar :activeSection="activeSection" />

    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <LearningSection />
      <ContactSection />
    </main>

    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import LearningSection from './components/LearningSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

// --- Active Section Detection ---
const activeSection = ref('home')

const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact']

let observer = null
let revealObserver = null
let prefersReducedMotion = false
let parallaxRaf = null

function setupIntersectionObserver() {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      rootMargin: '-40% 0px -55% 0px',
      threshold: 0
    }
  )

  sectionIds.forEach((id) => {
    const el = document.getElementById(id)
    if (el) {
      observer.observe(el)
    }
  })
}

function setupScrollReveal() {
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          revealObserver.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -40px 0px'
    }
  )

  document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el)
  })
}

function updateParallax() {
  parallaxRaf = null
  if (prefersReducedMotion) return

  const scrollY = window.scrollY
  document.querySelectorAll('.parallax-soft').forEach((el) => {
    const speed = Number(el.dataset.parallaxSpeed || 0.04)
    const offset = Math.max(-15, Math.min(15, scrollY * speed))
    el.style.transform = `translate3d(0, ${offset}px, 0)`
  })
}

function onScrollParallax() {
  if (parallaxRaf != null) return
  parallaxRaf = requestAnimationFrame(updateParallax)
}

onMounted(() => {
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  setupIntersectionObserver()

  // Small delay so DOM elements render first
  setTimeout(() => {
    setupScrollReveal()
  }, 80)

  if (!prefersReducedMotion) {
    window.addEventListener('scroll', onScrollParallax, { passive: true })
    updateParallax()
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
  if (revealObserver) revealObserver.disconnect()
  window.removeEventListener('scroll', onScrollParallax)
  if (parallaxRaf != null) cancelAnimationFrame(parallaxRaf)
})
</script>

<style>
/* App-level styles are minimal — design system is in style.css */
#portfolio-app {
  min-height: 100vh;
}
</style>
