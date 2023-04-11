import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CustomObjectBulkDeleteFilterConditionOperatorEnum {
    Eq = "EQ",
    Gt = "GT",
    Lt = "LT",
    Ge = "GE",
    Le = "LE"
}
/**
 * Condition evaluated on a single object field
 */
export declare class CustomObjectBulkDeleteFilterCondition extends SpeakeasyBase {
    /**
     * The object field that is evaluated. Only filterable fields can be evaluated in the filter.
     */
    field: string;
    operator: CustomObjectBulkDeleteFilterConditionOperatorEnum;
    /**
     * The value that the filterable `field` is evaluated against in the filter. The data type of `value` is consistent with that of the `field`.
     */
    value: any;
}
