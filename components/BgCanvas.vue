<template>
  <canvas ref="canvas" class="bg-canvas" />
</template>
<script setup>
const canvas = ref(null)
onMounted(async () => {
  const THREE = await import('three')
  const el = canvas.value
  const renderer = new THREE.WebGLRenderer({ canvas: el, antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 200)
  camera.position.z = 30
  const N=1800, geo=new THREE.BufferGeometry()
  const pos=new Float32Array(N*3), cols=new Float32Array(N*3)
  const c1=new THREE.Color('#6C63FF'), c2=new THREE.Color('#43E8B8')
  for(let i=0;i<N;i++){
    pos[i*3]=(Math.random()-.5)*120; pos[i*3+1]=(Math.random()-.5)*80; pos[i*3+2]=(Math.random()-.5)*80
    const c=c1.clone().lerp(c2,Math.random()); cols[i*3]=c.r; cols[i*3+1]=c.g; cols[i*3+2]=c.b
  }
  geo.setAttribute('position',new THREE.BufferAttribute(pos,3))
  geo.setAttribute('color',new THREE.BufferAttribute(cols,3))
  scene.add(new THREE.Points(geo, new THREE.PointsMaterial({size:0.5,vertexColors:true,transparent:true,opacity:0.6})))
  const bGeo=new THREE.BoxGeometry(4,4,4)
  const boxes=Array.from({length:6},(_,i)=>{
    const l=new THREE.LineSegments(new THREE.EdgesGeometry(bGeo),new THREE.LineBasicMaterial({color:i%2===0?0x6C63FF:0x43E8B8,transparent:true,opacity:0.1}))
    l.position.set((Math.random()-.5)*40,(Math.random()-.5)*30,(Math.random()-.5)*20-10)
    l.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI)
    scene.add(l); return {mesh:l,rx:(Math.random()-.5)*.003,ry:(Math.random()-.5)*.003}
  })
  let mX=0,mY=0
  document.addEventListener('mousemove',e=>{mX=(e.clientX/window.innerWidth-.5)*2; mY=(e.clientY/window.innerHeight-.5)*2})
  window.addEventListener('resize',()=>{renderer.setSize(window.innerWidth,window.innerHeight);camera.aspect=window.innerWidth/window.innerHeight;camera.updateProjectionMatrix()})
  const clk=new THREE.Clock()
  const tick=()=>{
    requestAnimationFrame(tick)
    camera.position.x+=(mX*3-camera.position.x)*.02; camera.position.y+=(-mY*2-camera.position.y)*.02
    camera.lookAt(scene.position)
    const t=clk.getElapsedTime(), arr=geo.attributes.position.array
    for(let i=0;i<N;i++) arr[i*3+1]+=Math.sin(t*.2+i*.5)*.002
    geo.attributes.position.needsUpdate=true
    boxes.forEach(b=>{b.mesh.rotation.x+=b.rx;b.mesh.rotation.y+=b.ry})
    renderer.render(scene,camera)
  }
  tick()
})
</script>
<style scoped>
.bg-canvas { position:fixed; top:0; left:0; width:100%; height:100%; z-index:0; opacity:0.7; }
</style>
