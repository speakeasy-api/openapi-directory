import { SpeakeasyBase } from "../../../internal/utils";
import { RampResponse } from "./rampresponse";
export declare class GetRampByRampNumberResponseTypeReasons extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class GetRampByRampNumberResponseType extends SpeakeasyBase {
    processId?: string;
    ramp?: RampResponse;
    reasons?: GetRampByRampNumberResponseTypeReasons[];
    success?: boolean;
}
