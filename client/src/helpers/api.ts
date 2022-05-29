import { Method } from "./../constants/types/index";
import { API_URL, POST, GET, PATCH } from "./../constants/index";
import axios from "axios";

type Request = (url: string, method: Method, data: any) => Promise<unknown>;

const request: Request = (url, method, data) => {
  switch (method) {
    case GET:
      return new Promise((resolve, reject) => {
        axios
          .get(API_URL + url)
          .then((res) => resolve(res.data))
          .catch((err) => reject(err));
      });
    case POST:
      return new Promise((resolve, reject) => {
        axios
          .post(API_URL + url, data)
          .then((res) => resolve(res.data))
          .catch((err) => reject(err));
      });
    case PATCH:
      new Promise((resolve, reject) => {
        axios
          .patch(API_URL + url)
          .then((res) => resolve(res.data))
          .catch((err) => reject(err));
      });
    default:
      return Promise.reject(new Error());
  }
};
export default request;
