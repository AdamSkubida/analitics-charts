"use strict";

import { aspect } from "./create-object-button.js";

const nextBtn = document.querySelector("#next-button");
const goBackBtn = document.querySelector("#goback-button");
const department = document.querySelector("#department");

const goNextToDepartments = () => {
  aspect.classList.add("is-hidden");
  department.classList.remove("is-hidden");
};

const goBackToAspects = () => {
  department.classList.add("is-hidden");
  aspect.classList.remove("is-hidden");
};

nextBtn.addEventListener("click", goNextToDepartments);

goBackBtn.addEventListener("click", goBackToAspects);
