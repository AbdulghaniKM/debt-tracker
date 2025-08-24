<template>
  <table class="min-w-full border-collapse shadow-lg overflow-hidden rounded-2xl">
    <thead class="bg-teal-100">
    <tr>
      <th
          v-for="(head, index) in headers"
          :key="index"
          class="px-6 py-3 text-center text-teal-800 font-semibold uppercase tracking-wider"
      >
        {{ head }}
      </th>
    </tr>
    </thead>
    <tbody class="bg-white">
    <tr v-if="data.length === 0">
      <td :colspan="headers.length" class="text-center py-10 text-teal-800 text-xl">
        <div class="flex flex-col items-center justify-center gap-4">
          <img src="/img/not-found.webp" class="w-48 h-48" alt="not found" />
        <p>
          No Data Found
        </p>

        </div>
      </td>
    </tr>
    <tr v-else v-for="(row, rowIndex) in data" :key="rowIndex" class="hover:bg-teal-50 text-center transition-colors">
      <td v-for="(cell, cellIndex) in row" :key="cellIndex" class="px-6 py-4 border-b border-gray-200">
        {{ cell }}
      </td>
    </tr>
    </tbody>


  </table>
</template>


<script setup lang="ts">
import {Icon} from "@iconify/vue";

defineProps({
  headers: {
    type: Array as () => string[],
    required: true,
  },
  data: {
    type: Array as () => any[][],
    required: true,
  }
})
</script>
