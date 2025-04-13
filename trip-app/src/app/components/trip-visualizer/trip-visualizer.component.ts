import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { TripService } from '../../services/trip.service';
import { Trip } from '../../models/trip.model';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-trip-visualizer',
  standalone: true,
  imports: [CommonModule,FormsModule], 
  templateUrl: './trip-visualizer.component.html',
  styleUrls: ['./trip-visualizer.component.scss']
})
export class TripVisualizerComponent {
  start = '';
  end = '';
  

  constructor(public tripService: TripService) {}

  get trips(): Trip[] {
    return this.tripService.getTrips();
  }

  addTrip(): void {
    if (this.start && this.end) {
      this.tripService.addTrip(this.start, this.end);
      this.start = '';
      this.end = '';
    }
  }

  reset(): void {
    this.tripService.reset();
  }
  getColorClass(trip: Trip): string {
    if (trip.level === 2) return 'orange';
    if (trip.isArrow) return 'blue';
    return 'purple';
  }
}
