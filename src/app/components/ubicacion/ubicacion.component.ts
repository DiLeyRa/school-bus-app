import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { AuthService } from '../../services/auth.service';

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

  public constructor(
    public authService: AuthService
  ) {
      
    this.platform = new H.service.Platform({
        "app_id": "EmLr27hwIitMqx8wppBZ",
        "app_code": "DNJEPETR0FKisPTrrPBW5g",
        useHTTPS: true
    });
}

public ngOnInit() { }

public ngAfterViewInit() {
    let pixelRatio = window.devicePixelRatio || 1;
    let defaultLayers = this.platform.createDefaultLayers({
        tileSize: pixelRatio === 1 ? 256 : 512,
        ppi: pixelRatio === 1 ? undefined : 320
    });
    let map = new H.Map(
        this.mapElement.nativeElement,
        defaultLayers.normal.map, {pixelRatio
        : pixelRatio});

        let behavior = new H.behavior(new H.ma)

        let ui = H.ui.UI.createDefault(map, defaultLayers);

        this.authService.moveMapBerlin(map);
     
}

}

