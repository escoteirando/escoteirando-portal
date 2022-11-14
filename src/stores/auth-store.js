import { defineStore } from 'pinia';
import { useMappa } from 'src/composables/mappa';
import { LocalStorage } from 'quasar';

const mappa = useMappa()
const storeStorageKey = 'authStore'

function loadFromStorage () {
  const data = LocalStorage.getItem(storeStorageKey) || {}

  return {
    auth: data.auth || '',
    userId: data.userId || 0,
    validUntil: new Date(data.validUntil) || new Date(0)
  }
}


export const useAuthStore = defineStore('auth', {

  state: () => loadFromStorage(),
  getters: {
    isAuthenticated: (state) => !!state.auth,
  },
  actions: {
    async login (username, password) {
      try {
        const data = await mappa.login(username, password)
        console.log('Login OK', data)
        this.auth = data.id
        this.userId = data.userId
        this.validUntil = new Date(data.created).getTime() + data.ttl * 1000
        LocalStorage.set(storeStorageKey, this.$state)
      } catch (e) {
        console.error(e)
      }
    }
  }
})
