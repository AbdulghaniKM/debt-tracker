<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex mt-20 flex-col items-center">
      <h1 class="font-bold text-4xl text-teal-800">
        Students
      </h1>
      <p class="text-teal-800 text-xl">
        students in the our organization are high level students!
      </p>

      <div>
        {{ studentsStore.students}}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {useStudentsStore} from "../stores/students";

const studentsStore = useStudentsStore()

onMounted(() => {
  studentsStore.getStudentById(1)
})
</script>