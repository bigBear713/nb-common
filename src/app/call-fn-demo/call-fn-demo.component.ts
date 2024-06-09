import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { NbCallFnPipe } from 'nb-common';
import { GTagService } from '../g-tag.service';


@Component({
  selector: 'app-call-fn-demo',
  standalone: true,
  imports: [NbCallFnPipe, FormsModule],
  templateUrl: './call-fn-demo.component.html',
  styleUrls: ['./call-fn-demo.component.css']
})
export class CallFnDemoComponent implements OnInit {

  val1 = 0;
  val2 = 0;

  valArr: number[] = [];

  code1 = `
    // template
    {{sum|nbCallFn:[val1,val2]}}
    // ts
    sum(valArr: number[]) {
      return valArr.reduce((result, cur) => {
        result += cur;
        return result;
      }, 0);
    }
  `;
  code2 = `
  // template
  {{sum|nbCallFn:valArr}}
  // ts
  sum(valArr: number[]) {
    return valArr.reduce((result, cur) => {
      result += cur;
      return result;
    }, 0);
  }
  updateValArr() {
    this.valArr = [...this.valArr];
  }
  `;
  code3 = `
  // template
  {{multiplyBy|nbCallFn:val1:val2}}
  // ts
  multiplyBy(val1: number, val2: number) {
    return val1 * val2;
  }
  `;

  constructor(
    private gtagService: GTagService
  ) {
    this.gtagService.trackPage({
      page_name: 'callFn Pipe',
    });
  }

  ngOnInit() {
  }

  sum(valArr: number[]) {
    return valArr.reduce((result, cur) => {
      result += cur;
      return result;
    }, 0);
  }

  multiplyBy(val1: number, val2: number) {
    return val1 * val2;
  }

  onValueChange(val: number, index: number) {
    this.valArr[index] = val;
  }

  updateValArr() {
    this.valArr = [...this.valArr];
  }

}

export const callFnDemoRoutes: Routes = [
  { path: '', component: CallFnDemoComponent }
];