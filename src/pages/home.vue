<template>
  <div class="flex flex-col items-center justify-center ">
    <div class="mt-20 gap-6 text-2xl flex flex-col items-center w-full justify-center">
      <h1 class="font-bold text-4xl text-teal-800">
        Welcome to School Nest
      </h1>
      <p class="text-teal-800">
        the next generation of school systems
      </p>
      <div class="flex flex-row items-center justify-center gap-6">
        <AppButton @click="$router.push({path: '/', hash: '#learn-more'})" buttonText="Get Started" icon="hugeicons:graduation-scroll"/>
        <AppButton variant="outline" buttonText="Learn More" icon="hugeicons:dashboard-square-02"/>
      </div>
      <div id="learn-more" class="my-20 flex h-auto flex-row w-full rounded-3xl bg-teal-100 py-12 justify-start px-12 gap-4">
        <div class="text-teal-800 text-justify hyphens-auto flex flex-col gap-12">
          <div>
            <h2 class="font-bold  p-2 px-6 bg-teal-50 mb-4 w-fit rounded-3xl text-2xl">
              What is School Nest?
            </h2>
            <p class="text-xl px-12">
              School Nest is a comprehensive platform designed to streamline the management of school resources. From student records to subject planning, it helps administrators, teachers, and students stay organized and efficient.
            </p>
          </div>
          <div>
            <h2 class="font-bold  p-2 px-6 bg-teal-50 mb-4 w-fit rounded-3xl text-2xl">
              Key Features
            </h2>
            <p class="text-xl px-12">
              Manage student profiles, track attendance, assign subjects, and monitor performance, all in one place. School Nest also supports reports, notifications, and seamless communication between teachers, students, and parents.
            </p>
          </div>
          <div>
            <h2 class="font-bold  p-2 px-6 bg-teal-50 mb-4 w-fit rounded-3xl text-2xl">
              Why Choose School Nest?
            </h2>
            <p class="text-xl px-12">
              With a user-friendly interface and robust tools, School Nest reduces administrative overhead, ensures data accuracy, and promotes a collaborative school environment. Everything you need to run your school efficiently is just a few clicks away.
            </p>
          </div>
        </div>
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