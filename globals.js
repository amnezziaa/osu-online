var fps = 60;
var fpsM = 2;
var beatmapSet = {};
var scene = 'menu';
var currentMap;
var actions = [];
var songPlaying = false;
var currentTime = 0;

function resetToMenu() {
    try {
        beatmapSet.audioFiles[currentMap.audioName].audio.stop();
    } catch (err) {console.log(err)}
    scene = 'menu';
}