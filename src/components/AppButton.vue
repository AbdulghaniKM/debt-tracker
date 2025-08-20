<template>
    <motion.div :whileHover="{ scale: 1.05, transition: { duration: 0.05, ease: 'easeOut' } }" class="flex flex-row gap-2 hover:bg-teal-600/80 transition-all transition-discrete text-white bg-teal-600 rounded-xl p-2 items-center justify-center">
      <Icon :icon="icon"/>
      <p>
        {{ buttonText }}
      </p>
    </motion.div>
</template>
<script setup lang="ts">
  import {motion} from "motion-v";
  import {Icon } from '@iconify/vue'
  defineProps({
    buttonText: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    }
  })
</script>
