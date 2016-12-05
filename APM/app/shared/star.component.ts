import {Component, Input, OnChanges, 
        Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges() {
        // changes.prop contains the old and the new value...
        this.starWidth = this.rating * 86 / 5;

        //console.log(this.starWidth);
    }
    //changes: SimpleChanges 는 ngOnChanges의 아규먼트이다. 생략해도 문제는 없어 보인다.

    onClick(){
        this.ratingClicked.emit(`This rating ${this.rating} was clicked!`);
    }
}
