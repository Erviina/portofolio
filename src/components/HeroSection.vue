<template>
  <section id="home" class="hero">
    <!-- Background decorations -->
    <div class="parallax-soft" data-parallax-speed="0.03" aria-hidden="true">
      <div class="hero-decoration hero-decoration-1 hero-orb"></div>
    </div>
    <div class="parallax-soft" data-parallax-speed="0.05" aria-hidden="true">
      <div class="hero-decoration hero-decoration-2 hero-orb-small"></div>
    </div>
    <div class="parallax-soft" data-parallax-speed="0.04" aria-hidden="true">
      <div class="hero-decoration hero-decoration-3 hero-square"></div>
    </div>
    <div class="hero-decoration hero-decoration-4 hero-orb-small" aria-hidden="true"></div>
    <div class="parallax-soft" data-parallax-speed="0.02" aria-hidden="true">
      <div class="hero-decoration hero-decoration-5 hero-dots"></div>
    </div>
    <div class="hero-decoration hero-decoration-6 hero-orb" aria-hidden="true"></div>
    <div class="hero-decoration hero-decoration-7 hero-square" aria-hidden="true"></div>

    <div class="hero-content container">
      <!-- Left — Text -->
      <div class="hero-text-col">
        <span class="hero-eyebrow hero-enter" style="--enter-delay: 0ms">Hello, I'm</span>

        <h1 class="hero-title hero-enter hero-title-animated" style="--enter-delay: 100ms">
          Ervina
          <span>Kusnanda</span>
        </h1>

        <p class="hero-role hero-enter" style="--enter-delay: 200ms">
          Front-End Developer &amp; Data Enthusiast
        </p>

        <p class="hero-description hero-enter" style="--enter-delay: 200ms">
          Saya adalah mahasiswa Ilmu Komputer di Universitas Pendidikan Indonesia yang tertarik pada pengembangan web dan analisis data. Saya senang mengeksplorasi teknologi, membangun solusi digital, dan memahami bagaimana sebuah sistem dapat bekerja secara efektif.
        </p>

        <div class="hero-buttons hero-enter" style="--enter-delay: 400ms">
          <a href="#projects" class="btn-primary" @click.prevent="scrollToProjects">
            Explore My Projects
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="/documents/cv.pdf" download class="btn-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>

        <div class="hero-social hero-enter" style="--enter-delay: 480ms">
          <a href="#contact" class="social-link" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.395-.135-.345-.72-1.395-1.23-1.665-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="#contact" class="social-link" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="#contact" class="social-link" aria-label="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Right — Profile Image -->
      <div class="hero-image-col">
        <div class="hero-image-wrapper">
          <div class="hero-image-glow" aria-hidden="true"></div>

          <div
            ref="photoWrapper"
            class="hero-image-motion hero-enter"
            style="--enter-delay: 250ms"
            @mousemove="onPhotoMove"
            @mouseleave="onPhotoLeave"
          >
            <div class="hero-image-frame">
              <div class="hero-image-tilt" :style="photoTiltStyle">
                <img
                  src="../assets/profile/ervina.jpeg"
                  alt="Ervina Kusnanda"
                  class="hero-image"
                />
              </div>
            </div>
          </div>

          <div class="profile-badge profile-badge-1 hero-enter" style="--enter-delay: 300ms">
            <span class="badge-dot" aria-hidden="true">●</span>
            <div class="badge-text">
              <span class="badge-label">Open to Learn</span>
              <span class="badge-value">Computer Science Student</span>
            </div>
          </div>

          <div class="profile-badge profile-badge-2 hero-enter" style="--enter-delay: 360ms">
            <span class="badge-icon" aria-hidden="true">⌖</span>
            <div class="badge-text">
              <span class="badge-label">Based in</span>
              <span class="badge-value">Bandung, Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll-indicator hero-enter" style="--enter-delay: 600ms" aria-hidden="true">
      <span>Scroll to explore</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const photoWrapper = ref(null)
const photoTilt = ref({ x: 0, y: 0 })
const canTrackPhoto = ref(false)

onMounted(() => {
  canTrackPhoto.value =
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
})

const photoTiltStyle = computed(() => ({
  '--photo-tilt-x': `${photoTilt.value.x}px`,
  '--photo-tilt-y': `${photoTilt.value.y}px`
}))

function onPhotoMove(event) {
  if (!canTrackPhoto.value || !photoWrapper.value) return

  const rect = photoWrapper.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  const offsetX = (event.clientX - centerX) / (rect.width / 2)
  const offsetY = (event.clientY - centerY) / (rect.height / 2)

  photoTilt.value = {
    x: offsetX * 5,
    y: offsetY * 5
  }
}

function onPhotoLeave() {
  photoTilt.value = { x: 0, y: 0 }
}

