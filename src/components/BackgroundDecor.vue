<template>
  <div class="decor-container" aria-hidden="true">

    <!-- ============================================
         HERO SECTION — Technical System Canvas
         ============================================ -->
    <template v-if="section === 'hero'">

      <!-- CIRCUIT SYSTEM: Main left-side circuit -->
      <svg class="decor-circuit circuit-left-main" viewBox="0 0 240 500" fill="none" preserveAspectRatio="xMidYMid meet">
        <!-- Vertical spine -->
        <line x1="80" y1="0" x2="80" y2="500" stroke="var(--border)" stroke-width="1"/>
        <!-- Branch top -->
        <line x1="80" y1="80" x2="20" y2="80" stroke="var(--border)" stroke-width="1"/>
        <line x1="20" y1="80" x2="20" y2="140" stroke="var(--border)" stroke-width="1"/>
        <line x1="20" y1="140" x2="60" y2="140" stroke="var(--border)" stroke-width="1"/>
        <!-- Node at junction -->
        <circle cx="80" cy="80" r="3" fill="var(--text-tertiary)" opacity="0.4"/>
        <circle cx="20" cy="140" r="2" fill="var(--border)" opacity="0.5"/>
        <!-- Branch middle accent -->
        <line x1="80" y1="200" x2="180" y2="200" stroke="var(--accent)" stroke-width="1" opacity="0.25"/>
        <line x1="180" y1="200" x2="180" y2="240" stroke="var(--accent)" stroke-width="1" opacity="0.25"/>
        <circle cx="80" cy="200" r="3.5" fill="var(--accent)" opacity="0.35" class="node-pulse"/>
        <circle cx="180" cy="240" r="2.5" fill="var(--accent)" opacity="0.3"/>
        <!-- Branch lower -->
        <line x1="80" y1="320" x2="30" y2="320" stroke="var(--border)" stroke-width="1"/>
        <line x1="30" y1="320" x2="30" y2="380" stroke="var(--border)" stroke-width="1"/>
        <line x1="30" y1="380" x2="80" y2="380" stroke="var(--border)" stroke-width="1"/>
        <circle cx="80" cy="320" r="2.5" fill="var(--text-tertiary)" opacity="0.4"/>
        <circle cx="80" cy="380" r="2" fill="var(--border)" opacity="0.4"/>
        <!-- Far right branch -->
        <line x1="80" y1="440" x2="230" y2="440" stroke="var(--border)" stroke-width="1"/>
        <circle cx="230" cy="440" r="3" fill="var(--text-tertiary)" opacity="0.35"/>
      </svg>

      <!-- CIRCUIT SYSTEM: Right-side circuit near photo -->
      <svg class="decor-circuit circuit-right-main" viewBox="0 0 200 460" fill="none" preserveAspectRatio="xMidYMid meet">
        <!-- Vertical spine -->
        <line x1="130" y1="0" x2="130" y2="460" stroke="var(--border)" stroke-width="1"/>
        <!-- Top horizontal branch -->
        <line x1="130" y1="60" x2="200" y2="60" stroke="var(--border)" stroke-width="1"/>
        <circle cx="130" cy="60" r="2.5" fill="var(--border)" opacity="0.45"/>
        <!-- Active mid pink branch -->
        <line x1="130" y1="160" x2="60" y2="160" stroke="var(--accent)" stroke-width="1" opacity="0.2"/>
        <line x1="60" y1="160" x2="60" y2="200" stroke="var(--accent)" stroke-width="1" opacity="0.2"/>
        <line x1="60" y1="200" x2="20" y2="200" stroke="var(--accent)" stroke-width="1" opacity="0.2"/>
        <circle cx="130" cy="160" r="3" fill="var(--accent)" opacity="0.4" class="node-pulse-slow"/>
        <!-- Lower right branch -->
        <line x1="130" y1="300" x2="200" y2="300" stroke="var(--border)" stroke-width="1"/>
        <line x1="200" y1="300" x2="200" y2="340" stroke="var(--border)" stroke-width="1"/>
        <circle cx="130" cy="300" r="2.5" fill="var(--text-tertiary)" opacity="0.4"/>
        <circle cx="200" cy="340" r="2" fill="var(--border)" opacity="0.35"/>
        <!-- Bottom accent -->
        <line x1="130" y1="400" x2="50" y2="400" stroke="var(--border)" stroke-width="1"/>
        <circle cx="50" cy="400" r="3" fill="var(--text-tertiary)" opacity="0.3"/>
      </svg>

      <!-- CIRCUIT SYSTEM: Top horizontal circuit -->
      <svg class="decor-circuit circuit-top" viewBox="0 0 700 80" fill="none" preserveAspectRatio="xMidYMid meet">
        <line x1="0" y1="40" x2="200" y2="40" stroke="var(--border)" stroke-width="1"/>
        <line x1="200" y1="40" x2="200" y2="10" stroke="var(--border)" stroke-width="1"/>
        <line x1="200" y1="10" x2="340" y2="10" stroke="var(--border)" stroke-width="1"/>
        <circle cx="200" cy="40" r="3" fill="var(--text-tertiary)" opacity="0.4"/>
        <circle cx="340" cy="10" r="2.5" fill="var(--accent)" opacity="0.4" class="node-pulse"/>
        <!-- Right side -->
        <line x1="400" y1="40" x2="700" y2="40" stroke="var(--border)" stroke-width="1"/>
        <line x1="400" y1="40" x2="400" y2="70" stroke="var(--border)" stroke-width="1"/>
        <circle cx="400" cy="40" r="2.5" fill="var(--border)" opacity="0.4"/>
      </svg>

      <!-- CIRCUIT SYSTEM: Bottom horizontal circuit -->
      <svg class="decor-circuit circuit-bottom" viewBox="0 0 600 60" fill="none" preserveAspectRatio="xMidYMid meet">
        <line x1="0" y1="30" x2="160" y2="30" stroke="var(--border)" stroke-width="1"/>
        <line x1="160" y1="30" x2="160" y2="0" stroke="var(--border)" stroke-width="1"/>
        <circle cx="160" cy="30" r="2.5" fill="var(--text-tertiary)" opacity="0.4"/>
        <line x1="300" y1="30" x2="600" y2="30" stroke="var(--border)" stroke-width="1"/>
        <line x1="300" y1="30" x2="300" y2="60" stroke="var(--border)" stroke-width="1"/>
        <circle cx="300" cy="30" r="3" fill="var(--accent)" opacity="0.35" class="node-pulse-slow"/>
      </svg>

      <!-- DATA NETWORK: Left cluster -->
      <svg class="decor-network hero-network-left" viewBox="0 0 120 100" fill="none">
        <line x1="20" y1="20" x2="70" y2="50" stroke="var(--border)" stroke-width="1"/>
        <line x1="70" y1="50" x2="110" y2="30" stroke="var(--border)" stroke-width="1"/>
        <line x1="70" y1="50" x2="60" y2="90" stroke="var(--border)" stroke-width="1"/>
        <line x1="60" y1="90" x2="100" y2="90" stroke="var(--border)" stroke-width="1"/>
        <circle cx="20" cy="20" r="3" fill="var(--text-tertiary)" opacity="0.4"/>
        <circle cx="70" cy="50" r="4.5" fill="var(--accent)" opacity="0.45" class="node-pulse"/>
        <circle cx="110" cy="30" r="2.5" fill="var(--text-tertiary)" opacity="0.35"/>
        <circle cx="60" cy="90" r="2" fill="var(--border)" opacity="0.4"/>
        <circle cx="100" cy="90" r="3" fill="var(--text-tertiary)" opacity="0.35"/>
      </svg>

      <!-- DATA NETWORK: Right cluster near photo -->
      <svg class="decor-network hero-network-right" viewBox="0 0 100 120" fill="none">
        <line x1="20" y1="30" x2="70" y2="20" stroke="var(--border)" stroke-width="1"/>
        <line x1="70" y1="20" x2="90" y2="70" stroke="var(--border)" stroke-width="1"/>
        <line x1="90" y1="70" x2="40" y2="100" stroke="var(--accent)" stroke-width="1" opacity="0.25"/>
        <line x1="40" y1="100" x2="10" y2="80" stroke="var(--border)" stroke-width="1"/>
        <circle cx="20" cy="30" r="3" fill="var(--text-tertiary)" opacity="0.4"/>
        <circle cx="70" cy="20" r="2.5" fill="var(--border)" opacity="0.35"/>
        <circle cx="90" cy="70" r="4" fill="var(--accent)" opacity="0.4" class="node-pulse-slow"/>
        <circle cx="40" cy="100" r="2.5" fill="var(--text-tertiary)" opacity="0.35"/>
        <circle cx="10" cy="80" r="2" fill="var(--border)" opacity="0.4"/>
      </svg>

      <!-- TECH SYMBOLS: scattered -->
      <div class="decor-symbol sym-bracket-1 monospace">{  }</div>
      <div class="decor-symbol sym-angle-1 monospace">&lt;/&gt;</div>
      <div class="decor-symbol sym-arrow-1 monospace">→</div>
      <div class="decor-symbol sym-bracket-2 monospace">[  ]</div>
      <div class="decor-symbol sym-hash monospace">#</div>
      <div class="decor-symbol sym-angle-2 monospace">&lt;  &gt;</div>

      <!-- GRID FRAGMENTS: corners -->
      <svg class="decor-grid-frag grid-tl" viewBox="0 0 80 80" fill="none">
        <line x1="0" y1="0" x2="80" y2="0" stroke="var(--border-light)" stroke-width="1"/>
        <line x1="0" y1="0" x2="0" y2="80" stroke="var(--border-light)" stroke-width="1"/>
        <line x1="0" y1="40" x2="40" y2="40" stroke="var(--border-light)" stroke-width="1" opacity="0.5"/>
        <line x1="40" y1="0" x2="40" y2="40" stroke="var(--border-light)" stroke-width="1" opacity="0.5"/>
        <circle cx="0" cy="0" r="3" fill="var(--accent)" opacity="0.35"/>
        <circle cx="40" cy="40" r="2" fill="var(--border)" opacity="0.4"/>
      </svg>

      <svg class="decor-grid-frag grid-tr" viewBox="0 0 80 80" fill="none">
        <line x1="80" y1="0" x2="0" y2="0" stroke="var(--border-light)" stroke-width="1"/>
        <line x1="80" y1="0" x2="80" y2="80" stroke="var(--border-light)" stroke-width="1"/>
        <line x1="80" y1="40" x2="40" y2="40" stroke="var(--border-light)" stroke-width="1" opacity="0.5"/>
        <line x1="40" y1="0" x2="40" y2="40" stroke="var(--border-light)" stroke-width="1" opacity="0.5"/>
        <circle cx="80" cy="0" r="3" fill="var(--border)" opacity="0.35"/>
        <circle cx="40" cy="40" r="2" fill="var(--accent)" opacity="0.3"/>
      </svg>

      <svg class="decor-grid-frag grid-bl" viewBox="0 0 80 80" fill="none">
        <line x1="0" y1="80" x2="80" y2="80" stroke="var(--border-light)" stroke-width="1"/>
        <line x1="0" y1="80" x2="0" y2="0" stroke="var(--border-light)" stroke-width="1"/>
        <circle cx="0" cy="80" r="3" fill="var(--text-tertiary)" opacity="0.3"/>
      </svg>

      <!-- CROSSHAIR markers -->
      <svg class="decor-crosshair cross-1" viewBox="0 0 24 24" fill="none">
        <line x1="12" y1="2" x2="12" y2="22" stroke="var(--border)" stroke-width="1"/>
        <line x1="2" y1="12" x2="22" y2="12" stroke="var(--border)" stroke-width="1"/>
        <circle cx="12" cy="12" r="3" fill="none" stroke="var(--border)" stroke-width="1"/>
      </svg>

      <svg class="decor-crosshair cross-2" viewBox="0 0 24 24" fill="none">
        <line x1="12" y1="2" x2="12" y2="22" stroke="var(--accent)" stroke-width="1" opacity="0.5"/>
        <line x1="2" y1="12" x2="22" y2="12" stroke="var(--accent)" stroke-width="1" opacity="0.5"/>
        <circle cx="12" cy="12" r="4" fill="none" stroke="var(--accent)" stroke-width="1" opacity="0.5"/>
      </svg>

      <!-- DATA FLOW lines (animated) -->
      <svg class="decor-flow hero-flow-1" viewBox="0 0 300 2" fill="none">
        <line x1="0" y1="1" x2="300" y2="1" stroke="var(--border)" stroke-width="1"/>
        <rect class="flow-dot" x="0" y="-2" width="6" height="4" rx="1" fill="var(--accent)" opacity="0.6"/>
      </svg>

      <svg class="decor-flow hero-flow-2" viewBox="0 0 200 2" fill="none">
        <line x1="0" y1="1" x2="200" y2="1" stroke="var(--border)" stroke-width="1"/>
        <rect class="flow-dot-reverse" x="200" y="-2" width="6" height="4" rx="1" fill="var(--text-tertiary)" opacity="0.5"/>
      </svg>

      <!-- STANDALONE NODES: scattered accent points -->
      <div class="decor-node-dot node-hero-1"></div>
      <div class="decor-node-dot node-hero-2 accent"></div>
      <div class="decor-node-dot node-hero-3"></div>
      <div class="decor-node-dot node-hero-4 accent"></div>
      <div class="decor-node-dot node-hero-5"></div>

      <!-- MEASUREMENT LINES: editorial markers -->
      <svg class="decor-measure measure-h1" viewBox="0 0 120 16" fill="none">
        <line x1="0" y1="8" x2="120" y2="8" stroke="var(--border-light)" stroke-width="1"/>
        <line x1="0" y1="2" x2="0" y2="14" stroke="var(--border-light)" stroke-width="1"/>
        <line x1="120" y1="2" x2="120" y2="14" stroke="var(--border-light)" stroke-width="1"/>
      </svg>

    </template>

    <!-- ============================================
         ABOUT SECTION
         ============================================ -->
    <template v-if="section === 'about'">

      <svg class="decor-circuit circuit-about-left" viewBox="0 0 160 400" fill="none">
        <line x1="60" y1="0" x2="60" y2="400" stroke="var(--border)" stroke-width="1"/>
        <line x1="60" y1="80" x2="10" y2="80" stroke="var(--border)" stroke-width="1"/>
        <line x1="10" y1="80" x2="10" y2="140" stroke="var(--border)" stroke-width="1"/>
        <line x1="60" y1="220" x2="140" y2="220" stroke="var(--accent)" stroke-width="1" opacity="0.2"/>
        <circle cx="60" cy="80" r="3" fill="var(--text-tertiary)" opacity="0.4"/>
        <circle cx="60" cy="220" r="3.5" fill="var(--accent)" opacity="0.4" class="node-pulse"/>
        <circle cx="140" cy="220" r="2.5" fill="var(--accent)" opacity="0.3"/>
        <line x1="60" y1="340" x2="10" y2="340" stroke="var(--border)" stroke-width="1"/>
        <circle cx="10" cy="340" r="2" fill="var(--border)" opacity="0.4"/>
      </svg>

      <svg class="decor-circuit circuit-about-right" viewBox="0 0 160 360" fill="none">
        <line x1="100" y1="0" x2="100" y2="360" stroke="var(--border)" stroke-width="1"/>
        <line x1="100" y1="100" x2="160" y2="100" stroke="var(--border)" stroke-width="1"/>
        <circle cx="100" cy="100" r="2.5" fill="var(--text-tertiary)" opacity="0.4"/>
        <line x1="100" y1="260" x2="40" y2="260" stroke="var(--accent)" stroke-width="1" opacity="0.2"/>
        <circle cx="100" cy="260" r="3" fill="var(--accent)" opacity="0.35" class="node-pulse-slow"/>
      </svg>

      <div class="decor-symbol sym-about-1 monospace">{ }</div>
      <div class="decor-symbol sym-about-2 monospace">&lt;/&gt;</div>

      <svg class="decor-grid-frag grid-about-tl" viewBox="0 0 60 60" fill="none">
        <line x1="0" y1="0" x2="60" y2="0" stroke="var(--border-light)" stroke-width="1"/>
        <line x1="0" y1="0" x2="0" y2="60" stroke="var(--border-light)" stroke-width="1"/>
        <circle cx="0" cy="0" r="3" fill="var(--accent)" opacity="0.3"/>
      </svg>

    </template>

    <!-- ============================================
         SKILLS SECTION
         ============================================ -->
    <template v-if="section === 'skills'">

      <svg class="decor-circuit circuit-skills-left" viewBox="0 0 120 360" fill="none">
        <line x1="40" y1="0" x2="40" y2="360" stroke="var(--border)" stroke-width="1"/>
        <line x1="40" y1="80" x2="5" y2="80" stroke="var(--border)" stroke-width="1"/>
        <circle cx="40" cy="80" r="2.5" fill="var(--text-tertiary)" opacity="0.4"/>
        <line x1="40" y1="180" x2="110" y2="180" stroke="var(--accent)" stroke-width="1" opacity="0.2"/>
        <circle cx="40" cy="180" r="3.5" fill="var(--accent)" opacity="0.4" class="node-pulse"/>
        <circle cx="110" cy="180" r="2" fill="var(--accent)" opacity="0.3"/>
        <line x1="40" y1="280" x2="5" y2="280" stroke="var(--border)" stroke-width="1"/>
        <circle cx="5" cy="280" r="2" fill="var(--border)" opacity="0.35"/>
      </svg>

      <svg class="decor-circuit circuit-skills-right" viewBox="0 0 120 360" fill="none">
        <line x1="80" y1="0" x2="80" y2="360" stroke="var(--border)" stroke-width="1"/>
        <line x1="80" y1="120" x2="120" y2="120" stroke="var(--border)" stroke-width="1"/>
        <circle cx="80" cy="120" r="2.5" fill="var(--text-tertiary)" opacity="0.4"/>
        <line x1="80" y1="240" x2="30" y2="240" stroke="var(--border)" stroke-width="1"/>
        <circle cx="30" cy="240" r="2" fill="var(--border)" opacity="0.35"/>
      </svg>

      <div class="decor-symbol sym-skills-1 monospace">[ ]</div>
      <div class="decor-symbol sym-skills-2 monospace">#</div>

      <div class="decor-node-dot node-skills-1 accent"></div>
      <div class="decor-node-dot node-skills-2"></div>

    </template>

    <!-- ============================================
         PROJECTS SECTION
         ============================================ -->
    <template v-if="section === 'projects'">

      <svg class="decor-circuit circuit-projects-main" viewBox="0 0 200 500" fill="none">
        <line x1="80" y1="0" x2="80" y2="500" stroke="var(--border)" stroke-width="1"/>
        <line x1="80" y1="80" x2="0" y2="80" stroke="var(--border)" stroke-width="1"/>
        <circle cx="80" cy="80" r="3" fill="var(--text-tertiary)" opacity="0.4"/>
        <line x1="80" y1="200" x2="180" y2="200" stroke="var(--accent)" stroke-width="1" opacity="0.25"/>
        <line x1="180" y1="200" x2="180" y2="260" stroke="var(--accent)" stroke-width="1" opacity="0.25"/>
        <circle cx="80" cy="200" r="4" fill="var(--accent)" opacity="0.4" class="node-pulse"/>
        <circle cx="180" cy="260" r="2.5" fill="var(--accent)" opacity="0.3"/>
        <line x1="80" y1="360" x2="20" y2="360" stroke="var(--border)" stroke-width="1"/>
        <circle cx="20" cy="360" r="2.5" fill="var(--text-tertiary)" opacity="0.35"/>
        <line x1="80" y1="440" x2="200" y2="440" stroke="var(--border)" stroke-width="1"/>
        <circle cx="200" cy="440" r="3" fill="var(--text-tertiary)" opacity="0.35"/>
      </svg>

      <svg class="decor-circuit circuit-projects-right" viewBox="0 0 160 400" fill="none">
        <line x1="80" y1="0" x2="80" y2="400" stroke="var(--border)" stroke-width="1"/>
        <line x1="80" y1="120" x2="160" y2="120" stroke="var(--border)" stroke-width="1"/>
        <circle cx="80" cy="120" r="2.5" fill="var(--border)" opacity="0.4"/>
        <line x1="80" y1="280" x2="20" y2="280" stroke="var(--accent)" stroke-width="1" opacity="0.2"/>
        <circle cx="80" cy="280" r="3" fill="var(--accent)" opacity="0.35" class="node-pulse-slow"/>
      </svg>

      <div class="decor-symbol sym-proj-1 monospace">&lt; /&gt;</div>
      <div class="decor-symbol sym-proj-2 monospace">→</div>

      <svg class="decor-flow proj-flow" viewBox="0 0 260 2" fill="none">
        <line x1="0" y1="1" x2="260" y2="1" stroke="var(--border)" stroke-width="1"/>
        <rect class="flow-dot" x="0" y="-2" width="8" height="4" rx="1" fill="var(--accent)" opacity="0.5"/>
      </svg>

    </template>

    <!-- ============================================
         EXPERIENCE SECTION
         ============================================ -->
    <template v-if="section === 'experience'">

      <svg class="decor-circuit circuit-exp-left" viewBox="0 0 140 460" fill="none">
        <line x1="50" y1="0" x2="50" y2="460" stroke="var(--border)" stroke-width="1"/>
        <line x1="50" y1="80" x2="5" y2="80" stroke="var(--border)" stroke-width="1"/>
        <circle cx="50" cy="80" r="2.5" fill="var(--text-tertiary)" opacity="0.4"/>
        <line x1="50" y1="200" x2="130" y2="200" stroke="var(--accent)" stroke-width="1" opacity="0.2"/>
        <circle cx="50" cy="200" r="4" fill="var(--accent)" opacity="0.4" class="node-pulse"/>
        <line x1="50" y1="340" x2="10" y2="340" stroke="var(--border)" stroke-width="1"/>
        <circle cx="10" cy="340" r="2" fill="var(--border)" opacity="0.35"/>
      </svg>

      <div class="decor-symbol sym-exp-1 monospace">{ }</div>

      <div class="decor-node-dot node-exp-1 accent"></div>
      <div class="decor-node-dot node-exp-2"></div>

      <svg class="decor-grid-frag grid-exp" viewBox="0 0 50 50" fill="none">
        <line x1="0" y1="0" x2="50" y2="0" stroke="var(--border-light)" stroke-width="1"/>
        <line x1="0" y1="0" x2="0" y2="50" stroke="var(--border-light)" stroke-width="1"/>
        <circle cx="0" cy="0" r="2.5" fill="var(--text-tertiary)" opacity="0.3"/>
      </svg>

    </template>

    <!-- ============================================
         LEARNING SECTION
         ============================================ -->
    <template v-if="section === 'learning'">

      <svg class="decor-circuit circuit-learn-left" viewBox="0 0 120 300" fill="none">
        <line x1="40" y1="0" x2="40" y2="300" stroke="var(--border)" stroke-width="1"/>
        <line x1="40" y1="80" x2="5" y2="80" stroke="var(--border)" stroke-width="1"/>
        <circle cx="40" cy="80" r="2.5" fill="var(--text-tertiary)" opacity="0.4"/>
        <line x1="40" y1="180" x2="110" y2="180" stroke="var(--accent)" stroke-width="1" opacity="0.2"/>
        <circle cx="40" cy="180" r="3.5" fill="var(--accent)" opacity="0.35" class="node-pulse"/>
      </svg>

      <div class="decor-symbol sym-learn-1 monospace">[ ]</div>
      <div class="decor-symbol sym-learn-2 monospace">&lt;/&gt;</div>

      <div class="decor-node-dot node-learn-1 accent"></div>

    </template>

    <!-- ============================================
         CONTACT SECTION
         ============================================ -->
    <template v-if="section === 'contact'">

      <svg class="decor-circuit circuit-contact-left" viewBox="0 0 200 400" fill="none">
        <line x1="80" y1="0" x2="80" y2="400" stroke="var(--border)" stroke-width="1"/>
        <line x1="80" y1="80" x2="0" y2="80" stroke="var(--border)" stroke-width="1"/>
        <circle cx="80" cy="80" r="3" fill="var(--text-tertiary)" opacity="0.4"/>
        <line x1="80" y1="200" x2="180" y2="200" stroke="var(--accent)" stroke-width="1" opacity="0.25"/>
        <circle cx="80" cy="200" r="4" fill="var(--accent)" opacity="0.45" class="node-pulse"/>
        <circle cx="180" cy="200" r="2.5" fill="var(--accent)" opacity="0.3"/>
        <line x1="80" y1="320" x2="20" y2="320" stroke="var(--border)" stroke-width="1"/>
        <circle cx="20" cy="320" r="2.5" fill="var(--text-tertiary)" opacity="0.35"/>
      </svg>

      <svg class="decor-circuit circuit-contact-right" viewBox="0 0 160 380" fill="none">
        <line x1="80" y1="0" x2="80" y2="380" stroke="var(--border)" stroke-width="1"/>
        <line x1="80" y1="100" x2="160" y2="100" stroke="var(--border)" stroke-width="1"/>
        <circle cx="80" cy="100" r="2.5" fill="var(--border)" opacity="0.4"/>
        <line x1="80" y1="260" x2="20" y2="260" stroke="var(--accent)" stroke-width="1" opacity="0.2"/>
        <circle cx="80" cy="260" r="3.5" fill="var(--accent)" opacity="0.4" class="node-pulse-slow"/>
      </svg>

      <svg class="decor-network contact-network" viewBox="0 0 140 120" fill="none">
        <line x1="20" y1="60" x2="70" y2="20" stroke="var(--border)" stroke-width="1"/>
        <line x1="70" y1="20" x2="120" y2="60" stroke="var(--border)" stroke-width="1"/>
        <line x1="70" y1="20" x2="70" y2="100" stroke="var(--accent)" stroke-width="1" opacity="0.25"/>
        <circle cx="20" cy="60" r="3" fill="var(--text-tertiary)" opacity="0.4"/>
        <circle cx="70" cy="20" r="5" fill="var(--accent)" opacity="0.45" class="node-pulse"/>
        <circle cx="120" cy="60" r="3" fill="var(--text-tertiary)" opacity="0.35"/>
        <circle cx="70" cy="100" r="3" fill="var(--border)" opacity="0.4"/>
      </svg>

      <div class="decor-symbol sym-contact-1 monospace">{ }</div>
      <div class="decor-symbol sym-contact-2 monospace">→</div>

      <div class="decor-node-dot node-contact-1 accent"></div>
      <div class="decor-node-dot node-contact-2"></div>

      <svg class="decor-grid-frag grid-contact-tr" viewBox="0 0 80 80" fill="none">
        <line x1="80" y1="0" x2="0" y2="0" stroke="var(--border-light)" stroke-width="1"/>
        <line x1="80" y1="0" x2="80" y2="80" stroke="var(--border-light)" stroke-width="1"/>
        <circle cx="80" cy="0" r="3" fill="var(--accent)" opacity="0.35"/>
      </svg>

      <svg class="decor-flow contact-flow" viewBox="0 0 220 2" fill="none">
        <line x1="0" y1="1" x2="220" y2="1" stroke="var(--border)" stroke-width="1"/>
        <rect class="flow-dot" x="0" y="-2" width="6" height="4" rx="1" fill="var(--accent)" opacity="0.55"/>
      </svg>

    </template>

  </div>
