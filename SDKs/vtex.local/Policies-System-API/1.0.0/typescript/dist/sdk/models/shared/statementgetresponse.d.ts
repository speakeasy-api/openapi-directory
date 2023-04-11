import { SpeakeasyBase } from "../../../internal/utils";
export declare class StatementGetResponseConditionConditions extends SpeakeasyBase {
    /**
     * These are the conditions the actions can have. The possible values are `[]`, `stringEquals`, and `numericGreaterThan`
     */
    conditions?: string[];
    /**
     * The element that will define what the policy will influence. This field has the possible values `skuId`, `brandId`, `discountPercentage`
     */
    key?: string;
    /**
     * The action of the condition. This operation possible values are `None`, `stringEquals`, `stringEqualsIgnoreCase`, `numericEquals`, `numericLessThan`, `numericLessThanEquals`,   `numericGreaterThan`, `numericGreaterThanEquals`, `bool`, `not`, `or`, `and`, `dateTimeUtcGreaterThan`, `dateTimeUtcLessThan`, and `between`
     */
    operation?: string;
    /**
     * Value of the key
     */
    values?: string[];
}
/**
 * Condition to activate this policy. This object can have a maximum of ten recursive conditions
 */
export declare class StatementGetResponseCondition extends SpeakeasyBase {
    /**
     * List of conditions that will activate the policy
     */
    conditions?: StatementGetResponseConditionConditions[];
}
export declare class StatementGetResponse extends SpeakeasyBase {
    /**
     * Actions that the Policy will execute
     */
    actions?: any[];
    /**
     * Condition to activate this policy. This object can have a maximum of ten recursive conditions
     */
    condition?: StatementGetResponseCondition;
    /**
     * This field is not functional at the moment. To create a correct request, fill the field with `Allow`
     */
    effect: string;
    /**
     * This operation will determine if all the conditions need to be valid or at least one of them, if the conditions array is not empty.  The possible values to these fields are `None`, `stringEquals`, `stringEqualsIgnoreCase`, `numericEquals`, `numericLessThan`, `numericLessThanEquals`,   `numericGreaterThan`, `numericGreaterThanEquals`, `bool`, `not`, `or`, `and`, `dateTimeUtcGreaterThan`, `dateTimeUtcLessThan`, and `between`
     */
    operation?: string;
    /**
     * Scope on which this policy must be evaluated
     */
    resource?: string;
}
