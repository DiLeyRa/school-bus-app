import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

declare var H:any;



@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {
    private platform: any;

      @ViewChild("map")
      public mapElement: ElementRef;

    public constructor() {
      this.platform = new H.service.Platform({
          "app_id": "EmLr27hwIitMqx8wppBZ",
          "app_code": "DNJEPETR0FKisPTrrPBW5g"
      });
  }

  public ngOnInit() { }

  public ngAfterViewInit() {
    let defaultLayers = this.platform.createDefaultLayers();
    let map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.normal.map,
          {
            zoom: 16,
            center: { lat: 19.4056085, lng:  -99.1674879},
          }
      );
      var icon = new H.map.Icon('https://raw.githubusercontent.com/DiLeyRa/school-bus-app/master/src/assets/images/place.png');
      var marker = new H.map.Marker({ lat: 19.4056085, lng: -99.1674879}, { icon: icon });

      map.addObject(marker);


  }

}
