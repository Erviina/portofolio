<template>
  <section id="projects" class="projects-section">
    <!-- Background decorations -->
    <div class="projects-decoration projects-decoration-1" aria-hidden="true"></div>
    <div class="projects-decoration projects-decoration-2" aria-hidden="true"></div>
    <div class="projects-decoration projects-decoration-3" aria-hidden="true"></div>

    <div class="container">
      <div class="projects-header">
        <div class="projects-header-left reveal reveal-header">
          <span class="projects-eyebrow">Featured Projects</span>
          <h2 class="projects-title">Featured Projects</h2>
          <p class="projects-description">
            A selection of things I've built, explored, and learned from.
          </p>
        </div>

        <a href="#projects" class="view-all reveal reveal-delay-1">
          View all projects
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

      <div class="projects-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          @openModal="openModal"
        />
      </div>
    </div>

    <ProjectModal :project="selectedProject" @close="closeModal" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'
import { projects } from '../data/projects.js'

const selectedProject = ref(null)

function openModal(project) {
  selectedProject.value = project
}

function closeModal() {
  selectedProject.value = null
}
</script>

<style scoped>
.projects-section {
  position: relative;
  padding: 110px 0;
  background: #fff;
  overflow: hidden;
}

/* Decorations */
.projects-decoration {
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
  background: rgba(233, 79, 136, 0.07);
  filter: blur(2px);
  animation: projectsFloat 10s ease-in-out infinite;
}

.projects-decoration-1 {
  width: 180px;
  height: 180px;
  top: 5%;
  right: -50px;
  animation-duration: 12s;
}

.projects-decoration-2 {
  width: 100px;
  height: 100px;
  bottom: 10%;
  left: -30px;
  animation-delay: -3s;
  animation-duration: 9s;
}

.projects-decoration-3 {
  width: 140px;
  height: 140px;
  top: 45%;
  left: -40px;
  animation-delay: -6s;
  animation-duration: 11s;
}

@keyframes projectsFloat {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(8px, -10px, 0); }
}

/* Header */
.projects-header {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 35px;
}

.projects-eyebrow {
  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: #e94f88;
  text-transform: uppercase;
}

.projects-title {
  margin-top: 8px;
  font-family: var(--font-heading);
  font-size: clamp(32px, 4vw, 48px);
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: #20232a;
}

.projects-description {
  margin-top: 12px;
  max-width: 500px;
  font-size: 14px;
  line-height: 1.7;
  color: #73737c;
}

.view-all {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #e94f88;
  white-space: nowrap;
  flex-shrink: 0;
  transition: gap 0.3s ease;
}

.view-all:hover {
  gap: 12px;
}

.view-all svg {
  transition: transform 0.3s ease;
}

.view-all:hover svg {
  transform: translateX(5px);
}

/* Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

/* Responsive */
@media (max-width: 1023px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .projects-header {
    align-items: start;
  }
}

@media (max-width: 640px) {
  .projects-section {
    padding: 80px 0;
  }

  .projects-header {
    flex-direction: column;
    gap: 18px;
    align-items: flex-start;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .projects-decoration {
    animation: none !important;
  }
}
</style>
