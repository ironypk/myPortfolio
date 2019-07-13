import Vue from "vue";

const graphic = {
  template: "#graphic",
  props: {
    graphicName: String,
    graphicPercent: Number
  },
  methods: {
    drawColoredCircle() {
      const circle = this.$refs["circle"];
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      const percent = (dashArray / 100) * (100 - this.graphicPercent);
      circle.style.strokeDashoffset = percent;
    }
  },
  mounted() {
    this.drawColoredCircle();
  }
};

const row = {
  template: "#graphics_row",
  props: {
    graphic: Object
  },
  components: {
    graphic
  }
};

new Vue({
  el: " #graphics_container",
  template: "#graphics",
  components: {
    row
  },
  data() {
    return {
      skills: []
    };
  },
  created() {
    const data = require("../data/skills.json");
    this.skills = data;
  }
});
