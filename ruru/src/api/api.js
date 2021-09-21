import axios from "axios";

const URL = `//613cade1270b96001798b215.mockapi.io/api/test-test`;

const REQUEST_TIMEOUT = 5000;

// const HttpCode = {
//   UNAUTHORIZED: 401
// };

export const createApi = () => {
  const api = axios.create({
    baseURL: URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: false,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;
    
    // if (response.status === HttpCode.UNAUTHORIZED) {
    //   onUnauthorized();

    //   throw err;
    // }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);
  return api;
};
