import { Component, Input } from '@angular/core';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-check-circle',
  templateUrl: 'check-circle.component.html',
  styleUrls: ['check-circle.component.css']
})
export class CheckCircleComponent {
  faCheckCircle = faCheckCircle;
  faCircle = faCircle;
  @Input() isChecked: boolean;
  onClick() {
    this.isChecked = !this.isChecked;
  }
}
