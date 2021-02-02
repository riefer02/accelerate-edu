<template>
  <div class="container flex-col mx-auto text-gray-900">
    <div class="w-full flex justify-center mt-2 mb-4">
      <div class="flex justify-evenly w-3/4 mx-auto">
        <router-link to="/">
          <button
            class="text-xl sm:text-2xl flex justify-center items-center mr-4 focus:outline-none"
          >
            <fa icon="arrow-circle-left" class="mr-2" />Prev Page
          </button>
        </router-link>
        <router-link to="/math"
          ><button
            class="text-xl sm:text-2xl flex justify-center items-center mr-2"
            :class="{ disabled: !showAnswer }"
          >
            Next Page
            <fa icon="arrow-circle-right" class="ml-1" /></button
        ></router-link>
      </div>
    </div>
    <div class="w-full p-4">
      <h1 class="text-5xl lg:text-6xl">Over and Over Again</h1>
      <h3 class="text-2xl mt-2">
        Have you noticed how <span class="mark">literature</span> tends to
        repeat itself?
      </h3>
    </div>
    <div class="flex w-full p-4">
      <div class="w-full lg:w-3/4 p-2 mx-auto">
        <p class="text-2xl">
          Is every story completely different from any other? Or do some kinds
          of details appear in many stories, both in writing and on screen? An
          <span class="font-bold mark">archetype</span> is a story element that
          shows up again and again, in very old stories and in very new ones.
        </p>
      </div>
    </div>
    <div class="p-4 w-full lg:w-3/4 mx-auto">
      <p class="text-2xl p-2">
        The word <span class="italic">archetype</span> comes from two Greek
        words—<span class="italic">archein</span> and
        <span class="italic">typos</span>.
        <span class="italic">Archein</span> means “first” or “primitive,” and
        <span class="italic">typos</span> means “a model to be followed.”
        Therefore, the literal meaning of archetype is a model or “type” based
        on something primitive, such as a very old idea. And it’s
        true—archetypes go back a long way!
      </p>
      <p class="text-xl mt-4 mb-4 p-2 bg-gray-100 shadow-md rounded-lg">
        <span class="text-2xl italic mr-2 mark">Directions:</span>Watch this
        video to learn how archetypes can make a story more meaningful.
      </p>
    </div>
    <div class="flex justify-center w-full">
      <video class="w-full lg:w-1/2" controls playsinline>
        <source
          src="../assets/video/ela-lesson-video-accelerate-edu.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <div class="p-4 flex justify-center w-full lg:w-3/4 xl:w-1/2">
      <div
        class="flex flex-col justify-evenly items-center p-4 shadow-lg rounded-lg mt-4 bg-gray-100"
      >
        <p class="text-xl">
          <span class="text-2xl mr-2 mark">Question:</span> How do archetypes
          affect a story’s readers or listeners?
        </p>
        <button
          class="text-3xl mt-6 rounded-lg shadow-lg hover:shadow-sm bg-indigo-600 hover:bg-indigo-500 mx-auto p-2 text-gray-200 focus:outline-none"
          @click="toggleAnswer()"
        >
          Click Here
        </button>
        <transition name="fade">
          <p v-show="showAnswer" class="text-xl mt-4">
            <span class="text-2xl">Answer:</span>
            They remind the audience of some aspect of human experience, such as
            the feelings, hopes, and dreams that all humans share.
          </p>
        </transition>
      </div>
    </div>
    <div class="w-full flex justify-center mb-4 mt-8">
      <div class="flex justify-evenly w-3/4 mx-auto">
        <router-link to="/" @click="scrollToTop()">
          <button
            class="text-xl sm:text-2xl flex justify-center items-center mr-4 focus:outline-none"
          >
            <fa icon="arrow-circle-left" class="mr-2" />Prev Page
          </button>
        </router-link>
        <router-link to="/math" @click="scrollToTop()"
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
export default {
  data() {
    return {
      showAnswer: false,
    };
  },
  methods: {
    toggleAnswer() {
      this.showAnswer = true;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
/* .disabled {
  @apply opacity-50;
} */
</style>
