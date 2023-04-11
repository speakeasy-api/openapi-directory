import { SpeakeasyBase } from "../../../internal/utils";
export declare class GatewayOption extends SpeakeasyBase {
    /**
     * The name of a gateway-specific parameter. This field is optional, but you must pass value for this field when using the `GatewayOptionData` field. Otherwise, the additional payment gateway parameter will not be mapped.
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * The value of the gateway-specific parameter. This field is optional, but you must pass value for this field when using the `GatewayOptionData` field. Otherwise, the additional payment gateway parameter will not be mapped.
     *
     * @remarks
     *
     */
    value?: string;
}
