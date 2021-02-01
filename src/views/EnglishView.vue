<template>
  <div class="container flex-col mx-auto bg-red-200 text-gray-900">
    <div class="bg-yellow-200 w-full flex justify-center mb-4">
      <div class="flex justify-evenly w-3/4 mx-auto">
        <router-link to="/">
          <button
            class="text-xl sm:text-2xl flex justify-center items-center mr-4 focus:outline-none"
          >
            <fa icon="arrow-circle-left" class="mr-2" />Previous Page
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
    <div class="w-full bg-indigo-200 p-4">
      <h1 class="text-5xl">Over and Over Again</h1>
      <h3 class="text-2xl mt-2">
        Have you noticed how literature tends to repeat itself?
      </h3>
    </div>
    <div class="flex w-full bg-yellow-200 p-4">
      <div class="bg-green-200 w-full sm:w-3/4 p-2 mx-auto">
        <p class="text-2xl">
          Is every story completely different from any other? Or do some kinds
          of details appear in many stories, both in writing and on screen? An
          archetype is a story element that shows up again and again, in very
          old stories and in very new ones.
        </p>
      </div>
    </div>
    <div class="bg-indigo-200 p-4 w-full sm:w-3/4 mx-auto">
      <p class="text-2xl p-2">
        The word archetype comes from two Greek words—archein and typos. Archein
        means “first” or “primitive,” and typos means “a model to be followed.”
        Therefore, the literal meaning of archetype is a model or “type” based
        on something primitive, such as a very old idea. And it’s
        true—archetypes go back a long way!
      </p>
      <p class="text-xl mt-4 mb-4 p-2">
        <span class="text-2xl italic mr-2">Directions:</span>Watch this video to
        learn how archetypes can make a story more meaningful.
      </p>
    </div>
    <div class="flex justify-center bg-red-400 w-full">
      <video class="w-full lg:w-1/2" controls>
        <source
          src="../assets/video/ela-lesson-video-accelerate-edu.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <div class="p-4 flex justify-center w-full sm:w-1/2">
      <div class="flex flex-col justify-evenly items-center p-4">
        <p class="text-xl">
          <span class="text-2xl mr-2">Question:</span> How do archetypes affect
          a story’s readers or listeners?
        </p>
        <button
          class="text-3xl mt-6 rounded-lg shadow-lg hover:shadow-sm bg-indigo-600 hover:bg-indigo-500 mx-auto p-2 text-gray-200 focus:outline-none"
          @click="toggleAnswer()"
        >
          Click Here
        </button>
        <transition name="fade">
          <p v-show="showAnswer" class="text-xl mt-2">
            <span class="text-2xl">Answer:</span>
            They remind the audience of some aspect of human experience, such as
            the feelings, hopes, and dreams that all humans share.
          </p>
        </transition>
      </div>
    </div>
    <div class="bg-yellow-200 w-full flex justify-center mb-4">
      <div class="flex justify-evenly w-3/4 mx-auto">
        <router-link to="/">
          <button
            class="text-xl sm:text-2xl flex justify-center items-center mr-4 focus:outline-none"
          >
            <fa icon="arrow-circle-left" class="mr-2" />Previous Page
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
  },
};
</script>

<style scoped>
.disabled {
  @apply opacity-50;
}
</style>
