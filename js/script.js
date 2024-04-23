import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

// Function to add an event listener to multiple elements
/**
 *
 * @param {HTMLElement[]} elements - Array of elements to add the event listener to
 * @param {string} eventType - Type of event to listen for (e.g., "click", "mouseover")
 * @param {Function} listener - Event listener function
 */
function addEventListenerToElements(elements, eventType, listener) {
  for (const element of elements) {
    element.addEventListener(eventType, listener);
  }
}

const navbar = document.querySelector("[data-header-menu]");
const navbarTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

addEventListenerToElements(navbarTogglers, "click", () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
});
