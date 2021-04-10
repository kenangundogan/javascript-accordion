# Javascript Accordion
Javascript accordion - tiny and simple.
Accordions are useful when you want to toggle between hiding and showing large amount of content.

## Status
[![JS gzip size](https://img.badgesize.io/kenangundogan/javascript-accordion/main/dist/script/script.js?compression=gzip&label=JS%20gzip%20size)](https://github.com/kenangundogan/javascript-accordion/blob/main/dist/script/script.js)
[![JS Brotli size](https://img.badgesize.io/kenangundogan/javascript-accordion/main/dist/script/script.js?compression=brotli&label=JS%20Brotli%20size)](https://github.com/kenangundogan/javascript-accordion/blob/main/dist/style/script.js)
[![CSS gzip size](https://img.badgesize.io/kenangundogan/javascript-accordion/main/dist/style/style.css?compression=gzip&label=CSS%20gzip%20size)](https://github.com/kenangundogan/javascript-accordion/blob/main/dist/style/style.css)
[![CSS Brotli size](https://img.badgesize.io/kenangundogan/javascript-accordion/main/dist/script/style.css?compression=brotli&label=CSS%20Brotli%20size)](https://github.com/kenangundogan/javascript-accordion/blob/main/dist/style/style.css)

![Javascript Accordion](https://raw.githubusercontent.com/kenangundogan/javascript-accodion/main/asset/javascript-accordion-cover.png)

## Options
Option | Type | Default | Description | Example
------ | ---- | ------- | ----------- | -----------
element | string or object |  | id or class DOM element | [Example](https://kenangundogan.github.io/javascript-accordion/javascript-accordion)
event | string | click | add event listener | [Example](https://kenangundogan.github.io/javascript-accordion/javascript-accordion)
transition | int | 300ms | opening and closing animation speed | [Example](https://kenangundogan.github.io/javascript-accordion/javascript-accordion)
activeTab | int |  | active item to be open at startup | [Example](https://kenangundogan.github.io/javascript-accordion/javascript-accordion-active-tab)
multipleTab | boolean | false | multiple accordion tab can be open at a time. | [Example](https://kenangundogan.github.io/javascript-accordion/javascript-accordion-multiple-tab)

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
2021 Currently - Code released under the [MIT License](https://github.com/kenangundogan/javascript-accordion/blob/master/LICENSE)
Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/)
