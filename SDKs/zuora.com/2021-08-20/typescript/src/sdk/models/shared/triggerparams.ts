import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TriggerParamsTriggerEventEnum {
    ContractEffective = "ContractEffective",
    ServiceActivation = "ServiceActivation",
    CustomerAcceptance = "CustomerAcceptance"
}


// TriggerParams
/** 
 * Specifies when a charge becomes active.
 * 
**/
export class TriggerParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=specificTriggerDate" })
  specificTriggerDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=triggerEvent" })
  triggerEvent?: TriggerParamsTriggerEventEnum;
}
