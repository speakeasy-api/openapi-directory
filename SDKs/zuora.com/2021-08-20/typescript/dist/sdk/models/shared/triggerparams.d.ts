import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TriggerParamsTriggerEventEnum {
    ContractEffective = "ContractEffective",
    ServiceActivation = "ServiceActivation",
    CustomerAcceptance = "CustomerAcceptance"
}
/**
 * Specifies when a charge becomes active.
 *
**/
export declare class TriggerParams extends SpeakeasyBase {
    specificTriggerDate?: Date;
    triggerEvent?: TriggerParamsTriggerEventEnum;
}
