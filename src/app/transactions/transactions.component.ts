import { Component } from "@angular/core";
import transItems from './transactions.json'

@Component({
  selector: "transactions-comp",
  template: ` <table>
    <thead>
    <tr>
           <th>Type</th>
           <th>Amount</th>
           <th>Currency</th>
    </tr>
    </thead>
    <tbody>
        <tr *ngFor='let item of items'>
            <td>{{item.type}}</td>
            <td>{{item.amount}}</td>
            <td>{{item.currency}}</td>
        </tr>
    </tbody>
  </table> `,
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
