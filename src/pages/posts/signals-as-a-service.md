---
layout: '../../layouts/Layout.astro'
title: 'Signals as a Service'
pubDate: 2024-09-17
description: 'Signals as a service'
author: 'Tobias Wright'
tags: ["angular", "signals"]
---

## Signals as a service

I’m a huge fan of Signals in Angular. I recently rewrote color awareness using signals and it has been an absolute joy. Awarenes color is a simple site that list the various causes and the associated colors identified with that cause. Think Yellow for deployed troops or blue for Autism.

Before I continue stanning for Signals let’s start with a ChatGPT definition:

In Angular, signals optimize state management and rendering updates within an application. A signal acts as a wrapper around a value, notifying interested consumers whenever that value changes. This allows Angular to precisely track where the state is used and its dependencies, ensuring efficient updates. Signals can contain any type of value, from simple primitives to complex data structures, and can be either writable or read-only12. By leveraging signals, developers can create more responsive and performant applications.

In my scenario, I decided to make a data service the single point of truth for the state of the display of the list. Right now there are two events that cause the list of causes to change: a button that will reverse the list and a drop down that will sort the list by color.

<img src="/images/service-diagram.png" />

The two events are pretty dumb. The color dropdown passes the target color and the list order toggle executes a method.

[Here is the code](https://github.com/tobiaswright/awarenesscolorv2/blob/main/src/app/service/data.service.ts):

```angular-ts
import { computed, Injectable, signal } from '@angular/core';

import data from '../assets/data.json';
import colorMap from '../assets/color-map.json';
import { type Data } from '../color-data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
    //...Other variables set for data prep
  private isReversed = signal(false);
  private filterColor = signal<string | null>(null);
  private data = signal<Data[]>([]);

  //Our computed list
  private causeList = computed(() => {
    let data = this.data();
    if (this.filterColor()) {
      data = this.data().filter(
        (item) => item.colorData.htmlcolor[0] === this.filterColor() ||
                  item.colorData.htmlcolor[1] === this.filterColor()
      );
    }

    if (this.isReversed()) {
      return this.sortList(data, this.isReversed());
    }

    return this.sortList(data);
  })

  constructor() {
    this.data.set(this.causeObj);
  }

// Returns a signal
  getCauseData() {
    return this.causeList;
  }

// Returns static data
  getColorMap() {
    return this.map
  }

// Just a method, it's attached to a button in another component
  reverseList() {
    this.isReversed.set(!this.isReversed());
  }

// Set by a form dropdown
  filterByColor( color: string ) {
    this.filterColor.set( color );
  }

// Data prep helpers...
}
```
Here is the dropdown component:

```angular-ts
import { Component, inject } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-color-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './color-dropdown.component.html',
  styleUrl: './color-dropdown.component.css'
})
export class ColorDropdownComponent {
  dataService = inject( DataService );
  colorMap = this.dataService.getColorMap();

  onSelect( color: string ) {
    this.dataService.filterByColor( color )
  }

}
```

And finally, the html file for the dropdown component:

```angular-ts
<label for="color-dropdown">Find a cause by color:</label>

<select #color name="color-dropdown" id="color-dropdown" (change)="onSelect(color.value)">
    <option value="">ALL</option>
    @for (color of colorMap; track color[0]) {
        <option value="{{ color[1].name }}">{{ color[1].displayName }}</option>
    }
</select>
```
On the service side, the cause list is a computed signal that manages the two events. The service only has two exposed APIs, the computed list and a static object for the color dropdown.

In a future state, the sort button will be in another components what will have other list controls, display only cause that start with a particular letter.

Additionally, this service does two things, it prepares the data from a json file, and it manages state. It probable does one thing too many, and the data and the state should be two different services.
