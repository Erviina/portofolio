<template>
  <section id="about" class="section about-section">
    <!-- Background decorations -->
    <div class="about-decoration about-bg-grid" aria-hidden="true"></div>
    <div class="parallax-soft about-parallax" data-parallax-speed="0.04" aria-hidden="true">
      <div class="about-decoration about-orb about-orb-1"></div>
    </div>
    <div class="parallax-soft about-parallax" data-parallax-speed="0.06" aria-hidden="true">
      <div class="about-decoration about-orb about-orb-2"></div>
    </div>
    <div class="parallax-soft about-parallax" data-parallax-speed="0.03" aria-hidden="true">
      <div class="about-decoration about-orb about-orb-3"></div>
    </div>
    <div class="about-decoration about-dots about-dots-1" aria-hidden="true"></div>
    <div class="about-decoration about-dots about-dots-2" aria-hidden="true"></div>
    <div class="about-decoration about-shape about-shape-square" aria-hidden="true"></div>
    <div class="about-decoration about-shape about-shape-circle" aria-hidden="true"></div>
    <div class="about-decoration about-sparkle" aria-hidden="true">✦</div>
    <div class="about-decoration about-accent" aria-hidden="true"></div>

    <div class="container about-container">
      <div class="about-grid">
        <!-- Left: Text content -->
        <div class="about-content">
          <div class="section-header reveal reveal-header">
            <span class="small-label">Get to Know Me</span>
            <h2 class="section-heading">A Little About Me</h2>
            <div class="accent-line"></div>
          </div>

          <p class="about-text body-text reveal reveal-delay-1">
            Saya merupakan mahasiswa Ilmu Komputer di Universitas Pendidikan Indonesia dengan ketertarikan pada pengembangan web, analisis data, dan perancangan solusi digital. Saya menikmati proses mengubah ide dan permasalahan menjadi solusi yang fungsional, mulai dari merancang antarmuka hingga mengolah data untuk memperoleh informasi yang bermakna.
          </p>

          <p class="about-text body-text reveal reveal-delay-2" style="margin-top: 16px;">
            Dalam proses belajar, saya terbiasa bekerja secara kolaboratif, mengeksplorasi teknologi baru, dan mencari pendekatan yang tepat dalam menyelesaikan permasalahan. Saat ini, saya berfokus memperdalam Front-End Development dan analisis data, sambil terus mengembangkan kemampuan teknis dan personal melalui berbagai proyek dan pengalaman nyata.
          </p>
        </div>

        <!-- Right: Highlight cards -->
        <div class="about-highlights">
          <div
            v-for="(item, index) in highlights"
            :key="item.label"
            class="about-highlight-card"
            :class="'reveal reveal-delay-' + (index + 1)"
          >
            <div class="highlight-visual">
              <!-- CS Student -->
              <svg v-if="item.key === 'cs'" class="visual-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <line x1="6" y1="12" x2="16" y2="7" />
                <line x1="6" y1="12" x2="16" y2="17" />
                <circle cx="6" cy="12" r="2.5" />
                <circle cx="16" cy="7" r="2.5" />
                <circle cx="16" cy="17" r="2.5" class="svg-accent" />
              </svg>

              <!-- Front-End Dev -->
              <svg v-else-if="item.key === 'fed'" class="visual-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <circle cx="6" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
                <circle cx="9" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
                <rect x="6" y="12" width="6" height="5" rx="0.5" class="svg-accent" />
                <line x1="14" y1="13" x2="18" y2="13" />
                <line x1="14" y1="16" x2="17" y2="16" />
              </svg>

              <!-- Data Analytics -->
              <svg v-else-if="item.key === 'data'" class="visual-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <line x1="4" y1="4" x2="4" y2="18" />
                <line x1="4" y1="18" x2="20" y2="18" />
                <path d="M4 15 L9 10 L14 13 L19 7" class="svg-accent" />
                <circle cx="4" cy="15" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="9" cy="10" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="14" cy="13" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="19" cy="7" r="1.5" fill="currentColor" stroke="none" />
              </svg>

              <!-- UI/UX Design -->
              <svg v-else-if="item.key === 'uiux'" class="visual-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <line x1="4" y1="4" x2="20" y2="20" stroke-dasharray="2 2" opacity="0.4" />
                <line x1="4" y1="20" x2="20" y2="4" />
                <circle cx="12" cy="12" r="4" class="svg-accent" />
              </svg>
            </div>
            <div class="highlight-content">
              <h4 class="highlight-label">{{ item.label }}</h4>
              <p class="highlight-desc caption">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const highlights = [
  {
    key: 'cs',
    label: 'Computer Science Student',
    desc: 'Mendalami dasar ilmu komputer dan pengembangannya'
  },
  {
    key: 'fed',
    label: 'Front-End Development',
    desc: 'Membangun antarmuka web yang interaktif dan responsif'
  },
  {
    key: 'data',
    label: 'Data & Analytics',
    desc: 'Mengeksplorasi data untuk mendapatkan insight yang bermakna'
  }
]
</script>

