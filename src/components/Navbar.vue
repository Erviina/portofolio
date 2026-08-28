<template>
  <nav class="navbar" :class="{ scrolled: isScrolled, 'mobile-open': isMobileOpen }">
    <div class="navbar-container container">
      <a href="#home" class="navbar-logo" @click.prevent="scrollTo('home')">
        <span class="logo-accent">E</span><span class="logo-text">rvina</span>
      </a>

      <ul class="navbar-menu" :class="{ active: isMobileOpen }">
        <li v-for="item in menuItems" :key="item.id">
          <a
            :href="'#' + item.id"
            class="navbar-link"
            :class="{ active: activeSection === item.id }"
            @click.prevent="handleNavClick(item.id)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <button
        class="navbar-toggle"
        :class="{ active: isMobileOpen }"
        @click="toggleMobile"
        aria-label="Toggle navigation menu"
      >
        <span class="toggle-line"></span>
        <span class="toggle-line"></span>
        <span class="toggle-line"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  activeSection: {
    type: String,
    default: 'home'
  }
})

const menuItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
]

const isScrolled = ref(false)
const isMobileOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function toggleMobile() {
  isMobileOpen.value = !isMobileOpen.value
  document.body.style.overflow = isMobileOpen.value ? 'hidden' : ''
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

function handleNavClick(id) {
  scrollTo(id)
  if (isMobileOpen.value) {
    isMobileOpen.value = false
    document.body.style.overflow = ''
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--navbar-height);
  display: flex;
  align-items: center;
  background: rgba(250, 250, 250, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all var(--transition-base);
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.05);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.navbar-logo {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
}

.logo-accent {
  color: var(--accent);
}

.logo-text {
  color: var(--text-primary);
}

/* Menu */
.navbar-menu {
  display: flex;
  align-items: center;
  gap: 32px;
}

.navbar-link {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text-secondary);
  position: relative;
  padding: 4px 0;
  transition: color 0.25s ease;
}

.navbar-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1.5px;
  background: var(--accent);
  border-radius: 1px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}

.navbar-link:hover {
  color: var(--text-primary);
}

.navbar-link:hover::after {
  transform: scaleX(1);
}

.navbar-link.active {
  color: var(--accent);
}

.navbar-link.active::after {
  transform: scaleX(1);
}

/* Hamburger Toggle */
.navbar-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
  z-index: 1001;
}

.toggle-line {
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all var(--transition-base);
}

.navbar-toggle.active .toggle-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.navbar-toggle.active .toggle-line:nth-child(2) {
  opacity: 0;
}

.navbar-toggle.active .toggle-line:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile */
@media (max-width: 768px) {
  .navbar-toggle {
    display: flex;
  }

  .navbar-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100vh;
    background: var(--bg-white);
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 24px;
    padding: 40px;
    transform: translateX(100%);
    transition: transform var(--transition-base);
    box-shadow: -8px 0 32px rgba(0, 0, 0, 0.1);
  }

  .navbar-menu.active {
    transform: translateX(0);
  }

  .navbar-link {
    font-size: 1.125rem;
  }
}
</style>
