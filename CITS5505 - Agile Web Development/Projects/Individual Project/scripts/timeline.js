// Variables to hold the DOM elements for memory containers and circles
var memories = document.querySelectorAll(".memory-container");
var circles = document.querySelectorAll(".memory");

// Function to determine if an element is in view
// This part has been refined with the help of ChatGPT to avoid any errors.
function elementInView(el) {
  // Calculate positions needed to determine if the element is in the viewport
  var scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
  var elementOffsetTop = el.getBoundingClientRect().top + scrollOffset;
  var elementOffsetBottom = elementOffsetTop + el.offsetHeight;
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;

  // Return true if the element is within the viewport
  if (elementOffsetTop < scrollOffset + windowHeight && elementOffsetBottom > scrollOffset) {
    return true;
  }
  return false;
}

// Handler function to add 'in-view' class to elements that are in the viewport
function handler() {
  for (var i = 0; i < circles.length; i++) {
    if (elementInView(memories[i])) {
      memories[i].classList.add("in-view");
      circles[i].classList.add("in-view");
    }
  }
}

// Attach event listeners for document load, resize, and scroll events
window.addEventListener('DOMContentLoaded', handler);
window.addEventListener('load', handler);
window.addEventListener('resize', handler);
window.addEventListener('scroll', handler);
