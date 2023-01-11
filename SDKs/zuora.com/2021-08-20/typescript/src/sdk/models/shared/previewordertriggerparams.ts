import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PreviewOrderTriggerParamsTriggerEventEnum {
    ContractEffective = "ContractEffective",
    ServiceActivation = "ServiceActivation",
    CustomerAcceptance = "CustomerAcceptance",
    SpecificDate = "SpecificDate"
}


// PreviewOrderTriggerParams
/** 
 * Specifies when a charge becomes active.
 * 
**/
export class PreviewOrderTriggerParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=specificTriggerDate" })
  specificTriggerDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=triggerEvent" })
  triggerEvent?: PreviewOrderTriggerParamsTriggerEventEnum;
}
