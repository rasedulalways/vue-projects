<script setup>

</script>

<template>

<div>
  <nav class="py-3 text-lg bg-green-200">
    <RouterLink to="/" class="px-4 py-2 mx-2 transition duration-500 rounded-md hover:text-white hover:bg-black">Home</RouterLink>|
    <RouterLink to="/about" class="px-4 py-2 mx-2 transition duration-500 rounded-md hover:text-white hover:bg-black">About</RouterLink>
  </nav>
</div>

  <!-- <RouterView /> -->

  <router-view></router-view>
</template>

<style scoped>

</style>
