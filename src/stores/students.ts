import {defineStore} from "pinia";
import {ref} from "vue";
import studentsService from "../services/studentsService.ts";
import type {IStudents} from "../types";

export const useStudentsStore = defineStore('students', ()=> {
    const students = ref<IStudents[]>([])

    const getStudents = async () => {
        students.value = await studentsService.getStudents();
    }

    const getStudentById = async (studentid: number) => {
        students.value = await studentsService.getStudentById(studentid);
    }


    return { students, getStudents,getStudentById }
})