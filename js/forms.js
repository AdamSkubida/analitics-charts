"use strict";

// INPUTS
const aspectInput = document.querySelector("#aspect-input");
const departmentInput = document.querySelector("#department-input");
const main = document.querySelector("#main");
// BUTTONS
const aspectBtn = document.querySelector("#aspect-button");
const departmentBtn = document.querySelector("#department-button");
const generateBtn = document.querySelector("#generate-button");
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

const generateArraysInHtml = () => {
  main.innerHTML = "";
  const numberOfRows = departmentsArr.length;
  const numberOfColumns = aspectsArr.length;

  const table = document.createElement("table");

  // Tworzenie wiersza nagłówków (th) na podstawie tablicy A
  const headerRow = document.createElement("tr");
  for (let i = 0; i < numberOfColumns; i++) {
    const headerDatacell = document.createElement("th");
    headerDatacell.textContent = aspectsArr[i];
    headerRow.appendChild(headerDatacell);
  }
  table.appendChild(headerRow);

  // Tworzenie kolejnych wierszy na podstawie tablicy B
  for (let j = 0; j < numberOfRows; j++) {
    const row = document.createElement("tr");
    const datacell = document.createElement("td");
    datacell.textContent = departmentsArr[j];
    row.appendChild(datacell);
    table.appendChild(row);
  }

  // Dodawanie tabeli do elementu body
  document.body.appendChild(table);
};

aspectBtn.addEventListener("click", addAspectsToArr);
departmentBtn.addEventListener("click", addDepartmentsToArr);
generateBtn.addEventListener("click", generateArraysInHtml);
