import { SpeakeasyBase } from "../../../internal/utils";
export declare class EvaluatePolicyRequest extends SpeakeasyBase {
    /**
     * Conditions that the Policy needs to satisfy
     */
    context: Record<string, any>;
    /**
     * Scope on which this policy must be evaluated
     */
    resource: string;
}
