<template>
  <div class="container flex-col mx-auto bg-red-200">
    <div class="w-full bg-indigo-200">
      <h1 class="text-5xl">Nebulae</h1>
      <h3 class="text-3xl mt-2">What are nebulae?</h3>
    </div>
    <div class="flex w-full bg-yellow-200 p-4">
      <div
        alt="Helix Nebula"
        class="w-1/3 bg-cover bg-center"
        style="
          background-image: url(https://cdn.mos.cms.futurecdn.net/iuQmVPLBRbmRQeoA46VTZ6.jpg);
        "
      ></div>
      <div class="bg-green-200 w-2/3 p-2">
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
        contains many of the largest, hottest, and brightest stars known. Click
        through the slideshow to see a variety of known nebulae found in our
        galaxy and beyond. 
      </p>
    </div>
    <div class="w-full p-4 flex">
      <Slider />
      <div class="flex flex-col justify-evenly items-center p-4">
        <p class="text-xl">
          <span class="text-2xl block">Directions:</span> Click through the
          images of the Nebula on the image slider to learn more.
        </p>
        <p class="text-xl">
          <span class="text-2xl block">Question:</span> What are some
          differences you notice between the nebulae in the pictures?
        </p>
        <button
          class="text-3xl rounded-lg shadow-lg hover:shadow-sm bg-indigo-600 hover:bg-indigo-500 mx-auto p-2 text-gray-200 mt-2 focus:outline-none"
          @click="toggleAnswer()"
        >
          Click Here
        </button>
        <transition name="fade">
          <p v-show="showAnswer" class="text-xl mt-2">
            <span class="text-2xl block relative top-0 left-0">Answer:</span>
            They have different colors, shapes, and amounts of brightness
          </p>
        </transition>
      </div>
    </div>
    <div class="bg-yellow-200 w-full flex justify-center">
      <div class="flex">
        <button class="text-xl mr-4">Previous Page</button>
        <button class="text-xl">Next Page</button>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "./components/Slider.vue";
export default {
  components: {
    Slider,
  },
  data() {
    return {
      showAnswer: true,
    };
  },
  methods: {
    toggleAnswer() {
      this.showAnswer = !this.showAnswer;
    },
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
