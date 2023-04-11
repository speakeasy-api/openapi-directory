import { SpeakeasyBase } from "../../../internal/utils";
import { RampMetrics } from "./rampmetrics";
export declare class GETRampMetricsBySubscriptionKeyResponseTypeReasons extends SpeakeasyBase {
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
export declare class GETRampMetricsBySubscriptionKeyResponseType extends SpeakeasyBase {
    /**
     * The Id of the process that handle the operation.
     *
     * @remarks
     *
     */
    processId?: string;
    rampMetrics?: RampMetrics;
    reasons?: GETRampMetricsBySubscriptionKeyResponseTypeReasons[];
    /**
     * Indicates whether the call succeeded.
     *
     * @remarks
     *
     */
    success?: boolean;
}
