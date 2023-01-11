import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreateOrderTriggerParamsTriggerEventEnum {
    ContractEffective = "ContractEffective",
    ServiceActivation = "ServiceActivation",
    CustomerAcceptance = "CustomerAcceptance",
    SpecificDate = "SpecificDate"
}


// CreateOrderTriggerParams
/** 
 * Specifies when a charge becomes active.
 * 
**/
export class CreateOrderTriggerParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=specificTriggerDate" })
  specificTriggerDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=triggerEvent" })
  triggerEvent?: CreateOrderTriggerParamsTriggerEventEnum;
}
