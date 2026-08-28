<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="project" class="modal-overlay" @click.self="$emit('close')">
        <div
          class="modal-container"
          role="dialog"
          aria-modal="true"
          :aria-label="project.title"
        >
          <button class="modal-close" @click="$emit('close')" aria-label="Close modal">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div class="modal-decor" aria-hidden="true">
            <span class="modal-decor-dot modal-decor-dot-1"></span>
            <span class="modal-decor-dot modal-decor-dot-2"></span>
            <span class="modal-decor-line"></span>
          </div>

          <div class="modal-content">
            <!-- Header -->
            <header class="modal-header">
              <span class="project-category-badge">{{ project.category }}</span>
              <h2 class="modal-title">{{ project.title }}</h2>
              <div class="modal-tags">
                <span v-for="tag in project.tags" :key="tag" class="modal-tag">{{ tag }}</span>
              </div>
            </header>

            <!-- Main image -->
            <div v-if="project.image" class="modal-image">
              <img
                :src="project.image"
                :alt="project.title"
                class="modal-main-image"
              />
            </div>

            <!-- Details -->
            <div class="modal-details">
              <section class="modal-detail-group">
                <h3 class="modal-detail-label">Project Overview</h3>
                <p class="modal-body-text">{{ project.overview }}</p>
              </section>

              <section class="modal-detail-group">
                <h3 class="modal-detail-label">My Role</h3>
                <p class="modal-body-text">{{ project.role }}</p>
              </section>

              <section class="modal-detail-group">
                <h3 class="modal-detail-label">Description</h3>
                <div class="modal-description" v-html="formattedDescription"></div>
              </section>

              <section
                v-if="project.gallery && project.gallery.length > 0"
                class="modal-detail-group"
              >
                <h3 class="modal-detail-label">Gallery</h3>
                <div class="modal-gallery">
                  <img
                    v-for="(img, index) in project.gallery"
                    :key="index"
                    :src="img"
                    :alt="`${project.title} gallery ${index + 1}`"
                    class="modal-gallery-image"
                  />
                </div>
              </section>
            </div>

            <!-- Links — only render when at least one link exists -->
            <footer v-if="hasAnyLink" class="modal-links">
              <h3 class="modal-detail-label">Project Links</h3>
              <div class="modal-links-row">
                <a
                  v-if="project.links.github"
                  :href="project.links.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="modal-link-btn"
                >
                  <svg class="modal-link-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.395-.135-.345-.72-1.395-1.23-1.665-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                  <svg class="modal-link-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>

                <a
                  v-if="project.links.demo"
                  :href="project.links.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="modal-link-btn modal-link-btn--primary"
                >
                  <svg class="modal-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  Live Demo
                  <svg class="modal-link-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>

                <a
                  v-if="project.links.figma"
                  :href="project.links.figma"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="modal-link-btn"
                >
                  <svg class="modal-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                    <path d="M12 2h3.5A3.5 3.5 0 1 1 12 5.5V2z" />
                    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5A3.5 3.5 0 1 1 8.5 23 3.5 3.5 0 0 1 5 19.5z" />
                  </svg>
                  Figma
                  <svg class="modal-link-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>

                <a
                  v-if="project.links.doc"
                  :href="project.links.doc"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="modal-link-btn"
                >
                  <svg class="modal-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                  </svg>
                  View Project Report
                  <svg class="modal-link-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, onUnmounted, watch } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])

const hasAnyLink = computed(() => {
  const links = props.project?.links
  if (!links) return false
  return Boolean(links.github || links.demo || links.figma || links.doc)
})

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function formatInlineMarkdown(text) {
  return escapeHtml(text).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
}

const formattedDescription = computed(() => {
  const raw = props.project?.description
  if (!raw) return ''

  const lines = raw.split('\n')
  const html = []
  let inList = false

  lines.forEach((line) => {
    const trimmed = line.trim()

    if (trimmed.startsWith('- ')) {
      if (!inList) {
        html.push('<ul class="modal-desc-list">')
        inList = true
      }

      const item = trimmed.slice(2)
      const splitMatch = item.match(/^\*\*(.+?)\*\*\s*[—–-]\s*(.+)$/)

      if (splitMatch) {
        html.push(
          `<li class="modal-desc-item">` +
            `<span class="modal-desc-title">${escapeHtml(splitMatch[1])}</span>` +
            `<span class="modal-desc-copy">${escapeHtml(splitMatch[2])}</span>` +
          `</li>`
        )
      } else {
        html.push(`<li class="modal-desc-item">${formatInlineMarkdown(item)}</li>`)
      }
      return
    }

    if (inList) {
      html.push('</ul>')
      inList = false
    }

    if (trimmed) {
      html.push(`<p class="modal-body-text">${formatInlineMarkdown(trimmed)}</p>`)
    }
  })

  if (inList) html.push('</ul>')
  return html.join('')
})

