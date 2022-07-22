import { defineStore } from "pinia";


export const useUserStore = defineStore('UserStore', {
    // shorthand syntax
    state: () => ({
        user: 'Ben Hong'
    }),
    getters: {
        firstName () {
            return this.user.split(' ')[0]
        }
    }

})