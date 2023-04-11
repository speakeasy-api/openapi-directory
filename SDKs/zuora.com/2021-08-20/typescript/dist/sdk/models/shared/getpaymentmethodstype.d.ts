import { SpeakeasyBase } from "../../../internal/utils";
import { GETPaymentMethodType } from "./getpaymentmethodtype";
export declare class GETPaymentMethodsType extends SpeakeasyBase {
    /**
     * Container for one or more credit or debit card records:
     *
     * @remarks
     *
     */
    creditCards?: GETPaymentMethodType[];
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
