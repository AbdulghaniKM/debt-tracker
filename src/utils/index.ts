import {useRouter} from 'vue-router';


export const useNavigate = () => {
    const router = useRouter();
    const navigator = (route: string) => {
        router.push(route);
    };
    return { navigator };
};


export const getCurrentRoute = () => useRouter().currentRoute.value.path;

export const search = (array: any[], value: string) =>
    array.filter(item => Object.values(item).some(v => v != null && v.toString().toLowerCase().includes(value)))
