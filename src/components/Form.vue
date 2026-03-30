<template>
        <form class="contact-form" @submit.prevent="submitContact">
            <div class="input-contact full">
                <div class="input-col half">
                    <label for="name">Nom <span class="required">*</span></label>
                    <input v-model="form.name" type="text" placeholder="Votre nom" name="name">
                </div>
                <div class="input-col half">
                    <label for="firstname">Prénom <span class="required">*</span></label>
                    <input v-model="form.firstname" type="text" placeholder="Votre prénom" name="firstname">
                </div>
            </div>
            <div class="input-contact full">
                <div class="input-col half">
                    <label for="email">Email <span class="required">*</span></label>
                    <input v-model="form.email" type="email" placeholder="Votre email" name="email">
                </div>
                <div class="input-col half">
                    <label for="phone">Téléphone</label>
                    <input v-model="form.phone" type="tel" placeholder="Votre téléphone" name="phone">
                </div>
            </div>
            <div class="input-contact full">
                <div class="input-col full">
                    <label for="message">Message <span class="required">*</span></label>
                    <textarea v-model="form.message" placeholder="Décrivez votre projet en quelques lignes..." name="message"></textarea>
                </div>
            </div>
            <!-- honeypot -->
            <input v-model="form.website" type="text" style="display: none">

            <div class="contact-form__actions">
                <button type="submit" :disabled="loading" class="btn btn--primary">
                    {{ loading ? 'Envoi...' : 'Envoyer' }}
                </button>
            </div>
            

            <p v-if="successMessage">{{ successMessage }}</p>

            <ul v-if="errors.length">
                <li v-for="(error, index) in errors" :key="index">
                    {{ error.field ? error.field + ' : ' : '' }}{{ error.message }}
                </li>
            </ul>
        </form>
</template>

<script setup>
import { ref } from 'vue'


const form = ref({
  name: '',
  firstname: '',
  email: '',
  message: '',
  website: ''
})

const loading = ref(false)
const successMessage = ref('')
const errors = ref([])

const submitContact = async () => {
  loading.value = true
  successMessage.value = ''
  errors.value = []

  try {
    const response = await fetch('http://localhost:8084/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })

    const data = await response.json()

    if (!response.ok) {
      if (data.errors) {
        errors.value = data.errors
      } else {
        errors.value = [{ message: data.message || 'Une erreur est survenue.' }]
      }
      return
    }

    successMessage.value = data.message

    form.value = {
      name: '',
      firstname: '',
      email: '',
      phone: '',
      message: '',
      website: ''
    }
  } catch (error) {
    errors.value = [{ message: 'Impossible de contacter le serveur.' }]
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact-form {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-form__actions {
    display: flex;
    justify-content: center;
}
input, textarea {
    padding: 12px 16px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-size: 1.6rem;
    background-color: var(--btn-bg-color-primary);
    font-family: Quicksand, sans-serif;
}
input:focus, textarea:focus {
    outline: none;
    border-color: var(--active-link-text-color);
    box-shadow: 0 0 0 2px rgba(100, 100, 255, 0.2);
}
textarea {
    min-height: 120px;
    resize: none;
}

.input-contact{
    display: flex;
    gap: 1rem;
    justify-content: space-between;
}
.input-col {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.full {
    width: 100%;
}
.half {
    width: calc(50% - 10px);
}
.required {
    color: red;
}
.btn {
  padding: 10px 20px;
  font-size: 1.6rem;
  cursor: pointer;
  border: var(--border-color) 2px solid;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px;
  border-radius: 2.4rem;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
}

.btn--primary {
  background-color: var(--btn-bg-color-primary);
  color: var(--btn-text-color-primary);
}
.btn--secondary {
  background-color: var(--btn-bg-color-secondary);
  color: var(--btn-text-color-secondary);
  border: var(--border-color-secondary) 2px solid;

}

.btn--primary:hover {
  background-color: var(--btn-bg-hover-color-primary);
}
.btn--secondary:hover {
  background-color: var(--btn-bg-hover-color-secondary);
}
</style>