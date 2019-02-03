'use strict';

var barValue = document.getElementById('volume');
var skills = document.querySelector('.skills');
var junior = skills.querySelector('.junior');
var middle = skills.querySelector('.middle');
var senior = skills.querySelector('.senior');
var grades = [junior, middle, senior];

function removeHiddenClass(value) {
  value = value - 1;
  for (var i = value; i <= grades.length; i++) {
    if (value === 2) {
      grades.forEach(function (grade) {
        grade.classList.add('skills-smaller');
      });
    }
    grades[value].classList.remove('hidden');
  }
}

function addHiddenClass(value) {
  if (value < 3) {
    grades.forEach(function (grade) {
      grade.classList.remove('skills-smaller');
    });
    for (var i = value; i <= grades.length; i++) {
      grades[value].classList.add('hidden');
    }
  }
}

barValue.addEventListener('change', function () {
  removeHiddenClass(barValue.value);
  addHiddenClass(barValue.value);
});
