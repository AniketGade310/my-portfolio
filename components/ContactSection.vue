<template>
  <section class="section-wrap contact">
    <div class="inner reveal">
      <h2 class="headline">Let's build<br><span>something great</span></h2>
      <p class="sub">Open to exciting full-time roles, freelance projects, and collaboration opportunities.</p>
      <div class="links">
        <a href="mailto:aniketgade2002@gmail.com" class="contact-link"><span class="dot" />aniketgade2002@gmail.com</a>
        <a href="tel:+918459527565" class="contact-link">+91 8459527565</a>
        <span class="contact-link">Katraj, Pune, Maharashtra</span>
      </div>
      <a href="mailto:aniketgade2002@gmail.com" class="btn-cta">Send a message →</a>
    </div>
  </section>
</template>
<style scoped>
.contact { text-align:center; padding: 3rem 0;}
.inner { display:flex; flex-direction:column; align-items:center; gap:2rem; }
.headline { font-size:clamp(2rem,5vw,4rem); font-weight:800; letter-spacing:-0.03em; line-height:1; }
.headline span { font-family:var(--serif); font-style:italic; font-weight:400; color:var(--text-muted); }
.sub { color:var(--text-muted); font-size:0.95rem; max-width:400px; line-height:1.7; font-weight:400; }
.links { display:flex; gap:1rem; flex-wrap:wrap; justify-content:center; }
.contact-link { display:flex; align-items:center; gap:0.5rem; padding:0.75rem 1.5rem; border:1px solid var(--border); border-radius:3px; color:var(--text-muted); text-decoration:none; font-family:var(--mono); font-size:0.78rem; transition:all 0.25s; letter-spacing:0.05em; cursor:none; }
.contact-link:hover { border-color:var(--accent); color:var(--accent); }
.dot { width:6px; height:6px; border-radius:50%; background:var(--accent3); animation:pulse 2s infinite; flex-shrink:0; }
@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }
.btn-cta { display:inline-flex; align-items:center; padding:1rem 2.5rem; background:var(--accent); color:white; text-decoration:none; border-radius:3px; font-family:var(--mono); font-size:0.82rem; letter-spacing:0.1em; text-transform:uppercase; transition:all 0.25s; cursor:none; border:1px solid var(--accent); }
.btn-cta:hover { background:transparent; color:var(--accent); }

@media (max-width: 640px) {
  .inner { padding:0 1rem; }
  .links { flex-direction:column; width:100%; }
  .contact-link { width:100%; justify-content:center; }
  .btn-cta { width:100%; justify-content:center; }
}
</style>
