<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <span class="footer-logo">
            <span style="color: var(--accent);">E</span>rvina
          </span>
          <p class="footer-tagline caption">Computer Science Student</p>
        </div>

        <div class="footer-links">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="'#' + item.id"
            class="footer-link"
            @click.prevent="scrollTo(item.id)"
          >
            {{ item.label }}
          </a>
        </div>

        <p class="footer-copy caption">
          © {{ currentYear }} Ervina Kusnanda. Built with Vue.js
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-light);
  padding: 48px 0 32px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}

.footer-logo {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-primary);
}

.footer-tagline {
  margin-top: 4px;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

.footer-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color var(--transition-fast);
}

.footer-link:hover {
  color: var(--accent);
}

.footer-copy {
  margin-top: 8px;
}
</style>
