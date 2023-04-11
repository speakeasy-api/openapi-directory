import { SpeakeasyBase } from "../../../internal/utils";
import { GETAPaymentGatwayResponse } from "./getapaymentgatwayresponse";
export declare class GETPaymentGatwaysResponse extends SpeakeasyBase {
    paymentgateways?: GETAPaymentGatwayResponse[];
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
}
