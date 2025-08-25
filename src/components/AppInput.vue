<template>
  <div class="flex w-full flex-row items-center gap-2">
    <p class="text-teal-800 text-xl">
      {{label}}:
    </p>
  <input :type="type" v-model="modalValue" class="border border-teal-800 rounded-xl p-2" :placeholder="placeholder"/>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text'
  },

})
const modalValue = defineModel<string>()
</script>


