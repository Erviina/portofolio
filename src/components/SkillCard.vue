<template>
  <div
    class="skill-card card"
    :class="[
      'reveal',
      delay > 0 ? 'reveal-delay-' + delay : '',
      'skill-card--' + category.icon
    ]"
  >
    <!-- Mini abstract floating visual -->
    <div
      class="card-visual"
      :class="'card-visual--' + category.icon"
      :style="{ animationDelay: visualDelay }"
      aria-hidden="true"
    >
      <!-- Web Development: mini browser/code -->
      <template v-if="category.icon === 'web' || category.icon === 'vue'">
        <div class="visual-browser">
          <div class="browser-bar">
            <span class="browser-dot"></span>
            <span class="browser-dot"></span>
            <span class="browser-dot"></span>
          </div>
          <div class="browser-body">
            <span class="code-brackets">&lt;/&gt;</span>
            <span class="code-line code-line-1"></span>
            <span class="code-line code-line-2"></span>
            <span class="code-line code-line-3"></span>
          </div>
        </div>
      </template>

      <!-- Data & Database: network + cylinder -->
      <template v-else-if="category.icon === 'data'">
        <svg class="visual-network" viewBox="0 0 90 80" fill="none">
          <ellipse cx="45" cy="58" rx="14" ry="5" class="db-ellipse" />
          <path d="M31 58v10c0 2.8 6.3 5 14 5s14-2.2 14-5V58" class="db-body" />
          <ellipse cx="45" cy="58" rx="14" ry="5" class="db-top" />
          <circle cx="22" cy="22" r="4" class="net-node net-node-a" />
          <circle cx="68" cy="18" r="3.5" class="net-node net-node-b" />
          <circle cx="48" cy="32" r="3" class="net-node net-node-c" />
          <circle cx="30" cy="42" r="2.5" class="net-node net-node-d" />
          <line x1="22" y1="22" x2="48" y2="32" class="net-line" />
          <line x1="68" y1="18" x2="48" y2="32" class="net-line" />
          <line x1="48" y1="32" x2="30" y2="42" class="net-line" />
          <line x1="30" y1="42" x2="40" y2="53" class="net-line" />
          <circle cx="58" cy="40" r="1.5" class="data-dot data-dot-1" />
          <circle cx="38" cy="20" r="1.2" class="data-dot data-dot-2" />
        </svg>
      </template>

      <!-- Design & UI/UX: wireframe -->
      <template v-else-if="category.icon === 'design'">
        <div class="visual-wireframe">
          <div class="wf-frame">
            <span class="wf-header-line"></span>
            <div class="wf-boxes">
              <span class="wf-box wf-box-a"></span>
              <span class="wf-box wf-box-b"></span>
            </div>
            <span class="wf-footer-line"></span>
            <span class="wf-cursor"></span>
          </div>
        </div>
      </template>

      <!-- Tools & Others: workflow / branch -->
      <template v-else-if="category.icon === 'tools'">
        <svg class="visual-workflow" viewBox="0 0 90 70" fill="none">
          <circle cx="14" cy="20" r="4" class="wf-node wf-node-1" />
          <circle cx="48" cy="20" r="4" class="wf-node wf-node-2" />
          <circle cx="48" cy="48" r="4" class="wf-node wf-node-3" />
          <circle cx="76" cy="48" r="3.5" class="wf-node wf-node-4" />
          <line x1="18" y1="20" x2="44" y2="20" class="wf-connector" />
          <line x1="48" y1="24" x2="48" y2="44" class="wf-connector" />
          <line x1="52" y1="48" x2="72" y2="48" class="wf-connector" />
          <rect x="58" y="10" width="22" height="16" rx="3" class="term-box" />
          <line x1="62" y1="15" x2="72" y2="15" class="term-line term-line-1" />
          <line x1="62" y1="20" x2="76" y2="20" class="term-line term-line-2" />
        </svg>
      </template>
    </div>

    <div class="skill-card-content">
      <SkillIcon :name="category.icon" class="skill-card-icon" />
      <h3 class="skill-card-title">{{ category.title }}</h3>
      <span class="skill-accent-line" aria-hidden="true"></span>
      <ul class="skill-card-list">
        <li v-for="item in category.items" :key="item" class="skill-item">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import SkillIcon from './SkillIcon.vue'

const props = defineProps({
  category: {
    type: Object,
    required: true
  },
  delay: {
    type: Number,
    default: 0
  }
})

const visualDelay = computed(() => `${props.delay * -1.4}s`)
</script>

<style scoped>
.skill-card {
  position: relative;
  overflow: hidden;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background:
    radial-gradient(
      circle at 85% 85%,
      rgba(233, 79, 136, 0.045),
      transparent 35%
    ),
    #ffffff;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transform: translate3d(0, 35px, 0) scale(0.98);
  transition:
    opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.35s ease,
    box-shadow 0.35s ease;
}

.skill-card.revealed {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
}

