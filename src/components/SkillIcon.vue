<template>
  <div class="skill-icon-wrapper">
    <!-- Web Development Icon -->
    <svg v-if="name === 'web'" class="skill-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="8" x2="21" y2="8" />
      <line x1="9" y1="8" x2="9" y2="21" />
      <rect x="12" y="11" width="6" height="7" rx="0.5" class="svg-accent" />
    </svg>

    <!-- Data & Database Icon -->
    <svg v-else-if="name === 'data'" class="skill-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 6a14 14 0 0 1 14 0M5 6v3a14 14 0 0 0 14 0V6M5 6a14 14 0 0 0 14 0" />
      <path d="M5 11a14 14 0 0 1 14 0M5 11v3a14 14 0 0 0 14 0v-3" class="svg-accent" />
      <path d="M5 16a14 14 0 0 1 14 0M5 16v3a14 14 0 0 0 14 0v-3" />
    </svg>

    <!-- Design & UI/UX Icon -->
    <svg v-else-if="name === 'design'" class="skill-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="2" x2="12" y2="22" stroke-dasharray="2 2" opacity="0.4" />
      <line x1="2" y1="12" x2="22" y2="12" stroke-dasharray="2 2" opacity="0.4" />
      <rect x="5" y="5" width="10" height="10" rx="1" />
      <circle cx="14" cy="14" r="5" class="svg-accent" />
    </svg>

    <!-- Tools & Others Icon -->
    <svg v-else-if="name === 'tools'" class="skill-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="9" y="14" width="6" height="6" rx="1" class="svg-accent" />
      <path d="M7 10v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2" />
      <path d="M12 13v1" />
    </svg>

    <!-- Learning: Vue.js -->
    <svg v-else-if="name === 'vue'" class="skill-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="10" y1="16" x2="14" y2="8" class="svg-accent" />
    </svg>

    <!-- Learning: Data Visualization -->
    <svg v-else-if="name === 'dataviz'" class="skill-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <line x1="4" y1="4" x2="4" y2="20" />
      <line x1="4" y1="20" x2="20" y2="20" />
      <rect x="7" y="12" width="3" height="8" rx="0.5" />
      <rect x="12" y="8" width="3" height="12" rx="0.5" class="svg-accent" />
      <rect x="17" y="5" width="3" height="15" rx="0.5" />
    </svg>

    <!-- Learning: UI/UX Design -->
    <svg v-else-if="name === 'uiux'" class="skill-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" class="svg-accent" />
    </svg>

    <!-- Learning: Advanced Front-End -->
    <svg v-else-if="name === 'frontend'" class="skill-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" class="svg-accent" />
      <path d="M19 15l.9 2.6L22.5 18.5l-2.6.9L19 22l-.9-2.6L15.5 18.5l2.6-.9L19 15z" />
      <path d="M5 16l.7 2L7.7 18.7 5.7 19.4 5 21.4l-.7-2L2.3 18.7l2-.7L5 16z" />
    </svg>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.skill-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-svg {
  width: 28px;
  height: 28px;
  color: var(--text-secondary);
  transition: transform var(--transition-base), color var(--transition-base);
}

.svg-accent {
  stroke: var(--text-tertiary);
  transition: stroke var(--transition-base), fill var(--transition-base), opacity var(--transition-base);
  opacity: 0.6;
}

/* Base states for individual shapes in icons */
circle.svg-accent {
  fill: var(--text-tertiary);
  stroke: var(--text-tertiary);
}

path.svg-accent {
  stroke: var(--text-tertiary);
}

rect.svg-accent {
  stroke: var(--text-tertiary);
}

/* Direct classes for parent hover styling integration */
:deep(.svg-accent) {
  stroke: var(--text-tertiary);
  transition: stroke var(--transition-base), fill var(--transition-base), opacity var(--transition-base);
}
</style>