<style scoped>
.about-section {
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

.about-decoration {
  position: absolute;
  pointer-events: none;
  z-index: 0;
  user-select: none;
}

.about-parallax {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.about-container {
  position: relative;
  z-index: 2;
}

/* Subtle grid texture */
.about-bg-grid {
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
    black 20%,
    black 80%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent,
    black 20%,
    black 80%,
    transparent
  );
}

/* Floating orbs */
.about-orb {
  border-radius: 50%;
  background:
    radial-gradient(
      circle at 35% 35%,
      rgba(255, 255, 255, 0.9),
      rgba(233, 79, 136, 0.10)
    );
  filter: blur(1px);
  animation: aboutFloat 7s ease-in-out infinite;
}

.about-orb-1 {
  width: 100px;
  height: 100px;
  top: 12%;
  left: -35px;
}

.about-orb-2 {
  width: 55px;
  height: 55px;
  top: 68%;
  left: 42%;
  animation-delay: -2s;
}

.about-orb-3 {
  width: 130px;
  height: 130px;
  right: -55px;
  bottom: 5%;
  opacity: 0.55;
  animation-delay: -4s;
}

@keyframes aboutFloat {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -14px, 0); }
}

/* Dotted patterns */
.about-dots {
  width: 90px;
  height: 90px;
  background-image:
    radial-gradient(
      rgba(233, 79, 136, 0.22) 1.5px,
      transparent 1.5px
    );
  background-size: 13px 13px;
  opacity: 0.55;
}

.about-dots-1 {
  top: 15%;
  right: 3%;
}

.about-dots-2 {
  bottom: 10%;
  left: 5%;
}

/* Geometric shapes */
.about-shape {
  border: 1px solid rgba(233, 79, 136, 0.16);
  opacity: 0.7;
  animation: shapeFloat 8s ease-in-out infinite;
}

.about-shape-square {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  transform: rotate(25deg);
  top: 20%;
  right: 43%;
}

.about-shape-circle {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  bottom: 20%;
  right: 8%;
  animation-name: shapeFloatCircle;
}

@keyframes shapeFloat {
  0%, 100% { transform: translateY(0) rotate(25deg); }
  50% { transform: translateY(-10px) rotate(35deg); }
}

@keyframes shapeFloatCircle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.about-sparkle {
  top: 42%;
  left: 48%;
  font-size: 10px;
  color: rgba(233, 79, 136, 0.35);
  animation: aboutFloat 6s ease-in-out infinite;
  animation-delay: -1s;
}

.about-accent {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid rgba(233, 79, 136, 0.08);
  right: 28%;
  top: -60px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 64px;
  align-items: start;
}

.about-content .section-header {
  margin-bottom: 28px;
}

.about-text {
  line-height: 1.8;
}

/* Highlight cards */
.about-highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.about-highlight-card {
  padding: 28px 24px;
  background: var(--bg-white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: transform var(--transition-base), border-color var(--transition-base), box-shadow var(--transition-base), background var(--transition-base);
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
}

.about-highlight-card:hover {
  border-color: var(--accent-soft);
  background: var(--bg-secondary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.highlight-visual {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  background: var(--bg-primary);
  border: 1.5px solid var(--border-light);
  color: var(--text-secondary);
  transition: transform var(--transition-base), border-color var(--transition-base), background var(--transition-base), color var(--transition-base);
}

.about-highlight-card:hover .highlight-visual {
  border-color: var(--accent-soft);
  background: var(--accent-light);
  color: var(--text-primary);
  transform: scale(1.05) translateY(-2px);
}

.visual-svg {
  width: 22px;
  height: 22px;
  transition: transform var(--transition-base);
}

.about-highlight-card:hover .visual-svg {
  transform: translate(1px, -1px);
}

/* Custom visual system accent styling */
.svg-accent {
  stroke: var(--text-tertiary);
  transition: stroke var(--transition-base), fill var(--transition-base), opacity var(--transition-base);
  opacity: 0.6;
}

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

.about-highlight-card:hover .svg-accent {
  stroke: var(--accent);
  opacity: 1;
}

.about-highlight-card:hover circle.svg-accent {
  fill: var(--accent);
  stroke: var(--accent);
}

.about-highlight-card:hover path.svg-accent {
  stroke: var(--accent);
}

.about-highlight-card:hover rect.svg-accent {
  stroke: var(--accent);
  fill: var(--accent-soft);
}

.highlight-label {
  font-family: var(--font-heading);
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.highlight-desc {
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 1024px) {
  .about-grid {
    gap: 48px;
  }
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-highlights {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .about-orb {
    opacity: 0.45;
  }

  .about-dots {
    opacity: 0.3;
  }

  .about-shape {
    opacity: 0.35;
  }

  .about-sparkle {
    opacity: 0.25;
  }

  .about-shape-square {
    display: none;
  }
}

@media (max-width: 480px) {
  .about-highlights {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .about-orb,
  .about-shape,
  .about-sparkle {
    animation: none !important;
  }
}
</style>
