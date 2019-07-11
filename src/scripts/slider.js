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
      activeSlideOther: 1,
      firstPosition: 1,
    };
  },
  components: {
    btns
  },
  methods: {
    handleSlide(direction) {
      const list = this.$refs["list"];
      const worksLength = this.works.length;
      const item = this.$refs.item[0];
      const listWidth = parseInt(getComputedStyle(list).width);
      const slideWidth = parseInt(getComputedStyle(item).width);
      const slideStep = parseInt(getComputedStyle(list).left);
      switch (direction) {
        case "next":
          if(this.activeSlide < worksLength){
            this.activeSlide++;
          }
          if(this.activeSlideOther <= worksLength){
            this.activeSlideOther++
          }
          if (this.activeSlide > listWidth / slideWidth && this.activeSlideOther <= worksLength
          ) {
            list.style.left =
              slideStep - slideWidth + "px";
              this.firstPosition++
          }
          break;
        case "prev":
            if(this.activeSlide > 1){
              this.activeSlide--;
            }
            if(this.activeSlideOther > 1){
              this.activeSlideOther--
            }
            if (this.firstPosition > this.activeSlide) {
            list.style.left =
              slideStep  + slideWidth + "px";
              this.firstPosition--
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
  data:{
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
    clickSlide(direction){
      switch(direction){
        case "next":
          if(this.currentIndex < this.works.length - 1){
            this.currentIndex++
          }
          break;
        case "prev":
            if(this.currentIndex > 0){
              this.currentIndex--
         }
      }
    }
    
  },
  created() {
    const data = require("../data/slider.json");

    this.works = this.makeArrayWithRequiredImages(data);
  }
});