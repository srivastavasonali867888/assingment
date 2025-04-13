import { Injectable } from '@angular/core';
import { Trip } from '../models/trip.model';

@Injectable({ providedIn: 'root' })
export class TripService {
  private trips: Trip[] = [];
  private tripId = 0;
  private level2Direction: 'up' | 'down' = 'up';


  getTrips(): Trip[] {
    return this.trips;
  }

  addTrip(start: string, end: string): void {
    start = start.trim().toUpperCase();
    end = end.trim().toUpperCase();
  
    let level = 1;
    let isArrow = false;
    let direction: 'up' | 'down' | undefined;
  
    const len = this.trips.length;
  
    if (len === 0) {
      // First trip is straight
      level = 1;
      isArrow = false;
    } else {
      const lastTrip = this.trips[len - 1];
  
      if (lastTrip.end === start) {
        // Continue trip chain
        level = 2;
        direction = this.level2Direction;
        this.level2Direction = this.level2Direction === 'up' ? 'down' : 'up';
        isArrow = false;
      } else {
        // Break in chain, add straight trip with arrow
        level = 1;
        isArrow = true;
      }
    }
  
    this.trips.push({ start, end, level, isArrow, direction, id: ++this.tripId });
  }
  
  
  

  reset(): void {
    this.trips = [];
    this.tripId = 0;
  }
}