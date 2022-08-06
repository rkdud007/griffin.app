import { API_URLS } from "../constants";
import { axiosInstance } from "./common";

const { GET_EMPLOYEE } = API_URLS;

export const getEmployeeApi = async (employerId) => {
  console.log(employerId);
  return await axiosInstance.get(GET_EMPLOYEE + "?employerId=" + employerId);
};
