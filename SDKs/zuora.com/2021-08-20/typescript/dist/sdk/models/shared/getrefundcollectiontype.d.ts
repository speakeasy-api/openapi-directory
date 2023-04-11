import { SpeakeasyBase } from "../../../internal/utils";
import { GETRefundTypewithSuccess } from "./getrefundtypewithsuccess";
export declare class GETRefundCollectionType extends SpeakeasyBase {
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Container for refunds.
     *
     * @remarks
     *
     */
    refunds?: GETRefundTypewithSuccess[];
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
}
