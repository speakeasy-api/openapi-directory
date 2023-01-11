import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FieldOperationFieldEnum {
    Amount = "amount",
    Description = "description"
}

export enum FieldOperationOperationEnum {
    NumberEquals = "numberEquals",
    NumberLessThan = "numberLessThan",
    NumberLessThanEquals = "numberLessThanEquals",
    NumberGreaterThan = "numberGreaterThan",
    NumberGreaterThanEquals = "numberGreaterThanEquals",
    StringEquals = "stringEquals",
    StringContains = "stringContains"
}


export class FieldOperation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: FieldOperationFieldEnum;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: FieldOperationOperationEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Record<string, any>;
}
