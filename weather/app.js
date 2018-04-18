var app = new Vue({
  el: '#app',
  data: {
    stations: []
  },

  mounted() {
    axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KORLAGRA7.json")
      .then(response => { this.stations.push(response.data.current_observation)  })
    axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KORLAGRA11.json")
      .then(response => { this.stations.push(response.data.current_observation)  })
    axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KORLAGRA15.json")
      .then(response => { this.stations.push(response.data.current_observation)  })
    axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KORUNION5.json")
      .then(response => { this.stations.push(response.data.current_observation)  })
    axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KORUNION2.json")
      .then(response => { this.stations.push(response.data.current_observation)  })
    axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KORCOVE8.json")
      .then(response => { this.stations.push(response.data.current_observation)  })
  },

  methods: {
    convertDate: function (rfc822) {
      return moment(rfc822).format("ddd, h:ma")
    }
  },
})