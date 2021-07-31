import { Component, OnInit } from '@angular/core';
import { ballMovementAnimation } from '../../animations/animateBall';

@Component({
  selector: 'app-moving-ball',
  templateUrl: './moving-ball.component.html',
  styleUrls: ['./moving-ball.component.css'],

  animations: [ballMovementAnimation]
})
export class MovingBallComponent implements OnInit {

  ballPosition = 'false';

  constructor() { }

  ngOnInit(): void {
  }

  toggleBall() {
    this.ballPosition = (this.ballPosition == 'false') ? 'true' : 'false';
  }

}