.skill-card.revealed:hover {
  border-color: rgba(233, 79, 136, 0.35);
  transform: translate3d(0, -5px, 0) scale(1);
  box-shadow: 0 18px 40px rgba(30, 30, 50, 0.08);
}

.skill-card-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.skill-card-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  background: var(--bg-primary);
  border: 1.5px solid var(--border-light);
  margin-bottom: 16px;
  transition: transform var(--transition-base), border-color var(--transition-base), background var(--transition-base);
}

.skill-card:hover .skill-card-icon {
  border-color: var(--accent-soft);
  background: var(--accent-light);
}

.skill-card:hover .skill-card-icon :deep(.skill-svg) {
  color: var(--text-primary);
  transform: scale(1.05) translateY(-2px);
}

.skill-card:hover .skill-card-icon :deep(.svg-accent) {
  stroke: var(--accent);
  opacity: 1;
}

.skill-card:hover .skill-card-icon :deep(circle.svg-accent) {
  fill: var(--accent);
  stroke: var(--accent);
}

.skill-card:hover .skill-card-icon :deep(rect.svg-accent) {
  stroke: var(--accent);
  fill: var(--accent-soft);
}

.skill-card-title {
  font-family: var(--font-heading);
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0;
}

.skill-card-desc {
  line-height: 1.5;
  margin-top: 8px;
}

.skill-accent-line {
  display: block;
  width: 28px;
  height: 2px;
  background: #e94f88;
  border-radius: 2px;
  margin: 10px 0 14px;
  transition: width 0.3s ease;
}

.skill-card:hover .skill-accent-line {
  width: 45px;
}

.skill-card-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skill-item {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  padding-left: 16px;
  position: relative;
  transition: color var(--transition-fast);
}

.skill-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  border-radius: var(--radius-full);
  background: var(--accent-soft);
  transition: background var(--transition-fast);
}

.skill-card:hover .skill-item::before {
  background: var(--accent);
}

/* ========================================
   MINI FLOATING VISUALS
   ======================================== */
.card-visual {
  position: absolute;
  right: 10px;
  bottom: 12px;
  z-index: 1;
  width: 110px;
  height: 95px;
  opacity: 0.55;
  pointer-events: none;
  animation: cardVisualFloat 6s ease-in-out infinite;
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.card-visual::before {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(233, 79, 136, 0.06);
  filter: blur(25px);
  pointer-events: none;
  right: -10px;
  bottom: -10px;
}

.skill-card:hover .card-visual {
  opacity: 0.85;
}

@keyframes cardVisualFloat {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(4px, -6px, 0); }
}

/* --- Web: browser --- */
.visual-browser {
  position: relative;
  width: 96px;
  height: 72px;
  border: 1px solid rgba(233, 79, 136, 0.16);
  border-radius: 10px;
  background: rgba(252, 232, 240, 0.35);
  overflow: hidden;
  transition: transform 0.35s ease;
}

.skill-card:hover .visual-browser {
  transform: translateY(-4px);
}

.browser-bar {
  display: flex;
  gap: 4px;
  padding: 7px 8px;
  border-bottom: 1px solid rgba(233, 79, 136, 0.1);
}

.browser-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(233, 79, 136, 0.28);
  transition: transform 0.35s ease;
}

.skill-card:hover .browser-dot:nth-child(2) {
  transform: translateX(2px);
}

.skill-card:hover .browser-dot:nth-child(3) {
  transform: translateX(3px);
}

.browser-body {
  position: relative;
  padding: 10px 10px 8px;
}

.code-brackets {
  position: absolute;
  left: 10px;
  top: 12px;
  font-size: 9px;
  font-weight: 700;
  color: rgba(233, 79, 136, 0.35);
  letter-spacing: -0.02em;
}

.code-line {
  display: block;
  height: 3px;
  border-radius: 2px;
  background: rgba(115, 115, 124, 0.18);
  margin-left: 28px;
  margin-bottom: 6px;
  transition: transform 0.4s ease, width 0.4s ease;
}

.code-line-1 { width: 42px; }
.code-line-2 { width: 52px; }
.code-line-3 { width: 34px; margin-left: 10px; }

.skill-card:hover .code-line-1 {
  transform: translateX(3px);
}

.skill-card:hover .code-line-2 {
  transform: translateX(-2px);
}

.skill-card:hover .code-line-3 {
  transform: translateX(4px);
}

/* --- Data: network --- */
.visual-network {
  width: 100px;
  height: 88px;
}

.db-ellipse,
.db-body,
.db-top {
  stroke: rgba(233, 79, 136, 0.28);
  stroke-width: 1.2;
  fill: rgba(252, 232, 240, 0.25);
}

.db-body {
  fill: none;
}

.net-line {
  stroke: rgba(233, 79, 136, 0.2);
  stroke-width: 1;
}

.net-node {
  fill: rgba(233, 79, 136, 0.22);
  stroke: rgba(233, 79, 136, 0.35);
  stroke-width: 1;
  transition: transform 0.4s ease;
}

