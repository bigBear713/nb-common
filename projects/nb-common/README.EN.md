<div align="center">

# @bigbear713/nb-common

Angular common lib by bigBear713, include some common `component`, `directive`, `pipe`, `service`.

[OnlineDemo](https://bigBear713.github.io/nb-common/)

[Bug Report](https://github.com/bigBear713/nb-common/issues)

[Feature Request](https://github.com/bigBear713/nb-common/issues)

</div>

## Document
- [中文](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md "文档 - 中文")
- [English](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md "Document - English")

<br>

## Changelog
- [中文](https://github.com/bigBear713/nb-common/blob/master/CHANGELOG.md "更新日志 - 中文")
- [English](https://github.com/bigBear713/nb-common/blob/master/CHANGELOG.EN.md "Changelog - English")

<br>

## Feature
- Support the changeDetection of components as `ChangeDetectionStrategy.OnPush`;

<br>

## Version
###### The nb-common's main version will keep up with the Angular's main version
- "@bigbear713/nb-common":"^12.0.0" - "@angular/core": "^12.0.0"
- "@bigbear713/nb-common":"^13.0.0" - "@angular/core": "^13.0.0"
- "@bigbear713/nb-common":"^14.0.0" - "@angular/core": "^14.0.0"

<br>

## Installation
```bash
$ npm i @bigbear713/nb-common
// or
$ yarn add @bigbear713/nb-common
```

<br>

### Module

#### NbCommonModule
###### Common module. After importing the module, you can use `component`, `directive` and `pipe`. `service` can be used if you do not import the module, because they are provided in root

#### NbCommonTestingModule
###### Common testing module, used for Unit Test.

#### function getTplRefInstance(TestBed: TestBedStatic) {fixture:ComponentFixture<TemplateRefTestingComponent>;component: TemplateRefTestingComponent;tplRef: TemplateRef<any>}
###### Get templateRef's fixture, component, tplRef. You can get the instance of TemplateRef type directly, so it is more convenience for unit test. You should import the NbCommonTestingModule firstly.

<br>

### Services

#### NbValueTypeService
###### The `service` can provide the function to get the type of value
###### `v12.0.0`

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

### Components

#### `[nb-r-str]`
###### Render the string content, support the type of content is string or anync object. 
###### `v12.0.0`
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

<br>

### Directives
#### `img[nbImg]`
###### Add loading effect when loading image. When failure to load image, it will display the picture which is preset. It can be used when the image you want to load is so large or you don't want to display broken image when failure to load the image
###### `v12.2.0`
##### Input
| Name  | Type  | Default  | Description  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| nbImg  | `string` | `''` | The src of image you want to load. When you use the directive and not set the `nbImg` value, will diplay the content from `src` property (no loading effect). At this time, if failure the image from the `src` value, it will display the `errImg` content. | `v12.2.0` |
| loadingImg  | `string ｜ SafeResourceUrl` | `'./assets/nb-common/loading.svg'` | The loading picture when loading the image. Support the url path and safe resource url(like base64 svg file). The default is `'./assets/nb-common/loading.svg'`, so when you use the default value, you should set the config which is in `assets` of `angular.json` file, you can see the demo below. You can use the `NB_DEFAULT_LOADING_IMG` token via DI to set the project or a module's loading picture, so that does not need to set the picture everywhere. You can see the [Tokens](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#nb_default_loading_img) defined below | `v12.2.0` |
| errImg  | `string ｜ SafeResourceUrl` | `'./assets/nb-common/loading.svg'` | The picture which is displayed when failure to load the image. Support the url path and safe resource url(like base64 svg file). The default is `'./assets/nb-common/picture.svg'`, so when you use the default value, you should set the config which is in `assets` of `angular.json` file, you can see the demo below. You can use the `NB_DEFAULT_ERR_IMG` token via DI to set the project or a module's errImg picture, so that does not need to set the picture everywhere. You can see the [Tokens](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#nb_default_err_img) defined below | `v12.2.0` |

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

<br>

#### `[nbPlaceholder]`
###### Set the value of placeholder attribute. Support `string` type and `Observable<string>` type
###### `v12.0.0`
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

<br>

### Pipes

#### nbIsAsync: `transform(value: any): value is Observable<any> | Promise<any>`
###### Check the value is async type
###### `v12.0.0`
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

<br>

#### nbIsBoolean: `transform(value: any): value is boolean`
###### Check the value is boolean type
###### `v12.1.0`
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

<br>

#### nbIsNumber: `transform(value: any): value is number`
###### Check the value is number type
###### `v12.1.0`
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

<br>

#### nbIsObservable: `transform(value: any): value is Observable<any>`
###### Check the value is Observable
###### `v12.0.0`
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

<br>

#### nbIsString: `transform(value: any): value is string`
###### Check the value is string type
###### `v12.1.0`
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

<br>

#### nbTplContent: `transform(value: any): TemplateRef<any> | null`
###### Get the TemplateRef content 
###### `v12.0.0`
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

<br>

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

### Contribution
> Feature and PR are welcome to make this project better together

<a href="https://github.com/bigBear713" target="_blank"><img src="https://avatars.githubusercontent.com/u/12368900?v=4" alt="bigBear713" width="30px" height="30px"></a>

<br>

### License
MIT