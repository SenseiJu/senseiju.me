const sectionListElements = document.getElementById("section-list").getElementsByTagName("li");

let i = 0;
function animateNextSection() {
    sectionListElements[i].classList.add("animate")

    if (sectionListElements.length <= ++i) {
        clearInterval(animateInterval)
    }
}

const animateInterval = setInterval(animateNextSection, 400)

window.addEventListener('load', function () {
    animateNextSection()
})

function calculateCurrentAge() {
    const born = new Date(2000, 11, 7)
    const now = new Date();
    const diff = Math.abs(now - born);

    const placeholderElement = document.getElementById("age-placeholder")
    placeholderElement.innerText = placeholderElement.innerText
        .replace("{{age}}", Math.floor(diff / (1000 * 60 * 60 * 24 * 365)).toString())
}

calculateCurrentAge()