</template>

<script setup>
defineProps({
  section: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
/* ======================================
   CONTAINER
   ====================================== */
.decor-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  user-select: none;
  z-index: 0;
  overflow: hidden;
}

/* ======================================
   KEYFRAMES
   ====================================== */
@keyframes node-pulse {
  0%, 100% { transform: scale(1); opacity: 0.45; }
  50%       { transform: scale(1.35); opacity: 0.75; }
}

@keyframes node-pulse-slow {
  0%, 100% { transform: scale(1); opacity: 0.35; }
  50%       { transform: scale(1.25); opacity: 0.6; }
}

@keyframes sym-float-1 {
  0%, 100% { transform: translateY(0) translateX(0); }
  50%       { transform: translateY(-10px) translateX(4px); }
}

@keyframes sym-float-2 {
  0%, 100% { transform: translateY(0) translateX(0); }
  50%       { transform: translateY(8px) translateX(-5px); }
}

@keyframes sym-float-3 {
  0%, 100% { transform: translateY(0); }
  33%       { transform: translateY(-6px) translateX(3px); }
  66%       { transform: translateY(5px) translateX(-2px); }
}

@keyframes flow-left {
  0%   { transform: translateX(0); }
  100% { transform: translateX(300px); }
}

@keyframes flow-right {
  0%   { transform: translateX(200px); }
  100% { transform: translateX(-20px); }
}

@keyframes line-fade-in-out {
  0%, 100% { opacity: 0.08; }
  50%       { opacity: 0.18; }
}

@keyframes drift-gentle {
  0%, 100% { transform: translate(0, 0); }
  50%       { transform: translate(6px, -8px); }
}

@keyframes drift-gentle-2 {
  0%, 100% { transform: translate(0, 0); }
  50%       { transform: translate(-8px, 10px); }
}

/* ======================================
   CIRCUIT LINES — base
   ====================================== */
.decor-circuit {
  position: absolute;
  pointer-events: none;
  opacity: 0.18;
}

/* ======================================
   CIRCUIT — HERO POSITIONS
   ====================================== */
.circuit-left-main {
  left: -20px;
  top: 0;
  width: 240px;
  height: 100%;
  opacity: 0.2;
  animation: line-fade-in-out 14s ease-in-out infinite;
}

.circuit-right-main {
  right: -20px;
  top: 0;
  width: 200px;
  height: 100%;
  opacity: 0.18;
  animation: line-fade-in-out 18s ease-in-out infinite 2s;
}

.circuit-top {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 80px;
  opacity: 0.18;
}

.circuit-bottom {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 60px;
  opacity: 0.15;
}

/* ======================================
   CIRCUIT — ABOUT POSITIONS
   ====================================== */
.circuit-about-left {
  left: -10px;
  top: 0;
  width: 160px;
  height: 100%;
  opacity: 0.16;
  animation: line-fade-in-out 16s ease-in-out infinite;
}

.circuit-about-right {
  right: -10px;
  top: 0;
  width: 160px;
  height: 100%;
  opacity: 0.14;
  animation: line-fade-in-out 20s ease-in-out infinite 3s;
}

/* ======================================
   CIRCUIT — SKILLS POSITIONS
   ====================================== */
.circuit-skills-left {
  left: -10px;
  top: 0;
  width: 120px;
  height: 100%;
  opacity: 0.16;
  animation: line-fade-in-out 15s ease-in-out infinite 1s;
}

.circuit-skills-right {
  right: -10px;
  top: 0;
  width: 120px;
  height: 100%;
  opacity: 0.14;
  animation: line-fade-in-out 19s ease-in-out infinite 4s;
}

/* ======================================
   CIRCUIT — PROJECTS POSITIONS
   ====================================== */
.circuit-projects-main {
  left: -20px;
  top: 0;
  width: 200px;
  height: 100%;
  opacity: 0.18;
  animation: line-fade-in-out 17s ease-in-out infinite 2s;
}

.circuit-projects-right {
  right: -10px;
  top: 0;
  width: 160px;
  height: 100%;
  opacity: 0.14;
  animation: line-fade-in-out 22s ease-in-out infinite;
}

/* ======================================
   CIRCUIT — EXPERIENCE POSITIONS
   ====================================== */
.circuit-exp-left {
  left: -10px;
  top: 0;
  width: 140px;
  height: 100%;
  opacity: 0.16;
  animation: line-fade-in-out 14s ease-in-out infinite 1s;
}

/* ======================================
   CIRCUIT — LEARNING POSITIONS
   ====================================== */
.circuit-learn-left {
  left: -10px;
  top: 0;
  width: 120px;
  height: 100%;
  opacity: 0.15;
  animation: line-fade-in-out 16s ease-in-out infinite 3s;
}

/* ======================================
   CIRCUIT — CONTACT POSITIONS
   ====================================== */
.circuit-contact-left {
  left: -10px;
  top: 0;
  width: 200px;
  height: 100%;
  opacity: 0.18;
  animation: line-fade-in-out 18s ease-in-out infinite;
}

.circuit-contact-right {
  right: -10px;
  top: 0;
  width: 160px;
  height: 100%;
  opacity: 0.15;
  animation: line-fade-in-out 22s ease-in-out infinite 4s;
}

/* ======================================
   DATA NETWORKS — base
   ====================================== */
.decor-network {
  position: absolute;
  pointer-events: none;
  opacity: 0.22;
}

.hero-network-left {
  left: 5%;
  top: 20%;
  width: 120px;
  height: 100px;
  animation: drift-gentle 18s ease-in-out infinite;
}

.hero-network-right {
  right: 3%;
  top: 35%;
  width: 100px;
  height: 120px;
  animation: drift-gentle-2 22s ease-in-out infinite 3s;
}

.contact-network {
  right: 4%;
  top: 25%;
  width: 140px;
  height: 120px;
  animation: drift-gentle 20s ease-in-out infinite 1s;
}

/* ======================================
   ANIMATED NODES — within SVGs
   ====================================== */
.node-pulse {
  animation: node-pulse 4s ease-in-out infinite;
}

.node-pulse-slow {
  animation: node-pulse-slow 6s ease-in-out infinite 1.5s;
}

/* ======================================
   STANDALONE DOT NODES
   ====================================== */
.decor-node-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--border);
  opacity: 0.35;
  pointer-events: none;
}

