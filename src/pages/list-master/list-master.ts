import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Movies } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  public items: any;

  constructor(public navCtrl: NavController, public movies: Movies, public modalCtrl: ModalController) {
  }


  ionViewDidLoad(){
    this.movies.movieList("cate").subscribe((resp) => {
      console.log('서버접속이 성공');
      console.log(resp);
      this.items = resp;
    }, (err) => {
      console.log('서버접속이 실패됨');
      console.log(err);
    });
  }

  openItem(_item: any) {
    console.log(_item);
    this.navCtrl.push('ItemDetailPage', {
      item: _item
    });
  }

  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        //this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    //this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */


  // ionViewDidLoad(){
  //   this.serverProvider.get('/movies').then((response:any)=>{
  //       console.log(response);
  //       this.items=response;
  //   },(err)=>{
  //       console.log('서버접속이 실패됨');
  //   });
  // }




  makeFile(file){
    let img_size = "-66x66";
    let file_nm: string = file.replace(".jpg", img_size+".jpg").replace(".png", img_size+".png").replace(".jpeg",img_size+".jpeg" );
    return file_nm
  }


}
