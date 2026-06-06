<template>
  <section class="section-wrap">
    <div class="section-header reveal">
      <span class="section-num">01</span>
      <h2 class="section-title">Technical Stack</h2>
      <div class="section-line" />
    </div>
    <div class="skills-grid reveal">
      <div class="skill-cell" v-for="s in skills" :key="s.name">
        <div class="skill-cat">{{ s.cat }}</div>
        <div class="skill-name">{{ s.name }}</div>
      </div>
    </div>
  </section>
</template>
<script setup>
const skills = [
  {cat:'Frontend',name:'React.js'},{cat:'Mobile',name:'React Native'},{cat:'Frontend',name:'Vue.js'},
  {cat:'Framework',name:'Next.js'},{cat:'Framework',name:'Nuxt 3'},{cat:'Backend',name:'NestJS'},
  {cat:'Language',name:'TypeScript'},{cat:'Language',name:'JavaScript ES6+'},{cat:'State',name:'Redux'},
  {cat:'State',name:'Zustand'},{cat:'UI',name:'Material UI'},{cat:'UI',name:'Tailwind CSS'},
  {cat:'Backend',name:'Node.js'},{cat:'Database',name:'MongoDB'},{cat:'API',name:'REST APIs'},
  {cat:'Platform',name:'Shopify Headless'},
]
</script>
<style scoped>
.section-header{ display: flex;gap: 1rem;padding: 2rem 0;justify-content: center;}
.skills-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(180px,1fr)); gap:1rem; background:var(--border); border:1px solid var(--border); border-radius:4px; overflow:hidden;margin:0px 20px ;padding: 20px;}
.skill-cell { background:var(--bg); padding:1.25rem 1.5rem; transition:all 0.2s; position:relative; overflow:hidden; }
.skill-cell::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(108,99,255,0.08),rgba(67,232,184,0.04)); opacity:0; transition:opacity 0.3s; }
.skill-cell:hover::before { opacity:1; }
.skill-cat { font-family:var(--mono); font-size:0.65rem; color:var(--accent3); letter-spacing:0.15em; text-transform:uppercase; margin-bottom:0.5rem; }
.skill-name { font-family:var(--mono); font-size:0.8rem; color:var(--text-muted); font-weight:500; }
.skill-cell:hover .skill-name { color:var(--text); }

@media (max-width: 1024px) {
  .skills-grid { margin:0 1.5rem; padding:16px; }
}

@media (max-width: 640px) {
  .skills-grid { margin:0 1rem; padding:12px; grid-template-columns:repeat(2,1fr); gap:0.6rem; }
  .skill-cell { padding:0.9rem 1rem; }
  .skill-name { font-size:0.78rem; }
}
</style>
