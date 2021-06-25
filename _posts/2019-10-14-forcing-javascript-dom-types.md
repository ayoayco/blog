---
title: "How to Force JavaScript Variables to use Specific DOM APIs"
permalink: "/forcing-js-dom-types"
description: "To take advantage of code completion for Javascript, here's a smart way to force JS DOM variables to use a specific DOM API interface"
keywords: ""
category: technology
image: "javascript"
---

To take advantage of JavaScript _intellisense_ and code completion when using a certain _awesome_ text editor \*\*ehem\*_ [VS Code](https://code.visualstudio.com/) _\*ehem\*\*, you need to be able to declare the correct interfaces for variables containing DOM elements.

Yeah, I know this works like magic in TypeScript.

But if you're working with pure JavaScript, how do you do it?<!--more-->

Okay, I'll answer that in this post obviously.

## How to Force JS Variables containing DOM Elements to use a specific HTML interface

Here goes.

For example, if you want to make a variable use a specific DOM interface like `HTMLTableElement` and not the generic `HTMLELement`, just do:

```javascript
var x = document.createElement("table"); // -> returns HTMLTableElement
```

before you assign it...

```javascript
x = document.getElementById("table-id"); // -> always returns HTMLELement
```

If you go straight to doing `var x = document.getElementById('table-id')`, the variable will have the generic type `HTMLElement`... and you don't want that.

Important hint: the string parameter for `document.createElement()` (which is `'table'` in our example above) will determine the type/interface that the variable `x` will use.

The `'table'` parameter is the reason why we get an `HTMLTableElement` from `document.createElement()`.

## Uh, okay. But, uhm, why... woud I want to do that?

Well, this way, the variable `x` will have the type `HTMLTableElement` all the way in your code.

Then, intellisense will work like magic and you will get more helpful code completion like, for our example...

```javascript
x.insertRow(); // -> will be detected if x is HTMLTableElement, NOT if x is HTMLElement
```

`x` will now get code completion for all the methods and other awesomeness that `HTMLTableElement` has and `HTMLElement` doesn't.

You see, `HTMLElement` has a lot of great methods but when working on a specific HTML element, there are more options for you if you use the correct interface (which, most probably, extends `HTMLElement`, meaning they also get its methods and other awesomeness).

## Okay... Uh, I still don't know what you're talking about though...

What are you doing here then? This is for people who know what I'm talking about!

(But if you want something really basic, come back again! I'm writing something up for people with zero experience, but who wants to get into coding.)

Anyway...

Here's the full list of specific HTML Element APIs:

- HTMLAnchorElement
- HTMLAreaElement
- HTMLAudioElement
- HTMLBRElement
- HTMLBaseElement
- HTMLBaseFontElement
- HTMLBodyElement
- HTMLButtonElement
- HTMLCanvasElement
- HTMLContentElement
- HTMLDListElement
- HTMLDataElement
- HTMLDataListElement
- HTMLDialogElement
- HTMLDivElement
- HTMLDocument
- HTMLEmbedElement
- HTMLFieldSetElement
- HTMLFormControlsCollection
- HTMLFormElement
- HTMLFrameSetElement
- HTMLHRElement
- HTMLHeadElement
- HTMLHeadingElement
- HTMLHtmlElement
- HTMLIFrameElement
- HTMLImageElement
- HTMLInputElement
- HTMLIsIndexElement
- HTMLKeygenElement
- HTMLLIElement
- HTMLLabelElement
- HTMLLegendElement
- HTMLLinkElement
- HTMLMapElement
- HTMLMediaElement
- HTMLMetaElement
- HTMLMeterElement
- HTMLModElement
- HTMLOListElement
- HTMLObjectElement
- HTMLOptGroupElement
- HTMLOptionElement
- HTMLOptionsCollection
- HTMLOutputElement
- HTMLParagraphElement
- HTMLParamElement
- HTMLPictureElement
- HTMLPreElement
- HTMLProgressElement
- HTMLQuoteElement
- HTMLScriptElement
- HTMLSelectElement
- HTMLShadowElement
- HTMLSourceElement
- HTMLSpanElement
- HTMLStyleElement
- HTMLTableCaptionElement
- HTMLTableCellElement
- HTMLTableColElement
- HTMLTableDataCellElement
- HTMLTableElement
- HTMLTableHeaderCellElement
- HTMLTableRowElement
- HTMLTableSectionElement
- HTMLTemplateElement
- HTMLTextAreaElement
- HTMLTimeElement
- HTMLTitleElement
- HTMLTrackElement
- HTMLUListElement
- HTMLUnknownElement
- HTMLVideoElement

Whoa, quite a lot, right?

For more info, you start with the `HTMLELement` Documentation [found here](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) then read up on specific APIs from there.
