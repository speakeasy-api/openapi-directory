import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CustomObjectBulkDeleteFilterConditionOperatorEnum {
    Eq = "EQ",
    Gt = "GT",
    Lt = "LT",
    Ge = "GE",
    Le = "LE"
}


// CustomObjectBulkDeleteFilterCondition
/** 
 * Condition evaluated on a single object field
**/
export class CustomObjectBulkDeleteFilterCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator: CustomObjectBulkDeleteFilterConditionOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: any;
}
