<template>
  <nav>
    <div class="logo">Aniket Gade - Portfolio</div>
    <button class="menu-btn" @click="showMenu = !showMenu" aria-label="Toggle menu">☰</button>
    <ul :class="{ open: showMenu }">
      <li v-for="l in links" :key="l.href"><a :href="l.href">{{ l.label }}</a></li>
    </ul>
  </nav>
</template>
<script setup>
import { ref } from 'vue'
const links = [{href:'#about',label:'About'},{href:'#experience',label:'Experience'},{href:'#projects',label:'Projects'},{href:'#education',label:'Education'},{href:'#contact',label:'Contact'}]
const showMenu = ref(false)
</script>
<style scoped>
nav { position:fixed; top:0; left:0; right:0; z-index:100; display:flex; align-items:center; justify-content:space-between; padding:1.25rem 3rem; backdrop-filter:blur(20px); background:rgba(5,5,8,0.6); border-bottom:1px solid var(--border); }
.logo { font-family:var(--mono); font-size:0.85rem; color:var(--accent3); letter-spacing:0.05em; }
ul { display:flex; gap:2rem; list-style:none; align-items:center; margin:0; }
li a { color:var(--text-muted); text-decoration:none; font-size:0.78rem; letter-spacing:0.12em; text-transform:uppercase; transition:color 0.2s; font-weight:500; }
li a:hover { color:var(--text); }
.menu-btn { display:none; background:transparent; border:none; color:var(--text-muted); font-size:1.25rem; cursor:pointer; }

/* Mobile: hide regular links, show menu button */
@media (max-width: 768px) {
  .menu-btn { display:block; }
  ul { position:fixed; top:64px; right:12px; background:rgba(5,5,8,0.9); backdrop-filter:blur(8px); border:1px solid var(--border); padding:0.75rem 1rem; flex-direction:column; gap:0.5rem; border-radius:6px; display:none; }
  ul.open { display:flex; }
}

@media (max-width: 1024px) {
  nav { padding:1rem 1.75rem; }
}
</style>
