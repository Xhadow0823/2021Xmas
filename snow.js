class Snow {
  constructor(sizeRatio) {
    this.x = random(width*1.2) - width*0.1;
    this.y = random(height * 1.1);
    
    this.destination_y = this.y;
    this.limit_y = random(height * 0.26);
    
    // SHM
    this.amplitude_x = random(width * 0.125);
    this.offset_x = 0;
    this.rad = 0;
    this.omega = random(0.05, 0.1) * random([1, -1]);
    
    this.state = 'drop';
    this.imageIdx = floor(random(3));  // [0 1 2]
    this.sizeRatio = sizeRatio ?? 1.0;
  }
  
  // public
  update() {
    if(beta <= -45) {
      this.state = 'up';
    }
    if(this.state == 'up') {
      // fill('red');
      if(this.destination_y > this.y) {
        this.y += 5 * this.sizeRatio;
      }else {
        this.state = 'drop';
        // TODO
        // this.x += this.offset_x;
        // this.
      }
    }else if(this.state == 'drop') {
      // fill(color(255, 204, 0));
      if(this.limit_y < this.y) {
        // TODO 
        this.y -= 1 * this.sizeRatio;
        // TODO
        this.offset_x = sin(this.rad) * this.amplitude_x;
        this.rad+=this.omega;  this.rad %= 2*PI;
      }else {
        this.activate();
        this.state = 'idle';
      }
    }
  }
  
  // public
  draw() {
    // circle(this.x + this.offset_x, height - this.y, 20);
    image(snow[this.imageIdx], this.x + this.offset_x, height - this.y, 40 * this.sizeRatio, 40 * this.sizeRatio);
  }
  
  // public
  activate() {
    this.state = 'up';
    // update destination & limit
    this.destination_y = random(height-(height * 0.26), height * 1.4);
    this.limit_y = random(height * 0.26);
    // update amp
    this.amplitude_x = random(width * 0.125);
    this.omega = 0.1 * random([1, -1]);
  }
  
  
}