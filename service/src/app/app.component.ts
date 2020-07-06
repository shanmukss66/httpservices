import { Component , Input} from '@angular/core';
import { post, photos } from './models/modelstruct.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'service';
@Input() comingdata:post ;


  
  
}