.net-node-a { animation: nodeNudge 5s ease-in-out infinite; }
.net-node-b { animation: nodeNudge 6.5s ease-in-out infinite reverse; animation-delay: -1s; }
.net-node-c { animation: nodeNudge 7s ease-in-out infinite; animation-delay: -2s; }

@keyframes nodeNudge {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(1.5px, -2px); }
}

.data-dot {
  fill: rgba(233, 79, 136, 0.35);
}

.data-dot-1 {
  animation: dataDotMove 7s ease-in-out infinite;
}

.data-dot-2 {
  animation: dataDotMove 8s ease-in-out infinite reverse;
  animation-delay: -2s;
}

@keyframes dataDotMove {
  0%, 100% { transform: translate(0, 0); opacity: 0.35; }
  50% { transform: translate(4px, -3px); opacity: 0.7; }
}

.skill-card:hover .net-node {
  fill: rgba(233, 79, 136, 0.35);
}

/* --- Design: wireframe --- */
.visual-wireframe {
  width: 100px;
  height: 80px;
}

.wf-frame {
  position: relative;
  width: 92px;
  height: 72px;
  border: 1px solid rgba(233, 79, 136, 0.18);
  border-radius: 10px;
  padding: 10px 8px;
  background: rgba(252, 232, 240, 0.2);
  transition: border-color 0.3s ease;
}

.skill-card:hover .wf-frame {
  border-color: rgba(233, 79, 136, 0.32);
}

.wf-header-line {
  display: block;
  width: 36px;
  height: 3px;
  border-radius: 2px;
  background: rgba(115, 115, 124, 0.2);
  margin-bottom: 10px;
}

.wf-boxes {
  display: flex;
  gap: 6px;
  margin-bottom: 10px;
}

.wf-box {
  display: block;
  height: 28px;
  border: 1px solid rgba(233, 79, 136, 0.2);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.5);
  transition: transform 0.35s ease;
}

.wf-box-a { width: 38px; }
.wf-box-b { width: 28px; }

.skill-card:hover .wf-box-a {
  transform: translate(2px, -2px);
}

.skill-card:hover .wf-box-b {
  transform: translate(-1px, 2px);
}

.wf-footer-line {
  display: block;
  width: 54px;
  height: 3px;
  border-radius: 2px;
  background: rgba(115, 115, 124, 0.16);
}

.wf-cursor {
  position: absolute;
  right: 14px;
  bottom: 14px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 9px solid rgba(233, 79, 136, 0.4);
  transform: rotate(35deg);
  transition: transform 0.4s ease;
}

.skill-card:hover .wf-cursor {
  transform: rotate(35deg) translate(4px, -5px);
}

/* --- Tools: workflow --- */
.visual-workflow {
  width: 100px;
  height: 75px;
}

.wf-connector {
  stroke: rgba(233, 79, 136, 0.22);
  stroke-width: 1.2;
}

.wf-node {
  fill: rgba(233, 79, 136, 0.2);
  stroke: rgba(233, 79, 136, 0.35);
  stroke-width: 1;
}

.wf-node-1 { animation: nodeNudge 6s ease-in-out infinite; }
.wf-node-2 { animation: nodeNudge 7s ease-in-out infinite reverse; animation-delay: -1.5s; }
.wf-node-3 { animation: nodeNudge 5.5s ease-in-out infinite; animation-delay: -0.8s; }
.wf-node-4 { animation: nodeNudge 8s ease-in-out infinite; animation-delay: -2.2s; }

.term-box {
  stroke: rgba(233, 79, 136, 0.22);
  fill: rgba(252, 232, 240, 0.3);
  transition: opacity 0.35s ease;
  opacity: 0.7;
}

.term-line {
  stroke: rgba(233, 79, 136, 0.3);
  stroke-width: 1.2;
  stroke-linecap: round;
  opacity: 0.5;
  transition: opacity 0.35s ease, stroke-dashoffset 0.4s ease;
}

.skill-card:hover .term-box,
.skill-card:hover .term-line {
  opacity: 1;
}

.skill-card:hover .wf-node {
  fill: rgba(233, 79, 136, 0.32);
}

/* Responsive */
@media (max-width: 1024px) {
  .card-visual {
    width: 90px;
    height: 80px;
    opacity: 0.4;
    right: 6px;
    bottom: 8px;
  }
}

@media (max-width: 640px) {
  .card-visual {
    opacity: 0.32;
    transform: scale(0.85);
    transform-origin: bottom right;
    animation-duration: 8s;
  }

  .skill-card:hover .card-visual {
    opacity: 0.5;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card-visual,
  .net-node-a,
  .net-node-b,
  .net-node-c,
  .data-dot-1,
  .data-dot-2,
  .wf-node-1,
  .wf-node-2,
  .wf-node-3,
  .wf-node-4 {
    animation: none !important;
  }
}
</style>
