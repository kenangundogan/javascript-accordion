window.addEventListener('DOMContentLoaded', (event) => {

    function accordionWrapperFunc(itemWrapper, itemWrapperTransition) {
        itemWrapper.querySelectorAll("li").forEach(i => {
            if (i.className == "show") {
                i.querySelector(".body").style.height = "";
                setTimeout(() => {
                    i.classList.remove("show");
                    i.querySelector(".body").style = "";
                }, itemWrapperTransition);
            }
        });
    }

    function accordionItemFunc(itemWrapper, itemWrapperTransition, i) {
        var item = i.closest("li");
        var activeItem = item.className == "show";
        var itemBody = item.querySelector(".body");
        var itemBodyWrapper = item.querySelector(".wrapper");
        if (!activeItem) {
            accordionWrapperFunc(itemWrapper, itemWrapperTransition);
            item.classList.add("show");
            itemBody.style.transition = itemWrapperTransition + "ms";
            itemBody.style.height = itemBodyWrapper.offsetHeight + "px";
        } else {
            itemBody.style.height = "";
            setTimeout(() => {
                item.classList.remove("show");
                itemBody.style = "";
            }, itemWrapperTransition);
        }
    }

    function accordionFunc() {
        let itemHead = document.querySelectorAll(".javascript-accordion li .head");
        if (itemHead) {
            itemHead.forEach(i => {
                let itemWrapper = i.closest("ul");
                let itemWrapperEvent = itemWrapper.getAttribute("data-accordion-event");
                console.log(itemWrapper.getAttribute("data-accordion-transition"));
                let itemWrapperTransition = itemWrapper.getAttribute("data-accordion-transition") == null ? "0" : itemWrapper.getAttribute("data-accordion-transition");
                i.addEventListener(itemWrapperEvent == null ? "click" : itemWrapperEvent, function () {
                    accordionItemFunc(itemWrapper, itemWrapperTransition, i);
                })
            });
        }
    }

    accordionFunc();
});