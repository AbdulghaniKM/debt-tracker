<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex mt-20 flex-col items-center">
      <h1 class="font-bold text-4xl text-teal-800">
        Students
      </h1>
      <p class="text-teal-800 text-xl">
        students in the our organization are high level students!
      </p>

      <div class="mt-12 flex flex-col items-center gap-6">
        <div class="w-full">
          <AppInput label="Search for a Student" type="text" placeholder="Search Students" v-model="searchTerm"/>
        </div>
        <AppTable :formatters="{gender: (val) => val === 0 ? 'Male' : 'Female', isNerd: (val) => val === true ? 'High' : 'Normal', subjects: (val) => val.length}" :data="filteredStudents" :headers="headers">

          <template  #actions="{ row }">
            <AppButton icon="hugeicons:delete-02" @click="" icon-only variant="danger" />
            <AppButton icon="hugeicons:view" icon-only variant="info" />
          </template>
        </AppTable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, computed} from "vue";
import {useStudentsStore} from "../stores/students";
import {search} from "../utils";
import AppTable from "../components/AppTable.vue";
import AppInput from "../components/AppInput.vue";
import AppButton from "../components/AppButton.vue";
const searchTerm = ref('')
const filteredStudents = computed(() => search(studentsStore.students, searchTerm.value));
const headers = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
  { key: 'gender', label: 'Gender' },
  { key: 'stage', label: 'Stage' },
  { key: 'absents', label: 'Absents' },
  { key: 'isNerd', label: 'IQ Level' },
  { key: 'subjects', label: 'Subjects' },
]
const studentsStore = useStudentsStore()

const getAllStudents = async () => {
  await studentsStore.getStudents();
}
onMounted(() => {
  getAllStudents();
})
</script>