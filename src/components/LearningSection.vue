<template>
  <section id="learning" class="section learning-section">
    <!-- Floating background decorations -->
    <div class="exploring-decoration explore-bubble explore-bubble-1" aria-hidden="true"></div>
    <div class="exploring-decoration explore-bubble explore-bubble-2" aria-hidden="true"></div>
    <div class="exploring-decoration explore-bubble explore-bubble-3" aria-hidden="true"></div>
    <div class="exploring-decoration explore-bubble explore-bubble-4" aria-hidden="true"></div>
    <div class="exploring-decoration explore-bubble explore-bubble-5" aria-hidden="true"></div>

    <div class="exploring-decoration explore-dot explore-dot-1" aria-hidden="true"></div>
    <div class="exploring-decoration explore-dot explore-dot-2" aria-hidden="true"></div>
    <div class="exploring-decoration explore-dot explore-dot-3" aria-hidden="true"></div>
    <div class="exploring-decoration explore-dot explore-dot-4" aria-hidden="true"></div>
    <div class="exploring-decoration explore-dot explore-dot-5" aria-hidden="true"></div>
    <div class="exploring-decoration explore-dot explore-dot-6" aria-hidden="true"></div>

    <div class="exploring-decoration explore-sparkle explore-sparkle-1" aria-hidden="true"></div>
    <div class="exploring-decoration explore-sparkle explore-sparkle-2" aria-hidden="true"></div>
    <div class="exploring-decoration explore-sparkle explore-sparkle-3" aria-hidden="true"></div>

    <div class="exploring-decoration explore-ring explore-ring-1" aria-hidden="true"></div>
    <div class="exploring-decoration explore-ring explore-ring-2" aria-hidden="true"></div>

    <div class="exploring-decoration explore-orbit" aria-hidden="true">
      <span class="orbit-dot orbit-dot-1"></span>
      <span class="orbit-dot orbit-dot-2"></span>
      <span class="orbit-dot orbit-dot-3"></span>
    </div>

    <div class="container exploring-container">
      <div class="section-header reveal reveal-header">
        <span class="small-label">Always Growing</span>
        <h2 class="section-heading">Currently Exploring</h2>
        <div class="accent-line"></div>
        <p class="section-subheading">
          Hal-hal yang sedang saya pelajari dan eksplorasi untuk mengembangkan kemampuan.
        </p>
      </div>

      <div class="learning-grid">
        <div
          v-for="(topic, index) in learningTopics"
          :key="topic.title"
          class="learning-card card"
          :class="'reveal reveal-delay-' + (index + 1)"
        >
          <div class="learning-icon">
            <SkillIcon :name="topic.icon" />
          </div>
          <div class="learning-info">
            <h4 class="learning-title">{{ topic.title }}</h4>
            <p class="learning-desc caption">{{ topic.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillIcon from './SkillIcon.vue'
import { learningTopics } from '../data/learning.js'
</script>

<style scoped>
.learning-section {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 10% 30%,
      rgba(233, 79, 136, 0.07),
      transparent 25%
    ),
    radial-gradient(
      circle at 90% 70%,
      rgba(233, 79, 136, 0.06),
      transparent 28%
    ),
    #fffcfd;
}

.exploring-decoration {
  position: absolute;
  z-index: 0;
  pointer-events: none;
  user-select: none;
}

.exploring-container {
  position: relative;
  z-index: 2;
}

/* Bubbles */
.explore-bubble {
  border-radius: 50%;
  background:
    radial-gradient(
      circle at 30% 30%,
      rgba(255, 255, 255, 0.9),
      rgba(233, 79, 136, 0.10)
    );
  border: 1px solid rgba(233, 79, 136, 0.08);
  animation: exploreFloat 8s ease-in-out infinite;
}

.explore-bubble-1 {
  width: 80px;
  height: 80px;
  top: 18%;
  left: 5%;
}

.explore-bubble-2 {
  width: 35px;
  height: 35px;
  top: 12%;
  right: 12%;
  animation-delay: -2s;
}

.explore-bubble-3 {
  width: 120px;
  height: 120px;
  right: -45px;
  bottom: 12%;
  opacity: 0.45;
  animation-delay: -4s;
}

.explore-bubble-4 {
  width: 25px;
  height: 25px;
  left: 38%;
  bottom: 8%;
  animation-delay: -5s;
}

.explore-bubble-5 {
  width: 48px;
  height: 48px;
  left: -18px;
  bottom: 28%;
  opacity: 0.55;
  animation-delay: -3s;
  animation-duration: 9.5s;
}

@keyframes exploreFloat {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(10px, -18px, 0); }
}

/* Dots */
.explore-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #e94f88;
  opacity: 0.18;
  animation: dotFloat 6s ease-in-out infinite;
}

