/**
 * 聖誕快樂，給郭穎
 * 2021/12/23
 * Eric W.
 */
// Global objects & settings
let snows = [];
let amount = 81;

let tree, ground, sky, couple;
let stars = []; // [2]
let snow = [];  // [3]
function preload() {
  try{
  tree = loadImage('tree.png');
  ground = loadImage('ground.png');
  sky = loadImage('sky.png');
  couple = loadImage('couple.png');

  for(let i = 0; i < 3; i++) {
    snow.push(loadImage(`snow${i+1}.png`));
  }
  for(let i = 0; i < 2; i++) {
    stars.push(loadImage(`stars${i+1}.png`));
  }
    
  }catch(e) { alert('preload: ' + e); }
}
function getInitialHeight() { return getInitialWidth() * (695/321); }
function getInitialWidth()  { return windowWidth; }
// ===== override start =====
function setup() {
  try {
  // createCanvas(321, 695);
  createCanvas(getInitialWidth(), getInitialHeight());
  for(let i = 0; i < amount; i++) {
    snows.push(new Snow(width/321));
  }
    
  }catch(e) { alert('setup: ' + e); }
}

function draw() {
  try {
  drawBackGround();
  for(let s of snows) {
    s.update();
    s.draw();
  }
  }catch(e) { alert('draw: ' + e); }
}

function keyReleased() {
  if(keyCode === UP_ARROW) {
    for(let s of snows) {
      s.activate();
    }
  }
}
// ===== override end =====

// draw and bg
function drawTree() {
  image(tree, 0, 0, width, height);
}

function drawSky() {
  image(sky, 0, 0, width, height);
}

function drawCouple() {
  image(couple, 0, 0, width, height);
}

let starsCnt = 0, starsIdx = 0;
function drawStars() {
  if(starsCnt > 100) {
    starsCnt = 0;
    starsIdx = (starsIdx+1)%2;
  }else {
    starsCnt++;
  }
  image(stars[starsIdx], 0, 0, width, height);
}

function drawGround() {
  image(ground, 0, 0, width, height);
}

function drawBackGround() {
  background(220);
  drawSky();
  drawStars();
  drawGround();
  drawTree();
  drawCouple();
}

// ===== deviceorientation global start =====
let beta = 0;
// ===== deviceorientation global end =====
const handler = (event) => {
  // document.querySelector('#ooo').innerText = `${JSON.stringify(event.alpha)}\n${JSON.stringify(event.beta)}\n${JSON.stringify(event.gamma)}`;
  // document.querySelector('#beta').innerText = `${JSON.stringify(event.beta)}`;
  beta = event.beta;
};
function onClick() {
  /*
  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission().then((state) => {
      if(state === 'granted') {
        console.log('%cevent listener start...', 'color: green; font-weight: bolder;');
        window.addEventListener('deviceorientation', handler, true);
      } else {
        alert('要按接受誒 🥲');
      }
    }).catch(console.error);
  } else {
    needNoPermission();
  }
  */
  // hidden the mask
  document.querySelector('#mask').remove();
}
function needNoPermission() {
  /*
  console.log('%cevent listener start...', 'color: green; font-weight: bolder;');
  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission().then(state => {
      if(state === 'granted') {
        document.querySelector('#mask').remove(); 
        window.addEventListener('deviceorientation', handler, true);
      }
      // else: do nothing
    })
  }else {
    document.querySelector('#mask').remove();
    window.addEventListener('deviceorientation', handler, true);
  }
  */
}
