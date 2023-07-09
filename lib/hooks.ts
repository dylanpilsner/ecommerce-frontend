import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { fetchApi } from "./api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function useSearchProducts() {
  const router = useRouter();
  const product = router.query.q;
  const limit = router.query.limit ?? 3;
  const offset = router.query.offset ?? 0;

  const { data, mutate, isLoading } = useSWRImmutable(
    `/search?q=${product}&limit=${limit}&offset=${offset}`,
    fetchApi
  );

  useEffect(() => {
    mutate(`/search?q=${product}&limit=${limit}&offset=${offset}`);
  }, [router.query]);

  return { data, isLoading };
}

export function useGetLocalStorageData(key: string) {
  const [data, setData] = useState("");

  useEffect(() => {
    const data = localStorage.getItem(key);
    if (data) {
      setData(JSON.parse(data));
    }
  }, []);

  return data;
}

export function useIsLogged() {
  const userInformation = useGetLocalStorageData("user_information");

  return userInformation;
}

export function useLogOut() {
  const [logOut, setLogOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (logOut) {
      setLogOut(false);
      localStorage.removeItem("user_information");

      if (router.pathname !== "/") {
        router.push("/");
      } else {
        router.reload();
      }
    }
  }, [logOut]);

  return setLogOut;
}

export function useHideSearchBar() {
  const [searchBarStatus, setSearchBarStatus] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    if (pathname !== "/" && pathname !== "/signin" && pathname !== "/profile") {
      setSearchBarStatus(true);
    }
  }, [pathname]);

  function updateSearchBarStatus(newStatus: boolean) {
    if (pathname !== "/" && pathname !== "/signin" && pathname !== "/profile") {
      setSearchBarStatus(newStatus);
    }
  }

  return { searchBarStatus, updateSearchBarStatus };
}

export function useLoader() {
  const [loader, setLoader] = useState(false);

  function showLoader() {
    setLoader(true);
  }

  function hideLoader() {
    setLoader(false);
  }

  return {
    loader,
    showLoader,
    hideLoader,
  };
}

export function useGetProfile() {
  const { data } = useSWRImmutable("/me", fetchApi);
  return data;
}
