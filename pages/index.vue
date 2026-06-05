<template>
  <div>
    <AppCursor />
    <BgCanvas />
    <AppNav />
    <HeroSection id="about" />
    <div class="sep" />
    <SkillsSection id="skills" />
    <div class="sep" />
    <ExperienceSection id="experience" />
    <div class="sep" />
    <ProjectsSection id="projects" />
    <div class="sep" />
    <EducationSection id="education" />
    <div class="sep" />
    <ContactSection id="contact" />
    <AppFooter />
  </div>
</template>
<script setup>
useHead({ title: 'Aniket Gade — Portfolio' })
onMounted(() => {
  const els = document.querySelectorAll('.reveal')
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.08 })
  els.forEach(el => io.observe(el))
})
</script>
<style>
.sep { height:1px; background:linear-gradient(90deg,transparent,var(--border),transparent); position:relative; z-index:10; }
</style>