function scrollToProjects() {
  const el = document.getElementById('projects')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 720px;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 75% 35%,
      rgba(233, 79, 136, 0.10),
      transparent 32%
    ),
    #fffcfd;
  padding-top: var(--navbar-height);
}

/* Decorations */
.parallax-soft {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.hero-decoration {
  position: absolute;
  pointer-events: none;
  user-select: none;
  z-index: 1;
}

.hero-orb {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.8),
    rgba(233, 79, 136, 0.18)
  );
  filter: blur(1px);
  animation: floatOrb 9s ease-in-out infinite;
}

.hero-orb-small {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(233, 79, 136, 0.18);
  animation: floatSmall 8s ease-in-out infinite;
}

.hero-square {
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: rgba(233, 79, 136, 0.08);
  transform: rotate(25deg);
  animation: floatSquare 11s ease-in-out infinite;
}

.hero-dots {
  width: 100px;
  height: 100px;
  background-image: radial-gradient(
    rgba(233, 79, 136, 0.25) 1.5px,
    transparent 1.5px
  );
  background-size: 14px 14px;
  opacity: 0.6;
  animation: floatSoftDots 12s ease-in-out infinite;
}

.hero-decoration-1 { top: 18%; left: 7%; }
.hero-decoration-2 { top: 25%; right: 8%; animation-delay: 0.5s; }
.hero-decoration-3 { bottom: 20%; left: 42%; animation-delay: 1s; }
.hero-decoration-4 { bottom: 10%; right: 25%; animation-delay: 1.5s; }
.hero-decoration-5 { top: 12%; right: 30%; }
.hero-decoration-6 { bottom: 30%; left: 5%; width: 60px; height: 60px; animation-delay: 2s; }
.hero-decoration-7 { top: 55%; right: 12%; animation-delay: 0.8s; }

@keyframes floatOrb {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(6px, -12px, 0); }
}

@keyframes floatSmall {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(8px, -10px, 0); }
}

@keyframes floatSquare {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(25deg); }
  50% { transform: translate3d(-8px, -10px, 0) rotate(32deg); }
}

@keyframes floatSoftDots {
  0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.55; }
  50% { transform: translate3d(5px, -8px, 0); opacity: 0.7; }
}

/* Hero entrance */
.hero-enter {
  opacity: 0;
  transform: translate3d(0, 20px, 0);
  animation: heroEnter 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: var(--enter-delay, 0ms);
}

@keyframes heroEnter {
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

/* Content grid */
.hero-content {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  min-height: 720px;
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  align-items: center;
  gap: 60px;
  padding: 100px 32px 80px;
}

/* Text */
.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-heading);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #e94f88;
  margin-bottom: 18px;
}

.hero-title {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(56px, 7vw, 92px);
  line-height: 0.95;
  font-weight: 800;
  letter-spacing: -0.055em;
  color: #20232a;
}

.hero-title-animated.hero-enter {
  position: relative;
  overflow: hidden;
  animation:
    heroEnter 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards,
    heroTitleFloat 9s ease-in-out 1.1s infinite;
}

.hero-title-animated.hero-enter::after {
  content: '';
  position: absolute;
  top: -10%;
  left: 0;
  width: 45%;
  height: 120%;
  background: linear-gradient(
    100deg,
    transparent 0%,
    rgba(255, 255, 255, 0.08) 35%,
    rgba(255, 255, 255, 0.42) 50%,
    rgba(255, 255, 255, 0.08) 65%,
    transparent 100%
  );
  transform: translate3d(-160%, 0, 0) skewX(-14deg);
  animation: heroTitleShine 11s ease-in-out 2.8s infinite;
  pointer-events: none;
  z-index: 1;
}

@keyframes heroTitleFloat {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -4px, 0); }
}

@keyframes heroTitleShine {
  0%, 72%, 100% {
    transform: translate3d(-160%, 0, 0) skewX(-14deg);
    opacity: 0;
  }
  78% { opacity: 1; }
  88% {
    transform: translate3d(220%, 0, 0) skewX(-14deg);
    opacity: 1;
  }
  94% { opacity: 0; }
}

.hero-title span {
  display: block;
  color: #e94f88;
}

.hero-role {
  margin-top: 28px;
  font-family: var(--font-heading);
  font-size: 17px;
  font-weight: 600;
  color: #20232a;
}

.hero-role::before {
  content: "";
  display: inline-block;
  width: 35px;
  height: 2px;
  margin-right: 12px;
  vertical-align: middle;
  background: #e94f88;
}

.hero-description {
  max-width: 520px;
  margin-top: 20px;
  font-size: 15px;
  line-height: 1.8;
  color: #73737c;
}

