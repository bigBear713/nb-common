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
- 支持组件的更新策略为`ChangeDetectionStrategy.OnPush`;
- 支持在`standalone component`中使用;
- 支持以`standalone component`的方式引入;

<br>

---

## Version
###### nb-common的大版本和Angular的大版本保持对应关系
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
###### Common模块。引入该模块后，可使用`component`，`directive`，`pipe`。`service`不需要引入该模块也可使用，默认为全局。

#### NbCommonTestingModule
###### Common测试模块。用于Unit Test。

#### function getTplRefInstance(TestBed: TestBedStatic) {fixture:ComponentFixture<TemplateRefTestingComponent>;component: TemplateRefTestingComponent;tplRef: TemplateRef<any>}
###### 获取templateRef的fixture, component, tplRef等，可用于快速获取TemplateRef类型的实例，方便Unit Test. 需先引入NbCommonTestingModule

<br>

---

### Services

#### NbValueTypeService
##### `v12.0.0`
###### 提供值类型检测的功能的`service`。

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

#### UnsubscribeService
##### `v16.0.0`
###### 提供取消rxjs订阅的功能的`service`。
##### <span style="color:red">请在component/directive的providers中使用；或者在实例销毁时，主动调用该服务实例的ngOnDestroy</span>
##### 将永远不会通过构造函数引入依赖项

##### Methods
| Name  | Return  | Description  | Scenes  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| addUnsubscribeOperator<T>(observable: Observable<T>) | `Observable<T>` | 向所给的 observable 添加`takeUntil`操作符。以便在`ngOnDestroy`时对该observable的订阅进行取消操作 | 想要在实例被销毁时自动取消该observable的订阅  | `v16.0.0` |
| getDestructionSignal() | `Observable<void>` | 获取销毁信号，是一个observable。在服务实例被销毁时，通过它能收到销毁的信号。不用关心它的订阅事件，服务实例内部将自己处理 | 想要在服务实例被销毁时自定义一些行为  | `v16.0.0` |
| collectASubscription(subscription: Subscription) | `void` | 收集一个`Subscription`，以便在需要时或实例销毁时，自动取消该订阅 | 想要在一些场景下时能自动取消该订阅  | `v16.0.0` |
| clearAllSubscriptions() | `void` | 取消订阅并清除当前为止收集到的`Subscription`，不包含根据key存储的记录 | 想要取消订阅并清除目前位置收集到的`Subscription`时 | `v16.0.0` |
| collectASubscriptionByKey(key: string, subscription: Subscription, unsubscribeIfExist: boolean = true) | `void` | 根据`key`收集一个`Subscription`，以便在需要时或实例销毁时，自动取消该订阅。如果记录中，已经存在一个与`key`相对应的`Subscription`，通过设置`unsubscribeIfExist=true`可在收集前先取消。<span style="color:red">如果设置`unsubscribeIfExist=false`，则不会取消订阅，只会覆盖原有记录。</span>`unsubscribeIfExist`默认为`true` | 想要在需要时，能对某个`Subscription`进行取消订阅  | `v16.0.0` |
| unsubscribeASubscriptionByKey(key: string) | `boolean` | 根据key取消已被收集的某个订阅。取消订阅后会将对应的subscription从记录中移除。如果根据key值取不到该订阅，会返回false | 想对之前存储的订阅事件执行取消订阅操作时  | `v16.0.0` |
| clearAllSubscriptionsFromKeyRecord() | `void` | 从根据key存储订阅事件的记录中，取消所有订阅事件，并清除。只针对根据key存储的记录。 | 想清除之前根据key值存储的所有订阅事件记录时  | `v16.0.0` |
| ngOnDestroy() | `void` | 清除当前服务实例中的所有订阅记录。通过DI,在该服务实例被销毁时会自动调用该方法。**请勿**在销毁前调用该方法。 | 想要手动清除服务实例中的所有订阅记录时，比如在pipe中使用，在被销毁时调用该方法  | `v16.0.0` |

##### Usage
```ts
// 服务实例的创建和销毁
// 设为component/directive级的服务，在component/directive实例被销毁时，也会自动销毁该服务实例，取消所有订阅事件
@Component({template:'',providers:[UnsubscribeService]}) export class XXXComponent{}
@Directive({providers:[UnsubscribeService]}) export class XXXDirective{}

// 如果无法设置为component/directive级的服务，可手动实例化，并在需要时手动取消所有订阅事件，比如在pipe中。
// 将永远不会通过构造函数引入依赖项
@Pipe() export class XXXPipe(){
  private unsubscribeService:UnsubscribeService;
  constructor(){
    this.unsubscribeService = new UnsubscribeService();
  }

  ngOnDestroy(){
    this.unsubscribeService.ngOnDestroy();
  }
}

// 使用
constructor(private unsubscribeService: UnsubscribeService) {}

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
// 当key对应的记录已经存在时，默认会对之前存储的订阅事件进行取消订阅操作
this.unsubscribeService.collectASubscriptionByKey(subKey,subscription);
// 等价于
this.unsubscribeService.collectASubscriptionByKey(subKey,subscription,true);
// 如果显式设置unsubscribeIfExist = false，则当key对应的记录已经存在时，会直接覆盖存储，不会先对之前的订阅事件进行取消操作。
// 此时应注意自己控制订阅事件的取消
this.unsubscribeService.collectASubscriptionByKey(subKey,subscription,false);

this.unsubscribeService.unsubscribeASubscriptionByKey(subKey);

this.unsubscribeService.clearAllSubscriptionsFromKeyRecord();

// 在需要的时候，调用ngOnDestroy()来取消所有订阅事件
this.unsubscribeService.ngOnDestroy();
```

