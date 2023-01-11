import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PreviewOrderTriggerParamsTriggerEventEnum {
    ContractEffective = "ContractEffective",
    ServiceActivation = "ServiceActivation",
    CustomerAcceptance = "CustomerAcceptance",
    SpecificDate = "SpecificDate"
}
/**
 * Specifies when a charge becomes active.
 *
**/
export declare class PreviewOrderTriggerParams extends SpeakeasyBase {
    specificTriggerDate?: Date;
    triggerEvent?: PreviewOrderTriggerParamsTriggerEventEnum;
}
