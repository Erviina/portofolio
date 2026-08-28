<template>
  <section id="experience" class="section experience-section">
    <BackgroundDecor section="experience" />
    <div class="container">
      <div class="section-header reveal reveal-header">
        <span class="small-label">Where I've Been</span>
        <h2 class="section-heading">My Journey So Far</h2>
        <div class="accent-line"></div>
      </div>

      <div class="timeline">
        <div
          v-for="(exp, index) in experiences"
          :key="exp.id"
          class="timeline-item"
          :class="'reveal reveal-delay-' + ((index % 4) + 1)"
        >
          <div class="timeline-marker">
            <div class="timeline-dot"></div>
            <div v-if="index < experiences.length - 1" class="timeline-line"></div>
          </div>

          <div class="timeline-content">
            <div class="timeline-header">
              <span class="timeline-period">{{ exp.period }}</span>
              <span v-if="exp.type === 'organization'" class="tag" style="font-size: 0.75rem;">
                Organization
              </span>
            </div>
            <h3 class="timeline-title">{{ exp.title }}</h3>
            <p class="timeline-org caption">{{ exp.organization }}</p>
            <p class="timeline-desc body-text">{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BackgroundDecor from './BackgroundDecor.vue'
import { experiences } from '../data/experience.js'
</script>

<style scoped>
.experience-section {
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
}

.timeline {
  max-width: 680px;
}

.timeline-item {
  display: flex;
  gap: 28px;
  position: relative;
}

.timeline-item + .timeline-item {
  margin-top: 8px;
}

/* Marker */
.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 6px;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: var(--radius-full);
  background: var(--accent-soft);
  border: 2.5px solid var(--accent);
  flex-shrink: 0;
  transition: transform var(--transition-fast);
}

.timeline-item:hover .timeline-dot {
  transform: scale(1.3);
  background: var(--accent);
}

.timeline-line {
  width: 2px;
  flex: 1;
  background: var(--border);
  margin-top: 8px;
}

/* Content */
.timeline-content {
  padding-bottom: 40px;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.timeline-item:hover .timeline-content {
  transform: translateX(4px);
}

.timeline-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.timeline-period {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--accent);
}

.timeline-title {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.timeline-org {
  margin-bottom: 8px;
  font-style: italic;
}

.timeline-desc {
  line-height: 1.7;
}

/* Responsive */
@media (max-width: 480px) {
  .timeline-item {
    gap: 20px;
  }

  .timeline-content {
    padding-bottom: 32px;
  }
}
</style>
