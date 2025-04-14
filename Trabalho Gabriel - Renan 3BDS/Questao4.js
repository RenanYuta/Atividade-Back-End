let videos = ['video1', 'video2', 'video3', 'video4', 'video5', 'video6', 'video7'];
let videosRemovidos = 0;
let recomendados = videos;
let i = 

console.log(videos)

remove()
remove()
remove()

function remove() {
    if (videosRemovidos == 3) {
        recomendados.push('video8');
        console.log(recomendados);
        videosRemovidos = 0

    }
    else {
        recomendados.shift();
        videosRemovidos += 1;
        console.log(recomendados);
    }
}
