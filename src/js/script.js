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
        if (rect.top <= (window.innerHeight || document.documentElement.clientHeight)) {
            element.classList.add("animate")
            await sleep(400)
        }
    }

    animating = false
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}