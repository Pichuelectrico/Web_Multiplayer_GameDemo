class Player {
    constructor( {x, y, color, username} ) {
      this.x = x
      this.y = y
      this.width = 200
      this.height = 200
      this.color = color
      this.username = username
    }
  
    draw() {
      c.fillStyle = 'white'
      c.shadowColor = this.color
      c.fillRect(this.x, this.y, 12, 100)
    }

    update(move) {
      this.draw()
      this.y = this.y + move 
    }
  }