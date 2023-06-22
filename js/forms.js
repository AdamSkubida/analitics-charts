"use strict";

// INPUTS
const aspectInput = document.querySelector("#aspect-input");
const departmentInput = document.querySelector("#department-input");
// BUTTONS
const aspectBtn = document.querySelector("#aspect-button");
const departmentBtn = document.querySelector("#department-button");
// ARRAYS
const aspectsArr = [];
const departmentsArr = [];

const addAspectsToArr = () => {
  aspectsArr.push(aspectInput.value);
  aspectInput.value = "";
  console.log(aspectsArr);
};

const addDepartmentsToArr = () => {
  departmentsArr.push(departmentInput.value);
  departmentInput.value = "";
  console.log(departmentsArr);
};

aspectBtn.addEventListener("click", addAspectsToArr);
departmentBtn.addEventListener("click", addDepartmentsToArr);
