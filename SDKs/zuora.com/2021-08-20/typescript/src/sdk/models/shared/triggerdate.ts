import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TriggerDateNameEnum {
    ContractEffective = "ContractEffective",
    ServiceActivation = "ServiceActivation",
    CustomerAcceptance = "CustomerAcceptance"
}


export class TriggerDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: TriggerDateNameEnum;

  @SpeakeasyMetadata({ data: "json, name=triggerDate" })
  triggerDate?: Date;
}
