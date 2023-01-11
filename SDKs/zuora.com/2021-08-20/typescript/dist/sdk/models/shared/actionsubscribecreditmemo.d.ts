import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for credit memos.
 *
 * **Note**: This field is only available if you have the Invoice Settlement feature enabled and set the `X-Zuora-WSDL-Version` request header to `107` or later.
 *
**/
export declare class ActionSubscribeCreditMemo extends SpeakeasyBase {
    taxAmount?: number;
    totalAmount?: number;
    totalAmountWithoutTax?: number;
}
