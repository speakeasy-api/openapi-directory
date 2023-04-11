import { SpeakeasyBase } from "../../../internal/utils";
import { RampChargeRequest } from "./rampchargerequest";
import { RampIntervalRequest } from "./rampintervalrequest";
/**
 * Container of the ramp definitions. It is used to create, update, or remove the ramp definition for the new subscription.
 *
 * @remarks
 *
 */
export declare class RampRequest extends SpeakeasyBase {
    /**
     * Container for the rate plan charges that are considered as part of the ramp deal.
     *
     * @remarks
     *
     * * If this field is not specified, all the one-time and recurring regular charges of the new subscription are automatically considered as part of the ramp deal.
     * * If this field is specified, either 'chargeNumber' or 'uniqueToken' must be specified.
     *
     */
    charges?: RampChargeRequest[];
    /**
     * Whether to remove the ramp definition from the new subscription. If you want to remove the ramp definition, this field is the only required field for the `ramp` object.
     *
     * @remarks
     *
     */
    delete?: boolean;
    /**
     * The short description of the ramp.
     */
    description?: string;
    /**
     * Container for the intervals that the ramp is split into in its timeline.
     *
     * @remarks
     *
     * It is required when you want to create or update the ramp definition. The ramp intervals cannot have any overlap or gap between each other.
     *
     */
    intervals?: RampIntervalRequest[];
    /**
     * The name of the ramp.
     */
    name?: string;
}
