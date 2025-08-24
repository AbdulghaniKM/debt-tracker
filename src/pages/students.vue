<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex mt-20 flex-col items-center">
      <h1 class="font-bold text-4xl text-teal-800">
        Students
      </h1>
      <p class="text-teal-800 text-xl">
        students in the our organization are high level students!
      </p>

      <input type="text" class="border border-teal-800 rounded-xl p-2" placeholder="Search Students" v-model="searchTerm"></input>

      <AppTable :data="filteredStudents" :headers="headers"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, computed} from "vue";
import {useStudentsStore} from "../stores/students";
import {search} from "../utils";
import AppTable from "../components/AppTable.vue";
const searchTerm = ref('')
const filteredStudents = computed(() => search(studentsStore.students, searchTerm.value));
const headers = ['ID','Name', 'Age', 'Gender', 'Stage', 'Absents', 'Special?', 'Subjects']
const studentsStore = useStudentsStore()

const getAllStudents = async () => {
  await studentsStore.getStudents();
}
onMounted(() => {
  getAllStudents();
})
</script>