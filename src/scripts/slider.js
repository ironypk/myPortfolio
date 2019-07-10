import Vue from "vue";

const btns = {
  template: "#slider_btns",
  methods: {
    slide(direction) {
      this.$emit("slide", direction);
    }
  }
};

const slides = {
  template: "#slider_main",
  props: {
    currentWork: Object
  }
};

const controls = {
  template: "#slider_controls",
  props: {
    works: Array,
    currentWork: Object
  },
  data() {
    return {
      activeSlide: 1,
      firstSlide : 1
    };
  },
  components: {
    btns
  },
  methods: {
    clickCurrentSlide(num) {
      this.activeSlide = num;
    },
    handleSlide(direction) {
      const list = this.$refs["list"];
      switch (direction) {
        case "next":
          if (
            parseInt(getComputedStyle(list).left) >
            180 - parseInt(getComputedStyle(list).width)
          ) {
            list.style.left =
              parseInt(getComputedStyle(list).left) - 180 + "px";
          }
          if (this.firstSlide < this.works.length -2){
            this.firstSlide++;
          }
          break;
        case "prev":
          if (parseInt(getComputedStyle(list).left) < 0) {
            list.style.left =
              parseInt(getComputedStyle(list).left) + 180 + "px";
          }
          if (this.firstSlide > 1){
            this.firstSlide--;
          }
          break;
      }
    }
  }
};

const display = {
  template: "#slider_display",
  props: {
    works: Array,
    currentWork: Object
  },
  components: {
    slides,
    controls
  }
};

const tags = {
  template: "#slider_tags",
  props: {
    tags: Array
  }
};

const info = {
  template: "#slider_info",
  props: {
    currentWork: Object
  },
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(", ");
    }
  },
  components: {
    tags
  }
};

new Vue({
  el: " #slider_container",
  template: "#slider",
  components: {
    display,
    info
  },
  data() {
    return {
      works: [],
      currentIndex: 0
    };
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  methods: {
    makeArrayWithRequiredImages(data) {
      return data.map(item => {
        const requirePic = require(`../images/content/${item.photo}`);

        item.photo = requirePic;

        return item;
      });
    },
    changeSlide(num) {
      this.currentIndex = num - 1;
    }
  },
  created() {
    const data = require("../data/slider.json");

    this.works = this.makeArrayWithRequiredImages(data);
  }
});
