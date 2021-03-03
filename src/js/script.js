const sectionListElements = document.getElementById("section-list").getElementsByTagName("li");

let i = 0;
function animateNextSection() {
    sectionListElements[i].classList.add("animate")

    if (sectionListElements.length <= ++i) {
        clearInterval(animateInterval)
    }
}

const animateInterval = setInterval(animateNextSection, 500)

animateNextSection()
