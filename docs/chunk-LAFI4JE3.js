import{a as B,g as F}from"./chunk-XBOPDDRK.js";import{E as c,G as t,H as n,I as m,O as E,R as e,T as u,V as p,e as d,l as b,n as h,o as v,qa as f,wa as x,xa as S,y as r,z as g}from"./chunk-7XPSJXHN.js";var D=(()=>{let i=class i{constructor(a){this.gtagService=a,this.observableDemo$=new d("1"),this.promiseDemo=Promise.resolve("1"),this.gtagService.trackPage({page_name:"r-str component"})}ngOnInit(){}changeObservableContent(){let a=Number(this.observableDemo$.value)+1;this.observableDemo$.next(a.toString()),this.gtagService.trackButton({button_name:"\u66F4\u6539\u89C2\u5BDF\u8005\u5BF9\u8C61\u7684\u5185\u5BB9",page_name:"r-str component"})}};i.\u0275fac=function(s){return new(s||i)(g(S))},i.\u0275cmp=h({type:i,selectors:[["app-r-str-demo"]],decls:37,vars:14,consts:[["nb-r-str","string content"],[3,"click"],[3,"nb-r-str"]],template:function(s,l){s&1&&(t(0,"h2"),e(1),n(),t(2,"h4"),e(3,"\u5F53\u5185\u5BB9\u662F\u5B57\u7B26\u4E32\u65F6\uFF0C\u6B63\u5E38\u663E\u793A"),n(),m(4,"span",0),t(5,"h5"),e(6,"\u4EE3\u7801"),n(),t(7,"pre"),e(8,"  "),t(9,"code"),e(10),n(),e(11,`
`),n(),m(12,"hr"),t(13,"h4"),e(14),n(),t(15,"button",1),E("click",function(){return l.changeObservableContent()}),e(16,"\u66F4\u6539\u89C2\u5BDF\u8005\u5BF9\u8C61\u7684\u5185\u5BB9"),n(),m(17,"span",2),t(18,"h5"),e(19,"\u4EE3\u7801"),n(),t(20,"pre"),e(21,"  "),t(22,"code"),e(23),n(),e(24,`
`),n(),m(25,"hr"),t(26,"h4"),e(27),n(),m(28,"span",2),t(29,"h5"),e(30,"\u4EE3\u7801"),n(),t(31,"pre"),e(32,"  "),t(33,"code"),e(34),n(),e(35,`
`),n(),m(36,"hr")),s&2&&(r(),u("\u9002\u7528\u4E8E\u8981\u663E\u793A\u7684\u5185\u5BB9\u662F\u5B57\u7B26\u4E32\u6216\u8005\u662FObservable","<string>","\u7684\u573A\u666F"),r(9),u(`
    `,'<span nb-r-str="string content"></span>',`
  `),r(4),u("\u5F53\u5185\u5BB9\u662FObservable","<string>",""),r(3),c("nb-r-str",l.observableDemo$),r(6),p(`
    `,"//ts",`
    `,"observableDemo$ = new BehaviorSubject<string>('1');",`
    `,"//html",`
    `,'<span [nb-r-str]="observableDemo$"></span>',`
  `),r(4),u("\u5F53\u5185\u5BB9\u662FPromise","<string>",""),r(),c("nb-r-str",l.promiseDemo),r(6),p(`
    `,"//ts",`
    `,"promiseDemo = Promise.resolve('1');",`
    `,"//html",`
    `,'<span [nb-r-str]="promiseDemo"></span>',`
  `))},dependencies:[B],changeDetection:0});let o=i;return o})();var I=[{path:"",component:D}],A=(()=>{let i=class i{};i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=v({type:i}),i.\u0275inj=b({imports:[f,F,x.forChild(I)]});let o=i;return o})();export{A as RStrDemoModule};
