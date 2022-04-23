# v12.2.0
## [Directives](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Directives "Directives")
- feat: `img[nbImg]` - 在image加载完成前添加loading效果，当加载失败时会显示预设置好的图片;

<br/>

# v12.1.0
## [Pipes](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Pipes "Pipes")
- feat: `nbIsBoolean` - 判断值是否是boolean类型
- feat: `nbIsNumber` - 判断值是否是数字
- feat: `nbIsString` - 判断值是否是字符串

<br/>

## [Directives](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Directives "Directives")
### `[nbPlaceholder]`
- fix: 一些情况下，在`ChangeDetectionStrategy.OnPush`下不会更新

<br/>

# v12.0.0
## [Module](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Module "Module")
- feat: NbCommonModule - 提供可用的`component`, `directive`, `pipe`
- feat: NbCommonTestingModule - 提供单元测试环境
- feat: getTplRefInstance() - 快速获取templateRef的fixture, component, tplRef等

<br>

## [Services](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Services "Services")
- feat: NbValueTypeService - 提供值类型检测的功能

<br>

## [Components](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Components "Components")
- feat: `[nb-r-str]` - 字符串内容渲染

<br>

## [Directives](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Directives "Directives")
- feat: `[nbPlaceholder]` - 设置placeholder属性值

<br>

## [Pipes](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Pipes "Pipes")
- feat: `nbIsAsync` - 判断值是否是异步
- feat: `nbIsObservable` - 判断值是否是可观察类型
- feat: `nbTplContent` - 获取TemplateRef类型