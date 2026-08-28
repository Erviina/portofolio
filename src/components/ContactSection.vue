<template>
  <section id="contact" class="section contact-section">
    <BackgroundDecor section="contact" />
    <div class="container">
      <div class="contact-grid">
        <!-- Left: Info -->
        <div class="contact-info">
          <div class="section-header reveal reveal-header">
            <span class="small-label">Get in Touch</span>
            <h2 class="section-heading">Let's Connect</h2>
            <div class="accent-line"></div>
          </div>

          <p class="body-text contact-text reveal reveal-delay-1">
            I'm always open to learning, collaboration, and new opportunities. 
            Feel free to reach out if you'd like to discuss a project, share ideas, 
            or just say hello.
          </p>

          <div class="contact-links reveal reveal-delay-2">
            <!-- Email -->
            <a
              v-if="socialLinks.email && socialLinks.email !== 'YOUR_EMAIL'"
              :href="'mailto:' + socialLinks.email"
              class="contact-link-item"
            >
              <span class="contact-link-icon" aria-hidden="true">
                <svg class="contact-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <span>{{ socialLinks.email }}</span>
            </a>
            <div v-else class="contact-link-item contact-link-placeholder">
              <span class="contact-link-icon" aria-hidden="true">
                <svg class="contact-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <span class="caption">Email — belum diisi</span>
            </div>

            <!-- GitHub -->
            <a
              v-if="socialLinks.github"
              :href="socialLinks.github"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-link-item"
            >
              <span class="contact-link-icon" aria-hidden="true">
                <svg class="contact-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </span>
              <span>GitHub</span>
            </a>
            <div v-else class="contact-link-item contact-link-placeholder">
              <span class="contact-link-icon" aria-hidden="true">
                <svg class="contact-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </span>
              <span class="caption">GitHub — belum diisi</span>
            </div>

            <!-- LinkedIn -->
            <a
              v-if="socialLinks.linkedin"
              :href="socialLinks.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-link-item"
            >
              <span class="contact-link-icon" aria-hidden="true">
                <svg class="contact-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </span>
              <span>LinkedIn</span>
            </a>
            <div v-else class="contact-link-item contact-link-placeholder">
              <span class="contact-link-icon" aria-hidden="true">
                <svg class="contact-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </span>
              <span class="caption">LinkedIn — belum diisi</span>
            </div>
          </div>
        </div>

        <!-- Right: Contact Form -->
        <div class="contact-form-wrapper reveal">
          <h3 class="form-title">Send a Message</h3>

          <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
            <!-- Name -->
            <div class="form-group" :class="{ 'has-error': errors.name }">
              <label for="contact-name" class="form-label">Name</label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                class="form-input"
                placeholder="Your name"
                @blur="validateField('name')"
              />
              <span v-if="errors.name" class="form-error">{{ errors.name }}</span>
            </div>

            <!-- Email -->
            <div class="form-group" :class="{ 'has-error': errors.email }">
              <label for="contact-email" class="form-label">Email</label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                class="form-input"
                placeholder="your@email.com"
                @blur="validateField('email')"
              />
              <span v-if="errors.email" class="form-error">{{ errors.email }}</span>
            </div>

            <!-- Message -->
            <div class="form-group" :class="{ 'has-error': errors.message }">
              <label for="contact-message" class="form-label">Message</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                class="form-input form-textarea"
                placeholder="Write your message..."
                rows="5"
                @blur="validateField('message')"
              ></textarea>
              <span v-if="errors.message" class="form-error">{{ errors.message }}</span>
            </div>

            <button type="submit" class="btn btn-primary form-submit" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              <span class="btn-arrow">→</span>
            </button>

            <!-- Success message -->
            <Transition name="fade">
              <div v-if="showSuccess" class="form-success">
                ✓ Pesan berhasil dikirim. Terima kasih telah menghubungi saya!
              </div>
            </Transition>

            <!-- Submit error message -->
            <Transition name="fade">
              <div v-if="submitError" class="form-submit-error">
                {{ submitError }}
              </div>
            </Transition>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'
import BackgroundDecor from './BackgroundDecor.vue'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const socialLinks = reactive({
  email: 'ervinaksnnda@gmail.com',
  github: 'https://github.com/Erviina',
  linkedin: 'https://www.linkedin.com/in/ervina-kusnanda'
})

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const submitError = ref('')

