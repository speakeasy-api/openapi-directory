import { SpeakeasyBase } from "../../../internal/utils";
import { OrderRampIntervalMetrics } from "./orderrampintervalmetrics";
export declare class OrderRampMetrics extends SpeakeasyBase {
    description?: string;
    discountTcb?: number;
    discountTcv?: number;
    grossTcb?: number;
    grossTcv?: number;
    intervals?: OrderRampIntervalMetrics[];
    name?: string;
    netTcb?: number;
    netTcv?: number;
    number?: string;
}
