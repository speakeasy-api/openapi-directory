import { SpeakeasyBase } from "../../../internal/utils";
import { RampResponse } from "./rampresponse";
export declare class GETRampsBySubscriptionKeyResponseTypeReasons extends SpeakeasyBase {
    /**
     * The error code of response.
     *
     * @remarks
     *
     */
    code?: string;
    /**
     * The detail information of the error response
     *
     * @remarks
     *
     */
    message?: string;
}
export declare class GETRampsBySubscriptionKeyResponseType extends SpeakeasyBase {
    /**
     * The Id of the process that handle the operation.
     *
     * @remarks
     *
     */
    processId?: string;
    ramps?: RampResponse[];
    reasons?: GETRampsBySubscriptionKeyResponseTypeReasons[];
    /**
     * Indicates whether the call succeeded.
     *
     * @remarks
     *
     */
    success?: boolean;
}