.decor-node-dot.accent {
  background: var(--accent);
  opacity: 0.4;
  animation: node-pulse-slow 5s ease-in-out infinite;
}

/* HERO node positions */
.node-hero-1  { top: 15%; left: 8%; }
.node-hero-2  { top: 28%; left: 12%; width: 10px; height: 10px; }
.node-hero-3  { top: 60%; left: 6%; }
.node-hero-4  { top: 45%; right: 5%; width: 10px; height: 10px; }
.node-hero-5  { top: 75%; right: 8%; }

/* OTHER section nodes */
.node-skills-1 { top: 20%; left: 4%; }
.node-skills-2 { bottom: 25%; right: 4%; }
.node-exp-1   { top: 18%; left: 5%; }
.node-exp-2   { bottom: 22%; right: 5%; }
.node-learn-1 { top: 30%; right: 5%; }
.node-contact-1 { top: 20%; left: 4%; }
.node-contact-2 { bottom: 25%; right: 5%; }

/* ======================================
   TECH SYMBOLS
   ====================================== */
.decor-symbol {
  position: absolute;
  pointer-events: none;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9375rem;
  font-weight: 400;
  color: var(--text-tertiary);
  opacity: 0.18;
  letter-spacing: 0.08em;
}

/* Hero symbols */
.sym-bracket-1  { top: 12%; left: 3%; animation: sym-float-1 14s ease-in-out infinite; }
.sym-angle-1    { top: 38%; left: 4%; font-size: 1.125rem; animation: sym-float-2 18s ease-in-out infinite; opacity: 0.2; color: var(--accent); }
.sym-arrow-1    { top: 65%; left: 7%; animation: sym-float-1 22s ease-in-out infinite 2s; }
.sym-bracket-2  { top: 20%; right: 4%; animation: sym-float-3 16s ease-in-out infinite 1s; }
.sym-hash       { top: 55%; right: 6%; animation: sym-float-2 20s ease-in-out infinite 3s; }
.sym-angle-2    { top: 80%; right: 5%; color: var(--accent); opacity: 0.2; animation: sym-float-1 12s ease-in-out infinite; }

