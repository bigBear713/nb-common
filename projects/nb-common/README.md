<div align="center">

# @bigbear713/nb-common

Angular common lib by bigBear713, include some common `component`, `directive`, `pipe`, `service`.

[OnlineDemo](https://bigBear713.github.io/nb-common/)

[Bug Report](https://github.com/bigBear713/nb-common/issues)

[Feature Request](https://github.com/bigBear713/nb-common/issues)

</div>

---

## Document
- [中文](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.CN.md "文档 - 中文")
- [English](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md "Document - English")

<br>

---

## Changelog
- [中文](https://github.com/bigBear713/nb-common/blob/master/CHANGELOG.CN.md "更新日志 - 中文")
- [English](https://github.com/bigBear713/nb-common/blob/master/CHANGELOG.md "Changelog - English")

<br>

---

## Feature
- Support the changeDetection of components as `ChangeDetectionStrategy.OnPush`;
- Support to be used in `standalone component`;
- Support to be imported as a `standalone component`;

<br>

---

## Version
###### The nb-common's main version will keep up with the Angular's main version
| @bigbear713/nb-common | @angular/core |
| ---                   | ---           |
| ^12.0.0               | ^12.0.0       |
| ^13.0.0               | ^13.0.0       |
| ^14.0.0               | ^14.0.0       |
| ^15.0.0               | ^15.0.0       |
| ^16.0.0               | ^16.0.0       |

<br>

---

## Installation
```bash
$ npm i @bigbear713/nb-common
// or
$ yarn add @bigbear713/nb-common
```

<br>

---

## API
### Module

#### NbCommonModule
###### Common module. After importing the module, you can use `component`, `directive` and `pipe`. `service` can be used if you do not import the module, because they are provided in root

#### NbCommonTestingModule
###### Common testing module, used for Unit Test.

#### function getTplRefInstance(TestBed: TestBedStatic) {fixture:ComponentFixture<TemplateRefTestingComponent>;component: TemplateRefTestingComponent;tplRef: TemplateRef<any>}
###### Get templateRef's fixture, component, tplRef. You can get the instance of TemplateRef type directly, so it is more convenience for unit test. You should import the NbCommonTestingModule firstly.

<br>

---

### Services

#### NbValueTypeService
##### `v12.0.0`
###### The `service` can provide the function to get the type of value

##### Methods
| Name  | Return  | Description  | Scenes  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| isBoolean(value: any)  | `value is boolean`  | Is the value `boolean` type. Attention: it is ture when the value is `boolean` or `Boolean` type | Want to ensure the value is `boolean` type | `v12.1.0` |
| isNumber(value: any)  | `value is number`  | Is the value `number` type. Attention: it is ture when the value is `number` or `Number` type | Want to ensure the value is `number` type | `v12.1.0` |
| isObservable(value: any)  | `value is Observable<any>`  | Is the value params `Observable` type. Attention: `Subject` and so on also are one of `Observable` | Want to ensure the value is `Observable` type | `v12.0.0` |
| isPromise(value: any)  | `value is Promise<any>`  | Is the value params `Promise` type. | Want to ensure the value is `Promise` type | `v12.0.0` |
| isString(value: any)  | `value is string`  | Is the value `string` type. Attention: it is ture when the value is `string` or `String` type | Want to ensure the value is `string` type | `v12.0.0` |
| isTemplateRef(value: any)  | `value is TemplateRef<any>`  | Is the value `TemplateRef` type | Want to ensure the value is `TemplateRef` type | `v12.0.0` |

##### Usage
```ts
constructor(private valueType: NbValueTypeService) {}

this.valueType.isObservable(new Subject()); // true
this.valueType.isObservable({}); // false

this.valueType.isPromise(Promise.resolve()); // true
this.valueType.isPromise({}); // false

this.valueType.isString(new String('')); // true
this.valueType.isString('')); // true
this.valueType.isString({}); // false

@ViewChild('tplRef') tplRef!: TemplateRef<any>;
this.valueType.isTemplateRef(tplRef); // true
this.valueType.isTemplateRef({}); // false
```

<br>

#### NbUnsubscribeService
##### `v16.0.0`
###### The `service` can provide the functions to unsubscribe rxjs
- <font color="red">Please used in component/directive's providers; or when the instance is going to be destroyed, call the service instance's ngOnDestroy function </font>
- Would always not import dependencies via constructor

##### Methods
| Name  | Return  | Description  | Scenes  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| addUnsubscribeOperator<T>(observable: Observable<T>) | `Observable<T>` | Add `takeUntil` operator to the observable, so can auto unsubscribe the observable when calling `ngOnDestroy` | Auto unsubscribe when the service instance is going to be destroyed | `v16.0.0` |
| getDestructionSignal() | `Observable<void>` | Get a signal about destruction, it is an observable. When the service instance is going to be destroyed, you can get the notification via it. Don't need to care about the subscriptions, because it will be handled in service instance | When you want to do something when the service instance is going to be destroyed | `v16.0.0` |
| collectASubscription(subscription: Subscription) | `void` | Collect a `Subscription`, so can auto unsubscribe it when necessary or the instance is going to be destroyed | When want to auto unsubscribe in some scenes | `v16.0.0` |
| clearAllSubscriptions() | `void` | Unsubscribe and clear all `Subscription` which were collected so far. Excluding the record which added by key | When you want to ubsubscribe and clear all subscriptions which were collected so far. | `v16.0.0` |
| collectASubscriptionByKey(key: string, subscription: Subscription, unsubscribeIfExist: boolean = true)  | `Subscription｜undefined` | Collect a `Subscription` by key, so can auto unsubscribe it when necessary or the instance is going to be destroyed. If there is a data before you save a new one by key, the existing one will auto be unsubscribed before saving new one when set `unsubscribeIfExist=true`. <font color="red">If you set `unsubscribeIfExist=false`, the existing one  will not be unsubscribed, and the data will only be overwrited.</font> The `unsubscribeIfExist` is `true` by default. If there is a data before you save a new one by key, the existing `Subscription` will be returned(`v16.1.0`) | Can unsubscribe a `Subscription` when necessary | `v16.0.0` |
| unsubscribeASubscriptionByKey(key: string) | `boolean` | Unsubscribe a subscription accroding to a key. The subscription data will be removed from records after unsubscribing. If can't get the data by the key, the functiton will return false | When you want to unsubscribe the subscription which is saved before | `v16.0.0` |
| clearAllSubscriptionsFromKeyRecord() | `void` | Unsubscribe all subscriptions and clear them from the record which save data by key. Only for the record which added via key | When you want to clear the previous subscriptions which are saved by key | `v16.0.0` |
| ngOnDestroy() | `void` | Clear all subscribing records of current service instance. The function will auto to be called when the service instance is going to be destroyed via DI. **Don't** call it before destroying the service instance. | When you want to clear all records manually, like used in pipe, you should call the function when going to destroy the pipe instance | `v16.0.0` |

##### Usage
```ts
// Creation and destruction of the service instance
// Set as component/directive level service, so when component/directive is going to be destroyed, 
// the service instance will auto be destroyed and auto call ngOnDestroy function, then unsubscribe all subscriptions
@Component({template:'',providers:[NbUnsubscribeService]}) export class XXXComponent{}
@Directive({providers:[NbUnsubscribeService]}) export class XXXDirective{}

// If can't set as component/directive level service, create it manually, 
// and call ngOnDestroy function when is going to be destroyed, such as in pipe instance.
// would always not import dependencies via constructor
@Pipe() export class XXXPipe(){
  private unsubscribeService:NbUnsubscribeService;
  constructor(){
    this.unsubscribeService = new NbUnsubscribeService();
  }

  ngOnDestroy(){
    this.unsubscribeService.ngOnDestroy();
  }
}

// used
constructor(private unsubscribeService: NbUnsubscribeService) {}

const interval$ = this.unsubscribeService.addUnsubscribeOperator(interval(1000));

const interval$ = interval(1000).pipe(takeUntil(this.unsubscribeService.getDestructionSignal()));
this.unsubscribeService.getDestructionSignal().subscribe(()=>{
  // ...
});

const subscription = interval(1000).subscribe();
this.unsubscribeService.collectASubscription(subscription);

this.unsubscribeService.clearAllSubscriptions();

const subscription = interval(1000).subscribe();
const subKey = 'interval subscription';
// When the data corresponding to the key exists, will auto unsubscribe the existing one firstly by default
this.unsubscribeService.collectASubscriptionByKey(subKey,subscription);
// equals to 
this.unsubscribeService.collectASubscriptionByKey(subKey,subscription,true);
// If you set the params unsubscribeIfExist = false, it will be overwrited when the data corresponding to the key exists,
// and will not unsubscribe the existing one, so you should take care to unsubscribe the one by yourself
this.unsubscribeService.collectASubscriptionByKey(subKey,subscription,false);

this.unsubscribeService.unsubscribeASubscriptionByKey(subKey);

this.unsubscribeService.clearAllSubscriptionsFromKeyRecord();

// when necessary, call the function to unsubscribe all subscriptions
this.unsubscribeService.ngOnDestroy();
```

<br>

---

### Components

#### `[nb-r-str]`
##### `v12.0.0`
##### Be a `standalone component` from `v15.1.0`
###### Render the string content, support the type of content is string or anync object. 
##### Input
| Name  | Type  | Default  | Description  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| nb-r-str  | `string ｜ Observable<string> ｜ Promise<string>`  | `''`  | The content want to render. It will auto be rendered via right method according to the type of content | `v12.0.0` |

##### Usage
```html
<span nb-r-str="string content"></span>

<!-- observableDemo$ = new BehaviorSubject<string>('1'); -->
<span [nb-r-str]="observableDemo$"></span>

<!-- promiseDemo = Promise.resolve('1'); -->
<span [nb-r-str]="promiseDemo"></span>
```
```ts
// New in the v15.1.0
// imported in NgModule
@NgModule({
  imports:[NbRStrComponent],
  // ...
})
export class XXXModule{}

// imported in standalone component
@Component({
  standalone:true,
  imports:[NbRStrComponent],
  // ...
})
export class XXXComponent{}
```

<br>

---

### Directives
#### `img[nbImg]`
##### `v12.2.0`
##### Be a `standalone component` from `v15.1.0`
###### Add loading effect when loading image. When failure to load image, it will display the picture which is preset. It can be used when the image you want to load is so large or you don't want to display broken image when failure to load the image
##### Input
| Name  | Type  | Default  | Description  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| nbImg  | `string` | `''` | The src of image you want to load. When you use the directive and not set the `nbImg` value, will diplay the content from `src` property (no loading effect). At this time, if failure the image from the `src` value, it will display the `errImg` content. | `v12.2.0` |
| loadingImg  | `string ｜ SafeResourceUrl` | `'./assets/nb-common/loading.svg'` | The loading picture when loading the image. Support the url path and safe resource url(like base64 svg file). The default is `'./assets/nb-common/loading.svg'`, so when you use the default value, you should set the config which is in `assets` of `angular.json` file, you can see the demo below. You can use the `NB_DEFAULT_LOADING_IMG` token via DI to set the project or a module's loading picture, so that does not need to set the picture everywhere. You can see the [Tokens](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nb_default_loading_img) defined below | `v12.2.0` |
| errImg  | `string ｜ SafeResourceUrl` | `'./assets/nb-common/loading.svg'` | The picture which is displayed when failure to load the image. Support the url path and safe resource url(like base64 svg file). The default is `'./assets/nb-common/picture.svg'`, so when you use the default value, you should set the config which is in `assets` of `angular.json` file, you can see the demo below. You can use the `NB_DEFAULT_ERR_IMG` token via DI to set the project or a module's errImg picture, so that does not need to set the picture everywhere. You can see the [Tokens](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nb_default_err_img) defined below | `v12.2.0` |

##### angular.json
```json
 "projects": {
    "xxx": {
      // ...
      "architect": {
        // ...
        "build": {
          // ...
          "options": {
            // ...
            "assets": [
              // ...
              {
                "glob": "**/*",
                "input": "./node_modules/@bigbear713/nb-common/assets/",
                "output": "/assets/"
              }
            ]
          }
        }
      }
    }
  },
```

##### Usage
```html
<!-- only set "nbImg", will display default picture when failure to load the image -->
<img [nbImg]="bigImg">

<!-- custom loading image -->
<img [nbImg]="bigImg" [loadingImg]="loadingImg">

<!-- custom the picture which is diplayed when failure to load the image -->
<img nbImg="invalidImg" [errImg]="errImg">

<!-- Only display the picture when failure to load the image(you can use errImg to custom other picture), no loading effect -->
<img src="invalidImg" nbImg [errImg]="errImg">
```
```ts
// New in the v15.1.0
// imported in NgModule
@NgModule({
  imports:[NbImgDirective],
  // ...
})
export class XXXModule{}

// imported in standalone component
@Component({
  standalone:true,
  imports:[NbImgDirective],
  // ...
})
export class XXXComponent{}
```

<br>

#### `[nbPlaceholder]`
##### `v12.0.0`
##### Be a `standalone component` from `v15.1.0`
###### Set the value of placeholder attribute. Support `string` type and `Observable<string>` type
##### Input
| Name  | Type  | Default  | Description  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| nbPlaceholder  | `string ｜ Observable<string>`  | `''` | The content want to be rendered. If the type is `string`, it will auto be set as the placeholder attribute. If the content is `Observable<string>`, will auto subscribe the value and auto update the value of placeholder attribute when the value has been changed | `v12.0.0` |

##### Usage
```html
<input nbPlaceholder="This is placeholder">

<!-- placeholder$ = new BehaviorSubject('This is placeholder'); -->
<input [nbPlaceholder]="placeholder$">
```
```ts
// New in the v15.1.0
// imported in NgModule
@NgModule({
  imports:[NbPlaceholderDirective],
  // ...
})
export class XXXModule{}

// imported in standalone component
@Component({
  standalone:true,
  imports:[NbPlaceholderDirective],
  // ...
})
export class XXXComponent{}
```

<br>

---

### Pipes

#### nbIsAsync: `transform(value: any): value is Observable<any> | Promise<any>`
##### `v12.0.0`
##### Be a `standalone component` from `v15.1.0`
###### Check the value is async type
##### Params
| Name  | Type  | Mandatory  | Description  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| value  | `any`  | true  | The value will be checked  | `v12.0.0` |

##### Return
| Type  | Description  |
| ------------ | ------------ |
| `value is Observable<any> ｜ Promise<any>`  | Is the value `Observable<any>` or `Promise<any>` |

##### Usage
```html
<ng-container [ngSwitch]="content | nbIsAsync">
    <ng-container *ngSwitchCase="true">{{content | async}}</ng-container>
    <ng-container *ngSwitchDefault>{{content}}</ng-container>
</ng-container>
```
```ts
// New in the v15.1.0
// imported in NgModule
@NgModule({
  imports:[NbIsAsyncPipe],
  // ...
})
export class XXXModule{}

// imported in standalone component
@Component({
  standalone:true,
  imports:[NbIsAsyncPipe],
  // ...
})
export class XXXComponent{}
```

<br>

#### nbIsBoolean: `transform(value: any): value is boolean`
##### `v12.1.0`
##### Be a `standalone component` from `v15.1.0`
###### Check the value is boolean type
##### Params
| Name  | Type  | Mandatory  | Description  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| value  | `any`  | true  | The value will be checked  | `v12.1.0` |

##### Return
| Type  | Description  |
| ------------ | ------------ |
| `value is boolean`  | Is the value `boolean` or `Boolean`  |

##### Usage
```html
<ng-container [ngSwitch]="content | nbIsBoolean">
    <ng-container *ngSwitchCase="true">{{!!content}}</ng-container>
    <ng-container *ngSwitchDefault>{{content}}</ng-container>
</ng-container>
```
```ts
// New in the v15.1.0
// imported in NgModule
@NgModule({
  imports:[NbIsBooleanPipe],
  // ...
})
export class XXXModule{}

// imported in standalone component
@Component({
  standalone:true,
  imports:[NbIsBooleanPipe],
  // ...
})
export class XXXComponent{}
```

<br>

#### nbIsNumber: `transform(value: any): value is number`
##### `v12.1.0`
##### Be a `standalone component` from `v15.1.0`
###### Check the value is number type
##### Params
| Name  | Type  | Mandatory  | Description  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| value  | `any`  | true  | The value will be checked  | `v12.1.0` |

##### Return
| Type  | Description  |
| ------------ | ------------ |
| `value is number`  | Is the value `number` or `Number` |

##### Usage
```html
<ng-container [ngSwitch]="content | nbIsNumber">
    <ng-container *ngSwitchCase="true">{{content+1}}</ng-container>
    <ng-container *ngSwitchDefault>{{+content+1}}</ng-container>
</ng-container>
```
```ts
// New in the v15.1.0
// imported in NgModule
@NgModule({
  imports:[NbIsNumberPipe],
  // ...
})
export class XXXModule{}

// imported in standalone component
@Component({
  standalone:true,
  imports:[NbIsNumberPipe],
  // ...
})
export class XXXComponent{}
```

<br>

#### nbIsObservable: `transform(value: any): value is Observable<any>`
##### `v12.0.0`
##### Be a `standalone component` from `v15.1.0`
###### Check the value is Observable
##### Params
| Name  | Type  | Mandatory  | Description  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| value  | `any`  | true  | The value will be checked | `v12.0.0` |

##### Return
| Type  | Description  |
| ------------ | ------------ |
| `value is Observable<any> ｜ Promise<any>`  | Is the value `Observable<any>` |

##### Usage
```html
<ng-container [ngSwitch]="content | nbIsObservable">
    <ng-container *ngSwitchCase="true">{{content | async}}</ng-container>
    <ng-container *ngSwitchDefault>{{content}}</ng-container>
</ng-container>
```
```ts
// New in the v15.1.0
// imported in NgModule
@NgModule({
  imports:[NbIsObservablePipe],
  // ...
})
export class XXXModule{}

// imported in standalone component
@Component({
  standalone:true,
  imports:[NbIsObservablePipe],
  // ...
})
export class XXXComponent{}
```

<br>

#### nbIsString: `transform(value: any): value is string`
##### `v12.1.0`
##### Be a `standalone component` from `v15.1.0`
###### Check the value is string type
##### Params
| Name  | Type  | Mandatory  | Description  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| value  | `any`  | true  | The value will be checked  | `v12.1.0` |

##### Return
| Type  | Description  |
| ------------ | ------------ |
| `value is string`  | Is the value `string` or `String`  |

##### Usage
```html
<ng-container [ngSwitch]="content | string">
    <ng-container *ngSwitchCase="false">{{content | async}}</ng-container>
    <ng-container *ngSwitchDefault>{{content}}</ng-container>
</ng-container>
```
```ts
// New in the v15.1.0
// imported in NgModule
@NgModule({
  imports:[NbIsStringPipe],
  // ...
})
export class XXXModule{}

// imported in standalone component
@Component({
  standalone:true,
  imports:[NbIsStringPipe],
  // ...
})
export class XXXComponent{}
```

<br>

#### nbTplContent: `transform(value: any): TemplateRef<any> | null`
##### `v12.0.0`
##### Be a `standalone component` from `v15.1.0`
###### Get the TemplateRef content 
##### Params
| Name  | Type  | Mandatory  | Description  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| value  | `any`  | true  | The value will be checked  | `v12.0.0` |

##### Return
| Type  | Description  |
| ------------ | ------------ |
| `TemplateRef<any> ｜ null`  | If the value is `TemplateRef` type, it will return the value, otherwise it will return null  |

##### Usage
```html
<ng-container [ngTemplateOutlet]="content | nbTplContent"></ng-container>
```
```ts
// New in the v15.1.0
// imported in NgModule
@NgModule({
  imports:[NbTplContentPipe],
  // ...
})
export class XXXModule{}

// imported in standalone component
@Component({
  standalone:true,
  imports:[NbTplContentPipe],
  // ...
})
export class XXXComponent{}
```

<br>

---

### Tokens

#### NB_DEFAULT_LOADING_IMG
##### string | SafeResourceUrl
##### `v12.2.0`
###### Used to set the "default" loading picture which is displayed when loading the image, used with the `img[nbImg]` directive. Use it via DI, you don't need to set the `img[nbImg]`'s `loadingImg` everywhere.

##### Usage
```ts
  providers: [
    // ...
    {
      provide: NB_DEFAULT_LOADING_IMG,
      useValue: '/assets/loading.svg'
    }
    // OR
    {
      provide: NB_DEFAULT_LOADING_IMG,
      useFactory: (domSanitizer: DomSanitizer) => {
        return domSanitizer.bypassSecurityTrustResourceUrl('data:image/svg+xml;base64,PHN2ZyB4b...')
      },
      deps: [DomSanitizer]
    }
    // ...
  ]
```

<br>

#### NB_DEFAULT_ERR_IMG
##### string | SafeResourceUrl
##### `v12.2.0`
###### Used to set the "default" picture which is displayed when failure to load the image, used with the `img[nbImg]` directive. Use it via DI, you don't need to set the `img[nbImg]`'s `errImg` everywhere.

##### Usage
```ts
  providers: [
    // ...
    {
      provide: NB_DEFAULT_ERR_IMG,
      useValue: '/assets/picture.svg'
    }
    // OR
    {
      provide: NB_DEFAULT_ERR_IMG,
      useFactory: (domSanitizer: DomSanitizer) => {
        return domSanitizer.bypassSecurityTrustResourceUrl('data:image/svg+xml;base64,PHN2ZyB4b...')
      },
      deps: [DomSanitizer]
    }
    // ...
  ]
```

<br>

---

### Contribution
> Feature and PR are welcome to make this project better together

<a href="https://github.com/bigBear713" target="_blank"><img src="https://avatars.githubusercontent.com/u/12368900?v=4" alt="bigBear713" width="30px" height="30px"></a>

<br>

---

### License
MIT