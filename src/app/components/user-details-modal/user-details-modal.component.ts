import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Repo, Repos, userDetail } from 'src/app/api/model/user-detail';
import { Users } from 'src/app/api/model/users';
import { UserDetailService } from 'src/app/services/user-detail.service';

@Component({
  selector: 'app-user-details-modal',
  templateUrl: './user-details-modal.component.html',
  styleUrls: ['./user-details-modal.component.scss']
})
export class UserDetailsModalComponent implements OnInit {
  title?: string;
  closeBtnName?: string;
  data: Users ;
  followers: Array<userDetail>;
  following: Array<userDetail>;
  repos: Repos

  constructor(public bsModalRef: BsModalRef,
              private userDetailsService: UserDetailService) {}

 
  ngOnInit() {
    if (this.data.login) {
      this.userDetailsService.getUserFollowers(this.data.login).subscribe((res:  Array<userDetail>) => this.followers = res);
      this.userDetailsService.getUserFollowing(this.data.login).subscribe((res: Array<userDetail>) => this.following = res);
      this.userDetailsService.getUserRepo(this.data.login).subscribe((res: Repos) => this.repos = res);
     }
  }

}
