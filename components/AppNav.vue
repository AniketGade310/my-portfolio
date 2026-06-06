<template>
  <nav>
    <div class="logo">Aniket Gade - Portfolio</div>
    <ul>
      <li v-for="l in links" :key="l.href"><a :href="l.href">{{ l.label }}</a></li>
    </ul>
  </nav>
</template>
<script setup>
const links = [{href:'#about',label:'About'},{href:'#experience',label:'Experience'},{href:'#projects',label:'Projects'},{href:'#education',label:'Education'},{href:'#contact',label:'Contact'}]
</script>
<style scoped>
nav { position:fixed; top:0; left:0; right:0; z-index:100; display:flex; align-items:center; justify-content:space-between; padding:1.5rem 3rem; backdrop-filter:blur(20px); background:rgba(5,5,8,0.6); border-bottom:1px solid var(--border); }
.logo { font-family:var(--mono); font-size:0.85rem; color:var(--accent3); letter-spacing:0.05em; }
ul { display:flex; gap:2.5rem; list-style:none; }
a { color:var(--text-muted); text-decoration:none; font-size:0.78rem; letter-spacing:0.12em; text-transform:uppercase; transition:color 0.2s; font-weight:500; }
a:hover { color:var(--text); }
</style>
