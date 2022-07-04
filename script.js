function Submit() {
    var sideA;
    var sideB;
    var sideC;
    sideA = document.getElementById("sideA").value;
    sideB = document.getElementById("sideB").value;
    sideC = Math.pow(sideA, 2) + Math.pow(sideB, 2);
    sideC = Math.sqrt(sideC);
    sideC = parseInt(Math.round(sideC));
    document.getElementById("sideC").innerHTML = sideC;
  }
  