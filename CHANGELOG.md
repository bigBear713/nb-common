# v13.0.0
## 破坏性更新
- feat: `angular`升级到`v13`;

<br/>

# v12.2.0
## [Directives](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Directives "Directives")
- feat: [`img[nbImg]`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#imgnbimg) - 在image加载完成前添加loading效果，当加载失败时会显示预设置好的图片;
## [Tokens](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#tokens "Tokens")
- feat: [NB_DEFAULT_LOADING_IMG](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nb_default_loading_img) - 在DI中设置加载image时的loading效果图片的token;
- feat: [NB_DEFAULT_ERR_IMG](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nb_default_err_img) - 在DI中设置加载image失败时显示的图片的token;

<br/>

# v12.1.0
## [Pipes](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Pipes "Pipes")
- feat: [`nbIsBoolean`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbisboolean-transformvalue-any-value-is-boolean) - 判断值是否是boolean类型
- feat: [`nbIsNumber`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbisnumber-transformvalue-any-value-is-number) - 判断值是否是数字
- feat: [`nbIsString`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbisstring-transformvalue-any-value-is-string) - 判断值是否是字符串

<br/>

## [Directives](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Directives "Directives")
### [`[nbPlaceholder]`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbplaceholder)
- fix: 一些情况下，在`ChangeDetectionStrategy.OnPush`下不会更新

<br/>

# v12.0.0
## [Module](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Module "Module")
- feat: [NbCommonModule](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbcommonmodule) - 提供可用的`component`, `directive`, `pipe`
- feat: [NbCommonTestingModule](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbcommontestingmodule) - 提供单元测试环境
- feat: [getTplRefInstance()](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#function-gettplrefinstancetestbed-testbedstatic-fixturecomponentfixturecomponent-templatereftestingcomponenttplref-templateref) - 快速获取templateRef的fixture, component, tplRef等

<br>

## [Services](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Services "Services")
- feat: [NbValueTypeService](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbvaluetypeservice) - 提供值类型检测的功能

<br>

## [Components](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Components "Components")
- feat: [`[nb-r-str]`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nb-r-str) - 字符串内容渲染

<br>

## [Directives](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Directives "Directives")
- feat: [`[nbPlaceholder]`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbplaceholder) - 设置placeholder属性值

<br>

## [Pipes](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Pipes "Pipes")
- feat: [`nbIsAsync`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbisasync-transformvalue-any-value-is-observableany--promiseany) - 判断值是否是异步
- feat: [`nbIsObservable`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbisobservable-transformvalue-any-value-is-observableany) - 判断值是否是可观察类型
- feat: [`nbTplContent`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbtplcontent-transformvalue-any-templaterefany--null) - 获取TemplateRef类型