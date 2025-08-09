Using RxJs subjects with angularfire and firwbase

Background
I’m working to understand RxJs a little better, and created a project that is tracking what I’m reading and watching. I’m using Angular and Material with a firebase backend,

Problem statement
I want to pull my data from firebase once and use RxJS subjects to subscribe to the data and present it in a couple different formats, my complete list and the items that I’m actively reading and watching

Step 1

Inject you firebase instance and connect to your firestore

```
//...imports
//...interfaces
@Injectable({
  providedIn: 'root'
})
export class DataService {
    private firestore: Firestore = inject(Firestore);
    private aCollection = collection(this.firestore, 'myMedia');
    private doc$ = collectionData(this.aCollection);

    constructor() {}
}
```
Step 2.

Add a new subject and it's subject subscribers. We use asObservable to make the subject read only
```angular-ts
//...imports
//...interfaces
@Injectable({
  providedIn: 'root'
})
export class DataService {
    private firestore: Firestore = inject(Firestore);
    private aCollection = collection(this.firestore, 'myMedia');
    private doc$ = collectionData(this.aCollection);

    //Add a new subject and set up the Observables that will subscribe to it
    private subject = new Subject<Media[]>();
    private items$ = this.subject.asObservable();
    private activeItems$ = this.subject.asObservable();

    constructor() {}
}
```

Step 3.

I got a little help with ChatGPT with this next step. Set your firestore call as the producer and subscribe to it, next add the observer as the subject. This sends the data to our two subscribers items$ and activeItems$, add this to the constructor so it runs first.
```angular-ts
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private firestore: Firestore = inject(Firestore);
  private aCollection = collection(this.firestore, 'myMedia');
  private doc$ = collectionData(this.aCollection);

  private subject = new Subject<Media[]>();
  private items$ = this.subject.asObservable();
  private activeItems$ = this.subject.asObservable();

    constructor() {
        //Set up your observable here with the subject as the observer
        this.doc$.subscribe((data) => {
            this.subject.next(data as Media[]);
        });
    }
}
```
Finally, this is a service so set up the methods to retrieve the data
```angular-ts
@Injectable({
  providedIn: 'root'
})
export class DataService {
    private firestore: Firestore = inject(Firestore);
    private aCollection = collection(this.firestore, 'myMedia');
    private doc$ = collectionData(this.aCollection);

    private subject = new Subject<Media[]>();
    private items$ = this.subject.asObservable();
    private activeItems$ = this.subject.asObservable();

    constructor() {
        this.doc$.subscribe((data) => {
        this.subject.next(data as Media[]);
        });
    }

    //Method for all items
    public getData() {
        return this.items$;
    }

    Method for active items only
    public getActive() {
        return this.activeItems$.pipe(
            map(data => data.filter((item) => item['status'] === "active")),
        )
    }
}
```
Here is the html and javascript for the  component injected my data service 
```angular-ts
import { Component, inject } from '@angular/core';
import { DataService } from './../data.service';
import { AsyncPipe  } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  private dataService: DataService = inject(DataService);
  items$ = this.dataService.getData();
  activeItems$ = this.dataService.getActive();
}
```
HTML:
```angular-ts
<h2>All items</h2>
<ul>
  @for (item of items$ | async; track $index) {
    <li>{{ item['title'] }}</li>
  }
</ul>

<h2>Active items</h2>
<ul>
  @for (item of activeItems$ | async; track $index) {
    <li>{{ item['title'] }}</li>
  }
</ul>
```
And done!

Reference
https://www.tutorialspoint.com/rxjs/rxjs_working_with_subjects.htm
