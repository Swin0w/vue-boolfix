function init() {
  new Vue({
    el: '#app',
    data: {
      search: '',
      films: []
    },
    methods: {
      clicked: function() {
        axios.get('https://api.themoviedb.org/3/search/movie', {
              params: {
                api_key: 'd474fa6ed1e989704b60543e0259c030',
                query: this.search.toUpperCase()
              }
            }
        )
        .then(data => {
          this.films = data.data.results;
          console.log(data.data.results);
          switch (this.film.original_language) {
            case "en":
              this.films.original_language = "U+1F3F4";
              break;
            default:

          }
        })
      }
    }
  });
}
document.addEventListener("DOMContentLoaded", init);
