import { SpeakeasyBase } from "../../../internal/utils";
import { Payment } from "./payment";
export declare class Transaction extends SpeakeasyBase {
    /**
     * Indicates whether transaction is active.
     */
    isActive: boolean;
    /**
     * Merchant name.
     */
    merchantName: string;
    /**
     * Array with information on each payment for the order.
     */
    payments: Payment[];
    /**
     * Transaction ID.
     */
    transactionId: string;
}
