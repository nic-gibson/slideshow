import { Component, OnInit } from '@angular/core';
import { PresentationsService} from './presentations.service';
import { Presentation } from './presentation.model';

@Component({
  selector: 'slides-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.css']
})
export class PresentationsComponent implements OnInit {

  presentations: Presentation[];
  constructor(private presentationService: PresentationsService) {}

  _update_presentations(): void {
    this.presentations = this.presentationService.getPresentations();
  }

  ngOnInit(): void {
    this._update_presentations();
  }

}
