import { Component, OnInit, Input } from '@angular/core';

export interface PersonalUser {
  basicUser: {
    profile: {
      name:         string,
      profileImage: string,
      coverImage:   string,
      message:      string,
      bio:          string,
      cv:           string,
      interests:    string
    },
    jobs_applications: Array<any>
  }
}

@Component({
  selector: 'app-personal-user-profile-component',
  templateUrl: './personal-user-profile-component.html',
  styleUrls: ['./personal-user-profile-component.scss']
})

export class PersonalUserProfileUIComponent implements OnInit {
  @Input()
  personalUser: PersonalUser;

  constructor() { }

  ngOnInit(): void {}
}
