// // var memories = document.querySelectorAll(".memory-container"); // All the memories that appear as we scroll down the timeline
// // var circles = document.querySelectorAll(".memory"); // The greater memory element, but visually, simply the circle attached to the timeline.

// // function elementInView(el) {
// //   // The vertical distance between the top of the page and the top of the element.
// //   var elementOffset = $(el).offset().top;
// //   // The height of the element, including padding and borders.
// //   var elementOuterHeight = $(el).outerHeight();
// //   // Height of the window without margins, padding, borders.
// //   var windowHeight = $(window).height();
// //   // The vertical distance between the top of the page and the top of the viewport.
// //   var scrollOffset = $(this).scrollTop();

// //   if (elementOuterHeight < windowHeight) {
// //     // Element is smaller than viewport.
// //     if (scrollOffset > (elementOffset + elementOuterHeight - windowHeight)) {
// //       // Element is completely inside viewport, reveal the element!
// //       return true;
// //     }
// //   } else {
// //     // Element is larger than the viewport, handle visibility differently.
// //     // Consider it visible as soon as it's top half has filled the viewport.
// //     if (scrollOffset > elementOffset) {
// //       // The top of the viewport has touched the top of the element, reveal the element!
// //       return true;
// //     }
// //   }
// //   return false;
// // }

// // function handler() {
// //   for (var i = 0; i < circles.length; i++) {
// //     if (elementInView(circles[i])) {
// //       memories[i].classList.add("in-view");
// //       circles[i].classList.add("in-view");
// //     }
// //   }
// // }

// // $(window).on('DOMContentLoaded load resize scroll', handler);


// var memories = document.querySelectorAll(".memory-container"); // All the memories that appear as we scroll down the timeline
// var circles = document.querySelectorAll(".memory"); // The greater memory element, but visually, simply the circle attached to the timeline.

// function elementInView(el) {
//   // The vertical distance between the top of the page and the top of the element.
//   var elementOffset = el.getBoundingClientRect().top;
//   // The height of the element, including padding and borders.
//   var elementOuterHeight = el.offsetHeight;
//   // Height of the window without margins, padding, borders.
//   var windowHeight = window.innerHeight || document.documentElement.clientHeight;
//   // The vertical distance between the top of the page and the top of the viewport.
//   var scrollOffset = window.pageYOffset || document.documentElement.scrollTop;

//   if (elementOuterHeight < windowHeight) {
//     // Element is smaller than viewport.
//     if (scrollOffset > (elementOffset + elementOuterHeight - windowHeight)) {
//       // Element is completely inside viewport, reveal the element!
//       return true;
//     }
//   } else {
//     // Element is larger than the viewport, handle visibility differently.
//     // Consider it visible as soon as it's top half has filled the viewport.
//     if (scrollOffset > elementOffset) {
//       // The top of the viewport has touched the top of the element, reveal the element!
//       return true;
//     }
//   }
//   return false;
// }

// function handler() {
//   for (var i = 0; i < circles.length; i++) {
//     if (elementInView(circles[i])) {
//       memories[i].classList.add("in-view");
//       circles[i].classList.add("in-view");
//     }
//   }
// }

// // window.addEventListener('DOMContentLoaded', handler);
// // window.addEventListener('load', handler);
// // window.addEventListener('resize', handler);
// window.addEventListener('scroll', handler);


var memories = document.querySelectorAll(".memory-container"); // All the memories that appear as we scroll down the timeline
var circles = document.querySelectorAll(".memory"); // The greater memory element, but visually, simply the circle attached to the timeline.

function elementInView(el) {
  // The vertical distance between the top of the page and the top of the viewport.
  var scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
  // The vertical distance between the top of the element and the top of the viewport.
  var elementOffsetTop = el.getBoundingClientRect().top + scrollOffset;
  // The vertical distance between the bottom of the element and the top of the viewport.
  var elementOffsetBottom = elementOffsetTop + el.offsetHeight;
  // Height of the window without margins, padding, borders.
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;

  // Check if the top of the element is within the viewport.
  if (elementOffsetTop < scrollOffset + windowHeight && elementOffsetBottom > scrollOffset) {
    return true;
  }
  return false;
}

function handler() {
  for (var i = 0; i < circles.length; i++) {
    if (elementInView(memories[i])) {
      memories[i].classList.add("in-view");
      circles[i].classList.add("in-view");
    }
  }
}

window.addEventListener('DOMContentLoaded', handler);
window.addEventListener('load', handler);
window.addEventListener('resize', handler);
window.addEventListener('scroll', handler);
