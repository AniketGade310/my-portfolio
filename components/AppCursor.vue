<template>
  <div>
    <div ref="dot" class="cursor-dot" />
    <div ref="ring" class="cursor-ring" />
  </div>
</template>
<script setup>
const dot = ref(null), ring = ref(null)
let mx=-100, my=-100, rx=-100, ry=-100
onMounted(() => {
  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY })
  const tick = () => {
    if(dot.value) dot.value.style.transform=`translate(${mx-6}px,${my-6}px)`
    rx+=(mx-rx)*0.12; ry+=(my-ry)*0.12
    if(ring.value) ring.value.style.transform=`translate(${rx-18}px,${ry-18}px)`
    requestAnimationFrame(tick)
  }
  tick()
})
</script>
<style scoped>
.cursor-dot { position:fixed; width:12px; height:12px; background:var(--accent); border-radius:50%; pointer-events:none; z-index:9999; mix-blend-mode:screen; }
.cursor-ring { position:fixed; width:36px; height:36px; border:1px solid rgba(108,99,255,0.5); border-radius:50%; pointer-events:none; z-index:9998; transition:width 0.3s,height 0.3s; }

/* Hide custom cursor on touch devices where it is not applicable */
@media (hover: none), (pointer: coarse) {
  .cursor-dot, .cursor-ring { display:none !important; }
}
</style>
