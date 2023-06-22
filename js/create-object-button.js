"use strict";

const createObjectBtn = document.querySelector("#create-object-button");
export const aspect = document.querySelector("#aspect");

const makeAspectFormVisible = () => {
  aspect.classList.remove("is-hidden");
  createObjectBtn.classList.add("is-hidden");
};

createObjectBtn.addEventListener("click", makeAspectFormVisible);
