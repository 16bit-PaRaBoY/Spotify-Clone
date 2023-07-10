console.log("Welcome")

let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar = document.getElementById('ProgressBar');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
{SongName:"Let Me Love You",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
{SongName:"Hip Hop",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
{SongName:"Baby",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
{SongName:"Hiccup",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
{SongName:"Cupcake",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
{SongName:"Let Me Love You",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
{SongName:"Let Me Love You",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
{SongName:"Let Me Love You",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
{SongName:"Let Me Love You",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},

]

songItems.forEach((element,i)=>{
    console.log(i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText=songs[i].SongName;
})

// Play Pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-play");
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlay =()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
    
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        audioElement.src="songs/3.mp3";
        audioElement.play();
        // pla
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
    })
})
