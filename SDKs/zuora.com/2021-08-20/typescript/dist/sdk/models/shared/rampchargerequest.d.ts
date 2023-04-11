import { SpeakeasyBase } from "../../../internal/utils";
export declare class RampChargeRequest extends SpeakeasyBase {
    /**
     * The number of the rate plan charge.
     */
    chargeNumber?: string;
    /**
     * Unique identifier for the charge. This identifier enables you to refer to the charge before the charge has an internal identifier in Zuora.
     *
     * @remarks
     *
     */
    uniqueToken?: string;
}
