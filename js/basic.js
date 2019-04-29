var player = videojs('video1');

player.ready(function () {
    player = this;
    player.play();
});

function getDuration() {
    var duration = player.duration();
    var current = this.player.currentTime();
    console.log("duration : " + duration);
    console.log("current : " + current);
}

// localボタンをクリックされた時のアクション
document.getElementById("local").onclick = function () {
    console.log('local!!');

    var source = "http://192.168.33.70:1935/live/testLive/playlist.m3u8?DVR";
    player.src(source);
    player.load();
    player.play();

    console.log(player);
    getDuration();
}

// Otherボタンをクリックされたとき
document.getElementById("other").onclick = function () {
    console.log('other!!');

    var source = "http://aljazeera-eng-hd-live.hls.adaptive.level3.net/aljazeera/english2/index.m3u8";
    player.src(source);
    player.muted(false);
    player.load();
    player.play();

    console.log(player);
    getDuration();
}

document.getElementById("4th").onclick = function () {
    console.log('4th!!');

    var source = "../materials/sunshine_4th.mp4";
    player.src(source);

    // player.muted(true);
    player.volume(0.1);
    player.load();
    player.play();

    console.log(player);
    getDuration();
}
