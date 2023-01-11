import { SpeakeasyBase } from "../../../internal/utils";
import { RampMetrics } from "./rampmetrics";
export declare class GetRampMetricsByRampNumberResponseTypeReasons extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class GetRampMetricsByRampNumberResponseType extends SpeakeasyBase {
    processId?: string;
    rampMetrics?: RampMetrics;
    reasons?: GetRampMetricsByRampNumberResponseTypeReasons[];
    success?: boolean;
}
