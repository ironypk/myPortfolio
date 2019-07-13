import Vue from "vue";

const graphic = {
  template: "#graphic",
<<<<<<< HEAD
  props:{
    graphicName:String,
    graphicPercent:Number
  },
  methods:{
      drawColoredCircle(){
        const circle =  this.$refs['circle'];
        const dashArray = parseInt(
            getComputedStyle(circle).getPropertyValue('stroke-dasharray')
        );
        const percent =(dashArray / 100) * (100 - this.graphicPercent);
   
           circle.style.strokeDashoffset = percent
      }
  },
  mounted(){
    this.drawColoredCircle();
  }
}

const row = {
  template: "#graphics_row",
  props:{
      graphic:Object
=======
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
>>>>>>> 6b02373b03ee75a070f382bb4eaacd42f109beab
  },
  components: {
    graphic
  }
<<<<<<< HEAD
}

new Vue({
  el: "#graphics_container",
=======
};

new Vue({
  el: " #graphics_container",
>>>>>>> 6b02373b03ee75a070f382bb4eaacd42f109beab
  template: "#graphics",
  components: {
    row
  },
  data() {
    return {
      skills: []
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 6b02373b03ee75a070f382bb4eaacd42f109beab
  },
  created() {
    const data = require("../data/skills.json");
    this.skills = data;
  }
<<<<<<< HEAD
})
=======
});
>>>>>>> 6b02373b03ee75a070f382bb4eaacd42f109beab
