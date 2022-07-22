import { defineStore } from 'pinia'
import EventService from '../services/EventService.js'

export const useEventStore = defineStore('EventStore', {
    state() {
        return {
            events: [],
            event: {}
        }
    },
    getters: {
        numberOfEvents: state => state.events.length

    },
    actions: {
        // We don't need commit() function here as we do in vuex
        fetchEvents() {
            return EventService.getEvents()
              .then(response => {
                this.events = response.data
              })
              .catch(error => {
                throw error
              })
          }        
    }
    
})