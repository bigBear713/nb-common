import{a as x,g as B}from"./chunk-AFSPN6ZB.js";import{A as v,G as l,I as t,J as n,K as o,Q as S,T as e,V as s,X as p,e as c,l as d,sa as g,u as r,v as b,ya as E,z as h,za as f}from"./chunk-2YK3DJ22.js";var D=(()=>{class i{constructor(m){this.gtagService=m,this.observableDemo$=new c("1"),this.promiseDemo=Promise.resolve("1"),this.gtagService.trackPage({page_name:"r-str component"})}ngOnInit(){}changeObservableContent(){let m=Number(this.observableDemo$.value)+1;this.observableDemo$.next(m.toString()),this.gtagService.trackButton({button_name:"\u66F4\u6539\u89C2\u5BDF\u8005\u5BF9\u8C61\u7684\u5185\u5BB9",page_name:"r-str component"})}static{this.\u0275fac=function(a){return new(a||i)(b(f))}}static{this.\u0275cmp=h({type:i,selectors:[["app-r-str-demo"]],standalone:!1,decls:37,vars:14,consts:[["nb-r-str","string content"],[3,"click"],[3,"nb-r-str"]],template:function(a,u){a&1&&(t(0,"h2"),e(1),n(),t(2,"h4"),e(3,"\u5F53\u5185\u5BB9\u662F\u5B57\u7B26\u4E32\u65F6\uFF0C\u6B63\u5E38\u663E\u793A"),n(),o(4,"span",0),t(5,"h5"),e(6,"\u4EE3\u7801"),n(),t(7,"pre"),e(8,"  "),t(9,"code"),e(10),n(),e(11,`
`),n(),o(12,"hr"),t(13,"h4"),e(14),n(),t(15,"button",1),S("click",function(){return u.changeObservableContent()}),e(16,"\u66F4\u6539\u89C2\u5BDF\u8005\u5BF9\u8C61\u7684\u5185\u5BB9"),n(),o(17,"span",2),t(18,"h5"),e(19,"\u4EE3\u7801"),n(),t(20,"pre"),e(21,"  "),t(22,"code"),e(23),n(),e(24,`
`),n(),o(25,"hr"),t(26,"h4"),e(27),n(),o(28,"span",2),t(29,"h5"),e(30,"\u4EE3\u7801"),n(),t(31,"pre"),e(32,"  "),t(33,"code"),e(34),n(),e(35,`
`),n(),o(36,"hr")),a&2&&(r(),s("\u9002\u7528\u4E8E\u8981\u663E\u793A\u7684\u5185\u5BB9\u662F\u5B57\u7B26\u4E32\u6216\u8005\u662FObservable","<string>","\u7684\u573A\u666F"),r(9),s(`
    `,'<span nb-r-str="string content"></span>',`
  `),r(4),s("\u5F53\u5185\u5BB9\u662FObservable","<string>",""),r(3),l("nb-r-str",u.observableDemo$),r(6),p(`
    `,"//ts",`
    `,"observableDemo$ = new BehaviorSubject<string>('1');",`
    `,"//html",`
    `,'<span [nb-r-str]="observableDemo$"></span>',`
  `),r(4),s("\u5F53\u5185\u5BB9\u662FPromise","<string>",""),r(),l("nb-r-str",u.promiseDemo),r(6),p(`
    `,"//ts",`
    `,"promiseDemo = Promise.resolve('1');",`
    `,"//html",`
    `,'<span [nb-r-str]="promiseDemo"></span>',`
  `))},dependencies:[x],encapsulation:2,changeDetection:0})}}return i})();var C=[{path:"",component:D}],O=(()=>{class i{static{this.\u0275fac=function(a){return new(a||i)}}static{this.\u0275mod=v({type:i})}static{this.\u0275inj=d({imports:[g,B,E.forChild(C)]})}}return i})();export{O as RStrDemoModule};
