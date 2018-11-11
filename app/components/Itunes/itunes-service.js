import Song from "../../models/Song.js";

//DO NOT MODIFY
class ItunesService {

  getMusicByArtist(artist) {
    var url = 'https://itunes.apple.com/search?callback=?&term=' + artist;
    // @ts-ignore
    console.log($.getJSON(url))
    let movie = /movie/i
    return $.getJSON(url)
      .then(res => res.results.filter(m => !movie.test(m.kind)).map(s => new Song(s)))
      .catch(err => console.log(err))
  }
}



export default ItunesService