import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('guestAddAnimationTrigger', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {

  guestCount: number;
  guestNameText: string;
  toRemoveInstruct: string;
  guestNamesBag = ["Default - Administrator"];


  constructor() { }

  ngOnInit() {
    this.guestCount = this.guestNamesBag.length;
    if (this.guestCount > 0 ) {
        this.toRemoveInstruct = "-Click name to delete entry";
    }

   
   
  }

    addGuest() {
      if (this.guestNameText !== undefined && this.guestNameText !== '' && this.guestNameText !== null) {
        this.guestNamesBag.push(this.guestNameText);
        this.guestNameText = '';
        this.guestCount = this.guestNamesBag.length;

        if (this.guestNamesBag.length > 0) {
          this.toRemoveInstruct = "-Click name to delete entry";
        }
        

      }

    }

    removeItem(i) {
      this.guestNamesBag.splice(i, 1);
      this.guestCount = this.guestNamesBag.length;
      if (this.guestCount === 0 ) {
        this.toRemoveInstruct = '';
      }


    }

}
