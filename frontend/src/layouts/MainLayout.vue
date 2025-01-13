<template>
  <div>
    <header>
      <h1>My POS App</h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/test-one">Test One</router-link> |
        <router-link to="/test-two">Test Two</router-link>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <p>&copy; 2025 My POS App</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
}

nav a {
  color: #fff;
  margin: 0 1rem;
  text-decoration: none;
}

main {
  padding: 2rem;
}

footer {
  background-color: #f1f1f1;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}
</style>
