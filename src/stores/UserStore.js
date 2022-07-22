import { defineStore } from "pinia";


export const useUserStore = defineStore('UserStore', {
    // shorthand syntax
    state: () => ({
        user: 'Ben Hong'
    })

})