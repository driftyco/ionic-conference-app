import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { DarkModeService } from '../../providers/dark-mode.service';
import { darkStyle } from './map-dark-style';
import { from, combineLatest } from 'rxjs';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss']
})
export class MapPage implements AfterViewInit, OnDestroy {
  @ViewChild('mapCanvas', { static: true }) mapElement: ElementRef;
  mapMgmt$: any;
  constructor(
    public darkMode: DarkModeService,
    public confData: ConferenceData,
  ) {}

  ngAfterViewInit() {
    let map: any;
    this.mapMgmt$ = combineLatest(
      from(getGoogleMaps('AIzaSyB8pf6ZdFQj5qw7rc_HSGrhUwQKfIe9ICw')),
      this.confData.getMap(),
      this.darkMode.shouldDark
    )
    .subscribe(([googleMaps, mapData, shouldDark]: [any, any, boolean]) => {
      if (!map) {
      const mapEle = this.mapElement.nativeElement;
        map = new googleMaps.Map(mapEle, {
          center: mapData.find((d: any) => d.center),
          zoom: 16
        });
        mapData.forEach((markerData: any) => {
          const infoWindow = new googleMaps.InfoWindow({
            content: `<h5>${markerData.name}</h5>`
          });

          const marker = new googleMaps.Marker({
            position: markerData,
            map,
            title: markerData.name
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });
        googleMaps.event.addListenerOnce(map, 'idle', () => {
          mapEle.classList.add('show-map');
        });
      }
      let styles = shouldDark ? darkStyle : [];
      map.setOptions({ styles });
    });
  }
  ngOnDestroy(){
    this.mapMgmt$.unsubscribe()
  }
}

function getGoogleMaps(apiKey: string): Promise<any> {
  const win = window as any;
  const googleModule = win.google;
  if (googleModule && googleModule.maps) {
    return Promise.resolve(googleModule.maps);
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.31`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      const googleModule2 = win.google;
      if (googleModule2 && googleModule2.maps) {
        resolve(googleModule2.maps);
      } else {
        reject('google maps not available');
      }
    };
  });
}
