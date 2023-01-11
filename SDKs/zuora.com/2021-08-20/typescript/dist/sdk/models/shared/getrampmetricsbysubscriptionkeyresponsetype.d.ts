import { SpeakeasyBase } from "../../../internal/utils";
import { RampMetrics } from "./rampmetrics";
export declare class GetRampMetricsBySubscriptionKeyResponseTypeReasons extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class GetRampMetricsBySubscriptionKeyResponseType extends SpeakeasyBase {
    processId?: string;
    rampMetrics?: RampMetrics;
    reasons?: GetRampMetricsBySubscriptionKeyResponseTypeReasons[];
    success?: boolean;
}
