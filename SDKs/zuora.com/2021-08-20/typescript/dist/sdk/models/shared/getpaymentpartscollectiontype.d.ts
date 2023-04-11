import { SpeakeasyBase } from "../../../internal/utils";
import { GETPaymentPartTypewithSuccess } from "./getpaymentparttypewithsuccess";
export declare class GETPaymentPartsCollectionType extends SpeakeasyBase {
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Container for payment parts.
     *
     * @remarks
     *
     */
    parts?: GETPaymentPartTypewithSuccess[];
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
}
