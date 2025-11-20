document.getElementById("vyvy").style.display = "none";
document.querySelector(".button").onclick = function () {
  document.getElementById("vyvy").style.display = "block";
  alert("Magic Boom!");
};

document.getElementById("vyy").style.display = "none";

function findMax() {
  var max = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    if (arguments[i] > max) max = arguments[i];
  }
  return max;
}

document.querySelector(".button2").onclick = function () {
  document.getElementById("vyy").innerHTML = findMax(
    1000000,
    1000000,
    100000000000000000000n,
    1000000000000000000000000000n,
    1000000000000000000000000000000000n,
    1000000000000000000000000000000n
  );
  document.getElementById("vyy").style.display = "block";
  alert("Magic Boom!");
};
