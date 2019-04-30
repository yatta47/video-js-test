// var player = videojs('video');

// player.ready(function () {
//     player = this;
//     player.play();
// });

var player = videojs('video', { liveui: true });

function getDuration() {
    var duration = nowPlayer.duration();
    var current = nowPlayer.currentTime();
    console.log("duration : " + duration);
    console.log("current : " + current);
}
function init() {
    console.log("init()");
    player.play();
}

init();
// localボタンをクリックされた時のアクション
document.getElementById("local").onclick = function () {
    console.log('local!!');
    // this.nowPlayer.reset();
    const player = videojs('video', { liveui: true });
    const source = "http://192.168.33.70:1935/live/testLive/playlist.m3u8?DVR";
    player.src(source);
    player.load();
    player.play();

    this.nowPlayer = player;
    console.log(player);
    console.log(this.nowPlayer);
    // getDuration();
}

// Otherボタンをクリックされたとき
document.getElementById("other").onclick = function () {
    console.log('other!!');
    const player = videojs('video', { liveui: false });
    const source = "http://aljazeera-eng-hd-live.hls.adaptive.level3.net/aljazeera/english2/index.m3u8";
    player.src(source);
    player.muted(true);
    player.load();
    player.play();

    // this.nowPlayer = player;
    // console.log(player.toJson());
    // getDuration();
}

document.getElementById("4th").onclick = function () {
    console.log('4th!!');
    // player.dispose();
    player.reset();
    player = videojs('video', { liveui: false });
    const source = "../materials/sunshine_4th.mp4";
    player.src(source);

    // player.muted(true);
    player.load();
    player.volume(0.1);
    player.play();

    // this.nowPlayer = player;
    console.log(player.toJson());
    // console.log(player);
    // console.log(this.nowPlayer);
    // getDuration(player);
}

document.getElementById("current").onclick = function () {
    getDuration();
}