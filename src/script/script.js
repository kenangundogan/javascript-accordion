window.addEventListener('DOMContentLoaded', (event) => {

    function accordionWrapperFunc(itemWrapper) {
        itemWrapper.querySelectorAll("li").forEach(k => {
            k.style.height = "";
            k.classList.remove("show");
        });
    }

    function accordionItemFunc(itemWrapper, i) {
        var item = i.closest("li");
        var itemHead = item.querySelector(".head");
        var itemBody = item.querySelector(".body");
        var itemHeight = itemBody.offsetHeight + itemHead.offsetHeight + "px";
        var activeItem = item.className == "show";
        item.style.height = "";
        if (!activeItem) {
            accordionWrapperFunc(itemWrapper);
            item.style.height = itemHeight;
            item.classList.add("show");
        } else {
            item.style.height = "";
            item.classList.remove("show");
        }
    }

    function accordionItemHeadFunc(params) {
        let itemHead = document.querySelectorAll(".javascript-accordion li .head");
        if (itemHead) {
            itemHead.forEach(i => {
                let itemWrapper = i.closest("ul");
                let itemWrapperEvent = itemWrapper.getAttribute("data-accordion-event");
                i.addEventListener(itemWrapperEvent, function () {
                    accordionItemFunc(itemWrapper, i);
                })
            });
        }
    }

    accordionItemHeadFunc();
});