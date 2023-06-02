import { createSlice } from "@reduxjs/toolkit";
import { IExperience } from "../../components/resume/experience/Experience.tsx";
type TypeItem = {
  firstName: string;
  lastName: string;
  patronymic: string;
  number: string;
  email: string;
  post: string;
  desiredSalary: number;
  workSchedule: string;
  busyness: string;
  readiness: string;
  citizenship: string;
  city: string;
  gender: string;
  date: string;
  education: string;
  experience: IExperience[];
};
type TypeSlice = {
  item: TypeItem;
};
const initialState: TypeSlice = {
  item: {
    firstName: "",
    lastName: "",
    patronymic: "",
    number: "",
    email: "",
    post: "",
    desiredSalary: 0,
    workSchedule: "",
    busyness: "",
    readiness: "",
    citizenship: "",
    city: "",
    gender: "",
    date: "",
    education: "",
    experience: [],
  },
};
const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setItemsStepOne: (state, { payload }) => {
      state.item.firstName = payload.firstName;
      state.item.lastName = payload.lastName;
      state.item.patronymic = payload.patronymic;
      state.item.number = payload.number;
      state.item.email = payload.email;
      state.item.post = payload.post;
      state.item.desiredSalary = payload.desiredSalary;
      state.item.workSchedule = payload.workSchedule;
      state.item.busyness = payload.busyness;
      state.item.readiness = payload.readiness;
      state.item.citizenship = payload.citizenship;
      state.item.city = payload.city;
      state.item.gender = payload.gender;
      state.item.date = payload.date;
      state.item.education = payload.education;
    },
    setItemsStepTwo: (state, { payload }) => {
			state.item.experience = payload
		},
  },
});

export const { setItemsStepOne, setItemsStepTwo } = resumeSlice.actions

export default resumeSlice.reducer