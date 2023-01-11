import { Component } from "@angular/core";
import transItems from './transactions.json'

@Component({
  selector: "transactions-comp",
  template: ` <table class="transactionHistory">
    <thead class="thead">
    <tr class="tr">
           <th class="th">Type</th>
           <th class="th">Amount</th>
           <th class="th">Currency</th>
    </tr>
    </thead>
    <tbody>
        <tr *ngFor='let item of items'>
            <td class="td">{{item.type}}</td>
            <td class="td">{{item.amount}}</td>
            <td class="td">{{item.currency}}</td>
        </tr>
    </tbody>
  </table> `,
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
    items:Array<object> = transItems;
}

// <table>
//       <thead>
//         <tr className="tr">
//           <th>Type</th>
//           <th>Amount</th>
//           <th>Currency</th>
//         </tr>
//       </thead>
//       <tbody>
//         {items.map(item => {
//           return (
//             <tr>
//               <td>{item.type}</td>
//               <td>{item.amount}</td>
//               <td>{item.currency}</td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
