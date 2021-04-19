function init() {
  new Vue({
    el: '#app',
    data: {
      search: 'a',
      films: []
    },
    mounted() {
      axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
              api_key: 'd474fa6ed1e989704b60543e0259c030',
              query: this.search.toUpperCase()
            }
          })
         .then(data => {
            console.log(data);
            this.films = data.data.results;
         })
       },
    methods: {
      clicked: function() {
        console.log("Lista film");
        for(let i = 0; i < films.length; i++) {
          if(this.search == this.films[i]) {

          }
        }
      }
    }
  });
}
document.addEventListener("DOMContentLoaded", init);
