<template>
  <div class="flex mt-20 flex-col">
    <div class="flex flex-col items-start justify-start gap-4">
      <div class="flex flex-row gap-2 text-3xl text-teal-800">
      <h1>
        Specific Student Details:
      </h1>
      <h1 class="font-bold">
        {{ student?.name }}
      </h1>
      </div>
      <div class="flex flex-col">
        <div v-for="(item, index) in details" :key="index">
          <span class="text-lg font-bold text-teal-800">
            {{ item.label }} :
          </span>
          <span class="text-lg  text-teal-800">
            {{ item.value }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useStudentsStore} from "../stores/students.ts";
import {useRoute} from "vue-router";
import {computed, onMounted} from "vue";
const route = useRoute()
const studentStore = useStudentsStore()
const student = computed(() => studentStore.student);
const details = computed(() => student.value ? [
  { label: 'Full Name', value: student.value.name },
  { label: 'Age', value: student.value.age },
  { label: 'Gender', value: student.value.gender === 0 ? 'Male' : 'Female' },
  { label: 'Stage', value: student.value.stage },
  { label: 'IQ Level', value: student.value.isNerd === true ? 'High': 'Mid' },
  { label: 'Subjects', value: student.value.subjects.map(s => s.name).join(', ') },
] : [])

onMounted(
    () => {
      studentStore.getStudentById(Number(route.params.id))
    }
)
</script>


