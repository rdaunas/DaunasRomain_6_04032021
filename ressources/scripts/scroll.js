const topButton = document.querySelector(".anchor");


window.onscroll = () => {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  }
  
  // scroll to top
  function toTop() {
    document.documentElement.scrollTop = 0; 
  }