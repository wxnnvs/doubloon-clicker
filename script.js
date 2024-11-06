let doubloonCount = parseInt(localStorage.getItem("doubloonCount")) || 0;
let doubloonPerSecond =
  parseInt(localStorage.getItem("doubloonPerSecond")) || 0;

setInterval(() => {
  doubloonCount += doubloonPerSecond;
  document.getElementById("doubloon").innerText = doubloonCount;
}, 1000);

document.getElementById("doubloon").innerText = doubloonCount;

function addDoubloon() {
  doubloonCount++;
  document.getElementById("doubloon").innerText = doubloonCount;
  save();
}

function upgrade(level) {
  if (level == 1) {
    if (doubloonCount >= 200) {
      doubloonCount -= 200;
      doubloonPerSecond += 1;
      document.getElementById("doubloon").innerText = doubloonCount;
      save();

      // remove all intervals
      for (let i = 1; i < 99999; i++) {
        clearInterval(i);
      }
      setInterval(() => {
        doubloonCount += doubloonPerSecond;
        document.getElementById("doubloon").innerText = doubloonCount;
      }, 1000);
    } else {
      alert("Not enough doubloons!");
    }
  } else if (level == 2) {
    if (doubloonCount >= 450) {
      doubloonCount -= 450;
      doubloonPerSecond += 5;
      document.getElementById("doubloon").innerText = doubloonCount;
      save();

      // remove all intervals
      for (let i = 1; i < 99999; i++) {
        clearInterval(i);
      }
      setInterval(() => {
        doubloonCount += doubloonPerSecond;
        document.getElementById("doubloon").innerText = doubloonCount;
      }, 1000);
    } else {
      alert("Not enough doubloons!");
    }
  } else if (level == 3) {
    if (doubloonCount >= 800) {
      doubloonCount -= 800;
      doubloonPerSecond += 10;
      document.getElementById("doubloon").innerText = doubloonCount;
      save();

      // remove all intervals
      for (let i = 1; i < 99999; i++) {
        clearInterval(i);
      }
      setInterval(() => {
        doubloonCount += doubloonPerSecond;
        document.getElementById("doubloon").innerText = doubloonCount;
      }, 1000);
    } else {
      alert("Not enough doubloons!");
    }
  }
}

function save() {
  localStorage.setItem("doubloonCount", doubloonCount);
  localStorage.setItem("doubloonPerSecond", doubloonPerSecond);
}

document.getElementById("upgradeButton1").addEventListener("click", () => upgrade(1));
document.getElementById("upgradeButton2").addEventListener("click", () => upgrade(2));
document.getElementById("upgradeButton3").addEventListener("click", () => upgrade(3));

document
  .getElementById("doubloonButton")
  .addEventListener("click", addDoubloon);
