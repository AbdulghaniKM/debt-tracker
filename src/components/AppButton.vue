<template>
    <motion.div :whileHover="{ scale: 1.05, transition: { duration: 0.05, ease: 'easeOut' } }" class="flex flex-row gap-2  transition-all cursor-pointer transition-discrete rounded-xl px-4 p-2 items-center justify-center" :class="{'hover:bg-teal-600/80 bg-teal-600 text-white': variant === 'primary',
  'border border-teal-600 hover:bg-teal-100 text-teal-600': variant === 'outline'}">
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
    },
    variant: {
      type: String,
      default: 'primary'
    }
  })
</script>
