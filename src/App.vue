<template>
  <div id="app">
    <Header />
      <router-view />
  </div>
</template>


<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

:root {
  --primary: #EB5440;
  --secondary: #4A4B4C;
  --tertiary-1: #E8E8E8;
  --tertiary-2: #C3C3C3;
  --background-1: #F6F6F6;
  --background-2: #FFFFFF;
  --text-primary: #000000;
  --text-secondary: #4A4B4C;
  --hyperlink: #067BC2;
}

body {
  font-family: 'Montserrat';
  background-color: var(--background-1);
  color: var(--text-secondary);
  margin: 0;
  font-size: 18px;
}

.container {
  /* padding: 3rem 3rem; */
}

@media (max-width: 768px) {
  .container {
  padding: 1rem 1rem;
}
}
</style>
