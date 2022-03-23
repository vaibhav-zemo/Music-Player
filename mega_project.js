var button = document.querySelectorAll('.three_dot');
var list = document.querySelectorAll('.option');
var play = document.querySelectorAll('.play_now');
var footer = document.querySelector('.audio');
var song = document.querySelectorAll('.song');
var play_button = document.querySelectorAll('.play_button');

var pause_music = function (n) {
    for (let i = 0; i < button.length; i++) {
        if (i == n) {
            continue;
        }
        song[i].pause();
    }
}

var flag = 0;
for(let i=0;i<button.length;i++){
    play_button[i].addEventListener('click',function () {
        if (flag==1) {
            pause_music();
        }
    })
}


for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        list[i].style.visibility = 'visible';
    })
    play[i].addEventListener('click', function () {
        list[i].style.visibility = 'hidden';
        footer.style.display = 'block';
        song[i].play();
        pause_music(i);
    })
}

for (let i = 0; i < play_button.length; i++) {
    play_button[i].addEventListener('click', function () {
        footer.style.display = 'block';
        song[i].play();
        pause_music(i);
        flag = 0;
        console.log("play flag",flag);
    })
    play_button[i].addEventListener('dblclick', function () {
        footer.style.display = 'none';
        for (let i = 0; i < list.length; i++) {
            list[i].style.visibility = 'hidden';
        }
        pause_music();
    })
}
