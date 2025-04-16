"use client";
import { student } from "@/types/student";
import getDataFromApi from "./api";

export async function getDataFromLocalStorage() {
  const data = localStorage.getItem("students");
  if (data) {
    return JSON.parse(data);
  } else {
    const res = await getDataFromApi();
    saveDataToLocalStorage(res);
    return res;
  }
}

export async function saveDataToLocalStorage(students: { students: student[] }) {
  localStorage.setItem("students", JSON.stringify(students));
}

export function clearStudentsFromLocalStorage() {
  localStorage.removeItem("students");
}
