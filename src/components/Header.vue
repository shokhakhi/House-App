<template>
  <header>
    <nav>
      <div>
        <img src="../../public/Frontend_Internship_Test_Slices/img_logo_dtt@3x.png" />
      </div>
      <div>
        <router-link class="link" to="/">Houses</router-link>
        <router-link class="link" to="/about">About</router-link>
      </div>
    </nav>
  </header>
</template>
  
<script>
export default {
  name: 'Header'
}
</script>
  
<style scoped>
nav {
  background-color: #FFF;
  padding: 20px 3rem;
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  nav {
    display: none;
  }
}
img {
  width: 100px;
  height: 40px;
  object-fit: contain;
  margin-right: 3rem;
}



.link {
  text-decoration: none;
  color: var(--tertiary-1);
  margin-right: 1.2rem;
  font-weight: 600;
}
.link:hover {
  color: var(--text-primary);
  transition: all 0.3s ease-in-out;
}

.link:active {
  color: var(--text-primary);
}

</style>