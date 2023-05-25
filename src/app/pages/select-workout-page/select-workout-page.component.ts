import { Component, OnInit } from '@angular/core';
import { addDoc, collection, collectionData, CollectionReference, Firestore } from '@angular/fire/firestore';
import { take } from 'rxjs';
import { Exercise } from 'src/app/shared/interfaces/app.interface';

@Component({
  selector: 'app-select-workout',
  templateUrl: './select-workout-page.component.html',
  styleUrls: ['./select-workout-page.component.scss']
})
export class SelectWorkoutPageComponent implements OnInit {

  collectionInstance: CollectionReference = collection(this.firestore, 'exercises')

  constructor(
    private firestore: Firestore
  ) {}

  ngOnInit(): void {
    
  }

  saveStuff() {
    const exercise: Exercise = {
      id: 'nowe_cwiczenie' + Date.now(),
      name: 'Nowe Ćwiczenie',
      imageUrl: '',
      sets: 3,
      repMax: 12,
      repMin: 6
    }
    addDoc(this.collectionInstance, exercise);
  }

  loadStuff() {
    collectionData(this.collectionInstance, {idField: 'id'})
    .pipe(
      take(1)
    )
    .subscribe(
      res => console.log("RES ::: ", res)
    )
  }

}
