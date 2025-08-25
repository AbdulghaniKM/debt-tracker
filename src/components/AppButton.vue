<template>
    <motion.div :whileHover="{ scale: 1.05, transition: { duration: 0.05, ease: 'easeOut' } }" class="flex flex-row gap-2  transition-all cursor-pointer transition-discrete rounded-xl px-4 p-2 items-center justify-center" :class="{'hover:bg-teal-600/80 bg-teal-600 text-white': variant === 'primary',
  'border border-teal-600 hover:bg-teal-100 text-teal-600': variant === 'outline',
   'text-red-500 border border-red-500 bg-red-100': variant === 'danger',
   'text-green-500 border border-green-500 bg-green-100': variant === 'success',
   'text-yellow-500 border border-yellow-500 bg-yellow-100': variant === 'warning',
   'text-blue-500 border border-blue-500 bg-blue-100': variant === 'info',
  }">
      <Icon :icon="icon"/>
      <p v-if="!iconOnly" >
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
      required:false,
    },
    icon: {
      type: String,
      required: false,
    },
    variant: {
      type: String,
      default: 'primary'
    },
    iconOnly: {
      type: Boolean,
      default: false
    }

  })
</script>
