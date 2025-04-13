import { Component } from '@angular/core';
import { TripVisualizerComponent } from './components/trip-visualizer/trip-visualizer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TripVisualizerComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}


