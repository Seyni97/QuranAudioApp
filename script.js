const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
const progressBar = document.getElementById("progress");
const currentTimeDisplay = document.getElementById("current-time");
const durationDisplay = document.getElementById("duration");
const audioTitle = document.getElementById("audio-title");
const volume = document.getElementById("volume");
const download = document.getElementById("download");
const prevTrackBtn = document.getElementById("prevTrack");
const nextTrackBtn = document.getElementById("nextTrack");
const audioList = document.getElementById("audioList");


    // Liste des fichiers audio
    const audioFiles = [
        { name: "Juz 1", url: "https://www.dropbox.com/scl/fi/pjioh43lv296lt8pfqhiy/Coran-Francais-juz-1.mp3?rlkey=crr3vkt4hnv9uuzo9y9k83mbb&st=750rqrhr&raw=1"},
        { name: "Juz 2", url: "https://www.dropbox.com/scl/fi/oxrvxfcokx0gh8fyufu8n/Coran-Francais-juz-2.mp3?rlkey=ap8tgd0d48th9ao2vihqohpwb&raw=1" },
        { name: "Juz 3", url: "https://www.dropbox.com/scl/fi/9perv0jipa40qou4hcydw/Coran-Francais-juz-3.mp3?rlkey=z37h7wj1hzpne3ofg0ejgtgi6&raw=1" },
        { name: "Juz 4", url: " https://www.dropbox.com/scl/fi/08tc1ge2pciv6hzvzvoq3/Coran-Francais-juz-4.mp3?rlkey=ntga055ty93epxxcf70o070vs&raw=1" },
        { name: "Juz 5", url: "https://www.dropbox.com/scl/fi/t05h2yizh2gemial7otuj/Coran-Francais-juz-5.mp3?rlkey=k08lwwip11njfx2szoo836m4p&raw=1" },
        { name: "Juz 6", url: "https://www.dropbox.com/scl/fi/l75rcr0ooofydcyi032xl/Coran-Francais-juz-6.mp3?rlkey=sh5lzgd02reowonrfj8ivsgo6&raw=1" },
        { name: "Juz 7", url: " https://www.dropbox.com/scl/fi/f6omalvfm3i3ii3ip02g3/Coran-Francais-juz-7.mp3?rlkey=s8uujh96p06oudkq1zvow3f82&raw=1" },
        { name: "Juz 8", url: "https://www.dropbox.com/scl/fi/c1ugzrz83582pggoagbip/Coran-Francais-juz-8.mp3?rlkey=qwovj1uyvs9g1eucg3aovvepg&raw=1" },
        { name: "Juz 9", url: "https://www.dropbox.com/scl/fi/svr46tvi4q6c30rporg46/Coran-Francais-juz-9.mp3?rlkey=rn9rsac7ycpzn0bjvysqhkfyr&raw=1" },
        { name: "Juz 10", url: "https://www.dropbox.com/scl/fi/dnhly7gfgp8g8xbliqg9k/Coran-Francais-juz-10.mp3?rlkey=wr0qcs3plxm22apyp2i29sukj&raw=1" },
        { name: "Juz 11", url: "https://www.dropbox.com/scl/fi/qbz25dx603nbke1arr6up/Coran-Francais-juz-11.mp3?rlkey=j72fybz1uho0gnra06ov7n82k&raw=1" },
        { name: "Juz 12", url: "https://www.dropbox.com/scl/fi/8tr5xh3ig46m2ba60qwv2/Coran-Francais-juz-12.mp3?rlkey=npulz0c4wmq5p9hhd2xh2pjbg&raw=1" },
        { name: "Juz 13", url: " https://www.dropbox.com/scl/fi/yk1bkma3ielvbe3tn5ygr/Coran-Francais-juz-13.mp3?rlkey=7jqf05v9mg6t6mahjjoymul8m&raw=1" },
        { name: "Juz 14", url: "https://www.dropbox.com/scl/fi/qokdef6x69lhbu66lgi96/Coran-Francais-juz-14.mp3?rlkey=ozleeigc7puwgfnlvbjg6i4pv&raw=1" },
        { name: "Juz 15", url: "https://www.dropbox.com/scl/fi/nhxeq3d5jddyvg1xjpq2i/Coran-Francais-juz-15.mp3?rlkey=13h1oaybbwcd0z4rk1of6izdd&raw=1" },
        { name: "Juz 16", url: "https://www.dropbox.com/scl/fi/rc45dcrjtmijga7b3338d/Coran-Francais-juz-16.mp3?rlkey=ovugce6gcj6u53y5p5g80bton&raw=1" },
        { name: "Juz 17", url: "https://www.dropbox.com/scl/fi/hbh96tvwuqo6usyfz7hvo/Coran-Francais-juz-17.mp3?rlkey=cc1xhk794uhti82pgaijos4ky&raw=1" },
        { name: "Juz 18", url: "https://www.dropbox.com/scl/fi/pui3e74ig3fhoy03ss6f0/Coran-Francais-juz-18.mp3?rlkey=vnhjoboeji2f00j8hwdnr3xwi&raw=1" },
        { name: "Juz 19", url: "https://www.dropbox.com/scl/fi/kq1rlqatqt9x9dcnlyp6w/Coran-Francais-juz-19.mp3?rlkey=se73af48savcnf3phcfq6zuu9&raw=1" },
        { name: "Juz 20", url: "https://www.dropbox.com/scl/fi/pkn1cbw0eciwnx86csgr9/Coran-Francais-juz-20.mp3?rlkey=r022rxbc38ktfv376g0g440m8&raw=1" },
        { name: "Juz 21", url: "https://www.dropbox.com/scl/fi/8hnt59vg1svw4dvucjiaa/Coran-Francais-juz-21.mp3?rlkey=a804wph4qw4eo169luaridfsv&raw=1" },
        { name: "Juz 22", url: "https://www.dropbox.com/scl/fi/915sw7aw29nsbdigwxvkl/Coran-Francais-juz-22.mp3?rlkey=xyn4mbmg9u9ibd77tftbbus2h&raw=1" },
        { name: "Juz 23", url: "https://www.dropbox.com/scl/fi/jgw76bpp2r2vbinyvtacm/Coran-Francais-juz-23.mp3?rlkey=hinbmel3ry577ojq6mho477rs&raw=1" },
        { name: "Juz 24", url: "https://www.dropbox.com/scl/fi/xgclwuc0j5i30ctm0ys8e/Coran-Francais-juz-24.mp3?rlkey=hrfj0yzh0m0q0ukrt6achuqnx&raw=1" },
        { name: "Juz 25", url: "https://www.dropbox.com/scl/fi/da03tn6eqagvz0st1w3un/Coran-Francais-juz-25.mp3?rlkey=h9ftdv9yuwlvyewc08pebvxgl&raw=1" },
        { name: "Juz 26", url: "https://www.dropbox.com/scl/fi/blkoy8ssx5g91gdof655n/Coran-Francais-juz-26.mp3?rlkey=c1hw9hbu9aq5l0kxwaeow9sym&raw=1" },
        { name: "Juz 27", url: "https://www.dropbox.com/scl/fi/39lq45nd2f199qvkusrft/Coran-Francais-juz-27.mp3?rlkey=1fz040pciamwlczsobmbqk0fo&raw=1" },
        { name: "Juz 28", url: "https://www.dropbox.com/scl/fi/avtnpjq9vvp0s8rb8cbyv/Coran-Francais-juz-28.mp3?rlkey=h1k4kyj973ekc73b01yrswk05&raw=1" },
        { name: "Juz 29", url: "https://www.dropbox.com/scl/fi/97ndp80av4g2ef0gvi290/Coran-Francais-juz-29.mp3?rlkey=v5hnu6p0fjgvrqahvt549r3w5&raw=1" },
        { name:"Juz 30" , url: "https://www.dropbox.com/scl/fi/zhz6vf10n6s53b80ybxkw/Coran-Francais-juz-30.mp3?rlkey=oiir2o75aipj3r5nr5b7ojl1q&raw=1" },
    ];


    let trackIndex = 0;

    function loadTrack(index) {
        audio.src = audioFiles[index].url;
        audioTitle.innerText = "Lecture : " + audioFiles[index].name;
        download.href = audioFiles[index].url; // ✅ Mise à jour du lien de téléchargement
        audio.load();
    }
    
    
    
    function togglePlay() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = "⏸️";
        } else {
            audio.pause();
            playPauseBtn.innerHTML = "▶️";
        }
    }
    playPauseBtn.addEventListener("click", togglePlay);

    
    function updateProgress() {
        if (!audio.duration) return;
        
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progressPercent;  // ✅ Utiliser .value pour un input range
        
        currentTimeDisplay.innerText = formatTime(audio.currentTime);
        durationDisplay.innerText = formatTime(audio.duration);
    }
    
    
    
    function seek(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        const clickX = event.clientX - rect.left; // ✅ Compatible mobile & desktop
        const width = rect.width;
        audio.currentTime = (clickX / width) * audio.duration;
    }
    
    
    function formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return min + ":" + (sec < 10 ? "0" : "") + sec;
    }
    
    function nextTrack() {
        trackIndex = (trackIndex + 1) % audioFiles.length; // ✅ Correction ici
        loadTrack(trackIndex);
        audio.play();
        playPauseBtn.innerHTML = "⏸️";
    }
    
    function prevTrack() {
        trackIndex = (trackIndex - 1 + audioFiles.length) % audioFiles.length; // ✅ Correction ici
        loadTrack(trackIndex);
        audio.play();
        playPauseBtn.innerHTML = "⏸️";
    }
    prevTrackBtn.addEventListener("click", prevTrack);
    nextTrackBtn.addEventListener("click", nextTrack);


    // Générer la liste des audios dynamiquement
audioFiles.forEach((track, index) => {
    let listItem = document.createElement("li");
    listItem.innerText = track.name;
    listItem.addEventListener("click", () => {
        loadTrack(index);
        audio.play();
        playPauseBtn.innerHTML = "⏸️";
    });
    audioList.appendChild(listItem);
});

audio.addEventListener("timeupdate", updateProgress);
    
    audio.addEventListener("timeupdate", () => {
        if (!isNaN(audio.duration) && audio.duration > 0) { // ✅ Vérifier que duration est valide
            progress.value = (audio.currentTime / audio.duration) * 100;
        }
    });
    

    audio.addEventListener("ended", nextTrack);
    audio.addEventListener("loadedmetadata", () => {
        durationDisplay.innerText = formatTime(audio.duration);
        updateProgress(); // ✅ Mise à jour immédiate
    });


// Modifier la position de l'audio via la barre de progression
progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

// Modifier le volume
volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

// Lien de téléchargement
download.setAttribute("href", audio.src);
download.setAttribute("download", audioFiles[trackIndex].name + ".mp3");

  
    loadTrack(trackIndex);