/* Buttons */
.hero-buttons {
  margin-top: 32px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  border-radius: 12px;
  background: #e94f88;
  color: white;
  font-weight: 600;
  font-size: 0.9375rem;
  box-shadow: 0 10px 25px rgba(233, 79, 136, 0.22);
  transition:
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease,
    background 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(233, 79, 136, 0.28);
  background: #d84278;
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-primary svg {
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.btn-primary:hover svg {
  transform: translateX(3px);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #f1dde5;
  color: #20232a;
  font-weight: 600;
  font-size: 0.9375rem;
  transition:
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease;
}

.btn-secondary:hover {
  transform: translateY(-2px);
  border-color: #e94f88;
  background: #fff7fa;
  box-shadow: 0 8px 20px rgba(30, 30, 50, 0.06);
}

.btn-secondary:active {
  transform: translateY(0);
}

.btn-secondary svg {
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.btn-secondary:hover svg {
  transform: translateY(2px);
}

/* Social links */
.hero-social {
  margin-top: 28px;
  display: flex;
  gap: 12px;
}

.social-link {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: white;
  border: 1px solid #f1dde5;
  color: #20232a;
  transition:
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px);
  background: #e94f88;
  color: white;
  border-color: #e94f88;
}

/* Profile image */
.hero-image-col {
  display: flex;
  justify-content: center;
}

.hero-image-wrapper {
  position: relative;
  width: min(440px, 100%);
  margin: 0 auto;
}

.hero-image-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: rgba(233, 79, 136, 0.12);
  filter: blur(60px);
  z-index: -1;
}

.hero-image-motion {
  position: relative;
  width: 100%;
}

.hero-image-frame {
  position: relative;
  overflow: hidden;
  border-radius: 48% 48% 42% 42%;
  border: 1px solid rgba(233, 79, 136, 0.25);
  background: linear-gradient(145deg, #ffffff, #fce8f0);
  box-shadow: 0 30px 70px rgba(233, 79, 136, 0.13);
  animation: heroPhotoFloat 8.5s ease-in-out 1.2s infinite;
  will-change: transform;
}

.hero-image-tilt {
  transform: translate3d(var(--photo-tilt-x, 0), var(--photo-tilt-y, 0), 0);
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes heroPhotoFloat {
  0%, 100% {
    transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
  }
  50% {
    transform: translate3d(0, -7px, 0) rotate(0.8deg) scale(1.006);
  }
}

.hero-image {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.hero-image-wrapper:hover .hero-image {
  transform: scale(1.025);
}

/* Profile badges */
.profile-badge {
  position: absolute;
  padding: 12px 16px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 15px 35px rgba(30, 30, 50, 0.08);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile-badge:hover {
  transform: translateY(-4px);
}

.profile-badge-1 {
  top: 8%;
  left: -8%;
}

.profile-badge-2 {
  bottom: 12%;
  right: -6%;
}

.badge-dot {
  color: #e94f88;
  font-size: 10px;
  line-height: 1;
}

.badge-icon {
  color: #e94f88;
  font-size: 16px;
  line-height: 1;
}

.badge-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.badge-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #999;
}

.badge-value {
  font-size: 12px;
  font-weight: 600;
  color: #20232a;
  white-space: nowrap;
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #999;
  z-index: 10;
}

.scroll-indicator svg {
  animation: scrollBounce 1.8s ease-in-out infinite;
}

@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

/* Responsive */
@media (max-width: 1023px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: auto;
    gap: 50px;
    padding: 80px 32px 90px;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-role::before {
    display: none;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-social {
    justify-content: center;
  }

  .hero-image-wrapper {
    max-width: 380px;
  }

  .profile-badge-1 {
    left: -2%;
  }

  .profile-badge-2 {
    right: -2%;
  }
}

@media (max-width: 640px) {
  .hero {
    min-height: auto;
  }

  .hero-content {
    min-height: auto;
    padding: 100px 20px 70px;
    gap: 50px;
  }

  .hero-title {
    font-size: clamp(48px, 16vw, 68px);
  }

  .hero-role {
    font-size: 14px;
  }

  .hero-description {
    font-size: 14px;
  }

  .hero-image-wrapper {
    max-width: 320px;
  }

  .profile-badge {
    transform: scale(0.85);
  }

  .profile-badge:hover {
    transform: scale(0.85) translateY(-4px);
  }

  .hero-decoration {
    opacity: 0.5;
  }

  .scroll-indicator {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-orb,
  .hero-orb-small,
  .hero-square,
  .hero-dots,
  .scroll-indicator svg {
    animation: none !important;
  }

  .hero-enter {
    opacity: 1 !important;
    transform: none !important;
    animation: none !important;
  }

  .hero-title-animated.hero-enter::after {
    display: none;
  }

  .hero-image-frame {
    animation: none !important;
    transform: none !important;
  }

  .hero-image-tilt {
    transform: none !important;
    transition: none !important;
  }
}
</style>
