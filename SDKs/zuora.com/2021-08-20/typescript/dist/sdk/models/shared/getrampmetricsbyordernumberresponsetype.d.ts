import { SpeakeasyBase } from "../../../internal/utils";
import { OrderRampMetrics } from "./orderrampmetrics";
export declare class GetRampMetricsByOrderNumberResponseTypeReasons extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class GetRampMetricsByOrderNumberResponseType extends SpeakeasyBase {
    processId?: string;
    rampMetrics?: OrderRampMetrics[];
    reasons?: GetRampMetricsByOrderNumberResponseTypeReasons[];
    success?: boolean;
}
