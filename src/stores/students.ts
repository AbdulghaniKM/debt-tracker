import {defineStore} from "pinia";
import {ref} from "vue";
import studentsService from "../services/studentsService.ts";
import type {IStudents} from "../types";

export const useStudentsStore = defineStore('students', ()=> {
    const students = ref<IStudents[]>([])
    const student = ref<IStudents | null>(null)
    const getStudents = async () => {
        students.value = await studentsService.getStudents();
    }

    const getStudentById = async (studentid: number) => {
        student.value = await studentsService.getStudentById(studentid);
    }

    const createStudent = async (student: IStudents) => {
        await studentsService.createStudent(student);
    }
    const deleteStudent = async (studentid: number) => {
        await studentsService.deleteStudent(studentid);
    }


    return { students,student, getStudents,getStudentById, createStudent, deleteStudent }
})