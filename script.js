let doubloonCount = parseInt(localStorage.getItem('doubloonCount')) || 0;
let doubloonPerSecond = parseInt(localStorage.getItem('doubloonPerSecond')) || 0;

setInterval(() => {
    doubloonCount += doubloonPerSecond;
    document.getElementById('doubloon').innerText = doubloonCount;
}, 1000);

document.getElementById('doubloon').innerText = doubloonCount;

function addDoubloon() {
    doubloonCount++;
    document.getElementById('doubloon').innerText = doubloonCount;
    save();
}

function upgrade() {
    if (doubloonCount >= 200) {
        doubloonCount -= 200;
        doubloonPerSecond += 1;
        document.getElementById('doubloon').innerText = doubloonCount;
        save();

        // remove all intervals
        for (let i = 1; i < 99999; i++) {
            clearInterval(i);
        }
        setInterval(() => {
            doubloonCount += doubloonPerSecond;
            document.getElementById('doubloon').innerText = doubloonCount;
        }, 1000);

    } else {
        alert('Not enough doubloons!');
    }
}

function save() {
    localStorage.setItem('doubloonCount', doubloonCount);
    localStorage.setItem('doubloonPerSecond', doubloonPerSecond);
}

document.getElementById('upgradeButton').addEventListener('click', upgrade);

document.getElementById('doubloonButton').addEventListener('click', addDoubloon);