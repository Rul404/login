let x = document.getElementById('menuLink')
function menuClick() {
    if (x.style.display === 'none') {
        x.style.display = 'block'
    } else {
        x.style.display = 'none'
    }
}


function clickDetail1() {
    var x = document.getElementById('linkDetail')
    if (x.style.display === 'none') {
        x.style.display = 'block'
    } else {
        x.style.display = 'none'
    }
}

function clickDetail2() {
    var x = document.getElementById('linkDetaill')
    if (x.style.display === 'none') {
        x.style.display = 'block'
    } else {
        x.style.display = 'none'
    }
}

function clickDetail3() {
    var x = document.getElementById('linkDetailll')
    if (x.style.display === 'none') {
        x.style.display = 'block'
    } else {
        x.style.display = 'none'
    }
}

function clickDetail4() {
    var x = document.getElementById('linkDetaillll')
    if (x.style.display === 'none') {
        x.style.display = 'block'
    } else {
        x.style.display = 'none'
    }
}

const linkJadwal = document.getElementById("linkJadwal")
const tombolJadwal = document.getElementById("tombolJadwal")

linkJadwal.style.maxHeight = "0px" 

tombolJadwal.addEventListener("click", () => {
    if (linkJadwal.style.maxHeight === "800px") {
        linkJadwal.style.maxHeight = "0px";
    } else {
        linkJadwal.style.maxHeight = "800px"
    }
})
