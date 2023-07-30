window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector(".navbar").style.padding = "0px";
  } else {
    document.querySelector(".navbar").style.paddingTop = "8px";
    document.querySelector(".navbar").style.paddingBottom = "8px";
  }
};
