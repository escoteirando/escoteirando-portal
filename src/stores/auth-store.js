import { defineStore } from 'pinia';
import { useMappa } from 'src/composables/mappa';
const mappa = useMappa()
export const useAuthStore = defineStore('auth', {

  state: () => ({
    auth: '',
    userId: 0,
    validUntil: new Date()
  }),
  getters: {
    isAuthenticated: (state) => !!state.auth,
  },
  actions: {
    async login (username, password) {
      try {
        const data = await mappa.login(username, password)
        this.auth = data.auth
        this.userId = data.userId
        this.validUntil = new Date(data.created).getTime() + data.ttl * 1000
      } catch (e) {
        console.error(e)
      }

    }
  }
})
