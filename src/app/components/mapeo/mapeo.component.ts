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
              zoom: 10,
              center: { lat: 19.4978, lng:  -99.1269 }
          }
      );
  }

  public goBack() {
    this.router.navigate(['/ruta']);

  }

}
