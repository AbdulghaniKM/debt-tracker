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
              :whileHover="{ scale: 1.03, transition: { duration: 0.25, ease: 'easeOut' } }"
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
          class="origin-top flex flex-col items-center justify-center w-full absolute top-[100%] bg-teal-800 overflow-hidden"
      >
        <div class="p-4 text-white">
          This is a new menu animation
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
</template>

<script setup lang="ts">
import { motion, AnimatePresence } from "motion-v"
import { Icon } from "@iconify/vue"
import { ref } from "vue"

const isOpen = ref(false)
const isHover = ref(false)
</script>
