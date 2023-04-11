import { SpeakeasyBase } from "../../../internal/utils";
import { RampMetrics } from "./rampmetrics";
export declare class GETRampMetricsByRampNumberResponseTypeReasons extends SpeakeasyBase {
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
export declare class GETRampMetricsByRampNumberResponseType extends SpeakeasyBase {
    /**
     * The Id of the process that handle the operation.
     *
     * @remarks
     *
     */
    processId?: string;
    rampMetrics?: RampMetrics;
    reasons?: GETRampMetricsByRampNumberResponseTypeReasons[];
    /**
     * Indicates whether the call succeeded.
     *
     * @remarks
     *
     */
    success?: boolean;
}
