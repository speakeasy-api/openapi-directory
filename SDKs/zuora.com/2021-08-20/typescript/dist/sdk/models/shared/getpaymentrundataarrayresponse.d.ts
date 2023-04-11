import { SpeakeasyBase } from "../../../internal/utils";
import { GETPaymentRunDataElementResponse } from "./getpaymentrundataelementresponse";
export declare class GETPaymentRunDataArrayResponse extends SpeakeasyBase {
    /**
     * Container for payment run data. Each element in the array is a record processed by the payment run.
     *
     * @remarks
     *
     */
    data?: GETPaymentRunDataElementResponse[];
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
