document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + window.innerHeight * 0.8;

    sections.forEach(section => {
        if (section.offsetTop < scrollPosition) {
            section.classList.add("visible");
        }
    });
});
