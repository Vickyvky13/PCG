document.addEventListener("DOMContentLoaded", () => {
    const accordionItems = document.querySelectorAll(".accordion__item");

    accordionItems.forEach((item) => {
        const accordionHeader = item.querySelector(".accordion__header");

        accordionHeader.addEventListener("click", () => {
            const openItem = document.querySelector(".accordion-open");

            toggleItem(item);

            if (openItem && openItem !== item) {
                toggleItem(openItem);
            }
        });
    });

    function toggleItem(item) {
        const accordionContent = item.querySelector(".accordion__content");

        if (item.classList.contains("accordion-open")) {
            accordionContent.style.height = "0";
            item.classList.remove("accordion-open");
        } else {
            accordionContent.style.height = Math.min(accordionContent.scrollHeight, 300) + "px"; // Limit height to enable scrolling
            item.classList.add("accordion-open");
        }
    }
});