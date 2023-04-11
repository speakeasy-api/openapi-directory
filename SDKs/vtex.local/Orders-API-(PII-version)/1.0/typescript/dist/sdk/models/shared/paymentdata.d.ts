import { SpeakeasyBase } from "../../../internal/utils";
import { Transaction } from "./transaction";
export declare class PaymentData extends SpeakeasyBase {
    /**
     * Array with information on each transaction of the order.
     */
    transactions: Transaction[];
}
