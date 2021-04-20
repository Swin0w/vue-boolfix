function init() {
  new Vue({
    el: '#app',
    data: {
      search: '',
      films: [],
      series: [],
      flags: {
        it: "img/flag/it_flag.png",
        es: "img/flag/es_flag.png",
        en: "img/flag/en_flag.png",
        ja: "img/flag/jp_flag.png",
        fr: "img/flag/fr_flag.png"
      },
      isInArray: false
    },
    computed: {
      allFilms: function() {
        return [...this.films, ...this.series]; //Creazione di un array unico tramite ...
      }
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
          this.films = data.data.results
          console.log("Film" , data.data.results);
        })
        axios.get('https://api.themoviedb.org/3/search/tv', {
              params: {
                api_key: 'd474fa6ed1e989704b60543e0259c030',
                query: this.search.toUpperCase()
             }
            }
         )
         .then(data=> {
           this.series = data.data.results;
           console.log("Serie tv", data.data.results);
         })
      },
      convertMarksToStars: function(marks) {
        marks = parseInt(marks / 2);
        return marks;
      },
    }
  });
}
document.addEventListener("DOMContentLoaded", init);
