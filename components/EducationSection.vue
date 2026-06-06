<template>
  <section class="section-wrap">
    <div class="section-header">
      <span class="section-num">04</span>
      <h2 class="section-title">Education</h2>
      <div class="section-line" />
    </div>
    <div class="reveal" style="overflow-x:auto">
      <table class="edu-table">
        <thead><tr><th>Degree</th><th>Institution</th><th>Board</th><th>Score</th></tr></thead>
        <tbody>
          <tr v-for="e in education" :key="e.degree">
            <td><div class="deg">{{ e.degree }}</div><div class="sub">{{ e.full }}</div></td>
            <td><div class="sub">{{ e.inst }}</div></td>
            <td><div class="sub">{{ e.board }}</div></td>
            <td><div class="score">{{ e.score }}</div><div class="badge">Distinction</div></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script setup>
const education = [
  {degree:'MCA',full:'Master of Computer Applications',inst:'Jaikranti College, Pune',board:'Pune University',score:'87.30%'},
  {degree:'BCS',full:'Bachelor of Computer Science',inst:'Jaikranti College, Pune',board:'Pune University',score:'90.23%'},
  {degree:'H.S.C',full:'Higher Secondary Certificate',inst:'Shri Shivaji Mahavidyalaya, Barshi',board:'Pune Board',score:'83.23%'},
  {degree:'S.S.C',full:'Secondary School Certificate',inst:'Janseva Vidyalaya, Bavi',board:'Latur Board',score:'91.40%'},
]
</script>
<style scoped>
.section-header{ display: flex;gap: 1rem;padding: 2rem 0;justify-content: center;}
.reveal{padding: 0 2rem;}
.edu-table { width:100%; border-collapse:collapse; }
th { font-family:var(--mono); font-size:0.68rem; color:var(--text-dim); letter-spacing:0.15em; text-transform:uppercase; text-align:left; padding:0 1.5rem 1rem 0; border-bottom:1px solid var(--border); }
td { padding:1.25rem 1.5rem 1.25rem 0; border-bottom:1px solid var(--border); font-size:0.9rem; vertical-align:top; }
tr:last-child td { border-bottom:none; }
.deg { font-weight:600; color:var(--text); }
.sub { color:var(--text-muted); font-size:0.82rem; margin-top:0.2rem; }
.score { font-family:var(--mono); color:var(--accent3); font-size:0.85rem; }
.badge { display:inline-block; font-family:var(--mono); font-size:0.65rem; padding:0.2rem 0.5rem; background:rgba(67,232,184,0.08); border:1px solid rgba(67,232,184,0.2); border-radius:2px; color:var(--accent3); letter-spacing:0.1em; margin-top:0.4rem; }
</style>
