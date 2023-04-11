import { SpeakeasyBase } from "../../../internal/utils";
import { Transaction } from "./transaction";
/**
 * Object with information about the payment.
 */
export declare class PaymentData extends SpeakeasyBase {
    /**
     * Array with information about Gift Cards.
     */
    giftCards?: any[];
    /**
     * Information about financial transactions.
     */
    transactions: Transaction[];
}
