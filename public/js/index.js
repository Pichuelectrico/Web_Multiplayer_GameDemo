const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

const scoreEl = document.querySelector('#scoreEl')

canvas.width = innerWidth
canvas.height = innerHeight

const x = canvas.width / 9
const y = canvas.height / 2
const x2 = x * 8
const width2 = canvas.width / 2

console.log(x, y)

const player1 = new Player({
    x: x, 
    y: y, 
    color: 'white', 
    username: 'awa'
})

const player2 = new Player({
    x: x2, 
    y: y, 
    color: 'white', 
    username: 'awa'
})

const ball = new Ball({
    x: width2,
    y: y,
    radius: 10,
    color: 'white',
    velocity: 10
})

let animationId
let score = 0

function animate() {
  animationId = requestAnimationFrame(animate)
  c.fillStyle = 'rgba(0, 0, 0, 0.1)'
  c.fillRect(0, 0, canvas.width, canvas.height)

  player1.draw()

  player2.draw()

  ball.draw()

//   projectile.draw()

//     // remove from edges of screen
//     if (
//         projectile.x - projectile.radius < 0 ||
//         projectile.x - projectile.radius > canvas.width ||
//         projectile.y + projectile.radius < 0 ||
//         projectile.y - projectile.radius > canvas.height
//     ) {
//         projectile
//     }
}

animate()

const keys = {
    w: {
      pressed: false
    },
    s: {
      pressed: false
    }
  }
  
  const SPEED = 5
  const playerInputs = []
  let sequenceNumber = 0
  setInterval(() => {
    if (keys.w.pressed) {
      sequenceNumber++
      playerInputs.push({ sequenceNumber, dx: 0, dy: -SPEED })
      // frontEndPlayers[socket.id].y -= SPEED
      socket.emit('keydown', { keycode: 'KeyW', sequenceNumber })
    }
  
    if (keys.s.pressed) {
      sequenceNumber++
      playerInputs.push({ sequenceNumber, dx: 0, dy: SPEED })
      // frontEndPlayers[socket.id].y += SPEED
      socket.emit('keydown', { keycode: 'KeyS', sequenceNumber })
    }

  }, 15)
  
  window.addEventListener('keydown', (event) => {
    if (!frontEndPlayers[socket.id]) return
  
    switch (event.code) {
      case 'KeyW':
        keys.w.pressed = true
        break
  
      case 'KeyS':
        keys.s.pressed = true
        break
    }
  })
  
  window.addEventListener('keyup', (event) => {
    if (!frontEndPlayers[socket.id]) return
  
    switch (event.code) {
      case 'KeyW':
        keys.w.pressed = false
        break
  
      case 'KeyS':
        keys.s.pressed = false
        break
    }
  })