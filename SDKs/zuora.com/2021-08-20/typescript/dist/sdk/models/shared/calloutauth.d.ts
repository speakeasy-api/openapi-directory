import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If requiredAuth is true, this object is required.
 */
export declare class CalloutAuth extends SpeakeasyBase {
    /**
     * The domain of the callout auth.
     */
    domain?: string;
    /**
     * The field is required when requiredAuth is true.
     */
    password?: string;
    /**
     * Set this field to `true` if you want to enable the preemptive authentication.
     */
    preemptive?: boolean;
    /**
     * The field is required when requiredAuth is true.
     */
    username?: string;
}
