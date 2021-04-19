function init() {
  new Vue({
    mounted() {
      axios.get('', {
        params: {
          api_key: '',
        }
      })
    }
  });
}
document.addEventListener("DOMContentLoaded", init);
