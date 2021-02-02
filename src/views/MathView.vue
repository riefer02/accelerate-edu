<template>
  <div class="container flex-col mx-auto text-gray-900">
    <div class="w-full flex justify-center mt-2 mb-8">
      <div class="flex justify-evenly w-3/4 mx-auto">
        <router-link to="/ela">
          <button
            class="text-xl sm:text-2xl flex justify-center items-center mr-4 focus:outline-none"
          >
            <fa icon="arrow-circle-left" class="mr-2" />Prev Page
          </button></router-link
        >
        <router-link to="/"
          ><button
            class="text-xl sm:text-2xl flex justify-center items-center mr-2"
            :class="{ disabled: tabsClicked === 0 }"
          >
            Next Page
            <fa icon="arrow-circle-right" class="ml-1" /></button
        ></router-link>
      </div>
    </div>
    <div class="w-full p-2 mb-4">
      <h1 class="text-5xl lg:text-6xl">Line Segments and Angles</h1>
      <h3 class="text-2xl mt-2">
        What are the <span class="mark">proper tools</span> needed to create and
        measure line segments and angles?
      </h3>
    </div>
    <div class="flex w-full justify-center p-4">
      <div class="w-full lg:w-2/3 p-4 bg-gray-100 shadow-lg rounded-lg">
        <p class="text-2xl p-2">
          Two of the geometric figures that architectural engineers draw when
          making their blueprints are line segments and angles. These geometric
          figures are the foundation of the major shapes. It's necessary to
          measure and create line segments and angles for all sorts of reasons.
        </p>
        <p class="text-xl mt-4 p-2">
          <span class="text-2xl italic mr-2 mark">Directions:</span>Study each
          tab to learn about the tools used in this process.
        </p>
      </div>
    </div>
    <div class="p-4">
      <div class="flex flex-col p-2">
        <div class="flex">
          <div
            class="rounded-t-lg shadow-sm p-4 cursor-pointer border border-solid border-black border-opacity-10"
            @click="
              selectedTab = 'line';
              setActiveEl(0);
            "
            :class="{
              active: selectedTab === 'line',
              inactive: selectedTab !== 'line',
            }"
          >
            Line Segments and Rulers
          </div>
          <div
            class="rounded-t-lg shadow-sm ml-1 p-4 cursor-pointer border border-solid border-black border-opacity-10"
            @click="
              selectedTab = 'angle';
              setActiveEl(1);
            "
            :class="{
              active: selectedTab === 'angle',
              inactive: selectedTab !== 'angle',
            }"
          >
            Angles and Protractors
          </div>
        </div>
        <div
          class="bg-gray-100 rounded-r-lg rounded-b-lg shadow-lg border border-solid border-black border-opacity-10"
        >
          <div v-if="selectedTab === 'line'" class="flex flex-col">
            <div class="flex flex-col xl:flex-row p-4 items-center">
              <div class="text-xl p-4 w-full">
                <p class="my-5">
                  Recall that a line segment is a portion of a line that has
                  specific endpoints. The length between these two endpoints is
                  called the <span class="font-bold">distance</span>. To
                  <span class="font-bold">measure</span>
                  something means to determine its size or amount. A
                  <span class="font-bold mark">ruler</span> is the most common
                  tool used to measure distance.
                </p>
                <p class="my-5">
                  The customary units of measure for length or distance in the
                  U.S. are inch (in.), foot (ft), yard (yd), and mile (mi). The
                  metric units of measure for length or distance are millimeter
                  (mm), centimeter (cm), meter (m), and kilometer (km).
                </p>
                <p class="my-5">
                  During this lesson, you will learn how to measure and create
                  line segments in inches and centimeters using a ruler.
                </p>
                <p class="my-5">
                  A ruler usually has inches, abbreviated as "in" along one edge
                  and centimeters, abbreviated as "cm," along the other edge.
                  Each inch on a ruler is divided into sixteenths, and each
                  centimeter on a ruler is divided into tenths.
                </p>
              </div>
              <div class="text-xl flex flex-col p-4">
                <img
                  class="mx-auto"
                  src="../assets/images/image3.jpg"
                  alt="measuring rulers"
                />
              </div>
            </div>
            <div class="mx-auto">
              <p class="mb-6 p-2 italic">
                <span class="font-bold mark">Here’s a Tip:</span>
                Since most rulers have inches along one edge and centimeters
                along the other, make sure you are using the correct edge when
                measuring and drawing line segments.
              </p>
            </div>
          </div>
          <div v-else-if="selectedTab === 'angle'" class="text-xl p-4">
            <div class="flex flex-col lg:flex-row p-4 items-center">
              <p class="w-full lg:w-1/2 mb-2 lg:mb-0">
                Recall that an angle is a shape formed by two rays diverging
                from a common point known as the vertex. These rays are the
                "sides" of an angle, known as the initial side—also called the
                base of an angle—and the terminal side. The angle is formed at
                the point where the two sides meet, the vertex.
              </p>
              <div class="flex justify-center items-center mx-auto">
                <img
                  src="../assets/images/image5.jpg"
                  alt="an example of a vertex"
                />
              </div>
            </div>
            <div
              class="flex flex-col justify-center items-center lg:flex-row w-full p-4"
            >
              <p class="w-full lg:w-1/2 justify-center items-center">
                Angles are often measured in units called degrees. The
                <span class="font-bold mark">degree</span> of an angle is
                usually a number from 0 to 360 that tells you how large the
                angle is. It represents how much "turn" or incline the angle
                has. Degrees are indicated by writing a number followed by the
                symbol °. For example, when you see 45°, you read it as 45
                degrees. To write that the measure of angle A is 45 degrees, you
                would write m∠A = 45°.
              </p>
              <div class="w-full lg:w-1/2">
                <p class="mb-4 mt-2">Here is what a 45° angle looks like:</p>
                <img
                  class="w-1/2 mx-auto"
                  src="../assets/images/image4.jpg"
                  alt="fourty-five degree angle"
                />
              </div>
            </div>
            <div class="p-4">
              A <span class="font-bold mark">protractor</span> is a device used
              to measure the degree of an angle. You can verify that the angle
              above is 45° by laying the protractor on top of the angle, as
              shown below.
            </div>
            <div class="mx-auto flex justify-center mx-h-50 sm:mx-h-auto">
              <img
                src="../assets/images/image6.jpg"
                alt="protractor"
                class="sm:w-3/4 lg:w-1/2 w-auto mx-auto"
              />
            </div>
            <p class="mt-4">
              The initial side, or base, of the angle is placed along the
              straightedge of the protractor. Your protractor may have a center
              hole or a marking designating that it is the center. The vertex of
              the angle must be placed in the center of the protractor. The
              center of the protractor is used to line up the vertex of the
              angle for proper measuring. You will notice there is an inner
              scale and outer scale on the protractor. Looking at the inner
              scale, you will see that going counterclockwise, the degrees
              increase in increments of 10 degrees from 0 to 180 degrees. We
              used this inner scale to determine that &ang;BAC measured 45°.
            </p>
            <p class="italic my-4">
              <span class="mark">Important Note</span> Not all protractors have
              the inner scale and outer scale in the same order as the one in
              the picture above.
            </p>
            <p>
              During this lesson, you will learn how to measure and create
              angles using a protractor.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center mb-4 mt-8">
      <div class="flex justify-evenly w-3/4 mx-auto">
        <router-link to="/ela" @click="scrollToTop()">
          <button
            class="text-xl sm:text-2xl flex justify-center items-center mr-4 focus:outline-none"
          >
            <fa icon="arrow-circle-left" class="mr-2" />Prev Page
          </button></router-link
        >
        <router-link to="/" @click="scrollToTop()"
          ><button
            class="text-xl sm:text-2xl flex justify-center items-center mr-2"
            :class="{ disabled: tabsClicked === 0 }"
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
      selectedTab: "line",
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
/* .disabled {
  @apply opacity-50 cursor-not-allowed;
} */

.active {
  background-color: rgba(59, 130, 246, 0.35);
}

.inactive {
  @apply bg-gray-100;
}
</style>
