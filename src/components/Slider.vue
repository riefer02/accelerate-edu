<template>
  <div class="slider w-full sm:w-1/2">
    <transition-group tag="div" name="fade" class="slides-group">
      <div
        :key="current"
        class="slide text-3xl"
        :class="slides[current].className"
      >
        <p class="text-grey-200 text-opacity-50">{{ slides[current].name }}</p>
      </div>
    </transition-group>
    <div
      class="btn btn-prev text-5xl"
      aria-label="Previous slide"
      @click="slide(-1)"
    >
      &#10094;
    </div>
    <div
      class="btn btn-next text-5xl"
      aria-label="Next slide"
      @click="slide(1)"
    >
      &#10095;
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    current: 0,
    direction: 1,
    slides: [
      { className: "nebula-1", name: "Orion Nebula" },
      { className: "nebula-2", name: "Crab Nebula" },
      { className: "nebula-3", name: "Ring Nebula" },
      { className: "nebula-4", name: "Carina Nebula" },
      { className: "nebula-5", name: "Horsehead Nebula" },
    ],
  }),
  methods: {
    slide(dir) {
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      var len = this.slides.length;
      this.current = (this.current + (dir % len) + len) % len;
    },
  },
  mounted() {
    this.show = true;
  },
};
</script>

<style scoped>
.nebula-1 {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg/600px-Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg");
}

.nebula-2 {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Crab_Nebula.jpg/600px-Crab_Nebula.jpg");
}
.nebula-3 {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Hubble_image_of_the_Ring_Nebula_%28Messier_57%29.jpg/600px-Hubble_image_of_the_Ring_Nebula_%28Messier_57%29.jpg");
}
.nebula-4 {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/The_spectacular_star-forming_Carina_Nebula_imaged_by_the_VLT_Survey_Telescope.jpg/559px-The_spectacular_star-forming_Carina_Nebula_imaged_by_the_VLT_Survey_Telescope.jpg");
}
.nebula-5 {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Hubble_Sees_a_Horsehead_of_a_Different_Color.jpg/574px-Hubble_Sees_a_Horsehead_of_a_Different_Color.jpg");
}

/* FADE IN */
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}

.slider {
  height: 400px;
  position: relative;
  overflow: hidden;
  margin: 0;
  color: #fff;
}

.slide {
  width: 100%;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: 50% 50%;
  background-size: cover;
  object-fit: fill;
}

.btn {
  z-index: 10;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  position: absolute;
  top: calc(50% - 35px);
  left: 1%;
  transition: transform 0.3s ease-in-out;
  user-select: none;
}

.btn-next {
  left: auto;
  right: 1%;
}

.btn:hover {
  transform: scale(1.1);
}
</style>
