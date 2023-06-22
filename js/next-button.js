"use strict";

import { aspect } from "./create-object-button.js";

const nextBtn = document.querySelector("#next-button");
const department = document.querySelector("#department");

const makeDepartmentFormVisible = () => {
  aspect.classList.add("is-hidden");
  department.classList.remove("is-hidden");
};

nextBtn.addEventListener("click", makeDepartmentFormVisible);
