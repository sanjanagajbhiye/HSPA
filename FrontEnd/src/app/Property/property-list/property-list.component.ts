import { HttpClient } from '@angular/common/http';
import { HousingService } from '../../Services/housing.service';
import { Component, OnInit } from '@angular/core';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit{
  SellRent = 1;
 properties: Array<IProperty> = [];

  constructor(private route: ActivatedRoute, private housingService: HousingService){}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()){
      this.SellRent = 2;// means we are on rentb property url else we are on base url
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
        data=>{
                this.properties = data;
                console.log(data)
                //console.log(this.route.snapshot.url.toString())
               },
               error =>
               {
                console.log(error);
               }
               
    );
  }
}
