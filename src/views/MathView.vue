<template>
  <div class="container flex-col mx-auto bg-red-200 text-gray-900">
    <div class="bg-yellow-200 w-full flex justify-center mb-4">
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
    <div class="w-full bg-indigo-200 p-2">
      <h1 class="text-5xl">Line Segments and Angles</h1>
      <h3 class="text-2xl mt-2">
        What are the proper tools needed to create and measure line segments and
        angles?
      </h3>
    </div>
    <div class="flex w-full justify-center bg-yellow-200 p-4">
      <div class="bg-green-200 w-full lg:w-2/3 p-2">
        <p class="text-2xl">
          Two of the geometric figures that architectural engineers draw when
          making their blueprints are line segments and angles. These geometric
          figures are the foundation of the major shapes. It's necessary to
          measure and create line segments and angles for all sorts of reasons.
        </p>
        <p class="text-xl mt-4 p-2">
          <span class="text-2xl italic mr-2">Directions:</span>Study each tab to
          learn about the tools used in this process.
        </p>
      </div>
    </div>
    <div class="bg-indigo-200 p-4">
      <div class="flex flex-col p-2 bg-purple-200">
        <div class="flex">
          <div
            class="bg-green-200 p-4 cursor-pointer"
            @click="
              selectedTab = 'line';
              incrementTabClick();
            "
          >
            Line Segments and Rulers
          </div>
          <div
            class="bg-red-200 p-4 cursor-pointer"
            @click="
              selectedTab = 'angle';
              incrementTabClick();
            "
          >
            Angles and Protractors
          </div>
        </div>
        <div class="bg-yellow-200">
          <div v-if="selectedTab === 'line'" class="flex flex-col">
            <div class="flex flex-col xl:flex-row p-4 items-center">
              <div class="text-xl p-4 w-full xl:w-2/3">
                <p class="my-5">
                  Recall that a line segment is a portion of a line that has
                  specific endpoints. The length between these two endpoints is
                  called the distance. To measure something means to determine
                  its size or amount. A ruler is the most common tool used to
                  measure distance.
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
                  A ruler usually has inches, abbreviated as "" along one edge
                  and centimeters, abbreviated as "cm," along the other edge.
                  Each inch on a ruler is divided into sixteenths, and each
                  centimeter on a ruler is divided into tenths.
                </p>
              </div>
              <div class="text-xl flex flex-col p-4">
                <img
                  class="mx-auto"
                  src="https://media.istockphoto.com/vectors/wooden-rulers-30-centimeters-with-shadows-isolated-on-white-measuring-vector-id1136157898"
                  alt="measuring rulers"
                />
              </div>
            </div>
            <div class="mx-auto">
              <p class="mb-6">
                Here’s a Tip Since most rulers have inches along one edge and
                centimeters along the other, make sure you are using the correct
                edge when measuring and drawing line segments.
              </p>
            </div>
          </div>
          <div v-else-if="selectedTab === 'angle'" class="text-xl p-4">
            <div class="flex flex-col sm:flex-row p-4 items-center">
              <p class="w-full lg:w-1/2">
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
            <div class="bg-yellow-300 flex flex-col lg:flex-row w-full p-4">
              <p class="w-full lg:w-1/2 flex items-center">
                Angles are often measured in units called degrees. The degree of
                an angle is usually a number from 0 to 360 that tells you how
                large the angle is. It represents how much "turn" or incline the
                angle has. Degrees are indicated by writing a number followed by
                the symbol °. For example, when you see 45°, you read it as 45
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
            <div class="flex flex-col p-4">
              A protractor is a device used to measure the degree of an angle.
              You can verify that the angle above is 45° by laying the
              protractor on top of the angle, as shown below.
            </div>
            <div class="mx-auto flex justify-center">
              <img src="../assets/images/image6.jpg" alt="protractor" />
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
              used this inner scale to determine that measured 45°.
            </p>
            <p class="italic my-4">
              Important Note Not all protractors have the inner scale and outer
              scale in the same order as the one in the picture above.
            </p>
            <p>
              During this lesson, you will learn how to measure and create
              angles using a protractor.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-yellow-200 w-full flex justify-center mb-4">
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
      tabsClicked: 0,
    };
  },
  methods: {
    incrementTabClick() {
      this.tabsClicked++;
    },
  },
};
</script>

<style>
/* .disabled {
  @apply opacity-50 cursor-not-allowed;
} */
</style>
