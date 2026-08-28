<template>
  <article
    class="project-card reveal"
    :class="'reveal-delay-' + ((project.id % 4) + 1)"
    @click="$emit('openModal', project)"
  >
    <div class="project-image-wrapper">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.title"
        class="project-image"
      />
      <div v-else class="project-image-placeholder">
        <span>{{ project.category }}</span>
      </div>

      <span class="project-number">{{ String(project.id).padStart(2, '0') }}</span>
    </div>

    <div class="project-content">
      <h3 class="project-title">{{ project.title }}</h3>

      <div class="project-tags">
        <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
      </div>

      <div v-if="hasAnyLink" class="project-links" @click.stop>
        <a
          v-if="project.links.github"
          :href="project.links.github"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link-btn"
        >
          <svg class="project-link-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.395-.135-.345-.72-1.395-1.23-1.665-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>

        <a
          v-if="project.links.demo"
          :href="project.links.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link-btn project-link-btn--primary"
        >
          <svg class="project-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          Live Demo
        </a>

        <a
          v-if="project.links.figma"
          :href="project.links.figma"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link-btn"
        >
          <svg class="project-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
            <path d="M12 2h3.5A3.5 3.5 0 1 1 12 5.5V2z" />
            <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
            <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
            <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5A3.5 3.5 0 1 1 8.5 23 3.5 3.5 0 0 1 5 19.5z" />
          </svg>
          Figma
        </a>

        <a
          v-if="project.links.doc"
          :href="project.links.doc"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link-btn"
        >
          <svg class="project-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <line x1="10" y1="9" x2="8" y2="9" />
          </svg>
          View Documentation
        </a>
      </div>

      <button class="project-view" @click.stop="$emit('openModal', project)">
        View Details
        <span aria-hidden="true">→</span>
      </button>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

defineEmits(['openModal'])

const hasAnyLink = computed(() => {
  const links = props.project?.links
  if (!links) return false
  return Boolean(links.github || links.demo || links.figma || links.doc)
})
</script>

<style scoped>
.project-card {
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid #f1dde5;
  box-shadow: 0 8px 25px rgba(30, 30, 50, 0.045);
  cursor: pointer;
  transition:
    opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease,
    border-color 0.4s ease;
}

.project-card.revealed:hover {
  transform: translate3d(0, -5px, 0);
  border-color: rgba(233, 79, 136, 0.35);
  box-shadow: 0 18px 40px rgba(30, 30, 50, 0.09);
}

/* Staggered image / content reveal */
.project-image-wrapper,
.project-content {
  opacity: 0;
  transition:
    opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.project-image-wrapper {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  background: #fce8f0;
  transform: translate3d(-20px, 0, 0);
}

.project-content {
  padding: 18px;
  transform: translate3d(20px, 0, 0);
}

.project-card.revealed .project-image-wrapper {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.project-card.revealed .project-content {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition-delay: 0.1s;
}

.project-image-wrapper::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(20, 20, 30, 0.1),
    transparent 45%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 2;
  pointer-events: none;
}

.project-card:hover .project-image-wrapper::after {
  opacity: 1;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.project-card:hover .project-image {
  transform: scale(1.025);
}

.project-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #d84278;
  background: linear-gradient(145deg, #fce8f0, #fff5f8);
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.project-card:hover .project-image-placeholder {
  transform: scale(1.025);
}

/* Project number badge */
.project-number {
  position: absolute;
  left: 14px;
  bottom: 14px;
  z-index: 3;
  min-width: 38px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.94);
  color: #e94f88;
  font-size: 12px;
  font-weight: 800;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
}

.project-title {
  font-family: var(--font-heading);
  font-size: 16px;
  line-height: 1.4;
  font-weight: 700;
  color: #20232a;
  transition: color 0.3s ease;
}

.project-card:hover .project-title {
  color: #e94f88;
}

/* Tags */
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}

.project-tag {
  display: inline-flex;
  padding: 6px 9px;
  border-radius: 999px;
  background: #fce8f0;
  color: #d84278;
  font-size: 10px;
  font-weight: 600;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}

.project-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 11px;
  border-radius: 8px;
  border: 1px solid rgba(233, 79, 136, 0.18);
  background: #ffffff;
  color: #e94f88;
  font-size: 10px;
  font-weight: 600;
  transition:
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.project-link-btn:hover {
  background: rgba(233, 79, 136, 0.06);
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(233, 79, 136, 0.08);
}

.project-link-btn--primary {
  background: #e94f88;
  border-color: #e94f88;
  color: #ffffff;
}

.project-link-btn--primary:hover {
  background: #d84278;
  border-color: #d84278;
  box-shadow: 0 6px 16px rgba(233, 79, 136, 0.2);
}

.project-link-icon {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

/* View action */
.project-view {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 15px;
  font-size: 11px;
  font-weight: 700;
  color: #e94f88;
  opacity: 0;
  transform: translateX(0);
  transition:
    opacity 0.3s ease,
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.project-card:hover .project-view {
  opacity: 1;
  transform: translateX(4px);
}

.project-view span {
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.project-card:hover .project-view span {
  transform: translateX(2px);
}

.project-view:focus-visible {
  opacity: 1;
  transform: translateX(4px);
  outline: 2px solid #e94f88;
  outline-offset: 2px;
  border-radius: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .project-image-wrapper,
  .project-content {
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
