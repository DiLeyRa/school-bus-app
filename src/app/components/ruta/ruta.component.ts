import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var H: any;

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {
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


