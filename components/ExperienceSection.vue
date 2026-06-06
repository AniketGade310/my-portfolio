<template>
  <section class="section-wrap">
    <div class="section-header reveal">
      <span class="section-num">02</span>
      <h2 class="section-title">Experience</h2>
      <div class="section-line" />
    </div>
    <div class="exp-list">
      <div class="exp-card reveal" v-for="job in jobs" :key="job.company">
        <div class="exp-head">
          <div><div class="exp-role">{{ job.role }}</div><div class="exp-company">{{ job.company }}</div></div>
          <div class="exp-period">{{ job.period }}</div>
        </div>
        <ul class="exp-bullets">
          <li v-for="b in job.bullets" :key="b">{{ b }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
const jobs = [
  { role:'Senior Software Product Analyst', company:'Bluebenz Digitization Pvt Ltd', period:'Jan 2024 — Present',
    bullets:['Led development of 6 production applications across React Native and Next.js platforms','Built Carscan — AI-powered vehicle inspection app with automated damage detection','Developed Face Liveness — biometric authentication with real-time liveness detection','Engineered Jaypara — headless Shopify e-commerce with SEO optimization','Delivered TARA — Jira-style task management with sprint planning and real-time collaboration','Built ARTFC — FinTech loan app with secure document uploads and financial API integrations','Created RIT-LMS — Learning Management System with course delivery and progress tracking'] },
  { role:'MERN Full Stack Web Developer', company:'ByzWiz Infratech Pvt Ltd', period:'Sep 2022 — Oct 2023',
    bullets:['Designed and developed full-stack applications using MongoDB, Express.js, React.js, and Node.js','Collaborated with cross-functional teams to deliver scalable, maintainable codebases','Implemented RESTful APIs and integrated third-party services to extend platform functionality','Participated in code reviews and agile practices to ensure high code quality'] },
]
</script>
<style scoped>
.section-header{ display: flex;gap: 1rem;padding: 2rem 0;justify-content: center;}
.exp-list { display:flex; flex-direction:row; gap:1rem;margin: 0 2rem; }
.exp-card { background:var(--surface); border:1px solid var(--border); border-radius:4px; padding:2rem 2.5rem; transition:border-color 0.3s,box-shadow 0.3s; }
.exp-card:hover { border-color:var(--border-hover); box-shadow:0 0 30px rgba(108,99,255,0.08); }
.exp-head { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1.25rem; gap:1rem; flex-wrap:wrap; }
.exp-role { font-size:1.15rem; font-weight:700; margin-bottom:0.25rem; letter-spacing:-0.01em; }
.exp-company { font-family:var(--mono); font-size:0.75rem; color:var(--accent3); letter-spacing:0.1em; }
.exp-period { font-family:var(--mono); font-size:0.72rem; color:var(--text-dim); letter-spacing:0.08em; white-space:nowrap; }
.exp-bullets { list-style:none; display:flex; flex-direction:column; gap:0.6rem; }
.exp-bullets li { font-size:0.88rem; color:var(--text-muted); line-height:1.6; display:flex; gap:0.75rem; }
.exp-bullets li::before { content:'→'; color:var(--accent); flex-shrink:0; font-family:var(--mono); font-size:0.8rem; margin-top:0.1rem; }

@media (max-width: 1024px) {
  .exp-list { gap:0.75rem; margin: 0 1.5rem; }
  .exp-card { padding:1.6rem 1.6rem; }
}

@media (max-width: 640px) {
  .exp-list { flex-direction:column; margin:0; }
  .exp-card { padding:1.2rem 1rem; }
  .exp-head { flex-direction:column; align-items:flex-start; gap:0.5rem; }
  .exp-period { white-space:normal; }
}
</style>
