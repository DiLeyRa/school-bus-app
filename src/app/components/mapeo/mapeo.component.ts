import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
declare var H: any;

@Component({
  selector: 'app-mapeo',
  templateUrl: './mapeo.component.html',
  styleUrls: ['./mapeo.component.css']
})
export class MapeoComponent implements OnInit {


  private platform: any;


    @ViewChild("map")
    public mapElement: ElementRef;
  public constructor(
      public router: Router

  ) {
    this.platform = new H.service.Platform({
        "app_id": "EmLr27hwIitMqx8wppBZ",
        "app_code": "DNJEPETR0FKisPTrrPBW5g"
    });
  }

  ngOnInit() {
  }

  public ngAfterViewInit() {

    let defaultLayers = this.platform.createDefaultLayers();
    let map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.normal.map,
          {
            zoom: 14,
            center: { lat: 19.4045425, lng:  -99.1662047},
          }
      );
      var icon = new H.map.Icon('https://raw.githubusercontent.com/DiLeyRa/school-bus-app/master/src/assets/images/place.png');
      var marker = new H.map.Marker({ lat: 19.4045425, lng: -99.1662047}, { icon: icon });

      map.addObject(marker);


  }

  public goBack() {
    this.router.navigate(['/ruta']);

  }



}
