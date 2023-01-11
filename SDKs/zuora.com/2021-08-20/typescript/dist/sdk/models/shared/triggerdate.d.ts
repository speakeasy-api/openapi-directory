import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TriggerDateNameEnum {
    ContractEffective = "ContractEffective",
    ServiceActivation = "ServiceActivation",
    CustomerAcceptance = "CustomerAcceptance"
}
export declare class TriggerDate extends SpeakeasyBase {
    name?: TriggerDateNameEnum;
    triggerDate?: Date;
}
