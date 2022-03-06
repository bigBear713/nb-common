<div align="center">

### @bigbear713/nb-common

Angular common lib by bigBear713, include some common `component`, `directive`, `pipe`, `service`.

[OnlineDemo](https://bigBear713.github.io/nb-common/)

[Bug Report](https://github.com/bigBear713/nb-common/issues)

[Feature Request](https://github.com/bigBear713/nb-common/issues)

</div>

## Document
- [中文](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md "中文文档")
- [English](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md "English Document")

## Feature
- Support the changeDetection of components as `ChangeDetectionStrategy.OnPush`;

### Version
###### The nb-common's main version will keep up with the Angular's main version
- "@bigbear713/nb-common":"^12.0.0" - "@angular/core": "^12.0.0"

### Installation
```bash
$ npm i @bigbear713/nb-common
// or
$ yarn add @bigbear713/nb-common
```

### Module

#### NbCommonModule
###### Common module. After importing the module, you can use `component`, `Directive` and `pipe`. `service` can be used if you do not import the module, because they are provided in root

#### NbCommonTestingModule
###### Common testing module, used for Unit Test.

#### function getTplRefInstance(TestBed: TestBedStatic) {fixture:ComponentFixture<TemplateRefTestingComponent>;component: TemplateRefTestingComponent;tplRef: TemplateRef<any>}
###### Get templateRef's fixture, component, tplRef. You can get the instance of TemplateRef type directly, so it is more convenience for unit test. You should import the NbCommonTestingModule firstly.

### Service

#### NbValueTypeService
###### The `service` can provide the function to get the type of value 。

##### Methods
| Name  | Return  | Description  | Scenes  |
| ------------ | ------------ | ------------ | ------------ |
| isObservable(value: any)  | `value is Observable<any>`  | Is the value params `Observable` type. Attention: `Subject` and so on also are one of `Observable` | Want to ensure the value is `Observable` type |
| isPromise(value: any)  | `value is Promise<any>`  | Is the value params `Promise`type. | Want to ensure the value is `Promise` type |
| isString(value: any)  | `value is string`  | Is the value `string` type. Attention: it is ture when the value is `string` or `String`type | Want to ensure the value is `string` type |
| isTemplateRef(value: any)  | `value is TemplateRef<any>`  | Is the value `TemplateRef`type | Want to ensure the value is `TemplateRef` type |

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

### Component

#### `[nb-r-str]`
###### Render the string content, support the type of content is string or anync object. 
##### Input
| Name  | Type  | Default  | Description  |
| ------------ | ------------ | ------------ | ------------ |
| nb-r-str  | `string ｜ Observable<string> ｜ Promise<string>`  | ``  | The content want to render. It will auto be rendered via right method according to the type of content |

##### Usage
```html
<span nb-r-str="string content"></span>

<!-- observableDemo$ = new BehaviorSubject<string>('1'); -->
<span [nb-r-str]="observableDemo$"></span>

<!-- promiseDemo = Promise.resolve('1'); -->
<span [nb-r-str]="promiseDemo"></span>
```

### Directive
#### `[nbPlaceholder]`
###### Set the value of placeholder attribute. Support `string` type and `Observable<string>` type
##### Input
| Name  | Type  | Default  | Description  |
| ------------ | ------------ | ------------ | ------------ |
| nbPlaceholder  | `string ｜ Observable<string>`  | `` | The content want to be rendered. If the type is `string`, it will auto be set as the placeholder attribute. If the content is `Observable<string>`, will auto subscribe the value and auto update the value of placeholder attribute when the value has been changed |

##### Usage
```html
<input nbPlaceholder="This is placeholder">

<!-- placeholder$ = new BehaviorSubject('This is placeholder'); -->
<input [nbPlaceholder]="placeholder$">

```

### Pipe

#### nbIsAsync: `transform(value: any): value is Observable<any> | Promise<any>`
###### Check the value is async type
##### Params
| Name  | Type  | Mandatory  | Description  |
| ------------ | ------------ | ------------ | ------------ |
| value  | `any`  | true  | The value will be checked  |

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


#### nbIsObservable: `transform(value: any): value is Observable<any>`
###### Check the value is Observable
##### Params
| Name  | Type  | Mandatory  | Description  |
| ------------ | ------------ | ------------ | ------------ |
| value  | `any`  | true  | The value will be checked |

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


#### nbTplContent: `transform(value: any): TemplateRef<any> | null`
###### Get the TemplateRef content 
##### Params
| Name  | Type  | Mandatory  | Description  |
| ------------ | ------------ | ------------ | ------------ |
| value  | `any`  | true  | The value will be checked  |

##### Return
| Type  | Description  |
| ------------ | ------------ |
| `TemplateRef<any> ｜ null`  | If the value is `TemplateRef` type, it will return the value, otherwise it will return null  |

##### Usage
```html
<ng-container [ngTemplateOutlet]="content | nbTplContent"></ng-container>
```

### 贡献
> Feature and PR are welcome to make this project better together

<a href="https://github.com/bigBear713" target="_blank"><img src="https://avatars.githubusercontent.com/u/12368900?v=4" alt="bigBear713" width="30px" height="30px"></a>

### License
MIT