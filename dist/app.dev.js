"use strict";

new Vue({
  el: '#app',
  data: {
    running: false,
    playerLife: 100,
    monsterLife: 100
  },
  computed: {
    hasResult: function hasResult() {
      return this.playerLife == 0 || this.monsterLife == 0;
    }
  },
  methods: {
    startGame: function startGame() {
      this.running = true;
      this.playerLife = 100;
      this.monsterLife = 100;
    }
  },
  watch: {}
});