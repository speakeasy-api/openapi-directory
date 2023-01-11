import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateOrderTriggerParamsTriggerEventEnum {
    ContractEffective = "ContractEffective",
    ServiceActivation = "ServiceActivation",
    CustomerAcceptance = "CustomerAcceptance",
    SpecificDate = "SpecificDate"
}
/**
 * Specifies when a charge becomes active.
 *
**/
export declare class CreateOrderTriggerParams extends SpeakeasyBase {
    specificTriggerDate?: Date;
    triggerEvent?: CreateOrderTriggerParamsTriggerEventEnum;
}
