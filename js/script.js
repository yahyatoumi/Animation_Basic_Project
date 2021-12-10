var canvasx = document.getElementById("canvas");
var ctx = canvasx.getContext("2d");
var canvas_width = canvasx.width = 600;
var canvas_height = canvasx.height = 600;
console.log(canvas_width, canvas_height);
var dogimage = new Image();
dogimage.src = "Sprite_Sheet/shadow_dog.png"
var spritwidth = 575;
var spriteheight = 523;
var gameframe = 0;
var framespeed = 5;
var mouvment = "idel";
var spriteaninimations = [];
var animationstates = [
    {
        name: "idel",
        frames: 7,
    },
    {
        name: "jump",
        frames: 7,
    },
    {
        name: "fall",
        frames: 7,
    },
    {
        name: "run",
        frames: 9,
    },
    {
        name: "dizzy",
        frames: 11,
    },
    {
        name: "sit",
        frames: 5,
    },
    {
        name: "roll",
        frames: 7,
    },
    {
        name: "bite",
        frames: 7,
    },
    {
        name: "ko",
        frames: 12,
    },
    {
        name: "gethit",
        frames: 4,
    }
];
animationstates.forEach((state, index) => {
    var frames = {
        loc: [],
    }
    for (var i = 0; i < state.frames; i++) {
        var positiox = i * spritwidth;
        var positiony = index * spriteheight;
        frames.loc.push({ x: positiox, y: positiony });
    }
    spriteaninimations[state.name] = frames;
});

console.log(spriteaninimations);

function animate() {
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    var position = Math.floor(gameframe / framespeed) % spriteaninimations[mouvment].loc.length;
    var framex = spritwidth * position;
    var framey = spriteaninimations[mouvment].loc[position].y;
    ctx.drawImage(dogimage, framex, framey, spritwidth, spriteheight, 0, 0, spritwidth, spriteheight);


    gameframe++;
    requestAnimationFrame(animate);
};
animate();
var selector = document.getElementById("selector");
selector.addEventListener("change", function(e){
    mouvment = selector.value;
});
