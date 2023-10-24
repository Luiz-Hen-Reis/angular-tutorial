import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  variable: number = 1;
  // private readonly variable2: number = 1;

  show = true;

  @Output() names: string[] = ['Lucas', ' Isaac', ' Juliana'];

  varChange() {
    this.variable++;
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  // ngOnChanges(): void {
  //   console.log('ngOnChanges');
  // }

  // ngOnInit(): void {
  //   console.log('ngOnInit');
  // }

  // ngDoCheck(): void {
  //   console.log('ngDoCheck');
  // }

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit');
  // }

  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked');
  // }

  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked');
  // }
}
