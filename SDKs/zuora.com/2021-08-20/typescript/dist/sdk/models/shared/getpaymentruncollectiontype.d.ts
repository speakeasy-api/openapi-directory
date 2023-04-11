import { SpeakeasyBase } from "../../../internal/utils";
import { GETPaymentRunType } from "./getpaymentruntype";
export declare class GETPaymentRunCollectionType extends SpeakeasyBase {
    /**
     * The URL for requesting the next page of the response, if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Container for payment runs.
     *
     * @remarks
     *
     */
    paymentRuns?: GETPaymentRunType[];
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
