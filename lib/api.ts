const BASE_URL = "https://ecommerce-backend-indol.vercel.app/api";

export async function fetchApi(input: RequestInfo, options?: any) {
  const url = BASE_URL + input;

  const newOptions = options || {};

  newOptions.headers ||= {};

  newOptions.headers["content-type"] = "application/json";
  const token = getSavedToken();
  if (token) {
    newOptions.headers.authorization = `Bearer ${token}`;
  }

  if (newOptions.body) {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  const res = await fetch(url, newOptions);
  const data = await res.json();

  if (res.status >= 200 && res.status < 300) {
    return data;
  } else {
    throw {
      ...data,
      status: res.status,
    };
  }
}

export async function sendCode(email: string) {
  const res = await fetchApi("/auth", { method: "post", body: { email } });

  return res;
}

function saveUserInformation(token: string, email: string) {
  localStorage.setItem("user_information", JSON.stringify({ token, email }));
}

export async function getToken(email: string, code: number) {
  try {
    const res = await fetchApi("/auth/token", {
      method: "post",
      body: { email, code },
    });
    saveUserInformation(res.token.token, email);
    return res;
  } catch (err) {
    return err;
  }
}

function getSavedToken() {
  if (typeof window !== "undefined" && window.localStorage) {
    const userInformation: any = localStorage.getItem("user_information");
    if (userInformation) {
      const parsedUserInformation = JSON.parse(userInformation);
      return parsedUserInformation.token;
    }
  } else {
    return null;
  }
}

export async function getThreeProducts() {
  const data = await fetchApi("/search?limit=3&offset=10");

  return data;
}

export async function getProductById(productId: string) {
  const data = await fetchApi(`/products/${productId}`);
  return data;
}

export async function createOrder(productId: string) {
  const data = await fetchApi(`/order?productId=${productId}`, {
    method: "post",
    body: { qty: 1 },
  });

  return data;
}

export async function updateUserProfile(
  name: string,
  address: string,
  phoneNumber: string
) {
  const data = await fetchApi("/me", {
    method: "put",
    body: { name, address, phoneNumber },
  });

  return data;
}
