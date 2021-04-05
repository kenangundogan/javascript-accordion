## Javascript Accordion
Javascript accordion - tiny and simple.
Accordions are useful when you want to toggle between hiding and showing large amount of content.

![Javascript Accordion](https://raw.githubusercontent.com/kenangundogan/javascript-accodion/main/asset/javascript-accordion-cover.png)

## Options
Option | Type | Default | Description | Example
------ | ---- | ------- | ----------- | -----------
element | string or object |  | id or class DOM element | [Example](https://kenangundogan.github.io/javascript-accodion/javascript-accordion)
event | string | click | add event listener | [Example](https://kenangundogan.github.io/javascript-accodion/javascript-accordion)
transition | int | 300ms | opening and closing animation speed | [Example](https://kenangundogan.github.io/javascript-accodion/javascript-accordion)
activeTab | int |  | active item to be open at startup | [Example](https://kenangundogan.github.io/javascript-accodion/javascript-accordion-active-tab)
multipleTab | boolean | false | multiple accordion tab can be open at a time. | [Example](https://kenangundogan.github.io/javascript-accodion/javascript-multiple-tab)

## Usage example
### Script
```javascript
var accordion = new Accordion({
    element: ".accordion-container",
    event: "click",
    transition: 300,
    activeTab: 2,
    multipleTab: true
});
```

### View
```html
<ul class="accordion-container">
    <li class="accordion-item">
        <div class="head">
            ...
        </div>
        <div class="body">
            <div class="wrapper">
                ...
            </div>
        </div>
    </li>
    ...
</ul>
```

## Copyright and license
Designed and built by [Kenan Gündoğan](https://www.linkedin.com/in/kenangundogan/)
<br>
2021 Currently - Code released under the [MIT License](https://github.com/kenangundogan/javascript-accodion/blob/master/LICENSE)
Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/)
