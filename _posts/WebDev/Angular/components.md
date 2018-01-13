# Angular Components

Angular Components are sort of the puzzle pieces that will make the whole. As you design your angular app, you will find the different parts that you will need to work on, and these parts will directly translate into Angular Components.

Here's a template for an empty component called SideBarComponent:

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateURL: './app.sidebar.component.html',
    styleURLs: ['./app.sidebar.component.css']
})

export class AppSidebarComponent {

    constructor(){}

}
```

Let's break this code down and discuss it line-by-line.

```typescript
import { Component } from '@angular/core';
```
The first line imports other "parts" from other libraries/module. This "part" is technically a JavaScript class which could be component, service, or pipe, or maybe another JavaScript module from an external Node app. This makes it easy to reuse code by other developers or something you did for a previous project.

*to be continued* 

