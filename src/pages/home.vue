<template>
  <div class="flex flex-col items-center justify-center">
    <div class="mt-20 gap-6 text-2xl flex flex-col items-center justify-center">
      <h1>
        Count : {{ context.count }}
      </h1>
      <div class="flex flex-row items-center justify-center gap-4">
        <AppButton icon="bitcoin-icons:minus-filled" button-text="Decrement" @click="context.decrement()" />
        <AppButton icon="ri:reset-left-line" button-text="Reset" @click="context.reset()"/>
        <AppButton icon="jam:plus" button-text="Increment" @click="context.increment()" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useCounterStore } from '../stores/counter';
  import AppButton from '../components/AppButton.vue';
  import api from "../plugins/axios.ts";
  import {onMounted} from "vue";
  const context = useCounterStore();
  onMounted(
      async () => {
        const response = await api.get('/students')
        const reaponse2 = await api.get('/subjects')
        console.log(response.data)
        console.log(reaponse2.data)
      }
  )
</script>