function validateField(field) {
  errors[field] = ''

  if (field === 'name') {
    if (!form.name.trim()) {
      errors.name = 'Nama harus diisi'
    } else if (form.name.trim().length < 2) {
      errors.name = 'Nama minimal 2 karakter'
    }
  }

  if (field === 'email') {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.email.trim()) {
      errors.email = 'Email harus diisi'
    } else if (!emailPattern.test(form.email)) {
      errors.email = 'Format email tidak valid'
    }
  }

  if (field === 'message') {
    if (!form.message.trim()) {
      errors.message = 'Pesan harus diisi'
    } else if (form.message.trim().length < 10) {
      errors.message = 'Pesan minimal 10 karakter'
    }
  }

  return !errors[field]
}

function validateAll() {
  const nameValid = validateField('name')
  const emailValid = validateField('email')
  const messageValid = validateField('message')
  return nameValid && emailValid && messageValid
}

function resetForm() {
  form.name = ''
  form.email = ''
  form.message = ''
  errors.name = ''
  errors.email = ''
  errors.message = ''
}

async function handleSubmit() {
  if (!validateAll()) return

  isSubmitting.value = true
  showSuccess.value = false
  submitError.value = ''

  if (!serviceId || !templateId || !publicKey) {
    isSubmitting.value = false
    submitError.value = 'Konfigurasi EmailJS belum lengkap. Silakan coba lagi nanti.'
    return
  }

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: form.name.trim(),
        from_email: form.email.trim(),
        message: form.message.trim(),
        subject: 'Portfolio Contact Message'
      },
      { publicKey }
    )

    isSubmitting.value = false
    showSuccess.value = true
    resetForm()

    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
  } catch (error) {
    console.error('EmailJS send failed:', error)
    isSubmitting.value = false
    showSuccess.value = false
    submitError.value = 'Maaf, pesan belum dapat dikirim. Silakan coba lagi.'
  }
}
</script>

<style scoped>
.contact-section {
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 64px;
  align-items: start;
}

/* Info */
.contact-info .section-header {
  margin-bottom: 24px;
}

.contact-text {
  margin-bottom: 32px;
  line-height: 1.8;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-link-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border-radius: var(--radius-sm);
  background: var(--bg-white);
  border: 1px solid var(--border-light);
  transition:
    transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.28s ease,
    background 0.28s ease,
    color 0.28s ease;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text-primary);
}

.contact-link-item:not(.contact-link-placeholder):hover {
  border-color: rgba(233, 79, 136, 0.25);
  background: rgba(233, 79, 136, 0.04);
  color: #e94f88;
  transform: translateX(4px);
}

.contact-link-item:not(.contact-link-placeholder):hover .contact-link-icon {
  color: #e94f88;
  background: rgba(233, 79, 136, 0.06);
  border-color: rgba(233, 79, 136, 0.20);
  transform: translateY(-1px);
}

.contact-link-placeholder {
  border-style: dashed;
  cursor: default;
}

.contact-link-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  border: 1px solid rgba(233, 79, 136, 0.12);
  color: #73737c;
  transition:
    color 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}

.contact-svg {
  width: 18px;
  height: 18px;
}

/* Form */
.contact-form-wrapper {
  background: var(--bg-white);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 36px 32px;
}

.form-title {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 28px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  font-family: var(--font-body);
  font-size: 0.9375rem;
  color: var(--text-primary);
  background: var(--bg-primary);
  border: 1.5px solid var(--border-light);
  border-radius: var(--radius-sm);
  transition:
    border-color 0.28s ease,
    box-shadow 0.28s ease,
    background 0.28s ease;
  outline: none;
}

.form-input::placeholder {
  color: var(--text-tertiary);
}

.form-input:focus {
  border-color: rgba(233, 79, 136, 0.45);
  background: var(--bg-white);
  box-shadow: 0 0 0 3px rgba(233, 79, 136, 0.06);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.has-error .form-input {
  border-color: #EF4444;
}

.form-error {
  display: block;
  margin-top: 6px;
  font-size: 0.8125rem;
  color: #EF4444;
}

.form-submit {
  width: 100%;
  justify-content: center;
  margin-top: 8px;
}

.form-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-success {
  margin-top: 16px;
  padding: 14px 18px;
  background: #ECFDF5;
  color: #065F46;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #A7F3D0;
}

.form-submit-error {
  margin-top: 16px;
  padding: 14px 18px;
  background: #FEF2F2;
  color: #991B1B;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #FECACA;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-form-wrapper {
    padding: 28px 24px;
  }
}
</style>
