// (function () {
//   var elements;
//   var windowHeight;

//   function init() {
//     elements = document.querySelectorAll(".hidden");
//     windowHeight = window.innerHeight;
//     console.log(elements[0].getBoundingClientRect());
//   }

//   function checkPosition() {
//     for (var i = 0; i < elements.length; i++) {
//       var element = elements[i];
//       var positionFromTop = elements[i].getBoundingClientRect().top;

//       if (positionFromTop - windowHeight) {
//         element.classList.add("fade-in-element");
//         element.classList.remove("hidden");
//       }
//     }
//   }

//   window.addEventListener("scroll", checkPosition);
//   window.addEventListener("resize", init);

//   init();
//   checkPosition();
// })();

// slide in navbar
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-300px";
  }
}
