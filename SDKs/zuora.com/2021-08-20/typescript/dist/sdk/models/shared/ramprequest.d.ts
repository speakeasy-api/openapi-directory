import { SpeakeasyBase } from "../../../internal/utils";
import { RampChargeRequest } from "./rampchargerequest";
import { RampIntervalRequest } from "./rampintervalrequest";
/**
 * Container of the ramp definitions. It is used to create, update, or remove the ramp definition for the new subscription.
 *
**/
export declare class RampRequest extends SpeakeasyBase {
    charges?: RampChargeRequest[];
    delete?: boolean;
    description?: string;
    intervals?: RampIntervalRequest[];
    name?: string;
}
