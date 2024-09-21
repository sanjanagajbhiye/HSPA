import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
public propertyId : number = 0;
  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    const id = 'id';
    //this.propertyId = Number(this.route.snapshot.params[id]); //id => casesensitive from route/ path added in app.module.ts
    //this.propertyId = this.route.snapshot.params['id']; //id => casesensitive from route/ path added in app.module.ts
    this.propertyId = +this.route.snapshot.params[id]; 

    this.route.params.subscribe(
      (params)=>{
        this.propertyId = +params[id]; // to convert it to a number
      }

    );
  }

  onSelectNext(){
    this.propertyId += 1;
    this.router.navigate(['property-detail/' + this.propertyId])
  }

}
