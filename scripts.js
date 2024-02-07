function dateFormat() {
  document.getElementById("barchart-request-date").value = new Date()
    .toISOString()
    .substring(0, 10);
  document.getElementById("debt-request-date").value = new Date()
    .toISOString()
    .substring(0, 10);
    document.getElementById("prod-messages-request-date").value = new Date()
    .toISOString()
    .substring(0, 10);
}

function scrollBarsConfigure() {
  var elems = document.getElementsByClassName("section__height");
  if (
    document.documentElement.clientHeight > document.documentElement.clientWidth
  ) {
    document.documentElement.style.overflow = "hidden";
    for (var i = 0; i < elems.length; i++) {
      elems[i].style["height"] = "100vh";
    }
  } else {
    document.documentElement.style.overflow = "scroll";
    for (var i = 0; i < elems.length; i++) {
      elems[i].style["height"] = "";
    }
  }
  document.getElementById("barchart-nav-link").click();
}
