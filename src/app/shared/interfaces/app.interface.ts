export interface Exercise {
    id: string;
    name: string;
    imageUrl: string | null;
    sets: number;
    repMin: number;
    repMax: number;
 }

 export interface Workout {
    id: string;
    name: string;
    imageUrl: string;
    exercises: Exercise[]
 }