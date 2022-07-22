<script>
import EventCard from '../components/EventCard.vue'
import { useEventStore } from "../stores/EventStore"

export default {
  components: {
    EventCard
  },
  setup() {
    const eventStore = useEventStore()

    return {
      eventStore
    }
  },
  created() {
    // The fetchEvents() becomes a simple function instead of raw string which you need to dispatch
    this.eventStore.fetchEvents().catch(error => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error }
      })
    })
  },
  // No need to use computed property
/*  computed: {
    events() {
      return this.eventStore.state.events
    }
  }*/
}
</script>

<template>
  <h1>{{ eventStore.numberOfEvents }} Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in eventStore.events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
