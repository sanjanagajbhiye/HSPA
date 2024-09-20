import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
selector:'add-property',
templateUrl:'add-property.component.html',
styleUrl:'add-property.component.css'
})

export class AddPropertyComponent implements OnInit{
    constructor(private router: Router){

    }

    ngOnInit(): void {
        
    }

    onBack(){
        this.router.navigate(['/']);
    }
}