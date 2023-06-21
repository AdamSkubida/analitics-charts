"use strict";

const createObjectBtn = document.querySelector("#create-object-button");
const aspectForm = document.querySelector("#aspect-form");
const departmentForm = document.querySelector("#department-form");

const makeFormsVisible = () => {
  aspectForm.classList.remove("is-hidden");
  departmentForm.classList.remove("is-hidden");
  createObjectBtn.classList.add("is-hidden");
};

createObjectBtn.addEventListener("click", makeFormsVisible);
