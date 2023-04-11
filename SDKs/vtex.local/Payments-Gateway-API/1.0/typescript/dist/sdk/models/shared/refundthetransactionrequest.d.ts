import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This field is filled with the content of the cart of the transaction, which can be obtained using [Get Orders](https://developers.vtex.com/vtex-rest-api/reference/orders#getorder) or [Transaction Details](https://developers.vtex.com/vtex-rest-api/reference/transaction-process#transactiondetails) endpoints. It should only be included for transactions with split payment.
 */
export declare class RefundthetransactionRequestMinicart extends SpeakeasyBase {
    freight?: number;
    items?: any[];
    tax?: number;
}
export declare class RefundthetransactionRequest extends SpeakeasyBase {
    /**
     * This field is filled with the content of the cart of the transaction, which can be obtained using [Get Orders](https://developers.vtex.com/vtex-rest-api/reference/orders#getorder) or [Transaction Details](https://developers.vtex.com/vtex-rest-api/reference/transaction-process#transactiondetails) endpoints. It should only be included for transactions with split payment.
     */
    minicart?: RefundthetransactionRequestMinicart;
    /**
     * Value of the purchase.
     */
    value: number;
}
