import { NgModule } from '@angular/core';
import { DonSanitizerPipe } from './don-sanitizer.pipe';



@NgModule({
  declarations: [
    DonSanitizerPipe
  ],
  exports:[DonSanitizerPipe]
})
export class PipesModule { }
