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

</div>

## Changelog
- [中文](https://github.com/bigBear713/nb-common/blob/master/CHANGELOG.md "更新日志 - 中文")
- [English](https://github.com/bigBear713/nb-common/blob/master/CHANGELOG.EN.md "Changelog - English")

<br>

## Feature
- 支持组件的更新策略为`ChangeDetectionStrategy.OnPush`;

</div>

## Version
###### nb-common的大版本和Angular的大版本保持对应关系
- "@bigbear713/nb-common":"^12.0.0" - "@angular/core": "^12.0.0"

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
###### Common模块。引入该模块后，可使用`component`，`directive`，`pipe`。`service`不需要引入该模块也可使用，默认为全局。

#### NbCommonTestingModule
###### Common测试模块。用于Unit Test。

#### function getTplRefInstance(TestBed: TestBedStatic) {fixture:ComponentFixture<TemplateRefTestingComponent>;component: TemplateRefTestingComponent;tplRef: TemplateRef<any>}
###### 获取templateRef的fixture, component, tplRef等，可用于快速获取TemplateRef类型的实例，方便Unit Test. 需先引入NbCommonTestingModule

<br>

### Services

#### NbValueTypeService
###### 提供值类型检测的功能的`service`。
###### `v12.0.0`

##### Methods
| Name  | Return  | Description  | Scenes  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| isBoolean(value: any)  | `value is boolean`  | value参数是否为`boolean`类型的值 | 想要保证值为`boolean`类型时  | `v12.1.0` |
| isNumber(value: any)  | `value is number`  | value参数是否为`number`类型的值 | 想要保证值为`number`类型时  | `v12.1.0` |
| isObservable(value: any)   | `value is Observable<any>`  | value参数是否为`Observable`类型的值。注：`Subject`等也属于`Observable`类型的一种 | 想要保证值为`Observable`类型时  | `v12.0.0` |
| isPromise(value: any) | `value is Promise<any>`  | value参数是否为`Promise`类型的值。 | 想要保证值为`Promise`类型时  | `v12.0.0` |
| isString(value: any)  | `value is string`  | value参数是否为`string`类型的值。注:`string`和`String`都会返回true | 想要保证值为`string`类型时 | `v12.0.0` |
| isTemplateRef(value: any)  | `value is TemplateRef<any>`  | value参数是否为`TemplateRef`类型的值 | 想要保证值为`TemplateRef`类型时  | `v12.0.0` |

##### Usage
```ts
constructor(private valueType: NbValueTypeService) {}

this.valueType.isBoolean(new Boolean(false)); // true
this.valueType.isBoolean(false); // true
this.valueType.isObservable({}); // false

this.valueType.isNumber(new Number(1)); // true
this.valueType.isNumber(1); // true
this.valueType.isObservable({}); // false

this.valueType.isObservable(new Subject()); // true
this.valueType.isObservable({}); // false

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
###### 字符串内容渲染，支持内容为string或者异步对象
###### `v12.0.0`
##### Input
| Name  | Type  | Default  | Description  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| nb-r-str  | `string ｜ Observable<string> ｜ Promise<string>`  | `''`  | 要显示的文本内容。会自动根据内容类型，选择合适的方式渲染出来 | `v12.0.0` |

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
###### 在image加载完成前添加loading效果，当加载失败时会显示预设置好的图片。适合加载image文件比较大时，或者加载图片失败时不想显示破碎图片的场景
###### `v12.2.0`
##### Input
| Name  | Type  | Default  | Description  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| nbImg  | `string` | `''` | 要加载的image的src。如果使用了该指令，但是没有设置`nbImg`的值，会显示`src`属性的内容(没有loaing效果)。如果此时`src`的内容加载失败，会显示`errImg`的内容 | `v12.2.0` |
| loadingImg  | `string ｜ SafeResourceUrl` | `'/assets/nb-common/loading.svg'` | 加载image时的loading图片，支持图片路径和认证安全的url(比如svg的base64)。默认是`assets/nb-common`目录下的`loading.svg`文件，所以使用默认路径时，需要在`angular.json`中，项目的`assets`中配置，具体见下方配置。可通过DI，使用`NB_DEFAULT_LOADING_IMG` token, 统一设置项目中，或者某个模块中的loading图片，具体见下方[tokens](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nb_default_loading_img-string--saferesourceurl)定义 | `v12.2.0` |
| errImg  | `string ｜ SafeResourceUrl` | `'/assets/nb-common/loading.svg'` | 加载image失败后显示的图片，支持图片路径和认证安全的url(比如svg的base64)。默认是`assets/nb-common`目录下的`picture.svg`文件。所以使用默认路径时，需要在`angular.json`中，项目的`assets`中配置，具体见下方配置。可通过DI，使用`NB_DEFAULT_ERR_IMG` token, 统一设置项目中，或者某个模块中的加载失败后显示的图片，具体见下方[tokens](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nb_default_err_img-string--saferesourceurl)定义 | `v12.2.0` |

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
<!-- 只设置"nbImg"，加载失败时会显示默认图片 -->
<img [nbImg]="bigImg">

<!-- 自定义loading图片 -->
<img [nbImg]="bigImg" [loadingImg]="loadingImg">

<!-- 加载失败时显示自定义图片 -->
<img nbImg="invalidImg" [errImg]="errImg">

<!-- 只想要加载失败时，显示默认图片(如果想显示其他图片，可设置errImg属性)，不需要loading效果 -->
<img src="invalidImg" nbImg [errImg]="errImg">

```

<br>

#### `[nbPlaceholder]`
###### 设置placeholder属性值。支持内容为`string`和`Observable<string>`类型
###### `v12.0.0`
##### Input
| Name  | Type  | Default  | Description  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| nbPlaceholder  | `string ｜ Observable<string>`  | `''` | 要显示的placeholder的内容。如果是`string`，将直接绑定到placeholder属性。如果是`Observable<string>`,将订阅它；且当订阅到值改变时，自动更新placeholder属性值 | `v12.0.0` |

##### Usage
```html
<input nbPlaceholder="这是placeholder">

<!-- placeholder$ = new BehaviorSubject('这是placeholder'); -->
<input [nbPlaceholder]="placeholder$">

```

<br>

### Pipes

#### nbIsAsync: `transform(value: any): value is Observable<any> | Promise<any>`
###### 判断值是否是异步的管道
###### `v12.0.0`
##### Params
| Name  | Type  | Mandatory  | Description  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| value  | `any`  | true  | 要判断类型的值  | `v12.0.0` |

##### Return
| Type  | Description  |
| ------------ | ------------ |
| `value is Observable<any> ｜ Promise<any>`  | value是否为`Observable<any>`或者`Promise<any>`类型 |

##### Usage
```html
<ng-container [ngSwitch]="content | nbIsAsync">
    <ng-container *ngSwitchCase="true">{{content | async}}</ng-container>
    <ng-container *ngSwitchDefault>{{content}}</ng-container>
</ng-container>
```

<br>

#### nbIsBoolean: `transform(value: any): value is boolean`
###### 判断值是否是boolean类型的管道
###### `v12.1.0`
##### Params
| Name  | Type  | Mandatory  | Description  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| value  | `any`  | true  | 要判断类型的值  | `v12.1.0` |

##### Return
| Type  | Description  |
| ------------ | ------------ |
| `value is boolean`  | value是否为`boolean`或者`Boolean`类型  |

##### Usage
```html
<ng-container [ngSwitch]="content | nbIsBoolean">
    <ng-container *ngSwitchCase="true">{{!!content}}</ng-container>
    <ng-container *ngSwitchDefault>{{content}}</ng-container>
</ng-container>
```

<br>

#### nbIsNumber: `transform(value: any): value is number`
###### 判断值是否是数字的管道
###### `v12.1.0`
##### Params
| Name  | Type  | Mandatory  | Description  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| value  | `any`  | true  | 要判断类型的值  | `v12.1.0` |

##### Return
| Type  | Description  |
| ------------ | ------------ |
| `value is number`  | value是否为`number`或者`Number`类型  |

##### Usage
```html
<ng-container [ngSwitch]="content | nbIsNumber">
    <ng-container *ngSwitchCase="true">{{content+1}}</ng-container>
    <ng-container *ngSwitchDefault>{{+content+1}}</ng-container>
</ng-container>
```

<br>

#### nbIsObservable: `transform(value: any): value is Observable<any>`
###### 判断值是否是可观察类型的管道
###### `v12.0.0`
##### Params
| Name  | Type  | Mandatory  | Description  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| value  | `any`  | true  | 要判断类型的值  | `v12.0.0` |

##### Return
| Type  | Description  |
| ------------ | ------------ |
| `value is Observable<any> ｜ Promise<any>`  | value是否为`Observable<any>`类型  |

##### Usage
```html
<ng-container [ngSwitch]="content | nbIsObservable">
    <ng-container *ngSwitchCase="true">{{content | async}}</ng-container>
    <ng-container *ngSwitchDefault>{{content}}</ng-container>
</ng-container>
```

<br>

#### nbIsString: `transform(value: any): value is string`
###### 判断值是否是字符串的管道
###### `v12.1.0`
##### Params
| Name  | Type  | Mandatory  | Description  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| value  | `any`  | true  | 要判断类型的值  | `v12.1.0` |

##### Return
| Type  | Description  |
| ------------ | ------------ |
| `value is string`  | value是否为`string`或者`String`类型  |

##### Usage
```html
<ng-container [ngSwitch]="content | string">
    <ng-container *ngSwitchCase="false">{{content | async}}</ng-container>
    <ng-container *ngSwitchDefault>{{content}}</ng-container>
</ng-container>
```

<br>

#### nbTplContent: `transform(value: any): TemplateRef<any> | null`
###### 获取TemplateRef类型的内容
##### Params
| Name  | Type  | Mandatory  | Description  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| value  | `any`  | true  | 要判断的值  | `v12.0.0` |

##### Return
| Type  | Description  |
| ------------ | ------------ |
| `TemplateRef<any> ｜ null`  | value为`TemplateRef`类型的值时，返回改值。否则返回null  |

##### Usage
```html
<ng-container [ngTemplateOutlet]="content | nbTplContent"></ng-container>
```

<br>

### Tokens

#### NB_DEFAULT_LOADING_IMG: string | SafeResourceUrl
##### `v12.2.0`
###### 用于设置加载image时“默认”显示的loading图片，配合`img[nbImg]`指令使用。结合DI，避免重复设置每个`img[nbImg]`的`loadingImg`。

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

#### NB_DEFAULT_ERR_IMG: string | SafeResourceUrl
##### `v12.2.0`
###### 用于设置加载image失败后“默认”显示的图片，避免显示破碎图片，配合`img[nbImg]`指令使用。结合DI，避免重复设置每个`img[nbImg]`的`errImg`。

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


### 贡献
> 欢迎提feature和PR，一起使该项目更好

<a href="https://github.com/bigBear713" target="_blank"><img src="https://avatars.githubusercontent.com/u/12368900?v=4" alt="bigBear713" width="30px" height="30px"></a>

<br>

### License
MIT