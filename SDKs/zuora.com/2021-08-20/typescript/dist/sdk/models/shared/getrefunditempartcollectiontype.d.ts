import { SpeakeasyBase } from "../../../internal/utils";
import { GETRefundItemPartTypewithSuccess } from "./getrefunditemparttypewithsuccess";
export declare class GETRefundItemPartCollectionType extends SpeakeasyBase {
    /**
     * Container for refund part items.
     *
     * @remarks
     *
     */
    itemParts?: GETRefundItemPartTypewithSuccess[];
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
}
