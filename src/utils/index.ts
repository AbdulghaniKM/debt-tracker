import { useRouter } from 'vue-router';

export const useRedirect = () => {
  const router = useRouter();

  const redirectTo = (route: string) => {
    router.push(route);
  };

  return { redirectTo };
};


export const getCurrentRoute = () => useRouter().currentRoute.value.path;

export const search = (array: any[], value: string) =>
    array.filter(item => Object.values(item).some(v => v != null && v.toString().toLowerCase().includes(value)))
