import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// type User = {
//    id: string;
//    avatar: string;
//     name: string
//   }



@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() selectUser = new EventEmitter<string>();
  // selectUser = output<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath= computed(() => {
  //   return 'assets/users/' + this.avatar();
  // })

  get imagePath() {
    return 'assets/users/' + this.user.avatar; 
  }

  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }
}
