import { useRouter } from 'vue-router';

export const useRedirect = () => {
  const router = useRouter();

  const redirectTo = (route: string) => {
    router.push(route);
  };

  return { redirectTo };
};


export const getCurrentRoute = () => useRouter().currentRoute.value.path;