<template>
  <section id="skills" class="section skills-section">
    <!-- Background decorations -->
    <div class="skills-decoration skills-bg-grid" aria-hidden="true"></div>
    <div class="parallax-soft skills-parallax" data-parallax-speed="0.04" aria-hidden="true">
      <div class="skills-decoration skills-orb skills-orb-1"></div>
    </div>
    <div class="parallax-soft skills-parallax" data-parallax-speed="0.05" aria-hidden="true">
      <div class="skills-decoration skills-orb skills-orb-2"></div>
    </div>
    <div class="skills-decoration skills-orb skills-orb-3" aria-hidden="true"></div>
    <div class="skills-decoration skills-dots skills-dots-1" aria-hidden="true"></div>
    <div class="skills-decoration skills-dots skills-dots-2" aria-hidden="true"></div>
    <div class="skills-decoration skills-shape skills-shape-square" aria-hidden="true"></div>
    <div class="skills-decoration skills-shape skills-shape-circle" aria-hidden="true"></div>
    <div class="skills-decoration skills-sparkle" aria-hidden="true">✦</div>

    <div class="container skills-container">
      <div class="section-header reveal reveal-header">
        <span class="small-label">What I Work With</span>
        <h2 class="section-heading">Skills & Technologies</h2>
        <div class="accent-line"></div>
        <p class="section-subheading">
          Teknologi dan tools yang saya gunakan dalam mengerjakan project dan membangun solusi digital.
        </p>
      </div>

      <div class="skills-grid">
        <SkillCard
          v-for="(category, index) in skillCategories"
          :key="category.title"
          :category="category"
          :delay="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillCard from './SkillCard.vue'
import { skillCategories } from '../data/skills.js'
</script>

<style scoped>
.skills-section {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 8% 20%,
      rgba(233, 79, 136, 0.07),
      transparent 28%
    ),
    radial-gradient(
      circle at 92% 75%,
      rgba(233, 79, 136, 0.055),
      transparent 30%
    ),
    #fffcfd;
}

.skills-decoration {
  position: absolute;
  pointer-events: none;
  z-index: 0;
  user-select: none;
}

.skills-parallax {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.skills-container {
  position: relative;
  z-index: 2;
}

/* Subtle grid texture */
.skills-bg-grid {
  inset: 0;
  background-image:
    linear-gradient(
      rgba(233, 79, 136, 0.025) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(233, 79, 136, 0.025) 1px,
      transparent 1px
    );
  background-size: 55px 55px;
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 15%,
    black 85%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent,
    black 15%,
    black 85%,
    transparent
  );
}

/* Floating orbs */
.skills-orb {
  border-radius: 50%;
  background:
    radial-gradient(
      circle at 35% 35%,
      rgba(255, 255, 255, 0.9),
      rgba(233, 79, 136, 0.10)
    );
  filter: blur(1px);
  animation: skillsFloat 7s ease-in-out infinite;
}

.skills-orb-1 {
  width: 100px;
  height: 100px;
  top: 12%;
  left: -40px;
}

.skills-orb-2 {
  width: 55px;
  height: 55px;
  right: 10%;
  top: 20%;
  animation-delay: -2s;
}

.skills-orb-3 {
  width: 120px;
  height: 120px;
  right: -50px;
  bottom: 8%;
  opacity: 0.5;
  animation-delay: -4s;
}

@keyframes skillsFloat {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -14px, 0); }
}

/* Dotted patterns */
.skills-dots {
  width: 90px;
  height: 90px;
  background-image:
    radial-gradient(
      rgba(233, 79, 136, 0.20) 1.5px,
      transparent 1.5px
    );
  background-size: 13px 13px;
  opacity: 0.5;
}

.skills-dots-1 {
  top: 18%;
  right: 4%;
}

.skills-dots-2 {
  bottom: 12%;
  left: 6%;
}

/* Geometric shapes */
.skills-shape {
  border: 1px solid rgba(233, 79, 136, 0.16);
  opacity: 0.7;
  animation: skillsShapeFloat 8s ease-in-out infinite;
}

.skills-shape-square {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  transform: rotate(25deg);
  top: 55%;
  left: 48%;
}

.skills-shape-circle {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  bottom: 22%;
  right: 18%;
  animation-name: skillsShapeFloatCircle;
}

@keyframes skillsShapeFloat {
  0%, 100% { transform: translateY(0) rotate(25deg); }
  50% { transform: translateY(-10px) rotate(35deg); }
}

@keyframes skillsShapeFloatCircle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.skills-sparkle {
  top: 38%;
  left: 3%;
  font-size: 10px;
  color: rgba(233, 79, 136, 0.35);
  animation: skillsFloat 6s ease-in-out infinite;
  animation-delay: -1s;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .skills-orb {
    opacity: 0.4;
  }

  .skills-dots {
    opacity: 0.25;
  }

  .skills-shape {
    opacity: 0.35;
  }

  .skills-sparkle {
    opacity: 0.25;
  }

  .skills-shape-square {
    display: none;
  }
}

@media (max-width: 480px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .skills-orb,
  .skills-shape,
  .skills-sparkle {
    animation: none !important;
  }
}
</style>
