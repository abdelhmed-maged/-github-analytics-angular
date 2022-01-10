import { Component, Input } from '@angular/core';
import { Users } from 'src/app/api/model/users';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { UserDetailsModalComponent } from '../user-details-modal/user-details-modal.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent  {
  @Input() user: Users;
  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { }

  navigateToUserAccount(url: any) {
   window.open(url);
  }
  openUserDetailsModal(user: Users) {
    const initialState: ModalOptions = {
      class: 'modal-lg',
      initialState: {
        data: user,
        title: 'Modal with component'
      }
    };
    this.bsModalRef = this.modalService.show(UserDetailsModalComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
