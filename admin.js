javascript
function addJingle() {
    const id = document.getElementById("jingleInput").value.trim();
    if (!id) return alert("Внеси видео ID");
    jingleId = id;
    alert("Џинглото е додадено!");
}

function setAdSchedule() {
    const minutes = parseInt(document.getElementById("adTimeInput").value);
    if (!isNaN(minutes)) {
        adId = prompt("Внеси YouTube ID за рекламата:");
        alert(`Рекламите ќе се пуштаат на секои ${minutes} минути`);
    }
}
