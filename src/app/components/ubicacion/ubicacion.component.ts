import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

declare var H: any;

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
            zoom: 10,
            center: { lat: 19.4978, lng:  -99.1269 }
        }
    );
}

}
