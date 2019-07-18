import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database'; 
import { ProviderMonitoringProvider } from './../../providers/provider-monitoring/provider-monitoring';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  shoppingItems: FirebaseListObservable<any[]>;
  newItem = '';

  sensor: any;
 
  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider,private sensorService: ProviderMonitoringProvider ) {
    
  }
 
  ngOnInit() {
    this.sensorService.get().subscribe(data => {
      this.sensor = data.map(e => {
        return {
          Sensor : e.payload.doc.id
        }
      })

      console.log(this.sensor);
    })
  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }
 
  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }

}
