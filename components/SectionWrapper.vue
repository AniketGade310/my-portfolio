<template>
	<div class="section-wrap"><slot /></div>
</template>
<style>
.section-wrap { max-width:1200px; margin:0 auto; padding:6rem 3rem; }
.section-header { display:flex; align-items:baseline; gap:1.5rem; margin-bottom:3.5rem; }
.section-num { font-family:var(--mono); font-size:0.72rem; color:var(--accent); letter-spacing:0.2em; }
.section-title { font-size:clamp(1.8rem,4vw,2.8rem); font-weight:800; letter-spacing:-0.02em; line-height:1; color:var(--text); }
.section-line { flex:1; height:1px; background:var(--border); max-width:200px; }

/* Responsive adjustments */
@media (max-width: 1024px) {
	.section-wrap { padding:4rem 2rem; }
	.section-header { margin-bottom:2rem; }
}

@media (max-width: 640px) {
	.section-wrap { padding:3rem 1.25rem; }
	.section-header { gap:1rem; margin-bottom:1.25rem; }
	.section-title { font-size:clamp(1.4rem,5vw,2rem); }
}
</style>
