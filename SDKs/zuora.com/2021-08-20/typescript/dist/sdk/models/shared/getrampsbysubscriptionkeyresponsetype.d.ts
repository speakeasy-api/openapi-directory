import { SpeakeasyBase } from "../../../internal/utils";
import { RampResponse } from "./rampresponse";
export declare class GetRampsBySubscriptionKeyResponseTypeReasons extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class GetRampsBySubscriptionKeyResponseType extends SpeakeasyBase {
    processId?: string;
    ramps?: RampResponse[];
    reasons?: GetRampsBySubscriptionKeyResponseTypeReasons[];
    success?: boolean;
}
