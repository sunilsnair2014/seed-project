import {Component} from "@angular/core";
/**
 * Created by pachu on 10/9/2017.
 */

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .author{
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config{
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;       
        }
     `]
})
export class MessageComponent {

}
