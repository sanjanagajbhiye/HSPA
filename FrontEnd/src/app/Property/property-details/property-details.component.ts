import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
public propertyId : number = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.propertyId = this.route.snapshot.params['id']; //id => casesensitive from route/ path added in app.module.ts
  }

}
