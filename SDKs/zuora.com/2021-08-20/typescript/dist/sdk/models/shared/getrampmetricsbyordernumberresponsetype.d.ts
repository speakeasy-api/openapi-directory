import { SpeakeasyBase } from "../../../internal/utils";
import { OrderRampMetrics } from "./orderrampmetrics";
export declare class GETRampMetricsByOrderNumberResponseTypeReasons extends SpeakeasyBase {
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
export declare class GETRampMetricsByOrderNumberResponseType extends SpeakeasyBase {
    /**
     * The Id of the process that handle the operation.
     *
     * @remarks
     *
     */
    processId?: string;
    rampMetrics?: OrderRampMetrics[];
    reasons?: GETRampMetricsByOrderNumberResponseTypeReasons[];
    /**
     * Indicates whether the call succeeded.
     *
     * @remarks
     *
     */
    success?: boolean;
}
