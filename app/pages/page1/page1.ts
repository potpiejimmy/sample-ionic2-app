import {Page} from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {

  constructor() {

  }
  
  scan() {
      BarcodeScanner.scan().then((result) => {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      }, 
      (error) => {
          alert("Scanning failed: " + error);
      }
   );
  }
}
