import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { timer, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { createAnimation } from '@ionic/core';

enum Stage { START, MEMORIZE, MASK, SELECT, CORRECT, INCORRECT, DONE }

@Component({
  selector: 'app-memory-match',
  templateUrl: './memory-match.component.html',
  styleUrls: ['./memory-match.component.scss'],
})
export class MemoryMatchComponent implements OnInit {
  @Input() facePaths : string[];
  @Output() finished = new EventEmitter<[number, number]>();

  constructor() { }

  ngOnInit() {
    // Init list of faces
    this.randomFaces = [];
    for (let i = 0; i < this.facePaths.length; i++) {
      this.randomFaces.push(this.facePaths[i]);
      this.randomFaces.push(this.facePaths[i]);
    }
    // Shuffle the faces
    for (let i = this.randomFaces.length - 1; i > 0; i -= 1) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.randomFaces[i];
      this.randomFaces[i] = this.randomFaces[j];
      this.randomFaces[j] = temp;
    }
  }

  ngOnDestroy() {
    if (this.interval) {
      this.interval.unsubscribe();
    }
    if (this.timer) {
      this.timer.unsubscribe();
    }
  }

  Stage = Stage;  
  stage : Stage = Stage.START;
  score : number = 0;
  promise : number = 0;
  memorizeTime : number = 10;
  timeRemaining : number = null;
  mask : string = 'assets/background_imgs/mask1.png';
  interval : any;
  timer : any;

  randomFaces : string[];
  correctFaces : string[] = [];
  incorrectFaces : number[] = [];
  selectedFace : number = null;
  progressPercent : number = 0;

  async clickFace(face : number) {
    if (this.stage != Stage.START && this.stage != Stage.MEMORIZE && this.stage != Stage.MASK) { // Waiting for feedback
      if (this.stage == Stage.CORRECT || this.stage == Stage.INCORRECT) {
        this.promise++;
        this.selectedFace = null;
        this.resetSelected();
      }
      if (this.correctFaces.indexOf(this.randomFaces[face]) < 0 && face != this.selectedFace) { // Click on a valid face

        if (this.selectedFace == null) { // Select first face
          this.selectedFace = face;

        } else if (this.randomFaces[face] == this.randomFaces[this.selectedFace]) { // Correct
          this.correctFaces.push(this.randomFaces[face]);
          this.progressPercent = this.correctFaces.length/this.facePaths.length;
          this.stage = Stage.CORRECT;
          await this.waitForFeedback();

        } else { // Incorrect
          this.incorrectFaces.push(this.selectedFace);
          this.incorrectFaces.push(face);
          this.score -= 0.25;
          this.stage = Stage.INCORRECT;
          await this.waitForFeedback();
        }
      }
    }
  }

  imageIsDisplayed(index : number) {
    return (
      this.stage == Stage.MEMORIZE ||
      this.stage == Stage.MASK ||
      this.incorrectFaces.indexOf(index) > -1 ||
      this.correctFaces.indexOf(this.randomFaces[index]) > -1 ||
      this.selectedFace == index
    )
  }

  resetSelected() {
    this.incorrectFaces = [];
    this.stage = Stage.SELECT;
  }

  async waitForFeedback() {
    this.selectedFace = null;
    let promise = this.promise
    await new Promise( resolve => setTimeout(resolve, 2000) );
    promise == this.promise ? this.resetSelected() : 0;
  }

  clickDone() {
    if (this.correctFaces.length == this.facePaths.length) {
      this.promise++;
      this.stage = Stage.DONE;
      this.score = Math.ceil(this.score) + this.facePaths.length;
    }
  }

  startMemorizeTimer() {
    this.timeRemaining = this.memorizeTime;
    this.stage = Stage.MEMORIZE;
    this.timer = timer(this.timeRemaining * 1000).subscribe(() => {
      this.startMaskTimer();
    });
    this.interval = interval(1000)
      .pipe(
        takeUntil(timer(this.timeRemaining * 1000))
      )
      .subscribe(async () => {
        let inflate = createAnimation()
        .addElement(document.querySelector('.time-left'))
        .fill('none')
        .duration(100)
        .keyframes([
          { offset: 0, transform: 'scale(1, 1)' },
          { offset: 0.5, transform: 'scale(1.5, 1.5)' },
          { offset: 1, transform: 'scale(2, 2)' }
        ]);
        this.timeRemaining--;
        if (this.timeRemaining > this.memorizeTime - 2 || this.timeRemaining < 4) {
          await inflate.play();
        }
      });
  }

  startMaskTimer() {
    this.stage = Stage.MASK;
    this.timer = timer(2000).subscribe(() => {
      this.stage = Stage.SELECT;
    });
  }
}