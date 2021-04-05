var Accordion = function (options) {
    var element = options.element;
    var event = options.event;
    var transition = options.transition;
    var items = document.querySelectorAll(element + " .accordion-item");

    items.forEach(item => {
        var head, body, wrapper, active;
        head = item.querySelector(".head");
        body = item.querySelector(".body");
        wrapper = item.querySelector(".wrapper");
        head.addEventListener(event, function () {
            item.classList.forEach(show => {
                active = show == "show" ? show : "";
            });

            if (active) {
                body.style.height = "";
                setTimeout(() => {
                    item.classList.remove("show");
                    body.style = "";
                }, transition);
            }
            else {
                itemsFunc(items, transition);
                item.classList.add("show");
                body.style.transition = transition + "ms";
                body.style.height = wrapper.offsetHeight + "px";
            }
        });

        function itemsFunc(items, transition) {
            items.forEach(item => {
                var asd = item.classList;
                asd.forEach(show => {
                    if (show == "show") {
                        item.querySelector(".body").style.height = "";
                        setTimeout(() => {
                            item.classList.remove("show");
                            item.querySelector(".body").style = "";
                        }, transition);
                    }
                });
            });
        }
    });
}