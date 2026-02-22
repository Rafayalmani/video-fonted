export const initCursorGlow = () => {
  const glow = document.createElement('div')
  glow.className = 'cursor-glow'
  document.body.appendChild(glow)

  const updateGlow = (e) => {
    glow.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`
  }

  window.addEventListener('mousemove', updateGlow)

  return () => {
    window.removeEventListener('mousemove', updateGlow)
    glow.remove()
  }
}