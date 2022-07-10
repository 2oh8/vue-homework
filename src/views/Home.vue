<template>
  <div class="home">
    <AppContent />
  </div>
</template>

<script>
  // @ is an alias to /src
  import AppContent from '@/components/AppContent.vue'

  export default {
    name: 'Home',
    components: {
      AppContent
    }
  }
</script>