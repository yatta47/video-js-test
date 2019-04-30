define('global/window', [], () => {
    return window;
});

define('global/document', ['global/window'], (window) => {
    return window.document;
});

var MyRequire = requirejs.config({
    baseUrl: './js',
    paths: {
        videojs: 'https://unpkg.com/video.js/dist/video',
        httpstreaming: 'https://unpkg.com/@videojs/http-streaming/dist/videojs-http-streaming',
        dvr: 'videojs-dvr/videojs-dvr',
        dvrseek: 'videojs-dvrseekbar/videojs-dvrseekbar'
    },
    map: {
        '*': {
            "video.js": "videojs"
        }
    }
});

MyRequire(['videojs'], function (videojs) {
    var player = videojs('video_dvr');
    // player.liveui(true);
    // player.dvrseekbar();
    player.play();
});

MyRequire(['videojs'], function (videojs) {
    var player_normal = videojs('video_normal');
    var source = "../materials/sunshine_4th.mp4";
    player_normal.src(source);
    player_normal.reset();
    player_normal.volume(0.1);
    player_normal.load();
    player_normal.play();
});

document.getElementById("local").onclick = function () {
    console.log('local!!');
    MyRequire(['videojs', 'dvr'], function (videojs) {
        var player_dvr = videojs('video1');
        var source = "http://192.168.33.70:1935/live/testLive/playlist.m3u8?DVR";
        player_dvr.src(source);
        player_dvr.dvr();

        player_dvr.load();
        player_dvr.play();

        console.log(player_dvr.toJSON());
        getDuration();
    });
}

// document.getElementById("4th").onclick = function () {
//     console.log('4th!!');
//     MyRequire(['videojs'], function (videojs) {
//         var player_normal = videojs('video_normal');
//         var source = "../materials/sunshine_4th.mp4";

//         player_normal.src(source);

//         // player.muted(true);
//         player_normal.volume(0.1);
//         player_normal.load();
//         player_normal.play();

//         console.log(player_normal.toJSON());
//         getDuration(player_normal);
//         // player_normal.reset();
//     });
// }

document.getElementById("current").onclick = function () {
    getDuration();
}

function getDuration(player) {
    var duration = player.duration();
    var current = player.currentTime();
    console.log("duration : " + duration);
    console.log("current : " + current);
}