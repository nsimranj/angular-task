import { Component, OnInit } from '@angular/core';
import { template } from '@angular/core/src/render3';

//Status Template
enum Status {
  Recieved,
  Preparing,
  Ready
}

// Order template
export interface Order {
  name: string;
  address: string;
  items: { name: string, size: 'regular' | 'medium' | 'large', qty: number, price: number }[];
  status: Status;
}

@Component({
  selector: 'app-order-display',
  templateUrl: './order-display.component.html',
  styleUrls: ['./order-display.component.scss']
})
export class OrderDisplayComponent implements OnInit {

  //orders list
  orders: Order[] = [
    { name: 'Amy Winget', address: '12, Girinagar, Bengaluru', items: [{ name: 'Farm Fresh', qty: 2, size: 'medium', price: 220 }, { name: 'Margherita', qty: 1, size: 'regular', price: 109 }], status: Status.Recieved },
    { name: 'Sachin Mehra', address: '5, 4th main, AGS Layout, Ittamadu, Bengaluru', items: [{ name: 'Mushroom Masala', qty: 1, size: 'medium', price: 240 }], status: Status.Recieved },
    { name: 'Ravi', address: 'FF4, Mantri Springs, Whitefield, Bengaluru', items: [{ name: 'Golden Loaded Veggie', qty: 4, size: 'medium', price: 220 }, { name: 'Paneer Paprika', qty: 2, size: 'large', price: 315 }], status: Status.Recieved },
    { name: 'Akansha Mehta', address: '120, Jayanagar 4th Block, Bengaluru', items: [{ name: 'Margherita', qty: 1, size: 'regular', price: 109 }, { name: 'Pineapple Treat', qty: 1, size: 'regular', price: 114 }, { name: 'Mushroom Masala', qty: 1, size: 'regular', price: 120 }], status: Status.Recieved },
    { name: 'Manjunath Hegde', address: '148, Opp to SBI Bank, Jakkasandra, Bengaluru', items: [{ name: 'Farm Fresh', qty: 1, size: 'large', price: 220 }], status: Status.Ready },
    { name: 'Pia Sharma', address: '66, 3rd cross, 8th main road, BHCS Layout, Bengaluru', items: [{ name: 'Paneer Paprika', qty: 1, size: 'large', price: 315 }], status: Status.Recieved },
    { name: 'Uma Rao', address: '571, Shanti Nilaya, Race Course Road, Bengaluru', items: [{ name: 'Farm Fresh', qty: 2, size: 'medium', price: 220 }, { name: 'Golden Loaded Veggie', qty: 1, size: 'regular', price: 139 }], status: Status.Preparing },
    { name: 'Amy Winget', address: '12, Girinagar, Bengaluru', items: [{ name: 'Farm Fresh', qty: 2, size: 'medium', price: 220 }, { name: 'Margherita', qty: 1, size: 'regular', price: 109 }], status: Status.Recieved },
    { name: 'Sachin Mehra', address: '5, 4th main, AGS Layout, Ittamadu, Bengaluru', items: [{ name: 'Mushroom Masala', qty: 1, size: 'medium', price: 240 }], status: Status.Recieved },
    { name: 'Ravi', address: 'FF4, Mantri Springs, Whitefield, Bengaluru', items: [{ name: 'Golden Loaded Veggie', qty: 4, size: 'medium', price: 220 }, { name: 'Paneer Paprika', qty: 2, size: 'large', price: 315 }], status: Status.Recieved },
    { name: 'Akansha Mehta', address: '120, Jayanagar 4th Block, Bengaluru', items: [{ name: 'Margherita', qty: 1, size: 'regular', price: 109 }, { name: 'Pineapple Treat', qty: 1, size: 'regular', price: 114 }, { name: 'Mushroom Masala', qty: 1, size: 'regular', price: 120 }], status: Status.Recieved },
    { name: 'Manjunath Hegde', address: '148, Opp to SBI Bank, Jakkasandra, Bengaluru', items: [{ name: 'Farm Fresh', qty: 1, size: 'large', price: 220 }], status: Status.Ready },
    { name: 'Pia Sharma', address: '66, 3rd cross, 8th main road, BHCS Layout, Bengaluru', items: [{ name: 'Paneer Paprika', qty: 1, size: 'large', price: 315 }], status: Status.Recieved },
    { name: 'Uma Rao', address: '571, Shanti Nilaya, Race Course Road, Bengaluru', items: [{ name: 'Farm Fresh', qty: 2, size: 'medium', price: 220 }, { name: 'Golden Loaded Veggie', qty: 1, size: 'regular', price: 139 }], status: Status.Preparing }
  ];
  order: Order;

  constructor() { }

  ngOnInit() {
  }

  /**
   * @brief gets the total bill amount
   * @params index
   * @returns total bill amount
   */
  getTotal(index: number): number {
    return this.orders[index].items.reduce((tot, x) => tot + (x.qty * x.price), 0);
  }

  /**
   * @brief To display status string
   * @params index
   * @returns status as string
   */
  getStatusString(index: number): string {
    switch (this.orders[index].status) {
      case Status.Recieved: return 'Order Recieved';
      case Status.Preparing: return 'Preparing';
      case Status.Ready: return 'Ready to Serve';
    }
  }
  
  /**
   * @brief shows popup if the order is clicked and not the change Status button in the order view
   * @params event, index
   * @returns total bill amount
   */
  showOrderInfo(event, index: number): void {
    //if change status button, handled separately
    if (event.target.id == 'button' + index) {
      event.stopPropagation();
    }
    else {
      //populate the order to be sent to child component
      this.order = this.orders[index];
      window.location.href = "./#info"; //to open popup
    }
  }

}
