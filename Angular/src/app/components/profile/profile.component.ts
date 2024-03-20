import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {


  userName: string = 'Alex';
  country: string = 'United States';
  language: string = 'English';

  contactMe() {
    // Implement contact logic here
    console.log('Contact button clicked');
  }

}
