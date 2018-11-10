import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  console.log(results)
  let template = ""
  results.forEach(song => {
    template +=
      `
    <div class="col-3 card text-white bg-info d-flex justify-content-center pt-1 mt-3">
                <img src="${song.albumArt}">
                <div class="row">
                    <div class="col-3 d-flex align-items-center">
                    <button type="button" class="btn btn-light" onclick="app.controllers.itunesCtrl.play('${song.preview}')">
                    <i class="fas fa-play-circle fa-2x"></i>
                    </button>                        
                    </div>
                    <div class="col-9 text-center">
                        <h5>${song.artist}"</h5>
                        <p>${song.title}</p>
                        <p>$${song.price}</p>
                    </div>
                </div>
            </div>`
  });
  document.getElementById("songs").innerHTML = template
}

function playMusic(song) {
  document.getElementById("playSong").innerHTML =
    `<audio controls autoplay src="${song}"></audio>`
}

//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }

  play(song) {
    playMusic(song)
  }

}


export default ItunesController