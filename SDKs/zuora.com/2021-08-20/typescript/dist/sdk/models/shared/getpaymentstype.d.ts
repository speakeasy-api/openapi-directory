import { SpeakeasyBase } from "../../../internal/utils";
import { GETPaymentType } from "./getpaymenttype";
export declare class GETPaymentsType extends SpeakeasyBase {
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Information about one or more payments:
     *
     * @remarks
     *
     */
    payments?: GETPaymentType[];
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
