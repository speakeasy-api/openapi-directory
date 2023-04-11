import { SpeakeasyBase } from "../../../internal/utils";
import { ActionSubscribeCreditMemo } from "./actionsubscribecreditmemo";
import { ActionSubscribeCreditMemoItem } from "./actionsubscribecreditmemoitem";
export declare class ActionSubscribeCreditMemoData extends SpeakeasyBase {
    /**
     * Container for credit memos.
     *
     * @remarks
     *
     * **Note**: This field is only available if you have the Invoice Settlement feature enabled and set the `X-Zuora-WSDL-Version` request header to `107` or later.
     *
     */
    creditMemo?: ActionSubscribeCreditMemo;
    creditMemoItem?: ActionSubscribeCreditMemoItem[];
}
