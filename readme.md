## Javascript Accordion
Javascript accordion - tiny and simple.
Accordions are useful when you want to toggle between hiding and showing large amount of content.

![Javascript Accordion](https://raw.githubusercontent.com/kenangundogan/javascript-accodion/main/asset/javascript-accordion-cover.png)

## Options
Option | Type | Default | Description
------ | ---- | ------- | -----------
element | string or object |  | id or class DOM element
event | string | click | add event listener
transition | int | 300ms | opening and closing animation speed
activeTab | int |  | active item to be open at startup
multipleTab | boolean | false | Multiple accordion tab can be open at a time.

## Usage example
```javascript
var accordion = new Accordion({
    element: ".accordion-container",
    event: "click",
    transition: 300,
    activeItem: 2,
    multipleTab: true
});
```

## Copyright and license
Designed and built by [Kenan Gündoğan](https://www.linkedin.com/in/kenangundogan/)
<br>
2021 Currently - Code released under the [MIT License](https://github.com/kenangundogan/javascript-accodion/blob/master/LICENSE)
Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/)
