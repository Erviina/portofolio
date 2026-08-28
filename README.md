# Ervina Kusnanda — Personal Portfolio Website

Portfolio website yang dibangun menggunakan **Vue.js 3** + **Vite**.  
Light Mode only, desain minimal modern dengan soft pink accent.

---

## 🚀 Cara Menjalankan Project

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Buka browser di http://localhost:5173
```

Untuk production build:

```bash
npm run build
npm run preview
```

---

## 📁 Struktur Folder

```
src/
├── components/           ← Semua komponen Vue
│   ├── Navbar.vue
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── SkillsSection.vue
│   ├── SkillCard.vue
│   ├── ProjectsSection.vue
│   ├── ProjectCard.vue
│   ├── ProjectModal.vue
│   ├── ExperienceSection.vue
│   ├── LearningSection.vue
│   ├── ContactSection.vue
│   └── FooterSection.vue
│
├── data/                 ← Data yang mudah diubah
│   ├── projects.js       ← Data project
│   ├── skills.js         ← Data skill & teknologi
│   ├── experience.js     ← Data pengalaman
│   └── learning.js       ← Data yang sedang dipelajari
│
├── assets/               ← Gambar & media
│   ├── profile/          ← Foto profile
│   └── projects/         ← Screenshot project
│
├── App.vue               ← Komponen utama
├── main.js               ← Entry point
└── style.css             ← Global styles & design system

public/
└── documents/
    └── cv.pdf            ← File CV untuk didownload
```

---

## ✏️ File yang Perlu Diganti

### 1. Foto Profile

Letakkan foto di `src/assets/profile/` lalu ubah di `HeroSection.vue`:
```vue
<!-- Ganti placeholder dengan: -->
<img src="../assets/profile/foto-kamu.jpg" alt="Ervina Kusnanda" class="hero-photo" />
```

### 2. Screenshot Project

Letakkan screenshot di `src/assets/projects/` lalu ubah di `src/data/projects.js`:
```javascript
image: new URL('../assets/projects/project-1.jpg', import.meta.url).href,
```

Dan update `ProjectCard.vue` untuk menampilkan gambar:
```vue
<img v-if="project.image" :src="project.image" :alt="project.title" />
<div v-else class="image-placeholder">...</div>
```

### 3. File CV

Ganti file `public/documents/cv.pdf` dengan file CV asli dalam format PDF.

### 4. Email, GitHub, LinkedIn

Buka `src/components/ContactSection.vue`, cari bagian `socialLinks`:
```javascript
const socialLinks = reactive({
  github: 'https://github.com/username-kamu',
  linkedin: 'https://linkedin.com/in/username-kamu',
  email: 'email@kamu.com'
})
```

### 5. Detail Project

Buka `src/data/projects.js` dan ganti semua value `PLACEHOLDER` dan `null`:
```javascript
{
  id: 1,
  title: 'Nama Project',
  category: 'Kategori',
  image: '...',           // path ke screenshot
  tags: ['Tag1', 'Tag2'],
  overview: 'Ringkasan project...',
  role: 'Peran kamu...',
  description: 'Deskripsi lengkap...',
  gallery: [],
  links: {
    github: 'https://github.com/...',
    demo: 'https://...',
    figma: 'https://...'
  }
}
```

### 6. Pengalaman

Buka `src/data/experience.js` dan:
- Ganti `PLACEHOLDER` pada period dengan periode waktu
- Ganti organisasi placeholder dengan data asli
- Tambahkan pengalaman baru

---

## ➕ Cara Menambahkan Data Baru

### Menambah Project Baru

Buka `src/data/projects.js`, tambahkan object baru ke array:
```javascript
{
  id: 5,  // increment dari project terakhir
  title: 'Nama Project Baru',
  category: 'Kategori',
  image: null,
  tags: ['Tag1', 'Tag2'],
  overview: 'Ringkasan...',
  role: 'Peran...',
  description: 'Deskripsi...',
  gallery: [],
  links: { github: null, demo: null, figma: null }
}
```

### Menambah Skill Baru

Buka `src/data/skills.js`:
- Tambahkan item ke array `items` di kategori yang sesuai
- Atau tambahkan kategori baru ke array `skillCategories`

### Menambah Pengalaman Baru

Buka `src/data/experience.js`, tambahkan object baru ke array.

### Menambah Topik Learning

Buka `src/data/learning.js`, tambahkan object baru ke array.

---

## 🎨 Cara Mengubah Warna

Buka `src/style.css`, ubah CSS Variables di `:root`:
```css
:root {
  --accent: #E85D8B;       /* Warna accent utama */
  --accent-soft: #FCE7EE;  /* Warna accent soft */
  --accent-light: #FFF3F6; /* Background accent */
  /* ... */
}
```

---

## 📌 Bagian yang Menggunakan Placeholder

| File | Placeholder |
|------|------------|
| `HeroSection.vue` | Foto profile |
| `data/projects.js` | Overview, role, description, links, image |
| `data/experience.js` | Period, organisasi, 1 pengalaman placeholder |
| `ContactSection.vue` | Email, GitHub, LinkedIn |
| `public/documents/cv.pdf` | File CV |

Cari komentar `// TODO:` di seluruh kode untuk menemukan semua placeholder.

---

## 🔧 Pengembangan Selanjutnya

Website ini dirancang agar mudah dikembangkan:

- **Backend API** → Ubah `handleSubmit()` di `ContactSection.vue` untuk mengirim data ke REST API
- **Database** → Hubungkan contact form ke PHP + MySQL
- **Admin Dashboard** → Buat halaman admin untuk mengelola project & pesan
- **Vue Router** → Tambahkan routing jika ingin halaman terpisah
- **Animation Library** → Tambahkan GSAP atau Motion One jika butuh animasi lebih kompleks

---

## 📝 Tech Stack

- Vue.js 3 (Composition API)
- Vite
- CSS (vanilla, CSS Variables)
- Google Fonts (Plus Jakarta Sans, Inter)
