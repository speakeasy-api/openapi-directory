import { SpeakeasyBase } from "../../../internal/utils";
import { RampIntervalMetrics } from "./rampintervalmetrics";
export declare class RampMetrics extends SpeakeasyBase {
    description?: string;
    discountTcb?: number;
    discountTcv?: number;
    grossTcb?: number;
    grossTcv?: number;
    intervals?: RampIntervalMetrics[];
    name?: string;
    netTcb?: number;
    netTcv?: number;
    number?: string;
}
