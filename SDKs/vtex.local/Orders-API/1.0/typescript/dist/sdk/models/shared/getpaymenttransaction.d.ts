import { SpeakeasyBase } from "../../../internal/utils";
import { Payment1 } from "./payment1";
/**
 * OK
 */
export declare class GetPaymenttransaction extends SpeakeasyBase {
    /**
     * If it is an active transaction (`true`) or not (`false`).
     */
    isActive: boolean;
    /**
     * Transaction merchant's name.
     */
    merchantName: string;
    /**
     * Payments' details object.
     */
    payments: Payment1[];
    /**
     * Transaction status.
     */
    status: string;
    /**
     * Transaction ID.
     */
    transactionId: string;
}
