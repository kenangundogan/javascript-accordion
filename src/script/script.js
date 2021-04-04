window.addEventListener('DOMContentLoaded', (event) => {

    function accordionWrapperFunc(itemWrapper) {
        itemWrapper.querySelectorAll("li").forEach(i => {
            i.querySelector(".body").style.height = "";
            setTimeout(() => {
                i.classList.remove("show");
            }, 150);
        });
    }

    function accordionItemFunc(itemWrapper, i) {
        var item = i.closest("li");
        var activeItem = item.className == "show";
        var itemBody = item.querySelector(".body");
        var itemBodyWrapper = item.querySelector(".wrapper");
        item.style.height = "";
        if (!activeItem) {
            accordionWrapperFunc(itemWrapper);
            setTimeout(() => {
                item.classList.add("show");
                var itemHeight = itemBodyWrapper.offsetHeight + "px";
                itemBody.style.height = itemHeight;
            }, 150);
        } else {
            itemBody.style.height = "";
            setTimeout(() => {
                item.classList.remove("show");
            }, 150);
        }
    }

    function accordionFunc(params) {
        let itemHead = document.querySelectorAll(".javascript-accordion li .head");
        if (itemHead) {
            itemHead.forEach(i => {
                let itemWrapper = i.closest("ul");
                let itemWrapperEvent = itemWrapper.getAttribute("data-accordion-event");
                console.log(itemWrapperEvent);
                i.addEventListener(itemWrapperEvent == null ? "click" : itemWrapperEvent, function () {
                    accordionItemFunc(itemWrapper, i);
                })
            });
        }
    }

    accordionFunc();
});