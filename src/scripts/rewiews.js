import Vue from 'vue';
import Flickity from 'vue-flickity';
 
new Vue({
    el:'.rewiews',
  components: {
    Flickity
  },
 
  data() {
    return {
      flickityOptions: {
      initialIndex: 0,
      prevNextButtons: false,
      pageDots: false,
      wrapAround: false,
      groupCells: true,
      freeScroll:false,
      contain: true
      },
      rewiews:[]
    }
  },
 
  methods: {
    next() {
      this.$refs.flickity.next();

    },
 
    previous() {
      this.$refs.flickity.previous();
    },
    checkArrows(){
        let prevButton = this.$el.querySelector('.rewiews__prev');
        let nextButton = this.$el.querySelector('.rewiews__next');
       if(this.$refs.flickity.selectedIndex() == 0) {
        prevButton.disabled = true;
       } else if (this.$refs.flickity.selectedIndex() == this.$refs.flickity.slides().length - 1 ){
        nextButton.disabled = true;
       } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
       }
    },
    makeArrayWithRequiredImages(data) {
      return data.map(item => {
        const requirePic = require(`../images/content/${item.photo}`);

        item.photo = requirePic;

        return item;
      });
    }
  },
  created() {
    const data = require("../data/rewiews.json");
    this.rewiews = this.makeArrayWithRequiredImages(data);
  }
});