import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas')
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;

  drawLine(n) {
    this.ctx.moveTo(n, n);
    this.ctx.lineTo(100, 100);
    this.ctx.stroke();
  }

  drawCircle() {
    this.ctx.beginPath();
    this.ctx.arc(100, 100, 100, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  drawRect() {
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(0, 0, 100, 100);
  }

  clearRect() {
    this.ctx.clearRect(0, 0, 400, 400);
  }

  setWidth(width: string) {
    this.canvas.nativeElement.width = +width;
  }

  setHeight(height: string) {
    this.canvas.nativeElement.height = +height;
  }

  constructor() {}

  ngOnInit() {
   
  }

  private setCanvasCtx() {
    this.canvas.nativeElement.width = window.innerWidth;
    this.canvas.nativeElement.height = window.innerHeight;
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }

  ngAfterViewInit() {
    this.setCanvasCtx();
  }
}
