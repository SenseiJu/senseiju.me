const sectionListElements = document.getElementById("section-list").getElementsByTagName("li");

window.addEventListener('load', animateSections)
window.addEventListener('scroll', animateSections)

let animating = false
async function animateSections() {
    if (animating) {
        return
    }

    animating = true

    for (let i = 0; i < sectionListElements.length; i++) {
        let element = sectionListElements[i]
        if (element.classList.contains("animate")) {
            continue
        }

        let rect = element.getBoundingClientRect()
        if (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            element.classList.add("animate")
            await sleep(400)
        }
    }

    animating = false
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



function calculateCurrentAge() {
    const born = new Date(2000, 11, 7)
    const now = new Date();
    const diff = Math.abs(now - born);

    const placeholderElement = document.getElementById("age-placeholder")
    placeholderElement.innerText = placeholderElement.innerText
        .replace("{{age}}", Math.floor(diff / (1000 * 60 * 60 * 24 * 365)).toString())
}

calculateCurrentAge()