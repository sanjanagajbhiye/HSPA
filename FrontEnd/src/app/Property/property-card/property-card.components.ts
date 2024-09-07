import { Component } from "@angular/core";

@Component({
selector:'app-property-card',
templateUrl:'property-card.component.html',
styleUrl:'property-card.component.css'
})

export class PropertyCardComponent{
    //string interpolation
    Property: any = {
        "id":1,
        "price":120000,
        "Name":"Birla House",
        "Type":"House"

    }
}