/* About symbols */
.sym-about-1 { top: 15%; left: 4%; animation: sym-float-1 15s ease-in-out infinite; }
.sym-about-2 { bottom: 20%; right: 4%; color: var(--accent); opacity: 0.2; animation: sym-float-2 19s ease-in-out infinite 2s; }

/* Skills symbols */
.sym-skills-1 { top: 18%; left: 3%; animation: sym-float-1 16s ease-in-out infinite; }
.sym-skills-2 { bottom: 25%; right: 4%; animation: sym-float-3 20s ease-in-out infinite; }

/* Projects symbols */
.sym-proj-1   { top: 12%; left: 3%; color: var(--accent); opacity: 0.2; animation: sym-float-1 14s ease-in-out infinite; }
.sym-proj-2   { bottom: 20%; right: 4%; animation: sym-float-2 18s ease-in-out infinite 1s; }

/* Experience symbols */
.sym-exp-1 { top: 22%; right: 5%; animation: sym-float-1 16s ease-in-out infinite; }

/* Learning symbols */
.sym-learn-1  { top: 15%; left: 4%; font-size: 1.25rem; animation: sym-float-1 13s ease-in-out infinite; }
.sym-learn-2  { bottom: 18%; right: 5%; color: var(--accent); opacity: 0.2; animation: sym-float-2 17s ease-in-out infinite 2s; }

