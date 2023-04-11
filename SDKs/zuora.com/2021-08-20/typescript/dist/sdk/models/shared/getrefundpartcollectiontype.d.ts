import { SpeakeasyBase } from "../../../internal/utils";
import { RefundPartResponseTypewithSuccess } from "./refundpartresponsetypewithsuccess";
export declare class GETRefundPartCollectionType extends SpeakeasyBase {
    /**
     * Container for refund parts.
     *
     * @remarks
     *
     */
    parts?: RefundPartResponseTypewithSuccess[];
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
}
