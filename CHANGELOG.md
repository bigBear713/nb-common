# v16.0.0
## Breaking Changes
- feat: Upgrade `angular` to `v16`;

## [Services](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Services "Services")
- feat: [NbUnsubscribeService](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbunsubscribeService) - Provide the functions to unsubscribe rxjs

## [Directives](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Directives "Directives")
- refactor: [`[nbPlaceholder]`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbplaceholder) - Using NbUnsubscribeService to manage rxjs subscriptions

---

# v15.1.0
## [Components](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Components "Components")
- feat: [`[nb-r-str]`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nb-r-str) - Support to be imported as a `standalone component`

## [Directives](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Directives "Directives")
- feat: [`[nbPlaceholder]`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbplaceholder) - Support to be imported as a `standalone component`
- feat: [`img[nbImg]`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#imgnbimg) - Support to be imported as a `standalone component`
- refactor: [`img[nbImg]`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#imgnbimg) - Optimising the timing for loading images

## [Pipes](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Pipes "Pipes")
- feat: [`nbIsAsync`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbisasync-transformvalue-any-value-is-observableany--promiseany) - Support to be imported as a `standalone component`
- feat: [`nbIsBoolean`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbisboolean-transformvalue-any-value-is-boolean) - Support to be imported as a `standalone component`
- feat: [`nbIsNumber`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbisnumber-transformvalue-any-value-is-number) - Support to be imported as a `standalone component`
- feat: [`nbIsObservable`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbisobservable-transformvalue-any-value-is-observableany) - Support to be imported as a `standalone component`
- feat: [`nbIsString`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbisstring-transformvalue-any-value-is-string) - Support to be imported as a `standalone component`
- feat: [`nbTplContent`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbtplcontent-transformvalue-any-templaterefany--null) - Support to be imported as a `standalone component`

---

# v15.0.0
## Breaking Changes
- feat: Upgrade `angular` to `v15`;

---

# v14.0.0
## Breaking Changes
- feat: Upgrade `angular` to `v14`;

---

# v13.0.0
## Breaking Changes
- feat: Upgrade `angular` to `v13`;

---

# v12.2.0
## [Directives](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Directives "Directives")
- feat: [`img[nbImg]`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#imgnbimg) - Add loading effect when loading image. When failure to load image, it will display the picture which is preset;

## [Tokens](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#tokens "Tokens")
- feat: [NB_DEFAULT_LOADING_IMG](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nb_default_loading_img) - It is the token is used for presetting the loading effect picture via DI;
- feat: [NB_DEFAULT_ERR_IMG](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nb_default_err_img) - It is the token is used for presetting the picture which is displayed when failure to load the image via DI;

---

# v12.1.0
## [Pipes](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Pipes "Pipes")
- feat: [`nbIsBoolean`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbisboolean-transformvalue-any-value-is-boolean) - Check the value is boolean type
- feat: [`nbIsNumber`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbisnumber-transformvalue-any-value-is-number) - Check the value is number type
- feat: [`nbIsString`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbisstring-transformvalue-any-value-is-string) - Check the value is string type

---

## [Directives](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Directives "Directives")
### [`[nbPlaceholder]`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbplaceholder "nbPlaceholder")
- fix: The placeholder attr value will auto be updated in some cases when the changeDetection is `ChangeDetectionStrategy.OnPush`

---

# v12.0.0
## [Module](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Module "Module")
- feat: [NbCommonModule](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbcommonmodule) - provide useful `component`, `directive`, `pipe`
- feat: [NbCommonTestingModule](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbcommontestingmodule) - provide the env to unit test
- feat: [getTplRefInstance()](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#function-gettplrefinstancetestbed-testbedstatic-fixturecomponentfixturecomponent-templatereftestingcomponenttplref-templateref) - Get templateRef's fixture, component, tplRef

## [Services](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Services "Services")
- feat: [NbValueTypeService](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbvaluetypeservice) - provide the function to get the type of value

## [Components](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Components "Components")
- feat: [`[nb-r-str]`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nb-r-str) - render the string content

## [Directives](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Directives "Directives")
- feat: [`[nbPlaceholder]`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbplaceholder) - Set the value of placeholder attribute

## [Pipes](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#Pipes "Pipes")
- feat: [`nbIsAsync`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbisasync-transformvalue-any-value-is-observableany--promiseany) - check the value is async type
- feat: [`nbIsObservable`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbisobservable-transformvalue-any-value-is-observableany) - check the value is Observable
- feat: [`nbTplContent`](https://github.com/bigBear713/nb-common/blob/master/projects/nb-common/README.md#nbtplcontent-transformvalue-any-templaterefany--null) - get the TemplateRef content 