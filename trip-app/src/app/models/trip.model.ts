export interface Trip {
    start: string;
    end: string;
    level: number;
    isArrow: boolean;
    id: number;
    direction?: 'up' | 'down';
  }