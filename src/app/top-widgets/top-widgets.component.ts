import { Component } from '@angular/core';
import {
  faMapMarkerAlt,
  faStore,
  faBoxes,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.css']
})
export class TopWidgetsComponent {

  faLocation =  faMapMarkerAlt
  faShop = faStore;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;

}