.explore-dot-1 { top: 22%; left: 18%; animation-delay: 0s; }
.explore-dot-2 { top: 8%; right: 28%; animation-delay: -1.2s; animation-duration: 7s; }
.explore-dot-3 { top: 45%; left: 3%; animation-delay: -2.4s; }
.explore-dot-4 { bottom: 18%; right: 8%; animation-delay: -0.8s; animation-duration: 6.5s; }
.explore-dot-5 { bottom: 30%; left: 22%; animation-delay: -3.5s; }
.explore-dot-6 { top: 35%; right: 4%; animation-delay: -4.2s; animation-duration: 7.5s; }

@keyframes dotFloat {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.12;
  }
  50% {
    transform: translateY(-12px);
    opacity: 0.28;
  }
}

/* Sparkles */
.explore-sparkle {
  width: 14px;
  height: 14px;
  opacity: 0.3;
  animation: sparkleFloat 5s ease-in-out infinite;
}

.explore-sparkle::before,
.explore-sparkle::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  background: #e94f88;
  transform: translate(-50%, -50%);
}

.explore-sparkle::before {
  width: 2px;
  height: 14px;
}

.explore-sparkle::after {
  width: 14px;
  height: 2px;
}

.explore-sparkle-1 {
  top: 28%;
  right: 6%;
}

.explore-sparkle-2 {
  bottom: 15%;
  left: 10%;
  animation-delay: -1.5s;
  animation-duration: 6s;
}

.explore-sparkle-3 {
  top: 55%;
  left: 6%;
  animation-delay: -3s;
  animation-duration: 5.5s;
}

@keyframes sparkleFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.15;
  }
  50% {
    transform: translateY(-8px) rotate(45deg);
    opacity: 0.4;
  }
}

/* Outline rings */
.explore-ring {
  border-radius: 50%;
  border: 1px solid rgba(233, 79, 136, 0.12);
  animation: ringFloat 9s ease-in-out infinite;
}

.explore-ring-1 {
  width: 55px;
  height: 55px;
  top: 14%;
  left: 42%;
}

.explore-ring-2 {
  width: 38px;
  height: 38px;
  bottom: 10%;
  right: 22%;
  border-radius: 10px;
  animation-name: ringFloatSquare;
  animation-delay: -3s;
}

@keyframes ringFloat {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-8px, -12px) rotate(20deg); }
}

@keyframes ringFloatSquare {
  0%, 100% { transform: translate(0, 0) rotate(20deg); }
  50% { transform: translate(-8px, -12px) rotate(35deg); }
}

/* Orbit */
.explore-orbit {
  width: 70px;
  height: 70px;
  top: 60%;
  right: 5%;
  border: 1px dashed rgba(233, 79, 136, 0.12);
  border-radius: 50%;
  animation: orbitRotate 18s linear infinite;
}

.orbit-dot {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #e94f88;
  opacity: 0.35;
}

.orbit-dot-1 {
  top: -2px;
  left: 50%;
  transform: translateX(-50%);
}

.orbit-dot-2 {
  bottom: 10px;
  right: -2px;
}

.orbit-dot-3 {
  bottom: 8px;
  left: 6px;
}

@keyframes orbitRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Cards — unchanged layout */
.learning-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.learning-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 24px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.learning-card:hover {
  transform: translateY(-4px);
  border-color: rgba(233, 79, 136, 0.25);
  box-shadow: 0 12px 30px rgba(30, 30, 50, 0.07);
}

.learning-icon {
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: #fce8f0;
  border: 1px solid #f1dde5;
  color: #e94f88;
  transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
}

.learning-icon :deep(.skill-svg) {
  width: 20px;
  height: 20px;
  color: #e94f88;
}

.learning-icon :deep(.svg-accent) {
  stroke: #e94f88;
  opacity: 0.75;
}

.learning-icon :deep(circle.svg-accent) {
  fill: #e94f88;
  stroke: #e94f88;
}

.learning-card:hover .learning-icon {
  transform: scale(1.05);
  border-color: rgba(233, 79, 136, 0.35);
  background: #fff5f8;
}

.learning-title {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.learning-desc {
  line-height: 1.5;
}

@media (max-width: 768px) {
  .learning-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .explore-bubble {
    opacity: 0.35;
  }

  .explore-dot {
    opacity: 0.12;
  }

  .explore-sparkle {
    opacity: 0.18;
  }

  .explore-ring {
    opacity: 0.25;
  }

  .explore-orbit {
    opacity: 0.25;
  }

  .explore-bubble-5,
  .explore-sparkle-3,
  .explore-ring-1 {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .explore-bubble,
  .explore-dot,
  .explore-sparkle,
  .explore-ring,
  .explore-orbit {
    animation: none !important;
  }
}
</style>
