---
title: Reactivity? You Don't Need a Base Class for That
permalink: /:title/
description: "A demonstration of using standard HTMLElement APIs for reactivity"
category: projects
fedi-url: https://social.ayco.io/@ayo/111619485280814743
---

If you have ever looked up "how to write web components", you may have seen several approaches suggesting to use a base class.

I agree! To me, this was immediately apparent because I din't want to write a lot of the boilerplate every time I need a custom element.

But I sometimes see "reactivity" getting touted as a major feature of base classes and thought I'd write this quick one to show, well, you don't need a base class for *just that*.

## What is reactivity

The essence of reactivity is this: when a state changed, the view is immediately updated. They are synchronized.

JS frameworks have different approaches for this, with some better than others depending on certain situations. (It's a fun topic to nerd about.)

For components, this is commonly expressed as: if my property changed, the UI should be updated.

Let's not dig into details of implementing a reactivity system, but go straight into some vanilla implementation

## Vanilla Implementation of Reactivity

Here we want to use standard APIs available for custom elements: `HTMLElement.dataset` and the `attributeChangedCallback()` hook.

Let's consider the following code example (also [in CodePen &rarr;](https://codepen.io/ayoayco-the-styleful/pen/abMbvbo?editors=1010)):

```js
class Counter extends HTMLElement {
  static observedAttributes = ["data-count"];
  connectedCallback() {
    this.dataset.count = 0;
    this.onclick = () => ++this.dataset.count;
  }
  attributeChangedCallback(prop, oldValue, newValue) {
    if (prop === "data-count" && oldValue !== newValue) {
      this.textContent = newValue;
    }
  }
}
customElements.define("my-counter", Counter);
```

In this example we use the standard `dataset` that collects all attributes prefixed with `data-`. `HTMLElement.dataset` exposes them for reading and writing and, because they have attribute counterparts, they will trigger the `attributeChangedCallback()` when modified and if they are observed attributes we explicitly indicated via `static observedAttributes`.

Hence, every time the user clicks the element, the program modifies the observed `data-count` attribute and the update to the UI via `textContent` is triggered.

The standard for `data-` prefixed attributes exists to make sure they don't override standard HTML attributes. And collecting all values behind the `dataset` property means no standard HTML properties can also be overriden. 

Nice! But what's the catch?

## The Catch in using HTMLElement.dataset

Every time we modify a property value using `dataset`, the method `toString()` is actually called under the hood for the value assigned. This is because HTML attributes can only hold strings.

Our example works here because JavaScript (being loosely typed) allows arithmetic operations on stringified numbers. :)

You will experience hiccups, for example, when you need a boolean property, because the stringified "false" is also "truthy".

## The Reactivity Problem

This is the problem reactivity systems try to solve: how do you synchronize state & UI and still restore correct types in your properties after the full reactivity loop?

In my minimal base class [WebComponent.io](https://webcomponent.io), my approach is simple... we use the pattern encouraged by `HTMLElement.dataset`, but use a standard [ES6 Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) `props`.

The `props` property of `WebComponent` works like `HTMLElement.dataset`, but a camelCase counterpart using it will give read/write access to any attribute, with or without the data- prefix.

And because it is a Proxy, we are able to intercept this read/write accesses and allow for behavior modification like restoring types.

Therefore, we get some advantage over the standard `HTMLElement.dataset`: that `WebComponent.props` can now hold primitive types 'number', 'boolean', 'object' and 'string'.

## What Now

That's it really. I still use vanilla HTMLElement custom elements, and in fact they are present on my project websites.

But for things that need reactivity with real JS values as properties... I have a tiny, minimalistic base class for that. :)

Check it out on [GitHub](https://ayco.io/gh/web-component-base). ✨