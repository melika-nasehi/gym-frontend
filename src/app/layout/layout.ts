import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.html',
})
export class Layout {}