function handleKeydown(e) {
  if (e.key === 'Escape') {
    emit('close')
  }
}

watch(
  () => props.project,
  (val) => {
    if (val) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleKeydown)
    } else {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeydown)
    }
  }
)

onUnmounted(() => {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* Overlay */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(15, 20, 30, 0.45);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  overflow-y: auto;
}

/* Container */
.modal-container {
  position: relative;
  width: min(920px, calc(100vw - 40px));
  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 20px;
  box-shadow: 0 24px 80px rgba(20, 25, 40, 0.18);
  background:
    radial-gradient(
      circle at 90% 0%,
      rgba(233, 79, 136, 0.07),
      transparent 28%
    ),
    radial-gradient(
      circle at 0% 100%,
      rgba(233, 79, 136, 0.04),
      transparent 25%
    ),
    #ffffff;
  transform: translateY(0) scale(1);
}

.modal-container::-webkit-scrollbar {
  width: 5px;
}

.modal-container::-webkit-scrollbar-track {
  background: transparent;
}

.modal-container::-webkit-scrollbar-thumb {
  background: rgba(233, 79, 136, 0.18);
  border-radius: 10px;
}

/* Decorative accents */
.modal-decor {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.modal-decor-dot {
  position: absolute;
  border-radius: 50%;
  background: rgba(233, 79, 136, 0.12);
}

.modal-decor-dot-1 {
  width: 8px;
  height: 8px;
  top: 28%;
  right: 28px;
}

.modal-decor-dot-2 {
  width: 5px;
  height: 5px;
  bottom: 22%;
  left: 24px;
  background: rgba(233, 79, 136, 0.1);
}

.modal-decor-line {
  position: absolute;
  top: 18%;
  left: 32px;
  width: 28px;
  height: 1px;
  background: rgba(233, 79, 136, 0.14);
}

.modal-content {
  position: relative;
  z-index: 1;
  padding: 44px 44px 48px;
}

/* Close */
.modal-close {
  position: sticky;
  top: 16px;
  float: right;
  margin: 16px 16px 0 0;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(245, 245, 247, 0.9);
  border: 1px solid rgba(30, 35, 50, 0.08);
  display: grid;
  place-items: center;
  color: #6b7280;
  transition:
    background 0.3s ease,
    color 0.3s ease,
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.3s ease;
  z-index: 10;
}

.modal-close:hover {
  background: rgba(233, 79, 136, 0.08);
  color: #e94f88;
  border-color: rgba(233, 79, 136, 0.18);
  transform: rotate(90deg);
}

.modal-close:focus-visible {
  outline: 2px solid #e94f88;
  outline-offset: 2px;
}

/* Header */
.modal-header {
  margin-bottom: 28px;
  padding-right: 40px;
}

.project-category-badge {
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #e94f88;
  background: rgba(233, 79, 136, 0.08);
  border: 1px solid rgba(233, 79, 136, 0.12);
  padding: 6px 12px;
  border-radius: 999px;
  margin-bottom: 14px;
}

.modal-title {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 2.4vw, 1.875rem);
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 16px;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.modal-tag {
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 999px;
  background: rgba(233, 79, 136, 0.05);
  border: 1px solid rgba(233, 79, 136, 0.12);
  color: #e94f88;
  font-size: 11px;
  font-weight: 600;
}

/* Image */
.modal-image {
  width: 100%;
  margin-bottom: 36px;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(30, 35, 50, 0.08);
  box-shadow: 0 12px 30px rgba(20, 25, 40, 0.08);
  background: #fafafa;
}

.modal-main-image {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.modal-image:hover .modal-main-image {
  transform: scale(1.015);
}

/* Details */
.modal-details {
  display: flex;
  flex-direction: column;
}

.modal-detail-group {
  padding: 28px 0;
  border-top: 1px solid rgba(30, 35, 50, 0.07);
}

.modal-detail-group:first-child {
  border-top: none;
  padding-top: 0;
}

.modal-detail-label {
  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #e94f88;
  margin-bottom: 12px;
}

.modal-body-text {
  font-size: 0.9375rem;
  line-height: 1.8;
  color: #6b7280;
}

.modal-description :deep(.modal-body-text) {
  margin-bottom: 14px;
}

.modal-description :deep(.modal-body-text:last-child) {
  margin-bottom: 0;
}

.modal-description :deep(.modal-desc-list) {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 4px 0 0;
  padding: 0;
}

.modal-description :deep(.modal-desc-item) {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-left: 14px;
  position: relative;
}

.modal-description :deep(.modal-desc-item)::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #e94f88;
}

.modal-description :deep(.modal-desc-title) {
  font-family: var(--font-heading);
  font-size: 0.9375rem;
  font-weight: 600;
  color: #1f2937;
  line-height: 1.4;
}

.modal-description :deep(.modal-desc-copy) {
  font-size: 0.875rem;
  line-height: 1.7;
  color: #6b7280;
}

.modal-description :deep(strong) {
  color: #1f2937;
  font-weight: 600;
}

/* Gallery */
.modal-gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.modal-gallery-image {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
  border: 1px solid rgba(30, 35, 50, 0.08);
  box-shadow: 0 8px 24px rgba(20, 25, 40, 0.06);
  object-fit: contain;
  background: #fafafa;
}

/* Links */
.modal-links {
  padding-top: 28px;
  border-top: 1px solid rgba(30, 35, 50, 0.07);
}

.modal-links-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 4px;
}

.modal-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 10px;
  border: 1px solid rgba(233, 79, 136, 0.18);
  background: #ffffff;
  color: #e94f88;
  font-size: 0.875rem;
  font-weight: 600;
  transition:
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.modal-link-btn:hover {
  background: rgba(233, 79, 136, 0.06);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(233, 79, 136, 0.08);
}

.modal-link-btn--primary {
  background: #e94f88;
  border-color: #e94f88;
  color: #ffffff;
}

.modal-link-btn--primary:hover {
  background: #d84278;
  border-color: #d84278;
  box-shadow: 0 8px 20px rgba(233, 79, 136, 0.2);
}

.modal-link-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.modal-link-arrow {
  flex-shrink: 0;
  opacity: 0.75;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.modal-link-btn:hover .modal-link-arrow {
  transform: translate(2px, -2px);
}

/* Transitions */
.modal-enter-active {
  transition: opacity 0.35s ease;
}

.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container {
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.4s ease;
}

.modal-leave-active .modal-container {
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}

.modal-enter-from .modal-container {
  transform: translateY(12px) scale(0.98);
  opacity: 0;
}

.modal-leave-to .modal-container {
  transform: translateY(8px) scale(0.98);
  opacity: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .modal-container {
    width: calc(100vw - 32px);
  }

  .modal-content {
    padding: 36px 32px 40px;
  }
}

@media (max-width: 768px) {
  .modal-overlay {
    padding: 12px;
    align-items: flex-end;
  }

  .modal-container {
    width: calc(100vw - 20px);
    max-height: 92vh;
    border-radius: 16px;
  }

  .modal-content {
    padding: 28px 20px 32px;
  }

  .modal-header {
    padding-right: 28px;
    margin-bottom: 22px;
  }

  .modal-title {
    font-size: 22px;
  }

  .modal-image {
    margin-bottom: 28px;
    border-radius: 12px;
  }

  .modal-detail-group {
    padding: 22px 0;
  }

  .modal-gallery {
    grid-template-columns: 1fr;
  }

  .modal-links-row {
    flex-direction: column;
    align-items: stretch;
  }

  .modal-link-btn {
    justify-content: center;
    min-height: 44px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .modal-main-image,
  .modal-close,
  .modal-link-btn,
  .modal-link-arrow {
    transition: none !important;
  }

  .modal-image:hover .modal-main-image,
  .modal-close:hover,
  .modal-link-btn:hover {
    transform: none !important;
  }
}
</style>
