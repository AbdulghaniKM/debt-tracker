<template>
  <div class="flex flex-col justify-evenly relative">
    <header class="p-8 bg-teal-800">
      <div class="container mx-auto">
        <div class="flex text-teal-100 flex-row justify-between items-center">
          <div class="flex text-xl flex-row gap-4 items-center">
            <Icon icon="material-symbols:school-rounded" class="text-3xl"/>
            <h1 class="font-bold">
              School Nest
            </h1>
          </div>

          <motion.button
              @click="isOpen = !isOpen"
              @mouseover="isHover = true"
              @mouseleave="isHover = false"
              :whileHover="{ scale: 1.05, transition: { duration: 0.25, ease: 'easeOut' } }"
              :whileTap="{ scale: 0.97 }"
              class="bg-teal-100 p-2 flex flex-row items-center rounded-xl cursor-pointer"
          >
            <motion.div
                :animate="{ rotate: isOpen || isHover ? 180 : 0 }"
                :transition="{ duration: 0.3, ease: 'easeInOut' }"
            >
              <Icon icon="mingcute:down-fill" class="text-teal-600 text-2xl" />
            </motion.div>
          </motion.button>

        </div>
      </div>
    </header>

    <AnimatePresence>
      <motion.div
          v-if="isOpen || isHover"
          :initial="{ opacity: 0, scaleY: 0 }"
          :animate="{ opacity: 1, scaleY: 1 }"
          :exit="{ opacity: 0, scaleY: 0 }"
          :transition="{ type: 'spring', stiffness: 200, damping: 20 }"
          class="origin-top h-40 flex flex-col items-center justify-center w-full absolute top-[100%] bg-teal-800 overflow-hidden"
      >
        <div class="p-4 flex flex-row items-center justify-center  ">
          <ul class="flex flex-row items-center justify-center gap-6">
            <motion.li @click="redirectTo(item.route)"  :whileHover="{ scale: 1.05, transition: { duration: 0.25, ease: 'easeOut' } }" v-for="(item, index) in navIems" class="flex px-6 transition-colors duration-100 py-2 rounded-3xl  flex-row items-center gap-2 border  cursor-pointer" :class="getCurrentRoute() === item.route ? 'text-teal-100 bg-teal-500 hover:bg-teal-600 border-teal-50' : 'bg-teal-50 border-teal-400 text-teal-800 hover:bg-teal-100'" :key="index">
              <Icon :icon="item.icon" class="text-2xl"/>
              <p class="text-xl">{{item.text}}</p>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
</template>

<script setup lang="ts">
import {useRedirect} from "../utils";
import {getCurrentRoute} from "../utils";
import { motion, AnimatePresence } from "motion-v"
import { Icon } from "@iconify/vue"
import { ref } from "vue"
const { redirectTo  } = useRedirect()
const isOpen = ref(false)
const isHover = ref(false)
console.log()
const navIems = [
  {
    icon: 'hugeicons:home-03',
    text: 'Home',
    route: '/'
  },
  {
    icon: 'hugeicons:backpack-03',
    text: 'Students',
    route: '/students'
  },
  {
    icon: 'hugeicons:student',
    text: 'Best Students',
    route: '/best-students'
  },
  {
    icon: 'hugeicons:book-bookmark-02',
    text: 'Subjects',
    route: '/subjects'
  },
  {
    icon: 'hugeicons:information-circle',
    text: 'About',
    route: '/about'
  },
]

</script>
