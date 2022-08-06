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

export const postEmployeeApi = async (employerId, postEmployee) => {
  console.log(postEmployee);
  return await axiosInstance.post(
    GET_EMPLOYEE +
      "?employerId=" +
      employerId +
      "&employType=" +
      postEmployee.employType +
      "&id=" +
      postEmployee.id +
      "&name=" +
      postEmployee.name +
      "&email=" +
      postEmployee.email +
      "&position=" +
      postEmployee.position +
      "&account=" +
      postEmployee.account +
      "&curr=" +
      postEmployee.curr +
      "&payroll=" +
      postEmployee.payroll +
      "&date=" +
      postEmployee.date
  );
};