/* Contact symbols */
.sym-contact-1 { top: 12%; left: 4%; animation: sym-float-3 15s ease-in-out infinite; }
.sym-contact-2 { bottom: 22%; left: 8%; animation: sym-float-1 19s ease-in-out infinite 3s; }

/* ======================================
   GRID FRAGMENTS
   ====================================== */
.decor-grid-frag {
  position: absolute;
  pointer-events: none;
  opacity: 0.22;
}

.grid-tl  { top: 0; left: 0; width: 80px; height: 80px; }
.grid-tr  { top: 0; right: 0; width: 80px; height: 80px; }
.grid-bl  { bottom: 0; left: 0; width: 80px; height: 80px; }

.grid-about-tl { top: 0; left: 0; width: 60px; height: 60px; }
.grid-exp      { bottom: 30%; left: 3%; width: 50px; height: 50px; }
.grid-contact-tr { top: 0; right: 0; width: 80px; height: 80px; }

/* ======================================
   CROSSHAIR MARKERS
   ====================================== */
.decor-crosshair {
  position: absolute;
  pointer-events: none;
  opacity: 0.25;
}

.cross-1 {
  top: 22%;
  left: 14%;
  width: 20px;
  height: 20px;
  animation: drift-gentle 20s ease-in-out infinite 4s;
}