<br>

---

### Components

#### `[nb-r-str]`
##### `v12.0.0`
##### 从`v15.1.0`开始为`standalone component`
###### 字符串内容渲染，支持内容为string或者异步对象
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
```ts
// v15.1.0新增
// 在NgModule中引入
@NgModule({
  imports:[NbRStrComponent],
  // ...
})
export class XXXModule{}

// 在standalone component中引入
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
##### 从`v15.1.0`开始为`standalone component`
###### 在image加载完成前添加loading效果，当加载失败时会显示预设置好的图片。适合加载image文件比较大时，或者加载图片失败时不想显示破碎图片的场景
##### Input
| Name  | Type  | Default  | Description  | Version |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| nbImg  | `string` | `''` | 要加载的image的src。如果使用了该指令，但是没有设置`nbImg`的值，会显示`src`属性的内容(没有loaing效果)。如果此时`src`的内容加载失败，会显示`errImg`的内容 | `v12.2.0` |
| loadingImg  | `string ｜ SafeResourceUrl` | `'./assets/nb-common/loading.svg'` | 加载image时的loading图片，支持图片路径和认证安全的url(比如svg的base64)。默认是`assets/nb-common`目录下的`loading.svg`文件，所以使用默认路径时，需要在`angular.json`中，项目的`assets`中配置，具体见下方配置。可通过DI，使用`NB_DEFAULT_LOADING_IMG` token, 统一设置项目中，或者某个模块中的loading图片，具体见下方[Tokens](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.CN.md#nb_default_loading_img)定义 | `v12.2.0` |
| errImg  | `string ｜ SafeResourceUrl` | `'./assets/nb-common/loading.svg'` | 加载image失败后显示的图片，支持图片路径和认证安全的url(比如svg的base64)。默认是`assets/nb-common`目录下的`picture.svg`文件。所以使用默认路径时，需要在`angular.json`中，项目的`assets`中配置，具体见下方配置。可通过DI，使用`NB_DEFAULT_ERR_IMG` token, 统一设置项目中，或者某个模块中的加载失败后显示的图片，具体见下方[Tokens](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.CN.md#nb_default_err_img)定义 | `v12.2.0` |

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
```ts
// v15.1.0新增
// 在NgModule中引入
@NgModule({
  imports:[NbImgDirective],
  // ...
})
export class XXXModule{}

// 在standalone component中引入
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
##### 从`v15.1.0`开始为`standalone component`
###### 设置placeholder属性值。支持内容为`string`和`Observable<string>`类型
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
```ts
// v15.1.0新增
// 在NgModule中引入
@NgModule({
  imports:[NbPlaceholderDirective],
  // ...
})
export class XXXModule{}

// 在standalone component中引入
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
##### 从`v15.1.0`开始为`standalone component`
###### 判断值是否是异步的管道
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
```ts
// v15.1.0新增
// 在NgModule中引入
@NgModule({
  imports:[NbIsAsyncPipe],
  // ...
})
export class XXXModule{}

// 在standalone component中引入
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
##### 从`v15.1.0`开始为`standalone component`
###### 判断值是否是boolean类型的管道
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
```ts
// v15.1.0新增
// 在NgModule中引入
@NgModule({
  imports:[NbIsBooleanPipe],
  // ...
})
export class XXXModule{}

// 在standalone component中引入
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
##### 从`v15.1.0`开始为`standalone component`
###### 判断值是否是数字的管道
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
```ts
// v15.1.0新增
// 在NgModule中引入
@NgModule({
  imports:[NbIsNumberPipe],
  // ...
})
export class XXXModule{}

// 在standalone component中引入
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
##### 从`v15.1.0`开始为`standalone component`
###### 判断值是否是可观察类型的管道
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
```ts
// v15.1.0新增
// 在NgModule中引入
@NgModule({
  imports:[NbIsObservablePipe],
  // ...
})
export class XXXModule{}

// 在standalone component中引入
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
##### 从`v15.1.0`开始为`standalone component`
###### 判断值是否是字符串的管道
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
```ts
// v15.1.0新增
// 在NgModule中引入
@NgModule({
  imports:[NbIsStringPipe],
  // ...
})
export class XXXModule{}

// 在standalone component中引入
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
##### 从`v15.1.0`开始为`standalone component`
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
```ts
// v15.1.0新增
// 在NgModule中引入
@NgModule({
  imports:[NbTplContentPipe],
  // ...
})
export class XXXModule{}

// 在standalone component中引入
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

#### NB_DEFAULT_ERR_IMG
##### string | SafeResourceUrl
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

---

### 贡献
> 欢迎提feature和PR，一起使该项目更好

<a href="https://github.com/bigBear713" target="_blank"><img src="https://avatars.githubusercontent.com/u/12368900?v=4" alt="bigBear713" width="30px" height="30px"></a>

<br>

---

### License
MIT