<template>
  <table class="min-w-full border-collapse shadow-lg overflow-hidden rounded-2xl">
    <thead class="bg-teal-100">
    <tr>
      <th
          v-for="(h, index) in headers"
          :key="index"
          class="px-6 py-3 text-center text-teal-800 font-semibold uppercase tracking-wider"
      >
        {{ h.label }}
      </th>
      <th v-if="$slots.actions" class="px-6 py-3 text-center text-teal-800 font-semibold uppercase tracking-wider">
        Actions
      </th>
    </tr>
    </thead>

    <tbody class="bg-white">
    <tr v-if="data.length === 0">
      <td :colspan="headers.length" class="text-center py-10 text-teal-800 text-xl">
        <div class="flex flex-col items-center justify-center gap-4">
          <img src="/img/not-found.webp" class="w-48 h-48" alt="not found" />
          <p>No Data Found</p>
        </div>
      </td>
    </tr>

    <tr
        v-else
        v-for="(row, rowIndex) in data"
        :key="rowIndex"
        class="hover:bg-teal-50 text-center transition-colors"
    >
      <td
          v-for="(h, cellIndex) in headers"
          :key="cellIndex"
          class="px-6 py-4 border-b border-gray-200"
      >
        {{ formatters[h.key] ? formatters[h.key](row[h.key]) : row[h.key] }}
      </td>

      <!-- actions slot -->
      <td v-if="$slots.actions" class="px-6 flex flex-row gap-4 py-4 border-b border-gray-200">
        <slot name="actions" :row="row"></slot>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
defineProps({
  headers: {
    type: Array as () => { key: string; label: string }[],
    required: true,
  },
  data: {
    type: Array as () => Record<string, any>[],
    required: true,
  },
  formatters: {
    type: Object as () => Record<string, (value: any) => string>,
    default: () => ({}),
  },
});
</script>
