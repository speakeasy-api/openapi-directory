import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreateOrderUpdateProductTriggerParamsTriggerEventEnum {
    ContractEffective = "ContractEffective",
    ServiceActivation = "ServiceActivation",
    CustomerAcceptance = "CustomerAcceptance",
    SpecificDate = "SpecificDate"
}


// CreateOrderUpdateProductTriggerParams
/** 
 * Specifies when a charge becomes active.
 * 
**/
export class CreateOrderUpdateProductTriggerParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=specificTriggerDate" })
  specificTriggerDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=triggerEvent" })
  triggerEvent?: CreateOrderUpdateProductTriggerParamsTriggerEventEnum;
}
