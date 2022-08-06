import { API_URLS } from "../constants";
import { axiosInstance } from "./common";

const { GET_EMPLOYEE, GET_EMPLOYER } = API_URLS;


export const getEmployeeApi = async (employerId) => {
  console.log(employerId);
  return await axiosInstance.get(GET_EMPLOYEE + "?employerId=" + employerId);
};

export const loginApi = async (id, password) => {
  return await axiosInstance.get(
    GET_EMPLOYER + "?id=" + id + "&password=" + password
  );
};