.cross-2 {
  top: 55%;
  right: 10%;
  width: 22px;
  height: 22px;
  animation: drift-gentle-2 16s ease-in-out infinite;
}

/* ======================================
   MEASUREMENT LINES
   ====================================== */
.decor-measure {
  position: absolute;
  pointer-events: none;
  opacity: 0.15;
}

.measure-h1 {
  top: 48%;
  left: 3%;
  width: 120px;
  height: 16px;
}

/* ======================================
   ANIMATED DATA FLOW LINES
   ====================================== */
.decor-flow {
  position: absolute;
  pointer-events: none;
  opacity: 0.5;
  overflow: visible;
}

/* Flow dot moving along line */
.flow-dot {
  animation: flow-left 7s linear infinite;
}

.flow-dot-reverse {
  animation: flow-right 9s linear infinite;
}

/* Hero flow lines */
.hero-flow-1 {
  top: 32%;
  left: 0;
  width: 300px;
  height: 2px;
}

.hero-flow-2 {
  top: 68%;
  right: 0;
  width: 200px;
  height: 2px;
}

/* Project flow line */
.proj-flow {
  top: 55%;
  left: 3%;
  width: 260px;
  height: 2px;
}

/* Contact flow line */
.contact-flow {
  bottom: 30%;
  left: 3%;
  width: 220px;
  height: 2px;
}

/* ======================================
   RESPONSIVE — MOBILE
   ====================================== */
@media (max-width: 768px) {
  /* Reduce opacity more on mobile */
  .decor-circuit { opacity: 0.1 !important; }
  .decor-network { opacity: 0.14 !important; }
  .decor-symbol  { opacity: 0.12 !important; }
  .decor-crosshair { opacity: 0.15 !important; }

  /* Hide some non-essential elements on mobile */
  .circuit-right-main,
  .circuit-about-right,
  .circuit-skills-right,
  .circuit-projects-right,
  .circuit-contact-right,
  .hero-network-right,
  .cross-1,
  .hero-flow-2,
  .grid-tr,
  .measure-h1,
  .sym-bracket-2,
  .sym-hash,
  .sym-angle-2,
  .sym-about-2,
  .sym-skills-2,
  .sym-proj-2,
  .sym-learn-2,
  .sym-contact-2 {
    display: none !important;
  }
}

/* ======================================
   REDUCED MOTION SUPPORT
   ====================================== */
@media (prefers-reduced-motion: reduce) {
  .decor-container *,
  .decor-container {
    animation: none !important;
    transition: none !important;
  }
}
</style>
