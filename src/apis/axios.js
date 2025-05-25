import axios from "axios";
import { keysToCamelCase } from "neetocist";

const transformResponseKeysToCamelCase = response => {
  if (response.data) response.data = keysToCamelCase(response.data);
};

const responseIntercepters = () => {
  axios.interceptors.response.use(response => {
    transformResponseKeysToCamelCase(response);

    return response.data;
  });
};

const setHttpHeaders = () => {
  axios.defaults.headers = {
    Accept: "application/json",
    "Context-Type": "application/json",
  };
};

export default function initializeAxios() {
  axios.defaults.baseURL =
    "https://smile-cart-backend-staging.neetodeployapp.com/";
  setHttpHeaders();
  responseIntercepters();
}
