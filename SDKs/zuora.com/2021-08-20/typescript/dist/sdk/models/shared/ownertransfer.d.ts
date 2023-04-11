import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an order action of type `OwnerTransfer`.
 *
 * @remarks
 *
 * **Note:** The Owner Transfer feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
 *
 */
export declare class OwnerTransfer extends SpeakeasyBase {
    /**
     * The account number of the account that the subscription is being transferred to.
     *
     * @remarks
     *
     */
    destinationAccountNumber?: string;
    /**
     * The account number of the invoice owner account that the subscription is being transferred to.
     *
     * @remarks
     *
     */
    destinationInvoiceAccountNumber?: string;
}
