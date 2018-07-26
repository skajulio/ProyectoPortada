import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rgb1:number;
  rgb2:number;
  rgb3:number;
  objectRGB:object;

  construirRGB(){
    this.rgb1 = Math.floor(Math.random()*255);
    this.rgb2 = Math.floor(Math.random()*255);
    this.rgb3 = Math.floor(Math.random()*255);
    console.log(this.rgb1, this.rgb2, this.rgb3);

    return `rgb(${this.rgb1}, ${this.rgb2}, ${this.rgb3})`;
  }

  enviarRGB(){
    this.objectRGB = {
      color1:this.rgb1,
      color2:this.rgb2,
      color3:this.rgb3      
    }
    return this.objectRGB;
  }
}
