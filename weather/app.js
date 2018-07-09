var app = new Vue({
  el: '#app',
  data: {
    station_KLGD: null,
    station_KORLAGRA7: null,
    station_KORLAGRA9: null,
    station_KORLAGRA11: null,
    station_KORUNION2: null,
    station_KORCOVE8: null,
    station_KORIMBLE2: null
  },

  mounted() {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      // for (i=0; i < this.station_list.length; i++) {
      //   console.log(this.station_list[i])
      //   axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:" + this.station_list[i] +".json")
      //     .then(response => { this.stations.push(response.data.current_observation)  })
      // }


      axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KLGD.json")
        .then(response => { this.station_KLGD = response.data.current_observation })
      axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KORLAGRA7.json")
        .then(response => { this.station_KORLAGRA7 = response.data.current_observation })
      axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KORLAGRA9.json")
        .then(response => { this.station_KORLAGRA9 = response.data.current_observation })
      axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KORLAGRA11.json")
        .then(response => { this.station_KORLAGRA11 = response.data.current_observation })
      axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KORUNION2.json")
        .then(response => { this.station_KORUNION2 = response.data.current_observation })
      axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KORCOVE8.json")
        .then(response => { this.station_KORCOVE8 = response.data.current_observation })
      axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KORIMBLE2.json")
        .then(response => { this.station_KORIMBLE2 = response.data.current_observation })

      // axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KLGD.json")
      //   .then(response => { this.stations['KLGD'] = response.data.current_observation })
      // axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KORLAGRA7.json")
      //   .then(response => { this.stations['KORLAGRA7'] = response.data.current_observation })
      // axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KORLAGRA9.json")
      //   .then(response => { this.stations['KORLAGRA9'] = response.data.current_observation })
      // axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KORLAGRA7.json")
      //   .then(response => { this.stations.push(response.data.current_observation)  })
      // axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KORLAGRA9.json")
      //   .then(response => { this.stations.push(response.data.current_observation)  })
      // axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KORLAGRA11.json")
      //   .then(response => { this.stations.push(response.data.current_observation)  })
      // axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KORUNION2.json")
      //   .then(response => { this.stations.push(response.data.current_observation)  })
      // axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KORCOVE8.json")
      //   .then(response => { this.stations.push(response.data.current_observation)  })
      // axios.get("http://api.wunderground.com/api/6455e4cdcf958bbd/conditions/q/pws:KORIMBLE2.json")
      //   .then(response => { this.stations.push(response.data.current_observation)  })




    })
  },

  methods: {
    convertDate: function (rfc822) {
      return moment(rfc822).format("ddd, h:ma")
    }
  },
})