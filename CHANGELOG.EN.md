# v14.0.0
## Breaking Changes
- feat: Upgrade `angular` to `v14`;

<br/>

# v13.0.0
## Breaking Changes
- feat: Upgrade `angular` to `v13`;

<br/>

# v12.2.0
## [Directives](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#Directives "Directives")
- feat: [`img[nbImg]`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#imgnbimg) - Add loading effect when loading image. When failure to load image, it will display the picture which is preset;
## [Tokens](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#tokens "Tokens")
- feat: [NB_DEFAULT_LOADING_IMG](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#nb_default_loading_img) - It is the token is used for presetting the loading effect picture via DI;
- feat: [NB_DEFAULT_ERR_IMG](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#nb_default_err_img) - It is the token is used for presetting the picture which is displayed when failure to load the image via DI;

<br/>

# v12.1.0
## [Pipes](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#Pipes "Pipes")
- feat: [`nbIsBoolean`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#nbisboolean-transformvalue-any-value-is-boolean) - Check the value is boolean type
- feat: [`nbIsNumber`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#nbisnumber-transformvalue-any-value-is-number) - Check the value is number type
- feat: [`nbIsString`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#nbisstring-transformvalue-any-value-is-string) - Check the value is string type

<br/>

## [Directives](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#Directives "Directives")
### [`[nbPlaceholder]`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#nbplaceholder "nbPlaceholder")
- fix: The placeholder attr value will auto be updated in some cases when the changeDetection is `ChangeDetectionStrategy.OnPush`

<br/>

# v12.0.0
## [Module](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#Module "Module")
- feat: [NbCommonModule](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#nbcommonmodule) - provide useful `component`, `directive`, `pipe`
- feat: [NbCommonTestingModule](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#nbcommontestingmodule) - provide the env to unit test
- feat: [getTplRefInstance()](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#function-gettplrefinstancetestbed-testbedstatic-fixturecomponentfixturecomponent-templatereftestingcomponenttplref-templateref) - Get templateRef's fixture, component, tplRef

<br>

## [Services](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#Services "Services")
- feat: [NbValueTypeService](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#nbvaluetypeservice) - provide the function to get the type of value

<br>

## [Components](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#Components "Components")
- feat: [`[nb-r-str]`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#nb-r-str) - render the string content

<br>

## [Directives](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#Directives "Directives")
- feat: [`[nbPlaceholder]`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#nbplaceholder) - Set the value of placeholder attribute

<br>

## [Pipes](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#Pipes "Pipes")
- feat: [`nbIsAsync`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#nbisasync-transformvalue-any-value-is-observableany--promiseany) - check the value is async type
- feat: [`nbIsObservable`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#nbisobservable-transformvalue-any-value-is-observableany) - check the value is Observable
- feat: [`nbTplContent`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.EN.md#nbtplcontent-transformvalue-any-templaterefany--null) - get the TemplateRef content 