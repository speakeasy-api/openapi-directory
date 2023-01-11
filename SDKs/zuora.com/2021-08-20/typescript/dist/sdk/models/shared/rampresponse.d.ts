import { SpeakeasyBase } from "../../../internal/utils";
import { RampChargeResponse } from "./rampchargeresponse";
import { RampIntervalResponse } from "./rampintervalresponse";
export declare class RampResponse extends SpeakeasyBase {
    charges?: RampChargeResponse[];
    description?: string;
    id?: string;
    intervals?: RampIntervalResponse[];
    name?: string;
    number?: string;
    subscriptionNumber?: string;
}
