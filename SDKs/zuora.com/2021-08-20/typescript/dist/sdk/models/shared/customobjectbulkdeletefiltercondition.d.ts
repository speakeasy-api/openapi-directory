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
**/
export declare class CustomObjectBulkDeleteFilterCondition extends SpeakeasyBase {
    field: string;
    operator: CustomObjectBulkDeleteFilterConditionOperatorEnum;
    value: any;
}
