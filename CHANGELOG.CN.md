# v17.0.0
## 破坏性更新
- feat: `angular`升级到`v17`;

---

# v16.2.0
## [Pipes](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#Pipes "Pipes")
- feat: [`nbCallFn `](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbcallfn-transformfn-function-args-any-anyundefined) - 调用指定的function的管道:[issues/36](https://github.com/bigBear713/nb-common/issues/36)

---

# v16.1.0
## [Services](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#Services "Services")
- feat: [NbUnsubscribeService](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbunsubscribeService) - 调整`collectASubscriptionByKey()`的返回值:[issues/30](https://github.com/bigBear713/nb-common/issues/30)

---

# v16.0.0
## 破坏性更新
- feat: `angular`升级到`v16`;
 
## [Services](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#Services "Services")
- feat: [NbUnsubscribeService](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbunsubscribeService) - 提供取消rxjs订阅的功能
 
## [Directives](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#Directives "Directives")
- refactor: [`[nbPlaceholder]`](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbplaceholder) - 使用NbUnsubscribeService管理rxjs的订阅

---

# v15.1.0
## [Components](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#Components "Components")
- feat: [`[nb-r-str]`](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nb-r-str) - 支持以`standalone component`的方式引入

## [Directives](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#Directives "Directives")
- feat: [`[nbPlaceholder]`](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbplaceholder) - 支持以`standalone component`的方式引入
- feat: [`img[nbImg]`](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#imgnbimg) - 支持以`standalone component`的方式引入
- refactor: [`img[nbImg]`](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#imgnbimg) - 优化图片的加载时机

## [Pipes](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#Pipes "Pipes")
- feat: [`nbIsAsync`](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbisasync-transformvalue-any-value-is-observableany--promiseany) - 支持以`standalone component`的方式引入
- feat: [`nbIsBoolean`](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbisboolean-transformvalue-any-value-is-boolean) - 支持以`standalone component`的方式引入
- feat: [`nbIsNumber`](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbisnumber-transformvalue-any-value-is-number) - 支持以`standalone component`的方式引入
- feat: [`nbIsObservable`](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbisobservable-transformvalue-any-value-is-observableany) - 支持以`standalone component`的方式引入
- feat: [`nbIsString`](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbisstring-transformvalue-any-value-is-string) - 支持以`standalone component`的方式引入
- feat: [`nbTplContent`](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbtplcontent-transformvalue-any-templaterefany--null) - 支持以`standalone component`的方式引入

---

# v15.0.0
## 破坏性更新
- feat: `angular`升级到`v15`;

---

# v14.0.0
## 破坏性更新
- feat: `angular`升级到`v14`;

---

# v13.0.0
## 破坏性更新
- feat: `angular`升级到`v13`;

---

# v12.2.0
## [Directives](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#Directives "Directives")
- feat: [`img[nbImg]`](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#imgnbimg) - 在image加载完成前添加loading效果，当加载失败时会显示预设置好的图片;

## [Tokens](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#tokens "Tokens")
- feat: [NB_DEFAULT_LOADING_IMG](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nb_default_loading_img) - 在DI中设置加载image时的loading效果图片的token;
- feat: [NB_DEFAULT_ERR_IMG](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nb_default_err_img) - 在DI中设置加载image失败时显示的图片的token;

---

# v12.1.0
## [Pipes](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#Pipes "Pipes")
- feat: [`nbIsBoolean`](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbisboolean-transformvalue-any-value-is-boolean) - 判断值是否是boolean类型
- feat: [`nbIsNumber`](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbisnumber-transformvalue-any-value-is-number) - 判断值是否是数字
- feat: [`nbIsString`](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbisstring-transformvalue-any-value-is-string) - 判断值是否是字符串

---

## [Directives](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#Directives "Directives")
### [`[nbPlaceholder]`](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbplaceholder)
- fix: 一些情况下，在`ChangeDetectionStrategy.OnPush`下不会更新

---

# v12.0.0
## [Module](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#Module "Module")
- feat: [NbCommonModule](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbcommonmodule) - 提供可用的`component`, `directive`, `pipe`
- feat: [NbCommonTestingModule](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbcommontestingmodule) - 提供单元测试环境
- feat: [getTplRefInstance()](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#function-gettplrefinstancetestbed-testbedstatic-fixturecomponentfixturecomponent-templatereftestingcomponenttplref-templateref) - 快速获取templateRef的fixture, component, tplRef等

## [Services](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#Services "Services")
- feat: [NbValueTypeService](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbvaluetypeservice) - 提供值类型检测的功能

## [Components](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#Components "Components")
- feat: [`[nb-r-str]`](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nb-r-str) - 字符串内容渲染

## [Directives](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#Directives "Directives")
- feat: [`[nbPlaceholder]`](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbplaceholder) - 设置placeholder属性值

## [Pipes](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#Pipes "Pipes")
- feat: [`nbIsAsync`](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbisasync-transformvalue-any-value-is-observableany--promiseany) - 判断值是否是异步
- feat: [`nbIsObservable`](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbisobservable-transformvalue-any-value-is-observableany) - 判断值是否是可观察类型
- feat: [`nbTplContent`](https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.CN.md#nbtplcontent-transformvalue-any-templaterefany--null) - 获取TemplateRef类型