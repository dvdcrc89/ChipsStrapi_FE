import { Component, OnInit, Input } from '@angular/core';

export interface IMe {
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
  selector: 'app-user-profile-ui',
  templateUrl: './user-profile-ui.component.html',
  styleUrls: ['./user-profile-ui.component.scss']
})
export class UserProfileUIComponent implements OnInit {
  @Input()
  me: IMe;

  constructor() { }

  ngOnInit(): void {
  }

}
