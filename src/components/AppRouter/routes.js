import Admin from "../Admin/Admin";
import Student from "../Student/Student";

export const screenNames = {
  student: "/",
  admin: "/admin",
};

export const routes = {
  [screenNames.student]: {
    component: Student,
    displayname: "STUDENT",
  },
  [screenNames.admin]: {
    component: Admin,
    displayname: "ADMIN",
  },
};
