'use strict';

var bodyClassesList = ['blue', 'green', 'red'];
var bodyItems = document
                .querySelector('.change-body');
var faces = document
            .querySelector('.change-face');
var avatarBodyColor = document
                      .querySelector('.avatar-body');
var avatarFace = document
                 .querySelector('.avatar-face');
var faceItems = document
                .querySelector('.change-face')
                .querySelectorAll('img');
var bodiesList = document
                 .querySelector('.change-body')
                 .querySelectorAll('.change-item');
var faceBluePoints = document
                     .querySelector('.change-face')
                     .querySelectorAll('.change-item');

function removeBodyClasses() {
  bodyClassesList.forEach(function (element) {
    document
		.querySelector('.avatar-body')
		.classList
		.remove('avatar-body-' + element);
  });
}

function removeFaceClasses() {
  for (var i = 1; i < 4; i++) {
  avatarFace
  .classList
  .remove('avatar-blue-face-' + i);
  }
}

function setBody(color) {
  avatarBodyColor
  .classList
  .add('avatar-body-' + color);
}

function setFace(evt) {
  removeFaceBluePoint();
  var currentColor = document
                     .getElementById('blue')
                     .getAttribute('color-index');
  var currentIndex = getClickedTag(evt)
                     .getAttribute('id');
  if (currentIndex && currentColor) {
    avatarFace.setAttribute('class', 'avatar-face');
    avatarFace
    .classList
    .add('avatar-' + currentColor + '-' + currentIndex);
  } else {
 avatarFace
 .classList
 .add('avatar-blue-' + currentIndex);
  }
}

function getClickedTag(evt) {
  var target = evt.target;
  var clickedTag = evt.target.tagName;
  if (clickedTag === 'IMG') {
    target = target.parentNode;
  }
  return target;
}

function getClickedBodyColor(evt) {
  var bodyColorId = getClickedTag(evt)
                    .getAttribute('id');
  return bodyColorId;
}

function removeBodyBluePoint() {
  bodiesList.forEach(function (element) {
    element
		.classList
		.remove('blue-point');
  });
}

function removeFaceBluePoint() {
  faceBluePoints.forEach(function (element) {
    element
		.classList
		.remove('blue-point');
  });
}

function addBluePoint(evt) {
  getClickedTag(evt).classList.add('blue-point');
}

function setFacesList(evt) {
  var checkedBodyColor = getClickedBodyColor(evt);
  if (checkedBodyColor) {
    var counter = 1;
    faceItems.forEach(function (item) {
      item.setAttribute('src', 'img/' + checkedBodyColor + '-' + counter + '.svg');
      counter += 1;
    });
  }
}

function setBodyDataIndex(evt) {
  bodiesList.forEach(function (element) {
    element.setAttribute('color-index', getClickedBodyColor(evt));
  });
}

bodyItems.onclick = function (evt) {
  evt.preventDefault();
  var color = getClickedBodyColor(evt);
  if (color) {
    removeBodyClasses();
    setBody(color);
    removeBodyBluePoint();
    addBluePoint(evt);
    setFacesList(evt);
    setBodyDataIndex(evt);
    removeFaceBluePoint();
  }
};

faces.onclick = function (evt) {
  evt.preventDefault();
  removeFaceClasses();
  setFace(evt);
  removeFaceBluePoint();
  addBluePoint(evt);
};
