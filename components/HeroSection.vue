<template>
  <section class="hero-wrap">
    <div class="hero-inner">
      <div class="tag">Available for WORK</div>
      <h1 class="hero-name">
        <span class="first">Aniket</span>
        <span class="last">
          <span class="outline">Gade</span>
          <span class="fill" :style="{ width: filled ? '100%' : '0%' }">Gade</span>
        </span>
      </h1>
      <p class="hero-title">
        Senior Software Product Analyst &amp; Full-Stack Developer
      </p>
      <p class="hero-desc">
        Results-driven Senior Software Product Analyst with 3.5+ years of hands-on
        experience building scalable, highperformance web and mobile
        applications. Proficient in React, React Native, Vue.js, Next.js, Nuxt3,
        NestJS, and TypeScript. Proven track record delivering production-grade
        applications across FinTech, E-commerce, EdTech, and SaaS domains.
        Passionate about clean code architecture, responsive UI/UX design, and
        delivering user-first digital products.
      </p>
      <div class="cta">
        <a href="#contact" class="btn-primary">Get in touch →</a>
        <a href="#projects" class="btn-ghost">View projects</a>
      </div>
      <div class="stats">
        <div class="stat" v-for="s in stats" :key="s.label">
          <span class="stat-num">{{ s.num }}</span>
          <span class="stat-label">{{ s.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const filled = ref(false);
const stats = [
  { num: "3+", label: "Years experience" },
  { num: "6+", label: "Production apps" },
  { num: "4", label: "Industry domains" },
  { num: "90%", label: "Academic distinction" },
];
onMounted(() =>
  setTimeout(() => {
    filled.value = true;
  }, 400),
);
</script>
<style scoped>
.hero-wrap {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 3rem 3rem;
  position: relative;
  z-index: 10;
}

.hero-inner {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.tag {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--accent3);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.tag::before {
  content: "";
  display: block;
  width: 32px;
  height: 1px;
  background: var(--accent3);
}

.hero-name {
  font-size: clamp(3.5rem, 8vw, 7.5rem);
  font-weight: 800;
  line-height: 0.92;
  letter-spacing: -0.03em;
  margin-bottom: 0.25rem;
  display: flex;
  flex-direction: column;
}

.first {
  color: var(--text);
}

.last {
  position: relative;
  display: inline-block;
}

.outline {
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.3);
}

.fill {
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(135deg, var(--accent), var(--accent3));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  overflow: hidden;
  white-space: nowrap;
  transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-title {
  font-family: var(--serif);
  font-size: clamp(1.1rem, 2.5vw, 1.6rem);
  color: var(--accent3);
  font-style: italic;
  margin: 1.5rem 0 2rem;
}

.hero-desc {
  max-width: 560px;
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 2.5rem;
  font-weight: 400;
}

.cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary,
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  border-radius: 3px;
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.25s;
  font-weight: 500;
  cursor: none;
}

.btn-primary {
  background: var(--accent);
  color: white;
  border: 1px solid var(--accent);
}

.btn-primary:hover {
  background: transparent;
  color: var(--accent);
}

.btn-ghost {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border-hover);
}

.btn-ghost:hover {
  border-color: var(--accent3);
  color: var(--accent3);
}

.stats {
  margin-top: 4rem;
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: space-between;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-num {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent), var(--accent3));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.stat-label {
  font-family: var(--mono);
  font-size: 1rem;
  color: var(--text-dim);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
</style>
