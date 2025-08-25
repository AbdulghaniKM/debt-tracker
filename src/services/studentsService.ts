import api from "../plugins/axios.ts";
import type { IStudents } from "../types";
import {ref} from "vue";

class StudentsService {
    loading = ref(false);
    error = ref<unknown | null>(null);
    async getStudents(): Promise<IStudents[]> {
        this.loading.value = true;
        this.error.value = null;
        try {
            const response = await api.get('/students');
            return response.data;
        }
        catch (err) {
            this.error.value = err;
            console.log(err);
            return [];
        }
        finally {
            this.loading.value = false;
        }
    }

    async getStudentById(studentid: number): Promise<IStudents> {
        this.loading.value = true;
        this.error.value = null;
        try {
            const response = await api.get('/students/' + studentid);
            return response.data;
        }
        catch (err) {
            this.error.value = err;
            console.log(err);
            throw err;
        }
        finally {
            this.loading.value = false;
        }
    }

    async createStudent(student: IStudents): Promise<IStudents> {
        this.loading.value = true;
        this.error.value = null;
        try {
            await api.post('/students', student);
            return student;
        }
        catch (err) {
            this.error.value = err;
            console.log(err);
            throw err;
        }
        finally {
            this.loading.value = false;
        }
    }
}

export const studentsService = new StudentsService();
export default studentsService;