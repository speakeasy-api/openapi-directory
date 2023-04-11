import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for credit memos.
 *
 * @remarks
 *
 * **Note**: This field is only available if you have the Invoice Settlement feature enabled and set the `X-Zuora-WSDL-Version` request header to `107` or later.
 *
 */
export declare class ActionSubscribeCreditMemo extends SpeakeasyBase {
    /**
     * Tax amount on the credit memo.
     *
     * @remarks
     *
     */
    taxAmount?: number;
    /**
     * Credit memo amount.
     *
     * @remarks
     *
     */
    totalAmount?: number;
    /**
     * Credit memo amount minus tax.
     *
     * @remarks
     *
     */
    totalAmountWithoutTax?: number;
}
