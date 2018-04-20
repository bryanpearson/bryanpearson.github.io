var app = new Vue({
  el: '#app',
  data: {
    station_list: ['KLGD', 'KORLAGRA7', 'KORLAGRA9', 'KORLAGRA11', 'KORLAGRA13', 'KORLAGRA15', 'KORUNION5', 'KORUNION2', 'KORCOVE8', 'MD3793', 'KLGD', 'KORIMBLE2', 'MODT18'],
    stations: []
  },

  mounted() {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      for (i=0; i < this.station_list.length; i++) {
        console.log(this.station_list[i])
        axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:" + this.station_list[i] +".json")
          .then(response => { this.stations.push(response.data.current_observation)  })
      }
    })
  },

  methods: {
    convertDate: function (rfc822) {
      return moment(rfc822).format("ddd, h:ma")
    }
  },
})