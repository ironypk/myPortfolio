import Vue from "vue";

const btns = {
  template: "#slider_btns",
  props: {
    works: Array
  },
  methods: {
    secondSlide(direction) {
      this.$emit("secondSlide", direction);  
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
      firstVisible: 1
    };
  },
  components: {
    btns
  },
  methods: {
    handleSlide(direction) {
      const list = this.$refs["list"];
      const worksLength = this.works.length;
      const item = this.$refs.item[1];
      const listWidth = parseFloat(getComputedStyle(list).width);
      const slideWidth = parseFloat(getComputedStyle(item).width);
      const slideStep = parseFloat(getComputedStyle(list).left);
      switch (direction) {
        case "next":
          console.log(slideWidth);
          if (this.activeSlide < worksLength) {
            this.activeSlide++;
          }
          if (
            this.activeSlide > listWidth / slideWidth &&
            listWidth - slideStep < slideWidth * worksLength
          ) {
            list.style.left = slideStep - slideWidth + "px";
            this.firstVisible++;
          }
          break;
        case "prev":
          if (this.activeSlide > 1) {
            this.activeSlide--;
          }
          if (-slideStep / slideWidth + 1 > this.activeSlide) {
            list.style.left = slideStep + slideWidth + "px";
            this.firstVisible--;
          }
          break;
      }
    },
    currentSlideClick(id){
      this.activeSlide = id
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
  data: {
    works: [],
    currentIndex: 0
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
    clickArrowSlide(direction) {
      switch (direction) {
        case "next":
          if (this.currentIndex < this.works.length - 1) {
            this.currentIndex++;
          }
          break;
        case "prev":
          if (this.currentIndex > 0) {
            this.currentIndex--;
          }
      }
    },
    currentSlideClick(id){
      this.currentIndex = id - 1
    }
  },
  created() {
    const data = require("../data/slider.json");

    this.works = this.makeArrayWithRequiredImages(data);
  }
});
