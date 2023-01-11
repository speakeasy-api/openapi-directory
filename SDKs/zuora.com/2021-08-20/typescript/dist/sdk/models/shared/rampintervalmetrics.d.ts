import { SpeakeasyBase } from "../../../internal/utils";
import { RampIntervalChargeMetrics } from "./rampintervalchargemetrics";
export declare class RampIntervalMetrics extends SpeakeasyBase {
    description?: string;
    discountTcb?: number;
    discountTcv?: number;
    endDate?: Date;
    grossTcb?: number;
    grossTcv?: number;
    intervalMetrics?: RampIntervalChargeMetrics[];
    name?: string;
    netTcb?: number;
    netTcv?: number;
    startDate?: Date;
}
