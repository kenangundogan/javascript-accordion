## Javascript Accordion
Javascript accordion - tiny and simple.

![Javascript Accordion](https://raw.githubusercontent.com/kenangundogan/javascript-accodion/main/asset/javascript-accordion.png)

## Options
Option | Type | Default | Description
------ | ---- | ------- | -----------
element | string or object | click | id or class DOM element
event | string |  | add event listener
transition | int | 300ms | opening and closing animation speed
activeItem | int |  | active item to be open at startup

## Usage example
```javascript
var accordion = new Accordion({
    element: ".accordion-container",
    event: "click",
    transition: 300,
    activeItem: 2
});
```

## Copyright and license
Designed and built by [Kenan Gündoğan](https://www.linkedin.com/in/kenangundogan/)
<br>
2021 Currently - Code released under the [MIT License](https://github.com/kenangundogan/javascript-accodion/blob/master/LICENSE)
Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/)
