import { SpeakeasyBase } from "../../../internal/utils";
import { GETPaymentItemPartTypewithSuccess } from "./getpaymentitemparttypewithsuccess";
export declare class GETPaymentItemPartCollectionType extends SpeakeasyBase {
    /**
     * Container for payment part items.
     *
     * @remarks
     *
     */
    itemParts?: GETPaymentItemPartTypewithSuccess[];
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
