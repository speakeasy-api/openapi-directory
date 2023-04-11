import { SpeakeasyBase } from "../../../internal/utils";
import { Payment } from "./payment";
/**
 * Financial transaction details.
 */
export declare class Transaction extends SpeakeasyBase {
    /**
     * When this field is set as `true`, the payment is active, and when it is `false`, the payment is inactive.
     */
    isActive: boolean;
    /**
     * Name of the merchant that will receive the payment.
     */
    merchantName: string;
    /**
     * Detailed information about payment.
     */
    payments: Payment[];
    /**
     * ID of the transaction.
     */
    transactionId: string;
}
