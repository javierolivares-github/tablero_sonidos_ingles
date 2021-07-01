// Base de datos
const sounds = ["be", "get", "have", "help", "love", "need", "try", "want", "wish"];

// Función detener sonido
function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)
    song.pause()
    song.currentTime = 0;
  })
}

// Para cada sonido
sounds.forEach(sound => {
  // Crea el botón.
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerText = sound

  // Activa la función detener y reproducir, al dar click al botón.
  btn.addEventListener('click', () => {
    stopSongs()
    document.getElementById(sound).play()
  })

  // Anexa el botón como hijo de buttons.
  document.getElementById('buttons').appendChild(btn)
})


