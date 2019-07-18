import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { AngularFirestore } from '@angular/fire/firestore';

/*
  Generated class for the ProviderMonitoringProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderMonitoringProvider {

  constructor(public http: HttpClient, private firestore: AngularFirestore) {
    console.log('Hello ProviderMonitoringProvider Provider');
  }
  get() {
    return this.firestore.collection('Monitoring').snapshotChanges();
  }
 
  update(recordID,record){
    this.firestore.doc('Monitoring/' + recordID).update(record);
  }
 
  delete(record_id) {
    this.firestore.doc('Monitoring/' + record_id).delete();
  }

  create(record) {
    return this.firestore.collection('Monitoring').add(record);
  }
 
}
