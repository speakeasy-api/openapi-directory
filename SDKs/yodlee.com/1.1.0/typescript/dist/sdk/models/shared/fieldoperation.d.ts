import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FieldOperationFieldEnum {
    Amount = "amount",
    Description = "description"
}
export declare enum FieldOperationOperationEnum {
    NumberEquals = "numberEquals",
    NumberLessThan = "numberLessThan",
    NumberLessThanEquals = "numberLessThanEquals",
    NumberGreaterThan = "numberGreaterThan",
    NumberGreaterThanEquals = "numberGreaterThanEquals",
    StringEquals = "stringEquals",
    StringContains = "stringContains"
}
export declare class FieldOperation extends SpeakeasyBase {
    field?: FieldOperationFieldEnum;
    operation?: FieldOperationOperationEnum;
    value?: Record<string, any>;
}
