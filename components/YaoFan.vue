<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const canvasRef = ref(null)
const ctx = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)
const centerX = ref(0)
const centerY = ref(0)
const ballRadius = 30
const maxDistance = 100
const bowlImage = ref(null)
const coinHandImage = ref(null)

let animationId = null

function updateMousePosition(e) {
  const rect = canvasRef.value.getBoundingClientRect()
  mouseX.value = e.clientX - rect.left
  mouseY.value = e.clientY - rect.top
}

function calculateBallPosition() {
  // 计算鼠标到中心的距离
  const dx = mouseX.value - centerX.value
  const dy = mouseY.value - centerY.value
  const distance = Math.sqrt(dx * dx + dy * dy)

  // 如果距离为0，返回中心位置
  if (distance === 0) {
    return { x: centerX.value, y: centerY.value }
  }

  // 计算小球应该放置的位置
  // 小球距离鼠标最远100px，可以与中心重合
  const ballDistanceFromMouse = Math.min(maxDistance, distance)
  const ballDistanceFromCenter = distance - ballDistanceFromMouse

  // 计算小球位置
  const ratio = ballDistanceFromCenter / distance
  const ballX = centerX.value + dx * ratio
  const ballY = centerY.value + dy * ratio

  return { x: ballX, y: ballY }
}

function calculateEndpoints() {
  // 两个端点始终与中心点保持水平
  return {
    left: { x: centerX.value - ballRadius, y: centerY.value },
    right: { x: centerX.value + ballRadius, y: centerY.value },
  }
}

function draw() {
  if (!ctx.value)
    return

  // 清空画布
  ctx.value.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)

  // 计算小球位置和端点
  const ballPos = calculateBallPosition()
  const endpoints = calculateEndpoints()

  // 绘制连线
  ctx.value.beginPath()
  ctx.value.moveTo(centerX.value, centerY.value)
  ctx.value.lineTo(mouseX.value, mouseY.value)
  ctx.value.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--vp-c-brand-1') || '#3498db'
  ctx.value.lineWidth = 2
  ctx.value.stroke()

  // 绘制碗的图片
  if (bowlImage.value) {
    const bowlSize = ballRadius * 2
    ctx.value.drawImage(
      bowlImage.value,
      ballPos.x - ballRadius,
      ballPos.y - ballRadius,
      bowlSize,
      bowlSize,
    )
  }

  // 绘制从端点到碗两侧的连线
  ctx.value.beginPath()
  ctx.value.moveTo(endpoints.left.x, endpoints.left.y)
  ctx.value.lineTo(ballPos.x - ballRadius, ballPos.y)
  ctx.value.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--vp-c-warning-1') || '#f39c12'
  ctx.value.lineWidth = 2
  ctx.value.stroke()

  ctx.value.beginPath()
  ctx.value.moveTo(endpoints.right.x, endpoints.right.y)
  ctx.value.lineTo(ballPos.x + ballRadius, ballPos.y)
  ctx.value.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--vp-c-warning-1') || '#f39c12'
  ctx.value.lineWidth = 2
  ctx.value.stroke()

  // 绘制端点
  ctx.value.beginPath()
  ctx.value.arc(endpoints.left.x, endpoints.left.y, 4, 0, 2 * Math.PI)
  ctx.value.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--vp-c-brand-2') || '#9b59b6'
  ctx.value.fill()

  ctx.value.beginPath()
  ctx.value.arc(endpoints.right.x, endpoints.right.y, 4, 0, 2 * Math.PI)
  ctx.value.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--vp-c-brand-2') || '#9b59b6'
  ctx.value.fill()

  // 绘制中心点
  ctx.value.beginPath()
  ctx.value.arc(centerX.value, centerY.value, 5, 0, 2 * Math.PI)
  ctx.value.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--vp-c-text-1') || '#2c3e50'
  ctx.value.fill()

  // 绘制硬币手图片作为鼠标指示
  if (coinHandImage.value) {
    const handSize = 40
    ctx.value.drawImage(
      coinHandImage.value,
      mouseX.value - handSize / 2,
      mouseY.value - handSize / 2,
      handSize,
      handSize,
    )
  }

  animationId = requestAnimationFrame(draw)
}

function loadImages() {
  let loadedCount = 0
  const totalImages = 2

  const onImageLoad = () => {
    loadedCount++
    if (loadedCount === totalImages) {
      // 所有图片加载完成后开始动画
      draw()
    }
  }

  // 加载碗的图片
  const bowlImg = new Image()
  bowlImg.onload = () => {
    bowlImage.value = bowlImg
    onImageLoad()
  }
  bowlImg.src = '/assets/images/bowl.png'

  // 加载硬币手的图片
  const coinHandImg = new Image()
  coinHandImg.onload = () => {
    coinHandImage.value = coinHandImg
    onImageLoad()
  }
  coinHandImg.src = '/assets/images/coin_hand.png'
}

function initCanvas() {
  const canvas = canvasRef.value
  ctx.value = canvas.getContext('2d')

  // 设置画布尺寸
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight - 177

  // 设置中心点
  centerX.value = canvas.width / 2
  centerY.value = canvas.height / 2

  // 初始化鼠标位置为中心
  mouseX.value = centerX.value
  mouseY.value = centerY.value

  // 加载图片
  loadImages()
}

function handleResize() {
  if (canvasRef.value) {
    canvasRef.value.width = window.innerWidth
    canvasRef.value.height = window.innerHeight - 177
    centerX.value = canvasRef.value.width / 2
    centerY.value = canvasRef.value.height / 2
  }
}

onMounted(() => {
  initCanvas()
  window.addEventListener('mousemove', updateMousePosition)
  window.addEventListener('resize', handleResize)

  // 监听主题变化
  const observer = new MutationObserver(() => {
    // 主题变化时重新绘制
    if (ctx.value) {
      draw()
    }
  })

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  })
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  window.removeEventListener('mousemove', updateMousePosition)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="yaofan-container">
    <canvas
      ref="canvasRef"
      class="yaofan-canvas"
      @mousemove="updateMousePosition"
    />
    <div class="yaofan-info">
      <h2>🍚 要饭碗游戏</h2>
      <p>移动硬币手，碗会跟随在连线上！</p>
      <p>碗的尺寸：60px | 硬币手尺寸：40px | 最大距离：100px</p>
    </div>
  </div>
</template>

<style scoped>
.yaofan-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 177px);
  overflow: hidden;
}

.yaofan-canvas {
  display: block;
  background: var(--vp-c-bg);
  cursor: crosshair;
}

.yaofan-info {
  position: absolute;
  top: 20px;
  left: 20px;
  background: var(--vp-c-bg-soft);
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid var(--vp-c-divider);
}

.yaofan-info h2 {
  margin: 0 0 10px 0;
  color: var(--vp-c-text-1);
  font-size: 18px;
}

.yaofan-info p {
  margin: 5px 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
}
</style>
