import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tpl-content-demo',
    loadChildren: () =>
      import('./tpl-content-demo/tpl-content-demo.module').then(m => m.TplContentDemoModule),
  },
  {
    path: 'r-str-demo',
    loadChildren: () => import('./r-str-demo/r-str-demo.module').then(m => m.RStrDemoModule),
  },
  {
    path: 'placeholder-str-demo',
    loadChildren: () =>
      import('./placeholder-str-demo/placeholder-str-demo.module').then(
        m => m.PlaceholderStrDemoModule
      ),
  },
  {
    path: 'img-demo',
    loadChildren: () => import('./img-demo/img-demo.module').then(m => m.ImgDemoModule),
  },
  {
    path: 'standalone-demo',
    loadChildren: () =>
      import('./standalone-demo/standalone-demo-routing').then(m => m.standaloneRoutes),
  },
  {
    path: 'call-fn-demo',
    loadChildren: () =>
      import('./call-fn-demo/call-fn-demo.component').then(m => m.callFnDemoRoutes),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
