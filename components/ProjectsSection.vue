<template>
  <section class="section-wrap">
    <div class="section-header reveal">
      <span class="section-num">03</span>
      <h2 class="section-title">Key Projects</h2>
      <div class="section-line" />
    </div>
    <div class="projects-grid reveal">
      <div class="project-card" v-for="p in projects" :key="p.name">
        <div class="project-icon">{{ p.icon }}</div>
        <div class="project-name">{{ p.name }}</div>
        <div class="project-desc">{{ p.desc }}</div>
        <div class="project-tags"><span class="tag" v-for="t in p.tags" :key="t">{{ t }}</span></div>
      </div>
    </div>
  </section>
</template>
<script setup>
const projects = [
  {icon:'🔍',name:'Carscan',desc:'AI-powered vehicle inspection app with automated damage detection, complex UI components, and optimized API integration.',tags:['React Native','AI/ML','Xcode','Android Studio']},
  {icon:'🏦',name:'ARTFC',desc:'FinTech loan application with secure user journey, document uploads, real-time status tracking, and financial API integration.',tags:['React Native','FinTech APIs','Xcode']},
  {icon:'🛍️',name:'Jaypara',desc:'Full-featured headless e-commerce storefront with Shopify integration, custom CMS architecture, and SEO-first development.',tags:['Next.js','Shopify','Headless CMS','SEO']},
  {icon:'📋',name:'TARA',desc:'Jira-like agile task management platform with sprint planning, ticket tracking, and real-time team collaboration.',tags:['React Native','Real-time','Agile']},
  {icon:'👁️',name:'Face Liveness',desc:'Biometric authentication app with real-time liveness detection for secure identity verification in production.',tags:['React Native','Biometrics','Security']},
  {icon:'📚',name:'RIT-LMS',desc:'Learning Management System with course delivery pipeline, student progress tracking, and responsive dashboards.',tags:['React','EdTech','Dashboard']},
]
</script>
<style scoped>
.section-header{ display: flex;gap: 1rem;padding: 2rem 0;justify-content: center;}
.projects-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:1rem; background:var(--border); border:1px solid var(--border); border-radius:4px; overflow:hidden; margin: 0 2rem;padding: 2rem;}
.project-card { background:var(--bg); padding:2rem; position:relative; overflow:hidden; cursor:none; transition:background 0.3s; }
.project-card::after { content:''; position:absolute; bottom:0; left:0; right:0; height:2px; background:linear-gradient(90deg,var(--accent),var(--accent3)); transform:scaleX(0); transition:transform 0.35s cubic-bezier(0.16,1,0.3,1); transform-origin:left; }
.project-card:hover { background:var(--surface); }
.project-card:hover::after { transform:scaleX(1); }
.project-icon { width:44px; height:44px; border-radius:3px; display:flex; align-items:center; justify-content:center; font-size:1.4rem; margin-bottom:1.25rem; background:rgba(108,99,255,0.12); border:1px solid rgba(108,99,255,0.2); }
.project-name { font-size:1.05rem; font-weight:700; margin-bottom:0.5rem; letter-spacing:-0.01em; }
.project-desc { font-size:0.85rem; color:var(--text-muted); line-height:1.7; margin-bottom:1.25rem; }
.project-tags { display:flex; flex-wrap:wrap; gap:0.4rem; }
.tag { font-family:var(--mono); font-size:0.68rem; padding:0.25rem 0.6rem; background:rgba(255,255,255,0.04); border:1px solid var(--border); border-radius:2px; color:var(--text-dim); letter-spacing:0.05em; transition:all 0.2s; }
.project-card:hover .tag { border-color:rgba(108,99,255,0.3); color:var(--text-muted); }

@media (max-width: 1024px) {
  .projects-grid { margin:0 1.5rem; padding:1.5rem; }
}

@media (max-width: 640px) {
  .projects-grid { margin:0 1rem; padding:1rem; grid-template-columns:1fr; }
  .project-card { padding:1rem; }
}
</style>
