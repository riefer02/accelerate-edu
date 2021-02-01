<template>
  <div class="container flex-col mx-auto bg-red-200 text-gray-900">
    <div class="bg-yellow-200 w-full flex justify-center mb-4">
      <div class="flex justify-evenly w-3/4 mx-auto">
        <button
          class="text-xl sm:text-2xl flex justify-center items-center mr-4 focus:outline-none opacity-50"
        >
          <fa icon="arrow-circle-left" class="mr-2" />Previous Page
        </button>
        <router-link to="/ela"
          ><button
            class="text-xl sm:text-2xl flex justify-center items-center mr-2"
            :class="{ disabled: !showAnswer }"
          >
            Next Page
            <fa icon="arrow-circle-right" class="ml-1" /></button
        ></router-link>
      </div>
    </div>
    <div class="w-full bg-indigo-200">
      <h1 class="text-5xl">Nebulae</h1>
      <h3 class="text-2xl mt-2">What are nebulae?</h3>
    </div>
    <div class="flex flex-col md:flex-row w-full bg-yellow-200 p-4">
      <div
        alt="Helix Nebula"
        class="h-40 md:h-auto w-full md:w-1/3 bg-cover bg-center"
        style="
          background-image: url(https://cdn.mos.cms.futurecdn.net/iuQmVPLBRbmRQeoA46VTZ6.jpg);
        "
      ></div>
      <div class="bg-green-200 w-full md:w-2/3 p-2">
        <p class="text-2xl">
          Our solar system began in a nebula about 15 billion years ago. All the
          matter in the universe was packed into an incredibly small, dense
          area. A huge explosion happened, and everything scattered in all
          directions. Over billions of years, gravity pulled space dust and
          gases together into clouds. These huge, shining clouds are called
          nebulae—  a single cloud is called a nebula. Many stars, like our sun,
          were born in the clouds of the nebulae. 
        </p>
      </div>
    </div>
    <div class="bg-indigo-200 p-4">
      <p class="text-2xl">
        The largest, most violent star-forming region known lies in the
        Tarantula Nebula. The bright knot of stars to the left of the center
        contains many of the largest, hottest, and brightest stars known.
      </p>
      <p class="text-xl mt-4 p-2">
        <span class="text-2xl italic mr-2">Directions:</span>Click through the
        slideshow to see a variety of known nebulae found in our galaxy and
        beyond. 
      </p>
    </div>
    <div class="w-full p-4 flex flex-col lg:flex-row">
      <Slider />
      <div
        class="flex flex-col justify-center items-center p-4 mx-auto w-full lg:w-1/2"
      >
        <p class="text-xl">
          <span class="text-2xl block my-4">Question:</span> What are some
          differences you notice between the nebulae in the pictures?
        </p>
        <button
          class="text-2xl rounded-lg shadow-lg hover:shadow-sm bg-indigo-600 hover:bg-indigo-500 mx-auto mb-2 mt-6 p-2 text-gray-200 focus:outline-none"
          @click="toggleAnswer()"
        >
          Click Here
        </button>
        <transition name="fade">
          <p v-show="showAnswer" class="text-xl mt-4">
            <span class="text-2xl block mb-2">Answer:</span>
            They have different colors, shapes, and amounts of brightness
          </p>
        </transition>
      </div>
    </div>
    <div class="bg-yellow-200 w-full flex justify-center mb-4">
      <div class="flex justify-evenly w-3/4 mx-auto">
        <button
          class="text-xl sm:text-2xl flex justify-center items-center mr-4 focus:outline-none opacity-50"
        >
          <fa icon="arrow-circle-left" class="mr-2" />Previous Page
        </button>
        <router-link to="/ela"
          ><button
            class="text-xl sm:text-2xl flex justify-center items-center mr-2"
            :class="{ disabled: !showAnswer }"
          >
            Next Page
            <fa icon="arrow-circle-right" class="ml-1" /></button
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../components/Slider.vue";
export default {
  components: {
    Slider,
  },
  data() {
    return {
      showAnswer: false,
    };
  },
  methods: {
    toggleAnswer() {
      this.showAnswer = true;
    },
  },
};
</script>

<style></style>
